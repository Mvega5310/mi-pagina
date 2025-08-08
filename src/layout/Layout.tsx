import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useScrollToTop } from '../hooks/useScrollToTop'

const Layout = () => {
  // Hook para hacer scroll al inicio cuando cambie la página
  useScrollToTop('smooth')

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow"> {/* Adjusted padding-top: TopHeader (~50px) + MainHeader (~80px) */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout