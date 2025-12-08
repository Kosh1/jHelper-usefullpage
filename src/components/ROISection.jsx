import { roiData } from '../data/products';
import './ROISection.css';

const ROISection = () => {
  return (
    <section id="roi" className="roi-section">
      <div className="container">
        <div className="section-header">
          <h2>Экономика и ROI</h2>
          <p>Реальная экономия времени и средств</p>
        </div>
        <div className="roi-content">
          <div className="roi-comparison">
            <div className="roi-card without-ai">
              <h3>Без ИИ</h3>
              <div className="roi-details">
                <div className="roi-item">
                  <span>Время работы:</span>
                  <strong>{roiData.withoutAI.hours} часов</strong>
                </div>
                <div className="roi-item">
                  <span>Ставка:</span>
                  <strong>{roiData.withoutAI.rate.toLocaleString()} ₽/час</strong>
                </div>
                <div className="roi-total">
                  <span>Итого:</span>
                  <strong>{roiData.withoutAI.total.toLocaleString()} ₽</strong>
                </div>
              </div>
            </div>

            <div className="roi-arrow">→</div>

            <div className="roi-card with-ai">
              <h3>С ИИ</h3>
              <div className="roi-details">
                <div className="roi-item">
                  <span>ИИ-работа:</span>
                  <strong>{roiData.withAI.aiHours} час</strong>
                </div>
                <div className="roi-item">
                  <span>Проверка:</span>
                  <strong>{roiData.withAI.reviewHours} часа</strong>
                </div>
                <div className="roi-item">
                  <span>Ставка:</span>
                  <strong>{roiData.withAI.rate.toLocaleString()} ₽/час</strong>
                </div>
                <div className="roi-total">
                  <span>Итого:</span>
                  <strong>{roiData.withAI.total.toLocaleString()} ₽</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="roi-savings">
            <div className="savings-card">
              <h3>Экономия</h3>
              <div className="savings-amount">
                <span className="savings-percentage">{roiData.savings.percentage}</span>
                <span className="savings-hours">{roiData.savings.hours} времени</span>
              </div>
            </div>
          </div>

          <div className="roi-benefits">
            <h3>Дополнительные преимущества:</h3>
            <ul>
              {roiData.benefits.map((benefit, idx) => (
                <li key={idx}>✓ {benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROISection;

