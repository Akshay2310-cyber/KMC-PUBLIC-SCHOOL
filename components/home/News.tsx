'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { news } from '@/lib/constants'

export default function News() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="section-tag">Latest Updates</span>
          <h2 className="section-title">News & Events</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {news.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <span className="absolute bottom-4 left-4 bg-primary text-white px-4 py-1.5 rounded-full text-sm font-medium">
                  {item.date}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-lg font-heading font-bold text-gray-900 mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.excerpt}
                </p>
                <Link 
                  href="#" 
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide hover:gap-4 transition-all"
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/news" className="btn btn-secondary">
            View All News
          </Link>
        </div>
      </div>
    </section>
  )
}
