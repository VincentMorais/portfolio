import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

function UfoSvg({ tilt }: { tilt: number }) {
  return (
    <svg
      width="48"
      height="32"
      viewBox="0 0 48 32"
      fill="none"
      style={{ transform: `rotate(${tilt}deg)`, transition: 'transform 0.15s ease' }}
    >
      {/* Beam */}
      <path d="M16 22 L8 32 L40 32 L32 22 Z" fill="url(#beam)" />
      <defs>
        <linearGradient id="beam" x1="24" y1="22" x2="24" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60AFFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#60AFFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="body" x1="24" y1="16" x2="24" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D0DCF0" />
          <stop offset="100%" stopColor="#6080A0" />
        </linearGradient>
        <linearGradient id="dome" x1="24" y1="6" x2="24" y2="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A0C8FF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#3060A0" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      {/* Body */}
      <ellipse cx="24" cy="22" rx="18" ry="6" fill="url(#body)" />
      {/* Body highlight */}
      <ellipse cx="24" cy="20" rx="18" ry="3" fill="white" fillOpacity="0.08" />
      {/* Dome */}
      <ellipse cx="24" cy="16" rx="9" ry="7" fill="url(#dome)" />
      {/* Dome highlight */}
      <ellipse cx="21" cy="12" rx="3.5" ry="2.5" fill="white" fillOpacity="0.35" />
      {/* Windows */}
      <circle cx="16" cy="22" r="2" fill="#FFE566" fillOpacity="0.9" />
      <circle cx="24" cy="22" r="2" fill="#FFE566" fillOpacity="0.9" />
      <circle cx="32" cy="22" r="2" fill="#FFE566" fillOpacity="0.9" />
    </svg>
  )
}

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [tilt, setTilt] = useState(0)
  const prevX = useRef(-1)

  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)
  const x = useSpring(mouseX, { damping: 35, stiffness: 300 })
  const y = useSpring(mouseY, { damping: 35, stiffness: 300 })

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    if (isTouchDevice) return

    let tiltTimeout: ReturnType<typeof setTimeout>

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setVisible(true)

      if (prevX.current !== -1) {
        const delta = e.clientX - prevX.current
        setTilt(Math.max(-18, Math.min(18, delta * 0.8)))
        clearTimeout(tiltTimeout)
        tiltTimeout = setTimeout(() => setTilt(0), 120)
      }
      prevX.current = e.clientX
    }

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      clearTimeout(tiltTimeout)
    }
  }, [mouseX, mouseY])

  if (!visible) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
    >
      <UfoSvg tilt={tilt} />
    </motion.div>
  )
}
