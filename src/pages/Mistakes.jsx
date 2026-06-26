import { Link } from 'react-router-dom'

const mistakes = [
  {
    number: 1,
    title: 'Never attending a federal employee benefits and retirement training',
    desc: 'There is a misconception that a "Benefits & Retirement" training or seminar is only for those that are ready for, or are nearing, retirement. Whether it is your first day on the job as a federal employee or your last day, a well conducted benefits & retirement seminar has valuable information for you.',
  },
  {
    number: 2,
    title: 'Paying way too much for their FEGLI Option B Coverage',
    desc: 'FEGLI Option B allows you to elect one to five times your base rate of pay in additional life insurance coverage. This cost is very cheap for younger federal employees however it begins to increase every five years beginning at age 35. At FBPC, we provide personalized FEGLI Option B comparisons to find more cost effective options.',
  },
  {
    number: 3,
    title: 'Not putting enough into TSP to receive the maximum matching',
    desc: 'The Thrift Savings Plan (TSP) will match the first 5% of a FERS employee\'s contributions. You put in 5% and the government will match 5%. Instantly, you have made 100% on your money. Take advantage of the FREE MONEY the government wants to give you.',
  },
  {
    number: 4,
    title: 'Not understanding all of the TSP distribution options',
    desc: 'The TSP is great for accumulation but may not be your best option for distribution. Do you withdraw your funds, leave them where they are, take the lifetime annuity, or transfer your balance into your own IRA? It is important to understand all options available.',
  },
  {
    number: 5,
    title: 'Neglecting to save and plan well enough for retirement',
    desc: 'We typically see federal employees taking home 50-70% of their pre-retirement income. For most this will not be adequate. A supplemental retirement plan specifically designed for federal employees may be the best solution.',
  },
  {
    number: 6,
    title: 'Foregoing the opportunity to purchase back prior military time',
    desc: 'If you served in the Armed Forces and did not accrue enough time to be eligible for a military pension, you can purchase that time back and have it count towards your federal retirement calculation.',
  },
  {
    number: 7,
    title: 'Making the wrong Survivor Benefit selection in retirement',
    desc: 'The Survivor\'s Benefit Plan (SBP) allows your spouse to continue receiving a percentage of your pension in the event you die first in retirement. In most cases an employee\'s SBP selection at retirement is an irrevocable decision.',
  },
  {
    number: 8,
    title: 'Not understanding how their retirement annuity is calculated',
    desc: 'Your FERS retirement annuity is based on your high-3 average salary and years of creditable service. Understanding the formula is essential for planning your retirement timeline.',
  },
  {
    number: 9,
    title: 'Neglecting to properly cover/insure their spouse and/or children',
    desc: 'As a federal employee you can provide up to 5x your salary in additional coverage (Option B), but only $25,000 max for your spouse and $12,500 max per child (Option C). Better options are available to you.',
  },
  {
    number: 10,
    title: 'Failure to receive a personalized benefits & retirement review',
    desc: 'A limited understanding of your retirement system, FEGLI, TSP, Survivor\'s Annuity, FEHB, and Social Security could cost you thousands during your career and even more in retirement.',
  },
]

export default function Mistakes() {
  return (
    <div className="page">
      {/* Page Header — with navy accent */}
      <section className="page-header page-header-accent">
        <div className="container">
          <span className="section-tag section-tag-light">Education</span>
          <h1 className="page-title page-title-light">Top 10 Mistakes Federal Employees <span className="text-gradient">Make</span></h1>
          <p className="page-subtitle page-subtitle-light">As the old saying goes, "You Don't Know What You Don't Know." The same can be said when it comes to your benefits & retirement information.</p>
        </div>
      </section>

      {/* Intro Section — light bg */}
      <section className="section section-alt">
        <div className="container">
          <div className="mistakes-intro">
            <div className="mistakes-intro-content">
              <h2 className="section-title">What You Don't Know <span className="text-gradient">Can Cost You</span></h2>
              <p>At Federal Benefit Plan Consultants, we find that most federal employees are very uninformed when it comes to their benefits and retirement options. What you do not know can cost you thousands of dollars over the course of your working career and even more in retirement.</p>
              <p>Below you will find ten of the most common mistakes that we see federal employees make and how to avoid them.</p>
            </div>
            <div className="mistakes-intro-image">
              <img src="/images/what-you-dont-know-cost.png" alt="What You Don't Know Can Cost You" />
            </div>
          </div>
        </div>
      </section>

      {/* Mistakes 1-5 — white bg */}
      <section className="section">
        <div className="container">
          <div className="mistakes-list">
            {mistakes.slice(0, 5).map((m) => (
              <div className="mistake-card" key={m.number} id={`mistake-${m.number}`}>
                <div className="mistake-header">
                  <div className="mistake-number">#{m.number}</div>
                  <h3 className="mistake-title">{m.title}</h3>
                </div>
                <p className="mistake-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page callout — navy bg */}
      <section className="section section-navy">
        <div className="container">
          <div className="mid-callout">
            <h2>Are You Making Any of These Mistakes?</h2>
            <p>Don't wait until retirement to find out. Request a free personalized benefits review and we'll help you get on the right track.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Get Your Free Review</Link>
          </div>
        </div>
      </section>

      {/* Mistakes 6-10 — light bg */}
      <section className="section section-alt">
        <div className="container">
          <div className="mistakes-list">
            {mistakes.slice(5).map((m) => (
              <div className="mistake-card" key={m.number} id={`mistake-${m.number}`}>
                <div className="mistake-header">
                  <div className="mistake-number">#{m.number}</div>
                  <h3 className="mistake-title">{m.title}</h3>
                </div>
                <p className="mistake-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section">
        <div className="container">
          <div className="page-cta">
            <h2>Don't Make These Mistakes</h2>
            <p>Get a free personalized benefits review and ensure you're on the right track for retirement.</p>
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
