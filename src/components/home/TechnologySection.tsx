import React from 'react';
import { useTranslation } from 'react-i18next';

const TechnologySection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative">
      <div className="py-24 lg:py-20 bg-gradient-to-br from-[#70A8FF] to-[#565CFD] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 pb-28 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-blue-200 text-sm font-medium uppercase tracking-wider">
                {t("home.section2.subtitle")}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {t("home.section2.title")}
              </h2>
            </div>

            {/* Right Content - Description */}
            <div className="lg:pt-12">
              <p className="text-blue-100 text-lg leading-relaxed">
                {t("home.section2.description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with additional content */}
      <div className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-gray-600 text-sm font-medium uppercase tracking-wider mb-4">
                  {t("home.section2_1.subtitle")}
                </p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                  {t("home.section2_1.title")}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t("home.section2_1.content")} <span className="text-blue-600 cursor-pointer hover:underline">{t("home.section2_1.viewMore")}</span>
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-1">
                    <img
                      src="src\assets\icons\check.svg"
                      alt={t("home.section2_1.title")}
                      className="w-full h-full rounded-2xl"
                    />
                  </div>
                  <p className="text-gray-700">{t("home.section2_1.features.feature1")}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-1">
                    <img
                      src="src\assets\icons\check.svg"
                      alt={t("home.section2_1.title")}
                      className="w-full h-full rounded-2xl"
                    />
                  </div>
                  <p className="text-gray-700">{t("home.section2_1.features.feature2")}</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-1">
                    <img
                      src="src\assets\icons\check.svg"
                      alt={t("home.section2_1.title")}
                      className="w-full h-full rounded-2xl"
                    />
                  </div>
                  <p className="text-gray-700">{t("home.section2_1.features.feature3")}</p>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <img
                src="src/assets/images/home/section2-imagen1.jpg"
                alt={t("home.section2_1.title")}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;