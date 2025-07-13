import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-pink-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6">
          <h1 className="text-3xl font-bold text-pink-600 text-center">Contact Us</h1>
          <p className="text-center text-gray-600">
            Have questions, feedback, or need assistance? We’re here to help!
          </p>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full border border-pink-200 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 px-4 py-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full border border-pink-200 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 px-4 py-2"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                required
                className="mt-1 block w-full border border-pink-200 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 px-4 py-2"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white font-semibold py-2 rounded-md hover:bg-pink-700 transition"
            >
              Send Message
            </button>
          </form>

          <div className="text-center text-sm text-gray-500 pt-4">
            📍 123 BraBliss Avenue, Fashion City, 90210<br />
            📞 +1 (800) 123-4567<br />
            📧 support@brabliss.com
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
