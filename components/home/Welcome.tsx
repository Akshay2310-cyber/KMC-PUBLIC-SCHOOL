'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Welcome() {
  return (
    <section className="py-8 sm:py-12 md:py-24 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 sm:mb-8 md:mb-12">
          <span className="section-tag text-[10px] sm:text-xs md:text-sm">Welcome</span>
          <h2 className="section-title text-xl sm:text-2xl md:text-4xl">Why KMC Public School</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2 sm:col-span-1 order-2 sm:order-1"
          >
            <p className="text-xs sm:text-sm md:text-xl text-gray-700 font-medium mb-2 sm:mb-4 md:mb-6 leading-relaxed">
              KMC Public School, established in 2008, has been a beacon of educational 
              excellence in Tirupur, providing world-class CBSE curriculum education.
            </p>
            <p className="text-[10px] sm:text-xs md:text-base text-gray-600 mb-2 sm:mb-4 md:mb-6 leading-relaxed hidden sm:block">
              Named after Shri. M. Chinnaswamy Gounder, a great philanthropist, our school 
              is committed to nurturing well-rounded individuals through a perfect blend of 
              academics, co-curricular activities, and character development.
            </p>
            <p className="text-[10px] sm:text-xs md:text-base text-gray-600 leading-relaxed hidden md:block">
              Our personalized approach with a maximum class strength of 30 students ensures 
              every child receives individual attention. From Pre-KG to Grade XII, we offer 
              comprehensive education with state-of-the-art facilities, experienced faculty, 
              and a nurturing environment.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative col-span-2 sm:col-span-1 order-1 sm:order-2"
          >
            <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl">
              <Image
                src="/images/premises1.jpg"
                alt="KMC Public School Campus"
                width={800}
                height={600}
                className="w-full h-[150px] sm:h-[200px] md:h-[350px] lg:h-[400px] object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-2 -right-1 sm:-bottom-4 sm:-right-2 md:-bottom-6 md:-right-4 bg-secondary text-gray-900 p-2 sm:p-4 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl shadow-md sm:shadow-lg md:shadow-xl">
              <span className="block text-xl sm:text-2xl md:text-4xl font-heading font-bold leading-none">15+</span>
              <span className="text-[8px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-wider">Years of Excellence</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
