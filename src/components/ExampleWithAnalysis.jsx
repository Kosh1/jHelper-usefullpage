import { useState, useEffect } from 'react';
import './ExampleWithAnalysis.css';

const ExampleWithAnalysis = ({ example }) => {
  const [modalImage, setModalImage] = useState(null);

  // Закрытие модального окна по ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setModalImage(null);
      }
    };

    if (modalImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [modalImage]);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setModalImage(null);
    }
  };

  return (
    <>
      <div className="example-with-analysis">
        <div className="example-prompt">
          <h4>Пример запроса</h4>
          <div className="prompt-text">
            <code>{example.prompt}</code>
          </div>
        </div>

        {example.analysis && (
          <div className="prompt-analysis">
            <div className="analysis-section">
              <h5>Структура промпта:</h5>
              <ul>
                {example.analysis.structure.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="analysis-section">
              <h5>Зачем это сделано:</h5>
              <p>{example.analysis.purpose}</p>
            </div>

            <div className="analysis-section">
              <h5>Практические советы:</h5>
              <ul className="tips-list">
                {example.analysis.tips.map((tip, idx) => (
                  <li key={idx}>💡 {tip}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {example.resultImage && (
          <div className="example-result">
            <h5>Результат выполнения запроса:</h5>
            <div className="result-images">
              <div className="result-image-wrapper">
                <img 
                  src={example.resultImage} 
                  alt="Результат запроса"
                  loading="lazy"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(example.resultImage);
                  }}
                  className="clickable-image"
                  onError={(e) => {
                    const placeholder = e.target.nextElementSibling;
                    if (placeholder) {
                      e.target.style.display = 'none';
                      placeholder.style.display = 'block';
                    }
                  }}
                />
                <div className="image-placeholder" style={{ display: 'none' }}>
                  <p>Изображение не найдено</p>
                  <p className="image-path">{example.resultImage}</p>
                </div>
              </div>
              {example.resultImage2 && example.resultImage2 !== example.resultImage && (
                <div className="result-image-wrapper">
                  <img 
                    src={example.resultImage2} 
                    alt="Результат запроса (часть 2)"
                    loading="lazy"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(example.resultImage2);
                    }}
                    className="clickable-image"
                    onError={(e) => {
                      const placeholder = e.target.nextElementSibling;
                      if (placeholder) {
                        e.target.style.display = 'none';
                        placeholder.style.display = 'block';
                      }
                    }}
                  />
                  <div className="image-placeholder" style={{ display: 'none' }}>
                    <p>Изображение не найдено</p>
                    <p className="image-path">{example.resultImage2}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {modalImage && (
        <div className="image-modal-overlay" onClick={closeModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="image-modal-close" 
              onClick={(e) => {
                e.stopPropagation();
                setModalImage(null);
              }}
              aria-label="Закрыть"
            >
              ×
            </button>
            <img 
              src={modalImage} 
              alt="Увеличенное изображение"
              className="image-modal-img"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ExampleWithAnalysis;

