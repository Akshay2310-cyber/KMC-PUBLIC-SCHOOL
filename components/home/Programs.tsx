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
    <section className="py-6 sm:py-10 md:py-24 bg-gray-50" id="programs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 sm:mb-8 md:mb-12">
          <span className="section-tag text-[10px] sm:text-xs md:text-sm">Academics</span>
          <h2 className="section-title text-xl sm:text-2xl md:text-4xl">Our Programs</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-3 mb-4 sm:mb-8 md:mb-12 px-1">
          {programs.map((program) => (
            <button
              key={program.id}
              onClick={() => setActiveTab(program.id)}
              className={cn(
                'px-2 sm:px-3 md:px-6 py-1 sm:py-2 md:py-3 rounded-full text-[10px] sm:text-xs md:text-sm font-medium transition-all',
                activeTab === program.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 border border-gray-200 sm:border-2 hover:border-primary hover:text-primary'
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
              className="grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-16 items-center"
            >
              {/* Image */}
              <div className="rounded-xl sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg sm:shadow-lg md:shadow-xl">
                <Image
                  src={activeProgram.image}
                  alt={activeProgram.name}
                  width={800}
                  height={500}
                  className="w-full h-[180px] sm:h-[180px] md:h-[300px] lg:h-[400px] object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg sm:text-lg md:text-3xl font-heading font-bold text-primary mb-2 sm:mb-2 md:mb-3">
                  {activeProgram.name}
                </h3>
                <p className="text-[10px] sm:text-sm md:text-lg text-secondary font-semibold mb-2 sm:mb-4 md:mb-6">
                  {activeProgram.grades}
                </p>
                <p className="text-[10px] sm:text-xs md:text-base text-gray-600 mb-2 sm:mb-4 md:mb-8 leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {activeProgram.description}
                </p>

                <ul className="space-y-1 sm:space-y-2 md:space-y-3 mb-2 sm:mb-4 md:mb-8 hidden sm:block">
                  {activeProgram.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-1 sm:gap-2 md:gap-3 text-[10px] sm:text-xs md:text-base text-gray-600">
                      <Check size={12} className="text-secondary flex-shrink-0 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/admissions" className="btn btn-primary text-[10px] sm:text-xs md:text-sm px-3 sm:px-5 md:px-7 py-1.5 sm:py-2 md:py-3">
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
