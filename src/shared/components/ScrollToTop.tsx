import React from 'react';
import { useFloatingScrollToTop } from '../hooks/useFloatingScrollToTop';

/**
 * Floating scroll-to-top button component
 * Appears when user scrolls down and provides quick access to top
 */
const ScrollToTop: React.FC = () => {
  const { isVisible, scrollToTop } = useFloatingScrollToTop(400);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-8 right-8 z-50
        w-12 h-12
        bg-gradient-to-t from-slate-100 to-white
        hover:from-slate-200 hover:to-slate-50
        border border-slate-200
        rounded-full
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-in-out
        transform hover:scale-105
        flex items-center justify-center
        group
        backdrop-blur-sm
      "
      aria-label="Volver al inicio"
      title="Volver al inicio"
    >
      <svg
        className="w-5 h-5 text-slate-600 group-hover:text-slate-800 transition-colors duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;