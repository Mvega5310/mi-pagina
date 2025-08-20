import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useScrollToTop } from '../hooks/useScrollToTop'
import ClientOnly from '../ssr/ClientOnly'
import SEO from '../components/SEO'

const LayoutContent = () => {
  // Hook para hacer scroll al inicio cuando cambie la página
  useScrollToTop('smooth')

  return (
    <div className="flex flex-col min-h-screen">
      <SEO />
      <Header />
      <main className="flex-grow"> {/* Adjusted padding-top: TopHeader (~50px) + MainHeader (~80px) */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

const Layout = () => {
  return (
    <ClientOnly
      fallback={
        <div className="flex flex-col min-h-screen">
          <div className="h-20 bg-white shadow-sm"></div>
          <main className="flex-grow flex items-center justify-center">
            <div className="text-gray-600">Loading...</div>
          </main>
          <div className="h-16 bg-gray-100"></div>
        </div>
      }
    >
      <LayoutContent />
    </ClientOnly>
  )
}

export default Layout