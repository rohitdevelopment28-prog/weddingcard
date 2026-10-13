import { useEffect, useRef, useState } from 'react'
import confetti from 'canvas-confetti'

export default function ScratchCard() {
  const canvasRef = useRef(null)
  const confettiFired = useRef(false)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const c = canvasRef.current
    const ctx = c.getContext('2d')
    drawCover(ctx, c)
  }, [])

  const drawCover = (ctx, c) => {
    ctx.globalCompositeOperation = 'source-over'
    const grad = ctx.createLinearGradient(0, 0, c.width, c.height)
    grad.addColorStop(0, '#2b4c7e')
    grad.addColorStop(1, '#4a6fa5')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, c.width, c.height)
    ctx.fillStyle = '#c9d6ea'
    ctx.font = 'bold 26px Jost, sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('✦ SCRATCH TO REVEAL ✦', c.width / 2, c.height / 2 - 10)
    ctx.font = 'italic 18px Cormorant Garamond, serif'
    ctx.fillText('our special day', c.width / 2, c.height / 2 + 22)
  }

  const scratchedRatio = () => {
    const c = canvasRef.current
    const ctx = c.getContext('2d')
    const data = ctx.getImageData(0, 0, c.width, c.height).data
    let clear = 0
    for (let i = 3; i < data.length; i += 40) if (data[i] === 0) clear++
    return clear / (data.length / 40)
  }

  const scratch = (e) => {
    const c = canvasRef.current
    const ctx = c.getContext('2d')
    const rect = c.getBoundingClientRect()
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top
    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x * (c.width / rect.width), y * (c.height / rect.height), 26, 0, Math.PI * 2)
    ctx.fill()
    setRevealed(true)
    if (!confettiFired.current && scratchedRatio() > 0.35) {
      confettiFired.current = true
      confetti({ particleCount: 160, spread: 80, origin: { y: 0.6 }, colors: ['#b39b57', '#33415e', '#e8b4b8', '#ffffff'] })
      // auto-clear the remaining cover so the date is fully revealed
      ctx.globalCompositeOperation = 'destination-out'
      ctx.fillRect(0, 0, c.width, c.height)
    }
  }

  return (
    <div className="scratch-wrap">
      <div className="scratch-under">
        <p className="smallcaps">SAVE THE DATE</p>
        <p className="script big">12th December 2026</p>
        <p className="smallcaps">ALIBAUG · MAHARASHTRA</p>
      </div>
      <canvas
        ref={canvasRef}
        width={640}
        height={260}
        onMouseMove={(e) => e.buttons === 1 && scratch(e)}
        onTouchMove={scratch}
        className={revealed ? 'scratching' : ''}
      />
    </div>
  )
}
