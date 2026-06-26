import { Link } from 'react-router-dom'

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    title: 'FEGLI Analysis',
    desc: "Federal Employees' Group Life Insurance review and optimization to ensure your family is properly protected at the best possible cost.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'FERS Retirement',
    desc: 'Federal Employees Retirement System planning to maximize your pension and annuity benefits for a comfortable retirement.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
    title: 'TSP Strategy',
    desc: 'Thrift Savings Plan investment strategy to grow your retirement nest egg with the right fund allocation across G, F, C, S, I, and L funds.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: 'Social Security',
    desc: 'Coordination of Social Security benefits with your FERS annuity for maximum combined retirement income.',
  },
]

export default function Overview() {
  return (
    <div className="page">
      {/* Header — navy accent */}
      <section className="page-header page-header-accent">
        <div className="container">
          <span className="section-tag section-tag-light">Plan Overview</span>
          <h1 className="page-title page-title-light">Your Complete Benefits <span className="text-gradient">Roadmap</span></h1>
          <p className="page-subtitle page-subtitle-light">We educate employees on their benefits and keep them current on the ongoing changes, so uncertainties don't make it difficult to feel good about retirement.</p>
        </div>
      </section>

      {/* Main Content — light bg */}
      <section className="section section-alt">
        <div className="container">
          <div className="features-layout">
            <div className="features-content">
              <h2 className="section-title">What We <span className="text-gradient">Help With</span></h2>
              <p className="overview-intro">
                Limited understanding of aspects of your benefits such as FEGLI, FERS, TSP and Social Security coupled with increasing cost of living, create a substantial income gap for many during retirement. This has placed greater responsibility on Federal Employees to prepare for retirement.
              </p>
              <div className="feature-list">
                {features.map((f, i) => (
                  <div className="feature-item" key={i} id={`feature-${i + 1}`}>
                    <div className="feature-icon">{f.icon}</div>
                    <div>
                      <h3 className="feature-title">{f.title}</h3>
                      <p className="feature-desc">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="features-visual">
              <img src="/images/usps-worker.jpg" alt="Federal USPS employee at work" className="features-image" id="features-image" />
              <div className="features-image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — white bg */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">Three Simple <span className="text-gradient">Steps</span></h2>
            <p className="section-subtitle">Getting started with your benefits review is easy.</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Attend a Workshop</h3>
              <p className="step-desc">Join one of our free educational webinars to learn about common benefits mistakes and how to avoid them.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Request Your Report</h3>
              <p className="step-desc">We'll prepare a personalized benefits analysis covering your FEGLI, FERS, TSP, and Social Security.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Review Together</h3>
              <p className="step-desc">Meet with a certified benefits specialist to review your report and create a plan for retirement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container">
          <div className="page-cta">
            <h2>Ready to Optimize Your Benefits?</h2>
            <p>Contact us for a free, no-obligation benefits consultation and take the first step toward a secure retirement.</p>
            <div className="page-cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Get Your Free Report</Link>
              <a href="tel:7064072744" className="btn btn-secondary btn-lg">Call (706) 407-2744</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
