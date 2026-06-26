import { Link } from 'react-router-dom'

export default function FloatingReport() {
  return (
    <div className="floating-sidebar" id="floating-sidebar">
      <div className="floating-sidebar-inner">
        <h3 className="floating-sidebar-title">Free Benefit Analysis Report!</h3>
        <img
          src="/images/benefits-report-real.png"
          alt="Benefits Report"
          className="floating-sidebar-image"
        />
        <Link to="/contact" className="btn btn-primary btn-full btn-sm floating-sidebar-btn">
          GET MY FREE REPORT
        </Link>
      </div>
    </div>
  )
}
