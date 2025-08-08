import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation, staggerContainer, scaleIn, fadeInUp } from '../../hooks/useScrollAnimation';

// Import assets
import QuoteIcon from '../../assets/icons/home/section9.icon.svg';
import Profile1 from '../../assets/images/home/section9-profile1.jpg';
import Profile2 from '../../assets/images/home/section9-profile2.jpg';
import Profile3 from '../../assets/images/home/section9-profile3.jpg';

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
    <section className="relative overflow-hidden">
      {/* Background Section with Header */}
      <div className="bg-[#F7F7F9] pt-16 pb-32 md:pb-40 lg:pb-48">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="text-sm font-medium mb-4 tracking-wide uppercase" 
              style={{ color: '#7B43D6' }}
            >
              {t('home.section9.subtitle')}
            </motion.p>
            <motion.h2 
              variants={fadeInUp}
              className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl mx-auto"
            >
              {t('home.section9.title')}
            </motion.h2>
          </motion.div>
        </div>
      </div>

      {/* White Background Section */}
      <div className="bg-white pt-16 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Testimonials Grid - Positioned to overlap */}
          <div className="relative -mt-32 md:-mt-40 lg:-mt-48">
            <motion.div 
              ref={cardsRef}
              initial="hidden"
              animate={cardsInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
                >
                  {/* Upper section with quote icon and comment - F7F7F9 background */}
                  <div className="p-6 md:p-8 bg-white">
                    {/* Quote Icon - Centered */}
                    <div className="mb-6 flex justify-center">
                      <img
                        src={QuoteIcon}
                        alt="Quote"
                        className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
                      />
                    </div>

                    {/* Comment */}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center">
                      {testimonial.comment}
                    </p>
                  </div>

                  {/* Lower section with profile - White background */}
                  <div className="bg-white p-6 md:p-8 flex flex-col items-center text-center">
                    {/* Profile Image */}
                    <div className="mb-4">
                      <img
                        src={testimonial.profileImage}
                        alt={testimonial.name}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-4 border-gray-100 shadow-md"
                      />
                    </div>

                    {/* Name and Position */}
                    <h4 className="text-black text-base md:text-lg font-bold mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs md:text-sm">
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