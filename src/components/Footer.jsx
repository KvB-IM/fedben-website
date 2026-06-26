import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="nav-logo footer-logo" id="footer-logo">
              <img src="/images/logo.png" alt="Federal Benefits Exchange" className="logo-img" />
            </Link>
            <p className="footer-tagline">
              Educating federal employees on their benefits and helping them plan for a secure retirement.
            </p>
          </div>
          <div className="footer-links-group">
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/mistakes" className="footer-link">Top 10 Mistakes</Link>
              <Link to="/overview" className="footer-link">Plan Overview</Link>
              <Link to="/tsp" className="footer-link">About TSP</Link>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Resources</h4>
              <Link to="/contact" className="footer-link">Free Webinar</Link>
              <Link to="/contact" className="footer-link">Benefits Report</Link>
              <Link to="/contact" className="footer-link">Contact Us</Link>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Contact</h4>
              <a href="tel:7064072744" className="footer-link">(706) 407-2744</a>
              <a href="mailto:support@federalbenefitsexchange.com" className="footer-link">support@federal...</a>
              <span className="footer-link footer-address">North Augusta, SC</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">&copy; 2026 Federal Benefits Exchange. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#" className="footer-legal-link" id="link-privacy">Privacy Policy</a>
            <a href="#" className="footer-legal-link" id="link-terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
