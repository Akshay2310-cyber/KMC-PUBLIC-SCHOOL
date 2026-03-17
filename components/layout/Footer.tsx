import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'
import { schoolInfo } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* About */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center text-primary font-heading font-bold text-lg shadow-lg">
                  KMC
                </div>
                <div className="flex flex-col">
                  <span className="font-heading text-xl font-bold text-white leading-tight">
                    {schoolInfo.name}
                  </span>
                  <span className="text-xs text-white/80 uppercase tracking-wider">
                    {schoolInfo.tagline}
                  </span>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                KMC Public School, established in 2008, is an exclusive CBSE school in Tirupur 
                committed to providing world-class education with international standards.
              </p>
              <div className="flex gap-3">
                <a href={schoolInfo.social.facebook} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary-dark hover:-translate-y-1 transition-all duration-300">
                  <Facebook size={18} />
                </a>
                <a href={schoolInfo.social.instagram} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary-dark hover:-translate-y-1 transition-all duration-300">
                  <Instagram size={18} />
                </a>
                <a href={schoolInfo.social.youtube} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary-dark hover:-translate-y-1 transition-all duration-300">
                  <Youtube size={18} />
                </a>
                <a href={schoolInfo.social.twitter} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary-dark hover:-translate-y-1 transition-all duration-300">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 border-b-2 border-secondary pb-2 inline-block">Quick Links</h4>
              <ul className="space-y-3">
                {['About Us', 'Admissions', 'Academics', 'Activities', 'Gallery', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link 
                      href={`/${link.toLowerCase().replace(' ', '-')}`}
                      className="text-white/80 text-sm hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academics */}
            <div>
              <h4 className="text-lg font-semibold mb-6 border-b-2 border-secondary pb-2 inline-block">Academics</h4>
              <ul className="space-y-3">
                {['Pre-Primary', 'Primary School', 'Middle School', 'Secondary School', 'Senior Secondary', 'NIOS'].map((link) => (
                  <li key={link}>
                    <Link 
                      href="/#programs"
                      className="text-white/80 text-sm hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6 border-b-2 border-secondary pb-2 inline-block">Resources</h4>
              <ul className="space-y-3">
                {['Fee Structure', 'Download Brochure', 'Calendar', 'Careers', 'Press Release', 'Mandatory Disclosure'].map((link) => (
                  <li key={link}>
                    <Link 
                      href="#"
                      className="text-white/80 text-sm hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6 border-b-2 border-secondary pb-2 inline-block">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-secondary" />
                  </div>
                  <span className="text-white/80 text-sm">
                    {schoolInfo.address.street}, {schoolInfo.address.city} - {schoolInfo.address.pincode}<br />
                    {schoolInfo.address.state}, {schoolInfo.address.country}
                  </span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-secondary" />
                  </div>
                  <span className="text-white/80 text-sm">{schoolInfo.contact.phone[0]}</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-secondary" />
                  </div>
                  <span className="text-white/80 text-sm">{schoolInfo.contact.email}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary-dark py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/80 text-sm">
              &copy; {new Date().getFullYear()} KMC Public School. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-white/80 text-sm hover:text-secondary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/80 text-sm hover:text-secondary transition-colors duration-300">
                Terms of Use
              </Link>
              <Link href="#" className="text-white/80 text-sm hover:text-secondary transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
