import { useEffect, useState } from 'react'
import { EVENTS, toDigits } from '../content'
import { Heading } from './Ornaments'

const TARGETS = EVENTS.filter((e) => e.id !== 'reception').map((e) => ({ id: e.id, at: Date.parse(e.start) }))

export default function Countdown({ t, lang }) {
  const [now, setNow] = useState(Date.now)
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(timer)
  }, [])

  const next = TARGETS.find((target) => target.at > now)
  if (!next) return <section className="section"><Heading>{t.married}</Heading></section>

  const s = Math.floor((next.at - now) / 1000)
  const parts = [Math.floor(s / 86400), Math.floor(s / 3600) % 24, Math.floor(s / 60) % 60, s % 60]

  return (
    <section className="section">
      <Heading>{t.countTitle}</Heading>
      <div className="countdown reveal" role="timer" aria-live="off">
        {parts.map((value, i) => (
          <div key={t.countUnits[i]}>
            <b>{toDigits(String(value).padStart(2, '0'), lang)}</b>
            <span>{t.countUnits[i]}</span>
          </div>
        ))}
      </div>
      <p className="muted italic reveal">{t.until[next.id]}</p>
    </section>
  )
}
