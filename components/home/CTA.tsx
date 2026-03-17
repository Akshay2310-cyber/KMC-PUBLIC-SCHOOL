import Link from 'next/link'
import { schoolInfo } from '@/lib/constants'

export default function CTA() {
  return (
    <section className="py-8 sm:py-12 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=2000")` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-dark/90" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-xl sm:text-2xl md:text-5xl font-heading font-bold mb-2 sm:mb-4 md:mb-6">
            Begin Your Child&apos;s Journey to Excellence
          </h2>
          <p className="text-xs sm:text-sm md:text-lg text-white/90 mb-4 sm:mb-6 md:mb-10">
            Admissions are now open for the academic year 2024-25. Join the KMC family 
            and give your child the gift of world-class education.
          </p>
          <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 justify-center mb-3 sm:mb-4 md:mb-8">
            <Link href="/admissions" className="btn px-3 sm:px-5 md:px-9 py-2 sm:py-3 md:py-4 text-[10px] sm:text-xs md:text-base bg-secondary border-secondary text-gray-900 hover:bg-secondary-dark hover:border-secondary-dark">
              Apply Now
            </Link>
            <Link href="/about" className="btn btn-outline px-3 sm:px-5 md:px-9 py-2 sm:py-3 md:py-4 text-[10px] sm:text-xs md:text-base">
              Brochure
            </Link>
          </div>
          <p className="text-white/80 text-[10px] sm:text-xs md:text-base">
            Call us at{' '}
            <a href={`tel:${schoolInfo.contact.phone[0]}`} className="text-secondary font-semibold hover:underline">
              {schoolInfo.contact.phone[0]}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
