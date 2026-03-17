'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  MapPin, Phone, Mail, Clock, 
  GraduationCap, BookOpen, Bus, Briefcase,
  Facebook, Instagram, Youtube, Twitter, Linkedin,
  Plane, Train, BusFront
} from 'lucide-react'
import { schoolInfo } from '@/lib/constants'

const contactCards = [
  { icon: MapPin, title: 'Our Location', lines: ['Perumanallur, Tirupur - 641666', 'Tamil Nadu, India'] },
  { icon: Phone, title: 'Phone Numbers', lines: ['+91 421 222 0393', '+91 98422 22393'], isLink: true, linkType: 'tel' },
  { icon: Mail, title: 'Email Address', lines: ['info@kmcpublicschool.org', 'admissions@kmcpublicschool.org'], isLink: true, linkType: 'mailto' },
  { icon: Clock, title: 'Office Hours', lines: ['Mon - Fri: 8:00 AM - 4:00 PM', 'Saturday: 8:00 AM - 1:00 PM'] },
]

const departments = [
  { icon: GraduationCap, title: 'Admissions Office', description: 'For admission inquiries, application status, and campus tours', contact: '+91 421 222 0393' },
  { icon: BookOpen, title: 'Academic Office', description: 'For academic queries, curriculum information, and transcripts', contact: 'academics@kmcpublicschool.org' },
  { icon: Bus, title: 'Transport Department', description: 'For transport routes, timings, and related queries', contact: '+91 98422 22393' },
  { icon: Briefcase, title: 'Careers', description: 'For job opportunities and career inquiries', contact: 'careers@kmcpublicschool.org' },
]

const directions = [
  { icon: Plane, title: 'From Coimbatore Airport', description: 'Approximately 45 km / 1 hour drive via NH544' },
  { icon: Train, title: 'From Tirupur Railway Station', description: 'Approximately 8 km / 20 minutes drive' },
  { icon: BusFront, title: 'From Tirupur Bus Stand', description: 'Approximately 7 km / 15 minutes drive' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[450px] flex items-center mt-[122px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/85" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <nav className="flex justify-center gap-2 mb-6 text-sm">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-secondary">Contact Us</span>
          </nav>
          <h1 className="text-5xl hero-title mb-4">Contact Us</h1>
          <p className="text-xl text-white/90">We&apos;d love to hear from you. Get in touch today.</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card) => (
              <div 
                key={card.title}
                className="bg-gray-50 p-10 rounded-2xl text-center hover:bg-primary hover:-translate-y-2 hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 mx-auto mb-5 bg-primary rounded-full flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
                  <card.icon size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-white mb-3 transition-colors">
                  {card.title}
                </h4>
                {card.lines.map((line) => (
                  card.isLink ? (
                    <a 
                      key={line}
                      href={`${card.linkType}:${line}`}
                      className="block text-gray-600 group-hover:text-white/90 text-sm transition-colors"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={line} className="text-gray-600 group-hover:text-white/90 text-sm transition-colors">
                      {line}
                    </p>
                  )
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <span className="section-tag">Reach Us</span>
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Whether you&apos;re a prospective parent, a current family member, or just interested 
                in learning more about KMC Public School, we&apos;re here to help.
              </p>

              {/* Departments */}
              <div className="space-y-6 mb-10">
                {departments.map((dept) => (
                  <div 
                    key={dept.title}
                    className="p-5 bg-white rounded-xl border-l-4 border-primary"
                  >
                    <h4 className="flex items-center gap-3 text-primary font-semibold mb-2">
                      <dept.icon size={20} />
                      {dept.title}
                    </h4>
                    <p className="text-gray-500 text-sm mb-2">{dept.description}</p>
                    <a 
                      href={dept.contact.includes('@') ? `mailto:${dept.contact}` : `tel:${dept.contact}`}
                      className="text-gray-900 font-medium text-sm hover:text-primary"
                    >
                      {dept.contact}
                    </a>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Connect with Us</h4>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: schoolInfo.social.facebook },
                    { icon: Instagram, href: schoolInfo.social.instagram },
                    { icon: Youtube, href: schoolInfo.social.youtube },
                    { icon: Twitter, href: schoolInfo.social.twitter },
                    { icon: Linkedin, href: schoolInfo.social.linkedin },
                  ].map((social, i) => (
                    <a 
                      key={i}
                      href={social.href}
                      className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark hover:-translate-y-1 transition-all"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-heading font-bold text-center mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type *</label>
                    <select
                      required
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    >
                      <option value="">Select Type</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="general">General Inquiry</option>
                      <option value="visit">Schedule Campus Visit</option>
                      <option value="feedback">Feedback</option>
                      <option value="careers">Career Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none resize-none"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section>
        <div className="bg-primary py-8 text-center">
          <h3 className="text-2xl font-heading font-bold text-white mb-2">Find Us on Map</h3>
          <p className="text-white/90">KMC Public School, Perumanallur, Tirupur - 641666, Tamil Nadu</p>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.5449789461584!2d77.29!3d11.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA5JzAwLjAiTiA3N8KwMTcnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        
        {/* Directions */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {directions.map((dir) => (
                <div key={dir.title} className="bg-white p-8 rounded-2xl text-center">
                  <dir.icon size={40} className="mx-auto mb-5 text-primary" />
                  <h4 className="font-semibold text-gray-900 mb-3">{dir.title}</h4>
                  <p className="text-gray-600 text-sm">{dir.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-heading font-bold text-white mb-3">Schedule a Campus Visit</h2>
              <p className="text-white/90">Experience our world-class facilities and meet our faculty.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/admissions#apply" className="btn btn-primary bg-secondary border-secondary text-gray-900 hover:bg-secondary-dark hover:border-secondary-dark">
                Book a Visit
              </Link>
              <a href={`tel:${schoolInfo.contact.phone[0]}`} className="btn btn-outline">
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
