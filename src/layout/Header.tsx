import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import TopHeader from '../components/TopHeader'

const Header = () => {
  const { t } = useTranslation()
  const location = useLocation()
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

  return (
    <>
      {/* Top Header - Common across all pages */}
      <TopHeader />
      
      {/* Main Header - Different for home vs other pages */}
      {isHomePage ? (
        // Home page header with gradient background
        <header className="fixed top-[45px] left-0 right-0 z-40 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="src\assets\logo-white.svg" alt="LOGO" />
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`relative pb-2 transition-colors ${location.pathname === '/' ? 'text-white font-medium' : 'text-white hover:text-blue-200'}`}
              >
                {t('nav.home')}
                {location.pathname === '/' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                )}
              </Link>
              <Link 
                to="/services" 
                className={`relative pb-2 transition-colors ${location.pathname === '/services' ? 'text-white font-medium' : 'text-white hover:text-blue-200'}`}
              >
                {t('nav.services')}
                {location.pathname === '/services' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                )}
              </Link>
              <Link 
                to="/projects" 
                className={`relative pb-2 transition-colors ${location.pathname === '/projects' ? 'text-white font-medium' : 'text-white hover:text-blue-200'}`}
              >
                {t('nav.projects')}
                {location.pathname === '/projects' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                )}
              </Link>
              <Link 
                to="/contact" 
                className={`relative pb-2 transition-colors ${location.pathname === '/contact' ? 'text-white font-medium' : 'text-white hover:text-blue-200'}`}
              >
                {t('nav.contact')}
                {location.pathname === '/contact' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                )}
              </Link>
            </nav>
          </div>
        </header>
      ) : (
        <>
          {/* Second Header - White background with navigation */}
          <header className="fixed top-[45px] left-0 right-0 z-40 bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
              <Link to="/" className="flex items-center space-x-2">
                <img src="src\assets\logo.svg" alt="LOGO" />
              </Link>
              
              <nav className="hidden md:flex space-x-8">
                <Link 
                  to="/" 
                  className={`relative pb-2 transition-colors ${location.pathname === '/' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  {t('nav.home')}
                  {location.pathname === '/' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                  )}
                </Link>
                <Link 
                  to="/services" 
                  className={`relative pb-2 transition-colors ${location.pathname === '/services' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  {t('nav.services')}
                  {location.pathname === '/services' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                  )}
                </Link>
                <Link 
                  to="/projects" 
                  className={`relative pb-2 transition-colors ${location.pathname === '/projects' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  {t('nav.projects')}
                  {location.pathname === '/projects' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                  )}
                </Link>
                <Link 
                  to="/contact" 
                  className={`relative pb-2 transition-colors ${location.pathname === '/contact' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  {t('nav.contact')}
                  {location.pathname === '/contact' && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                  )}
                </Link>
              </nav>
            </div>
          </header>

          {/* Third Header - Image background with page title and breadcrumb (only for special pages) */}
          {isSpecialPage && (
            <header className="relative mt-[120px]">
              {/* Background image with grayscale filter and overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center z-0 filter grayscale" 
                style={{
                  backgroundImage: 'url("src/assets/images/header3.jpg")',
                  height: '348px',
                }}
              >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-[#1B1525] bg-opacity-15"></div>
              </div>
              
              {/* Content - Centered title and breadcrumb */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center text-white" style={{ height: '348px' }}>
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 mb-4 text-sm font-bold">
                  <Link to="/" className="text-green-400 hover:text-green-300 transition-colors">
                    {t('nav.home')}
                  </Link>
                  <span className="text-white">/</span>
                  <span className="text-white">{getCurrentPageName()}</span>
                </div>
                
                {/* Page Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-white">
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