'use client'

import { motion } from 'framer-motion'
import { Globe, Award, Tv, Bot, Medal } from 'lucide-react'
import { awards } from '@/lib/constants'

const iconMap: Record<string, React.ReactNode> = {
  'globe': <Globe size={40} />,
  'award': <Award size={40} />,
  'tv': <Tv size={40} />,
  'robot': <Bot size={40} />,
  'medal': <Medal size={40} />,
}

export default function Awards() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-tag">Recognition</span>
          <h2 className="section-title">Awards & Achievements</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, rotateY: -15 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-10 rounded-2xl border border-gray-100 hover:border-primary hover:-translate-y-1 hover:shadow-lg transition-all text-center relative"
            >
              {/* Year Badge */}
              <span className="absolute top-5 right-5 bg-secondary text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                {award.year}
              </span>

              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center text-primary">
                {iconMap[award.icon]}
              </div>

              <h3 className="text-lg font-heading font-bold text-gray-900 mb-4">
                {award.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
