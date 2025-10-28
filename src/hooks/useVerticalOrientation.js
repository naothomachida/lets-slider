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
