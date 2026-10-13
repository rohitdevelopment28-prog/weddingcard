export default function CartoonCouple() {
  return (
    <svg viewBox="0 0 300 160" className="couple" aria-label="Cartoon bride and groom">
      {/* groom */}
      <g>
        <circle cx="110" cy="45" r="18" fill="#f6cfae" />
        <path d="M92 45 a18 18 0 0 1 36 0 v-6 a18 14 0 0 0 -36 0 z" fill="#3a2f2a" />
        <circle cx="104" cy="46" r="1.8" fill="#2f2f2f" />
        <circle cx="116" cy="46" r="1.8" fill="#2f2f2f" />
        <path d="M104 54 q6 5 12 0" stroke="#2f2f2f" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <path d="M92 66 q18 -10 36 0 l4 60 h-44 z" fill="#33415e" />
        <path d="M104 66 l6 10 6 -10" fill="#ffffff" />
        <path d="M110 70 l0 12" stroke="#b39b57" strokeWidth="3" />
      </g>
      {/* bride */}
      <g>
        <circle cx="190" cy="45" r="18" fill="#f6cfae" />
        <path d="M172 48 a18 18 0 0 1 36 0 l4 34 h-44 z" fill="#6b4a2f" />
        <circle cx="184" cy="46" r="1.8" fill="#2f2f2f" />
        <circle cx="196" cy="46" r="1.8" fill="#2f2f2f" />
        <path d="M184 54 q6 5 12 0" stroke="#c25b6b" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M172 66 q18 -10 36 0 l6 60 h-48 z" fill="#f4e8ee" stroke="#e3c9d6" strokeWidth="1.5" />
        <path d="M190 66 l0 20" stroke="#e3c9d6" strokeWidth="1.5" />
        <circle cx="190" cy="26" r="3" fill="#e8b4b8" />
      </g>
      {/* hearts */}
      <text x="150" y="30" fontSize="14" textAnchor="middle">💖</text>
      <text x="150" y="90" fontSize="22" textAnchor="middle">💐</text>
    </svg>
  )
}
