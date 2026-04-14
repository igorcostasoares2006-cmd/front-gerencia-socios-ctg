import clockIcon from '../assets/svg/clock.svg'
import gridIcon from '../assets/svg/grid.svg'
import logoutIcon from '../assets/svg/logout.svg'
import userCheckIcon from '../assets/svg/user-check.svg'
import userXIcon from '../assets/svg/user-x.svg'
import usersIcon from '../assets/svg/users.svg'

const iconMap = {
  clock: clockIcon,
  grid: gridIcon,
  logout: logoutIcon,
  'user-check': userCheckIcon,
  'user-x': userXIcon,
  users: usersIcon,
}

function SvgIcon({ name, alt = '' }) {
  const src = iconMap[name]

  if (!src) {
    return null
  }

  return <img className="svg-icon" src={src} alt={alt} aria-hidden="true" />
}

export default SvgIcon