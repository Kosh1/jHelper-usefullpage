import './Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Как с помощью ИИ сделать работу адвокатов эффективнее и легче?
        </h1>
        <p className="hero-subtitle">
          Карта инструментов, подходы и понимание первых шагов для внедрения ИИ в юридическую практику
        </p>
        <div className="hero-buttons">
          <button 
            className="btn-primary"
            onClick={() => scrollToSection('products')}
          >
            Изучить инструменты
          </button>
          <button 
            className="btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            Связаться с нами
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

