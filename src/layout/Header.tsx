import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import TopHeader from '../components/TopHeader'

const Header = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isHomePage = location.pathname === '/'
  const isSpecialPage = ['/services', '/projects', '/contact'].includes(location.pathname)

  // Function to get page title based on current route
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/services':
        return t('nav.services')
      case '/projects':
        return t('nav.projects')
      case '/contact':
        return t('nav.contact')
      default:
        return ''
    }
  }

  // Function to get current page name for breadcrumb
  const getCurrentPageName = () => {
    switch (location.pathname) {
      case '/services':
        return t('nav.services')
      case '/projects':
        return t('nav.projects')
      case '/contact':
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
        <header className="fixed top-[28px] left-0 right-0 z-40 border border-[#FFFFFF1A] bg-gradient-to-r from-[#70A7FF]/30 via-[#6079FD]/30 to-[#565CFC]/30 backdrop-blur-md text-white">
          <div className="container mx-auto px-4 py-2 lg:px-8 lg:py-10 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="src\assets\logo-white.svg" alt="LOGO" className="h-8 lg:h-10" />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              {navigationItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`relative pb-2 transition-colors ${location.pathname === item.path ? 'text-white font-medium' : 'text-white hover:text-blue-200'}`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#70A8FF]"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-white/20">
              <nav className="container mx-auto px-4 py-4 space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={`block py-3 px-4 rounded-md transition-colors ${
                      location.pathname === item.path 
                        ? 'bg-white/20 text-white font-medium' 
                        : 'text-white hover:bg-white/10'
                    }`}
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
          <header className="fixed top-[28px] left-0 right-0 z-40 bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 py-4 lg:py-6 flex justify-between items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src="src\assets\logo.svg" alt="LOGO" className="h-8 lg:h-10" />
              </Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-6 lg:space-x-8">
                {navigationItems.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className={`relative pb-2 transition-colors ${location.pathname === item.path ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
                  >
                    {item.label}
                    {location.pathname === item.path && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                    )}
                  </Link>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                <nav className="container mx-auto px-4 py-4 space-y-2">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={`block py-3 px-4 rounded-md transition-colors ${
                        location.pathname === item.path 
                          ? 'bg-blue-50 text-blue-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
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
                  backgroundImage: 'url("src/assets/images/header3.jpg")',
                  height: '250px',
                }}
              >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-[#1B1525] bg-opacity-15"></div>
              </div>
              
              {/* Content - Centered title and breadcrumb */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4" style={{ height: '250px' }}>
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 mb-4 text-sm font-bold">
                  <Link to="/" className="text-green-400 hover:text-green-300 transition-colors">
                    {t('nav.home')}
                  </Link>
                  <span className="text-white">/</span>
                  <span className="text-white">{getCurrentPageName()}</span>
                </div>
                
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