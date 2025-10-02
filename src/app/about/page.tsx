'use client'

import Header from '@/components/Header'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col flex-1 pt-48">
        <div className="section-spacing">
          <AboutSection/>
        </div>
      </main>
      <Footer />
    </div>
  )
}