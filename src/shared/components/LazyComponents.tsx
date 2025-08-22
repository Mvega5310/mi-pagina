import React, { Suspense, lazy } from 'react'

// Lazy load heavy home sections
const TechnologySection = lazy(() => import('./home/TechnologySection'))
const TechnologyGrowthSection = lazy(() => import('./home/TechnologyGrowthSection'))
const ProjectsSection = lazy(() => import('./home/ProjectsSection'))
const ServicesSection = lazy(() => import('./home/ServicesSection'))
const AboutSection = lazy(() => import('./home/AboutSection'))

// Loading fallback for sections
const SectionLoader = ({ height = '400px' }: { height?: string }) => (
  <div 
    className="flex items-center justify-center bg-gray-50"
    style={{ minHeight: height }}
  >
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
      <p className="text-gray-600 text-sm">Cargando contenido...</p>
    </div>
  </div>
)

// Lazy Technology Section
export const LazyTechnologySection: React.FC = () => {
  return (
    <Suspense fallback={<SectionLoader height="600px" />}>
      <TechnologySection />
    </Suspense>
  )
}

// Lazy Technology Growth Section
export const LazyTechnologyGrowthSection: React.FC = () => {
  return (
    <Suspense fallback={<SectionLoader height="500px" />}>
      <TechnologyGrowthSection />
    </Suspense>
  )
}

// Lazy Projects Section
export const LazyProjectsSection: React.FC = () => {
  return (
    <Suspense fallback={<SectionLoader height="700px" />}>
      <ProjectsSection />
    </Suspense>
  )
}

// Lazy Services Section
export const LazyServicesSection: React.FC = () => {
  return (
    <Suspense fallback={<SectionLoader height="600px" />}>
      <ServicesSection />
    </Suspense>
  )
}

// Lazy About Section
export const LazyAboutSection: React.FC = () => {
  return (
    <Suspense fallback={<SectionLoader height="500px" />}>
      <AboutSection />
    </Suspense>
  )
}

// Export all components
export {
  TechnologySection,
  TechnologyGrowthSection,
  ProjectsSection,
  ServicesSection,
  AboutSection
}