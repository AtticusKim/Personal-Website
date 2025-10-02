"use client"
import { motion } from 'framer-motion'
import { useState } from 'react'
import works from '@/data/works'

type FilterType = 'all' | 'experience' | 'project'

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [filter, setFilter] = useState<FilterType>('experience')

  const handleItemClick = (id: number) => {
    setSelectedId(selectedId === id ? null : id)
  }

  const filteredWorks = filter === 'all'
    ? works
    : works.filter(item => item.type === filter)

  const selectedItem = works.find(item => item.id === selectedId)

  return (
    <section className="relative">
      <div className="container mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-semibold text-[#1a1a1a] mb-6 tracking-tight" style={{ fontFamily: 'Lora, serif' }}>
            Work
          </h2>
          <p className="font-geist text-[#666666] text-lg max-w-2xl font-normal leading-relaxed mb-8">
            Selected projects and experiences across design and development.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3" style={{ marginBottom: '10px' }}>
            <button
              onClick={() => setFilter('experience')}
              className={`font-geist text-sm font-medium whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                filter === 'experience'
                  ? 'scale-105'
                  : 'hover:scale-105'
              }`}
              style={{
                padding: '6px 12px',
                borderRadius: '8px',
                backgroundColor: filter === 'experience' ? 'white' : 'rgba(255, 140, 0, 0.25)',
                color: filter === 'experience' ? '#8B4513' : '#666666'
              }}
            >
              Work Experience
            </button>
            <button
              onClick={() => setFilter('project')}
              className={`font-geist text-sm font-medium whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                filter === 'project'
                  ? 'scale-105'
                  : 'hover:scale-105'
              }`}
              style={{
                padding: '6px 12px',
                borderRadius: '8px',
                backgroundColor: filter === 'project' ? 'white' : 'rgba(255, 140, 0, 0.25)',
                color: filter === 'project' ? '#8B4513' : '#666666'
              }}
            >
              Projects
            </button>
            <button
              onClick={() => setFilter('all')}
              className={`font-geist text-sm font-medium whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                filter === 'all'
                  ? 'scale-105'
                  : 'hover:scale-105'
              }`}
              style={{
                padding: '6px 12px',
                borderRadius: '8px',
                backgroundColor: filter === 'all' ? 'white' : 'rgba(255, 140, 0, 0.25)',
                color: filter === 'all' ? '#8B4513' : '#666666'
              }}
            >
              All
            </button>
          </div>
        </motion.div>
      </div>

      <div className="container">
        <div className="flex gap-16">
          {/* Left Side - Minimal List */}
          <div className={`${selectedId ? 'w-2/5' : 'w-full'} transition-all duration-500`}>
            <div className="space-y-6">
              {filteredWorks.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  onClick={() => handleItemClick(item.id)}
                  className="group cursor-pointer transition-all duration-300"
                  style={{ marginBottom: '0.75rem' }}
                >
                  <div className="grid grid-cols-[80px_1fr_1fr] gap-6 items-baseline">
                    <div className="font-mono text-sm text-[#999999] group-hover:text-white transition-colors duration-300">{item.year}</div>
                    <h3 className="font-lora text-xl font-medium text-[#1a1a1a] group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <span className="font-geist text-[#666666] group-hover:text-white transition-colors duration-300">{item.role}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Detail Box */}
          {selectedId && selectedItem && (
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-3/5 sticky top-24 h-fit"
            >
              <div className="bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
                {/* Description Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="p-16"
                >
                  <div className="flex items-start justify-between mb-10">
                    <div className="flex items-start gap-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.4, type: "spring", stiffness: 200 }}
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden bg-white"
                      >
                        <img src={selectedItem.logo} alt={selectedItem.title} className="w-full h-full object-contain" />
                      </motion.div>
                      <div>
                        <h3 className="font-lora text-3xl text-[#1a1a1a] font-medium mb-3 tracking-tight">
                          {selectedItem.title}
                        </h3>
                        <p className="font-geist text-lg text-[#666666] mb-2">{selectedItem.role}</p>
                        <p className="font-mono text-xs text-[#999999] uppercase tracking-wider">{selectedItem.dateRange}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedId(null)}
                      className="text-[#999999] hover:text-[#1a1a1a] transition-colors text-xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="flex gap-3" style={{ marginTop: '10px', marginBottom: '10px' }}>
                    {selectedItem.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="font-geist text-sm whitespace-nowrap font-medium"
                        style={{ padding: '6px 12px', borderRadius: '8px', backgroundColor: 'white', color: '#8B4513' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.5 }}
                    className="space-y-5"
                  >
                    {Array.isArray(selectedItem.description) ? (
                      selectedItem.description.map((paragraph, i) => (
                        <p key={i} className="font-geist text-[#666666] text-base leading-loose">
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="font-geist text-[#666666] text-base leading-loose">
                        {selectedItem.description}
                      </p>
                    )}
                  </motion.div>
                </motion.div>

                {/* Image Section */}
                {selectedItem.image && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="relative aspect-[16/9] overflow-hidden mx-8 mb-8 rounded-xl"
                  >
                    <motion.img
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}