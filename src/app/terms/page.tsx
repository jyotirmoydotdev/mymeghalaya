import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <header className="py-6">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <p>Welcome to MyMeghalaya.in! By accessing or using our website, you agree to comply with and be bound by the following Terms of Service ("Terms"). Please review these Terms carefully before using our services.</p>
        </section>

        <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p>By accessing or using MyMeghalaya.in (the “Site”), you agree to these Terms of Service and any additional terms that may apply. If you do not agree to these terms, you may not use our services.</p>
        </section>

        <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">2. Changes to Terms</h2>
          <p>We reserve the right to modify or update these Terms at any time. Any changes will be effective immediately upon posting the updated Terms on our website. Continued use of the Site following such changes constitutes your acceptance of the updated Terms.</p>
        </section>

        <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">3. Use of the Site</h2>
          <p>You agree to use the Site for lawful purposes only and in a way that does not infringe on the rights of others or restrict their use and enjoyment of the Site. You agree not to engage in any activity that could damage, disable, overburden, or impair the functioning of the Site.</p>
        </section>

        <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">4. User Accounts</h2>
          <p>If you create an account on MyMeghalaya.in, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. We reserve the right to suspend or terminate accounts that are suspected of fraudulent or unauthorized use.</p>
        </section>

        <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
          <p>All content on the Site, including but not limited to text, images, logos, and designs, are the intellectual property of MyMeghalaya.in or its content providers. You may not copy, modify, distribute, or use any content from the Site without prior written consent.</p>
        </section>

        <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">6. Links to Third-Party Sites</h2>
          <p>Our website may contain links to third-party websites or services that are not owned or controlled by MyMeghalaya.in. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that MyMeghalaya.in is not liable for any damage or loss caused by the use of such third-party sites or services.</p>
        </section>

        <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, MyMeghalaya.in shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of or inability to use the Site or services.</p>
        </section>

        <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from or in connection with these Terms will be subject to the exclusive jurisdiction of the courts located in Meghalaya, India.</p>
        </section>

        <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
          <p>We reserve the right to terminate or suspend your access to the Site without prior notice or liability for any reason, including violation of these Terms.</p>
        </section>

        <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at <a href="mailto:care.jyotirmoy@gmail.com" className="text-blue-600 hover:underline">care.jyotirmoy@gmail.com</a>.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default page
