import './Showcase.css';

const Showcase = () => {
  const examples = [
    {
      prompt: "A majestic lion in the savanna at golden hour, photorealistic",
      type: "image",
      image: "./Lion-ai-img.jpeg"
    },
    {
      prompt: "Futuristic neon cityscape with flying cars, cyberpunk style",
      type: "image",
      image: "./cyberpunk-ai-img.jpeg"
    },
    {
      prompt: "A cute robot playing with a kitten, Pixar animation style",
      type: "video",
      image: "./robot-cat-ai-img.jpeg"
    },
    {
      prompt: "Underwater coral reef with colorful fish, 8k resolution",
      type: "image",
      image: "./coral-reef-ai-img.jpeg"
    }
  ];

  return (
    <section id="showcase" className="showcase">
      <div className="showcase-container">
        <h2 className="section-title">AI-Generated Examples</h2>
        <p className="section-subtitle">See what our AI can create from simple text prompts</p>
        
        <div className="examples-grid">
          {examples.map((example, index) => (
            <div key={index} className="example-card">
              <div className={`example-preview ${example.type}`}>
              <img src={example.image} alt={example.prompt} className="example-image" />
                {/* {example.type === 'video' && <div className="play-icon">▶</div>} */}
              </div>
              <div className="example-prompt">
                <p>"{example.prompt}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;