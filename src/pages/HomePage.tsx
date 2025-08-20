import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import HeroSection from '../components/home/HeroSection';
import {
  LazyTechnologySection,
  LazyServicesSection,
  LazyAboutSection,
  LazyProjectsSection,
  LazyTechnologyGrowthSection
} from '../components/LazyComponents';
import LogoSection from '../components/home/LogoSection';
import IndustriesSection from '../components/home/IndustriesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ScrollToTop from '../components/ScrollToTop';
import { useScrollAnimation, fadeInUp } from '../hooks/useScrollAnimation';

// Componente wrapper para animaciones
const AnimatedSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({ 
  children, 
  delay = 0 
}) => {
  const { ref, isInView } = useScrollAnimation();
  
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
  );
};

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={t('seo.home.title', 'Friendsoft - Desarrollo de Software y Soluciones Tecnológicas')}
        description={t('seo.home.description', 'Desarrollo profesional de software, aplicaciones web y servicios de consultoría tecnológica. Transforma tu negocio con soluciones digitales de vanguardia en Colombia.')}
        keywords={t('seo.home.keywords', 'desarrollo de software, desarrollo web, aplicaciones móviles, consultoría tecnológica, transformación digital, Colombia, Bogotá')}
        type="website"
        image="/og-image.jpg"
        url="/"
      />
      {/* Hero Section sin animación ya que es la primera vista */}
      <HeroSection />
      
      {/* Secciones animadas con lazy loading */}
      <AnimatedSection>
        <LazyTechnologySection />
      </AnimatedSection>
      
      <AnimatedSection delay={0.1}>
        <LazyServicesSection />
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        <LazyAboutSection />
      </AnimatedSection>
      
      <AnimatedSection delay={0.1}>
        <LazyProjectsSection />
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        <LazyTechnologyGrowthSection />
      </AnimatedSection>
      
      <AnimatedSection delay={0.1}>
        <LogoSection />
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        <IndustriesSection />
      </AnimatedSection>
      
      <AnimatedSection delay={0.1}>
        <TestimonialsSection />
      </AnimatedSection>
      
      {/* Floating scroll-to-top button */}
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
