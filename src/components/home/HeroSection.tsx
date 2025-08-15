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
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-blue-500/60 to-white/30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-blue-500/0 to-purple-600/0"></div>

        {/* Diagonal Blue Stripes */}
        {/* First diagonal stripe - middle area */}
       {/* Primera franja diagonal - casi al centro */}
{/* Franjas diagonales sobre la imagen */}
<div className="pointer-events-none absolute inset-0 z-[1]">
  {/* Franja 1: casi al centro (sólida, delgada, leve inclinación) */}
  <div
    className="absolute inset-0 bg-[#5a86da] opacity-45 mix-blend-overlay"
  style={{
      // top: más a la derecha | bottom: más a la izquierda → inclinación derecha→izquierda
      clipPath: "polygon(45% 0, 65% 0, 30% 100%, 10% 100%",
    }}
  />

  {/* Franja 2: esquina inferior derecha (más sutil) */}
  <div
    className="absolute inset-0 bg-[#5a86da] opacity-35 mix-blend-overlay"
    style={{
      // Triángulo/rombo en esquina inferior derecha con igual inclinación
     clipPath: "polygon(100% 80%, 100% 45%, 100% 100%, 88% 100%)",
    }}
  />
</div>


      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-start text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-4 sm:mx-6 lg:mx-auto mt-16 lg:mt-20"
        initial="hidden"
        animate="visible"
        variants={heroVariants.container}
      >
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
          variants={heroVariants.title}
        >
          {heroSlides[currentSlide].title}
        </motion.h1>
        <motion.p 
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-2xl"
          variants={heroVariants.subtitle}
        >
          {heroSlides[currentSlide].subtitle}
        </motion.p>
        <motion.button 
          className="bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          variants={heroVariants.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {heroSlides[currentSlide].button}
        </motion.button>
        
        {/* Slide Navigation Dots */}
        <motion.div 
          className="flex space-x-3 mt-12 sm:mt-16 lg:mt-24"
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
        </motion.svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;