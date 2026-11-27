import './Card.css'

// accent: 'lime' | 'orange' | 'red' (colors the short bar above the title)
function Card({ title, accent = 'lime', children }) {
  return (
    <article className={`card card--${accent}`}>
      {title && <h3 className="card__title">{title}</h3>}
      <div className="card__body">{children}</div>
    </article>
  )
}

export default Card
