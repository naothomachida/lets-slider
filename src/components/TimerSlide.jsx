import { useState, useEffect } from 'react';
import SlideLayout from './SlideLayout';
import { IMAGES, LAYOUT, TITLE_SLIDE_DATA, ANIMATION } from '../constants';

const TimerSlide = ({ duration = 480, isVertical = false }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft]);

  // Efeito de pulse quando muda de minuto
  useEffect(() => {
    if (timeLeft > 0 && timeLeft < duration && timeLeft % 60 === 0) {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }
  }, [timeLeft, duration]);

  // Efeito de pulse a cada 10 segundos no último minuto (exceto últimos 10s)
  useEffect(() => {
    if (timeLeft <= 60 && timeLeft > 10 && timeLeft % 10 === 0) {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }
  }, [timeLeft]);

  // Efeito de pulse a cada segundo nos últimos 10 segundos
  useEffect(() => {
    if (timeLeft <= 10 && timeLeft > 0) {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }
  }, [timeLeft]);

  // Pulse contínuo quando chegar a 0
  useEffect(() => {
    if (timeLeft === 0) {
      setPulse(true);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(duration);
  };

  const handleAddTime = (seconds) => {
    setTimeLeft((time) => time + seconds);
  };

  const handleSubtractTime = (seconds) => {
    setTimeLeft((time) => Math.max(0, time - seconds));
  };

  const progress = ((duration - timeLeft) / duration) * 100;

  // Calcula cor gradual baseada no tempo restante
  const getTimerColor = () => {
    if (timeLeft < 60) {
      return '#FF3333'; // Vermelho no último minuto
    }

    const percentage = timeLeft / duration;

    if (percentage > 0.66) {
      return '#76c442'; // Verde inicial
    } else if (percentage > 0.33) {
      return '#FFB800'; // Amarelo no meio
    } else {
      return '#FF6B00'; // Laranja escuro
    }
  };

  return (
    <SlideLayout isVertical={isVertical}>
      {/* Logo Escola da Palavra no topo direito - SEM ANIMAÇÃO */}
      <img
        src={IMAGES.logoCenter}
        alt="Escola da Palavra"
        style={{
          position: 'absolute',
          top: LAYOUT.logoTopRightMargin,
          right: LAYOUT.logoTopRightMargin,
          width: LAYOUT.logoTopRightSize,
          objectFit: 'contain',
        }}
      />

      {/* Conteúdo do timer */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          gap: '50px',
        }}
      >
        {/* Display do timer */}
        <div
          style={{
            fontSize: '12rem',
            fontWeight: 'bold',
            color: getTimerColor(),
            fontFamily: 'monospace',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            opacity: 0,
            transform: 'translateY(30px)',
            animation: timeLeft === 0
              ? `fadeInUp ${ANIMATION.itemDuration}ms ease-out ${0 * ANIMATION.itemDelay}ms forwards, pulseInfinite 1s ease-in-out infinite`
              : pulse
              ? `fadeInUp ${ANIMATION.itemDuration}ms ease-out ${0 * ANIMATION.itemDelay}ms forwards, pulse 600ms ease-in-out`
              : `fadeInUp ${ANIMATION.itemDuration}ms ease-out ${0 * ANIMATION.itemDelay}ms forwards`,
            transition: 'color 0.5s ease',
          }}
        >
          {formatTime(timeLeft)}
        </div>

        {/* Barra de progresso */}
        <div
          style={{
            width: '80%',
            maxWidth: '800px',
            height: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
            opacity: 0,
            transform: 'translateY(30px)',
            animation: `fadeInUp ${ANIMATION.itemDuration}ms ease-out ${1 * ANIMATION.itemDelay}ms forwards`,
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              backgroundColor: getTimerColor(),
              transition: 'width 1s linear, background-color 0.5s ease',
              borderRadius: '10px',
            }}
          />
        </div>

        {/* Botões de controle */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            opacity: 0,
            transform: 'translateY(30px)',
            animation: `fadeInUp ${ANIMATION.itemDuration}ms ease-out ${2 * ANIMATION.itemDelay}ms forwards`,
          }}
        >
          {/* Linha 1: Botões principais */}
          <div
            style={{
              display: 'flex',
              gap: '15px',
            }}
          >
            {/* Botão Start */}
            <button
              onClick={handleStart}
              disabled={isRunning || timeLeft === 0}
              style={{
                padding: '12px 25px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                backgroundColor: isRunning || timeLeft === 0 ? '#555555' : '#76c442',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                cursor: isRunning || timeLeft === 0 ? 'not-allowed' : 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s',
                opacity: isRunning || timeLeft === 0 ? 0.5 : 1,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseEnter={(e) => {
                if (!isRunning && timeLeft > 0) {
                  e.target.style.transform = 'scale(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7L8 5z" fill="currentColor"/>
              </svg>
              Iniciar
            </button>

            {/* Botão Pause */}
            <button
              onClick={handlePause}
              disabled={!isRunning}
              style={{
                padding: '12px 25px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                backgroundColor: !isRunning ? '#555555' : '#FFA500',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                cursor: !isRunning ? 'not-allowed' : 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s',
                opacity: !isRunning ? 0.5 : 1,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseEnter={(e) => {
                if (isRunning) {
                  e.target.style.transform = 'scale(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" fill="currentColor"/>
              </svg>
              Pausar
            </button>

            {/* Botão Reiniciar */}
            <button
              onClick={handleReset}
              style={{
                padding: '12px 25px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                backgroundColor: '#0b035d',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" fill="currentColor"/>
              </svg>
              Reiniciar
            </button>
          </div>

          {/* Linha 2: Botões de ajuste de tempo */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
            }}
          >
            {/* Botão -1 min */}
            <button
              onClick={() => handleSubtractTime(60)}
              style={{
                padding: '6px 12px',
                fontSize: '0.85rem',
                fontWeight: 'normal',
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1px solid #ffffff',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              -1 min
            </button>

            {/* Botão -30s */}
            <button
              onClick={() => handleSubtractTime(30)}
              style={{
                padding: '6px 12px',
                fontSize: '0.85rem',
                fontWeight: 'normal',
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1px solid #ffffff',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              -30s
            </button>

            {/* Botão +30s */}
            <button
              onClick={() => handleAddTime(30)}
              style={{
                padding: '6px 12px',
                fontSize: '0.85rem',
                fontWeight: 'normal',
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1px solid #ffffff',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              +30s
            </button>

            {/* Botão +1 min */}
            <button
              onClick={() => handleAddTime(60)}
              style={{
                padding: '6px 12px',
                fontSize: '0.85rem',
                fontWeight: 'normal',
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1px solid #ffffff',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              +1 min
            </button>
          </div>
        </div>
      </div>

      {/* Linha inferior: Logo ADVEC + Nomes + Logo EDP (posição fixa - SEM ANIMAÇÃO) */}
      <div
        style={{
          position: 'absolute',
          bottom: LAYOUT.bottomRowDistance,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 'calc(100% - 120px)',
          maxWidth: '1200px',
          gap: '40px',
        }}
      >
        {/* Logo ADVEC à esquerda */}
        <img
          src={IMAGES.logoTopLeft}
          alt="Logo Assembleia"
          style={{
            width: LAYOUT.logoTopLeftSize,
            objectFit: 'contain',
          }}
        />

        {/* Nomes dos professores no centro */}
        <p
          style={{
            fontSize: LAYOUT.teacherNameFontSize,
            margin: 0,
            textAlign: 'center',
            fontWeight: '300',
            flex: '1',
          }}
        >
          {TITLE_SLIDE_DATA.teachers}
        </p>

        {/* Logo EDP à direita */}
        <img
          src={IMAGES.logoTopRight}
          alt="Logo EDP"
          style={{
            width: LAYOUT.logoTopRightSize,
            objectFit: 'contain',
          }}
        />
      </div>

      {/* Keyframes CSS */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes pulseInfinite {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </SlideLayout>
  );
};

export default TimerSlide;
