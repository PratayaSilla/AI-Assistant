import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">AI</span>Creatives
            </div>
            <p className="footer-description">
              Transforming ideas into visuals with cutting-edge AI technology.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="links-column">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#showcase">Examples</a></li>
                <li><a href="#">API</a></li>
              </ul>
            </div>
            
            <div className="links-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            
            <div className="links-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Copyright</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© 2023 AICreatives. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="LinkedIn">🔗</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;