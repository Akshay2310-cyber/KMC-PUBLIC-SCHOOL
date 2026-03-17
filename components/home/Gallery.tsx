'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { galleryImages } from '@/lib/constants'

export default function Gallery() {
  return (
    <section className="py-6 sm:py-10 md:py-24 bg-gray-50" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 sm:mb-8 md:mb-16">
          <span className="section-tag text-[10px] sm:text-xs md:text-sm">Gallery</span>
          <h2 className="section-title text-xl sm:text-2xl md:text-4xl">Life at KMC</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-5 mb-4 sm:mb-8 md:mb-12">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-[10px] sm:text-sm md:text-lg font-semibold uppercase tracking-wider text-center px-1">
                  {image.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery" className="btn btn-primary text-[10px] sm:text-xs md:text-sm px-4 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
