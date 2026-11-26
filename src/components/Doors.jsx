import { useEffect, useRef, useState } from 'react'
import { Diya, Flower, Garland, HangingString } from './Ornaments'
import { archPath } from '../lib/arch'

const OPEN_MS = 2600

const PETALS = [0, 45, 90, 135, 180, 225, 270, 315]
const LATTICE = archPath({ x0: 62, x1: 338, spring: 150, apex: 46, base: 168, lobes: 5 })

function Panel({ y, h }) {
  const cy = y + h / 2
  return (
    <g>
      <rect x="16" y={y} width="104" height={h} rx="3" fill="#2a120c" />
      <rect x="20" y={y + 4} width="96" height={h - 8} rx="2" fill="url(#panel)" stroke="#7d4a25" strokeWidth="1" />
      <rect x="26" y={y + 10} width="84" height={h - 20} fill="none" stroke="#c08a43" strokeWidth=".8" strokeDasharray="1.500 3" />
      <g transform={`translate(68 ${cy})`}>
        {PETALS.map((a) => (
          <path key={a} d="M0-5C7-12 6-24 0-32C-6-24-7-12 0-5Z" transform={`rotate(${a})`} fill="#8c2f26" stroke="#d39a4c" strokeWidth=".9" />
        ))}
        {PETALS.map((a) => (
          <path key={a} d="M0-4C3-8 3-13 0-17C-3-13-3-8 0-4Z" transform={`rotate(${a + 22.5})`} fill="#2f6b58" stroke="#d39a4c" strokeWidth=".6" />
        ))}
        <circle r="5.500" fill="#e0aa52" />
        <circle r="2.500" fill="#7d4a25" />
      </g>
      {[[27, y + 11], [109, y + 11], [27, y + h - 11], [109, y + h - 11]].map(([x, yy]) => (
        <g key={`${x}${yy}`}>
          <circle cx={x} cy={yy} r="3.200" fill="#d9aa55" />
          <circle cx={x - 0.8} cy={yy - 0.8} r="1.200" fill="#fbe6ae" />
        </g>
      ))}
    </g>
  )
}

function Leaf({ side }) {
  return (
    <svg className={`leaf ${side}`} viewBox="0 0 136 430" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="teak" x1="0" x2="1">
          <stop offset="0" stopColor="#3b1a10" />
          <stop offset=".5" stopColor="#5d2d19" />
          <stop offset="1" stopColor="#3f1c11" />
        </linearGradient>
        <linearGradient id="panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5f2f1b" />
          <stop offset="1" stopColor="#3c1b11" />
        </linearGradient>
      </defs>
      <g transform={side === 'right' ? 'translate(136 0) scale(-1 1)' : undefined}>
        <rect width="136" height="430" fill="url(#teak)" />
        <Panel y={14} h={126} />
        <Panel y={152} h={126} />
        <Panel y={290} h={126} />
        {Array.from({ length: 16 }, (_, i) => (
          <circle key={i} cx="8" cy={18 + i * 26.300} r="2.600" fill="#c99a4b" />
        ))}
        <g transform="translate(128 222)">
          <circle r="5" fill="#e3b560" />
          <circle cy="13" r="10" fill="none" stroke="#e3b560" strokeWidth="2.800" />
        </g>
        <rect x="133.500" width="2.500" height="430" fill="#1d0b07" />
      </g>
    </svg>
  )
}

export default function Doors({ t, onTap, onDone }) {
  const [opening, setOpening] = useState(false)
  const timer = useRef()
  useEffect(() => () => clearTimeout(timer.current), [])

  const open = () => {
    if (opening) return
    setOpening(true)
    onTap()
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    timer.current = setTimeout(onDone, still ? 350 : OPEN_MS)
  }

  return (
    <button type="button" className={`doors ${opening ? 'opening' : ''}`} onClick={open} aria-label={`${t.invited}. ${t.tapDoors}`}>
      <span className="doors-copy">
        <span className="script doors-title">{t.invited}</span>
        <span className="caps">{t.invitedSub}</span>
      </span>

      <span className="doorway">
        <svg className="inside" viewBox="0 0 272 430" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="hall" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#5a1f2b" />
              <stop offset=".5" stopColor="#d9702c" />
              <stop offset=".64" stopColor="#ffd78a" />
              <stop offset=".65" stopColor="#8a3d25" />
              <stop offset="1" stopColor="#4a1b1c" />
            </linearGradient>
          </defs>
          <rect width="272" height="430" fill="url(#hall)" />
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              d={`M0 0H272V430H0Z${archPath({ x0: 18 + i * 28, x1: 254 - i * 28, spring: 150 + i * 30, apex: 50 + i * 46, base: 430 - i * 46, lobes: 4 })}Z`}
              fillRule="evenodd"
              fill={['#4a1a22', '#742c25', '#a34a27'][i]}
              opacity=".88"
            />
          )).reverse()}
          <circle cx="136" cy="250" r="120" fill="url(#glow)" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <Diya x={92 - i * 22} y={306 + i * 34} size={13 + i * 6} delay={i * 0.3} />
              <Diya x={180 + i * 22} y={306 + i * 34} size={13 + i * 6} delay={i * 0.4} />
            </g>
          ))}
        </svg>
        <Leaf side="left" />
        <Leaf side="right" />
        <span className="seam" />
      </span>

      <svg className="door-frame" viewBox="0 0 400 640" aria-hidden="true">
        <defs>
          <linearGradient id="stone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4a4472" />
            <stop offset=".55" stopColor="#5a4a70" />
            <stop offset="1" stopColor="#7a4d58" />
          </linearGradient>
          <pattern id="jali" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M8 1L15 8L8 15L1 8Z" fill="#2a2148" stroke="#8f7a9c" strokeWidth="1.300" />
            <circle cx="8" cy="8" r="1.800" fill="#f2a950" />
          </pattern>
        </defs>
        <path d="M30 0H370V600H336V170H64V600H30Z" fill="url(#stone)" />
        <path d={`${LATTICE}Z`} fill="url(#jali)" stroke="#b58a4c" strokeWidth="2" />
        <path d="M30 2H370" stroke="#c79c5a" strokeWidth="3" />
        <path d="M40 14H360M40 20H360" stroke="#8f7a9c" strokeWidth="1" />
        {[46, 354].map((x) => (
          <g key={x}>
            {Array.from({ length: 12 }, (_, i) => (
              <path key={i} d={`M${x} ${196 + i * 32}l7 10l-7 10l-7-10Z`} fill="none" stroke="#a88a9a" strokeWidth="1" />
            ))}
          </g>
        ))}
        <path d="M64 170H336" stroke="#d1a35a" strokeWidth="3" />
        <path d="M14 600H386V622H14Z" fill="#6d4a5d" />
        <path d="M0 622H400V640H0Z" fill="#4d3654" />
        {Array.from({ length: 13 }, (_, i) => (
          <g key={i} style={{ transformOrigin: `${76 + i * 20.700}px 172px` }}>
            <use href="#mango-leaf" x={70 + i * 20.700} y="172" width="12" height="36" />
          </g>
        ))}
        <Garland from={[64, 172]} to={[200, 172]} sag={22} count={15} size={15} />
        <Garland from={[200, 172]} to={[336, 172]} sag={22} count={15} size={15} />
        <HangingString x={54} y={176} count={22} size={17} />
        <HangingString x={346} y={176} count={22} size={17} delay={-1.600} />
        <Flower x={200} y={174} size={30} />
        <Diya x={40} y={616} size={30} />
        <Diya x={90} y={618} size={22} delay={0.500} />
        <Diya x={310} y={618} size={22} delay={0.200} />
        <Diya x={360} y={616} size={30} delay={0.700} />
      </svg>

      <span className="doors-hint">{t.tapDoors}</span>
      <span className="flash" />
    </button>
  )
}
