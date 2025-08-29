'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#1F0951] text-white py-12 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/bg-footer.png"
          alt="Background"
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-20 relative z-10">
        {/* Logo and social media at top */}
        <div className="flex justify-between items-center mb-12">
          <Image
            src="/images/logo-white.svg"
            alt="Friendsoft"
            width={120}
            height={40}
            className="h-10"
            priority
          />

          {/* Social media icons */}
          {/* <div className="flex space-x-4" role="list" aria-label="Social media links">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
              aria-label="Follow us on Twitter (opens in new tab)"
            >
              <Image 
                src="/images/x.svg" 
                alt="" 
                width={20} 
                height={20} 
                className="h-5 w-5" 
                loading="lazy" 
              />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
              aria-label="Follow us on Facebook (opens in new tab)"
            >
              <Image 
                src="/images/facebook.svg" 
                alt="" 
                width={20} 
                height={20} 
                className="h-5 w-5" 
                loading="lazy" 
              />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
              aria-label="Follow us on Instagram (opens in new tab)"
            >
              <Image 
                src="/images/instagram.svg" 
                alt="" 
                width={20} 
                height={20} 
                className="h-5 w-5" 
                loading="lazy" 
              />
            </a>
          </div> */}
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Links section */}
          <nav aria-labelledby="footer-links-heading">
            <h3 id="footer-links-heading" className="text-lg font-medium uppercase tracking-wider mb-6">LINKS</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact section */}
          <div>
            <h3 className="text-lg font-medium uppercase tracking-wider mb-6">CONTACT</h3>
            <address className="space-y-3 text-gray-300 not-italic">
              <div className="flex items-center">
                <span className="mr-2" aria-hidden="true">📞</span>
                <a href="tel:+573003519363" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded">
                  +57 (300)-351 9363
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2" aria-hidden="true">✉️</span>
                <a href="mailto:gerson.almeida@friendsoft.co" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 rounded">
                  gerson.almeida@friendsoft.co
                </a>
              </div>
              <div className="flex items-start">
                <span className="mr-2" aria-hidden="true">📍</span>
                <span>Trans 44 # 100 - 82 Cartagena, Colombia</span>
              </div>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4">
          <div className="text-sm text-gray-400 flex items-center">
            Copyright © {year} all right reserved by
            <Image
              src="/images/logo-white.svg"
              alt="Friendsoft"
              width={60}
              height={16}
              className="h-4 ml-1"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer