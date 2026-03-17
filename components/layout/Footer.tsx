import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'
import { schoolInfo } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="py-10 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
            {/* About */}
            <div className="lg:col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col mb-4 sm:mb-6">
                <span className="font-hero text-lg sm:text-xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.5px' }}>
                  {schoolInfo.name}
                </span>
                <span className="text-[10px] sm:text-xs text-white/80 uppercase tracking-wider">
                  {schoolInfo.tagline}
                </span>
              </div>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                KMC Public School, established in 2008, is an exclusive CBSE school in Tirupur 
                committed to providing world-class education with international standards.
              </p>
              <div className="flex gap-2 sm:gap-3">
                <a href={schoolInfo.social.facebook} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary-dark hover:-translate-y-1 transition-all duration-300">
                  <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
                <a href={schoolInfo.social.instagram} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary-dark hover:-translate-y-1 transition-all duration-300">
                  <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
                <a href={schoolInfo.social.youtube} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary-dark hover:-translate-y-1 transition-all duration-300">
                  <Youtube size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
                <a href={schoolInfo.social.twitter} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary-dark hover:-translate-y-1 transition-all duration-300">
                  <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 border-b-2 border-secondary pb-2 inline-block">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                {['About Us', 'Admissions', 'Academics', 'Activities', 'Gallery', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link 
                      href={`/${link.toLowerCase().replace(' ', '-')}`}
                      className="text-white/80 text-xs sm:text-sm hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-secondary rounded-full"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academics */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 border-b-2 border-secondary pb-2 inline-block">Academics</h4>
              <ul className="space-y-2 sm:space-y-3">
                {['Pre-Primary', 'Primary School', 'Middle School', 'Secondary School', 'Senior Secondary', 'NIOS'].map((link) => (
                  <li key={link}>
                    <Link 
                      href="/#programs"
                      className="text-white/80 text-xs sm:text-sm hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-secondary rounded-full"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 border-b-2 border-secondary pb-2 inline-block">Resources</h4>
              <ul className="space-y-2 sm:space-y-3">
                {['Fee Structure', 'Download Brochure', 'Calendar', 'Careers', 'Press Release', 'Mandatory Disclosure'].map((link) => (
                  <li key={link}>
                    <Link 
                      href="#"
                      className="text-white/80 text-xs sm:text-sm hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-secondary rounded-full"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 border-b-2 border-secondary pb-2 inline-block">Contact Info</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-secondary sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <span className="text-white/80 text-xs sm:text-sm">
                    {schoolInfo.address.street}, {schoolInfo.address.city} - {schoolInfo.address.pincode}<br />
                    {schoolInfo.address.state}, {schoolInfo.address.country}
                  </span>
                </li>
                <li className="flex gap-2 sm:gap-3 items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-secondary sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <span className="text-white/80 text-xs sm:text-sm">{schoolInfo.contact.phone[0]}</span>
                </li>
                <li className="flex gap-2 sm:gap-3 items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-secondary sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <span className="text-white/80 text-xs sm:text-sm break-all">{schoolInfo.contact.email}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary-dark py-4 sm:py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-white/80 text-xs sm:text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} KMC Public School. All Rights Reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
              <Link href="#" className="text-white/80 text-xs sm:text-sm hover:text-secondary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/80 text-xs sm:text-sm hover:text-secondary transition-colors duration-300">
                Terms of Use
              </Link>
              <Link href="#" className="text-white/80 text-xs sm:text-sm hover:text-secondary transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
