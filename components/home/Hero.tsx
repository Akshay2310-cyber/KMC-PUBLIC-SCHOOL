'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Play, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const heroSlides = [
  '/kmc-hero1.webp',
  '/kmc-hero2.webp',
  '/kmc-hero3.webp',
  '/kmc-hero4.webp',
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[70vh] min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] lg:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              'absolute inset-0 bg-cover bg-center transition-opacity duration-1000',
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            )}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto pt-16 sm:pt-0">
        <p className="text-sm sm:text-lg md:text-xl font-light mb-2 sm:mb-4 opacity-90 animate-fade-up">
          Welcome to
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-7xl hero-title mb-4 sm:mb-6 animate-fade-up text-[#D4AF37]" style={{ animationDelay: '0.2s' }}>
          KMC Public School
        </h1>
        <p className="text-base sm:text-xl md:text-2xl font-light text-secondary mb-2 sm:mb-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          Where Excellence Meets Education
        </p>
        <p className="text-sm sm:text-base md:text-lg opacity-90 max-w-2xl mx-auto mb-6 sm:mb-10 animate-fade-up px-2" style={{ animationDelay: '0.6s' }}>
          An exclusive CBSE school in Tirupur providing world-class education with international standards since 2008
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-up px-4 sm:px-0" style={{ animationDelay: '0.8s' }}>
          <Link href="/about" className="btn px-6 sm:px-9 py-3 sm:py-4 text-sm sm:text-base bg-[#D4AF37] text-white border-2 border-[#D4AF37] hover:bg-[#B8962D] hover:border-[#B8962D] hover:-translate-y-0.5 hover:shadow-lg">
            Discover KMC
          </Link>
          <button className="btn btn-outline px-6 sm:px-9 py-3 sm:py-4 text-sm sm:text-base group">
            <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
              <Play size={14} className="ml-0.5 sm:w-4 sm:h-4" />
            </span>
            Virtual Tour
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-white text-center z-10 hidden sm:block">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/60 rounded-full mx-auto mb-2 relative">
          <div className="w-1 h-2 bg-white rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-scroll" />
        </div>
        <span className="text-[10px] sm:text-xs uppercase tracking-widest opacity-70">Scroll to explore</span>
      </div>
    </section>
  )
}
