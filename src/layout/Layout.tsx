import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[130px]"> {/* Adjusted padding-top: TopHeader (~50px) + MainHeader (~80px) */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout