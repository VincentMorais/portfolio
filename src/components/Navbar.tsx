import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function LangToggle() {
  const { lang, toggleLang } = useLanguage()

  return (
    <motion.button
      onClick={toggleLang}
      className="relative flex items-center gap-0 font-mono text-xs tracking-widest border border-border hover:border-cream/30 transition-colors duration-300 overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      aria-label="Switch language"
    >
      {(['fr', 'en'] as const).map((l) => (
        <span key={l} className="relative px-3 py-2">
          {/* Active pill */}
          {lang === l && (
            <motion.span
              layoutId="lang-pill"
              className="absolute inset-0 bg-yellow/10 border-r border-yellow/20 last:border-r-0"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span
            className={`relative transition-colors duration-200 ${
              lang === l ? 'text-yellow' : 'text-muted'
            }`}
          >
            {l.toUpperCase()}
          </span>
        </span>
      ))}
    </motion.button>
  )
}

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { label: t.nav.projets, id: 'projets' },
    { label: t.nav.experience, id: 'experience' },
    { label: t.nav.competences, id: 'competences' },
    { label: t.nav.contact, id: 'contact' },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-bg/95 backdrop-blur-sm border-b border-border' : ''
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-5 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-heading font-bold text-base text-cream tracking-widest uppercase"
        >
          VM
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-label text-muted hover:text-cream transition-colors duration-300 relative group"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={item.label}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
              </AnimatePresence>
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-yellow group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <a
            href="/CV_Vincent_Morais_2025.pdf"
            download
            className="text-label text-yellow border border-yellow/40 px-4 py-2 hover:bg-yellow/5 transition-colors duration-300"
          >
            CV ↓
          </a>
          <LangToggle />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <LangToggle />
          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <motion.span
              className="block w-5 h-px bg-cream"
              animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="block w-5 h-px bg-cream"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="block w-5 h-px bg-cream"
              animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden border-t border-border bg-bg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { scrollTo(item.id); setMobileOpen(false) }}
                  className="text-label text-muted hover:text-cream transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
