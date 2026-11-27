import { Link, useSearchParams } from 'react-router'

const modeLabels = {
  1: 'One hand',
  2: 'Two hands',
}

function StudioPage() {
  const [searchParams] = useSearchParams()
  const mode = modeLabels[searchParams.get('hands')]

  return (
    <section>
      <h1>Gesture Studio</h1>
      {mode ? (
        <p>
          Mode: <strong>{mode}</strong>. Live hand tracking is coming in a later step.
        </p>
      ) : (
        <p>
          No mode chosen yet. <Link to="/#get-started">Pick one or two hands</Link> to start.
        </p>
      )}
    </section>
  )
}

export default StudioPage
