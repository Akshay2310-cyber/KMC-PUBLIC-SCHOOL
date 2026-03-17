'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, ChevronDown, Menu, X } from 'lucide-react'
import { navigation, schoolInfo } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        'fixed top-[42px] left-0 right-0 z-50 bg-white transition-all duration-300',
        isScrolled ? 'shadow-md top-0' : 'shadow-sm'
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-hero text-xl font-bold text-primary leading-tight" style={{ letterSpacing: '-0.5px' }}>
                {schoolInfo.name}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                {schoolInfo.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navigation.main.map((item) => (
              <li 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2.5 text-[15px] font-medium transition-colors',
                    pathname === item.href ? 'text-primary' : 'text-gray-700 hover:text-primary'
                  )}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />}
                </Link>

                {/* Dropdown */}
                {item.dropdown && (
                  <div className={cn(
                    'absolute top-full left-0 min-w-[250px] bg-white rounded-lg shadow-xl py-4 transition-all duration-200',
                    activeDropdown === item.name 
                      ? 'opacity-100 visible translate-y-0' 
                      : 'opacity-0 invisible translate-y-2'
                  )}>
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-5 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 hover:pl-7 transition-all"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors">
              <Search size={20} />
            </button>
            <Link href="/admissions" className="hidden md:inline-flex btn btn-primary">
              Apply Now
            </Link>
            <button 
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[calc(80px+42px)] bg-white z-50 overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            {navigation.main.map((item) => (
              <div key={item.name} className="border-b border-gray-100">
                <Link
                  href={item.href}
                  className="block py-4 text-lg font-medium text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <Link 
              href="/admissions" 
              className="btn btn-primary w-full mt-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
