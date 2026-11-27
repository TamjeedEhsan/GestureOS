import { Link } from 'react-router'
import Button from './Button.jsx'
import HandIcon from './HandIcon.jsx'
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/#features', label: 'Features' },
]

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Main navigation">
        <Link to="/" className="navbar__brand">
          <span className="navbar__logo">
            <HandIcon size={20} />
          </span>
          GestureOS
        </Link>

        <div className="navbar__right">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="navbar__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button to="/#get-started" className="navbar__cta">
            Get Started <span aria-hidden="true">↗</span>
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
