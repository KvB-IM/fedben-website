import { useState } from 'react'

export default function Contact() {
  const [reportSubmitted, setReportSubmitted] = useState(false)
  const [contactSubmitted, setContactSubmitted] = useState(false)

  const handleReportSubmit = (e) => {
    e.preventDefault()
    setReportSubmitted(true)
    setTimeout(() => setReportSubmitted(false), 4000)
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    setContactSubmitted(true)
    setTimeout(() => setContactSubmitted(false), 4000)
  }

  return (
    <div className="page">
      {/* Header — navy accent */}
      <section className="page-header page-header-accent">
        <div className="container">
          <span className="section-tag section-tag-light">Get in Touch</span>
          <h1 className="page-title page-title-light">Let's Discuss Your <span className="text-gradient">Benefits</span></h1>
          <p className="page-subtitle page-subtitle-light">Ready to take control of your federal retirement? Contact us for a free, no-obligation benefits consultation.</p>
        </div>
      </section>

      {/* Free Report Form — light bg */}
      <section className="section section-alt">
        <div className="container">
          <div className="cta-card" id="cta-card">
            <div className="cta-content">
              <h2 className="cta-title" id="cta-title">
                Get Your Free <span className="text-gradient">Benefits Analysis</span> Report
              </h2>
              <p className="cta-desc">
                Receive a personalized benefits report that breaks down your FEGLI, FERS, TSP, and Social Security — tailored to your unique situation. No cost, no obligation.
              </p>
              <div className="cta-benefits">
                {['Personalized to your situation', '100% free, no obligation', 'Expert analysis by certified planners'].map((text, i) => (
                  <div className="cta-benefit" key={i}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              {reportSubmitted ? (
                <div className="form-success">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Thank you! We'll be in touch soon with your personalized report.</span>
                </div>
              ) : (
                <form className="cta-form" id="cta-form" onSubmit={handleReportSubmit}>
                  <div className="form-row">
                    <input type="text" placeholder="Full Name" className="form-input" id="input-name" required />
                    <input type="email" placeholder="Email Address" className="form-input" id="input-email" required />
                  </div>
                  <div className="form-row">
                    <input type="tel" placeholder="Phone Number" className="form-input" id="input-phone" />
                    <select className="form-input" id="input-agency" defaultValue="">
                      <option value="" disabled>Select Agency</option>
                      <option value="usps">USPS</option>
                      <option value="dod">Department of Defense</option>
                      <option value="va">Veterans Affairs</option>
                      <option value="dhs">Homeland Security</option>
                      <option value="hhs">Health & Human Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg btn-full" id="btn-submit-report">
                    Get My Free Report
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
            <div className="cta-visual">
              <img src="/images/benefits-report-real.png" alt="Benefits Analysis Report" className="cta-image" id="cta-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info + Form — white bg */}
      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <h2 className="section-title">Contact <span className="text-gradient">Information</span></h2>
              <div className="contact-details">
                <div className="contact-item" id="contact-phone">
                  <div className="contact-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="contact-label">Phone</span>
                    <a href="tel:7064072744" className="contact-value">(706) 407-2744</a>
                  </div>
                </div>
                <div className="contact-item" id="contact-email-item">
                  <div className="contact-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className="contact-label">Email</span>
                    <a href="mailto:support@federalbenefitsexchange.com" className="contact-value">support@federalbenefitsexchange.com</a>
                  </div>
                </div>
                <div className="contact-item" id="contact-address">
                  <div className="contact-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <span className="contact-label">Office</span>
                    <span className="contact-value">332 Edgefield Rd, North Augusta, SC 29841</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              {contactSubmitted ? (
                <div className="form-success form-success-contact">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Message sent! We'll get back to you shortly.</span>
                </div>
              ) : (
                <form className="contact-form" id="contact-form" onSubmit={handleContactSubmit}>
                  <h3 className="form-title">Send Us a Message</h3>
                  <input type="text" placeholder="Your Name" className="form-input" id="contact-input-name" required />
                  <input type="email" placeholder="Your Email" className="form-input" id="contact-input-email" required />
                  <input type="tel" placeholder="Phone Number" className="form-input" id="contact-input-phone" />
                  <textarea placeholder="How can we help you?" className="form-input form-textarea" id="contact-input-message" rows="4"></textarea>
                  <button type="submit" className="btn btn-primary btn-full" id="btn-contact-submit">
                    Send Message
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
