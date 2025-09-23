'use client'

import { motion } from 'framer-motion'
import { Quote, ExternalLink } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  linkedinUrl?: string
}

interface Achievement {
  id: string
  title: string
  description: string
  year: string
  icon: string
  category: 'award' | 'certification' | 'recognition'
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp Solutions',
    content: 'Atticus consistently delivers exceptional work with attention to detail that sets him apart. His ability to translate complex requirements into elegant solutions has been invaluable to our team\'s success.',
    linkedinUrl: 'https://linkedin.com/in/sarah-johnson'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Engineering Director',
    company: 'StartupXYZ',
    content: 'Working with Atticus was a game-changer for our startup. His technical expertise and collaborative approach helped us build a platform that secured our Series A funding. I would work with him again in a heartbeat.',
    linkedinUrl: 'https://linkedin.com/in/michael-chen'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    company: 'Digital Agency Pro',
    content: 'Atticus bridges the gap between design and development beautifully. He understands user experience deeply and implements designs with pixel-perfect precision while maintaining excellent performance.',
    linkedinUrl: 'https://linkedin.com/in/emily-rodriguez'
  },
  {
    id: '4',
    name: 'David Park',
    role: 'CTO',
    company: 'InnovateCorp',
    content: 'Atticus is the kind of developer every team needs - technically excellent, great communicator, and always willing to go the extra mile. His mentoring has elevated our entire engineering team.'
  }
]

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Best Interactive Experience Award',
    description: 'Design Awards 2019 - Museum Installation Project',
    year: '2019',
    icon: '🏆',
    category: 'award'
  },
  {
    id: '2',
    title: 'AWS Solutions Architect Professional',
    description: 'Advanced cloud architecture certification',
    year: '2023',
    icon: '☁️',
    category: 'certification'
  },
  {
    id: '3',
    title: 'Top 1% Developer Recognition',
    description: 'Stack Overflow Annual Developer Survey',
    year: '2022',
    icon: '⭐',
    category: 'recognition'
  },
  {
    id: '4',
    title: 'Open Source Contributor',
    description: 'Contributed to 25+ open source projects',
    year: 'Ongoing',
    icon: '💻',
    category: 'recognition'
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-12 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-stone-900 mb-4">
            What People Say
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Testimonials from colleagues, clients, and collaborators who have experienced
            the impact of working together on meaningful projects.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-warm transition-all duration-300 border border-copper-100"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-copper-400" />
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-stone-700 text-lg leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 bg-gradient-copper rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  {/* Author Details */}
                  <div>
                    <h4 className="font-semibold text-stone-900">{testimonial.name}</h4>
                    <p className="text-sm text-stone-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* LinkedIn Link */}
                {testimonial.linkedinUrl && (
                  <a
                    href={testimonial.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-copper-600 hover:text-copper-700 transition-colors"
                    aria-label={`View ${testimonial.name}'s LinkedIn profile`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-stone-900 mb-4">
              Recognition & Achievements
            </h3>
            <p className="text-lg text-stone-600">
              Professional milestones and industry recognition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-soft hover:shadow-warm transition-all duration-300 border border-copper-100"
              >
                {/* Icon */}
                <div className="text-4xl mb-4">
                  {achievement.icon}
                </div>

                {/* Achievement Details */}
                <h4 className="font-semibold text-stone-900 mb-2 text-sm">
                  {achievement.title}
                </h4>
                <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Year */}
                <div className="flex items-center justify-center gap-2">
                  <span className="px-3 py-1 bg-copper-100 text-copper-800 text-xs font-medium rounded-full">
                    {achievement.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-copper rounded-2xl text-white"
        >
          <h3 className="text-2xl font-display font-bold mb-4">
            Ready to Work Together?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Let&apos;s create something amazing. I&apos;m always excited to take on new challenges
            and collaborate with passionate teams.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-copper-600 font-semibold rounded-full hover:bg-stone-50 transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}