'use client'

import { Award, Shield } from 'lucide-react'

export default function CBSEBadge() {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-2 sm:py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
            <span className="font-semibold">CBSE Affiliated School</span>
            <span className="hidden sm:inline text-white/80">| Affiliation No: 1930349</span>
          </div>
          
          <div className="hidden md:block w-px h-4 bg-white/30" />
          
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
            <span className="font-semibold">British Council ISA Award Winner</span>
            <span className="hidden lg:inline text-white/80">2016-2025</span>
          </div>
          
          <div className="hidden md:block w-px h-4 bg-white/30" />
          
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
            <span className="font-semibold">India STEM Award 2018</span>
          </div>
        </div>
      </div>
    </div>
  )
}
