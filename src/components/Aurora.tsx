import { motion } from 'framer-motion'

const blobs = [
  { color: 'rgba(30,60,255,0.22)',  size: 750, top: '-15%', left: '-10%',  duration: 22, delay: 0 },
  { color: 'rgba(96,175,255,0.18)', size: 580, top: '30%',  right: '-8%',  duration: 17, delay: 4 },
  { color: 'rgba(140,60,255,0.16)', size: 500, bottom: '0%',left: '18%',   duration: 20, delay: 8 },
  { color: 'rgba(0,180,220,0.14)',  size: 420, top: '10%',  left: '42%',   duration: 14, delay: 2 },
  { color: 'rgba(60,20,180,0.18)',  size: 380, top: '55%',  right: '25%',  duration: 25, delay: 6 },
]

export default function Aurora() {
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
            left: blob.left,
            right: (blob as { right?: string }).right,
            bottom: (blob as { bottom?: string }).bottom,
            filter: 'blur(80px)',
          }}
          animate={{ x: [0, 45, -25, 0], y: [0, -60, 30, 0], scale: [1, 1.08, 0.93, 1] }}
          transition={{ duration: blob.duration, delay: blob.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
