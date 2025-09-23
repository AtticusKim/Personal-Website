'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Coffee, Calendar } from 'lucide-react'
import { useState } from 'react'

interface ContactForm {
  name: string
  email: string
  company: string
  message: string
}

interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
  description: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/atticus-kim',
    icon: <Linkedin className="w-5 h-5" />,
    description: 'Professional network and experience'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/atticus-kim',
    icon: <Github className="w-5 h-5" />,
    description: 'Code repositories and contributions'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/atticus_kim',
    icon: <Twitter className="w-5 h-5" />,
    description: 'Thoughts on tech and industry trends'
  }
]

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)

    // Reset form after success message
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', company: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 px-6 lg:px-12 bg-white">
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
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Whether you&apos;re looking to collaborate on a project, discuss opportunities,
            or just want to chat about technology, I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Availability Status */}
            <div className="bg-gradient-copper rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-display font-bold">Currently Available</h3>
              </div>
              <p className="text-lg opacity-90 mb-6">
                I&apos;m open to new opportunities and exciting projects.
                Let&apos;s discuss how we can work together!
              </p>
              <div className="flex items-center gap-2 text-copper-100">
                <Coffee className="w-4 h-4" />
                <span className="text-sm">Always up for a coffee chat</span>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold text-stone-900">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <motion.a
                  href="mailto:hello@atticus-kim.com"
                  className="flex items-center gap-4 p-4 bg-stone-50 rounded-xl hover:bg-copper-50 hover:shadow-warm transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-copper-100 group-hover:bg-copper-200 rounded-lg flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5 text-copper-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900">Email</h4>
                    <p className="text-stone-600">hello@atticus-kim.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+1234567890"
                  className="flex items-center gap-4 p-4 bg-stone-50 rounded-xl hover:bg-copper-50 hover:shadow-warm transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-copper-100 group-hover:bg-copper-200 rounded-lg flex items-center justify-center transition-colors">
                    <Phone className="w-5 h-5 text-copper-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900">Phone</h4>
                    <p className="text-stone-600">+1 (234) 567-8900</p>
                  </div>
                </motion.a>

                <div className="flex items-center gap-4 p-4 bg-stone-50 rounded-xl">
                  <div className="w-12 h-12 bg-copper-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-copper-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-900">Location</h4>
                    <p className="text-stone-600">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold text-stone-900">
                Find Me Online
              </h3>

              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-stone-50 rounded-xl hover:bg-copper-50 hover:shadow-warm transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-copper-100 group-hover:bg-copper-200 rounded-lg flex items-center justify-center transition-colors">
                      {social.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900">{social.name}</h4>
                      <p className="text-stone-600 text-sm">{social.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-stone-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-display font-bold text-stone-900 mb-6">
              Send a Message
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-stone-900 mb-2">
                  Message Sent!
                </h4>
                <p className="text-stone-600">
                  Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-stone-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your company or organization"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg focus:ring-2 focus:ring-copper-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-copper-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-copper-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 shadow-warm hover:shadow-copper"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}

            {/* Additional CTA */}
            <div className="mt-8 pt-8 border-t border-stone-200">
              <p className="text-sm text-stone-600 text-center mb-4">
                Prefer to schedule a call instead?
              </p>
              <motion.a
                href="https://calendly.com/atticus-kim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white border-2 border-copper-200 text-copper-600 font-semibold py-3 px-6 rounded-lg hover:bg-copper-50 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-5 h-5" />
                Schedule a Call
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}