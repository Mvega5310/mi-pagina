import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './shared/layout/Layout'

// Lazy load pages for code splitting
const HomePage = React.lazy(() => import('./shared/pages/HomePage'))
const ProjectsPage = React.lazy(() => import('./shared/pages/ProjectsPage'))
const ProjectDetails = React.lazy(() => import('./shared/pages/ProjectDetails'))
const ServicesPage = React.lazy(() => import('./shared/pages/ServicesPage'))
const ContactPage = React.lazy(() => import('./shared/pages/ContactPage'))

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
        <Route path="projects/:id" element={<LazyPageWrapper><ProjectDetails /></LazyPageWrapper>} />
        <Route path="services" element={<LazyPageWrapper><ServicesPage /></LazyPageWrapper>} />
        <Route path="contact" element={<LazyPageWrapper><ContactPage /></LazyPageWrapper>} />
      </Route>
    </Routes>
  )
}

// Routes are now exported from shared/config/routes.ts

export default AppRoutes