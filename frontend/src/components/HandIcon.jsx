// An open hand drawn as an SVG outline. It uses "currentColor",
// so the icon takes the text color of whatever element contains it.
// mirrored: flips it horizontally to make a left hand.
function HandIcon({ size = 32, mirrored = false, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={mirrored ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path d="M8 13V6.5a1.5 1.5 0 0 1 3 0V12" />
      <path d="M11 11.5V4.5a1.5 1.5 0 0 1 3 0V12" />
      <path d="M14 12V6a1.5 1.5 0 0 1 3 0v6.5" />
      <path d="M17 9.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-1.4a6 6 0 0 1-4.6-2.2l-2.9-3.6a1.6 1.6 0 0 1 2.4-2.1L8 14.6" />
    </svg>
  )
}

export default HandIcon
