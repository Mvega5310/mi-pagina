'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { motion } from 'framer-motion'

const TechnologySection = () => {
  const { t } = useTranslation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section className="relative z-[50] overflow-visible">
      <div className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-[#70A8FF] to-[#565CFD] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 pb-8 sm:pb-12 lg:pb-16 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Left Content */}
            <motion.div className="space-y-4 sm:space-y-6 text-center lg:text-left" variants={itemVariants}>
              <p className="text-blue-200 text-xs sm:text-sm font-medium uppercase tracking-wider">
                {t('home.section2.subtitle')}
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                {t('home.section2.title')}
              </h2>
            </motion.div>

            {/* Right Content - Description */}
            <motion.div className="mt-4 lg:mt-0 lg:pt-8 xl:pt-12 text-center lg:text-left" variants={itemVariants}>
              <p className="text-blue-100 text-sm sm:text-base lg:text-lg leading-relaxed">
                {t('home.section2.description')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Cards Section - Three horizontal cards overlapping blue and white sections */}
      <div className="relative -mt-12 sm:-mt-16 lg:-mt-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* Card 1 */}
            <motion.div
              className="bg-white shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 rounded-lg"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative h-48 sm:h-56 lg:h-64">
                <Image
                  src="/images/home/section5-image1.webp"
                  alt={t('home.section2.cards.card1.title')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 leading-tight">{t('home.section2.cards.card1.title')}</h3>
                  <p className="text-xs sm:text-sm text-gray-200 leading-tight">{t('home.section2.cards.card1.description')}</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 rounded-lg"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative h-48 sm:h-56 lg:h-64">
                <Image
                  src="/images/home/section5-image2.webp"
                  alt={t('home.section2.cards.card2.title')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 leading-tight">{t('home.section2.cards.card2.title')}</h3>
                  <p className="text-xs sm:text-sm text-gray-200 leading-tight">{t('home.section2.cards.card2.description')}</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-white shadow-xl overflow-hidden md:col-span-2 lg:col-span-1 hover:shadow-2xl transition-shadow duration-300 rounded-lg"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative h-48 sm:h-56 lg:h-64">
                <Image
                  src="/images/home/section5-image3.webp"
                  alt={t('home.section2.cards.card3.title')}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 leading-tight">{t('home.section2.cards.card3.title')}</h3>
                  <p className="text-xs sm:text-sm text-gray-200 leading-tight">{t('home.section2.cards.card3.description')}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom section with additional content */}
      <div className="bg-white py-8 sm:py-12 lg:py-16 relative z-[1] overflow-visible">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Left Content - Image */}
            <motion.div className="relative order-2 lg:order-1" variants={imageVariants}>
              <div className="relative w-full h-auto shadow-2xl rounded-lg overflow-hidden">
                <Image
                  src="/images/home/section2.1-imagen.webp"
                  alt={t('home.section2_1.title')}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Text overlay - responsive positioning */}
                <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 bg-gradient-to-r from-[#A8C8FF] to-[#8A90FF] text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 max-w-[343px] min-h-[145px] shadow-lg rounded-lg flex items-center justify-center">
                  <p className="text-sm sm:text-base lg:text-lg font-semibold leading-tight">
                    {t('home.section2_1.imageOverlay')}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Text */}
            <motion.div className="space-y-6 sm:space-y-8 order-1 lg:order-2" variants={itemVariants}>
              <div className="text-center lg:text-left">
                <p className="text-gray-600 text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 sm:mb-4">
                  {t('home.section2_1.subtitle')}
                </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                  {t('home.section2_1.title')}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                  {t('home.section2_1.description')}
                </p>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {t('home.section2_1.content')} <span className="text-blue-600 cursor-pointer hover:underline transition-colors duration-200">{t('home.section2_1.viewMore')}</span>
                </p>
              </div>

              {/* Features List - responsive grid */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                variants={containerVariants}
              >
                {[1, 2, 3, 4].map((index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-2 sm:space-x-3"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: index * 0.1,
                          duration: 0.5
                        }
                      }
                    }}
                  >
                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-xs sm:text-sm leading-tight">{t(`home.section2_1.features.feature${index}`)}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Founder Section - responsive layout */}
              <motion.div
                className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {/* Founder Photo */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-purple-500 rounded-full overflow-hidden relative">
                    <Image
                      src="/images/home/profile.webp"
                      alt="Gerson Almeida"
                      fill
                      className="object-cover rounded-full"
                      sizes="48px"
                    />
                  </div>
                </div>

                {/* Founder Info */}
                <div className="text-center lg:text-left">
                  <h3 className="text-sm sm:text-base font-semibold text-blue-500 leading-tight">
                    {t('home.section2_1.profile.name')}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-tight">
                    {t('home.section2_1.profile.title')}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TechnologySection