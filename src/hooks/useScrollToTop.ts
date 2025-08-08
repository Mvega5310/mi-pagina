import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook personalizado que hace scroll al inicio de la página cuando cambia la ruta
 * @param behavior - Comportamiento del scroll ('smooth' | 'instant' | 'auto')
 */
export const useScrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  const location = useLocation();

  useEffect(() => {
    // Hacer scroll al inicio de la página cuando cambie la ruta
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: behavior
    });
  }, [location.pathname, behavior]);
};

export default useScrollToTop;