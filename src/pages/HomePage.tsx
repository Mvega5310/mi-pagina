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
    </div>
  );
};

export default HomePage;
