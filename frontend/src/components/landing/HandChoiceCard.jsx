import Button from '../Button.jsx'
import './HandChoiceCard.css'

// One selectable option in the "How many hands?" section.
// theme:         'dark' | 'light'  (card background)
// icon:          any JSX to show at the top (here: one or two HandIcons)
// to:            the page the button opens
// actionVariant: which Button variant to use
function HandChoiceCard({ theme = 'light', icon, title, description, actionLabel, to, actionVariant = 'primary' }) {
  return (
    <article className={`hand-choice hand-choice--${theme}`}>
      <div className="hand-choice__icon">{icon}</div>
      <h3 className="hand-choice__title">{title}</h3>
      <p className="hand-choice__description">{description}</p>
      <Button to={to} variant={actionVariant} size="lg" className="hand-choice__action">
        {actionLabel} <span aria-hidden="true">↗</span>
      </Button>
    </article>
  )
}

export default HandChoiceCard
