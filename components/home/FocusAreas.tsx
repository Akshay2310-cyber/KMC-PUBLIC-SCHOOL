'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { focusAreas } from '@/lib/constants'

export default function FocusAreas() {
  return (
    <section className="py-6 sm:py-10 md:py-24 bg-gradient-to-br from-primary to-primary-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 sm:mb-8 md:mb-16">
          <span className="section-tag text-secondary text-[10px] sm:text-xs md:text-sm">Our Pillars</span>
          <h2 className="section-title section-title-light text-xl sm:text-2xl md:text-4xl">3 Strategic Focus Areas</h2>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-md sm:shadow-lg md:shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-20 sm:h-32 md:h-56 overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-2 sm:p-4 md:p-8">
                <h3 className="text-[10px] sm:text-sm md:text-xl font-heading font-bold text-primary mb-1 sm:mb-2 md:mb-4 line-clamp-2">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-[8px] sm:text-xs md:text-sm leading-relaxed mb-2 sm:mb-4 md:mb-6 line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
                  {area.description}
                </p>
                <Link 
                  href="/about" 
                  className="hidden sm:inline-flex items-center gap-1 sm:gap-2 text-primary font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wide hover:gap-4 transition-all"
                >
                  Learn More <ArrowRight size={12} className="sm:w-4 sm:h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
