import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation, staggerContainer, scaleIn, fadeInUp } from '../../hooks/useScrollAnimation';

// Import assets
import QuoteIcon from '../../../assets/icons/home/section9.icon.svg';
import Profile1 from '../../../assets/images/home/section9-profile1.jpg';
import Profile2 from '../../../assets/images/home/section9-profile2.jpg';
import Profile3 from '../../../assets/images/home/section9-profile3.jpg';

interface Testimonial {
  comment: string;
  name: string;
  position: string;
  profileImage: string;
}

const TestimonialsSection: React.FC = () => {
  const { t } = useTranslation();
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation();

  const testimonials: Testimonial[] = [
    {
      comment: t('home.section9.testimonials.testimonial1.comment'),
      name: t('home.section9.testimonials.testimonial1.name'),
      position: t('home.section9.testimonials.testimonial1.position'),
      profileImage: Profile1
    },
    {
      comment: t('home.section9.testimonials.testimonial2.comment'),
      name: t('home.section9.testimonials.testimonial2.name'),
      position: t('home.section9.testimonials.testimonial2.position'),
      profileImage: Profile2
    },
    {
      comment: t('home.section9.testimonials.testimonial3.comment'),
      name: t('home.section9.testimonials.testimonial3.name'),
      position: t('home.section9.testimonials.testimonial3.position'),
      profileImage: Profile3
    }
  ];

  return (
    <section className="relative">
      {/* Background Section with Header */}
      <div className="bg-white pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Header */}
          <motion.div 
            ref={headerRef}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center"
          >
            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 tracking-wider uppercase px-4" 
              style={{ color: '#7B43D6' }}
            >
              {t('home.section9.subtitle')}
            </motion.p>
            <motion.h2 
              variants={fadeInUp}
              className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black leading-tight max-w-4xl mx-auto px-4 mb-8"
            >
              {t('home.section9.title')}
            </motion.h2>
          </motion.div>
        </div>
      </div>

      {/* White Background Section */}
      <div className="bg-[#F7F7F9] pt-8 sm:pt-12 pb-16 sm:pb-20 min-h-[400px] sm:min-h-[500px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Testimonials Grid */}
          <div className="relative">
            <motion.div 
              ref={cardsRef}
              initial="hidden"
              animate={cardsInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
                >
                  {/* Upper section with quote icon and comment - F7F7F9 background */}
                  <div className="p-3 sm:p-4 md:p-6 lg:p-8 bg-white">
                    {/* Quote Icon - Centered */}
                    <div className="mb-3 sm:mb-4 md:mb-6 flex justify-center">
                      <img
                        src={QuoteIcon}
                        alt="Quote"
                        className="w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16"
                      />
                    </div>

                    {/* Comment */}
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed text-center px-1">
                      {testimonial.comment}
                    </p>
                  </div>

                  {/* Lower section with profile - White background */}
                  <div className="bg-white p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col items-center text-center">
                    {/* Profile Image */}
                    <div className="mb-2 sm:mb-3 md:mb-4">
                      <img
                        src={testimonial.profileImage}
                        alt={testimonial.name}
                        className="w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 object-cover border-2 sm:border-4 border-gray-100 shadow-md"
                      />
                    </div>

                    {/* Name and Position */}
                    <h4 className="text-black text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-xs md:text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;