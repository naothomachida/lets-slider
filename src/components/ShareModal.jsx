import { useState } from 'react';

function ShareModal({ lessonId, onClose }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = `${window.location.origin}?lesson=${lessonId}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackgroundClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: '#1a0f7a',
          borderRadius: '20px',
          padding: '40px',
          maxWidth: '600px',
          width: '100%',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
          border: '2px solid rgba(118, 196, 66, 0.3)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
          }}
        >
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#ffffff',
              margin: 0,
            }}
          >
            Compartilhar Aula
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              fontSize: '2rem',
              cursor: 'pointer',
              padding: '0',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            ×
          </button>
        </div>

        <p
          style={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '1.1rem',
            marginBottom: '20px',
          }}
        >
          Copie o link abaixo para compartilhar esta aula:
        </p>

        <div
          style={{
            display: 'flex',
            gap: '15px',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <input
            type="text"
            value={shareUrl}
            readOnly
            style={{
              flex: 1,
              padding: '15px 20px',
              fontSize: '1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: '#ffffff',
              outline: 'none',
            }}
            onClick={(e) => e.target.select()}
          />
          <button
            onClick={handleCopy}
            style={{
              padding: '15px 30px',
              fontSize: '1rem',
              fontWeight: 'bold',
              backgroundColor: copied ? '#4caf50' : '#76c442',
              color: '#0b035d',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              if (!copied) {
                e.currentTarget.style.backgroundColor = '#8fd954';
                e.currentTarget.style.transform = 'scale(1.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (!copied) {
                e.currentTarget.style.backgroundColor = '#76c442';
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
          >
            {copied ? '✓ Copiado!' : 'Copiar'}
          </button>
        </div>

        <p
          style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.9rem',
            margin: 0,
            textAlign: 'center',
          }}
        >
          Qualquer pessoa com este link poderá acessar a apresentação
        </p>
      </div>
    </div>
  );
}

export default ShareModal;
