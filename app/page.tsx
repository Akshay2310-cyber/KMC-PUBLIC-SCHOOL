import Hero from '@/components/home/Hero'
import Welcome from '@/components/home/Welcome'
import FocusAreas from '@/components/home/FocusAreas'
import Stats from '@/components/home/Stats'
import Awards from '@/components/home/Awards'
import Programs from '@/components/home/Programs'
import Activities from '@/components/home/Activities'
import Testimonials from '@/components/home/Testimonials'
import Gallery from '@/components/home/Gallery'
import CTA from '@/components/home/CTA'
import News from '@/components/home/News'
import Map from '@/components/home/Map'
import Contact from '@/components/home/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <FocusAreas />
      <Stats />
      <Awards />
      <Programs />
      <Activities />
      <Testimonials />
      <Gallery />
      <CTA />
      <News />
      <Map />
      <Contact />
    </>
  )
}
