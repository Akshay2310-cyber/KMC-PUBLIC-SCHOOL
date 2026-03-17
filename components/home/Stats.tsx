'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, Users, GraduationCap, Trophy, 
  FlaskConical, Dumbbell, Bus, Award 
} from 'lucide-react'
import { stats } from '@/lib/constants'

const iconMap: Record<string, React.ReactNode> = {
  'calendar': <Calendar size={28} />,
  'users': <Users size={28} />,
  'graduation-cap': <GraduationCap size={28} />,
  'trophy': <Trophy size={28} />,
  'flask': <FlaskConical size={28} />,
  'running': <Dumbbell size={28} />,
  'bus': <Bus size={28} />,
  'certificate': <Award size={28} />,
}

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const duration = 2000
          const increment = target / (duration / 16)
          
          const timer = setInterval(() => {
            start += increment
            if (start >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target, hasAnimated])

  return (
    <div ref={ref} className="text-5xl font-heading font-bold text-primary leading-none mb-3">
      {count}{suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=2000")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="section-tag">By The Numbers</span>
          <h2 className="section-title">KMC at a Glance</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const numericValue = parseInt(stat.number.replace(/\D/g, '')) || 100
            const suffix = stat.number.includes('+') ? '+' : stat.number.includes('%') ? '%' : ''
            
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white">
                  {iconMap[stat.icon]}
                </div>
                <CountUp target={numericValue} suffix={suffix} />
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
