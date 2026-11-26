const f = (n) => n.toFixed(1)

// Path of a cusped, pointed arch: up the left jamb, over the lobes, down the right jamb.
export function archPath({ x0, x1, spring, apex, base, lobes = 4 }) {
  const mid = (x0 + x1) / 2
  const halfWidth = mid - x0
  const rise = spring - apex
  const left = Array.from({ length: lobes + 1 }, (_, i) => {
    const t = (i / (lobes + 0.62)) * (Math.PI / 2)
    return [mid - halfWidth * Math.cos(t), spring - rise * 0.86 * Math.sin(t)]
  })
  const mirror = ([x, y]) => [2 * mid - x, y]
  const arc = (from, to) => {
    const r = f(Math.hypot(from[0] - to[0], from[1] - to[1]) * 0.56)
    return `A${r} ${r} 0 0 1 ${f(to[0])} ${f(to[1])}`
  }

  let d = `M${f(x0)} ${f(base)}L${f(x0)} ${f(spring)}`
  for (let i = 1; i < left.length; i++) d += arc(left[i - 1], left[i])

  const [lx, ly] = left[lobes]
  const [rx, ry] = mirror(left[lobes])
  const w = mid - lx
  const h = ly - apex
  d += `C${f(lx + w * 0.1)} ${f(ly - h * 0.6)} ${f(mid - w * 0.2)} ${f(apex + h * 0.45)} ${f(mid)} ${f(apex)}`
  d += `C${f(mid + w * 0.2)} ${f(apex + h * 0.45)} ${f(rx - w * 0.1)} ${f(ry - h * 0.6)} ${f(rx)} ${f(ry)}`

  for (let i = lobes - 1; i >= 0; i--) d += arc(mirror(left[i + 1]), mirror(left[i]))
  return `${d}L${f(x1)} ${f(base)}`
}

// Evenly spaced points along a hanging garland.
export function swag(x0, y0, x1, y1, sag, count) {
  return Array.from({ length: count }, (_, i) => {
    const t = i / (count - 1)
    return [x0 + (x1 - x0) * t, y0 + (y1 - y0) * t + sag * 4 * t * (1 - t)]
  })
}
