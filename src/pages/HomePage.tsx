import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import TechnologySection from '../components/home/TechnologySection';
import ServicesSection from '../components/home/ServicesSection';
import AboutSection from '../components/home/AboutSection';
import ProjectsSection from '../components/home/ProjectsSection';
import TechnologyGrowthSection from '../components/home/TechnologyGrowthSection';
import LogoSection from '../components/home/LogoSection';
import IndustriesSection from '../components/home/IndustriesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
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
      className="relative z-10"
    >
      {children}
    </motion.div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section sin animación ya que es la primera vista */}
      <HeroSection />
      
      {/* Secciones animadas */}
      <AnimatedSection>
        <TechnologySection />
      </AnimatedSection>
      
      <AnimatedSection delay={0.1}>
        <ServicesSection />
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        <AboutSection />
      </AnimatedSection>
      
      <AnimatedSection delay={0.1}>
        <ProjectsSection />
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
        <TechnologyGrowthSection />
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
      
      {/* Flecha flotante para volver al inicio */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-50 group bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Volver al inicio"
      >
        <svg
          className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default HomePage;
