'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { MapPinIcon, EnvelopeIcon, PhoneIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const TopHeaderContent = () => {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setIsOpen(false)
  }

  // Handle hydration and close dropdown when clicking outside
  useEffect(() => {
    setIsHydrated(true)
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Obtener la bandera según el idioma actual
  const getFlagSrc = () => {
    return i18n.language === 'en' ? '/images/flags/us.svg' : '/images/flags/es.svg'
  }

  return (
    <div className="container mx-auto px-2 flex justify-between items-center text-xs">
      {/* Left side - Address, Email and Phone */}
      <div className="flex items-center space-x-1 sm:space-x-3 lg:space-x-4 text-gray-600 overflow-hidden">
        {/* Address - Hidden on very small screens */}
        <div className="hidden sm:flex items-center space-x-1 min-w-0">
          <MapPinIcon className="h-3 w-3 text-blue-500 flex-shrink-0" />
          <span className="truncate text-xs">{t('contact_info.address')}</span>
        </div>
        {/* Email - Always visible but truncated on small screens */}
        <div className="flex items-center space-x-1 min-w-0">
          <EnvelopeIcon className="h-3 w-3 text-blue-500 flex-shrink-0" />
          <span className="truncate text-xs">{t('contact_info.email')}</span>
        </div>
        {/* Phone - Always visible but truncated on small screens */}
        <div className="flex items-center space-x-1 min-w-0">
          <PhoneIcon className="h-3 w-3 text-blue-500 flex-shrink-0" />
          <span className="truncate text-xs">{t('contact_info.phone')}</span>
        </div>
      </div>

      {/* Right side - Language and Social Media */}
      <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-10 flex-shrink-0">
        {/* Language Switcher */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-1 sm:space-x-2 bg-gray-50 hover:bg-gray-100 px-1 sm:px-2 py-1 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="Change language"
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            <Image
              src={getFlagSrc()}
              alt={i18n.language === 'en' ? 'US Flag' : 'Spain Flag'}
              width={20}
              height={12}
              className="w-4 sm:w-5 h-3 object-cover flex-shrink-0"
              loading="lazy"
            />
            {isHydrated && (
              <span className="text-gray-700 text-xs sm:text-sm hidden sm:inline">
                {i18n.language === 'en' ? t('language.en') : t('language.es')}
              </span>
            )}
            <ChevronDownIcon className={`h-3 sm:h-4 w-3 sm:w-4 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
          </button>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute right-0 mt-1 w-32 sm:w-40 bg-white shadow-lg z-10 py-1 border border-gray-200 rounded-md" role="menu">
              <button
                onClick={() => changeLanguage('en')}
                className={`flex items-center space-x-2 w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm ${
                  i18n.language === 'en' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
                role="menuitem"
              >
                <Image
                  src="/images/flags/us.svg"
                  alt="US Flag"
                  width={20}
                  height={12}
                  className="w-4 sm:w-5 h-3 object-cover"
                  loading="lazy"
                />
                <span>{t('language.en')}</span>
              </button>
              <button
                onClick={() => changeLanguage('es')}
                className={`flex items-center space-x-2 w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm ${
                  i18n.language === 'es' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
                role="menuitem"
              >
                <Image
                  src="/images/flags/es.svg"
                  alt="Spain Flag"
                  width={20}
                  height={12}
                  className="w-4 sm:w-5 h-3 object-cover"
                  loading="lazy"
                />
                <span>{t('language.es')}</span>
              </button>
            </div>
          )}
        </div>

        {/* Social Media Icons - Hidden on very small screens */}
        <div className="hidden sm:flex items-center space-x-2 lg:space-x-3" role="list" aria-label="Social media links">
          <a
            href="https://twitter.com/friendsoft"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded"
            aria-label="Follow us on X (Twitter) (opens in new tab)"
          >
            <Image 
              src="/images/x.svg" 
              alt="" 
              width={16} 
              height={16} 
              className="w-3 sm:w-4 h-3 sm:h-4" 
              loading="lazy" 
            />
          </a>
          <a
            href="https://facebook.com/friendsoft"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600/50 rounded"
            aria-label="Follow us on Facebook (opens in new tab)"
          >
            <Image 
              src="/images/facebook.svg" 
              alt="" 
              width={16} 
              height={16} 
              className="w-3 sm:w-4 h-3 sm:h-4" 
              loading="lazy" 
            />
          </a>
          <a
            href="https://instagram.com/friendsoft"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-600/50 rounded"
            aria-label="Follow us on Instagram (opens in new tab)"
          >
            <Image 
              src="/images/instagram.svg" 
              alt="" 
              width={16} 
              height={16} 
              className="w-3 sm:w-4 h-3 sm:h-4" 
              loading="lazy" 
            />
          </a>
        </div>
      </div>
    </div>
  )
}

const TopHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[70] bg-white border-b border-gray-200 py-1">
      <TopHeaderContent />
    </div>
  )
}

export default TopHeader