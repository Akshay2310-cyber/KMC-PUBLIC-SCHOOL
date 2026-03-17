'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { activities } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Activities() {
  return (
    <section className="py-24 bg-white" id="activities">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-tag">Beyond Academics</span>
          <h2 className="section-title">Co-Curricular Activities</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                'relative rounded-2xl overflow-hidden cursor-pointer group',
                activity.large ? 'col-span-2 row-span-1 h-72' : 'h-64'
              )}
            >
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-heading font-bold text-xl mb-2">
                  {activity.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {activity.description}
                </p>
                <Link 
                  href="#" 
                  className="inline-flex items-center gap-2 text-secondary text-sm font-semibold uppercase tracking-wide"
                >
                  Explore <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
