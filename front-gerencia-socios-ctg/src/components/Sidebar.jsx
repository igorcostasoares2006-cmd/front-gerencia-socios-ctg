import SvgIcon from './SvgIcon.jsx'
import './Sidebar.css'

function Sidebar({ title, subtitle, items, profile }) {
  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar__brand">
          <h1 className="sidebar__title">{title}</h1>
          <p className="sidebar__subtitle">{subtitle}</p>
        </div>

        <nav className="sidebar__nav" aria-label="Navegacao principal">
          {items.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </nav>
      </div>

      <div className="sidebar__profile">
        <span className="sidebar__avatar">{profile.name.charAt(0)}</span>
        <div>
          <p className="sidebar__profile-name">{profile.name}</p>
          <p className="sidebar__profile-email">{profile.email}</p>
        </div>
        <button className="icon-button" type="button" aria-label="Sair">
          <SvgIcon name="logout" alt="" />
        </button>
      </div>
    </aside>
  )
}

function NavItem({ item }) {
  return (
    <button
      type="button"
      className={`nav-item ${item.active ? 'nav-item--active' : ''}`}
      aria-current={item.active ? 'page' : undefined}
    >
      <span className="nav-item__icon">
        <SvgIcon name={item.icon} alt="" />
      </span>
      <span>{item.label}</span>
    </button>
  )
}

export default Sidebar