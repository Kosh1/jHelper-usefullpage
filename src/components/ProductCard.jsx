import { useState } from 'react';
import ExampleWithAnalysis from './ExampleWithAnalysis';
import './ProductCard.css';

const ProductCard = ({ product, examplesData }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Получаем примеры для этого продукта
  const productExamples = examplesData && examplesData[product.id] 
    ? examplesData[product.id] 
    : [];

  return (
    <div className="product-card">
      <div className="product-header">
        {product.link ? (
          <a 
            href={product.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="product-name-link"
          >
            <h3 className="product-name">{product.name}</h3>
          </a>
        ) : (
          <h3 className="product-name">{product.name}</h3>
        )}
        <span className="product-category">{product.category}</span>
      </div>

      <p className="product-description">{product.description}</p>

      {product.features && product.features.length > 0 && (
        <div className="product-section">
          <h4>Преимущества:</h4>
          <ul className="feature-list">
            {product.features.map((feature, idx) => (
              <li key={idx}>✓ {feature}</li>
            ))}
          </ul>
        </div>
      )}

      {product.disadvantages && product.disadvantages.length > 0 && (
        <div className="product-section">
          <h4>Недостатки:</h4>
          <ul className="disadvantage-list">
            {product.disadvantages.map((dis, idx) => (
              <li key={idx}>⚠ {dis}</li>
            ))}
          </ul>
        </div>
      )}

      {product.useCases && product.useCases.length > 0 && (
        <div className="product-section">
          <h4>Когда использовать:</h4>
          <ul className="feature-list">
            {product.useCases.map((useCase, idx) => (
              <li key={idx}>• {useCase}</li>
            ))}
          </ul>
        </div>
      )}

      {product.pricing && (
        <div className="product-pricing">
          <strong>Стоимость:</strong> {product.pricing}
        </div>
      )}

      {productExamples.length > 0 && (
        <div className="product-examples">
          <button 
            className="toggle-examples"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Скрыть пример' : 'Показать пример'}
          </button>
          {isExpanded && (
            <div className="examples-content">
              {productExamples.map((example) => (
                <ExampleWithAnalysis key={example.id} example={example} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Fallback для старых примеров без результатов */}
      {productExamples.length === 0 && product.examples && product.examples.length > 0 && (
        <div className="product-examples">
          <button 
            className="toggle-examples"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Скрыть пример' : 'Показать пример'}
          </button>
          {isExpanded && (
            <div className="examples-content">
              {product.examples.map((example, idx) => (
                <div key={idx} className="example-item">
                  <strong>Пример запроса:</strong>
                  <p>{example}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default ProductCard;

