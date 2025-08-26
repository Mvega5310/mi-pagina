import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from '../App'

// Import styles and i18n for client-side
import '../styles/index.css'
import '../i18n'

// Create a new helmet context for client-side
const helmetContext = {}

// Ensure DOM is ready before hydration
function hydrate() {
  const rootElement = document.getElementById('root')
  
  if (!rootElement) {
    console.error('Root element not found. Cannot hydrate the app.')
    return
  }

  try {
    // Hydrate the server-rendered content
    ReactDOM.hydrateRoot(
      rootElement,
      <React.StrictMode>
        <HelmetProvider context={helmetContext}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </React.StrictMode>
    )
  } catch (error) {
    console.error('Hydration failed:', error)
    // Fallback to client-side rendering if hydration fails
    const root = ReactDOM.createRoot(rootElement)
    root.render(
      <React.StrictMode>
        <HelmetProvider context={helmetContext}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </React.StrictMode>
    )
  }
}

// Start hydration when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', hydrate)
} else {
  hydrate()
}