import { archPath } from '../lib/arch'
import { Diya, Divider, Garland, HangingString } from './Ornaments'

const OPENING = archPath({ x0: 26, x1: 454, spring: 250, apex: 34, base: 420, lobes: 5 })

// Deterministic glints on the water, denser near the horizon.
const GLINTS = Array.from({ length: 46 }, (_, i) => {
  const depth = (i / 46) ** 1.4
  const wobble = Math.sin(i * 12.9898) * 43758.5453
  const r = wobble - Math.floor(wobble)
  return { x: 240 + (r - 0.5) * (46 + depth * 150), y: 4 + depth * 196, w: 8 + depth * 30 * (0.4 + r), delay: -r * 4 }
})

function Frond({ angle, length }) {
  const leaflets = Array.from({ length: 15 }, (_, i) => {
    const t = (i + 1) / 16
    const x = length * t
    const y = length * 0.42 * t * t
    const l = 26 * Math.sin(Math.PI * Math.min(1, t * 0.85 + 0.12)) + 5
    return `M${x.toFixed(1)} ${y.toFixed(1)}q${(l * 0.35).toFixed(1)} ${(l * 0.35).toFixed(1)} ${(l * 0.32).toFixed(1)} ${l.toFixed(1)}M${x.toFixed(1)} ${y.toFixed(1)}q${(l * 0.5).toFixed(1)} ${(-l * 0.2).toFixed(1)} ${(l * 0.85).toFixed(1)} ${(-l * 0.1).toFixed(1)}`
  }).join('')
  const flip = angle > 90 || angle < -90
  return (
    <g transform={`rotate(${flip ? 180 - angle : angle})`} style={undefined}>
      <path d={`M0 0Q${length * 0.5} ${length * 0.02} ${length} ${length * 0.42}${leaflets}`} fill="none" stroke="#1a1330" strokeWidth="2.600" strokeLinecap="round" />
    </g>
  )
}

const RIGHT_FRONDS = [-62, -34, -10, 14, 38]

function Palm({ className }) {
  return (
    <svg className={`palm ${className}`} viewBox="0 0 260 420" aria-hidden="true">
      <path d="M40 420C58 330 70 240 122 130L131 134C92 240 82 330 72 420Z" fill="#1a1330" />
      <g transform="translate(126 130)" className="palm-crown">
        {RIGHT_FRONDS.map((a) => <Frond key={a} angle={a} length={116} />)}
        <g transform="scale(-1 1)">{RIGHT_FRONDS.map((a) => <Frond key={a} angle={a + 4} length={104} />)}</g>
        <circle cx="-7" cy="8" r="7" fill="#1a1330" />
        <circle cx="6" cy="10" r="7" fill="#1a1330" />
      </g>
    </svg>
  )
}

// The couple, seen from behind, looking out to sea.
function Couple() {
  return (
    <svg className="couple" viewBox="0 0 200 250" aria-hidden="true">
      <defs>
        <linearGradient id="lehenga" x1="0" x2="1">
          <stop offset="0" stopColor="#6d1024" />
          <stop offset=".55" stopColor="#b3243a" />
          <stop offset="1" stopColor="#7d1329" />
        </linearGradient>
        <linearGradient id="sherwani" x1="0" x2="1">
          <stop offset="0" stopColor="#fff1d2" />
          <stop offset="1" stopColor="#c8a981" />
        </linearGradient>
      </defs>
      <ellipse cx="102" cy="240" rx="92" ry="8" fill="#150d26" opacity=".55" />
      {/* bride */}
      <path d="M66 96C48 130 22 190 12 236C40 246 98 246 118 236C112 190 98 130 86 96Z" fill="url(#lehenga)" />
      <path d="M14 226C42 236 96 236 116 226L118 236C98 246 40 246 12 236Z" fill="#e0aa4c" />
      <path d="M17 216C44 225 94 225 114 216" fill="none" stroke="#e8bd69" strokeWidth="1.500" />
      {[[50, 122, 34, 214], [66, 118, 60, 220], [82, 120, 88, 218], [90, 128, 104, 212]].map((p) => (
        <path key={p[0]} d={`M${p[0]} ${p[1]}L${p[2]} ${p[3]}`} stroke="#5a0c1d" strokeWidth="1.400" opacity=".7" />
      ))}
      <path d="M60 66C58 80 62 92 66 98H88C92 90 94 78 92 66Z" fill="#8a1a2e" />
      <path d="M62 66C54 76 50 92 54 106L60 106C60 92 64 82 68 74Z" fill="#b87a52" />
      <path d="M76 28C60 28 56 42 58 56C52 90 34 140 28 196C40 204 56 206 66 204C74 160 88 110 94 72C98 44 92 28 76 28Z" fill="#d6503a" opacity=".93" />
      <path d="M58 56C52 90 34 140 28 196C33 199 37 201 42 202C48 150 60 100 64 60Z" fill="#b23a30" />
      <path d="M94 72C88 110 74 160 66 204" fill="none" stroke="#f0c36a" strokeWidth="2.200" />
      <path d="M28 196C40 204 56 206 66 204" fill="none" stroke="#f0c36a" strokeWidth="2.800" />
      {[[62, 80], [72, 92], [56, 112], [68, 122], [48, 146], [60, 156], [42, 178], [54, 184], [76, 52], [68, 58]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.500" fill="#f4cf80" />
      ))}
      {/* groom */}
      <path d="M128 168H150V238H132ZM152 168H172L170 238H154Z" fill="#e6cfa6" />
      <path d="M130 232H149V240H126ZM155 232H172L176 240H155Z" fill="#5a2a17" />
      <path d="M118 74C124 64 138 60 151 60C164 60 176 64 182 74C186 110 180 150 182 184C164 190 136 190 120 184C124 150 114 110 118 74Z" fill="url(#sherwani)" />
      <path d="M151 104V187" stroke="#a78256" strokeWidth="1.400" />
      <path d="M120 180C136 187 164 187 182 180" fill="none" stroke="#c9973f" strokeWidth="2.600" />
      <path d="M118 74C108 92 102 112 98 124L106 128C114 116 122 104 126 92Z" fill="#f3e0bb" />
      <path d="M182 74C190 94 192 118 190 140L182 140C180 118 178 100 174 88Z" fill="#c4a378" />
      <path d="M140 62C142 90 150 130 168 182L176 180C162 130 156 90 158 62Z" fill="#a3212f" />
      <rect x="143" y="48" width="16" height="16" fill="#a9714b" />
      <ellipse cx="151" cy="40" rx="15" ry="17" fill="#2a1712" />
      <path d="M132 38C130 18 142 8 154 10C168 10 173 24 170 38C160 32 144 32 132 38Z" fill="#dd6a1f" />
      <path d="M133 34C144 24 160 22 170 32M136 24C146 15 160 15 169 24" fill="none" stroke="#b64d12" strokeWidth="2" />
      <path d="M164 34C172 46 174 60 170 80L162 78C164 62 162 48 157 38Z" fill="#dd6a1f" />
      {/* joined hands */}
      <path d="M92 74C98 92 100 110 98 124L106 128C108 110 104 88 98 72Z" fill="#b87a52" />
      <circle cx="102" cy="126" r="6" fill="#b87a52" />
    </svg>
  )
}

export function SeaScene() {
  return (
    <>
      <div className="sky" />
      <div className="sun" />
      <svg className="horizon" viewBox="0 0 480 90" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 90V58C40 44 70 40 112 52C150 62 176 74 210 90Z" fill="#6f4a74" opacity=".75" />
        <path d="M480 90V50C440 38 408 44 372 62C350 74 330 82 306 90Z" fill="#7a4d70" opacity=".7" />
        <g fill="#3c2a56">
          <path d="M292 90V72H300V66H308V72H326V62H332V56H346V62H352V72H376V64H386V72H404V66H412V72H420V90Z" />
          <path d="M338 56V44H340V56ZM340 44L350 47.500L340 51Z" />
        </g>
      </svg>
      <div className="sea">
        <svg viewBox="0 0 480 210" preserveAspectRatio="none" aria-hidden="true">
          {GLINTS.map((g, i) => (
            <ellipse key={i} className="glint" cx={g.x} cy={g.y} rx={g.w} ry={1 + g.y / 90} fill="#ffd9a0" style={{ animationDelay: `${g.delay}s` }} />
          ))}
        </svg>
      </div>
    </>
  )
}

export default function Hero({ t }) {
  return (
    <section className="hero">
      <SeaScene />
      <Palm className="left" />
      <Palm className="right" />
      <div className="terrace" />
      <Couple />
      <svg className="hero-diyas" viewBox="0 0 480 70" aria-hidden="true">
        {[48, 104, 154, 326, 376, 432].map((x, i) => (
          <Diya key={x} x={x} y={50} size={26} delay={i * 0.27} />
        ))}
      </svg>
      <div className="jamb left" />
      <div className="jamb right" />
      <svg className="hero-arch" viewBox="0 0 480 420" aria-hidden="true">
        <defs>
          <linearGradient id="sandstone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2c1a35" />
            <stop offset="1" stopColor="#57303f" />
          </linearGradient>
          <pattern id="vine" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M0 22C11 8 33 36 44 22M22 0C8 11 36 33 22 44" fill="none" stroke="#d6a65c" strokeWidth=".9" opacity=".38" />
            <circle cx="22" cy="22" r="4.500" fill="none" stroke="#d6a65c" strokeWidth=".9" opacity=".5" />
            <circle cx="0" cy="0" r="2" fill="#d6a65c" opacity=".4" />
          </pattern>
        </defs>
        <path d={`M0 0H480V420H0Z${OPENING}Z`} fillRule="evenodd" fill="url(#sandstone)" />
        <path d={`M0 0H480V420H0Z${OPENING}Z`} fillRule="evenodd" fill="url(#vine)" />
        <path d={OPENING} fill="none" stroke="#d6a65c" strokeWidth="3" />
        <path d={archPath({ x0: 17, x1: 463, spring: 250, apex: 18, base: 420, lobes: 5 })} fill="none" stroke="#d6a65c" strokeWidth="1" opacity=".7" />
        <Garland from={[26, 212]} to={[112, 96]} sag={34} count={13} size={18} />
        <Garland from={[454, 212]} to={[368, 96]} sag={34} count={13} size={18} />
        <HangingString x={36} y={218} count={5} size={17} />
        <HangingString x={444} y={218} count={5} size={17} delay={-2} />
      </svg>
      <div className="hero-copy">
        <p className="fade-in" style={{ '--i': 0 }}>{t.welcome}</p>
        <h1 className="script">
          <span className="fade-in" style={{ '--i': 1 }}>{t.rohit}</span>{' '}
          <span className="fade-in amp" style={{ '--i': 2 }}>&amp;</span>{' '}
          <span className="fade-in" style={{ '--i': 3 }}>{t.shruti}</span>
        </h1>
        <div className="fade-in" style={{ '--i': 4 }}><Divider /></div>
        <p className="caps fade-in" style={{ '--i': 5 }}>{t.place}</p>
      </div>
      <a className="scroll-hint" href="#date">
        {t.scroll}
        <svg viewBox="0 0 20 10" aria-hidden="true"><path d="M3 2L10 8L17 2" fill="none" stroke="currentColor" strokeWidth="1.500" /></svg>
      </a>
    </section>
  )
}
