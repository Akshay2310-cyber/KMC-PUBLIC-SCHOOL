'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { focusAreas } from '@/lib/constants'

export default function FocusAreas() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-tag text-secondary">Our Pillars</span>
          <h2 className="section-title section-title-light">3 Strategic Focus Areas</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-56 overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {area.description}
                </p>
                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide hover:gap-4 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
