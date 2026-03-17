import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Eye, Target, BookOpen, HandHeart, Users, 
  Lightbulb, Heart, Globe, GraduationCap, Check 
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about KMC Public School - Our history, vision, mission, and leadership. A premier CBSE school in Tirupur since 2008.',
}

const coreValues = [
  { icon: BookOpen, title: 'Excellence', description: 'Striving for the highest standards in academics and character development' },
  { icon: HandHeart, title: 'Integrity', description: 'Upholding honesty, ethics, and moral principles in all actions' },
  { icon: Users, title: 'Respect', description: 'Valuing diversity and treating everyone with dignity and consideration' },
  { icon: Lightbulb, title: 'Innovation', description: 'Embracing creative thinking and technological advancement' },
  { icon: Heart, title: 'Compassion', description: 'Fostering empathy and care for others in our community' },
  { icon: Globe, title: 'Global Outlook', description: 'Preparing students for success in an interconnected world' },
]

const whyChoose = [
  { number: '01', title: 'Small Class Sizes', description: 'Maximum 30 students per class ensuring personalized attention' },
  { number: '02', title: 'Experienced Faculty', description: 'Qualified teachers with expertise and passion for teaching' },
  { number: '03', title: 'Modern Infrastructure', description: 'State-of-the-art facilities including smart classrooms and labs' },
  { number: '04', title: 'International Exposure', description: 'British Council ISA certification bringing global perspectives' },
  { number: '05', title: 'STEM Focus', description: 'Award-winning STEM education with robotics and technology' },
  { number: '06', title: 'Holistic Development', description: 'Balance of academics, sports, arts, and character building' },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[450px] flex items-center mt-[122px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=2000")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/85" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <nav className="flex justify-center gap-2 mb-6 text-sm">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-secondary">About Us</span>
          </nav>
          <h1 className="text-5xl hero-title mb-4">About KMC Public School</h1>
          <p className="text-xl text-white/90">A legacy of excellence in education since 2008</p>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="section-tag">Our Story</span>
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                Building Tomorrow&apos;s Leaders Today
              </h2>
              <p className="text-xl text-gray-700 font-medium mb-6 leading-relaxed">
                KMC Public School, established in 2008, is named after Shri. M. Chinnaswamy Gounder, 
                a great philanthropist and visionary who dreamed of providing world-class education 
                to the children of Tirupur.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As an exclusive CBSE school in Tirupur, we are committed to serving the student 
                community with the highest level of educational standards matching international levels.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a personalized approach limiting class strength to 30 students maximum, we ensure 
                every child receives individual attention and care.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <GraduationCap size={28} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">CBSE Curriculum</h4>
                    <p className="text-gray-600 text-sm">Comprehensive education from Pre-KG to Grade XII</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Globe size={28} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">International Recognition</h4>
                    <p className="text-gray-600 text-sm">British Council ISA Award holder</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800"
                  alt="KMC Campus"
                  width={800}
                  height={600}
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-secondary text-gray-900 p-8 rounded-2xl shadow-xl">
                <span className="block text-5xl font-heading font-bold leading-none">15+</span>
                <span className="text-sm font-semibold uppercase tracking-wider">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gray-50" id="vision">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Vision */}
            <div className="bg-white p-12 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-primary-light" />
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-primary mb-8">
                <Eye size={36} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">Our Vision</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                First and foremost, the school aims to create a community of well-rounded individuals, 
                where a spirit of cooperation and mutual respect exists among the students and teachers.
              </p>
              <ul className="space-y-3">
                {['Foster holistic development', 'Encourage critical thinking', 'Build strong character', 'Prepare global citizens'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <Check size={18} className="text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission */}
            <div className="bg-white p-12 rounded-2xl shadow-lg relative overflow-hidden" id="mission">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary to-secondary-dark" />
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-secondary-dark mb-8">
                <Target size={36} />
              </div>
              <h3 className="text-2xl font-heading font-bold text-secondary-dark mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To provide quality education that develops intellectual, physical, emotional, and social 
                abilities of every student. We are committed to creating a nurturing environment.
              </p>
              <ul className="space-y-3">
                {['Deliver academic excellence', 'Promote ethical values', 'Encourage innovation', 'Develop leadership skills'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <Check size={18} className="text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-tag">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div 
                key={value.title}
                className="bg-gray-50 p-10 rounded-2xl text-center hover:bg-white hover:border-primary border-2 border-transparent hover:-translate-y-2 hover:shadow-lg transition-all"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white">
                  <value.icon size={32} />
                </div>
                <h4 className="text-xl font-heading font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="section-tag text-secondary">Why KMC</span>
            <h2 className="section-title section-title-light">Why Choose KMC Public School</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item) => (
              <div 
                key={item.number}
                className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl border border-white/20 hover:bg-white/15 hover:-translate-y-1 transition-all"
              >
                <span className="text-4xl font-heading font-bold text-secondary mb-4 block">
                  {item.number}
                </span>
                <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            Ready to Join the KMC Family?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how KMC Public School can shape your child&apos;s future with world-class education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="btn btn-primary btn-lg">
              Apply for Admission
            </Link>
            <Link href="/contact" className="btn btn-secondary btn-lg">
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
