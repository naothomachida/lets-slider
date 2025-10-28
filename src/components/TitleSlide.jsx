import SlideLayout from './SlideLayout';
import { IMAGES, LAYOUT, ANIMATION } from '../constants';

const TitleSlide = ({ lessonData, isVertical = false }) => {
  const titleData = lessonData.titleSlideData;
  return (
    <SlideLayout isVertical={isVertical}>
      {/* Conteúdo central */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: isVertical ? '1920px' : '100%',
          height: isVertical ? '1080px' : '100%',
          gap: '30px',
          padding: '60px',
          boxSizing: 'border-box',
        }}
      >
        {/* Logo central grande (Escola da Palavra) - Animado */}
        <img
          src={IMAGES.logoCenter}
          alt="Escola da Palavra"
          style={{
            maxWidth: '700px',
            width: '50%',
            objectFit: 'contain',
            opacity: 0,
            transform: 'translateY(30px)',
            animation: `fadeInUp ${ANIMATION.itemDuration}ms ease-out ${0 * ANIMATION.itemDelay}ms forwards`,
          }}
        />

        {/* Número da lição - Estilo divertido - Animado */}
        <div
          style={{
            backgroundColor: '#76c442',
            color: '#0b035d',
            padding: '15px 40px',
            borderRadius: '50px',
            fontSize: '2rem',
            fontWeight: 'bold',
            transform: 'rotate(-3deg)',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
            opacity: 0,
            animation: `fadeInUp ${ANIMATION.itemDuration}ms ease-out ${1 * ANIMATION.itemDelay}ms forwards`,
          }}
        >
          {titleData.lessonNumber}
        </div>

        {/* Grupo: Título + Subtítulo (mais próximos) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {/* Título principal - Animado */}
          <h1
            style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              margin: 0,
              textAlign: 'center',
              letterSpacing: '2px',
              opacity: 0,
              transform: 'translateY(30px)',
              animation: `fadeInUp ${ANIMATION.itemDuration}ms ease-out ${2 * ANIMATION.itemDelay}ms forwards`,
            }}
          >
            {titleData.mainTitle}
          </h1>

          {/* Subtítulo - Animado */}
          <p
            style={{
              fontSize: '1.8rem',
              margin: 0,
              textAlign: 'center',
              opacity: 0,
              transform: 'translateY(30px)',
              animation: `fadeInUp ${ANIMATION.itemDuration}ms ease-out ${3 * ANIMATION.itemDelay}ms forwards`,
            }}
          >
            {titleData.subtitle}
          </p>
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
          {titleData.teachers}
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
      `}</style>
    </SlideLayout>
  );
};

export default TitleSlide;
