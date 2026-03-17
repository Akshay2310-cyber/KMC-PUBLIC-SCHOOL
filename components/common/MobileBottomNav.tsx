'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Info, GraduationCap, Phone, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function MobileBottomNav() {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Info, label: 'About', href: '/about' },
    { icon: GraduationCap, label: 'Admissions', href: '/admissions' },
    { icon: Phone, label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors',
                isActive
                  ? 'text-primary bg-primary/5'
                  : 'text-gray-600 hover:text-primary hover:bg-gray-50'
              )}
            >
              <Icon className={cn('w-5 h-5', isActive && 'scale-110')} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
