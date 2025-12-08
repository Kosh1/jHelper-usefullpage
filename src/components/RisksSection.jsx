import { risks } from '../data/products';
import './RisksSection.css';

const RisksSection = () => {
  return (
    <section id="risks" className="risks-section">
      <div className="container">
        <div className="section-header">
          <h2>Риски и правила</h2>
          <p>Три риска → три правила для безопасной работы с ИИ</p>
        </div>
        <div className="risks-grid">
          {risks.map((risk, idx) => (
            <div key={idx} className="risk-card">
              <div className="risk-number">{idx + 1}</div>
              <h3>{risk.title}</h3>
              <p className="risk-description">{risk.description}</p>
              <div className="risk-rule">
                <strong>Правило:</strong>
                <p>{risk.rule}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="risks-quote">
          <p className="quote-text">
            «Нейросети не заменят адвокатов. Но адвокаты, использующие нейросети, заменят тех, кто ими пренебрегает».
          </p>
          <p className="quote-author">— ChatGPT</p>
        </div>
      </div>
    </section>
  );
};

export default RisksSection;


