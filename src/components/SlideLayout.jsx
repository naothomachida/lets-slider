import { COLORS } from '../constants';

const SlideLayout = ({ children, isVertical = false }) => {
  // Em modo vertical, os slides são cards com largura 100% e altura proporcional (16:9)
  if (isVertical) {
    return (
      <div
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
        {children}
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
