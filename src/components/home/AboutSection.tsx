import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section className="bg-white pt-8 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-24 text-center">
        {/* Top Section - Header with two columns */}
        <div className="mb-8 sm:mb-12">
          {/* Two column header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start text-left">
            {/* Left - Main Title */}
            <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
              <div className="flex flex-col gap-4 sm:gap-6">
                <p className="text-[#7B43D6] text-sm font-bold">
                  {t("home.section4.subtitle")}
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {t("home.section4.title")}
                </h2>
              </div>

              {/* Middle Section - Tabs and Dynamic Content */}
              <div className="mb-8 sm:mb-12 lg:mb-16">
                {/* Tabs */}
                <div className="flex flex-col sm:flex-row gap-2 mb-4 sm:mb-6">
                  {['mission', 'vision', 'history'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 border-t-2 relative w-full sm:w-auto text-center ${activeTab === tab
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
                </div>
              </div>
            </div>

            {/* Right - Description */}
            <div className="mt-8 lg:mt-4">
              <p className="text-gray-600 text-sm sm:text-base">
                {t("home.section4.staticDescription")}
              </p>

              {/* Static Checkmark List */}
              <div className="mt-6 space-y-3">
                {["Making this first true generator", "Lorem Ipsum is not simply", "If you are going to passage"].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Full Width Image */}
        <div className="w-full mt-16">
          <div className="relative w-full max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: '410px', width: '1136px', margin: '0 auto' }}>
              {/* Background Image */}
              <img
                src="src/assets/images/home/section4-image1.jpg"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              
              {/* Blue Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#70A8FF]/85 via-[#70A8FF]/80 to-[#565CFD]/75"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight max-w-3xl">
                  Always delivering quality solutions
                </h3>
                <p className="text-lg md:text-xl mb-8 opacity-90 max-w-lg leading-relaxed">
                  Lorem ipsum is are many variations of pass.
                </p>
                <button 
                  className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Discover more
                </button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default AboutSection;