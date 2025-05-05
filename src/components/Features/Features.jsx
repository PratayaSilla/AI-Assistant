import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🎨',
      title: 'High-Quality Output',
      description: 'Generate 4K resolution images and HD videos with stunning detail and realism.'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Get results in seconds, not hours. Our optimized AI delivers quickly.'
    },
    {
      icon: '🔄',
      title: 'Multiple Styles',
      description: 'Choose from various artistic styles to match your creative vision.'
    },
    {
      icon: '🔧',
      title: 'Easy to Use',
      description: 'Simple text prompts are all you need. No technical skills required.'
    },
    {
      icon: '🖼️',
      title: 'Batch Processing',
      description: 'Generate multiple variations or a series of images at once.'
    },
    {
      icon: '🔒',
      title: 'Commercial License',
      description: 'Use generated content for commercial projects without worries.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <h2 className="section-title">Powerful Features</h2>
        <p className="section-subtitle">Everything you need to bring your imagination to life</p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;