import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Transform Your Ideas Into Stunning Visuals</h1>
          <p className="hero-subtitle">
            Our advanced AI model generates high-quality images and videos from simple text prompts.
            Perfect for creators, marketers, and businesses.
          </p>
          <div className="hero-buttons">
            <button className="primary-button">Try Demo</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="ai-preview">
            <div className="prompt-box">
              <p>"A futuristic city at sunset, cyberpunk style, 4k ultra HD"</p>
            </div>
            <div className="generated-image"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;