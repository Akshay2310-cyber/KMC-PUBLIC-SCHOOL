'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Megaphone, FileText, UserCheck, CheckCircle, 
  Baby, School, GraduationCap, BookOpen, Award,
  Atom, TrendingUp, Landmark, ChevronDown, Download
} from 'lucide-react'
import { schoolInfo } from '@/lib/constants'
import { cn } from '@/lib/utils'

const admissionSteps = [
  { number: 1, title: 'Submit Inquiry', description: 'Fill out the online inquiry form or visit our campus' },
  { number: 2, title: 'Application Form', description: 'Download and complete the application with documents' },
  { number: 3, title: 'Assessment', description: 'Students undergo age-appropriate assessment' },
  { number: 4, title: 'Confirmation', description: 'Complete fee payment and enrollment' },
]

const programs = [
  { icon: Baby, title: 'Pre-Primary', grades: 'Pre-KG, LKG, UKG', age: 'Age: 2.5 - 5 years' },
  { icon: School, title: 'Primary School', grades: 'Grade I to V', age: 'Age: 5 - 10 years' },
  { icon: BookOpen, title: 'Middle School', grades: 'Grade VI to VIII', age: 'Age: 10 - 13 years' },
  { icon: Award, title: 'Secondary', grades: 'Grade IX to X', age: 'CBSE Board' },
  { icon: GraduationCap, title: 'Senior Secondary', grades: 'Grade XI to XII', age: 'Science / Commerce / Humanities' },
]

const documents = [
  'Completed Application Form',
  'Birth Certificate (Original & Copy)',
  'Passport Size Photographs (4 copies)',
  'Transfer Certificate (for Grade II and above)',
  'Previous Year\'s Mark Sheet',
  'Aadhar Card Copy (Student & Parents)',
  'Community Certificate',
  'Medical Fitness Certificate',
]

const streams = [
  { 
    icon: Atom, 
    title: 'Science', 
    description: 'Prepare for engineering, medical, and pure sciences',
    subjects: ['Physics', 'Chemistry', 'Mathematics / Biology', 'Computer Science (Optional)', 'English']
  },
  { 
    icon: TrendingUp, 
    title: 'Commerce', 
    description: 'Build foundation for business, finance, and management',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics / IP', 'English']
  },
  { 
    icon: Landmark, 
    title: 'Humanities', 
    description: 'Explore arts, social sciences, and humanities',
    subjects: ['History', 'Political Science', 'Economics / Psychology', 'Sociology / Geography', 'English']
  },
]

const faqs = [
  { q: 'What is the admission age criteria?', a: 'For Pre-KG: 2.5 years, LKG: 3.5 years, UKG: 4.5 years as of June 1st of the admission year.' },
  { q: 'What is the medium of instruction?', a: 'The medium of instruction is English. We follow the CBSE curriculum with emphasis on bilingual education including Hindi.' },
  { q: 'Is transportation available?', a: 'Yes, we provide safe and comfortable transportation covering major areas in and around Tirupur. GPS-enabled buses ensure student safety.' },
  { q: 'What are the school timings?', a: 'School operates from 8:30 AM to 3:30 PM (Monday to Friday) and 8:30 AM to 12:30 PM on Saturdays.' },
  { q: 'What extra-curricular activities are offered?', a: 'We offer sports, arts, fitness (yoga, karate, skating), and clubs (robotics, Hindi, shooting).' },
  { q: 'Is hostel facility available?', a: 'Yes, we provide residential facilities with separate hostels for boys and girls, supervised by experienced wardens.' },
]

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    parentName: '',
    phone: '',
    email: '',
    grade: '',
    year: '2024-25',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! Our admissions team will contact you soon.')
  }

  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[450px] flex items-center mt-[122px]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=2000")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/85" />
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <nav className="flex justify-center gap-2 mb-6 text-sm">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-secondary">Admissions</span>
          </nav>
          <h1 className="text-5xl hero-title mb-4">Admissions 2024-25</h1>
          <p className="text-xl text-white/90">Begin your child&apos;s journey to excellence</p>
        </div>
      </section>

      {/* Announcement Banner */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-white/15 rounded-full flex items-center justify-center flex-shrink-0">
              <Megaphone size={36} className="text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Admissions Open for 2024-25</h3>
              <p className="text-white/90">We are now accepting applications for Pre-KG to Grade XII. Limited seats available!</p>
            </div>
            <Link href="#apply" className="btn btn-primary bg-secondary border-secondary text-gray-900 hover:bg-secondary-dark hover:border-secondary-dark flex-shrink-0">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-tag">How to Apply</span>
            <h2 className="section-title">Admission Process</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div 
                key={step.number}
                className="bg-gray-50 p-10 rounded-2xl text-center relative hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-heading font-bold">
                  {step.number}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Available */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-tag">Our Programs</span>
            <h2 className="section-title">Grades We Offer</h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {programs.map((program) => (
              <div 
                key={program.title}
                className="bg-white p-8 rounded-2xl text-center shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white">
                  <program.icon size={28} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{program.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{program.grades}</p>
                <span className="inline-block text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                  {program.age}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag">Requirements</span>
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">Documents Required</h2>
              <p className="text-gray-600 mb-8">
                Please ensure you have the following documents ready for the admission process:
              </p>
              <ul className="space-y-4 mb-8">
                {documents.map((doc) => (
                  <li key={doc} className="flex items-center gap-4 text-gray-700 border-b border-gray-100 pb-3">
                    <CheckCircle size={20} className="text-secondary flex-shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary">
                <Download size={18} />
                Download Application Form
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800"
                alt="Documentation"
                width={800}
                height={600}
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Streams Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-tag">Grade XI-XII</span>
            <h2 className="section-title">Senior Secondary Streams</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {streams.map((stream) => (
              <div 
                key={stream.title}
                className="bg-gray-50 p-10 rounded-2xl text-center hover:bg-white hover:border-primary border-2 border-transparent hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center text-white">
                  <stream.icon size={36} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-3">{stream.title}</h3>
                <p className="text-gray-600 mb-6">{stream.description}</p>
                <ul className="text-left space-y-2 mb-8">
                  {stream.subjects.map((subject) => (
                    <li key={subject} className="text-gray-600 text-sm border-b border-gray-200 pb-2">
                      {subject}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn btn-primary">
                  Inquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-gray-50" id="apply">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <span className="section-tag">Apply Online</span>
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">Start Your Application</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Fill out the inquiry form and our admissions team will guide you through the admission process.
              </p>

              <div className="bg-white p-8 rounded-2xl mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Admissions Office</h4>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Phone:</strong> {schoolInfo.contact.phone[0]}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <strong>Email:</strong> {schoolInfo.contact.admissionsEmail}
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Hours:</strong> Mon - Sat: 8:00 AM - 4:00 PM
                </p>
              </div>

              <div className="space-y-4">
                {['Quick Response within 24 hours', 'Campus Visit Scheduling', 'Personalized Guidance'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-secondary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-heading font-bold text-primary text-center mb-8">
                Admission Inquiry Form
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Student&apos;s Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                    <input
                      type="date"
                      required
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Parent&apos;s Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Grade Applying For *</label>
                    <select
                      required
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    >
                      <option value="">Select Grade</option>
                      {['Pre-KG', 'LKG', 'UKG', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'].map((g) => (
                        <option key={g} value={g}>Grade {g}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Academic Year</label>
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    >
                      <option value="2024-25">2024-25</option>
                      <option value="2025-26">2025-26</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none resize-none"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white" id="faq">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="section-tag">FAQs</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={cn(
                  'bg-gray-50 rounded-2xl overflow-hidden transition-all',
                  openFaq === index && 'shadow-lg'
                )}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <h4 className="font-semibold text-gray-900">{faq.q}</h4>
                  <ChevronDown 
                    size={20} 
                    className={cn(
                      'text-primary transition-transform',
                      openFaq === index && 'rotate-180'
                    )} 
                  />
                </button>
                <div className={cn(
                  'overflow-hidden transition-all',
                  openFaq === index ? 'max-h-40' : 'max-h-0'
                )}>
                  <p className="px-6 pb-6 text-gray-600">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
