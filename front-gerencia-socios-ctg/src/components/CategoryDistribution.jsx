import './CategoryDistribution.css'

function CategoryDistribution({ title, items }) {
  return (
    <div className="distribution-card">
      <h3>{title}</h3>

      <div className="distribution-list">
        {items.map((item) => (
          <CategoryBar key={item.name} {...item} />
        ))}
      </div>
    </div>
  )
}

function CategoryBar({ name, total, percent, tone }) {
  return (
    <div className="category-bar">
      <div className="category-bar__meta">
        <span>{name}</span>
        <span>{total}</span>
      </div>

      <div className="category-bar__track" aria-hidden="true">
        <span
          className={`category-bar__fill category-bar__fill--${tone}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}

export default CategoryDistribution