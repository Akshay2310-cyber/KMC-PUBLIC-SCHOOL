'use client'

import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  
  // WhatsApp number (without + and spaces)
  const whatsappNumber = '919842222393' // Update this number as needed
  const message = encodeURIComponent('Hi, I would like to know more about admissions at KMC Public School.')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
      >
        {/* Tooltip */}
        <div
          className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
          }`}
        >
          Chat with us on WhatsApp
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="border-8 border-transparent border-l-gray-900" />
          </div>
        </div>

        {/* Button */}
        <div className="relative">
          {/* Pulse animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
          
          {/* Main button */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">
            <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
        </div>
      </a>
    </>
  )
}
