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
      className="relative h-screen flex items-center overflow-hidden"
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
            }}
          />
        ))}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gray-500/70"></div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-start text-white px-4 max-w-4xl mx-10 lg:mx-auto"
        initial="hidden"
        animate="visible"
        variants={heroVariants.container}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          variants={heroVariants.title}
        >
          {heroSlides[currentSlide].title}
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl mb-8 opacity-90 max-w-2xl"
          variants={heroVariants.subtitle}
        >
          {heroSlides[currentSlide].subtitle}
        </motion.p>
        <motion.button 
          className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          variants={heroVariants.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {heroSlides[currentSlide].button}
        </motion.button>
        
        {/* Slide Navigation Dots */}
        <motion.div 
          className="flex space-x-3 mt-24"
          variants={heroVariants.dots}
        >
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-110'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {/* Progress indicator for current slide */}
              {index === currentSlide && isAutoPlaying && (
                <div
                  className="absolute inset-0 rounded-full border-2 border-white/30"
                  style={{
                    background: `conic-gradient(from 0deg, white ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`
                  }}
                />
              )}
            </button>
          ))}
          {/* Additional static dots for visual effect (as shown in design) */}
          <button className="w-3 h-3 rounded-full bg-white/30"></button>
          <button className="w-3 h-3 rounded-full bg-white/30"></button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 right-8 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0
        }}
        transition={{ delay: 1.5, duration: 0.8 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.svg
          className="w-6 h-6"
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;