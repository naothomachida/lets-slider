import { useState, useEffect } from 'react';
import TitleSlide from './components/TitleSlide';
import ContentSlide from './components/ContentSlide';
import TimerSlide from './components/TimerSlide';
import WelcomeScreen from './components/WelcomeScreen';
import LessonSelector from './components/LessonSelector';
import { LESSONS_CATALOG, LESSONS_SLIDES } from './constants';
import { useVerticalOrientation, useSmallScreen } from './hooks/useVerticalOrientation';

function App() {
  const isVertical = useVerticalOrientation();
  const isSmallScreen = useSmallScreen();

  // Verifica se há uma aula na URL
  const getLessonFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    const lessonId = params.get('lesson');

    // Valida se a aula existe
    if (lessonId && LESSONS_SLIDES[lessonId]) {
      return lessonId;
    }
    return null;
  };

  const lessonFromUrl = getLessonFromUrl();

  // Modo de exibição: se for tela pequena em paisagem ou vertical puro, usa modo especial
  // Vertical puro: cards empilhados
  // Tela pequena em paisagem: modo apresentação normal (tela cheia)
  const shouldUseCardMode = isVertical && !isSmallScreen; // Apenas telas grandes em vertical usam cards

  // Em modo vertical (mobile), inicia direto no seletor de aulas
  // Se houver lesson na URL, inicia direto na apresentação
  const getInitialScreen = () => {
    if (lessonFromUrl) return 'presentation';
    return isVertical ? 'selector' : 'welcome';
  };

  const [screen, setScreen] = useState(getInitialScreen());
  const [selectedLesson, setSelectedLesson] = useState(lessonFromUrl);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideKey, setSlideKey] = useState(0);

  const slides = selectedLesson ? LESSONS_SLIDES[selectedLesson] : [];

  // Gerencia overflow do body baseado no modo
  useEffect(() => {
    if (!isVertical) {
      document.body.classList.add('horizontal-mode');
    } else {
      document.body.classList.remove('horizontal-mode');
    }
    return () => {
      document.body.classList.remove('horizontal-mode');
    };
  }, [isVertical]);

  // Navegação por swipe (touch)
  useEffect(() => {
    if (screen !== 'presentation') return;
    if (shouldUseCardMode) return; // Não usa swipe no modo de cards empilhados

    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeDistance = touchStartX - touchEndX;

      if (Math.abs(swipeDistance) < minSwipeDistance) return;

      if (swipeDistance > 0) {
        // Swipe left - próximo slide
        if (currentSlide < slides.length - 1) {
          setCurrentSlide(currentSlide + 1);
          setSlideKey(prev => prev + 1);
        }
      } else {
        // Swipe right - slide anterior
        if (currentSlide > 0) {
          setCurrentSlide(currentSlide - 1);
          setSlideKey(prev => prev + 1);
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [screen, currentSlide, slides.length, shouldUseCardMode]);

  useEffect(() => {
    if (screen !== 'presentation') return;

    // Em modo de cards empilhados, não precisamos de navegação por clique/teclado
    if (shouldUseCardMode) {
      // Apenas permite ESC para voltar ao seletor
      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          setScreen('selector');
          setCurrentSlide(0);
          setSlideKey(prev => prev + 1);
          // Remove o parâmetro lesson da URL
          window.history.pushState({}, '', window.location.pathname);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        // Próximo slide
        if (currentSlide < slides.length - 1) {
          setCurrentSlide(currentSlide + 1);
          setSlideKey(prev => prev + 1);
        }
      } else if (event.key === 'ArrowLeft') {
        // Slide anterior
        if (currentSlide > 0) {
          setCurrentSlide(currentSlide - 1);
          setSlideKey(prev => prev + 1);
        }
      } else if (event.key === 'Home') {
        // Primeiro slide
        setCurrentSlide(0);
        setSlideKey(prev => prev + 1);
      } else if (event.key === 'End') {
        // Último slide
        setCurrentSlide(slides.length - 1);
        setSlideKey(prev => prev + 1);
      } else if (event.key === 'Escape') {
        // Voltar para seletor
        setScreen('selector');
        setCurrentSlide(0);
        setSlideKey(prev => prev + 1);
        // Remove o parâmetro lesson da URL
        window.history.pushState({}, '', window.location.pathname);
      }
    };

    const handleClick = (event) => {
      const clickX = event.clientX;
      const screenWidth = window.innerWidth;

      // Clique no terço esquerdo da tela
      if (clickX < screenWidth / 3) {
        if (currentSlide > 0) {
          setCurrentSlide(currentSlide - 1);
          setSlideKey(prev => prev + 1);
        }
      }
      // Clique no terço direito da tela
      else if (clickX > (screenWidth * 2) / 3) {
        if (currentSlide < slides.length - 1) {
          setCurrentSlide(currentSlide + 1);
          setSlideKey(prev => prev + 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClick);
    };
  }, [screen, currentSlide, slides.length, shouldUseCardMode]);

  const handleStartWelcome = () => {
    setScreen('selector');
  };

  const handleSelectLesson = (lessonId) => {
    setSelectedLesson(lessonId);
    setCurrentSlide(0);
    setSlideKey(prev => prev + 1);
    setScreen('presentation');

    // Atualiza a URL sem recarregar a página
    const newUrl = `${window.location.pathname}?lesson=${lessonId}`;
    window.history.pushState({}, '', newUrl);
  };

  // Tela de boas-vindas
  if (screen === 'welcome') {
    return <WelcomeScreen onStart={handleStartWelcome} />;
  }

  // Tela de seleção de aulas
  if (screen === 'selector') {
    return <LessonSelector lessons={LESSONS_CATALOG} onSelectLesson={handleSelectLesson} />;
  }

  // Tela de apresentação
  const lessonData = LESSONS_CATALOG.find(l => l.id === selectedLesson);

  // Renderiza um único slide
  const renderSlide = (slide, index) => {
    const key = shouldUseCardMode ? `slide-${index}` : slideKey;

    if (slide.type === 'title') {
      return <TitleSlide key={key} lessonData={lessonData} isVertical={shouldUseCardMode} />;
    } else if (slide.type === 'timer') {
      return <TimerSlide key={key} duration={slide.duration} isVertical={shouldUseCardMode} />;
    } else {
      return (
        <ContentSlide
          key={key}
          title={slide.title}
          subtitle={slide.subtitle}
          bulletPoints={slide.bulletPoints}
          quote={slide.quote}
          quoteSource={slide.quoteSource}
          visions={slide.visions}
          visionNote={slide.visionNote}
          phoneMockups={slide.phoneMockups}
          isVertical={shouldUseCardMode}
        >
          {slide.content}
        </ContentSlide>
      );
    }
  };

  // Modo cards: renderiza todos os slides como cards empilhados
  if (shouldUseCardMode) {
    return (
      <div
        style={{
          width: '100%',
          minHeight: '100vh',
          backgroundColor: '#0b035d',
          overflowY: 'auto',
          overflowX: 'hidden',
          padding: '20px 0',
          position: 'relative',
        }}
      >
        {/* Botão de voltar no topo */}
        <div
          style={{
            position: 'sticky',
            top: '10px',
            left: '10px',
            zIndex: 1000,
            padding: '0 20px',
            marginBottom: '10px',
          }}
        >
          <button
            onClick={() => {
              setScreen('selector');
              setCurrentSlide(0);
              setSlideKey(prev => prev + 1);
              // Remove o parâmetro lesson da URL
              window.history.pushState({}, '', window.location.pathname);
            }}
            style={{
              backgroundColor: '#76c442',
              color: '#0b035d',
              border: 'none',
              borderRadius: '25px',
              padding: '12px 24px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>←</span> Voltar
          </button>
        </div>

        {slides.map((slide, index) => (
          <div
            key={`card-${index}`}
            style={{
              width: '100%',
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {renderSlide(slide, index)}
          </div>
        ))}
      </div>
    );
  }

  // Modo horizontal: renderiza apenas o slide atual em tela cheia
  const slide = slides[currentSlide];

  return (
    <>
      {renderSlide(slide, currentSlide)}

      {/* Indicador de slide - não mostra no modo cards */}
      {!shouldUseCardMode && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            color: 'rgba(255, 255, 255, 0.5)',
            fontSize: '1rem',
            fontFamily: 'monospace',
            zIndex: 9999,
          }}
        >
          {currentSlide + 1} / {slides.length}
        </div>
      )}
    </>
  );
}

export default App;
