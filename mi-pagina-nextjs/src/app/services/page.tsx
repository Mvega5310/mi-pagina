'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import SEO from '@/components/SEO'

const ServicesPage = () => {
  const { t } = useTranslation()

  const services = [
    {
      id: 'manage_it',
      image: '/images/services/section1-imagen1.jpg',
      titleKey: 'services.manage_it.title',
      descriptionKey: 'services.manage_it.description'
    },
    {
      id: 'cyber_security',
      image: '/images/services/section1-imagen2.jpg',
      titleKey: 'services.cyber_security.title',
      descriptionKey: 'services.cyber_security.description'
    },
    {
      id: 'digital_experience',
      image: '/images/services/section1-imagen3.jpg',
      titleKey: 'services.digital_experience.title',
      descriptionKey: 'services.digital_experience.description'
    }
  ]

  // Definición de los servicios de la segunda sección con sus iconos correspondientes
  const serviceIcons = [
    {
      id: 'product_development',
      icon: '/images/services/icons/section2-icon1.svg',
      titleKey: 'services.section2.product_development.title',
      descriptionKey: 'services.section2.product_development.description'
    },
    {
      id: 'ui_ux',
      icon: '/images/services/icons/section2-icon2.svg',
      titleKey: 'services.section2.ui_ux.title',
      descriptionKey: 'services.section2.ui_ux.description'
    },
    {
      id: 'digital_marketing',
      icon: '/images/services/icons/section2-icon3.svg',
      titleKey: 'services.section2.digital_marketing.title',
      descriptionKey: 'services.section2.digital_marketing.description'
    },
    {
      id: 'content_management',
      icon: '/images/services/icons/section2-icon4.svg',
      titleKey: 'services.section2.content_management.title',
      descriptionKey: 'services.section2.content_management.description'
    },
    {
      id: 'data_analysis',
      icon: '/images/services/icons/section2-icon5.svg',
      titleKey: 'services.section2.data_analysis.title',
      descriptionKey: 'services.section2.data_analysis.description'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={t('seo.services.title', 'Servicios de Desarrollo de Software | Friendsoft')}
        description={t('seo.services.description', 'Servicios profesionales de desarrollo web, aplicaciones móviles, UX/UI, marketing digital y consultoría tecnológica. Soluciones personalizadas para tu empresa.')}
        keywords={t('seo.services.keywords', 'servicios desarrollo software, desarrollo web, aplicaciones móviles, UX/UI design, marketing digital, consultoría TI, gestión contenido, análisis datos')}
        type="service"
        image={'/images/services/section1-imagen1.webp'}
        url="/services"
      />

      {/* Primera sección de servicios - Responsive */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid de servicios - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                {/* Imagen de fondo - Responsive height */}
                <div className="relative h-64 sm:h-72 lg:h-80">
                  <img
                    src={service.image}
                    alt={t(service.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Contenido de texto - Responsive */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 leading-tight">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {t(service.descriptionKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segunda sección de servicios con fondo gradiente - Responsive */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-bl from-[#565CFD] to-[#70A8FF] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado de la sección - Responsive */}
          <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-32 mb-8 sm:mb-12 lg:mb-16">
            <div className="mb-6 lg:mb-0">
              <h4 className="text-xs sm:text-sm font-medium mb-2 sm:mb-3 uppercase tracking-wide">{t('services.section2.title')}</h4>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">{t('services.section2.subtitle')}</h2>
            </div>
            <div className="lg:mt-2">
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t('services.section2.description')}
              </p>
            </div>
          </div>

          {/* Grid de servicios con iconos - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {serviceIcons.map((service) => (
              <div key={service.id} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <img
                    src={service.icon}
                    alt={t(service.titleKey)}
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {t(service.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tercera sección de servicios con imagen y características - Responsive */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
            {/* Imagen con overlay - Responsive */}
            <div className="relative order-1 mb-8 sm:mb-12 lg:mb-0">
              {/* Contenedor para posicionamiento relativo */}
              <div className="flex flex-col lg:relative">
                {/* Imagen principal - Responsive */}
                <div className="overflow-hidden">
                  <img 
                    src="/images/services/section3-imagen1.jpg"
                    alt={t('services.section3.title')}
                    className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] xl:h-[500px] object-cover"
                  />
                </div>
                
                {/* Overlay azul con contenido - Completamente responsive */}
                <div className="lg:absolute 
                  bottom-4 left-4 right-4 
                  sm:bottom-6 sm:left-6 sm:right-6 
                  md:-bottom-8 md:left-8 md:right-8 
                  lg:-right-12 lg:bottom-auto lg:top-1/2 lg:left-auto lg:transform lg:-translate-y-1/2 lg:w-64 
                  xl:-right-16 xl:w-72 
                  z-10 bg-[#6366F1] text-white p-4 sm:p-5 lg:p-6 shadow-xl 
                  flex flex-col justify-between min-h-[200px] sm:min-h-[240px] lg:min-h-[280px]">
                  
                  {/* Contenido principal */}
                  <div className="flex-1">
                    <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
                      {t('services.section3.description')}
                    </p>
                  </div>
                  
                  {/* Botón siempre visible en la parte inferior */}
                  <div className="mt-4 sm:mt-6 flex-shrink-0">
                    <button className="text-white font-medium hover:underline flex items-center group transition-all duration-200 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/50">
                      {t('services.section3.button')}
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido de texto - Responsive */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-2">
              {/* Encabezado - Responsive */}
              <div>
                <h4 className="text-[#6366F1] text-xs sm:text-sm font-semibold mb-2 sm:mb-3 uppercase tracking-wider">
                  {t('services.section3.subtitle')}
                </h4>
                <h2 className="!text-2xl sm:!text-3xl lg:!text-4xl xl:!text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">
                  {t('services.section3.title')}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 lg:mb-8">
                  {t('services.section3.description')}
                </p>
              </div>

              {/* Características - Responsive */}
              <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                {/* Característica 1 */}
                <div className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2BE4AC] flex items-center justify-center group-hover:bg-[#26D0A4] transition-colors duration-200">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm!text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                      {t('services.section3.feature1.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {t('services.section3.feature1.description')}
                    </p>
                  </div>
                </div>

                {/* Característica 2 */}
                <div className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2BE4AC] flex items-center justify-center group-hover:bg-[#26D0A4] transition-colors duration-200">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                      {t('services.section3.feature2.title')}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {t('services.section3.feature2.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage