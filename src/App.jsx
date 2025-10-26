import { useState, useEffect } from 'react';
import TitleSlide from './components/TitleSlide';
import ContentSlide from './components/ContentSlide';
import TimerSlide from './components/TimerSlide';
import WelcomeScreen from './components/WelcomeScreen';
import LessonSelector from './components/LessonSelector';
import { LESSONS_CATALOG, LESSONS_SLIDES } from './constants';

function App() {
  const [screen, setScreen] = useState('welcome'); // 'welcome', 'selector', 'presentation'
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideKey, setSlideKey] = useState(0);

  const slides = selectedLesson ? LESSONS_SLIDES[selectedLesson] : [];

  useEffect(() => {
    if (screen !== 'presentation') return;

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
  }, [screen, currentSlide, slides.length]);

  const handleStartWelcome = () => {
    setScreen('selector');
  };

  const handleSelectLesson = (lessonId) => {
    setSelectedLesson(lessonId);
    setCurrentSlide(0);
    setSlideKey(prev => prev + 1);
    setScreen('presentation');
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
  const slide = slides[currentSlide];

  return (
    <>
      {slide.type === 'title' ? (
        <TitleSlide key={slideKey} lessonData={LESSONS_CATALOG.find(l => l.id === selectedLesson)} />
      ) : slide.type === 'timer' ? (
        <TimerSlide key={slideKey} duration={slide.duration} />
      ) : (
        <ContentSlide
          key={slideKey}
          title={slide.title}
          subtitle={slide.subtitle}
          bulletPoints={slide.bulletPoints}
          quote={slide.quote}
          quoteSource={slide.quoteSource}
          visions={slide.visions}
          visionNote={slide.visionNote}
          phoneMockups={slide.phoneMockups}
        >
          {slide.content}
        </ContentSlide>
      )}

      {/* Indicador de slide */}
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
    </>
  );
}

export default App;
