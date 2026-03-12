import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function Experience() {
  const { t, lang } = useLanguage()
  const experiences = t.data.experiences

  return (
    <section id="experience" className="relative px-6 py-28 md:py-36 overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none" aria-hidden>
        <span className="font-heading font-bold leading-none text-cream pr-6" style={{ fontSize: 'clamp(6rem, 20vw, 16rem)', opacity: 0.022 }}>003</span>
      </div>

      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="mb-12">
          <motion.div
            className="flex items-center gap-6 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs text-yellow tracking-widest">N°003</span>
            <motion.div
              className="flex-1 h-px bg-cream/10"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
          <motion.h2
            className="font-heading font-bold text-[clamp(2.5rem,6vw,4.5rem)] leading-none text-cream tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={t.experience.title + lang}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                style={{ display: 'inline-block' }}
              >
                {t.experience.title}
              </motion.span>
            </AnimatePresence>
          </motion.h2>
        </div>

        {/* Table header — desktop only */}
        <motion.div
          className="hidden md:grid grid-cols-[160px_200px_1fr] gap-8 mb-3 pb-3 border-b border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {[t.experience.period, t.experience.role, t.experience.achievements].map((label) => (
            <AnimatePresence key={label} mode="wait">
              <motion.span
                key={label + lang}
                className="text-label text-muted/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {label}
              </motion.span>
            </AnimatePresence>
          ))}
        </motion.div>

        {/* Entries */}
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: index * 0.1 }}
          >
            <div className="py-8 md:py-10 md:grid md:grid-cols-[160px_200px_1fr] gap-8 border-b border-border hover:border-cream/20 transition-colors duration-300">

              {/* Period */}
              <div className="mb-2 md:mb-0">
                <span className="font-mono text-xs text-yellow">{exp.period}</span>
              </div>

              {/* Role + company */}
              <div className="mb-4 md:mb-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={exp.title + lang}
                    className="font-heading font-semibold text-sm text-cream mb-1 group-hover:text-yellow transition-colors duration-300"
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 6 }}
                    transition={{ duration: 0.22 }}
                  >
                    {exp.title}
                  </motion.div>
                </AnimatePresence>
                <div className="text-label text-muted">{exp.company}</div>
                <div className="text-label text-muted/50">{exp.location}</div>
              </div>

              {/* Achievements */}
              <ul className="space-y-2">
                {exp.achievements.map((item, i) => (
                  <AnimatePresence key={i} mode="wait">
                    <motion.li
                      key={item + lang}
                      className="flex items-start gap-3 text-sm text-muted leading-relaxed"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ delay: i * 0.04, duration: 0.22 }}
                    >
                      <span className="text-yellow mt-1.5 flex-shrink-0 text-[10px]">▸</span>
                      {item}
                    </motion.li>
                  </AnimatePresence>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
