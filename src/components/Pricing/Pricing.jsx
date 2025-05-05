import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "19",
      period: "month",
      features: [
        "100 image generations/month",
        "10 video generations/month",
        "HD resolution",
        "Basic styles",
        "Personal use only"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "49",
      period: "month",
      features: [
        "500 image generations/month",
        "50 video generations/month",
        "4K resolution",
        "All styles",
        "Commercial license",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited generations",
        "8K resolution",
        "Dedicated GPU",
        "API access",
        "Team collaboration",
        "24/7 support"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="pricing-container">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-subtitle">Choose the plan that fits your creative needs</p>
        
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                {plan.price === "Custom" ? (
                  <span>Custom</span>
                ) : (
                  <>
                    <span className="price">${plan.price}</span>
                    <span className="period">/{plan.period}</span>
                  </>
                )}
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className={`plan-button ${plan.popular ? 'primary-button' : 'secondary-button'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;