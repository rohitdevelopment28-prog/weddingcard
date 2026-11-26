import { swag } from '../lib/arch'

const ring = (count, radius, rx, ry, offset = 0) =>
  Array.from({ length: count }, (_, i) => (
    <ellipse key={i} cx="0" cy={-radius} rx={rx} ry={ry} transform={`rotate(${(i * 360) / count + offset})`} />
  ))

// Shared symbols. Rendered once; every other drawing refers to them with <use>.
export function Defs() {
  return (
    <svg className="defs" aria-hidden="true" focusable="false">
      <defs>
        <symbol id="marigold" viewBox="-12 -12 24 24" overflow="visible">
          <g fill="#d9700f">{ring(12, 7.6, 2.9, 3.6)}</g>
          <g fill="#f0901c">{ring(10, 5.2, 2.6, 3.1, 12)}</g>
          <g fill="#f9b233">{ring(8, 2.9, 2.1, 2.5)}</g>
          <circle r="1.7" fill="#c9600b" />
        </symbol>
        <symbol id="marigold-y" viewBox="-12 -12 24 24" overflow="visible">
          <g fill="#e0a019">{ring(12, 7.6, 2.9, 3.6)}</g>
          <g fill="#f4c138">{ring(10, 5.2, 2.6, 3.1, 12)}</g>
          <g fill="#fbdc72">{ring(8, 2.9, 2.1, 2.5)}</g>
          <circle r="1.7" fill="#c98b10" />
        </symbol>
        <symbol id="mango-leaf" viewBox="-6 0 12 40" overflow="visible">
          <path d="M0 0C6.5 9 6 24 0 40C-6 24-6.500 9 0 0Z" fill="#3d7a3a" />
          <path d="M0 0C6.500 9 6 24 0 40Z" fill="#2c5f31" />
          <path d="M0 3V35" stroke="#86b263" strokeWidth=".7" />
        </symbol>
        <symbol id="diya" viewBox="-20 -34 40 46" overflow="visible">
          <path className="flame" d="M0-28C6-18 7-12 4-6C2-2-2-2-4-6C-7-12-5-18 0-28Z" fill="#ffd35c" />
          <path className="flame" d="M0-20C3-14 3-10 2-7C1-5-1-5-2-7C-3-10-3-14 0-20Z" fill="#fff6d8" />
          <path d="M-17-4C-9-1 9-1 17-4C15 6 8 10 0 10C-8 10-15 6-17-4Z" fill="#a4491f" />
          <path d="M-17-4C-9-1 9-1 17-4C9-8-9-8-17-4Z" fill="#6f2c12" />
          <path d="M-13 2C-6 6 6 6 13 2" stroke="#e9b04a" strokeWidth="1.3" fill="none" />
        </symbol>
        <radialGradient id="glow">
          <stop offset="0" stopColor="#ffcf70" stopOpacity=".85" />
          <stop offset=".4" stopColor="#ff9a3c" stopOpacity=".32" />
          <stop offset="1" stopColor="#ff9a3c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8a6424" />
          <stop offset=".45" stopColor="#d9b565" />
          <stop offset="1" stopColor="#94702d" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function Flower({ x, y, size, yellow }) {
  return <use href={yellow ? '#marigold-y' : '#marigold'} x={x - size / 2} y={y - size / 2} width={size} height={size} />
}

export function Garland({ from, to, sag, count, size }) {
  return swag(...from, ...to, sag, count).map(([x, y], i) => <Flower key={i} x={x} y={y} size={size} yellow={i % 4 === 2} />)
}

export function HangingString({ x, y, count, size, delay = 0 }) {
  return (
    <g className="sway" style={{ animationDelay: `${delay}s`, transformOrigin: `${x}px ${y}px` }}>
      {Array.from({ length: count }, (_, i) => (
        <Flower key={i} x={x} y={y + (i + 0.5) * size * 0.78} size={size} yellow={i % 3 === 1} />
      ))}
      <use href="#mango-leaf" x={x - size * 0.4} y={y + count * size * 0.78} width={size * 0.8} height={size * 2} />
    </g>
  )
}

export function Diya({ x, y, size, delay = 0 }) {
  return (
    <g style={{ '--flicker': `${delay}s` }}>
      <circle className="flicker" cx={x} cy={y - size * 0.35} r={size * 1.7} fill="url(#glow)" />
      <use href="#diya" x={x - size / 2} y={y - size * 0.8} width={size} height={size * 1.15} />
    </g>
  )
}

export function Divider() {
  const side = (
    <>
      <path d="M16 0C30-9 44 8 58-1C66-6 74-2 80 2" fill="none" stroke="url(#gold)" strokeWidth="1.2" />
      <path d="M27-4C31-11 38-11 41-6C36-3 31-2 27-4Z" fill="#4d8244" />
      <path d="M47 4C51 10 58 9 60 4C55 1 50 1 47 4Z" fill="#4d8244" />
      <circle cx="68" cy="-5" r="2.600" fill="#b3243a" />
      <circle cx="82" cy="3" r="1.800" fill="#e08a1e" />
    </>
  )
  return (
    <svg className="divider" viewBox="-90 -14 180 28" aria-hidden="true">
      <g>{side}</g>
      <g transform="scale(-1 1)">{side}</g>
      <Flower x={0} y={0} size={22} />
    </svg>
  )
}

export function Heading({ children }) {
  return (
    <header className="heading reveal">
      <h2>{children}</h2>
      <Divider />
    </header>
  )
}

export function Monogram() {
  return (
    <svg className="monogram" viewBox="0 0 120 120" role="img" aria-label="R and S">
      <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="2.400" />
      <circle cx="60" cy="60" r="50.500" fill="none" stroke="currentColor" strokeWidth=".9" />
      <text x="45" y="72" textAnchor="middle" fontSize="50" fill="currentColor">R</text>
      <text x="75" y="84" textAnchor="middle" fontSize="50" fill="currentColor">S</text>
    </svg>
  )
}
