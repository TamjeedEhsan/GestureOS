import { Link } from 'react-router'
import './Button.css'

// variant: 'primary' (lime) | 'secondary' (coral)
// size:    'md' | 'lg'
// to:      if given, the button navigates to that page (renders a <Link>)
function Button({ variant = 'primary', size = 'md', to, className = '', children, ...rest }) {
  const classes = `button button--${variant} button--${size} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}

export default Button
