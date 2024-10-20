import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <div className=''>
        <header className="py-6 max-w-5xl border-b mx-auto">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="mt-2">Effective Date: 21-10-2024</p>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 py-8">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <p>At MyMeghalaya.in, accessible from <a href="https://www.mymeghalaya.in" className="text-blue-600 hover:underline">https://www.mymeghalaya.in</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that are collected and recorded by MyMeghalaya.in and how we use it.</p>
          </section>

          <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <ul className="list-disc ml-5 mt-2">
              <li><strong>Personal Information:</strong> When you sign up or contact us, we may collect personal details such as your name, email address, and any other information you choose to provide.</li>
              <li><strong>Usage Data:</strong> We automatically collect information about how you interact with our website, such as your IP address, browser type, operating system, and browsing behavior.</li>
              <li><strong>Cookies:</strong> We use cookies and similar technologies to track activity on our website and improve user experience.</li>
            </ul>
          </section>

          <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <p>Your information is used in the following ways:</p>
            <ul className="list-disc ml-5 mt-2">
              <li>To provide, operate, and maintain our website and services.</li>
              <li>To improve, personalize, and expand our services.</li>
              <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide updates, or for marketing purposes.</li>
              <li>To process and manage your requests, including trip planning or other services offered through the site.</li>
            </ul>
          </section>

          <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">3. Sharing Your Information</h2>
            <p>We may share your information with trusted third-party service providers to help us operate our website and improve our services, such as:</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Analytics providers to understand website usage and improve user experience.</li>
              <li>Payment processors, if applicable, to handle financial transactions.</li>
              <li>Other third parties to comply with legal obligations or protect against fraud.</li>
            </ul>
          </section>

          <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">4. User Rights</h2>
            <p>As a user, you have the right to:</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Access the personal information we hold about you.</li>
              <li>Request correction or deletion of your personal information.</li>
              <li>Withdraw consent for processing your information, where applicable.</li>
            </ul>
            <p>If you would like to exercise any of these rights, please contact us at <a href="mailto:care.jyotirmoy@gmail.com" className="text-blue-600 hover:underline">care.jyotirmoy@gmail.com</a>.</p>
          </section>

          <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">5. Security of Your Data</h2>
            <p>We use industry-standard security measures to protect your personal information. Our website is built on secure technologies, and we use <strong>Supabase</strong> to store and manage your data securely. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
            <p>We use cookies to improve user experience by remembering your preferences and tracking site usage. You can choose to disable cookies through your browser settings, but doing so may affect your ability to use certain features on our website.</p>
          </section>

          <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">7. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. If we make significant changes, we will notify you via email. Please review this policy periodically for any updates.</p>
          </section>

          <section className="bg-white p-6 mt-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:care.jyotirmoy@gmail.com" className="text-blue-600 hover:underline">care.jyotirmoy@gmail.com</a>.</p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default page
