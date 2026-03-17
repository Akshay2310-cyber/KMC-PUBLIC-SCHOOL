import type { Metadata } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: {
    default: 'KMC Public School | Excellence in Education',
    template: '%s | KMC Public School',
  },
  description: 'KMC Public School - An exclusive CBSE school in Tirupur providing world-class education from Pre-KG to Grade XII with international standards.',
  keywords: ['KMC Public School', 'CBSE School Tirupur', 'Best School in Tirupur', 'International School Award', 'STEM Education'],
  authors: [{ name: 'KMC Public School' }],
  openGraph: {
    title: 'KMC Public School | Excellence in Education',
    description: 'An exclusive CBSE school in Tirupur providing world-class education from Pre-KG to Grade XII.',
    url: 'https://www.kmcpublicschool.org',
    siteName: 'KMC Public School',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
