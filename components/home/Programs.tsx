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
    <section className="py-24 bg-gray-50" id="programs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-tag">Academics</span>
          <h2 className="section-title">Our Programs</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {programs.map((program) => (
            <button
              key={program.id}
              onClick={() => setActiveTab(program.id)}
              className={cn(
                'px-6 py-3 rounded-full text-sm font-medium transition-all',
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
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={activeProgram.image}
                  alt={activeProgram.name}
                  width={800}
                  height={500}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Info */}
              <div>
                <h3 className="text-3xl font-heading font-bold text-primary mb-3">
                  {activeProgram.name}
                </h3>
                <p className="text-lg text-secondary font-semibold mb-6">
                  {activeProgram.grades}
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {activeProgram.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {activeProgram.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-600">
                      <Check size={18} className="text-secondary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/admissions" className="btn btn-primary">
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
