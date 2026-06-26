import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const funds = [
  { label: 'G Fund', height: 30, color: '#1B3A5C', desc: 'Government Securities — lowest risk, stable returns' },
  { label: 'F Fund', height: 45, color: '#2B5A8C', desc: 'Fixed Income Index — tracks U.S. bond market' },
  { label: 'C Fund', height: 70, color: '#C9A84C', desc: 'Common Stock Index — tracks S&P 500' },
  { label: 'S Fund', height: 55, color: '#A07E2E', desc: 'Small Cap Stock Index — smaller U.S. companies' },
  { label: 'I Fund', height: 50, color: '#E8D48B', desc: 'International Stock Index — international markets' },
  { label: 'L Fund', height: 65, color: '#3B7ABD', desc: 'Lifecycle Funds — auto-adjusting target date funds' },
]

export default function AboutTSP() {
  const chartRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )
    if (chartRef.current) observer.observe(chartRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page">
      {/* Header — navy accent */}
      <section className="page-header page-header-accent">
        <div className="container">
          <span className="section-tag section-tag-light">About TSP</span>
          <h1 className="page-title page-title-light">Understanding Your <span className="text-gradient">Thrift Savings Plan</span></h1>
          <p className="page-subtitle page-subtitle-light">The Thrift Savings Plan is one of the most powerful retirement tools available to federal employees. Learn how to make it work for you.</p>
        </div>
      </section>

      {/* Key Numbers — light bg */}
      <section className="section section-alt">
        <div className="container">
          <div className="tsp-key-numbers">
            <div className="tsp-key-card">
              <span className="tsp-key-number">5%</span>
              <span className="tsp-key-text">Agency matching contribution you could be missing</span>
            </div>
            <div className="tsp-key-card">
              <span className="tsp-key-number">$23K</span>
              <span className="tsp-key-text">Annual contribution limit for 2026</span>
            </div>
            <div className="tsp-key-card">
              <span className="tsp-key-number">$7.5K</span>
              <span className="tsp-key-text">Catch-up contribution for age 50+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fund Details + Chart — white bg */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Fund Breakdown</span>
            <h2 className="section-title">TSP Investment <span className="text-gradient">Funds</span></h2>
            <p className="section-subtitle">Understanding each fund will help you make smarter allocation decisions.</p>
          </div>
          <div className="tsp-page-layout">
            <div className="tsp-page-content">
              <div className="tsp-fund-list">
                {funds.map((f) => (
                  <div className="tsp-fund-item" key={f.label}>
                    <div className="tsp-fund-dot" style={{ background: f.color }}></div>
                    <div>
                      <h3 className="tsp-fund-name">{f.label}</h3>
                      <p className="tsp-fund-desc">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tsp-page-chart-wrap">
              <div className="tsp-chart" id="tsp-chart" ref={chartRef}>
                {funds.map((f) => (
                  <div
                    key={f.label}
                    className="chart-bar"
                    data-height={f.height}
                    style={{ '--bar-color': f.color }}
                  >
                    <span className="chart-label">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note — navy bg */}
      <section className="section section-navy">
        <div className="container">
          <div className="mid-callout">
            <h2>Are You Getting the Full Government Match?</h2>
            <p>If you're a FERS employee contributing less than 5%, you're leaving free money on the table. The government matches your first 5% dollar-for-dollar. That's an instant 100% return on your investment.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Join Free Webinar</Link>
          </div>
        </div>
      </section>

      {/* CTA — light bg */}
      <section className="section section-alt">
        <div className="container">
          <div className="page-cta">
            <h2>Want to Optimize Your TSP?</h2>
            <p>Join our free webinar to learn the best TSP strategies from certified federal benefits specialists.</p>
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
