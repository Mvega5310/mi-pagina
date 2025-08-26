import React, { useState, useEffect } from 'react'

interface SafeHelmetProps {
  children: React.ReactNode
}

const SafeHelmet: React.FC<SafeHelmetProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false)
  const [HelmetComponent, setHelmetComponent] = useState<React.ComponentType<any> | null>(null)

  useEffect(() => {
    // Dynamically import react-helmet-async only on client side
    const loadHelmet = async () => {
      try {
        const { Helmet, HelmetProvider } = await import('react-helmet-async')
        
        const WrappedHelmet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
          <HelmetProvider>
            <Helmet>{children}</Helmet>
          </HelmetProvider>
        )
        
        setHelmetComponent(() => WrappedHelmet)
        setIsClient(true)
      } catch (error) {
        console.warn('Failed to load react-helmet-async:', error)
        setIsClient(true)
      }
    }

    loadHelmet()
  }, [])

  // Only render Helmet on the client side after successful import
  if (!isClient || !HelmetComponent) {
    return null
  }

  return <HelmetComponent>{children}</HelmetComponent>
}

export default SafeHelmet