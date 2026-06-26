import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page">
      {/* Hero — Short & punchy with buildings bg */}
      <section className="hero-fullwidth">
        <div className="hero-fullwidth-overlay"></div>
        <div className="container hero-fullwidth-inner">
          <div className="hero-badge" id="hero-badge">
            <span className="badge-dot"></span>
            Free for All Federal Employees
          </div>
          <h1 className="hero-fullwidth-title" id="hero-title">
            Are You Getting the Most<br />from Your <span className="text-gradient">Federal Benefits?</span>
          </h1>
          <p className="hero-fullwidth-desc" id="hero-description">
            Most federal employees leave thousands on the table. We help you fix that — for free.
          </p>
          <div className="hero-fullwidth-actions">
            <Link to="/contact" className="btn btn-primary btn-lg" id="btn-hero-webinar">
              Join Our Free Webinar
            </Link>
            <Link to="/contact" className="btn btn-secondary-light btn-lg" id="btn-hero-report">
              Get Free Report
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works — Process Flow */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">Three Simple <span className="text-gradient">Steps</span></h2>
            <p className="section-subtitle">Getting started with your benefits review is easy.</p>
          </div>
          <div className="process-flow">
            <div className="process-step">
              <div className="process-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="process-title">Join Our Webinar</h3>
              <p className="process-desc">Free 30-min session on your federal benefits</p>
            </div>

            <div className="process-arrow">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            <div className="process-step">
              <div className="process-icon process-icon-gold">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
              </div>
              <h3 className="process-title">Get Free Report</h3>
              <p className="process-desc">Personalized FEGLI, FERS, TSP analysis</p>
            </div>

            <div className="process-arrow">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            <div className="process-step">
              <div className="process-icon process-icon-success">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="process-title">Optimize & Retire</h3>
              <p className="process-desc">Review with a specialist and save thousands</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover — white bg */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Cover</span>
            <h2 className="section-title">Your Federal Benefits <span className="text-gradient">Explained</span></h2>
            <p className="section-subtitle">We help you understand every aspect of your benefits package so you can make informed decisions.</p>
          </div>
          <div className="icon-cards-grid">
            {[
              { icon: '🛡️', title: 'FEGLI', desc: 'Review your life insurance options and stop overpaying for coverage.' },
              { icon: '🏛️', title: 'FERS', desc: 'Understand your annuity and how your pension is calculated.' },
              { icon: '💰', title: 'TSP', desc: 'Maximize your contributions and get the full government match.' },
              { icon: '📋', title: 'Social Security', desc: 'Coordinate with FERS for maximum combined retirement income.' },
            ].map((item, i) => (
              <div className="icon-card" key={i}>
                <div className="icon-card-emoji">{item.icon}</div>
                <h3 className="icon-card-title">{item.title}</h3>
                <p className="icon-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes Preview — gray bg */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Don't Fall Behind</span>
            <h2 className="section-title">Common Mistakes That <span className="text-gradient">Cost You Money</span></h2>
            <p className="section-subtitle">Federal employees often make critical errors with their benefits.</p>
          </div>
          <div className="preview-cards-grid">
            {[
              { num: '#1', title: 'Never Attending a Training', desc: 'A benefits & retirement seminar has valuable information whether it\'s your first day or your last.' },
              { num: '#2', title: 'Overpaying for FEGLI Option B', desc: 'Costs increase every 5 years starting at age 35. Better options may be available.' },
              { num: '#3', title: 'Not Maximizing TSP Match', desc: 'The government matches the first 5% — that\'s free money you should never leave on the table.' },
            ].map((item, i) => (
              <div className="preview-card" key={i}>
                <span className="preview-card-num">{item.num}</span>
                <h3 className="preview-card-title">{item.title}</h3>
                <p className="preview-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/mistakes" className="btn btn-primary btn-lg">
              See All 10 Mistakes
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner — white bg */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2 className="cta-banner-title">Get Your Free <span className="text-gradient">Benefits Analysis</span> Report</h2>
              <p className="cta-banner-desc">Personalized breakdown of your FEGLI, FERS, TSP, and Social Security — tailored to your situation. No cost, no obligation.</p>
              <div className="cta-banner-actions">
                <Link to="/contact" className="btn btn-primary btn-lg">Get Free Report</Link>
                <a href="tel:7064072744" className="btn btn-secondary btn-lg">Call (706) 407-2744</a>
              </div>
            </div>
            <div className="cta-banner-visual">
              <img src="/images/benefits-report-real.png" alt="Benefits Report" className="cta-banner-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
