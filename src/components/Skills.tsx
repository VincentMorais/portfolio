import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Skills() {
  const { t, lang } = useLanguage()
  const skills = t.data.skills

  type Row =
    | { type: 'category'; label: string; index: number }
    | { type: 'skill'; tech: string; globalIndex: number }

  const rows: Row[] = []
  let globalIndex = 0

  skills.forEach((cat, ci) => {
    rows.push({ type: 'category', label: cat.category, index: ci })
    cat.items.forEach((item) => {
      rows.push({ type: 'skill', tech: item, globalIndex: globalIndex++ })
    })
  })

  return (
    <section id="competences" className="relative py-28 md:py-36 overflow-hidden">

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none" aria-hidden>
        <span
          className="font-heading font-bold leading-none text-cream pr-6"
          style={{ fontSize: 'clamp(6rem, 20vw, 16rem)', opacity: 0.022 }}
        >
          004
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-yellow tracking-widest block mb-4">N°004</span>
          <h2 className="font-heading font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-cream tracking-tight">
            <AnimatePresence mode="wait">
              <motion.span
                key={t.skills.title + lang}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                style={{ display: 'inline-block' }}
              >
                {t.skills.title}
              </motion.span>
            </AnimatePresence>
          </h2>
        </motion.div>

        {/* Stagger list */}
        <div className="max-w-2xl">
          {rows.map((row, i) => {
            if (row.type === 'category') {
              return (
                <motion.div
                  key={`cat-${i}`}
                  className={`flex items-center gap-4 ${row.index > 0 ? 'mt-10' : ''} mb-4`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: row.index * 0.15 }}
                >
                  <span className="font-mono text-xs text-yellow tracking-widest">
                    {String(row.index + 1).padStart(2, '0')}
                  </span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={row.label + lang}
                      className="text-label text-muted"
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 6 }}
                      transition={{ duration: 0.22 }}
                    >
                      {row.label}
                    </motion.span>
                  </AnimatePresence>
                  <div className="flex-1 h-px bg-cream/8" />
                </motion.div>
              )
            }

            return (
              <motion.div
                key={`skill-${i}`}
                className="group flex items-center gap-4 py-2.5 border-b border-cream/[0.06] last:border-0"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10px' }}
                transition={{
                  duration: 0.5,
                  delay: row.globalIndex * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className="text-yellow text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-3">
                  ▸
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={row.tech + lang}
                    className="font-heading font-medium text-lg md:text-xl text-cream/75 group-hover:text-yellow transition-colors duration-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    {row.tech}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
