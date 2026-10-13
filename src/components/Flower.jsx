export default function Flower({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g opacity="0.9">
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <ellipse key={a} cx="50" cy="28" rx="10" ry="16" fill="#f3d9de" stroke="#d8a7b1" strokeWidth="1" transform={`rotate(${a} 50 50)`} />
        ))}
        <circle cx="50" cy="50" r="9" fill="#f2e2b6" stroke="#c9b578" strokeWidth="1" />
      </g>
    </svg>
  )
}
