import { motion, AnimatePresence } from 'framer-motion'
import MagneticButton from './MagneticButton'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { t, lang } = useLanguage()

  const contactLinks = [
    { label: t.contact.labels.email, value: 'vincent.morais.pro@outlook.fr', href: 'mailto:vincent.morais.pro@outlook.fr' },
    { label: t.contact.labels.phone, value: '+33 6 95 81 97 88', href: 'tel:+33695819788' },
    { label: 'LinkedIn', value: 'linkedin.com/in/vincent-morais', href: 'https://www.linkedin.com/in/vincent-morais-5592061b1/' },
    { label: 'GitHub', value: 'github.com/VincentMorais', href: 'https://github.com/VincentMorais' },
  ]

  const formFields = [
    { id: 'name', label: t.contact.form.name, type: 'text', placeholder: t.contact.form.namePlaceholder },
    { id: 'email', label: t.contact.form.email, type: 'email', placeholder: t.contact.form.emailPlaceholder },
  ]

  return (
    <section id="contact" className="relative px-6 py-28 md:py-36 overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none" aria-hidden>
        <span className="font-heading font-bold leading-none text-cream pr-6" style={{ fontSize: 'clamp(6rem, 20vw, 16rem)', opacity: 0.022 }}>005</span>
      </div>

      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="mb-16">
          <motion.div
            className="flex items-center gap-6 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs text-yellow tracking-widest">N°005</span>
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
            Contact
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={t.contact.description + lang}
                className="text-muted text-base leading-relaxed mb-10 max-w-sm"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {t.contact.description}
              </motion.p>
            </AnimatePresence>

            <MagneticButton>
              <a
                href="mailto:vincent.morais.pro@outlook.fr"
                className="inline-block bg-yellow text-bg font-heading font-bold text-sm px-10 py-4 hover:bg-cream transition-colors duration-300 tracking-wide mb-10"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={t.contact.emailButton + lang}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'inline-block' }}
                  >
                    {t.contact.emailButton}
                  </motion.span>
                </AnimatePresence>
              </a>
            </MagneticButton>

            <div className="space-y-4 mt-2">
              {contactLinks.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.3 }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={item.label + lang}
                      className="text-label text-muted/40 w-20 flex-shrink-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.span>
                  </AnimatePresence>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-muted hover:text-cream transition-colors duration-300"
                  >
                    {item.value}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            action="mailto:vincent.morais.pro@outlook.fr"
            method="post"
            encType="text/plain"
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {formFields.map((field) => (
              <div key={field.id}>
                <AnimatePresence mode="wait">
                  <motion.label
                    key={field.label + lang}
                    className="text-label text-muted/50 block mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {field.label}
                  </motion.label>
                </AnimatePresence>
                <input
                  type={field.type}
                  name={field.id}
                  required
                  placeholder={field.placeholder}
                  className="w-full bg-transparent border border-border px-4 py-3 text-sm text-cream placeholder-dim focus:outline-none focus:border-cream/30 transition-colors duration-300"
                />
              </div>
            ))}

            <div>
              <AnimatePresence mode="wait">
                <motion.label
                  key={t.contact.form.message + lang}
                  className="text-label text-muted/50 block mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {t.contact.form.message}
                </motion.label>
              </AnimatePresence>
              <textarea
                name="message"
                required
                rows={5}
                placeholder={t.contact.form.messagePlaceholder}
                className="w-full bg-transparent border border-border px-4 py-3 text-sm text-cream placeholder-dim focus:outline-none focus:border-cream/30 transition-colors duration-300 resize-none"
              />
            </div>

            <MagneticButton className="w-full">
              <button
                type="submit"
                className="w-full py-5 bg-transparent border border-cream/20 text-sm font-medium text-cream hover:border-yellow hover:text-yellow transition-colors duration-300"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={t.contact.form.send + lang}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'inline-block' }}
                  >
                    {t.contact.form.send}
                  </motion.span>
                </AnimatePresence>
              </button>
            </MagneticButton>
          </motion.form>

        </div>
      </div>
    </section>
  )
}
