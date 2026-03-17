'use client'

import { motion } from 'framer-motion'

export default function Map() {
  return (
    <section className="py-6 sm:py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 sm:mb-6 md:mb-10">
          <span className="section-tag text-[10px] sm:text-xs md:text-sm">Location</span>
          <h2 className="section-title text-xl sm:text-2xl md:text-4xl">Find Us on Map</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.4951766449087!2d77.30715671531373!3d11.134969992077043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907e0c8f8e8e5%3A0x1234567890abcdef!2sKMC%20Public%20School%2C%20Perumanallur%2C%20Tirupur%2C%20Tamil%20Nadu%20641666!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[350px] sm:h-[350px] md:h-[450px]"
            title="KMC Public School Location"
          />
        </motion.div>

        <div className="mt-4 sm:mt-6 md:mt-8 text-center">
          <a
            href="https://www.google.com/maps/search/KMC+Public+School+Perumanallur+Tirupur"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-[10px] sm:text-xs md:text-sm px-4 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}
