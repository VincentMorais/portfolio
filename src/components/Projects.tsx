import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

function SectionHeader({ number, title, lang }: { number: string; title: string; lang: string }) {
  return (
    <div className="mb-12">
      <motion.div
        className="flex items-center gap-6 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-xs text-yellow tracking-widest">{number}</span>
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
            key={title + lang}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{ display: 'inline-block' }}
          >
            {title}
          </motion.span>
        </AnimatePresence>
      </motion.h2>
    </div>
  )
}

export default function Projects() {
  const { t, lang } = useLanguage()
  const projects = t.data.projects

  return (
    <section id="projets" className="relative px-6 py-28 md:py-36 overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none" aria-hidden>
        <span className="font-heading font-bold leading-none text-cream pr-6" style={{ fontSize: 'clamp(6rem, 20vw, 16rem)', opacity: 0.022 }}>002</span>
      </div>

      <div className="max-w-[1400px] mx-auto">
        <SectionHeader number="N°002" title={t.projects.title} lang={lang} />

        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              {/* Divider */}
              <motion.div
                className="h-px bg-cream/8"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                style={{ originX: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              />

              <motion.div
                className="group py-10 md:py-14 grid md:grid-cols-[120px_1fr_auto] gap-8 md:gap-12 items-start"
                whileHover={{ paddingLeft: '1rem' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Number + year */}
                <div className="flex md:flex-col gap-3 md:gap-2">
                  <span className="font-mono text-xs text-yellow tracking-widest">{project.number}</span>
                  <span className="text-label text-muted">{project.year}</span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="font-heading font-bold text-2xl md:text-3xl text-cream group-hover:text-yellow transition-colors duration-300">
                      {project.title}
                    </h3>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={project.type + lang}
                        className="text-label text-muted border border-border px-2 py-0.5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.type}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={project.description + lang}
                      className="text-sm text-muted leading-relaxed max-w-xl mb-6"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                    >
                      {project.description}
                    </motion.p>
                  </AnimatePresence>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="font-mono text-xs text-muted/70 border border-dim px-2.5 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <div className="flex flex-col items-end gap-3">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={project.status + lang}
                      className="text-label text-muted/50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.status}
                    </motion.span>
                  </AnimatePresence>
                  {project.link ? (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-label text-yellow hover:text-cream transition-colors border border-yellow/30 px-4 py-2 hover:border-cream/40"
                      whileHover={{ x: -2 }}
                    >
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={t.projects.visit + lang}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ display: 'inline-block' }}
                        >
                          {t.projects.visit}
                        </motion.span>
                      </AnimatePresence>
                    </motion.a>
                  ) : (
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={t.projects.private + lang}
                        className="text-label text-muted/30 border border-dim px-4 py-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {t.projects.private}
                      </motion.span>
                    </AnimatePresence>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Last divider */}
          <motion.div
            className="h-px bg-cream/8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            style={{ originX: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>
    </section>
  )
}
