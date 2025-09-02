'use client'

import { lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import SEO from '@/components/SEO'
import ScrollToTop from '@/components/ScrollToTop'
import HeroSection from '@/components/home/HeroSection'
import ServicesSection from '@/components/home/ServicesSection'
import AboutSection from '@/components/home/AboutSection'
import TechnologySection from '@/components/home/TechnologySection'
import { useScrollAnimation, fadeInUp } from '@/hooks/useScrollAnimation'

// Lazy load remaining components for better performance
const LogoSection = lazy(() => import('@/components/home/LogoSection'))
const ProjectsSection = lazy(() => import('@/components/home/ProjectsSection'))
const IndustriesSection = lazy(() => import('@/components/home/IndustriesSection'))
const TechnologyGrowthSection = lazy(() => import('@/components/home/TechnologyGrowthSection'))
const TestimonialsSection = lazy(() => import('@/components/home/TestimonialsSection'))

// Componente wrapper para animaciones
const AnimatedSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0
}) => {
  const { ref, isInView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

const HomePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white pt-7 md:pt-9">
      <SEO
        title={t('seo.home.title', 'Friendsoft - Desarrollo de Software y Soluciones Tecnológicas')}
        description={t('seo.home.description', 'Desarrollo profesional de software, aplicaciones web y servicios de consultoría tecnológica. Transforma tu negocio con soluciones digitales de vanguardia en Colombia.')}
        keywords={t('seo.home.keywords', 'desarrollo de software, desarrollo web, aplicaciones móviles, consultoría tecnológica, transformación digital, Colombia, Bogotá')}
        type="website"
        image="/og-image.jpg"
        url="/"
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Technology Section */}
      <AnimatedSection delay={0.4}>
        <TechnologySection />
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection delay={0.2}>
        <ServicesSection />
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection delay={0.3}>
        <AboutSection />
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection delay={0.5}>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectsSection />
        </Suspense>
      </AnimatedSection>

      {/* Technology Growth Section */}
      <AnimatedSection delay={0.7}>
        <Suspense fallback={<div>Loading...</div>}>
          <TechnologyGrowthSection />
        </Suspense>
      </AnimatedSection>

      {/* Logo Section */}
      <AnimatedSection delay={0.1}>
        <Suspense fallback={<div>Loading...</div>}>
          <LogoSection />
        </Suspense>
      </AnimatedSection>

      {/* Industries Section */}
      <AnimatedSection delay={0.6}>
        <Suspense fallback={<div>Loading...</div>}>
          <IndustriesSection />
        </Suspense>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection delay={0.8}>
        <Suspense fallback={<div>Loading...</div>}>
          <TestimonialsSection />
        </Suspense>
      </AnimatedSection>

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  )
}

export default HomePage
