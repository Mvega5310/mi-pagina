import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from '../App'
import i18n from '../i18n'

export async function render(url: string, _manifest?: Record<string, unknown>) {
  try {
    // Ensure i18n is initialized with a default language for SSR
    if (!i18n.isInitialized) {
      await i18n.init()
    }
    
    // Set a default language for SSR to ensure consistent rendering
    await i18n.changeLanguage('en')
    
    const helmetContext: any = {}
    
    const html = ReactDOMServer.renderToString(
      <React.StrictMode>
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </HelmetProvider>
      </React.StrictMode>
    )
    
    // Extract helmet HTML from context
    const { helmet } = helmetContext
    const head = helmet ? [
      (helmet.title && typeof helmet.title.toString === 'function') ? helmet.title.toString() : '',
      (helmet.meta && typeof helmet.meta.toString === 'function') ? helmet.meta.toString() : '',
      (helmet.link && typeof helmet.link.toString === 'function') ? helmet.link.toString() : '',
      (helmet.script && typeof helmet.script.toString === 'function') ? helmet.script.toString() : ''
    ].filter(Boolean).join('\n') : ''
    
    return { html, head }
  } catch (error) {
    console.error('SSR render error:', (error as Error).message || (error as Error).toString())
    // Return a fallback HTML structure
    return {
      html: '<div id="root">Error rendering page</div>',
      head: ''
    }
  }
}

// Export for Vite SSR
export default render