'use client'

import { useState, useEffect } from 'react'

/**
 * Hook to manage floating scroll-to-top button functionality
 * Shows/hides the scroll button based on scroll position
 */
export const useFloatingScrollToTop = (threshold: number = 300) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [threshold])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return { isVisible, scrollToTop }
}

export default useFloatingScrollToTop