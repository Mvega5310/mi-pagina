import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    // Enable source maps for debugging in production
    sourcemap: false,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
          output: {
            manualChunks: (id) => {
              // Don't apply manual chunks for SSR builds
              if (process.env.npm_lifecycle_event?.includes('server')) {
                return undefined
              }
              
              if (id.includes('node_modules')) {
                if (id.includes('react') || id.includes('react-dom')) {
                  return 'react-vendor'
                }
                if (id.includes('react-router')) {
                  return 'router-vendor'
                }
                if (id.includes('i18n') || id.includes('react-i18next')) {
                  return 'i18n-vendor'
                }
                if (id.includes('framer-motion')) {
                  return 'ui-vendor'
                }
                if (id.includes('leaflet')) {
                  return 'map-vendor'
                }
              }
            },
        // Optimize asset naming for caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-i18next', 'i18next']
  },
  // Server configuration for development
  server: {
    port: 3000,
    host: true
  },
  // Preview configuration
  preview: {
    port: 4173,
    host: true
  }
})