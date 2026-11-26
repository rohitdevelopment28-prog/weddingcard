import { useCallback, useEffect, useRef, useState } from 'react'

// Background track. `available` stays false if the file is missing, so no dead button is shown.
export function useMusic(src) {
  const audio = useRef(null)
  const [available, setAvailable] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    let live = true
    // A missing file falls back to index.html on many hosts, so the content type is checked too.
    fetch(src, { method: 'HEAD' })
      .then((res) => {
        const type = res.headers.get('content-type') || ''
        if (!live || !res.ok || type.includes('text/html')) return
        const el = new Audio(src)
        el.loop = true
        el.volume = 0.6
        el.onplay = () => setPlaying(true)
        el.onpause = () => setPlaying(false)
        audio.current = el
        setAvailable(true)
      })
      .catch(() => {})
    const pauseWhenHidden = () => document.hidden && audio.current?.pause()
    document.addEventListener('visibilitychange', pauseWhenHidden)
    return () => {
      live = false
      document.removeEventListener('visibilitychange', pauseWhenHidden)
      audio.current?.pause()
      audio.current = null
    }
  }, [src])

  const start = useCallback(() => {
    audio.current?.play().catch(() => {})
  }, [])
  const toggle = useCallback(() => {
    if (audio.current?.paused) start()
    else audio.current?.pause()
  }, [start])

  return { available, playing, start, toggle }
}
