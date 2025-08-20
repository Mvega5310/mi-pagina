import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from '../App'
import i18n from '../i18n'

export function render(url: string) {
  try {
    // Ensure i18n is initialized with a default language for SSR
    if (!i18n.isInitialized) {
      i18n.init()
    }
    
    // Set a default language for SSR to ensure consistent rendering
    i18n.changeLanguage('en')
    
    const helmetContext = {}
    
    const html = ReactDOMServer.renderToString(
      <React.StrictMode>
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </HelmetProvider>
      </React.StrictMode>
    )
    return { html, helmet: helmetContext }
  } catch (error) {
    console.error('SSR render error:', error)
    // Return a fallback HTML structure
    return {
      html: '<div id="root">Error rendering page</div>'
    }
  }
}

// Export for Vite SSR
export default render