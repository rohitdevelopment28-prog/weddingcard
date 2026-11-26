import { useCallback, useEffect, useRef, useState } from 'react'
import confetti from 'canvas-confetti'
import { calendarUrl } from '../content'
import { Heading } from './Ornaments'

const PARTS = ['day', 'month', 'year']
const CLEAR_AT = 0.42

function drawFoil(canvas) {
  const { width: w, height: h } = canvas
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  ctx.globalCompositeOperation = 'source-over'
  const foil = ctx.createLinearGradient(0, 0, w, h)
  ;[[0, '#8d6a26'], [0.25, '#c79d4a'], [0.45, '#f0d792'], [0.6, '#c49743'], [0.8, '#dcb867'], [1, '#89651f']].forEach(([at, c]) => foil.addColorStop(at, c))
  ctx.fillStyle = foil
  ctx.fillRect(0, 0, w, h)
  for (let i = 0; i < 260; i++) {
    ctx.fillStyle = i % 2 ? 'rgba(255,248,220,.22)' : 'rgba(80,52,8,.14)'
    ctx.fillRect(Math.random() * w, Math.random() * h, w / 110, w / 110)
  }
  const inset = w * 0.06
  ctx.strokeStyle = 'rgba(255,244,208,.75)'
  ctx.lineWidth = Math.max(1, w / 110)
  ctx.strokeRect(inset, inset, w - inset * 2, h - inset * 2)
  ctx.fillStyle = '#fff6da'
  ctx.beginPath()
  const s = w * 0.1
  ctx.moveTo(w / 2, h / 2 - s)
  ctx.quadraticCurveTo(w / 2, h / 2, w / 2 + s, h / 2)
  ctx.quadraticCurveTo(w / 2, h / 2, w / 2, h / 2 + s)
  ctx.quadraticCurveTo(w / 2, h / 2, w / 2 - s, h / 2)
  ctx.quadraticCurveTo(w / 2, h / 2, w / 2, h / 2 - s)
  ctx.fill()
}

function clearedRatio(canvas) {
  const { data } = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height)
  let clear = 0
  let total = 0
  for (let i = 3; i < data.length; i += 64) {
    total++
    if (data[i] < 40) clear++
  }
  return clear / total
}

function Tile({ value, label, done, onDone }) {
  const ref = useRef(null)
  const last = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const size = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = Math.round(width * dpr)
      const h = Math.round(height * dpr)
      if (!w || (canvas.width === w && canvas.height === h)) return
      canvas.width = w
      canvas.height = h
      drawFoil(canvas)
    }
    size()
    const watch = new ResizeObserver(size)
    watch.observe(canvas)
    return () => watch.disconnect()
  }, [])

  const scratch = (e) => {
    if (done || !last.current) return
    const canvas = ref.current
    const box = canvas.getBoundingClientRect()
    const point = [((e.clientX - box.left) * canvas.width) / box.width, ((e.clientY - box.top) * canvas.height) / box.height]
    const ctx = canvas.getContext('2d')
    ctx.globalCompositeOperation = 'destination-out'
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.lineWidth = canvas.width * 0.26
    ctx.beginPath()
    ctx.moveTo(...last.current)
    // The tiny offset makes a plain tap leave a dot.
    ctx.lineTo(point[0] + 0.1, point[1])
    ctx.stroke()
    last.current = point
    if (clearedRatio(canvas) > CLEAR_AT) onDone()
  }

  const start = (e) => {
    const canvas = ref.current
    const box = canvas.getBoundingClientRect()
    canvas.setPointerCapture(e.pointerId)
    last.current = [((e.clientX - box.left) * canvas.width) / box.width, ((e.clientY - box.top) * canvas.height) / box.height]
    scratch(e)
  }

  const stop = () => {
    last.current = null
  }

  return (
    <div className="tile-wrap">
      <div className="tile">
        <span className={value.length > 5 ? 'long' : ''}>{value}</span>
        <canvas ref={ref} className={done ? 'gone' : ''} aria-hidden="true" onPointerDown={start} onPointerMove={scratch} onPointerUp={stop} onPointerCancel={stop} />
      </div>
      <p className="tile-label">{label}</p>
    </div>
  )
}

export default function ScratchCard({ t }) {
  const [done, setDone] = useState({})
  const all = PARTS.every((p) => done[p])
  const mark = useCallback((part) => setDone((d) => (d[part] ? d : { ...d, [part]: true })), [])

  useEffect(() => {
    if (!all) return
    const shared = { colors: ['#e08a1e', '#f4c138', '#b3243a', '#d9b565'], shapes: ['circle'], scalar: 1.15, ticks: 260, gravity: 0.7, disableForReducedMotion: true }
    confetti({ ...shared, particleCount: 80, spread: 75, angle: 60, origin: { x: 0, y: 0.65 } })
    confetti({ ...shared, particleCount: 80, spread: 75, angle: 120, origin: { x: 1, y: 0.65 } })
  }, [all])

  return (
    <section className="section" id="date">
      <Heading>{t.dateTitle}</Heading>
      <p className="scratch-hint reveal"><i>✦</i> {t.scratch} <i>✦</i></p>
      <div className="tiles reveal">
        {PARTS.map((part) => (
          <Tile key={part} value={t.date[part]} label={t.units[part]} done={!!done[part]} onDone={() => mark(part)} />
        ))}
      </div>
      <div className={`date-after ${all ? 'shown' : ''}`} aria-live="polite">
        {all ? (
          <>
            <p className="lead">{t.dateLine}</p>
            <p className="muted">{t.dateSub}</p>
            <a className="link" href={calendarUrl('wedding')} target="_blank" rel="noreferrer">{t.addCal}</a>
          </>
        ) : (
          <button type="button" className="link" onClick={() => setDone({ day: true, month: true, year: true })}>{t.revealAll}</button>
        )}
      </div>
    </section>
  )
}
