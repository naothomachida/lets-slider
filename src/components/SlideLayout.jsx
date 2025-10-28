import { COLORS } from '../constants';
import { useEffect, useRef, useState } from 'react';

const SlideLayout = ({ children, isVertical = false }) => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!isVertical || !containerRef.current) return;

    const calculateScale = () => {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;

      // Escala baseada em uma resolução de referência de 1920x1080
      const baseWidth = 1920;
      const baseHeight = 1080;

      // Calcula escala com base em largura e altura, usando a menor para garantir que tudo caiba
      const scaleByWidth = containerWidth / baseWidth;
      const scaleByHeight = containerHeight / baseHeight;
      const newScale = Math.min(scaleByWidth, scaleByHeight);

      setScale(newScale);
    };

    calculateScale();

    const resizeObserver = new ResizeObserver(calculateScale);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [isVertical]);

  // Em modo vertical, os slides são cards com largura 100% e altura proporcional (16:9)
  if (isVertical) {
    return (
      <div
        ref={containerRef}
        style={{
          width: '100%',
          aspectRatio: '16/9',
          backgroundColor: COLORS.background,
          color: COLORS.text,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Container escalado para miniatura */}
        <div
          className="no-animations"
          style={{
            width: '1920px',
            height: '1080px',
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  // Modo horizontal padrão (tela cheia)
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: COLORS.background,
        color: COLORS.text,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
};

export default SlideLayout;
