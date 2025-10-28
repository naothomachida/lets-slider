import { useState, useEffect } from 'react';

/**
 * Hook para detectar se a tela está em orientação vertical
 * Retorna true quando altura > largura
 */
export const useVerticalOrientation = () => {
  const [isVertical, setIsVertical] = useState(() => {
    return window.innerHeight > window.innerWidth;
  });

  useEffect(() => {
    const checkOrientation = () => {
      setIsVertical(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  return isVertical;
};

/**
 * Hook para detectar telas pequenas (mobile)
 * Retorna true quando largura < 768px ou altura < 500px (mobile landscape)
 */
export const useSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(() => {
    return window.innerWidth < 768 || window.innerHeight < 500;
  });

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768 || window.innerHeight < 500);
    };

    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('orientationchange', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('orientationchange', checkScreenSize);
    };
  }, []);

  return isSmallScreen;
};
