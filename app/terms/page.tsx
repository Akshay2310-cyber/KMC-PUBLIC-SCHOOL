import { Metadata } from 'next'
import { FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using KMC Public School website.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <FileText className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-secondary" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">Terms of Service</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Please read these terms carefully before using our website
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 space-y-8">
            
            <div>
              <p className="text-gray-600 mb-4">
                <strong>Effective Date:</strong> March 2024
              </p>
              <p className="text-gray-700 leading-relaxed">
                Welcome to KMC Public School&apos;s website. By accessing and using this website, you accept and agree to be 
                bound by the terms and provisions of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Use of Website</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This website is provided for informational purposes regarding KMC Public School&apos;s programs, admissions, 
                and services. By using this website, you agree to use it only for lawful purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of 
                KMC Public School and is protected by copyright and intellectual property laws. Unauthorized use is prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">User Submissions</h2>
              <p className="text-gray-700 leading-relaxed">
                By submitting information through our contact forms or admission inquiries, you grant KMC Public School 
                the right to use this information for the purposes stated in our Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                The information on this website is provided &quot;as is&quot; without warranties of any kind. While we strive to 
                keep the information accurate and up-to-date, KMC Public School makes no representations or warranties 
                about the completeness, reliability, or accuracy of this information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                KMC Public School shall not be liable for any direct, indirect, incidental, consequential, or punitive 
                damages arising out of your access to or use of this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">External Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to external websites. These links are provided for convenience only, and 
                KMC Public School does not endorse or take responsibility for the content of these external sites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Modifications</h2>
              <p className="text-gray-700 leading-relaxed">
                KMC Public School reserves the right to modify these terms at any time. Continued use of the website 
                after changes constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of India, and any disputes 
                shall be subject to the exclusive jurisdiction of the courts in Tirupur, Tamil Nadu.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>KMC Public School</strong></p>
                <p className="text-gray-700">Perumanallur, Tirupur - 641666, Tamil Nadu</p>
                <p className="text-gray-700">Phone: +91 421 222 0393</p>
                <p className="text-gray-700">Email: info@kmcpublicschool.org</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
