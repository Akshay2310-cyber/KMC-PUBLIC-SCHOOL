import type { Metadata } from 'next'
import { Inter, Libre_Baskerville, Merriweather } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TopBar from '@/components/layout/TopBar'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import StructuredData from '@/components/seo/StructuredData'
import CBSEBadge from '@/components/common/CBSEBadge'
import MobileBottomNav from '@/components/common/MobileBottomNav'

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
    default: 'KMC Public School | Best CBSE School in Tirupur | Excellence in Education',
    template: '%s | KMC Public School',
  },
  description: 'KMC Public School - Best CBSE School in Tirupur, Tamil Nadu. Providing world-class education from Pre-KG to Grade XII with international standards. CBSE Affiliation, British Council ISA Award Winner.',
  keywords: [
    'KMC Public School',
    'CBSE School Tirupur',
    'Best School in Tirupur',
    'Top School in Tirupur',
    'International School Award',
    'STEM Education',
    'Perumanallur School',
    'CBSE School Tamil Nadu',
    'Best CBSE School near me',
    'Tirupur School Admission',
    'British Council Award School',
    'திருப்பூர் சிறந்த பள்ளி',
    'CBSE School Perumanallur'
  ],
  authors: [{ name: 'KMC Public School' }],
  creator: 'KMC Public School',
  publisher: 'KMC Public School',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://kmc-public-school.vercel.app',
  },
  openGraph: {
    title: 'KMC Public School | Best CBSE School in Tirupur',
    description: 'An exclusive CBSE school in Tirupur providing world-class education from Pre-KG to Grade XII with international standards.',
    url: 'https://kmc-public-school.vercel.app',
    siteName: 'KMC Public School',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/kmc-logo.png',
        width: 1200,
        height: 630,
        alt: 'KMC Public School Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KMC Public School | Best CBSE School in Tirupur',
    description: 'An exclusive CBSE school in Tirupur providing world-class education from Pre-KG to Grade XII.',
    images: ['/kmc-logo.png'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${libreBaskerville.variable} ${merriweather.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icons/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/icons/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body>
        <StructuredData />
        <TopBar />
        <CBSEBadge />
        <Header />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileBottomNav />
      </body>
    </html>
  )
}
