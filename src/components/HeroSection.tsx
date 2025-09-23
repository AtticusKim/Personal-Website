'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#111] mb-8 tracking-tight"
        >
          Atticus Kim
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-[#666] max-w-2xl mx-auto leading-relaxed"
        >
          Developer & designer crafting thoughtful digital experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex gap-8 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection('experience')}
            className="text-[#666] hover:text-[#111] transition-colors duration-300 text-lg font-medium"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-[#666] hover:text-[#111] transition-colors duration-300 text-lg font-medium"
          >
            Projects
          </button>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#666] hover:text-[#111] transition-colors duration-300 text-lg font-medium"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#666] hover:text-[#111] transition-colors duration-300 text-lg font-medium"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}