'use client'

import React from 'react'
import Image from 'next/image'

const LogoSection = () => {
  return (
    <section className="py-8 sm:py-12 bg-white">
      {/* Top border line */}
      <div className="w-full h-px bg-gray-200 mb-8 sm:mb-12"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center justify-items-center">
          {/* Render 4 logos */}
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex-shrink-0">
              <Image 
                src="/icons/home/section7-logo.svg" 
                alt="Company logo" 
                width={120}
                height={48}
                className="h-8 sm:h-10 md:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoSection