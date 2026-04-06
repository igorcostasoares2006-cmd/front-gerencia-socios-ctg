import SvgIcon from './SvgIcon.jsx'
import './StatCard.css'

function StatCard({ label, value, tone, icon }) {
  return (
    <article className="stat-card">
      <div>
        <p className="stat-card__label">{label}</p>
        <strong className="stat-card__value">{value}</strong>
      </div>

      <span className={`stat-card__icon stat-card__icon--${tone}`}>
        <SvgIcon name={icon} alt="" />
      </span>
    </article>
  )
}

export default StatCard