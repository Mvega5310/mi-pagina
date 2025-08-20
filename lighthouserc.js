module.exports = {
  ci: {
    collect: {
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/services',
        'http://localhost:3000/projects',
        'http://localhost:3000/contact'
      ],
      startServerCommand: 'npm run preview:ssr',
      startServerReadyPattern: 'Local:',
      startServerReadyTimeout: 30000,
      numberOfRuns: 3
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.98 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.95 }],
        'categories:pwa': ['warn', { minScore: 0.8 }],
        
        // Core Web Vitals
        'first-contentful-paint': ['error', { maxNumericValue: 1800 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['error', { maxNumericValue: 300 }],
        'speed-index': ['error', { maxNumericValue: 3400 }],
        
        // Performance metrics
        'interactive': ['error', { maxNumericValue: 3800 }],
        'max-potential-fid': ['error', { maxNumericValue: 130 }],
        
        // Resource optimization
        'unused-css-rules': ['warn', { maxLength: 2 }],
        'unused-javascript': ['warn', { maxLength: 2 }],
        'modern-image-formats': ['error', { maxLength: 0 }],
        'uses-optimized-images': ['error', { maxLength: 0 }],
        'uses-webp-images': ['error', { maxLength: 0 }],
        'uses-responsive-images': ['error', { maxLength: 0 }],
        
        // Caching and compression
        'uses-long-cache-ttl': ['warn', { maxLength: 2 }],
        'uses-text-compression': ['error', { maxLength: 0 }],
        
        // Security
        'is-on-https': ['error', { maxLength: 0 }],
        'redirects-http': ['error', { maxLength: 0 }],
        
        // Accessibility
        'color-contrast': ['error', { maxLength: 0 }],
        'image-alt': ['error', { maxLength: 0 }],
        'label': ['error', { maxLength: 0 }],
        'link-name': ['error', { maxLength: 0 }],
        
        // SEO
        'document-title': ['error', { maxLength: 0 }],
        'meta-description': ['error', { maxLength: 0 }],
        'http-status-code': ['error', { maxLength: 0 }],
        'crawlable-anchors': ['error', { maxLength: 0 }]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    },
    server: {
      port: 9001,
      storage: './lighthouse-reports'
    }
  }
};