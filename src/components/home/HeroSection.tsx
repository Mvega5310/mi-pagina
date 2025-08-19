import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { heroVariants, easeOutConfig } from '../../hooks/useScrollAnimation';

const HeroSection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Hero slides data (can be extended for multiple slides)
  const heroSlides = [
    {
      image: "src/assets/images/home/section1-imagen1.jpg",
      title: t("home.hero.title"),
      subtitle: t("home.hero.subtitle"),
      button: t("home.hero.button"),
    },
    {
      image: "src/assets/images/home/section1-imagen1.jpg",
      title: t("home.hero.title"),
      subtitle: t("home.hero.subtitle"),
      button: t("home.hero.button"),
    },
    // Add more slides here if needed
  ];

  // Auto-slide functionality with progress indicator
  useEffect(() => {
    if (!isAutoPlaying || heroSlides.length <= 1) {
      setProgress(0);
      return;
    }

    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 2; // Increment by 2% every 100ms (5000ms / 50 steps = 100ms per step)
      });
    }, 100);

    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === heroSlides.length - 1 ? 0 : prevSlide + 1
      );
      setProgress(0);
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(progressInterval);
      clearInterval(slideInterval);
    };
  }, [isAutoPlaying, heroSlides.length, currentSlide]);

  // Handle manual slide change
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
    setIsAutoPlaying(false); // Pause auto-play when user manually changes slide

    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Image with smooth transition */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url("${slide.image}")`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
            }}
          />
        ))}
        {/* Enhanced Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-blue-500/50 to-black/30 sm:from-white/30 sm:via-blue-500/60 sm:to-white/30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-purple-600/20"></div>

        {/* Responsive Diagonal Blue Stripes */}
        <div className="pointer-events-none absolute inset-0 z-[1]">
          {/* Franja 1: adaptada para móviles */}
          <div
            className="absolute inset-0 bg-[#5a86da] opacity-30 sm:opacity-45 mix-blend-overlay"
            style={{
              clipPath: "polygon(35% 0, 65% 0, 35% 100%, 5% 100%)",
            }}
          />

          {/* Franja 2: esquina inferior derecha (más sutil en móviles) */}
          <div
            className="absolute inset-0 bg-[#5a86da] opacity-20 sm:opacity-35 mix-blend-overlay"
            style={{
              clipPath: "polygon(100% 70%, 100% 35%, 100% 100%, 85% 100%)",
            }}
          />
        </div>
      </div>

      {/* Content - Improved responsive layout */}
      <div className="relative z-10 w-full">
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
          initial="hidden"
          animate="visible"
          variants={heroVariants.container}
        >
          <div className="max-w-4xl mx-auto text-center sm:text-left">
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white"
              variants={heroVariants.title}
            >
              {heroSlides[currentSlide].title}
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 opacity-90 max-w-3xl mx-auto sm:mx-0 text-white"
              variants={heroVariants.subtitle}
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>
            <motion.button 
              className="bg-white text-blue-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 font-semibold text-base sm:text-lg lg:text-xl hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/50"
              variants={heroVariants.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {heroSlides[currentSlide].button}
            </motion.button>
            
            {/* Slide Navigation Dots - Better responsive positioning */}
            <motion.div 
              className="flex justify-center sm:justify-start space-x-3 sm:space-x-4 mt-10 sm:mt-12 lg:mt-16"
              variants={heroVariants.dots}
            >
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`relative w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white scale-110'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {/* Progress indicator for current slide */}
                  {index === currentSlide && isAutoPlaying && (
                    <div
                      className="absolute inset-0 border-2 border-white/30 rounded-full"
                      style={{
                        background: `conic-gradient(from 0deg, white ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`
                      }}
                    />
                  )}
                </button>
              ))}
              {/* Additional static dots for visual effect */}
              <button className="w-3 h-3 sm:w-4 sm:h-4 bg-white/30 rounded-full"></button>
              <button className="w-3 h-3 sm:w-4 sm:h-4 bg-white/30 rounded-full"></button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator - Hidden on mobile for better UX */}
      <motion.div 
        className="hidden sm:block absolute bottom-8 right-8 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0
        }}
        transition={{ delay: 1.5, duration: 0.8 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.svg
          className="w-6 h-6 lg:w-8 lg:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ 
            y: [0, 10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: easeOutConfig
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </motion.svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;