'use client'
type Props = {
  className?: string
}

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center space-y-6"
        >
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/atticuskim/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-geist text-sm font-medium text-[#1a1a1a] hover:bg-[#CD7F32]/20 px-3 py-2 rounded transition-all duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/AtticusKim"
              target="_blank"
              rel="noopener noreferrer"
              className="font-geist text-sm font-medium text-[#1a1a1a] hover:bg-[#CD7F32]/20 px-3 py-2 rounded transition-all duration-200"
            >
              GitHub
            </a>
          </div>

          {/* Attribution */}

        </motion.div>
      </div>
    </footer>
  )
}