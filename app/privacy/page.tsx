import { Metadata } from 'next'
import { Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for KMC Public School website and data handling practices.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-secondary" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Your privacy is important to us
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 space-y-8">
            
            <div>
              <p className="text-gray-600 mb-4">
                <strong>Last Updated:</strong> March 2024
              </p>
              <p className="text-gray-700 leading-relaxed">
                KMC Public School (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates https://kmc-public-school.vercel.app (the &quot;Website&quot;). 
                This page informs you of our policies regarding the collection, use, and disclosure of personal information 
                we receive from users of the Website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect several different types of information for various purposes to provide and improve our service to you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Personal identification information (Name, email address, phone number)</li>
                <li>Information submitted through contact forms and admission enquiry forms</li>
                <li>Usage data and analytics (pages visited, time spent, device information)</li>
                <li>Cookies and tracking technologies</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>To process admission inquiries and applications</li>
                <li>To respond to your questions and provide customer support</li>
                <li>To send administrative information and updates about the school</li>
                <li>To improve our website and services</li>
                <li>To send promotional communications (with your consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate security measures to protect your personal information. However, no method of 
                transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                of these external sites. We encourage you to review their privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are intended for parents and guardians. We do not knowingly collect personal information 
                from children under 13 without parental consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for data processing</li>
                <li>Opt-out of promotional communications</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-primary mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>KMC Public School</strong></p>
                <p className="text-gray-700">Perumanallur, Tirupur - 641666, Tamil Nadu</p>
                <p className="text-gray-700">Phone: +91 421 222 0393</p>
                <p className="text-gray-700">Email: info@kmcpublicschool.org</p>
              </div>
            </div>

            <div className="border-t pt-6">
              <p className="text-sm text-gray-600">
                We reserve the right to update this privacy policy at any time. We will notify you of any changes 
                by posting the new policy on this page and updating the &quot;Last Updated&quot; date.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
