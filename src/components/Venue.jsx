import { MAPS } from '../content'
import { SeaScene } from './Hero'
import { Heading } from './Ornaments'

// A Konkan house under palms, with the evening sea behind it.
function House() {
  return (
    <svg className="house" viewBox="0 0 480 200" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <path d="M0 172C80 160 160 166 240 162C330 158 400 168 480 160V200H0Z" fill="#2c1d3d" />
      <path d="M120 100H360V170H120Z" fill="#f0d3a2" />
      <path d="M120 100H360V116H120Z" fill="#b98a5c" />
      <path d="M92 106L146 54H334L388 106Z" fill="#a4432c" />
      <path d="M180 58L212 28H268L300 58Z" fill="#8c3526" />
      <path d="M196 58H284V66H196Z" fill="#5d2419" />
      {Array.from({ length: 13 }, (_, i) => <path key={i} d={`M${152 + i * 14.700} 56L${104 + i * 22.700} 104`} stroke="#7d2f20" strokeWidth="1.500" />)}
      {[132, 178, 290, 336].map((x) => (
        <g key={x}>
          <path d={`M${x} 166V132a11 11 0 0 1 22 0V166Z`} transform="translate(-4 0)" fill="#ffc868" />
          <path d={`M${x + 7} 122V166M${x - 4} 144H${x + 18}`} stroke="#7d4a25" strokeWidth="1.800" />
        </g>
      ))}
      <path d="M218 170V128a22 22 0 0 1 44 0V170Z" fill="#ffdf9a" />
      <path d="M218 170V128a22 22 0 0 1 44 0V170" fill="none" stroke="#7d4a25" strokeWidth="3" />
      {[120, 166, 214, 266, 312, 358].map((x) => <rect key={x} x={x - 3} y="106" width="6" height="64" fill="#6b3820" />)}
      <path d="M108 168H372V176H108Z" fill="#8f5a4a" />
      <path d="M96 176H384V184H96Z" fill="#6d4350" />
      <path d="M120 112Q143 126 166 112T214 112T266 112T312 112T358 112" fill="none" stroke="#f29a2c" strokeWidth="5" strokeDasharray="1 5.500" strokeLinecap="round" />
      <path d="M0 184C30 166 60 170 84 186C110 176 120 186 130 200H0ZM480 180C450 164 424 170 402 184C380 178 366 188 356 200H480Z" fill="#241735" />
    </svg>
  )
}

export default function Venue({ t }) {
  return (
    <section className="section venue">
      <Heading>{t.venueTitle}</Heading>
      <p className="city reveal">{t.venueCity}</p>
      <p className="lead reveal">{t.venueName}</p>
      <p className="muted reveal">{t.venueLines.map((line) => <span key={line} className="line">{line}</span>)}</p>
      <div className="venue-scene reveal"><SeaScene /><House /></div>
      <a className="button reveal" href={MAPS.wedding} target="_blank" rel="noreferrer">{t.openMap}</a>
      <div className="haldi-venue reveal">
        <p className="caps small">{t.haldiVenue}</p>
        <p className="lead">{t.haldiName}</p>
        <a className="link" href={MAPS.haldi} target="_blank" rel="noreferrer">{t.haldiMap}</a>
      </div>
    </section>
  )
}
