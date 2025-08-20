import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationES from './locales/es/translation.json'
import translationEN from './locales/en/translation.json'

const resources = {
  es: {
    translation: translationES
  },
  en: {
    translation: translationEN
  }
}

// SSR-safe i18n configuration
const isServer = typeof window === 'undefined'

const i18nConfig = {
  resources,
  fallbackLng: 'es',
  lng: isServer ? 'es' : undefined, // Use fallback language on server
  interpolation: {
    escapeValue: false
  },
  // Disable language detection on server
  detection: isServer ? undefined : {
    order: ['localStorage', 'navigator', 'htmlTag'],
    caches: ['localStorage']
  }
}

// Only use LanguageDetector on client side
if (!isServer) {
  i18n.use(LanguageDetector)
}

i18n
  .use(initReactI18next)
  .init(i18nConfig)

export default i18n