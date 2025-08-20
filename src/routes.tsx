import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'

// Lazy load pages for code splitting
const HomePage = React.lazy(() => import('./pages/HomePage'))
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'))
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'))
const ContactPage = React.lazy(() => import('./pages/ContactPage'))

// Loading component for Suspense fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
)

// Wrapper component for lazy-loaded pages
const LazyPageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Suspense fallback={<PageLoader />}>
    {children}
  </Suspense>
)

// Shared routes configuration for both CSR and SSR
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LazyPageWrapper><HomePage /></LazyPageWrapper>} />
        <Route path="projects" element={<LazyPageWrapper><ProjectsPage /></LazyPageWrapper>} />
        <Route path="services" element={<LazyPageWrapper><ServicesPage /></LazyPageWrapper>} />
        <Route path="contact" element={<LazyPageWrapper><ContactPage /></LazyPageWrapper>} />
      </Route>
    </Routes>
  )
}

// Route definitions for static analysis and prerendering
export const routes = [
  { path: '/', component: HomePage },
  { path: '/projects', component: ProjectsPage },
  { path: '/services', component: ServicesPage },
  { path: '/contact', component: ContactPage },
] as const

export default AppRoutes