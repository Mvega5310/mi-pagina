import express from 'express'
import { createServer as createViteServer } from 'vite'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import compression from 'compression'
import sirv from 'sirv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'
const root = process.cwd()
const templateHtml = isProduction
  ? fs.readFileSync(path.resolve(root, 'dist/client/index.html'), 'utf-8')
  : fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')

async function createServer(
  serverRoot = process.cwd(),
  isProd = isProduction,
  hmrPort?: number
) {
  const app = express()

  // Enable compression for all responses
  app.use(compression())

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

  // Basic rate limiting
  const rateLimitMap = new Map()
  app.use((req, res, next) => {
    const clientIP = req.ip || req.connection.remoteAddress || 'unknown'
    const now = Date.now()
    const windowMs = 15 * 60 * 1000 // 15 minutes
    const maxRequests = 100 // requests per window
    
    if (!rateLimitMap.has(clientIP)) {
      rateLimitMap.set(clientIP, { count: 1, resetTime: now + windowMs })
    } else {
      const clientData = rateLimitMap.get(clientIP)
      
      if (now > clientData.resetTime) {
        // Reset the window
        rateLimitMap.set(clientIP, { count: 1, resetTime: now + windowMs })
      } else {
        clientData.count++
        
        if (clientData.count > maxRequests) {
          res.status(429).json({ error: 'Too many requests' })
          return
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
      "default-src 'self'; " +
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

  let vite: any
  let template: string
  let ssrManifest: any

  if (!isProd) {
    // Development mode
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
    app.use(vite.middlewares)

    template = fs.readFileSync(
      path.resolve(__dirname, 'index.html'),
      'utf-8'
    )
  } else {
    // Production mode
    const templatePath = path.resolve(serverRoot, 'dist/client/index.html')
    template = fs.readFileSync(templatePath, 'utf-8')
    
    // Serve static files with long-term caching
    app.use(
      base,
      sirv(path.resolve(serverRoot, 'dist/client'), {
        extensions: [],
        gzip: true,
        brotli: true,
        setHeaders: (res, pathname) => {
          // Cache static assets for 1 year
          if (pathname.includes('/assets/')) {
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
            res.setHeader('ETag', 'strong')
          } else if (pathname.match(/\.(js|css|woff2?|ttf|eot|svg|png|jpg|jpeg|gif|webp|ico)$/)) {
            // Cache other static files for 1 week
            res.setHeader('Cache-Control', 'public, max-age=604800')
            res.setHeader('ETag', 'strong')
          } else if (pathname.match(/\.(html|xml|txt|json)$/)) {
            // Cache HTML and other text files for 1 hour
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
        fs.readFileSync(path.resolve(serverRoot, 'dist/client/ssr-manifest.json'), 'utf-8')
      )
    } catch (e) {
      console.warn('SSR manifest not found, continuing without it')
    }
  }

  // Error handling middleware
  app.use((err: any, req: any, res: any, next: any) => {
    if (isProd) {
      console.error('Server error:', err)
      res.status(500).json({ error: 'Internal Server Error' })
    } else {
      next(err)
    }
  })

  // SSR handler
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl.replace(base, '')

    try {
      let render: any
      let html = template

      if (!isProd) {
        // Development: transform template and load module
        html = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/ssr/entry-server.tsx')).render
      } else {
        // Production: load pre-built module
        const serverDir = path.resolve(serverRoot, 'dist/server/assets/js')
        const entryFile = fs.readdirSync(serverDir).find(file => file.startsWith('entry-server-'))
        if (!entryFile) {
          throw new Error('Entry server file not found in dist/server/assets/js')
        }
        render = (await import(path.resolve(serverDir, entryFile))).render
      }

      // Render the app HTML
       const { html: appHtml, helmet } = await render(url, ssrManifest)

       // Replace the placeholder with the rendered HTML
       html = html.replace('<!--ssr-outlet-->', appHtml)
       
       // Inject helmet meta tags if available
       if (helmet && helmet.helmet) {
         const { title, meta, link, script } = helmet.helmet
         if (title) html = html.replace('<title></title>', title.toString())
         if (meta) html = html.replace('</head>', `${meta.toString()}</head>`)
         if (link) html = html.replace('</head>', `${link.toString()}</head>`)
         if (script) html = html.replace('</head>', `${script.toString()}</head>`)
       }

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e: any) {
      if (!isProd && vite) {
        vite.ssrFixStacktrace(e)
      }
      console.error('SSR Error:', e)
      
      if (e.message?.includes('404')) {
        res.status(404).end('Page not found')
      } else {
        res.status(500).end(isProd ? 'Internal Server Error' : e.message)
      }
    }
  })

  return { app, vite }
}

// Start server in both development and production
createServer().then(({ app }) => {
  app.listen(port, () => {
    console.log(`SSR server running at http://localhost:${port}`)
    console.log(`Environment: ${isProduction ? 'production' : 'development'}`)
  })
}).catch(err => {
  console.error('Failed to start server:', err)
  process.exit(1)
})

export { createServer }