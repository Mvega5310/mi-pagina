import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import aboutImg from '../../../assets/images/home/section4-image1.jpg';

const AboutSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            {t("home.section4.title")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            {t("home.section4.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Side - Tabs */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1">
              {['mission', 'vision', 'history'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`group relative flex-1 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ease-in-out overflow-hidden ${
                    activeTab === tab
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-gray-900 bg-transparent border-t-2 border-blue-500'
                  }`}
                >
                  {/* Hover animation overlay for inactive tabs */}
                  {activeTab !== tab && (
                    <div className="absolute inset-0 bg-blue-500 origin-top transform scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" />
                  )}
                  
                  {/* Tab text with proper z-index */}
                  <span className={`relative z-10 transition-colors duration-300 ${
                    activeTab === tab ? 'text-white' : 'text-gray-900 group-hover:text-white'
                  }`}>
                    {t("home.section4.tabs." + tab)}
                  </span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-gray-50 p-4 sm:p-6">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {t("home.section4.tabs." + activeTab)}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                {t("home.section4.content." + activeTab + ".description")}
              </p>
            </div>
          </div>

          {/* Right Side - Static Content */}
          <div className="mt-4 lg:mt-0 space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {t("home.section4.staticDescription")}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                {t("home.section4.staticDescription")}
              </p>
            </div>

            {/* Static Checkmark List */}
            <div className="space-y-2 sm:space-y-3">
              {["Making this first true generator", "Lorem Ipsum is not simply", "If you are going to passage"].map((item, index) => (
                <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Responsive Full Width Image */}
        <div className="w-full mt-8 sm:mt-12 lg:mt-16">
          <div className="relative w-full max-w-7xl mx-auto">
            <div className="relative overflow-hidden shadow-2xl h-64 sm:h-80 md:h-96 lg:h-[410px]">
              {/* Background Image */}
              <img
                src={aboutImg}
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              
              {/* Blue Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#A8C8FF]/70 via-[#B8D4FF]/65 to-[#8B9EFF]/60"></div>
              
              {/* Content Overlay - Responsive */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-2 sm:mb-3 lg:mb-4 leading-tight max-w-4xl">
                  Always delivering quality solutions
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8 opacity-90 max-w-2xl leading-relaxed">
                  Lorem ipsum is are many variations of pass.
                </p>
                <button 
                  className="bg-gray-900 hover:bg-black text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/50"
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