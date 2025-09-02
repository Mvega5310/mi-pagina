'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'

interface IndustryCard {
  icon: string
  title: string
}

const IndustriesSection: React.FC = () => {
  const { t } = useTranslation()

  const industries: IndustryCard[] = [
    {
      icon: '/icons/home/section8.icon1.svg',
      title: t('home.section8.industries.banking'),
    },
    {
      icon: '/icons/home/section8.icon2.svg',
      title: t('home.section8.industries.healthcare'),
    },
    {
      icon: '/icons/home/section8.icon3.svg',
      title: t('home.section8.industries.education'),
    },
    {
      icon: '/icons/home/section8.icon4.svg',
      title: t('home.section8.industries.manufacturing'),
    },
    {
      icon: '/icons/home/section8.icon5.svg',
      title: t('home.section8.industries.markets'),
    }
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4" style={{ backgroundColor: '#7B43D6' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-start mb-6 sm:mb-8 md:mb-12 ml-0 sm:ml-[5.5rem]">
          <p className="text-white/80 text-xs sm:text-sm font-medium mb-2 sm:mb-3 md:mb-4 tracking-wide uppercase">
            {t('home.section8.subtitle')}
          </p>
          <h2 className="text-white !text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl xl:!text-5xl !font-bold !leading-tight max-w-2xl px-2">
            {t('home.section8.title')}
          </h2>
        </div>

        {/* Mobile View - Vertical List */}
        <div className="block sm:hidden space-y-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex items-center space-x-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center">
                <Image
                  src={industry.icon}
                  alt={industry.title}
                  className="w-12 h-12"
                  width={48}
                  height={48}
                />
              </div>

              {/* Title */}
              <h3 className="text-black text-lg font-semibold flex-grow">
                {industry.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Tablet and Desktop View - Original Grid */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 justify-items-center">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 rounded-lg flex flex-col items-center justify-center text-center p-3 md:p-4 lg:p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-2 md:mb-3 lg:mb-4">
                  <Image
                    src={industry.icon}
                    alt={industry.title}
                    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
                    width={96}
                    height={96}
                  />
                </div>

                {/* Title */}
                <h3 className="text-black text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                  {industry.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection