import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/mistakes', label: 'Top 10 Mistakes' },
    { to: '/overview', label: 'Plan Overview' },
    { to: '/tsp', label: 'About TSP' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} id="nav">
        <div className="nav-container">
          <Link to="/" className="nav-logo" id="nav-logo">
            <img src="/images/logo.png" alt="Federal Benefits Exchange" className="logo-img" />
          </Link>
          <div className="nav-links" id="nav-links">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`nav-link ${location.pathname === l.to ? 'active' : ''}`}
                id={`link-${l.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="nav-actions">
            <Link to="/contact" className="btn btn-primary btn-nav" id="btn-webinar-nav">Join Webinar</Link>
            <button
              className={`nav-toggle ${mobileOpen ? 'active' : ''}`}
              id="nav-toggle"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`} id="mobile-menu">
        <div className="mobile-menu-content">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="mobile-link" onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary btn-mobile" onClick={() => setMobileOpen(false)}>
            Join Webinar
          </Link>
        </div>
      </div>
    </>
  )
}
