import { useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1, once = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: threshold,
    once,
    margin: "-100px 0px -100px 0px"
  });

  return { ref, isInView };
};

// Configuraciones de transición reutilizables
export const easeConfig = [0.25, 0.1, 0.25, 1] as const;
export const easeOutConfig = [0.4, 0, 0.6, 1] as const;

// Factory function para crear variantes de animación
const createVariant = (
  hiddenProps: Record<string, any>,
  visibleProps: Record<string, any>,
  duration = 0.8,
  ease = easeConfig
): Variants => ({
  hidden: {
    opacity: 0,
    ...hiddenProps
  },
  visible: {
    opacity: 1,
    ...visibleProps,
    transition: {
      duration,
      ease
    }
  }
});

// Variantes de animación predefinidas usando la factory function
export const fadeInUp = createVariant({ y: 60 }, { y: 0 });

export const fadeInLeft = createVariant({ x: -60 }, { x: 0 });

export const fadeInRight = createVariant({ x: 60 }, { x: 0 });

export const scaleIn = createVariant({ scale: 0.8 }, { scale: 1 }, 0.6);

// Variantes específicas para HeroSection
export const heroVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  } as Variants,

  title: createVariant({ y: 50 }, { y: 0 }),
  
  subtitle: createVariant({ y: 30 }, { y: 0 }),
  
  button: createVariant({ scale: 0.8 }, { scale: 1 }, 0.6),
  
  dots: createVariant({ y: 20 }, { y: 0 }, 0.6)
};

// Contenedores con stagger
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
} as Variants;

export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
} as Variants;