import React from 'react';
import { useTranslation } from 'react-i18next';

const TechnologySection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative z-[50] overflow-visible">
      <div className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-[#70A8FF] to-[#565CFD] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 pb-8 sm:pb-12 lg:pb-16 items-start">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <p className="text-blue-200 text-xs sm:text-sm font-medium uppercase tracking-wider">
                {t("home.section2.subtitle")}
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                {t("home.section2.title")}
              </h2>
            </div>

            {/* Right Content - Description */}
            <div className="mt-4 lg:mt-0 lg:pt-8 xl:pt-12 text-center lg:text-left">
              <p className="text-blue-100 text-sm sm:text-base lg:text-lg leading-relaxed">
                {t("home.section2.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cards Section - Three horizontal cards overlapping blue and white sections */}
      <div className="relative -mt-12 sm:-mt-16 lg:-mt-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-48 sm:h-56 lg:h-64">
                <img
                   src="src/assets/images/home/section2-imagen1.jpg"
                   alt={t("home.section2.cards.card1.title")}
                   className="w-full h-full object-cover"
                 />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 leading-tight">{t("home.section2.cards.card1.title")}</h3>
                  <p className="text-xs sm:text-sm text-gray-200 leading-tight">{t("home.section2.cards.card1.description")}</p>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-48 sm:h-56 lg:h-64">
                <img
                   src="src/assets/images/home/section2-imagen2.jpg"
                   alt={t("home.section2.cards.card2.title")}
                   className="w-full h-full object-cover"
                 />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 leading-tight">{t("home.section2.cards.card2.title")}</h3>
                  <p className="text-xs sm:text-sm text-gray-200 leading-tight">{t("home.section2.cards.card2.description")}</p>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white shadow-xl overflow-hidden md:col-span-2 lg:col-span-1 hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-48 sm:h-56 lg:h-64">
                <img
                   src="src/assets/images/home/section2-imagen3.jpg"
                   alt={t("home.section2.cards.card3.title")}
                   className="w-full h-full object-cover"
                 />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 leading-tight">{t("home.section2.cards.card3.title")}</h3>
                  <p className="text-xs sm:text-sm text-gray-200 leading-tight">{t("home.section2.cards.card3.description")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with additional content */}
      <div className="bg-white py-8 sm:py-12 lg:py-16 relative z-[1] overflow-visible">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content - Image */}
            <div className="relative order-2 lg:order-1">
              <img
                src="src/assets/images/home/section2.1-imagen.jpg"
                alt={t("home.section2_1.title")}
                className="w-full h-auto shadow-2xl"
              />
              {/* Text overlay - responsive positioning */}
              <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 bg-gradient-to-r from-[#A8C8FF] to-[#8A90FF] text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 w-[343px] h-[145px] shadow-lg rounded-lg flex items-center justify-center">
                <p className="text-sm sm:text-base lg:text-lg font-semibold leading-tight">
                  {t("home.section2_1.imageOverlay")}
                </p>
              </div>
            </div>

            {/* Right Content - Text */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div className="text-center lg:text-left">
                <p className="text-gray-600 text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 sm:mb-4">
                  {t("home.section2_1.subtitle")}
                </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                  {t("home.section2_1.title")}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                  {t("home.section2_1.description")}
                </p>
                <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {t("home.section2_1.content")} <span className="text-blue-600 cursor-pointer hover:underline transition-colors duration-200">{t("home.section2_1.viewMore")}</span>
                </p>
              </div>

              {/* Features List - responsive grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-tight">{t("home.section2_1.features.feature1")}</p>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-tight">{t("home.section2_1.features.feature2")}</p>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-tight">{t("home.section2_1.features.feature3")}</p>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-tight">{t("home.section2_1.features.feature4")}</p>
                </div>
              </div>

              {/* Founder Section - responsive layout */}
              <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
                {/* Founder Photo */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-purple-500 rounded-full overflow-hidden">
                    <img
                      src="src/assets/images/home/profile.png"
                      alt="Gerson Almeida"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                
                {/* Founder Info */}
                <div className="text-center lg:text-left">
                  <h3 className="text-sm sm:text-base font-semibold text-blue-500 leading-tight">
                    {t("home.section2_1.profile.name")}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-tight">
                    {t("home.section2_1.profile.title")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default TechnologySection;