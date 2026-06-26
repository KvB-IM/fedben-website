import { Link } from 'react-router-dom'

export default function Overview() {
  return (
    <div className="page">
      {/* Header */}
      <section className="page-header page-header-accent">
        <div className="container">
          <span className="section-tag section-tag-light">Plan Overview</span>
          <h1 className="page-title page-title-light">Understanding Your <span className="text-gradient">Federal Benefits</span></h1>
          <p className="page-subtitle page-subtitle-light">A comprehensive guide to FERS, FEGLI, TSP, FEHB, and Social Security — everything you need to retire with confidence.</p>
        </div>
      </section>

      {/* FERS Overview — gray bg */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-split">
            <div className="content-text">
              <span className="section-tag">Retirement System</span>
              <h2 className="section-title">Federal Employees Retirement System <span className="text-gradient">(FERS)</span></h2>
              <p className="content-paragraph">FERS is a three-tiered retirement plan for federal civilian employees hired after January 1, 1984. It provides a reliable foundation for your post-career financial security through three interconnected components.</p>
              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon">🏛️</div>
                  <div>
                    <strong>Basic Benefit Plan</strong>
                    <p>A defined-benefit pension based on your "high-3" average salary, years of service, and a pension multiplier (1% or 1.1% if you retire at 62+ with 20+ years of service).</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">🔒</div>
                  <div>
                    <strong>Social Security</strong>
                    <p>Standard Social Security coverage that works alongside your FERS pension to provide a second layer of guaranteed retirement income.</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">💰</div>
                  <div>
                    <strong>Thrift Savings Plan (TSP)</strong>
                    <p>A tax-advantaged defined-contribution plan similar to a 401(k), with agency matching up to 5% of your basic pay.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-visual">
              <img src="/images/retirement-planning.png" alt="Retirement planning consultation" className="content-image" />
            </div>
          </div>
        </div>
      </section>

      {/* FERS Contribution Rates — white bg */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Contribution Rates</span>
            <h2 className="section-title">FERS Employee <span className="text-gradient">Contributions</span></h2>
            <p className="section-subtitle">Your contribution rate depends on when you were hired. Understanding this helps you plan your take-home pay and retirement projections.</p>
          </div>
          <div className="rate-cards">
            <div className="rate-card">
              <div className="rate-badge">Pre-2013</div>
              <div className="rate-number">0.8%</div>
              <p className="rate-desc">of basic pay contributed to the FERS Basic Benefit Plan</p>
              <span className="rate-label">FERS</span>
            </div>
            <div className="rate-card rate-card-highlight">
              <div className="rate-badge">2013 Hires</div>
              <div className="rate-number">3.1%</div>
              <p className="rate-desc">of basic pay under the FERS-Revised Annuity Employee plan</p>
              <span className="rate-label">FERS-RAE</span>
            </div>
            <div className="rate-card">
              <div className="rate-badge">2014+</div>
              <div className="rate-number">4.4%</div>
              <p className="rate-desc">of basic pay under FERS-Further Revised Annuity Employee plan</p>
              <span className="rate-label">FERS-FRAE</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEGLI Section — gray bg */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Life Insurance</span>
            <h2 className="section-title">Federal Employees Group Life Insurance <span className="text-gradient">(FEGLI)</span></h2>
            <p className="section-subtitle">FEGLI provides group term life insurance for federal employees. Understanding your options can save you thousands of dollars over your career.</p>
          </div>
          <div className="fegli-grid">
            <div className="fegli-card fegli-basic">
              <h3>Basic Insurance</h3>
              <div className="fegli-coverage">Annual Salary + $2,000</div>
              <p>Automatically provided unless you waive it. The government pays 1/3 of the premium and you pay 2/3 — making it very affordable.</p>
              <div className="fegli-tag">Auto-Enrolled</div>
            </div>
            <div className="fegli-card">
              <h3>Option A — Standard</h3>
              <div className="fegli-coverage">$10,000</div>
              <p>Flat $10,000 of additional coverage. You pay 100% of the premium. Cost is relatively low but increases with age.</p>
            </div>
            <div className="fegli-card fegli-warning">
              <h3>Option B — Additional</h3>
              <div className="fegli-coverage">1–5× Your Salary</div>
              <p>The most common source of overpaying. Premiums increase every 5 years starting at age 35. Compare with private options to save thousands.</p>
              <div className="fegli-tag fegli-tag-warning">⚠️ Review This</div>
            </div>
            <div className="fegli-card">
              <h3>Option C — Family</h3>
              <div className="fegli-coverage">Spouse & Children</div>
              <p>Covers spouse up to $25,000 and each child up to $12,500. You pay 100% of the premium. Private alternatives may offer more coverage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEHB — white bg */}
      <section className="section">
        <div className="container">
          <div className="content-split content-split-reverse">
            <div className="content-text">
              <span className="section-tag">Health Insurance</span>
              <h2 className="section-title">Federal Employees Health Benefits <span className="text-gradient">(FEHB)</span></h2>
              <p className="content-paragraph">FEHB is one of the largest employer-sponsored health insurance programs in the world, offering over 200 plan choices. The government covers approximately 72% of the weighted average premium.</p>
              <div className="info-list">
                <div className="info-item">
                  <div className="info-icon">🏥</div>
                  <div>
                    <strong>Carry Into Retirement</strong>
                    <p>You can keep your FEHB coverage into retirement if you've been enrolled for the 5 years immediately before you retire — one of the most valuable federal benefits.</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">📅</div>
                  <div>
                    <strong>Open Season Changes</strong>
                    <p>Every year during Open Season (mid-November to mid-December), you can change your health plan, switch between Self Only, Self Plus One, and Family coverage.</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">🔄</div>
                  <div>
                    <strong>Medicare Coordination</strong>
                    <p>At age 65, you can coordinate FEHB with Medicare for comprehensive coverage. Understanding how they work together is crucial for minimizing out-of-pocket costs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-visual">
              <img src="/images/usps-worker.jpg" alt="Federal employee" className="content-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Security — gray bg */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Social Security</span>
            <h2 className="section-title">Coordinating Social Security with <span className="text-gradient">FERS</span></h2>
            <p className="section-subtitle">As a FERS employee, you pay into Social Security and are entitled to benefits. Knowing when to claim can mean tens of thousands of dollars in difference.</p>
          </div>
          <div className="ss-grid">
            <div className="ss-card">
              <div className="ss-age">62</div>
              <h3>Early Retirement</h3>
              <p>You can claim as early as 62, but your benefit is permanently reduced by up to 30%. Best if you need income immediately.</p>
            </div>
            <div className="ss-card ss-card-recommended">
              <div className="ss-age">67</div>
              <h3>Full Retirement Age</h3>
              <p>For most FERS employees, this is when you receive 100% of your calculated benefit. The baseline for planning.</p>
              <span className="ss-badge">Recommended</span>
            </div>
            <div className="ss-card">
              <div className="ss-age">70</div>
              <h3>Maximum Benefit</h3>
              <p>Delaying until 70 increases your benefit by 8% per year beyond full retirement age — up to 24% more income for life.</p>
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
              <h3 className="step-title">Join a Webinar</h3>
              <p className="step-desc">Attend one of our free 30-minute workshops to learn the basics of your federal benefits package.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Get Your Free Report</h3>
              <p className="step-desc">Receive a personalized analysis of your FEGLI, FERS, TSP, and Social Security — tailored to your situation.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Review & Optimize</h3>
              <p className="step-desc">Meet with a certified benefits specialist to review your report and implement recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container">
          <div className="page-cta">
            <h2>Ready to Take Control of Your Benefits?</h2>
            <p>Get a free, personalized benefits review and start planning your retirement with confidence.</p>
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
