import express from 'express'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import compression from 'compression'
import sirv from 'sirv'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000
const base = process.env.BASE || '/'

async function createServer(
  serverRoot = process.cwd(),
  isProd = isProduction,
  hmrPort?: number
) {
  const app = express()

  // Enable compression
  app.use(compression())

  if (isProd) {
    // In production, serve static files from dist/client
    app.use(
      sirv(path.resolve(serverRoot, 'dist/client'), {
        extensions: [],
        gzip: true,
        brotli: true,
        single: true // SPA mode
      })
    )
  } else {
    // Development mode with Vite
    const { createServer: createViteServer } = await import('vite')
    
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: { port: hmrPort } },
      appType: 'custom',
      base
    })

    app.use(vite.middlewares)
  }

  // Health check endpoint
  app.get('/health', (req, res) => {
    res.status(200).json({ 
      status: 'ok', 
      timestamp: new Date().toISOString()
    })
  })

  return { app }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  // Start server if this file is run directly
  createServer().then(({ app }) => {
    app.listen(Number(port), '0.0.0.0', () => {
      console.log(`🚀 Server running at http://0.0.0.0:${port}`)
    })
  }).catch((err: Error) => {
    console.error('Failed to start server:', err.message || err.toString())
  })
}

export { createServer }