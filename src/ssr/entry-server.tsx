import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
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
    
    const html = ReactDOMServer.renderToString(
      <React.StrictMode>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </React.StrictMode>
    )
    
    // Since SafeHelmet only renders on client-side, we provide basic head content for SSR
    const head = `
      <title>Mi Página - Desarrollo Web Profesional</title>
      <meta name="description" content="Servicios profesionales de desarrollo web, aplicaciones móviles y soluciones tecnológicas innovadoras." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="utf-8" />
    `
    
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