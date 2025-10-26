import { useState, useEffect } from 'react';
import TitleSlide from './components/TitleSlide';
import ContentSlide from './components/ContentSlide';
import TimerSlide from './components/TimerSlide';
import { SLIDES } from './constants';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideKey, setSlideKey] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        // Próximo slide
        if (currentSlide < SLIDES.length - 1) {
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
        setCurrentSlide(SLIDES.length - 1);
        setSlideKey(prev => prev + 1);
      }
    };

    const handleClick = (event) => {
      const clickX = event.clientX;
      const screenWidth = window.innerWidth;
      const clickPosition = clickX / screenWidth;

      // Clique no lado esquerdo (< 50%)
      if (clickPosition < 0.5) {
        if (currentSlide > 0) {
          setCurrentSlide(currentSlide - 1);
          setSlideKey(prev => prev + 1);
        }
      }
      // Clique no lado direito (>= 50%)
      else {
        if (currentSlide < SLIDES.length - 1) {
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
  }, [currentSlide]);

  const slide = SLIDES[currentSlide];

  return (
    <>
      {slide.type === 'title' ? (
        <TitleSlide key={slideKey} />
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
          sinCards={slide.sinCards}
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
        {currentSlide + 1} / {SLIDES.length}
      </div>
    </>
  );
}

export default App;
