import Link from 'next/link'
import { schoolInfo } from '@/lib/constants'

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=2000")` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary-dark/90" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Begin Your Child&apos;s Journey to Excellence
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Admissions are now open for the academic year 2024-25. Join the KMC family 
            and give your child the gift of world-class education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/admissions" className="btn btn-primary btn-lg bg-secondary border-secondary text-gray-900 hover:bg-secondary-dark hover:border-secondary-dark">
              Apply for Admission
            </Link>
            <Link href="/about" className="btn btn-outline btn-lg">
              Download Brochure
            </Link>
          </div>
          <p className="text-white/80">
            Have questions? Call us at{' '}
            <a href={`tel:${schoolInfo.contact.phone[0]}`} className="text-secondary font-semibold hover:underline">
              {schoolInfo.contact.phone[0]}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
