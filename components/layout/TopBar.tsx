'use client'

import Link from 'next/link'
import { Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'
import { schoolInfo, navigation } from '@/lib/constants'

export default function TopBar() {
  return (
    <div className="bg-gray-900 text-white py-2.5 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${schoolInfo.contact.phone[0]}`} 
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Phone size={14} />
              <span>{schoolInfo.contact.phone[0]}</span>
            </a>
            <a 
              href={`mailto:${schoolInfo.contact.email}`}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Mail size={14} />
              <span>{schoolInfo.contact.email}</span>
            </a>
          </div>

          {/* Quick Links & Social */}
          <div className="flex items-center gap-5">
            {navigation.quickLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-secondary transition-colors px-2 border-r border-white/20 last:border-0"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-3 ml-2">
              <a 
                href={schoolInfo.social.facebook} 
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:-translate-y-0.5 transition-all"
              >
                <Facebook size={14} />
              </a>
              <a 
                href={schoolInfo.social.instagram}
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:-translate-y-0.5 transition-all"
              >
                <Instagram size={14} />
              </a>
              <a 
                href={schoolInfo.social.youtube}
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:-translate-y-0.5 transition-all"
              >
                <Youtube size={14} />
              </a>
              <a 
                href={schoolInfo.social.twitter}
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:-translate-y-0.5 transition-all"
              >
                <Twitter size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
