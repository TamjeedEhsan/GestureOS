import HandIcon from '../HandIcon.jsx'
import HandChoiceCard from './HandChoiceCard.jsx'
import './HandSelection.css'

function HandSelection() {
  return (
    <section id="get-started" className="hand-selection">
      <h2 className="hand-selection__question">How many hands are we using?</h2>

      <div className="hand-selection__grid">
        <HandChoiceCard
          theme="dark"
          icon={<HandIcon size={44} className="hand-icon--lime" />}
          title="One Hand"
          description="Simple, intuitive gesture control"
          actionLabel="Choose One"
          to="/studio?hands=1"
          actionVariant="primary"
        />
        <HandChoiceCard
          theme="light"
          icon={
            <>
              <HandIcon size={44} mirrored />
              <HandIcon size={44} className="hand-icon--coral" />
            </>
          }
          title="Two Hands"
          description="More control, more possibilities"
          actionLabel="Choose Two"
          to="/studio?hands=2"
          actionVariant="secondary"
        />
      </div>
    </section>
  )
}

export default HandSelection
