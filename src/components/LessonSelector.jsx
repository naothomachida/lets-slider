import { useState } from 'react';
import { COLORS } from '../constants';
import ShareModal from './ShareModal';

function LessonSelector({ lessons, onSelectLesson }) {
  const [shareModalLesson, setShareModalLesson] = useState(null);

  return (
    <>
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
          maxWidth: '1000px',
          width: '100%',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            marginBottom: '20px',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Selecione a Aula
        </h1>

        <p
          style={{
            fontSize: '1.3rem',
            marginBottom: '50px',
            textAlign: 'center',
            opacity: 0.9,
          }}
        >
          Escolha qual apresentação deseja exibir
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
          }}
        >
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '30px',
                backdropFilter: 'blur(10px)',
                border: '2px solid transparent',
                transition: 'all 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.border = '2px solid rgba(76, 175, 80, 0.6)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(76, 175, 80, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.border = '2px solid transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  marginBottom: '15px',
                }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <div>
                  <div
                    style={{
                      fontSize: '0.9rem',
                      opacity: 0.7,
                      marginBottom: '5px',
                    }}
                  >
                    {lesson.category}
                  </div>
                  <div
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {lesson.title}
                  </div>
                </div>
              </div>

              <div
                style={{
                  fontSize: '1.1rem',
                  opacity: 0.8,
                  marginBottom: '15px',
                }}
              >
                {lesson.subtitle}
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '0.95rem',
                  opacity: 0.7,
                  marginBottom: '15px',
                }}
              >
                <span>{lesson.quarter}</span>
                <span>{lesson.slideCount} slides</span>
              </div>

              {/* Botões de ação */}
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  marginTop: '15px',
                }}
              >
                <button
                  onClick={() => onSelectLesson(lesson.id)}
                  style={{
                    flex: 1,
                    padding: '12px 20px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    backgroundColor: '#76c442',
                    color: '#0b035d',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#8fd954';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#76c442';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  Abrir
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShareModalLesson(lesson.id);
                  }}
                  style={{
                    padding: '12px 20px',
                    fontSize: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.borderColor = '#76c442';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                  Compartilhar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Modal de compartilhamento */}
    {shareModalLesson && (
      <ShareModal
        lessonId={shareModalLesson}
        onClose={() => setShareModalLesson(null)}
      />
    )}
    </>
  );
}

export default LessonSelector;
