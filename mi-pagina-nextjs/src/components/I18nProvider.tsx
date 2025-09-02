'use client'

import { useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../lib/i18n'

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isI18nReady, setIsI18nReady] = useState(false)

  useEffect(() => {
    // Wait for i18n to be initialized
    if (i18n.isInitialized) {
      setIsI18nReady(true)
    } else {
      i18n.on('initialized', () => {
        setIsI18nReady(true)
      })
    }

    return () => {
      i18n.off('initialized')
    }
  }, [])

  if (!isI18nReady) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  )
}