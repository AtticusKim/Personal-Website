'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const experiences = [
  {
    id: '1',
    company: 'TechCorp Solutions',
    role: 'Senior Software Engineer',
    period: '2022 - Present',
    description: 'Led development of enterprise-scale applications, implementing microservices architecture and mentoring a team of 5 developers. Reduced system latency by 40% through optimization.',
    technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker'],
    achievements: [
      'Reduced application load time by 40%',
      'Led team of 8 developers on product redesign',
      'Implemented CI/CD pipeline'
    ]
  },
  {
    id: '2',
    company: 'StartupXYZ',
    role: 'Full Stack Developer',
    period: '2020 - 2022',
    description: 'Built and scaled web applications from concept to production in fast-paced startup environment. Developed MVP that secured $2M Series A funding.',
    technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL'],
    achievements: [
      'Developed MVP securing $2M funding',
      'Built real-time messaging for 10k+ users',
      'Increased conversion rate by 25%'
    ]
  },
  {
    id: '3',
    company: 'Digital Agency Pro',
    role: 'Frontend Developer',
    period: '2018 - 2020',
    description: 'Created responsive web applications and interactive experiences for diverse client portfolio. Delivered 20+ projects with 98% client satisfaction.',
    technologies: ['JavaScript', 'React', 'SASS', 'Webpack'],
    achievements: [
      'Delivered 20+ projects with 98% satisfaction',
      'Won "Best Interactive Experience" award',
      'Built design system used across 15+ projects'
    ]
  }
]

export default function ExperienceTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section id="experience" className="min-h-screen flex items-center py-24 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                className="w-full text-left group"
              >
                <div className="flex items-baseline justify-between py-4 border-b border-[#e5e5e5] hover:border-[#111] transition-colors duration-300">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#111] group-hover:text-[#666] transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-[#666] mt-1">{exp.company}</p>
                  </div>
                  <span className="text-[#999] ml-8">{exp.period}</span>
                </div>
              </button>

              <AnimatePresence>
                {expandedId === exp.id && (
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
                              Overview
                            </h4>
                            <p className="text-[#333] leading-relaxed">
                              {exp.description}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-[#999] uppercase tracking-wide mb-3">
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-[#333] flex items-start">
                                  <span className="text-[#111] mr-2">•</span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-[#999] uppercase tracking-wide mb-3">
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
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