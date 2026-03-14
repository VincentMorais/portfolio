import { useMemo } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

interface Star {
  x: number
  y: number
  r: number
  opacity: number
  twinkle: boolean
  delay: number
}

function generateStars(count: number): Star[] {
  const stars: Star[] = []
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      r: Math.random() * 1.2 + 0.2,
      opacity: Math.random() * 0.6 + 0.2,
      twinkle: Math.random() > 0.75,
      delay: Math.random() * 4,
    })
  }
  return stars
}

export default function Stars() {
  const isMobile = useIsMobile()
  const stars = useMemo(() => generateStars(isMobile ? 80 : 220), [isMobile])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', inset: 0 }}
      >
        <defs>
          <style>{`
            @keyframes twinkle {
              0%, 100% { opacity: var(--op); }
              50% { opacity: calc(var(--op) * 0.15); }
            }
            .twinkle { animation: twinkle var(--dur) ease-in-out infinite; }
          `}</style>
        </defs>
        {stars.map((star, i) => (
          <circle
            key={i}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.r}
            fill="white"
            opacity={star.opacity}
            className={star.twinkle ? 'twinkle' : undefined}
            style={
              star.twinkle
                ? ({
                    '--op': star.opacity,
                    '--dur': `${2 + star.delay}s`,
                    animationDelay: `${star.delay}s`,
                  } as React.CSSProperties)
                : undefined
            }
          />
        ))}
      </svg>
    </div>
  )
}
