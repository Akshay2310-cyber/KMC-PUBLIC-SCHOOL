'use client'

import { motion } from 'framer-motion'
import { Globe, Award, Tv, Bot, Medal } from 'lucide-react'
import { awards } from '@/lib/constants'

const iconMap: Record<string, React.ReactNode> = {
  'globe': <Globe className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10" />,
  'award': <Award className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10" />,
  'tv': <Tv className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10" />,
  'robot': <Bot className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10" />,
  'medal': <Medal className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10" />,
}

export default function Awards() {
  return (
    <section className="py-6 sm:py-10 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 sm:mb-8 md:mb-16">
          <span className="section-tag text-[10px] sm:text-xs md:text-sm">Recognition</span>
          <h2 className="section-title text-xl sm:text-2xl md:text-4xl">Awards & Achievements</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 md:gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, rotateY: -15 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-4 sm:p-4 md:p-10 rounded-xl sm:rounded-xl md:rounded-2xl border border-gray-100 hover:border-primary hover:-translate-y-1 hover:shadow-lg transition-all text-center relative"
            >
              {/* Year Badge */}
              <span className="absolute top-1 right-1 sm:top-3 sm:right-3 md:top-5 md:right-5 bg-secondary text-gray-900 px-1.5 sm:px-2 md:px-4 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-xs md:text-sm font-semibold">
                {award.year}
              </span>

              {/* Icon */}
              <div className="w-8 h-8 sm:w-14 sm:h-14 md:w-20 md:h-20 mx-auto mb-2 sm:mb-4 md:mb-6 flex items-center justify-center text-primary">
                {iconMap[award.icon]}
              </div>

              <h3 className="text-[10px] sm:text-sm md:text-lg font-heading font-bold text-gray-900 mb-1 sm:mb-2 md:mb-4 line-clamp-2">
                {award.title}
              </h3>
              <p className="text-gray-600 text-[8px] sm:text-xs md:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
