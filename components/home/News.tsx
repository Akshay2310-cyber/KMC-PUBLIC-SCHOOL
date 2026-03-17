'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { news } from '@/lib/constants'

export default function News() {
  return (
    <section className="py-6 sm:py-10 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 sm:mb-8 md:mb-16">
          <span className="section-tag text-[10px] sm:text-xs md:text-sm">Latest Updates</span>
          <h2 className="section-title text-xl sm:text-2xl md:text-4xl">News & Events</h2>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 mb-4 sm:mb-8 md:mb-12">
          {news.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-md sm:shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="relative h-16 sm:h-28 md:h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <span className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 md:bottom-4 md:left-4 bg-primary text-white px-1.5 sm:px-2 md:px-4 py-0.5 sm:py-1 md:py-1.5 rounded-full text-[8px] sm:text-xs md:text-sm font-medium">
                  {item.date}
                </span>
              </div>

              {/* Content */}
              <div className="p-2 sm:p-3 md:p-6">
                <span className="text-[8px] sm:text-[10px] md:text-xs font-semibold text-secondary uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-[10px] sm:text-sm md:text-lg font-heading font-bold text-gray-900 mt-0.5 sm:mt-1 md:mt-2 mb-1 sm:mb-2 md:mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[8px] sm:text-xs md:text-sm mb-1 sm:mb-2 md:mb-4 line-clamp-2 hidden sm:block">
                  {item.excerpt}
                </p>
                <Link 
                  href="#" 
                  className="hidden sm:inline-flex items-center gap-1 sm:gap-2 text-primary font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wide hover:gap-4 transition-all"
                >
                  Read More <ArrowRight size={10} className="sm:w-3 sm:h-3 md:w-[14px] md:h-[14px]" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/news" className="btn btn-secondary text-[10px] sm:text-xs md:text-sm px-4 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3">
            View All News
          </Link>
        </div>
      </div>
    </section>
  )
}
