import type { Metadata } from 'next'
import { Inter, Libre_Baskerville, Merriweather } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
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
    <html lang="en" className={`${inter.variable} ${libreBaskerville.variable} ${merriweather.variable}`}>
      <body>
        <TopBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
