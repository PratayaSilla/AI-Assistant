import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Progenix</span>AI
        </div>
        <ul className="navbar-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#showcase">Showcase</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
        <button className="navbar-cta">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;