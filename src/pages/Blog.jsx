import { Link } from 'react-router-dom'

const blogs = [
  {
    id: 1,
    title: '2025 FERS Retirement Changes: What You Need to Know',
    excerpt: 'Congress has introduced several updates to the Federal Employees Retirement System for 2025. Here\'s a breakdown of the key changes that could affect your retirement timeline and benefits.',
    date: 'June 20, 2025',
    category: 'FERS',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Why Most Federal Employees Overpay for FEGLI Option B',
    excerpt: 'FEGLI Option B premiums increase every 5 years starting at age 35. Learn how to compare your coverage with private alternatives and potentially save thousands over your career.',
    date: 'June 12, 2025',
    category: 'FEGLI',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'TSP Contribution Limits for 2025: Maximize Your Savings',
    excerpt: 'The IRS has announced new TSP contribution limits for 2025, including a new "super catch-up" for employees aged 60–63 under SECURE 2.0. Here\'s how to take full advantage.',
    date: 'May 28, 2025',
    category: 'TSP',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Traditional vs. Roth TSP: Which Is Right for You?',
    excerpt: 'Choosing between Traditional and Roth TSP contributions is one of the most important financial decisions you\'ll make as a federal employee. We break down the pros and cons.',
    date: 'May 15, 2025',
    category: 'TSP',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'How to Buy Back Military Time for Federal Retirement',
    excerpt: 'If you served in the military before becoming a federal civilian employee, you may be able to "buy back" that time to increase your FERS retirement annuity. Here\'s the step-by-step process.',
    date: 'May 2, 2025',
    category: 'FERS',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: 'Understanding the FERS Supplement: Your Bridge to Social Security',
    excerpt: 'The FERS Supplement provides income to bridge the gap between your retirement date and age 62 when Social Security kicks in. Learn who qualifies and how it\'s calculated.',
    date: 'April 18, 2025',
    category: 'Retirement',
    readTime: '6 min read',
  },
  {
    id: 7,
    title: 'FEHB Open Season 2025: Tips for Choosing the Best Plan',
    excerpt: 'With over 200 health plans available, Open Season can be overwhelming. Here are the key factors to consider when evaluating your FEHB options for next year.',
    date: 'April 5, 2025',
    category: 'FEHB',
    readTime: '4 min read',
  },
  {
    id: 8,
    title: 'The Survivor Benefit Plan: Protecting Your Spouse in Retirement',
    excerpt: 'Your SBP election at retirement is usually irrevocable. Understanding your options before you retire is critical to ensuring your spouse is properly protected.',
    date: 'March 22, 2025',
    category: 'Retirement',
    readTime: '5 min read',
  },
  {
    id: 9,
    title: 'When Should You Claim Social Security as a FERS Retiree?',
    excerpt: 'Claiming at 62, 67, or 70 can mean tens of thousands of dollars in difference over your lifetime. Learn the optimal strategy for coordinating Social Security with your FERS pension.',
    date: 'March 10, 2025',
    category: 'Social Security',
    readTime: '8 min read',
  },
]

const categoryColors = {
  FERS: '#005ea2',
  FEGLI: '#d54309',
  TSP: '#00a91c',
  FEHB: '#8168b3',
  Retirement: '#C9A84C',
  'Social Security': '#0081a1',
}

export default function Blog() {
  return (
    <div className="page">
      <section className="page-header page-header-accent">
        <div className="container">
          <span className="section-tag section-tag-light">Resources</span>
          <h1 className="page-title page-title-light">Federal Benefits <span className="text-gradient">Blog</span></h1>
          <p className="page-subtitle page-subtitle-light">Expert insights on FERS, FEGLI, TSP, and everything federal employees need to know about their benefits.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {blogs.map((post) => (
              <article className="blog-card" key={post.id} id={`blog-${post.id}`}>
                <div className="blog-card-header">
                  <span className="blog-category" style={{ background: categoryColors[post.category] || '#005ea2' }}>
                    {post.category}
                  </span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-link">Read more →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="page-cta">
            <h2>Want Personalized Benefits Advice?</h2>
            <p>Our blog covers general topics. For guidance specific to your situation, request a free benefits review.</p>
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
