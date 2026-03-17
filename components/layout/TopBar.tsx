'use client'

import Link from 'next/link'
import { Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'
import { schoolInfo, navigation } from '@/lib/constants'

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-white py-2 text-xs sm:text-sm hidden sm:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Contact Info */}
          <div className="flex items-center gap-3 sm:gap-6">
            <a 
              href={`tel:${schoolInfo.contact.phone[0]}`} 
              className="flex items-center gap-1 sm:gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Phone size={12} className="sm:w-[14px] sm:h-[14px]" />
              <span className="hidden xs:inline">{schoolInfo.contact.phone[0]}</span>
            </a>
            <a 
              href={`mailto:${schoolInfo.contact.email}`}
              className="flex items-center gap-1 sm:gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Mail size={12} className="sm:w-[14px] sm:h-[14px]" />
              <span className="hidden sm:inline">{schoolInfo.contact.email}</span>
            </a>
          </div>

          {/* Quick Links & Social */}
          <div className="flex items-center gap-2 sm:gap-5">
            <div className="hidden md:flex items-center gap-2 sm:gap-5">
              {navigation.quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-secondary transition-colors px-1 sm:px-2 border-r border-white/20 last:border-0 text-xs sm:text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2 sm:gap-3 ml-1 sm:ml-2">
              <a 
                href={schoolInfo.social.facebook} 
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:-translate-y-0.5 transition-all"
              >
                <Facebook size={12} className="sm:w-[14px] sm:h-[14px]" />
              </a>
              <a 
                href={schoolInfo.social.instagram}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:-translate-y-0.5 transition-all"
              >
                <Instagram size={12} className="sm:w-[14px] sm:h-[14px]" />
              </a>
              <a 
                href={schoolInfo.social.youtube}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:-translate-y-0.5 transition-all"
              >
                <Youtube size={12} className="sm:w-[14px] sm:h-[14px]" />
              </a>
              <a 
                href={schoolInfo.social.twitter}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:-translate-y-0.5 transition-all"
              >
                <Twitter size={12} className="sm:w-[14px] sm:h-[14px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
