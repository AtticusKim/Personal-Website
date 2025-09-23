'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: '1',
    title: 'E-Commerce Analytics Dashboard',
    description: 'A comprehensive analytics platform that helps e-commerce businesses track performance metrics and make data-driven decisions. Built with real-time data visualization and predictive analytics.',
    technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
    impact: '40% increase in user engagement, helping 500+ businesses optimize their sales',
    year: '2023'
  },
  {
    id: '2',
    title: 'AI-Powered Learning Platform',
    description: 'An adaptive learning platform that personalizes educational content based on individual learning patterns and preferences. Uses machine learning to optimize learning paths.',
    technologies: ['Next.js', 'Python', 'TensorFlow', 'MongoDB', 'GraphQL'],
    impact: '65% improvement in learning retention across 10,000+ active students',
    year: '2022'
  },
  {
    id: '3',
    title: 'Sustainable City Planning Tool',
    description: 'A web-based tool that helps urban planners visualize and optimize city layouts for sustainability and efficiency. Features 3D visualization and environmental impact modeling.',
    technologies: ['Three.js', 'React', 'WebGL', 'Python', 'GIS APIs'],
    impact: 'Used by 15+ municipalities, reducing planning time by 30%',
    year: '2021'
  },
  {
    id: '4',
    title: 'Real-Time Collaboration Workspace',
    description: 'A digital workspace that enables seamless real-time collaboration with integrated video, chat, and document editing. Built for distributed teams.',
    technologies: ['Vue.js', 'WebRTC', 'Socket.io', 'Redis', 'MySQL'],
    impact: '10,000+ active users, 45% increase in team productivity',
    year: '2021'
  }
]

export default function ProjectPortfolio() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section id="projects" className="min-h-screen flex items-center py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto w-full">
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                className="w-full text-left group"
              >
                <div className="flex items-baseline justify-between py-4 border-b border-[#e5e5e5] hover:border-[#111] transition-colors duration-300">
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#111] group-hover:text-[#666] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-[#999] ml-8">{project.year}</span>
                </div>
              </button>

              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-8 mb-12 bg-[#fafafa] rounded-2xl p-8 md:p-12">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-semibold text-[#999] uppercase tracking-wide mb-3">
                              About
                            </h4>
                            <p className="text-[#333] leading-relaxed">
                              {project.description}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-[#999] uppercase tracking-wide mb-3">
                              Impact
                            </h4>
                            <p className="text-[#333]">
                              {project.impact}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-[#999] uppercase tracking-wide mb-3">
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-white text-[#666] text-sm rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="bg-[#e5e5e5] rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                          <div className="text-center text-[#999]">
                            <div className="text-6xl mb-4">📸</div>
                            <p className="text-sm">Project Image</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}