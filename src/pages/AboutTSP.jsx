import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const funds = [
  { name: 'G Fund', color: '#4A90A4', desc: 'Government Securities — invests in short-term U.S. Treasury securities. Guaranteed against loss of principal. Lowest risk, lowest return.', risk: 'Very Low', ytd: '2.1%', oneYear: '4.4%', tenYear: '2.9%' },
  { name: 'F Fund', color: '#6B8E23', desc: 'Fixed Income Index — tracks the Bloomberg U.S. Aggregate Bond Index. Invests in government, corporate, and mortgage-backed bonds.', risk: 'Low', ytd: '1.0%', oneYear: '4.5%', tenYear: '1.7%' },
  { name: 'C Fund', color: '#C9A84C', desc: 'Common Stock Index — tracks the S&P 500. Invests in 500 of the largest U.S. companies for long-term growth.', risk: 'Moderate', ytd: '8.1%', oneYear: '22.2%', tenYear: '15.6%' },
  { name: 'S Fund', color: '#E8734A', desc: 'Small Cap Stock Index — tracks the Dow Jones U.S. Completion TSM Index. Small and mid-cap companies not in the S&P 500.', risk: 'Higher', ytd: '15.6%', oneYear: '28.8%', tenYear: '12.6%' },
  { name: 'I Fund', color: '#7B68EE', desc: 'International Stock Index — tracks the MSCI EAFE Index. Exposure to developed markets in Europe, Australasia, and the Far East.', risk: 'Higher', ytd: '16.1%', oneYear: '32.1%', tenYear: '11.0%' },
]

export default function AboutTSP() {
  const chartRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('animate') },
      { threshold: 0.3 }
    )
    if (chartRef.current) observer.observe(chartRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page">
      {/* Header */}
      <section className="page-header page-header-accent">
        <div className="container">
          <span className="section-tag section-tag-light">Thrift Savings Plan</span>
          <h1 className="page-title page-title-light">Your Guide to the <span className="text-gradient">TSP</span></h1>
          <p className="page-subtitle page-subtitle-light">The Thrift Savings Plan is the federal government's 401(k)-style retirement savings and investment plan. Here's everything you need to know.</p>
        </div>
      </section>

      {/* TSP Overview — gray bg */}
      <section className="section section-alt">
        <div className="container">
          <div className="content-split">
            <div className="content-text">
              <span className="section-tag">Overview</span>
              <h2 className="section-title">What Is the <span className="text-gradient">TSP?</span></h2>
              <p className="content-paragraph">The Thrift Savings Plan is a defined-contribution retirement savings plan for federal employees and members of the uniformed services. It offers the same types of savings and tax benefits that many private employers offer through 401(k) plans.</p>
              <p className="content-paragraph">As a FERS employee, your agency automatically contributes 1% of your basic pay to your TSP account — and will match up to an additional 4% if you contribute at least 5%.</p>
              <div className="highlight-box">
                <div className="highlight-icon">💡</div>
                <div>
                  <strong>Don't Leave Free Money on the Table</strong>
                  <p>If you contribute at least 5% of your pay, you get the full 5% match from your agency. That's an instant 100% return on your money.</p>
                </div>
              </div>
            </div>
            <div className="content-visual">
              <img src="/images/tsp-investing.png" alt="TSP investment dashboard" className="content-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Contribution Limits — white bg */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">2025 Limits</span>
            <h2 className="section-title">TSP Contribution <span className="text-gradient">Limits</span></h2>
            <p className="section-subtitle">Know your limits to maximize your retirement savings. These are updated annually by the IRS.</p>
          </div>
          <div className="rate-cards">
            <div className="rate-card">
              <div className="rate-badge">Standard</div>
              <div className="rate-number">$23,500</div>
              <p className="rate-desc">Maximum annual elective deferral limit for all employees under age 50</p>
              <span className="rate-label">Per Year</span>
            </div>
            <div className="rate-card rate-card-highlight">
              <div className="rate-badge">Age 50+</div>
              <div className="rate-number">$31,000</div>
              <p className="rate-desc">Standard $23,500 + $7,500 catch-up contribution for those age 50 and over</p>
              <span className="rate-label">With Catch-Up</span>
            </div>
            <div className="rate-card">
              <div className="rate-badge">Ages 60–63</div>
              <div className="rate-number">$34,750</div>
              <p className="rate-desc">Under SECURE 2.0, employees turning 60–63 get a higher catch-up limit of $11,250</p>
              <span className="rate-label">Super Catch-Up</span>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional vs Roth — gray bg */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Tax Strategy</span>
            <h2 className="section-title">Traditional vs. Roth <span className="text-gradient">TSP</span></h2>
            <p className="section-subtitle">Choosing between Traditional and Roth TSP contributions can significantly impact your retirement income.</p>
          </div>
          <div className="comparison-grid">
            <div className="comparison-card">
              <div className="comparison-header comparison-header-navy">Traditional TSP</div>
              <div className="comparison-body">
                <div className="comparison-item">
                  <span className="comparison-label">Contributions</span>
                  <span className="comparison-value">Pre-tax (reduces taxable income now)</span>
                </div>
                <div className="comparison-item">
                  <span className="comparison-label">Growth</span>
                  <span className="comparison-value">Tax-deferred</span>
                </div>
                <div className="comparison-item">
                  <span className="comparison-label">Withdrawals</span>
                  <span className="comparison-value">Taxed as ordinary income</span>
                </div>
                <div className="comparison-item">
                  <span className="comparison-label">Best For</span>
                  <span className="comparison-value">Higher earners who expect lower tax bracket in retirement</span>
                </div>
              </div>
            </div>
            <div className="comparison-vs">VS</div>
            <div className="comparison-card">
              <div className="comparison-header comparison-header-gold">Roth TSP</div>
              <div className="comparison-body">
                <div className="comparison-item">
                  <span className="comparison-label">Contributions</span>
                  <span className="comparison-value">After-tax (no current tax break)</span>
                </div>
                <div className="comparison-item">
                  <span className="comparison-label">Growth</span>
                  <span className="comparison-value">Tax-free</span>
                </div>
                <div className="comparison-item">
                  <span className="comparison-label">Withdrawals</span>
                  <span className="comparison-value">Tax-free (qualified)</span>
                </div>
                <div className="comparison-item">
                  <span className="comparison-label">Best For</span>
                  <span className="comparison-value">Younger employees or those expecting higher taxes in retirement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fund Details — white bg */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Investment Funds</span>
            <h2 className="section-title">The 5 Core <span className="text-gradient">TSP Funds</span></h2>
            <p className="section-subtitle">Each fund has a different risk profile and investment strategy. Understanding them is key to building the right portfolio.</p>
          </div>
          <div className="fund-table-wrap">
            <table className="fund-table">
              <thead>
                <tr>
                  <th>Fund</th>
                  <th>Description</th>
                  <th>Risk Level</th>
                  <th>YTD</th>
                  <th>1-Year</th>
                  <th>10-Year</th>
                </tr>
              </thead>
              <tbody>
                {funds.map((f, i) => (
                  <tr key={i}>
                    <td>
                      <div className="fund-name-cell">
                        <span className="fund-dot" style={{ background: f.color }}></span>
                        <strong>{f.name}</strong>
                      </div>
                    </td>
                    <td className="fund-desc-cell">{f.desc}</td>
                    <td><span className="risk-badge" style={{ color: f.color }}>{f.risk}</span></td>
                    <td className="fund-perf">{f.ytd}</td>
                    <td className="fund-perf">{f.oneYear}</td>
                    <td className="fund-perf">{f.tenYear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="table-disclaimer">Performance data as of June 2026. Past performance does not guarantee future results. Source: tsp.gov</p>
        </div>
      </section>

      {/* Chart + L Funds — gray bg */}
      <section className="section section-alt">
        <div className="container">
          <div className="tsp-page-layout">
            <div>
              <span className="section-tag">Visual Breakdown</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Fund Performance <span className="text-gradient">Comparison</span></h2>
              <p className="overview-intro">This chart visualizes how each TSP fund has performed. The C, S, and I Funds carry more risk but have historically delivered higher returns over the long term.</p>
              <div className="tsp-chart" ref={chartRef}>
                {[
                  { label: 'G Fund', height: '30', color: '#4A90A4' },
                  { label: 'F Fund', height: '20', color: '#6B8E23' },
                  { label: 'C Fund', height: '70', color: '#C9A84C' },
                  { label: 'S Fund', height: '55', color: '#E8734A' },
                  { label: 'I Fund', height: '50', color: '#7B68EE' },
                ].map((bar, i) => (
                  <div className="chart-bar" key={i} data-height={bar.height} style={{ '--bar-color': bar.color, transitionDelay: `${i * 0.15}s` }}>
                    <span className="chart-label">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="tsp-page-chart-wrap">
              <h3 className="section-title" style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Lifecycle <span className="text-gradient">(L) Funds</span></h3>
              <p className="overview-intro">Don't want to pick individual funds? Lifecycle Funds automatically rebalance your portfolio as you approach retirement.</p>
              <div className="tsp-fund-list">
                {['L Income', 'L 2030', 'L 2035', 'L 2040', 'L 2045', 'L 2050', 'L 2055', 'L 2060', 'L 2065'].map((fund, i) => (
                  <div className="tsp-fund-item" key={i}>
                    <div className="tsp-fund-dot" style={{ background: `hsl(${200 + i * 15}, 60%, ${40 + i * 3}%)` }}></div>
                    <div>
                      <div className="tsp-fund-name">{fund}</div>
                      <div className="tsp-fund-desc">{fund === 'L Income' ? 'For those already withdrawing — most conservative mix' : `Target date: ${fund.replace('L ', '')} — adjusts risk automatically`}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Options — white bg */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Distribution</span>
            <h2 className="section-title">TSP Withdrawal <span className="text-gradient">Options</span></h2>
            <p className="section-subtitle">When you retire, you have several options for accessing your TSP funds. Each has different tax implications and flexibility.</p>
          </div>
          <div className="icon-cards-grid">
            {[
              { icon: '📤', title: 'Lump Sum', desc: 'Withdraw all or part of your balance in a single payment. Subject to income tax in the year of withdrawal.' },
              { icon: '📅', title: 'Monthly Payments', desc: 'Set up a fixed monthly payment or payments based on life expectancy for steady retirement income.' },
              { icon: '🔄', title: 'Transfer to IRA', desc: 'Roll over your TSP balance into a traditional IRA for more investment options and continued tax deferral.' },
              { icon: '💎', title: 'TSP Annuity', desc: 'Purchase a life annuity from MetLife for guaranteed monthly income for the rest of your life.' },
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

      {/* CTA */}
      <section className="section section-alt">
        <div className="container">
          <div className="page-cta">
            <h2>Need Help With Your TSP Strategy?</h2>
            <p>Our certified specialists can review your current allocation, suggest improvements, and help you create a withdrawal strategy for retirement.</p>
            <div className="page-cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Get Your Free TSP Review</Link>
              <a href="tel:7064072744" className="btn btn-secondary btn-lg">Call (706) 407-2744</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
