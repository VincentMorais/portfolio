import { useEffect, useRef } from 'react'

interface Particle {
  angle: number
  radiusFrac: number // 0–1 fraction of galaxy radius
  size: number
  r: number
  g: number
  b: number
  opacity: number
}

function buildParticles(): Particle[] {
  const particles: Particle[] = []
  const NUM_ARMS = 3
  const NUM_STARS = 4000

  for (let i = 0; i < NUM_STARS; i++) {
    const arm = Math.floor(Math.random() * NUM_ARMS)
    const t = Math.pow(Math.random(), 0.55) // bias toward center
    const spiralAngle = t * Math.PI * 5
    const spread = (1 - t * 0.7) * 0.35
    const scatter = (Math.random() - 0.5) * spread * 2 * Math.PI
    const armOffset = (arm / NUM_ARMS) * Math.PI * 2

    // Color: warm core → cool blue-white arms
    let r, g, b
    if (t < 0.15) {
      r = 255; g = 210 + Math.floor(Math.random() * 45); b = 160 + Math.floor(Math.random() * 70)
    } else if (Math.random() > 0.65) {
      r = 180 + Math.floor(Math.random() * 70); g = 200 + Math.floor(Math.random() * 55); b = 255
    } else {
      r = 255; g = 255; b = 255
    }

    particles.push({
      angle: spiralAngle + armOffset + scatter,
      radiusFrac: t,
      size: t < 0.12 ? Math.random() * 1.8 + 0.6 : Math.random() * 1.0 + 0.2,
      opacity: Math.random() * 0.65 + 0.15,
      r, g, b,
    })
  }

  // Dense bright core
  for (let i = 0; i < 600; i++) {
    const t = Math.pow(Math.random(), 2) * 0.12
    particles.push({
      angle: Math.random() * Math.PI * 2,
      radiusFrac: t,
      size: Math.random() * 2 + 0.4,
      opacity: Math.random() * 0.9 + 0.1,
      r: 255,
      g: 220 + Math.floor(Math.random() * 35),
      b: 180 + Math.floor(Math.random() * 75),
    })
  }

  return particles
}

export default function Galaxy() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let rotation = 0
    const particles = buildParticles()

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cx = canvas.width * 0.5
      const cy = canvas.height * 0.5
      const galaxyR = Math.max(canvas.width, canvas.height) * 0.62

      // Soft core glow
      const g1 = ctx.createRadialGradient(cx, cy, 0, cx, cy, galaxyR * 0.12)
      g1.addColorStop(0, 'rgba(220, 190, 255, 0.18)')
      g1.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = g1
      ctx.beginPath()
      ctx.arc(cx, cy, galaxyR * 0.12, 0, Math.PI * 2)
      ctx.fill()

      // Outer haze
      const g2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, galaxyR * 0.7)
      g2.addColorStop(0, 'rgba(60, 80, 180, 0.06)')
      g2.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = g2
      ctx.beginPath()
      ctx.arc(cx, cy, galaxyR * 0.7, 0, Math.PI * 2)
      ctx.fill()

      for (const p of particles) {
        const a = p.angle + rotation
        const dist = p.radiusFrac * galaxyR
        const x = cx + Math.cos(a) * dist
        const y = cy + Math.sin(a) * dist * 0.38 // tilt: flatten y to look like a disk

        ctx.beginPath()
        ctx.arc(x, y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${p.opacity})`
        ctx.fill()
      }

      rotation += 0.00025
      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
}
