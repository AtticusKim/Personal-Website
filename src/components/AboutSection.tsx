'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  className?: string
}

const galleryImages = [
  '100_2481.JPG',
  'GOPR7112 3.JPG',
  'IMG_0751 3.JPG',
  'IMG_0893.jpg',
  'IMG_4144.jpg',
  'IMG_5024.JPG',
  'IMG_6357.jpg',
  'IMG_6778.jpg',
  'IMG_7117.JPG',
  'IMG_7124.JPG',
  'IMG_8749.JPG',
  'IMG_8751.JPG',
  'P1010629.jpg',
  'P1020518.JPG',
  'P1020690.JPG',
  'P1030282.JPG',
  'P1030556.JPG',
  'P1040353.JPG'
]

export default function AboutSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += 0.5

        // Reset when reaching halfway (since we duplicated images)
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        }
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  return (
    <section className="relative">
      <div className="container">
        <h2 className="display-font text-5xl md:text-6xl font-semibold text-[#0f1419] mb-16 tracking-tight">
          About
        </h2>

        <div className="text-[clamp(1.125rem,2vw,1.375rem)] text-[#5c6470] max-w-3xl font-normal leading-[1.7]" style={{ marginBottom: '30px' }}>
          <p>
            I grew up in Orange County and am currently attending USC studying business and AI. I grew up selling backpacks on Amazon with my parents when we immigrated here, and that's when my love for entrepreneurship and solving problems grew.
          </p>

          <br />

          <p>
            Ever since, I have been building random projects, trying to learn as much as possible, and exploring the world outside of the bubble I grew up in. I have had the opportunity to travel Thailand by myself, study abroad in Madrid and travel to 10+ European countries, and explore random states with my friends. All while learning to build and meet new people.
          </p>

          <br />

          <p>
            Most importantly, I deeply value my personal relationships and my faith. This is what drives me to continue moving forward. Please stay connected with my journey!
          </p>
        </div>

        {/* Auto-scrolling Photo Gallery */}
        <div
          ref={scrollRef}
          className="overflow-x-auto horizontal-scroll"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-4">
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <div key={index} className="flex-shrink-0 w-80 h-80">
                <img
                  src={`/gallery/${image}`}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}