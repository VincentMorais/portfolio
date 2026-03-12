import { useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView, animate, useMotionValue, useTransform } from 'framer-motion'
import MagneticButton from './MagneticButton'
import { useLanguage } from '../context/LanguageContext'

function Divider({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="h-px w-full bg-cream/10"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      style={{ originX: 0 }}
      transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
    />
  )
}

function CounterStat({ value, suffix, label, delay, lang }: { value: number; suffix: string; label: string; delay: number; lang: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, value, { duration: 1.8, delay, ease: 'easeOut' })
    return controls.stop
  }, [inView, count, value, delay])

  return (
    <div className="flex flex-col gap-1">
      <div className="font-heading font-bold text-3xl md:text-4xl text-cream">
        <motion.span ref={ref}>{rounded}</motion.span>
        <span className="text-yellow">{suffix}</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.span
          key={label + lang}
          className="text-label text-muted"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25 }}
        >
          {label}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

function T({ children, langKey }: { children: React.ReactNode; langKey: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={langKey}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.22 }}
        style={{ display: 'inline-block' }}
      >
        {children}
      </motion.span>
    </AnimatePresence>
  )
}

export default function Hero() {
  const { t, lang } = useLanguage()

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 relative overflow-hidden">

      {/* Planet decoration */}
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.12]" aria-hidden>
        <svg width="520" height="520" viewBox="0 0 520 520" fill="none">
          <defs>
            <radialGradient id="planetGrad" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#A0C8FF" />
              <stop offset="60%" stopColor="#3060A0" />
              <stop offset="100%" stopColor="#0A0A20" />
            </radialGradient>
            <radialGradient id="ringGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#60AFFF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#60AFFF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="260" cy="300" rx="220" ry="38" fill="none" stroke="url(#ringGrad)" strokeWidth="18" strokeDasharray="1 0" opacity="0.5" />
          <circle cx="260" cy="260" r="160" fill="url(#planetGrad)" />
          <ellipse cx="260" cy="300" rx="220" ry="38" fill="none" stroke="url(#ringGrad)" strokeWidth="18" opacity="0.25"
            style={{ clipPath: 'inset(0 0 50% 0)' }}
          />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto w-full">

        {/* Top row */}
        <motion.div
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="font-mono text-xs text-yellow tracking-widest">N°001</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-label text-muted">
              <T langKey={lang + '-available'}>{t.hero.available}</T>
            </span>
          </div>
        </motion.div>

        <Divider delay={0.2} />

        {/* Name section */}
        <div className="py-10 md:py-14 grid md:grid-cols-1 gap-10 items-end">
          <div>
            <div className="overflow-hidden mb-3">
              <motion.h1
                className="font-heading font-bold text-[clamp(3rem,10vw,7.5rem)] leading-none tracking-tight text-cream"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                VINCENT MORAIS
              </motion.h1>
            </div>

            <motion.div className="flex flex-wrap items-center gap-3 mb-5" {...fadeUp(0.6)}>
              <span className="text-label text-muted">
                <T langKey={lang + '-role'}>{t.hero.role}</T>
              </span>
              <span className="text-muted">·</span>
              <span className="text-label text-muted">Full Stack Developer</span>
            </motion.div>

            <motion.p
              className="font-heading text-xl md:text-2xl text-yellow/90 italic font-medium"
              {...fadeUp(0.72)}
            >
              <T langKey={lang + '-quote'}>{t.hero.quote}</T>
            </motion.p>
          </div>
        </div>

        <Divider delay={0.5} />

        {/* Stats */}
        <div className="py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.data.stats.map((stat, i) => (
              <CounterStat key={i} value={stat.value} suffix={stat.suffix} label={stat.label} delay={i * 0.1} lang={lang} />
            ))}
          </div>
        </div>

        <Divider delay={0.7} />

        {/* CTAs */}
        <motion.div className="flex flex-wrap items-center gap-5 pt-10" {...fadeUp(0.85)}>
          <MagneticButton>
            <button
              onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow text-bg font-heading font-bold text-sm px-8 py-4 hover:bg-cream transition-colors duration-300 tracking-wide"
            >
              <T langKey={lang + '-cta'}>{t.hero.cta}</T>
            </button>
          </MagneticButton>

          <MagneticButton>
            <a
              href="/CV_Vincent_Morais_2025.pdf"
              download
              className="text-label text-cream border border-cream/20 px-8 py-4 hover:border-cream/60 transition-colors duration-300"
            >
              <T langKey={lang + '-dl'}>{t.hero.download}</T>
            </a>
          </MagneticButton>

          <div className="hidden md:flex items-center gap-6 ml-auto">
            <a href="https://www.linkedin.com/in/vincent-morais-5592061b1/" target="_blank" rel="noopener noreferrer" className="text-label text-muted hover:text-cream transition-colors">LinkedIn ↗</a>
            <a href="https://github.com/VincentMorais" target="_blank" rel="noopener noreferrer" className="text-label text-muted hover:text-cream transition-colors">GitHub ↗</a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
