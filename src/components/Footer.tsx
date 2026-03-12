import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border px-6 py-8">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-heading font-bold text-sm text-cream tracking-widest uppercase">
          VM
        </span>

        <div className="flex items-center gap-8">
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vincent-morais-5592061b1/' },
            { label: 'GitHub', href: 'https://github.com/VincentMorais' },
            { label: 'Boulevard TCG', href: 'https://boulevardtcg.com' },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-label text-muted hover:text-cream transition-colors duration-300"
              whileHover={{ y: -1 }}
            >
              {link.label} ↗
            </motion.a>
          ))}
        </div>

        <span className="text-label text-dim">© 2025 Vincent Morais</span>
      </div>
    </footer>
  )
}
