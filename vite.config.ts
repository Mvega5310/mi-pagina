import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh
      // Fast Refresh is enabled by default in Vite
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
    // Disable source maps for production
    sourcemap: false,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Target modern browsers for better optimization
    target: 'esnext',
    // Disable module preload polyfill for better performance
    modulePreload: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Don't apply manual chunks for SSR builds
          if (process.env['npm_lifecycle_event']?.includes('server')) {
            return undefined
          }
          
          if (id.includes('node_modules')) {
            // Core React libraries - keep together for better caching
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            // Router libraries
            if (id.includes('react-router')) {
              return 'router-vendor'
            }
            // Internationalization libraries
            if (id.includes('i18n')) {
              return 'i18n-vendor'
            }
            // UI libraries
            if (id.includes('framer-motion')) {
              return 'animation-vendor'
            }
            if (id.includes('react-helmet')) {
              return 'seo-vendor'
            }
            // Map libraries - separate chunk for lazy loading
            if (id.includes('leaflet')) {
              return 'map-vendor'
            }
            // Icons
            if (id.includes('@heroicons')) {
              return 'icons-vendor'
            }
            // Other vendor libraries
            return 'vendor'
          }
          
          // Split pages into separate chunks for better code splitting
          if (id.includes('/pages/')) {
            const pageName = id.split('/pages/')[1].split('.')[0].toLowerCase()
            return `page-${pageName}`
          }
          
          // Split components by feature for better caching
          if (id.includes('/components/')) {
            if (id.includes('/components/home/')) {
              return 'home-components'
            }
            if (id.includes('/components/contact/')) {
              return 'contact-components'
            }
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
    // Enhanced minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.warn'],
        passes: 2,
        unsafe_arrows: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
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
  },
  // SSR configuration
  ssr: {
    // Handle CommonJS modules properly in SSR
    noExternal: ['react-helmet-async'],
    // Optimize SSR dependencies
    optimizeDeps: {
      include: [
        'react',
        'react-dom/server',
        'react-router-dom',
        'react-i18next',
        'i18next',
        'react-helmet-async'
      ]
    },
    // Configure SSR build outputs
    target: 'node',
    format: 'esm',
    rollupOptions: {
      input: {
        entry: 'src/ssr/entry-server.tsx',
        static: 'src/ssr/start-server.ts'
      },
      output: {
        entryFileNames: (chunkInfo) => {
          return `${chunkInfo.name}.js`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        dir: 'dist/server'
      }
    }
  }
})