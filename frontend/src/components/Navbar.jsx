import { Link, NavLink } from 'react-router'
import './Navbar.css'

const navLinks = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/studio', label: 'Studio' },
  { to: '/projects', label: 'Projects' },
  { to: '/settings', label: 'Settings' },
]

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Main navigation">
        <Link to="/" className="navbar__brand">
          <span className="navbar__logo" aria-hidden="true" />
          GestureOS
        </Link>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className="navbar__link">
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
