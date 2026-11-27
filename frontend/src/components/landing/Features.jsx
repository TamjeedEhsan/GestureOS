import './Features.css'

const features = [
  {
    title: 'Track both hands',
    text: 'Your webcam follows 21 points on each hand, right in the browser.',
  },
  {
    title: 'Draw in the air',
    text: 'Sketch with your index finger and switch tools with a pinch.',
  },
  {
    title: 'Save your work',
    text: 'Keep your drawings as projects and come back to them anytime.',
  },
]

function Features() {
  return (
    <section id="features" className="features">
      <h2 className="features__heading">What you can do</h2>
      <div className="features__grid">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <h3 className="feature-card__title">{feature.title}</h3>
            <p className="feature-card__text">{feature.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features
