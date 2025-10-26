import { useState } from 'react';
import { COLORS } from '../constants';

function WelcomeScreen({ onStart }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } catch (err) {
        console.error('Erro ao entrar em tela cheia:', err);
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleStart = async () => {
    if (!isFullscreen) {
      await toggleFullscreen();
    }
    onStart();
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: `linear-gradient(135deg, ${COLORS.background} 0%, #1a0f7a 100%)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: COLORS.text,
        padding: '40px',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '3.5rem',
            marginBottom: '20px',
            fontWeight: 'bold',
          }}
        >
          Bem-vindo
        </h1>

        <p
          style={{
            fontSize: '1.5rem',
            marginBottom: '60px',
            opacity: 0.9,
          }}
        >
          Sistema de Apresentações - Escola da Palavra
        </p>

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '40px',
            marginBottom: '40px',
            backdropFilter: 'blur(10px)',
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              marginBottom: '30px',
              fontWeight: '600',
            }}
          >
            Controles de Navegação
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              textAlign: 'left',
            }}
          >
            {/* Setas do teclado */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '5px' }}>
                  Setas do Teclado
                </div>
                <div style={{ fontSize: '1rem', opacity: 0.8 }}>
                  Use ← → para navegar entre slides
                </div>
              </div>
            </div>

            {/* Espaço */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="10" width="18" height="4" rx="2" />
              </svg>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '5px' }}>
                  Barra de Espaço
                </div>
                <div style={{ fontSize: '1rem', opacity: 0.8 }}>
                  Avançar para próximo slide
                </div>
              </div>
            </div>

            {/* Clique nos cantos */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '5px' }}>
                  Clique nos Cantos
                </div>
                <div style={{ fontSize: '1rem', opacity: 0.8 }}>
                  Esquerda: voltar | Direita: avançar
                </div>
              </div>
            </div>

            {/* Home/End */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '5px' }}>
                  Home / End
                </div>
                <div style={{ fontSize: '1rem', opacity: 0.8 }}>
                  Ir para primeiro ou último slide
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleStart}
          style={{
            fontSize: '1.5rem',
            padding: '20px 60px',
            background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(76, 175, 80, 0.4)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            margin: '0 auto',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(76, 175, 80, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(76, 175, 80, 0.4)';
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
          Iniciar Apresentação
        </button>
      </div>
    </div>
  );
}

export default WelcomeScreen;
