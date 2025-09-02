'use client'

import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'

const AboutSection = () => {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('mission')

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl xl:!text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            {t("home.section4.title")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            {t("home.section4.subtitle")}
          </p>
        </div>
        {/* Simple Tabs Layout */}
        <div className="space-y-8">
          {/* Interactive Tab Buttons */}
          <div className="flex justify-start space-x-4">
            {['mission', 'vision', 'history'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`group relative px-6 py-3 text-base font-medium transition-all duration-300 overflow-hidden ${activeTab === tab
                  ? 'bg-blue-500 text-white'
                  : 'bg-transparent text-gray-900 border-t-2 border-blue-500'
                  }`}
              >
                {/* Animated blue stripe for inactive tabs on hover */}
                {activeTab !== tab && (
                  <div className="absolute top-0 left-0 w-full h-full bg-blue-500 transform scale-y-0 origin-top transition-transform duration-300 ease-out group-hover:scale-y-100" />
                )}

                {/* Tab text with proper z-index */}
                <span className={`relative z-10 transition-colors duration-300 ${activeTab === tab ? 'text-white' : 'text-gray-900 group-hover:text-white'
                  }`}>
                  {t("home.section4.tabs." + tab)}
                </span>
              </button>
            ))}
          </div>

          {/* Content Layout - Two columns on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Side - Tab Content */}
            <div className="bg-gray-50 p-6 lg:p-8 rounded-xl shadow-sm">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
                {t("home.section4.tabs." + activeTab)}
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                {t("home.section4.content." + activeTab + ".description")}
              </p>
            </div>

            {/* Right Side - Static Content */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">
                  Beneficios adicionales
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-6 lg:mb-8">
                  {t("home.section4.staticDescription")}
                </p>
              </div>

              {/* Static Checkmark List */}
              <div className="space-y-3 lg:space-y-4">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="flex items-start space-x-3 lg:space-x-4">
                    <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 font-medium">{t(`home.section4.staticPoints.${index}`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Responsive Full Width Image */}
        <div className="w-full mt-8 sm:mt-12 lg:mt-16">
          <div className="relative w-full max-w-7xl mx-auto">
            <div className="relative overflow-hidden shadow-2xl h-64 sm:h-80 md:h-96 lg:h-[410px]">
              {/* Background Image */}
              <Image
                src="/images/home/section4-image1.jpg"
                alt="Team collaboration"
                className="w-full h-full object-cover"
                width={1200}
                height={410}
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
  )
}

export default AboutSection