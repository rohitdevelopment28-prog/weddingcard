import { archPath } from '../lib/arch'
import { Divider, Monogram } from './Ornaments'

const OUTER = archPath({ x0: 8, x1: 392, spring: 196, apex: 14, base: 260, lobes: 4 })
const INNER = archPath({ x0: 18, x1: 382, spring: 200, apex: 34, base: 260, lobes: 4 })

function Person({ person }) {
  return (
    <div className="person">
      <h3 className="script">{person.name}</h3>
      <p className="caps small">{person.rel}</p>
      <p className="parent">{person.parent}</p>
      <p className="muted italic">{person.from}</p>
    </div>
  )
}

export default function Invitation({ t }) {
  return (
    <section className="section invitation">
      <div className="arch-card reveal">
        <svg className="arch-top" viewBox="0 0 400 260" aria-hidden="true">
          <path d={OUTER} fill="#fdf6e6" stroke="#fffdf6" strokeWidth="7" />
          <path d={INNER} fill="none" stroke="url(#gold)" strokeWidth="1.600" />
          <path d="M200 0C204 5 204 9 200 13C196 9 196 5 200 0Z" fill="none" stroke="url(#gold)" strokeWidth="1.300" />
        </svg>
        <div className="arch-body">
          <Monogram />
          <p className="ganesh" lang="mr">{t.ganesh}</p>
          <Divider />
          <p className="blessing">{t.blessing}</p>
          <Person person={t.groom} />
          <p className="script with">{t.with}</p>
          <Person person={t.bride} />
          <p className="lead card-date">{t.cardDate}</p>
          <p className="muted italic">{t.cardVenue}</p>
        </div>
      </div>
    </section>
  )
}
