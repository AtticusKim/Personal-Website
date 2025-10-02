'use client'
import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'

export default function HeroSection() {
  const names = useMemo(() => ['Atticus Kim', '김현준', 'atty'], [])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentName = names[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentName.length) {
          setDisplayText(currentName.slice(0, displayText.length + 1))
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % names.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex, names])

  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-48">
      <div className="container w-full relative z-10 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.9] font-semibold text-[#1a1a1a] mb-6 tracking-tight" style={{ fontFamily: 'Lora, serif' }}>
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>

          <div className="mb-8">
            <h2 className="font-geist text-[clamp(1.5rem,3vw,2.25rem)] font-medium text-[#1a1a1a] mb-4 tracking-tight">
              [currently innovating]
            </h2>
            <p className="font-geist text-[clamp(1rem,1.5vw,1.125rem)] text-[#666666] max-w-2xl font-normal leading-relaxed">
              Blending experiences across countries and industries to craft products and stories that move people forward.
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-geist text-[clamp(1.125rem,2vw,1.375rem)] text-[#666666] max-w-2xl font-normal leading-relaxed"
          >
          
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}