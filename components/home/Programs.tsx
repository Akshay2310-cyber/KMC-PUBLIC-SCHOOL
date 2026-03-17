'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { programs } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Programs() {
  const [activeTab, setActiveTab] = useState('preprimary')

  const activeProgram = programs.find(p => p.id === activeTab)

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50" id="programs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <span className="section-tag text-xs sm:text-sm">Academics</span>
          <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">Our Programs</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
          {programs.map((program) => (
            <button
              key={program.id}
              onClick={() => setActiveTab(program.id)}
              className={cn(
                'px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all',
                activeTab === program.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-primary hover:text-primary'
              )}
            >
              {program.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeProgram && (
            <motion.div
              key={activeProgram.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"
            >
              {/* Image */}
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
                <Image
                  src={activeProgram.image}
                  alt={activeProgram.name}
                  width={800}
                  height={500}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
                />
              </div>

              {/* Info */}
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-primary mb-2 sm:mb-3">
                  {activeProgram.name}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-secondary font-semibold mb-4 sm:mb-6">
                  {activeProgram.grades}
                </p>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  {activeProgram.description}
                </p>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {activeProgram.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-600">
                      <Check size={16} className="text-secondary flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/admissions" className="btn btn-primary text-xs sm:text-sm px-5 sm:px-7 py-2 sm:py-3">
                  Learn More
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
