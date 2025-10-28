import { COLORS } from '../constants';
import { useEffect, useRef, useState } from 'react';

const SlideLayout = ({ children, isVertical = false }) => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [useScaling, setUseScaling] = useState(false);

  useEffect(() => {
    const checkIfNeedsScaling = () => {
      // Usa escala se for modo vertical (cards) OU se for tela pequena
      const isSmallScreen = window.innerWidth < 768 || window.innerHeight < 500;
      setUseScaling(isVertical || isSmallScreen);
    };

    checkIfNeedsScaling();
    window.addEventListener('resize', checkIfNeedsScaling);
    return () => window.removeEventListener('resize', checkIfNeedsScaling);
  }, [isVertical]);

  useEffect(() => {
    if (!useScaling || !containerRef.current) return;

    const calculateScale = () => {
      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;

      // Escala baseada em uma resolução de referência de 1920x1080
      const baseWidth = 1920;
      const baseHeight = 1080;

      // Calcula escala com base em largura e altura, usando a menor para garantir que tudo caiba
      const scaleByWidth = containerWidth / baseWidth;
      const scaleByHeight = containerHeight / baseHeight;
      let newScale = Math.min(scaleByWidth, scaleByHeight);

      // Reduz um pouco a escala para dar margem de segurança (especialmente para o footer)
      // Isso garante que elementos nas bordas não sejam cortados
      newScale = newScale * 0.95; // 5% de margem de segurança

      setScale(newScale);
    };

    calculateScale();

    const resizeObserver = new ResizeObserver(calculateScale);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [useScaling]);

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
  // Se precisar de escala (tela pequena), usa container escalado
  if (useScaling) {
    return (
      <div
        ref={containerRef}
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: COLORS.background, // Fundo azul no container externo
          color: COLORS.text,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Container escalado com fundo azul também */}
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
            backgroundColor: COLORS.background, // Fundo azul no container escalado também
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  // Desktop normal - sem escala
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
