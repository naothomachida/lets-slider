import SlideLayout from './SlideLayout';
import { IMAGES, LAYOUT, TITLE_SLIDE_DATA, ANIMATION } from '../constants';

const ContentSlide = ({ title, subtitle, bulletPoints, quote, quoteSource, visions, visionNote, phoneMockups, sinCards, children }) => {
  return (
    <SlideLayout>
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

      {/* Conteúdo do slide */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          padding: '80px 60px 60px 60px',
          boxSizing: 'border-box',
          gap: '30px',
        }}
      >
        {/* Título - Animado */}
        {title && (
          <h1
            style={{
              fontSize: '4rem',
              fontWeight: 'normal',
              margin: 0,
              textAlign: 'center',
              opacity: 0,
              transform: 'translateY(30px)',
              animation: `fadeInUp ${ANIMATION.itemDuration}ms ease-out ${0 * ANIMATION.itemDelay}ms forwards`,
            }}
          >
            {title}
          </h1>
        )}

        {/* Subtítulo - Animado */}
        {subtitle && (
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              margin: 0,
              textAlign: 'center',
              color: '#76c442',
              opacity: 0,
              transform: 'translateY(30px)',
              animation: `fadeInUp ${ANIMATION.itemDuration}ms ease-out ${1 * ANIMATION.itemDelay}ms forwards`,
            }}
          >
            {subtitle}
          </h2>
        )}

        {/* Bullet Points - Animados */}
        {bulletPoints && bulletPoints.length > 0 && (
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxWidth: '900px',
            }}
          >
            {bulletPoints.map((point, index) => (
              <li
                key={index}
                style={{
                  fontSize: '2rem',
                  textAlign: 'left',
                  paddingLeft: '40px',
                  position: 'relative',
                  opacity: 0,
                  transform: 'translateY(30px)',
                  animation: `fadeInUp ${ANIMATION.itemDuration}ms ease-out ${(2 + index) * ANIMATION.itemDelay}ms forwards`,
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: '0',
                    color: '#76c442',
                    fontSize: '2.5rem',
                  }}
                >
                  •
                </span>
                {point}
              </li>
            ))}
          </ul>
        )}

        {/* Citação - Animada */}
        {quote && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              maxWidth: '1000px',
              padding: '40px',
              opacity: 0,
              transform: 'translateY(30px)',
              animation: `fadeInUp ${ANIMATION.itemDuration}ms ease-out ${0 * ANIMATION.itemDelay}ms forwards`,
            }}
          >
            {/* Aspas abertura */}
            <div
              style={{
                fontSize: '6rem',
                color: '#76c442',
                lineHeight: '1',
                height: '60px',
              }}
            >
              "
            </div>

            {/* Texto da citação */}
            <p
              style={{
                fontSize: '2.5rem',
                textAlign: 'center',
                fontStyle: 'italic',
                margin: 0,
                lineHeight: '1.4',
              }}
            >
              {quote}
            </p>

            {/* Aspas fechamento */}
            <div
              style={{
                fontSize: '6rem',
                color: '#76c442',
                lineHeight: '1',
                height: '60px',
              }}
            >
              "
            </div>

            {/* Fonte da citação */}
            {quoteSource && (
              <p
                style={{
                  fontSize: '2rem',
                  margin: 0,
                  marginTop: '20px',
                  color: '#76c442',
                  fontWeight: 'bold',
                }}
              >
                — {quoteSource}
              </p>
            )}
          </div>
        )}

        {/* Visões - Cards Animados */}
        {visions && visions.length > 0 && (
          <div
            style={{
              width: '100%',
              maxWidth: '1400px',
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
            }}
          >
            {/* Grid de cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '35px',
                width: '100%',
                marginTop: '20px',
              }}
            >
              {visions.slice(0, 3).map((vision, index) => (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                    opacity: 0,
                    transform: 'translateY(30px)',
                    animation: `fadeInUp ${ANIMATION.itemDuration}ms ease-out ${(1 + index) * ANIMATION.itemDelay}ms forwards`,
                  }}
                >
                  {/* Círculo com número */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-25px',
                      left: '20px',
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#76c442',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem',
                      fontWeight: 'bold',
                      color: '#0b035d',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                      zIndex: 2,
                    }}
                  >
                    {vision.number}
                  </div>

                  {/* Card */}
                  <div
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '3px solid #76c442',
                      borderRadius: '15px',
                      padding: '35px 25px 25px 25px',
                      minHeight: '140px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.8rem',
                        fontWeight: 'bold',
                        margin: '0 0 10px 0',
                        color: '#0b035d',
                      }}
                    >
                      {vision.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '1.3rem',
                        margin: 0,
                        color: '#333333',
                        lineHeight: '1.4',
                      }}
                    >
                      {vision.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Segunda linha com 2 cards + nota */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '35px',
                width: '100%',
              }}
            >
              {visions.slice(3, 5).map((vision, index) => (
                <div
                  key={index}
                  style={{
                    position: 'relative',
                    opacity: 0,
                    transform: 'translateY(30px)',
                    animation: `fadeInUp ${ANIMATION.itemDuration}ms ease-out ${(4 + index) * ANIMATION.itemDelay}ms forwards`,
                  }}
                >
                  {/* Círculo com número */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-25px',
                      left: '20px',
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#76c442',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem',
                      fontWeight: 'bold',
                      color: '#0b035d',
                      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                      zIndex: 2,
                    }}
                  >
                    {vision.number}
                  </div>

                  {/* Card */}
                  <div
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '3px solid #76c442',
                      borderRadius: '15px',
                      padding: '35px 25px 25px 25px',
                      minHeight: '140px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.8rem',
                        fontWeight: 'bold',
                        margin: '0 0 10px 0',
                        color: '#0b035d',
                      }}
                    >
                      {vision.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '1.3rem',
                        margin: 0,
                        color: '#333333',
                        lineHeight: '1.4',
                      }}
                    >
                      {vision.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Nota em itálico */}
              {visionNote && (
                <div
                  style={{
                    backgroundColor: 'rgba(118, 196, 66, 0.2)',
                    border: '3px solid #76c442',
                    borderRadius: '15px',
                    padding: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '140px',
                    opacity: 0,
                    transform: 'translateY(30px)',
                    animation: `fadeInUp ${ANIMATION.itemDuration}ms ease-out ${6 * ANIMATION.itemDelay}ms forwards`,
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <p
                    style={{
                      fontSize: '1.3rem',
                      fontStyle: 'italic',
                      margin: 0,
                      color: '#ffffff',
                      textAlign: 'center',
                      lineHeight: '1.4',
                    }}
                  >
                    {visionNote}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Sin Cards - Cards de Pecados */}
        {sinCards && sinCards.length > 0 && (
          <div
            style={{
              width: '100%',
              maxWidth: '1200px',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
              marginTop: '20px',
            }}
          >
            {sinCards.map((sin, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  opacity: 0,
                  transform: 'translateY(30px)',
                  animation: `fadeInUp ${ANIMATION.itemDuration}ms ease-out ${(2 + index) * ANIMATION.itemDelay}ms forwards`,
                }}
              >
                {/* Ícone emoji no topo */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '70px',
                    height: '70px',
                    backgroundColor: '#dc2626',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    boxShadow: '0 4px 15px rgba(220, 38, 38, 0.5)',
                    zIndex: 2,
                  }}
                >
                  {sin.icon}
                </div>

                {/* Card */}
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '3px solid #dc2626',
                    borderRadius: '15px',
                    padding: '50px 25px 25px 25px',
                    minHeight: '140px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: 'bold',
                      margin: 0,
                      color: '#0b035d',
                      textAlign: 'center',
                    }}
                  >
                    {sin.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Phone Mockups - Animados */}
        {phoneMockups && phoneMockups.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20px',
              position: 'relative',
            }}
          >
            {phoneMockups.map((phone, index) => (
              <div
                key={index}
                style={{
                  opacity: 0,
                  transform: 'translateY(30px)',
                  animation: `fadeInUp ${ANIMATION.itemDuration}ms ease-out ${(2 + index) * ANIMATION.itemDelay}ms forwards`,
                  marginLeft: index > 0 ? '-30px' : '0',
                  zIndex: phoneMockups.length - index,
                  position: 'relative',
                  top: `${index * 15}px`,
                }}
              >
                {/* Moldura do celular */}
                <div
                  style={{
                    width: '180px',
                    height: '350px',
                    backgroundColor: '#1a1a1a',
                    borderRadius: '25px',
                    padding: '10px',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
                    position: 'relative',
                  }}
                >
                  {/* Notch do celular */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '80px',
                      height: '18px',
                      backgroundColor: '#1a1a1a',
                      borderBottomLeftRadius: '12px',
                      borderBottomRightRadius: '12px',
                      zIndex: 3,
                    }}
                  />

                  {/* Tela do celular */}
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#ffffff',
                      borderRadius: '18px',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {/* Barra de notícias (header) */}
                    <div
                      style={{
                        backgroundColor: phone.color,
                        padding: '25px 15px 15px 15px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <h4
                        style={{
                          color: '#ffffff',
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                          margin: 0,
                        }}
                      >
                        {phone.name}
                      </h4>
                    </div>

                    {/* Conteúdo da notícia */}
                    <div
                      style={{
                        padding: '12px',
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                      }}
                    >
                      {/* Manchete simulada */}
                      <div
                        style={{
                          width: '100%',
                          height: '10px',
                          backgroundColor: '#e0e0e0',
                          borderRadius: '2px',
                        }}
                      />
                      <div
                        style={{
                          width: '80%',
                          height: '10px',
                          backgroundColor: '#e0e0e0',
                          borderRadius: '2px',
                        }}
                      />

                      {/* Imagem simulada */}
                      <div
                        style={{
                          width: '100%',
                          height: '100px',
                          backgroundColor: '#f0f0f0',
                          borderRadius: '6px',
                          marginTop: '8px',
                        }}
                      />

                      {/* Texto simulado */}
                      <div
                        style={{
                          width: '100%',
                          height: '8px',
                          backgroundColor: '#e0e0e0',
                          borderRadius: '2px',
                        }}
                      />
                      <div
                        style={{
                          width: '90%',
                          height: '8px',
                          backgroundColor: '#e0e0e0',
                          borderRadius: '2px',
                        }}
                      />
                      <div
                        style={{
                          width: '70%',
                          height: '8px',
                          backgroundColor: '#e0e0e0',
                          borderRadius: '2px',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Conteúdo adicional - Animado */}
        {children && (
          <div
            style={{
              opacity: 0,
              transform: 'translateY(30px)',
              animation: `fadeInUp ${ANIMATION.itemDuration}ms ease-out ${(2 + (bulletPoints?.length || 0)) * ANIMATION.itemDelay}ms forwards`,
            }}
          >
            {children}
          </div>
        )}
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
      `}</style>
    </SlideLayout>
  );
};

export default ContentSlide;
