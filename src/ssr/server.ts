import express from 'express'
// removed static Vite import to avoid requiring dev dependency in production
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import compression from 'compression'
import sirv from 'sirv'
import { Buffer } from 'node:buffer'

// Override console.error specifically to handle [object Object] errors
const originalConsoleError = console.error;
console.error = function(...args: any[]) {
  const processedArgs = args.map(arg => {
    if (typeof arg === 'string' && arg === '[object Object]') {
      return 'Error: Invalid object serialization';
    }
    if (arg && typeof arg === 'object' && arg.toString && arg.toString() === '[object Object]') {
      return arg.message || arg.stack || JSON.stringify(arg, Object.getOwnPropertyNames(arg)) || 'Error object';
    }
    return arg;
  });
  originalConsoleError.apply(console, processedArgs);
};

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const isProduction = process.env.NODE_ENV === 'production'
const port = Number(process.env.PORT) || 3000
const base = process.env.BASE || '/'
// Root directory is available via process.cwd() when needed
// Template HTML is loaded dynamically in the SSR handler

async function createServer(
  serverRoot = process.cwd(),
  isProd = isProduction,
  hmrPort?: number
) {
  const app = express()

  // Enable enhanced compression for all responses
  app.use(compression({
    level: 6, // Optimal balance between compression and speed
    threshold: 1024, // Only compress files larger than 1KB
    filter: (req, res) => {
      // Don't compress responses with this request header
      if (req.headers['x-no-compression']) {
        return false
      }
      // Use compression filter function
      return compression.filter(req, res)
    }
  }))

  // CORS configuration
  app.use((req, res, next) => {
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:5173',
      'https://friendsoft.com',
      'https://www.friendsoft.com'
    ]
    const origin = req.headers.origin
    
    if (allowedOrigins.includes(origin as string)) {
      res.setHeader('Access-Control-Allow-Origin', origin as string)
    }
    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Max-Age', '86400') // 24 hours
    
    if (req.method === 'OPTIONS') {
      res.status(200).end()
      return
    }
    
    next()
  })

  // Rate limiting - More permissive for development
  const rateLimitMap = new Map()
  app.use((req, res, next) => {
    const clientIP = req.ip || req.connection.remoteAddress || 'unknown'
    const now = Date.now()
    const windowMs = 5 * 60 * 1000 // 5 minutes (reduced from 15)
    const maxRequests = 1000 // requests per window (increased from 100)
    
    if (!rateLimitMap.has(clientIP)) {
      rateLimitMap.set(clientIP, { count: 1, resetTime: now + windowMs })
    } else {
      const clientData = rateLimitMap.get(clientIP)
      
      if (now > clientData.resetTime) {
        // Reset the window
        rateLimitMap.set(clientIP, { count: 1, resetTime: now + windowMs })
      } else {
        clientData.count++
        
        // Check if limit exceeded (skip for health endpoint and static assets)
        if (req.path !== '/health' && !req.path.startsWith('/assets/')) {
          if (clientData.count > maxRequests) {
            res.status(429).json({ error: 'Too many requests' })
            return
          }
        }
      }
    }
    
    next()
  })

  // Security headers
  app.use((req, res, next) => {
    // Prevent MIME type sniffing
    res.setHeader('X-Content-Type-Options', 'nosniff')
    // Prevent clickjacking
    res.setHeader('X-Frame-Options', 'DENY')
    // XSS protection (legacy but still useful)
    res.setHeader('X-XSS-Protection', '1; mode=block')
    // Referrer policy
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
    // Content Security Policy
    res.setHeader('Content-Security-Policy', 
      "default-src 'self' https://friendsoft.com https://www.google.com; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "font-src 'self' https://fonts.gstatic.com; " +
      "img-src 'self' data: https:; " +
      "connect-src 'self' https:; " +
      "frame-ancestors 'none'; " +
      "base-uri 'self'; " +
      "form-action 'self';"
    )
    // Strict Transport Security (HTTPS only)
    if (req.secure || req.headers['x-forwarded-proto'] === 'https') {
      res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
    }
    // Permissions Policy
    res.setHeader('Permissions-Policy', 
      'camera=(), microphone=(), geolocation=(), payment=(), usb=()'
    )
    next()
  })

  // Health endpoint for Docker/K8s
  app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok' })
  })

  let vite: {
    middlewares: express.RequestHandler
    transformIndexHtml: (_url: string, _template: string) => Promise<string>
    ssrLoadModule: (_path: string) => Promise<Record<string, unknown>>
    ssrFixStacktrace: (_err: Error) => void
  }
  let template: string
  let ssrManifest: Record<string, string[]> | undefined

  if (!isProd) {
    // Development mode
    const { createServer: createViteServer } = await import('vite')
    vite = await createViteServer({
      root: serverRoot,
      logLevel: 'info',
      server: {
        middlewareMode: true,
        watch: {
          usePolling: true,
          interval: 100
        },
        hmr: {
          port: hmrPort
        }
      },
      appType: 'custom',
      base
    })
    app.use(vite!.middlewares)

    template = fs.readFileSync(
      path.resolve(__dirname, 'index.html'),
      'utf-8'
    )
  } else {
    // Production mode
    const templatePath = path.resolve(serverRoot, 'dist/client/index.html')
    template = fs.readFileSync(templatePath, 'utf-8')
    
    // Serve static files with optimized caching and compression
    app.use(
      base,
      sirv(path.resolve(serverRoot, 'dist/client'), {
        extensions: [],
        gzip: true,
        brotli: true,
        dev: false,
        setHeaders: (res, pathname) => {
          // Set correct MIME types
          if (pathname.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css; charset=utf-8')
          } else if (pathname.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript; charset=utf-8')
          }
          // Performance headers for all static files
          res.setHeader('X-Content-Type-Options', 'nosniff')
          
          // Cache static assets for 1 year with immutable flag
          if (pathname.includes('/assets/')) {
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
            res.setHeader('ETag', 'strong')
            // Add preload hints for critical assets
            if (pathname.includes('.css')) {
              res.setHeader('Link', `<${pathname}>; rel=preload; as=style`)
            }
          } else if (pathname.match(/\.(js|css)$/)) {
            // Cache JS/CSS files for 1 year
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
            res.setHeader('ETag', 'strong')
          } else if (pathname.match(/\.(woff2?|ttf|eot)$/)) {
            // Cache fonts for 1 year
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
            res.setHeader('ETag', 'strong')
          } else if (pathname.match(/\.(svg|png|jpg|jpeg|gif|webp|avif|ico)$/)) {
            // Cache images for 1 month
            res.setHeader('Cache-Control', 'public, max-age=2592000')
            res.setHeader('ETag', 'strong')
          } else if (pathname.match(/\.(html|xml|txt|json)$/)) {
            // Cache HTML and other text files for 1 hour with revalidation
            res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate')
          } else {
            // Default cache for other files
            res.setHeader('Cache-Control', 'public, max-age=300')
          }
        }
      })
    )

    // Load SSR manifest for production
    try {
      ssrManifest = JSON.parse(
        fs.readFileSync(path.resolve(serverRoot, 'dist/server/entry/ssr-manifest.json'), 'utf-8')
      )
    } catch {
      console.warn('SSR manifest not found, continuing without it')
    }
  }

  // Error handling middleware
  app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    if (isProd) {
      console.error('Server error:', err.message || err.toString())
      if (typeof res.status === 'function') {
        res.status(500).json({ error: 'Internal Server Error' })
      } else {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ error: 'Internal Server Error' }))
      }
    } else {
      throw err
    }
  })

  // SSR handler
  app.get(/.*/, async (req, res) => {
    const requestUrl = req.originalUrl.replace(base, '')

    try {
      let render: (_url: string, _ssrManifest?: Record<string, string[]>) => Promise<{ html: string; head: string }>
      let html = template

      if (!isProd) {
        // Development: transform template and load module
        html = await vite!.transformIndexHtml(requestUrl, template)
        const module = await vite!.ssrLoadModule('/src/ssr/entry-server.tsx') as { render: (_url: string, _ssrManifest?: Record<string, unknown>) => Promise<{ html: string; head: string }> }
        render = module.render
      } else {
        // Production: load pre-built module
        try {
          const candidates: string[] = []

          // 1) Default CLI outDir: dist/server/entry (no hashed file name by default)
          const entryDirDefault = path.resolve(serverRoot, 'dist/server/entry')
          if (fs.existsSync(entryDirDefault)) {
            // explicit name (no hash)
            candidates.push(path.resolve(entryDirDefault, 'entry-server.js'))
            // any hashed variations in same dir
            try {
              const files = fs.readdirSync(entryDirDefault)
              candidates.push(
                ...files
                  .filter(f => /^entry-server([.-][A-Za-z0-9_-]+)?\.js$/.test(f)) // allow both entry-server-<hash>.js and entry-server.<hash>.js
                  .map(f => path.resolve(entryDirDefault, f))
              )
            } catch {}
          }

          // 2) Nested assets path: dist/server/entry/assets/js
          const entryDirAssets = path.resolve(serverRoot, 'dist/server/entry/assets/js')
          if (fs.existsSync(entryDirAssets)) {
            try {
              const files = fs.readdirSync(entryDirAssets)
              candidates.push(
                ...files
                  .filter(f => f.startsWith('entry-server') && f.endsWith('.js'))
                  .map(f => path.resolve(entryDirAssets, f))
              )
            } catch {}
          }

          // Deduplicate and pick first existing
          const seen = new Set<string>()
          const finalFile = candidates.filter(p => {
            if (seen.has(p)) return false
            seen.add(p)
            return fs.existsSync(p)
          })[0]

          if (!finalFile) {
            throw new Error('No entry-server bundle found. Looked in dist/server/entry and dist/server/entry/assets/js')
          }

          // Convert Windows paths to file:// URLs properly
          const normalizedPath = finalFile.replace(/\\/g, '/').replace(/^([A-Za-z]):\//, '/$1:/')
          const importedModule = await import(`file://${normalizedPath}`)
          render = (importedModule as any).render
        } catch (error) {
          console.error('Error loading SSR module:', (error as Error).message || (error as Error).toString())
          throw new Error('Failed to load SSR module. Please ensure the SSR build completed successfully.')
        }
      }

      // Render the app HTML
      const { html: appHtml, head } = await render(requestUrl, ssrManifest)

      // Replace placeholder(s) with the rendered HTML
      const outletPlaceholder = '<!--ssr-outlet-->'
      const appHtmlPlaceholder = '<!--app-html-->'
      if (html.includes(outletPlaceholder)) {
        html = html.replace(outletPlaceholder, appHtml)
      } else if (html.includes(appHtmlPlaceholder)) {
        html = html.replace(appHtmlPlaceholder, appHtml)
      } else {
        html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      }
      
      // Inject helmet meta tags if available
      if (head) {
        html = html.replace('</head>', `${head}</head>`)
      }

      // Set optimized response headers
      res.status(200).set({ 
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=0, must-revalidate',
        'ETag': `W/"${Buffer.from(html, 'utf-8').length.toString(16)}"`,
        'Vary': 'Accept-Encoding'
      }).end(html)
    } catch (error: unknown) {
      const e = error as Error
      if (!isProd && vite) {
        vite.ssrFixStacktrace(e)
      }
      console.error('SSR Error:', e.message || e.toString())
      
      if (e.message?.includes('404')) {
        res.status(404).end('Page not found')
      } else {
        const errorMessage = isProd ? 'Internal Server Error' : (e.message || e.toString() || 'Unknown error')
        res.status(500).end(errorMessage)
      }
    }
  })

  return { app, vite: vite! }
}

// Start server in both development and production
createServer().then(({ app }) => {
  const server = app.listen(port, () => {
    console.log(`SSR server running at http://localhost:${port}`)
    console.log(`Environment: ${isProduction ? 'production' : 'development'}`)
  })
  
  // Add error handler to prevent [object Object] logging
  server.on('error', (err: Error) => {
    console.error('Server error:', err.message || err.toString() || 'Unknown server error')
  })
  
  // Handle uncaught exceptions in Express
  // app.on('error', (err: Error) => {
  //   console.error('Express app error:', err.message || err.toString() || 'Unknown app error')
  // })
}).catch((err: Error) => {
  console.error('Failed to start server:', err.message || err.toString())
  process.exit(1)
})

export { createServer }