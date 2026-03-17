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
    <section className="py-6 sm:py-10 md:py-24 bg-gradient-to-br from-primary to-primary-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 sm:mb-8 md:mb-16">
          <span className="section-tag text-secondary text-[10px] sm:text-xs md:text-sm">Testimonials</span>
          <h2 className="section-title section-title-light text-xl sm:text-2xl md:text-4xl">What Parents Say</h2>
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
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-10 mb-4 sm:mb-6 md:mb-10 relative shadow-lg sm:shadow-xl">
                <Quote className="absolute top-2 left-2 sm:top-4 sm:left-4 md:top-6 md:left-6 text-primary/10 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" />
                <p className="text-gray-600 text-xs sm:text-sm md:text-lg italic leading-relaxed line-clamp-4 sm:line-clamp-none">
                  &ldquo;{testimonials[current].content}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-lg">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].author}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="text-white font-semibold text-sm sm:text-base md:text-lg">
                    {testimonials[current].author}
                  </h4>
                  <p className="text-white/70 text-[10px] sm:text-xs md:text-sm">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 md:mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={cn(
                  'w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all',
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
