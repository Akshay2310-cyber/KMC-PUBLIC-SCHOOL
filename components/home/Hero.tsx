'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Play, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const heroSlides = [
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=2000',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=2000',
  'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=2000',
  'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=2000',
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
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-dark/80 to-gray-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <p className="text-lg md:text-xl font-light mb-4 opacity-90 animate-fade-up">
          Welcome to
        </p>
        <h1 className="text-5xl md:text-7xl hero-title mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          KMC Public School
        </h1>
        <p className="text-xl md:text-2xl font-light text-secondary mb-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          Where Excellence Meets Education
        </p>
        <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          An exclusive CBSE school in Tirupur providing world-class education with international standards since 2008
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <Link href="/about" className="btn btn-primary btn-lg">
            Discover KMC
          </Link>
          <button className="btn btn-outline btn-lg group">
            <span className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
              <Play size={16} className="ml-0.5" />
            </span>
            Virtual Tour
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-center z-10">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full mx-auto mb-2 relative">
          <div className="w-1 h-2 bg-white rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-scroll" />
        </div>
        <span className="text-xs uppercase tracking-widest opacity-70">Scroll to explore</span>
      </div>
    </section>
  )
}
