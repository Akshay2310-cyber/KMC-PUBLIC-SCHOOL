'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Welcome() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="section-tag">Welcome</span>
          <h2 className="section-title">Why KMC Public School</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-700 font-medium mb-6 leading-relaxed">
              KMC Public School, established in 2008, has been a beacon of educational 
              excellence in Tirupur, providing world-class CBSE curriculum education.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Named after Shri. M. Chinnaswamy Gounder, a great philanthropist, our school 
              is committed to nurturing well-rounded individuals through a perfect blend of 
              academics, co-curricular activities, and character development. With international 
              recognition including the British Council International School Award and India 
              STEM Award, we ensure our students are prepared for global success.
            </p>
            <p className="text-gray-600 leading-relaxed">
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
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800"
                alt="KMC Public School Campus"
                width={800}
                height={600}
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-secondary text-gray-900 p-8 rounded-2xl shadow-xl">
              <span className="block text-5xl font-heading font-bold leading-none">15+</span>
              <span className="text-sm font-semibold uppercase tracking-wider">Years of Excellence</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
