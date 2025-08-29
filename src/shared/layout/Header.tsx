import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import TopHeader from '../components/TopHeader'
import logoWhite from '../../assets/logo-white.svg'
import logo from '../../assets/logo.svg'
import headerBg from '../../assets/images/header3.webp'

const Header = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isHomePage = location.pathname === '/'
  const isSpecialPage = ['/services', '/projects', '/contact'].includes(location.pathname) || location.pathname.startsWith('/projects/')

  // Function to get page title based on current route
  const getPageTitle = () => {
    if (location.pathname === '/services') {
      return t('nav.services')
    } else if (location.pathname === '/projects' || location.pathname.startsWith('/projects/')) {
      return t('nav.projects')
    } else if (location.pathname === '/contact') {
      return t('nav.contact')
    } else {
      return ''
    }
  }

  // Function to get current page name for breadcrumb
  const getCurrentPageName = () => {
    if (location.pathname === '/services') {
      return t('nav.services')
    } else if (location.pathname === '/projects' || location.pathname.startsWith('/projects/')) {
      return t('nav.projects')
    } else if (location.pathname === '/contact') {
      return t('nav.contact')
    } else {
      return ''
    }
  }

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Navigation items
  const navigationItems = [
    { path: '/', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/contact', label: t('nav.contact') },
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
            <Link to="/" className="flex items-center space-x-2">
              <img src={logoWhite} alt="LOGO" className="h-8 lg:h-10" width={120} height={40} loading="eager"  />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation">
              {navigationItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`relative pb-2 transition-colors ${location.pathname === item.path ? 'text-white font-medium' : 'text-white hover:text-[#777181]/20'}`}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFFFFF]/5" aria-hidden="true"></div>
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
            <div className="md:hidden border-t border-white/20">
              <nav id="mobile-navigation" className="container mx-auto px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={`block py-3 px-4 rounded-md transition-colors ${
                      location.pathname === item.path 
                        ? 'bg-white/20 text-white font-medium' 
                        : 'text-white hover:bg-[#FFFFFF]/5 hover:text-[#777181]/20'
                    }`}
                    aria-current={location.pathname === item.path ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </header>
      ) : (
        <>
          {/* Second Header - White background with navigation */}
          <header className="fixed top-[28px] left-0 right-0 z-[60] bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 py-4 lg:py-6 flex justify-between items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src={logo} alt="LOGO" className="h-8 lg:h-10" width={120} height={40} loading="eager" />
              </Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-6 lg:space-x-8" role="navigation" aria-label="Main navigation">
                {navigationItems.map((item) => {
                const isActive = location.pathname === item.path || 
                  (item.path === '/projects' && location.pathname.startsWith('/projects/'));
                return (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`relative pb-2 transition-colors ${isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-gray-500'}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                    {item.label}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" aria-hidden="true"></div>
                  )}
                </Link>
                );
              })}
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation-secondary"
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
              <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                <nav id="mobile-navigation-secondary" className="container mx-auto px-4 py-4 space-y-2" role="navigation" aria-label="Mobile navigation">
                  {navigationItems.map((item) => {
                    const isActive = location.pathname === item.path || 
                      (item.path === '/projects' && location.pathname.startsWith('/projects/'));
                    return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={`block py-3 px-4 rounded-md transition-colors ${
                        isActive 
                          ? 'bg-blue-50 text-blue-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                    );
                  })}
                </nav>
              </div>
            )}
          </header>

          {/* Third Header - Image background with page title and breadcrumb (only for special pages) */}
          {isSpecialPage && (
            <header className="relative mt-[105px] lg:mt-[120px]">
              {/* Background image with grayscale filter and overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center z-0 filter grayscale" 
                style={{
                  backgroundImage: `url(${headerBg})`,
                  height: '250px',
                }}
              >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-[#1B1525] bg-opacity-15"></div>
              </div>
              
              {/* Content - Centered title and breadcrumb */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4" style={{ height: '250px' }}>
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-4">
                  <ol className="flex items-center space-x-2 text-sm font-bold">
                    <li>
                      <Link to="/" className="text-green-400 hover:text-green-500 transition-colors">
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
            </header>
          )}
        </>
      )}
    </>
  )
}

export default Header