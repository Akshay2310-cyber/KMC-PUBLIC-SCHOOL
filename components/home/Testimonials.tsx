'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-tag text-secondary">Testimonials</span>
          <h2 className="section-title section-title-light">What Parents Say</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Quote Card */}
              <div className="bg-white rounded-2xl p-10 mb-10 relative shadow-xl">
                <Quote className="absolute top-6 left-6 text-primary/10" size={48} />
                <p className="text-gray-600 text-lg italic leading-relaxed">
                  &ldquo;{testimonials[current].content}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].author}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold text-lg">
                    {testimonials[current].author}
                  </h4>
                  <p className="text-white/70 text-sm">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={cn(
                  'w-3 h-3 rounded-full transition-all',
                  index === current ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
