import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Digital Artist",
      content: "This AI has completely transformed my creative process. I can now prototype concepts in minutes instead of days!",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      content: "We've saved thousands on stock photos and custom illustrations. The quality is outstanding and it's so easy to use.",
      avatar: "MC"
    },
    {
      name: "Emma Rodriguez",
      role: "Game Developer",
      content: "Generating concept art for our indie game has never been easier. The AI understands our vision perfectly.",
      avatar: "ER"
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <h2 className="section-title">What Our Users Say</h2>
        <p className="section-subtitle">Trusted by creators and businesses worldwide</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
              <div className="testimonial-author">
                <div className="avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;