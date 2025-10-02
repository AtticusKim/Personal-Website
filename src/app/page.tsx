'use client'

import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col flex-1">
        <HeroSection />
        <div id="work" className="section-spacing" style={{ scrollMarginTop: '25vh', paddingBottom: '50vh' }}>
          <Gallery />
        </div>
      </main>
      <Footer />
    </div>
  )
}