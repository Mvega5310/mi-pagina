import { useTranslation } from 'react-i18next'

const ServicesPage = () => {
  const { t } = useTranslation()

  const services = [
    {
      id: 'manage_it',
      image: 'src/assets/images/services/section1-imagen1.jpg',
      titleKey: 'services.manage_it.title',
      descriptionKey: 'services.manage_it.description'
    },
    {
      id: 'cyber_security',
      image: 'src/assets/images/services/section1-imagen2.jpg',
      titleKey: 'services.cyber_security.title',
      descriptionKey: 'services.cyber_security.description'
    },
    {
      id: 'digital_experience',
      image: 'src/assets/images/services/section1-imagen3.jpg',
      titleKey: 'services.digital_experience.title',
      descriptionKey: 'services.digital_experience.description'
    }
  ]

  // Definición de los servicios de la segunda sección con sus iconos correspondientes
  const serviceIcons = [
    {
      id: 'product_development',
      icon: 'src/assets/images/services/icons/section2-icon1.svg',
      titleKey: 'services.section2.product_development.title',
      descriptionKey: 'services.section2.product_development.description'
    },
    {
      id: 'ui_ux',
      icon: 'src/assets/images/services/icons/section2-icon2.svg',
      titleKey: 'services.section2.ui_ux.title',
      descriptionKey: 'services.section2.ui_ux.description'
    },
    {
      id: 'digital_marketing',
      icon: 'src/assets/images/services/icons/section2-icon3.svg',
      titleKey: 'services.section2.digital_marketing.title',
      descriptionKey: 'services.section2.digital_marketing.description'
    },
    {
      id: 'content_management',
      icon: 'src/assets/images/services/icons/section2-icon4.svg',
      titleKey: 'services.section2.content_management.title',
      descriptionKey: 'services.section2.content_management.description'
    },
    {
      id: 'data_analysis',
      icon: 'src/assets/images/services/icons/section2-icon5.svg',
      titleKey: 'services.section2.data_analysis.title',
      descriptionKey: 'services.section2.data_analysis.description'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Primera sección de servicios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Grid de servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Imagen de fondo */}
                <div className="relative h-80">
                  <img 
                    src={service.image}
                    alt={t(service.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Contenido de texto */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-3 leading-tight">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-sm text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {t(service.descriptionKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segunda sección de servicios con fondo gradiente diagonal desde esquina inferior izquierda */}
      <section className="py-20 bg-gradient-to-bl from-[#565CFD] to-[#70A8FF] text-white">
        <div className="container mx-auto px-4">
          {/* Encabezado de la sección */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-64 mb-16">
            <div>
              <h4 className="text-sm font-medium mb-2">{t('services.section2.title')}</h4>
              <h2 className="text-3xl font-bold mb-0">{t('services.section2.subtitle')}</h2>
            </div>
            <div>
              <p className="text-white/80 leading-relaxed md:mt-2">
                {t('services.section2.description')}
              </p>
            </div>
          </div>

          {/* Grid de servicios con iconos */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {serviceIcons.map((service) => (
              <div key={service.id} className="text-center">
                <div className="flex justify-center mb-6">
                  <img 
                    src={service.icon} 
                    alt={t(service.titleKey)}
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-lg font-bold mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {t(service.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tercera sección de servicios con imagen y características */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
            {/* Imagen con overlay */}
            <div className="relative order-2 lg:order-1 mb-16 lg:mb-0">
              {/* Contenedor para posicionamiento relativo */}
              <div className="relative">
                {/* Imagen principal */}
                <div className="rounded-2xl overflow-hidden">
                  <img 
                    src="src/assets/images/services/section3-imagen1.jpg"
                    alt={t('services.section3.title')}
                    className="w-full h-[400px] md:h-[450px] lg:h-[500px] object-cover"
                  />
                </div>
                
                {/* Overlay azul con contenido - posicionado responsivamente */}
                <div className="absolute 
                  -bottom-8 left-4 right-4 
                  sm:-bottom-12 sm:left-8 sm:right-8 
                  md:-right-8 md:bottom-auto md:top-1/2 md:left-auto md:transform md:-translate-y-1/2 
                  lg:-right-16 
                  xl:-right-20 
                  z-10 bg-[#6366F1] text-white p-4 md:p-6 rounded-lg shadow-xl 
                  w-auto md:w-[210px] h-auto md:h-[316px] 
                  flex flex-col justify-between overflow-hidden">
                  
                  {/* Contenido principal con scroll si es necesario */}
                  <div className="flex-1 overflow-y-auto scrollbar-hide">
                    <p className="text-sm md:text-base lg:text-lg font-medium leading-snug md:leading-relaxed 
                      break-words hyphens-auto text-ellipsis">
                      {t('services.section3.description')}
                    </p>
                  </div>
                  
                  {/* Botón siempre visible en la parte inferior */}
                  <div className="mt-4 md:mt-6 flex-shrink-0">
                    <button className="text-white font-medium hover:underline flex items-center group transition-all duration-200 text-sm md:text-base">
                      {t('services.section3.button')}
                      <svg className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Footnote */}
                  <div className="absolute bottom-1 right-2 text-[10px] text-white/50 hidden md:block">
                    210 Hug × 316 Hug
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido de texto */}
            <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
              {/* Encabezado */}
              <div>
                <h4 className="text-[#6366F1] text-sm font-semibold mb-3 uppercase tracking-wider">
                  {t('services.section3.subtitle')}
                </h4>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                  {t('services.section3.title')}
                </h2>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
                  {t('services.section3.description')}
                </p>
              </div>

              {/* Características */}
              <div className="space-y-4 lg:space-y-6">
                {/* Característica 1 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-[#2BE4AC] rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                      {t('services.section3.feature1.title')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t('services.section3.feature1.description')}
                    </p>
                  </div>
                </div>

                {/* Característica 2 */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-[#2BE4AC] rounded-full flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                      {t('services.section3.feature2.title')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
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