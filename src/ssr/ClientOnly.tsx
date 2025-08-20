import { useState, useEffect, ReactNode } from 'react'

interface ClientOnlyProps {
  children: ReactNode
  fallback?: ReactNode
}

const ClientOnly = ({ children, fallback = null }: ClientOnlyProps) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  // Always render fallback on server side and initial client render
  if (!hasMounted) {
    return <>{fallback}</>
  }

  // Only render children after hydration is complete
  return <>{children}</>
}

export default ClientOnly