import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'
import { schoolInfo } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="py-6 sm:py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-10">
            {/* About */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1">
              <div className="flex flex-col mb-2 sm:mb-4 md:mb-6">
                <span className="font-hero text-sm sm:text-lg md:text-xl font-bold text-white leading-tight" style={{ letterSpacing: '-0.5px' }}>
                  {schoolInfo.name}
                </span>
                <span className="text-[8px] sm:text-[10px] md:text-xs text-white/80 uppercase tracking-wider">
                  {schoolInfo.tagline}
                </span>
              </div>
              <p className="text-white/80 text-[10px] sm:text-xs md:text-sm leading-relaxed mb-2 sm:mb-4 md:mb-6 hidden sm:block">
                KMC Public School, established in 2008, is an exclusive CBSE school in Tirupur 
                committed to providing world-class education with international standards.
              </p>
              <div className="flex gap-1.5 sm:gap-2 md:gap-3">
                <a href={schoolInfo.social.facebook} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary-dark hover:-translate-y-1 transition-all duration-300">
                  <Facebook size={12} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
                </a>
                <a href={schoolInfo.social.instagram} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary-dark hover:-translate-y-1 transition-all duration-300">
                  <Instagram size={12} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
                </a>
                <a href={schoolInfo.social.youtube} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary-dark hover:-translate-y-1 transition-all duration-300">
                  <Youtube size={12} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
                </a>
                <a href={schoolInfo.social.twitter} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary-dark hover:-translate-y-1 transition-all duration-300">
                  <Twitter size={12} className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[10px] sm:text-sm md:text-lg font-semibold mb-2 sm:mb-4 md:mb-6 border-b border-secondary sm:border-b-2 pb-1 sm:pb-2 inline-block">Quick Links</h4>
              <ul className="space-y-1 sm:space-y-2 md:space-y-3">
                {['About Us', 'Admissions', 'Academics', 'Gallery', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link 
                      href={`/${link.toLowerCase().replace(' ', '-')}`}
                      className="text-white/80 text-[10px] sm:text-xs md:text-sm hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-1 sm:gap-2"
                    >
                      <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 bg-secondary rounded-full"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academics */}
            <div>
              <h4 className="text-[10px] sm:text-sm md:text-lg font-semibold mb-2 sm:mb-4 md:mb-6 border-b border-secondary sm:border-b-2 pb-1 sm:pb-2 inline-block">Academics</h4>
              <ul className="space-y-1 sm:space-y-2 md:space-y-3">
                {['Pre-Primary', 'Primary', 'Middle School', 'Secondary', 'Senior Sec.'].map((link) => (
                  <li key={link}>
                    <Link 
                      href="/#programs"
                      className="text-white/80 text-[10px] sm:text-xs md:text-sm hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-1 sm:gap-2"
                    >
                      <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 bg-secondary rounded-full"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources - Hidden on smallest mobile */}
            <div className="hidden sm:block">
              <h4 className="text-[10px] sm:text-sm md:text-lg font-semibold mb-2 sm:mb-4 md:mb-6 border-b border-secondary sm:border-b-2 pb-1 sm:pb-2 inline-block">Resources</h4>
              <ul className="space-y-1 sm:space-y-2 md:space-y-3">
                {['Fee Structure', 'Brochure', 'Calendar', 'Careers'].map((link) => (
                  <li key={link}>
                    <Link 
                      href="#"
                      className="text-white/80 text-[10px] sm:text-xs md:text-sm hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-1 sm:gap-2"
                    >
                      <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 bg-secondary rounded-full"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1">
              <h4 className="text-[10px] sm:text-sm md:text-lg font-semibold mb-2 sm:mb-4 md:mb-6 border-b border-secondary sm:border-b-2 pb-1 sm:pb-2 inline-block">Contact Info</h4>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                <li className="flex gap-1.5 sm:gap-2 md:gap-3">
                  <div className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={10} className="text-secondary sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
                  </div>
                  <span className="text-white/80 text-[10px] sm:text-xs md:text-sm">
                    {schoolInfo.address.city} - {schoolInfo.address.pincode}, {schoolInfo.address.state}
                  </span>
                </li>
                <li className="flex gap-1.5 sm:gap-2 md:gap-3 items-center">
                  <div className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={10} className="text-secondary sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
                  </div>
                  <span className="text-white/80 text-[10px] sm:text-xs md:text-sm">{schoolInfo.contact.phone[0]}</span>
                </li>
                <li className="flex gap-1.5 sm:gap-2 md:gap-3 items-center">
                  <div className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={10} className="text-secondary sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
                  </div>
                  <span className="text-white/80 text-[10px] sm:text-xs md:text-sm break-all">{schoolInfo.contact.email}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary-dark py-2 sm:py-4 md:py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
            <p className="text-white/80 text-[10px] sm:text-xs md:text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} KMC Public School. All Rights Reserved.
            </p>
            <div className="flex gap-3 sm:gap-4 md:gap-6 flex-wrap justify-center">
              <Link href="#" className="text-white/80 text-[10px] sm:text-xs md:text-sm hover:text-secondary transition-colors duration-300">
                Privacy
              </Link>
              <Link href="#" className="text-white/80 text-[10px] sm:text-xs md:text-sm hover:text-secondary transition-colors duration-300">
                Terms
              </Link>
              <Link href="#" className="text-white/80 text-[10px] sm:text-xs md:text-sm hover:text-secondary transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
