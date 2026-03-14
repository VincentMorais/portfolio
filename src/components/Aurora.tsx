import { motion } from 'framer-motion'
import { useIsMobile } from '../hooks/useIsMobile'

const desktopBlobs = [
  { color: 'rgba(30,60,255,0.22)',  size: 750, top: '-15%', left: '-10%',  duration: 22, delay: 0 },
  { color: 'rgba(96,175,255,0.18)', size: 580, top: '30%',  right: '-8%',  duration: 17, delay: 4 },
  { color: 'rgba(140,60,255,0.16)', size: 500, bottom: '0%',left: '18%',   duration: 20, delay: 8 },
  { color: 'rgba(0,180,220,0.14)',  size: 420, top: '10%',  left: '42%',   duration: 14, delay: 2 },
  { color: 'rgba(60,20,180,0.18)',  size: 380, top: '55%',  right: '25%',  duration: 25, delay: 6 },
]

const mobileBlobs = [
  { color: 'rgba(30,60,255,0.18)',  size: 320, top: '-10%', left: '-8%',  duration: 28, delay: 0 },
  { color: 'rgba(96,175,255,0.14)', size: 280, top: '35%',  right: '-5%', duration: 24, delay: 6 },
  { color: 'rgba(140,60,255,0.12)', size: 260, bottom: '5%',left: '10%',  duration: 30, delay: 12 },
]

export default function Aurora() {
  const isMobile = useIsMobile()
  const blobs = isMobile ? mobileBlobs : desktopBlobs
  const blur = isMobile ? 'blur(40px)' : 'blur(80px)'
  const animate = isMobile
    ? { x: [0, 18, -10, 0], y: [0, -25, 12, 0], scale: [1, 1.03, 0.97, 1] }
    : { x: [0, 45, -25, 0], y: [0, -60, 30, 0], scale: [1, 1.08, 0.93, 1] }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            top: blob.top,
            left: (blob as { left?: string }).left,
            right: (blob as { right?: string }).right,
            bottom: (blob as { bottom?: string }).bottom,
            filter: blur,
            willChange: 'transform',
          }}
          animate={animate}
          transition={{ duration: blob.duration, delay: blob.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
