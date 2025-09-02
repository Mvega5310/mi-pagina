'use client'

import TopHeader from './layout/TopHeader'
import Header from './layout/Header'
import Footer from './layout/Footer'
import ScrollToTop from './ScrollToTop'
import I18nProvider from './I18nProvider'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <I18nProvider>
      <TopHeader />
      <Header />
      <main className="">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </I18nProvider>
  )
}