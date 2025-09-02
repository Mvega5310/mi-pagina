'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import TopHeader from './TopHeader'

const Header = () => {
  const { t } = useTranslation()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)
  const isHomePage = pathname === '/'


  useEffect(() => {
    setIsHydrated(true)
  }, [])

  // Function to get page title based on current route
  const getPageTitle = () => {
    if (!isHydrated) {
      switch (pathname) {
        case '/services/':
          return 'Servicios'
        case '/projects/':
          return 'Proyectos'
        case '/contact/':
          return 'Contacto'
        default:
          return ''
      }
    }
    switch (pathname) {
      case '/services/':
        return t('nav.services')
      case '/projects/':
        return t('nav.projects')
      case '/contact/':
        return t('nav.contact')
      default:
        return ''
    }
  }

  // Function to get current page name for breadcrumb
  const getCurrentPageName = () => {
    if (!isHydrated) {
      switch (pathname) {
        case '/services/':
          return 'Servicios'
        case '/projects/':
          return 'Proyectos'
        case '/contact/':
          return 'Contacto'
        default:
          return ''
      }
    }
    switch (pathname) {
      case '/services/':
        return t('nav.services')
      case '/projects/':
        return t('nav.projects')
      case '/contact/':
        return t('nav.contact')
      default:
        return ''
    }
  }

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Navigation items
  const navigationItems = [
    { path: '/', label: isHydrated ? t('nav.home') : 'Inicio' },
    { path: '/services/', label: isHydrated ? t('nav.services') : 'Servicios' },
    { path: '/projects/', label: isHydrated ? t('nav.projects') : 'Proyectos' },
    { path: '/contact/', label: isHydrated ? t('nav.contact') : 'Contacto' },
  ]

  return (
    <>
      {/* Top Header - Common across all pages */}
      <TopHeader />

      {/* Main Header - Different for home vs other pages */}
      {isHomePage ? (
        // Home page header with gradient background
        <header className="fixed top-7 md:top-9 left-0 right-0 z-[60] border border-[#FFFFFF1A] bg-[#777181]/25  backdrop-blur-md text-white">
          <div className="container mx-auto px-4 py-2 lg:px-8 lg:py-6 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo-white.svg"
                alt="LOGO"
                width={120}
                height={40}
                className="h-8 lg:h-10"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative pb-2 transition-colors ${pathname === item.path ? 'text-white font-medium' : 'text-white hover:text-white/50'
                    }`}
                  aria-current={pathname === item.path ? 'page' : undefined}
                >
                  {item.label}
                  {pathname === item.path && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#70A8FF]" aria-hidden="true"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div
              id="mobile-navigation"
              className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="px-4 py-4 space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${pathname === item.path
                      ? 'text-white bg-white/10'
                      : 'text-white hover:text-white/70 hover:bg-white/5'
                      }`}
                    aria-current={pathname === item.path ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </header>
      ) : (
        <>
        {/* Other pages header with different styling */}
          <header className="fixed top-7 md:top-9 left-0 right-0 z-[60] bg-white shadow-sm border-b border-gray-200">
            <div className="container mx-auto px-4 py-4 lg:px-8 flex justify-between items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/images/logo.svg"
                  alt="LOGO"
                  width={120}
                  height={40}
                  className="h-8 lg:h-10"
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`relative pb-2 transition-colors ${pathname === item.path
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-700 hover:text-blue-600'
                      }`}
                    aria-current={pathname === item.path ? 'page' : undefined}
                  >
                    {item.label}
                    {pathname === item.path && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" aria-hidden="true"></div>
                    )}
                  </Link>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div
                id="mobile-navigation"
                className="md:hidden bg-white border-t border-gray-200 shadow-lg"
                role="navigation"
                aria-label="Mobile navigation"
              >
                <div className="px-4 py-4 space-y-2">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={closeMobileMenu}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${pathname === item.path
                        ? 'text-blue-600 bg-purple-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      aria-current={pathname === item.path ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}


          </header>

          <header className="relative mt-[76px] lg:mt-[86px] h-[251px]">
            {/* Page Header for non-home pages */}
            <div className="relative text-white py-16">

              {/* Background image with grayscale filter and overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center z-0 filter grayscale"
                style={{
                  backgroundImage: `url('/images/header3.webp')`,
                  height: '250px',
                }}
              >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-[#1B1525]/30 bg-opacity-15"></div>
              </div>

              {/* Content - Centered title and breadcrumb */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4" style={{ height: '250px' }}>
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-4">
                  <ol className="flex items-center space-x-2 text-sm font-bold">
                    <li>
                      <Link href="/" className="text-green-400 hover:text-green-300 transition-colors">
                        {t('nav.home')}
                      </Link>
                    </li>
                    <li aria-hidden="true" className="text-white">/</li>
                    <li aria-current="page" className="text-white">{getCurrentPageName()}</li>
                  </ol>
                </nav>

                {/* Page Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  {getPageTitle()}
                </h1>
              </div>
            </div>

          </header>
        </>
      )}
    </>
  )
}

export default Header