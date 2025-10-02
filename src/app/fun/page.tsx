'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

export default function FunPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col flex-1 pt-48">
        <div className="section-spacing">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-font text-5xl md:text-6xl font-semibold text-[#0f1419] mb-16 tracking-tight">
                Fun
              </h1>

              <div className="space-y-6 text-[clamp(1.125rem,2vw,1.375rem)] text-[#5c6470] max-w-3xl font-normal leading-[1.7]" style={{ marginBottom: '20px' }}>
                <p>
                  When I'm not building, you'll find me either outside playing sports with my friends or exploring creative outlets through music. I love exploring life to the fullest and practicing gratitude.
                </p>
              </div>

              <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h3 className="display-font text-xl font-semibold text-[#0f1419] mb-6 tracking-tight">Hobbies</h3>
                  <ul className="space-y-3 text-[#5c6470] text-base font-normal">
                    <li>Making Music</li>
                    <li>Beach Volleyball</li>
                    <li>Tennis</li>
                    <li>Watching Movies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="display-font text-xl font-semibold text-[#0f1419] mb-6 tracking-tight">Side Projects</h3>
                  <ul className="space-y-3 text-[#5c6470] text-base font-normal">
                    <li>Creating content</li>
                    <li>Songwriting</li>
                    <li>Traveling to random places (like Alaska, Morocco, etc.)</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}