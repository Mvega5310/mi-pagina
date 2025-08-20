import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      fastRefresh: true,
      // Optimize JSX runtime
      jsxRuntime: 'automatic'
    })
  ],
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
    // Target modern browsers for better optimization
    target: 'esnext',
    // Enable module preload polyfill
    modulePreload: {
      polyfill: true
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Don't apply manual chunks for SSR builds
          if (process.env.npm_lifecycle_event?.includes('server')) {
            return undefined
          }
          
          if (id.includes('node_modules')) {
            // Core React libraries
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            // Router libraries
            if (id.includes('react-router') || id.includes('react-router-dom')) {
              return 'router-vendor'
            }
            // Internationalization libraries
            if (id.includes('i18n') || id.includes('react-i18next')) {
              return 'i18n-vendor'
            }
            // UI and animation libraries
            if (id.includes('framer-motion') || id.includes('react-helmet')) {
              return 'ui-vendor'
            }
            // Map libraries
            if (id.includes('leaflet') || id.includes('react-leaflet')) {
              return 'map-vendor'
            }
            // Utility libraries
            if (id.includes('lodash') || id.includes('date-fns') || id.includes('axios')) {
              return 'utils-vendor'
            }
            // Other vendor libraries
            return 'vendor'
          }
          
          // Split pages into separate chunks
          if (id.includes('/pages/')) {
            const pageName = id.split('/pages/')[1].split('.')[0].toLowerCase()
            return `page-${pageName}`
          }
          
          // Split components by feature
          if (id.includes('/components/home/')) {
            return 'home-components'
          }
          if (id.includes('/components/')) {
            return 'shared-components'
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
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-i18next',
      'i18next',
      'react-helmet-async',
      'framer-motion'
    ],
    exclude: [
      // Exclude large libraries that should be loaded dynamically
      'leaflet',
      'react-leaflet'
    ],
    // Force re-optimization on dependency changes
    force: true
  },

  // Enable tree shaking
  esbuild: {
    treeShaking: true,
    // Remove unused imports
    drop: ['console', 'debugger'],
    // Optimize for production
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true
  },
  
  // Enable experimental features for better performance
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'js') {
        return { js: `/${filename}` }
      } else {
        return { relative: true }
      }
    }
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