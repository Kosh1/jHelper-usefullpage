import { contacts } from '../data/products';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Дополнительные ресурсы</h2>
          <p>Полезные ссылки и контакты для получения дополнительной информации</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-links">
              <a 
                href={`https://t.me/${contacts.telegram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">📱</span>
                <div>
                  <strong>Telegram</strong>
                  <p>{contacts.telegram}</p>
                </div>
              </a>
              <a 
                href={contacts.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-icon">📅</span>
                <div>
                  <strong>Calendly</strong>
                  <p>Записаться на консультацию</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

