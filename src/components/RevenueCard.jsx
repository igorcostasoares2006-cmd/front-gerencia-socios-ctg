import './RevenueCard.css'

function RevenueCard({ title, amount, description }) {
  return (
    <div className="metric-card">
      <h3>{title}</h3>
      <strong className="metric-card__amount">{amount}</strong>
      <p>{description}</p>
    </div>
  )
}

export default RevenueCard