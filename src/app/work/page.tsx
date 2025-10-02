'use client'

import Header from '@/components/Header'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col flex-1 pt-48">
        <div className="section-spacing">
          <Gallery />
        </div>
      </main>
      <Footer />
    </div>
  )
}