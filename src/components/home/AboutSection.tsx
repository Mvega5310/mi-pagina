import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section className="bg-white py-24 px-4">
      <div className="relative max-w-7xl mx-auto mb-48">
        {/* Top Section - Header with two columns */}
        <div className="mb-12">
          {/* Two column header */}
          <div className="grid lg:grid-cols-2 gap-1 lg:gap-16 items-start">
            {/* Left - Main Title */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <p className="text-[#7B43D6] text-sm font-bold">
                  {t("home.section4.subtitle")}
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {t("home.section4.title")}
                </h2>
              </div>

              {/* Middle Section - Tabs and Dynamic Content */}
              <div className="mb-16">
                {/* Tabs */}
                <div className="flex gap-2 mb-6">
                  {['mission', 'vision', 'history'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 text-sm font-medium transition-all duration-300 border-t-2 relative ${activeTab === tab
                          ? 'bg-[#70A8FF] text-white border-t-[#70A8FF]'
                          : 'bg-white text-gray-600 border-t-[#70A8FF] hover:bg-gray-200'
                        }`}
                    >
                      {t("home.section4.tabs." + tab)}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="space-y-6">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {t("home.section4.content." + activeTab + ".description")}
                  </p>

                  {/* Dynamic Checkmark List */}
                  <div className="space-y-4">
                    {(() => {
                      const points = t("home.section4.content." + activeTab + ".points", { returnObjects: true });
                      const pointsArray = Array.isArray(points) ? points : [];
                      return pointsArray.map((point, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm font-medium">{point}</span>
                        </div>
                      ));
                    })()}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Description */}
            <div>
              <p className="mt-4 text-gray-600 ">
                {t("home.section4.staticDescription")}
              </p>

              {/* Checkmark List */}
              <div className="space-y-3 mt-6">
                {(() => {
                  try {
                    const points = t("home.section4.staticPoints", { returnObjects: true });
                    const pointsArray = Array.isArray(points) ? points : [];
                    return pointsArray.map((point, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm font-medium">{point}</span>
                      </div>
                    ));
                  } catch (error) {
                    return [];
                  }
                })()}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Full Width Image */}
        <div className='absolute w-full'>
        <div className="flex justify-center w-full">
          <div className="relative max-w-4xl w-full">
            <img
              src="src/assets/images/home/section4-image1.jpg"
              alt={t("home.section4.title")}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
        </div>


      </div>
    </section>
  );
};

export default AboutSection;