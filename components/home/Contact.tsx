'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { schoolInfo } from '@/lib/constants'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <section className="py-24 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Get in Touch</span>
            <h2 className="section-title text-left mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-10">
              We&apos;d love to hear from you. Reach out for admissions inquiries, general 
              information, or to schedule a campus visit.
            </p>

            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">
                    {schoolInfo.address.street}, {schoolInfo.address.city} - {schoolInfo.address.pincode}<br />
                    {schoolInfo.address.state}, {schoolInfo.address.country}
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">
                    {schoolInfo.contact.phone[0]}<br />
                    {schoolInfo.contact.phone[1]}
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">
                    {schoolInfo.contact.email}<br />
                    {schoolInfo.contact.admissionsEmail}
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Office Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: {schoolInfo.officeHours.weekdays}<br />
                    Saturday: {schoolInfo.officeHours.saturday}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-10"
          >
            <h3 className="text-2xl font-heading font-bold text-center mb-8">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors text-gray-600"
                >
                  <option value="">Select Inquiry Type</option>
                  <option value="admission">Admission Inquiry</option>
                  <option value="general">General Inquiry</option>
                  <option value="visit">Schedule Campus Visit</option>
                  <option value="careers">Career Opportunities</option>
                </select>
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
