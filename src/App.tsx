import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import CustomCursor from './components/CustomCursor'
import Aurora from './components/Aurora'
import Galaxy from './components/Galaxy'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function PageContent() {
  const { lang } = useLanguage()
  const prevLang = useRef(lang)
  const isChanging = prevLang.current !== lang
  if (isChanging) prevLang.current = lang

  return (
    <div className="relative bg-bg min-h-screen">
      <Galaxy />
      <Aurora />
      <CustomCursor />
      <Navbar />

      {/* Flash overlay on language switch */}
      <AnimatePresence>
        {isChanging && (
          <motion.div
            key={lang + '-flash'}
            className="fixed inset-0 z-[999] pointer-events-none bg-yellow/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          />
        )}
      </AnimatePresence>

      <main className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  )
}
