'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { activities } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Activities() {
  return (
    <section className="py-6 sm:py-10 md:py-24 bg-white" id="activities">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 sm:mb-8 md:mb-16">
          <span className="section-tag text-[10px] sm:text-xs md:text-sm">Beyond Academics</span>
          <h2 className="section-title text-xl sm:text-2xl md:text-4xl">Co-Curricular Activities</h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-5">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                'relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group',
                activity.large ? 'col-span-2 row-span-1 h-24 sm:h-40 md:h-72' : 'h-20 sm:h-36 md:h-64'
              )}
            >
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Always visible title on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-1.5 sm:p-3 md:p-6 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-heading font-bold text-[10px] sm:text-sm md:text-xl mb-0 sm:mb-2">
                  {activity.title}
                </h3>
                <p className="text-white/80 text-[8px] sm:text-xs md:text-sm mb-1 sm:mb-4 hidden sm:block">
                  {activity.description}
                </p>
                <Link 
                  href="#" 
                  className="hidden sm:inline-flex items-center gap-1 sm:gap-2 text-secondary text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wide"
                >
                  Explore <ArrowRight size={10} className="sm:w-3 sm:h-3 md:w-[14px] md:h-[14px]" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
