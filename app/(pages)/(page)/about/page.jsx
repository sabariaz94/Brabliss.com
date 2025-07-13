'use client';

import Footer from "../../../../components/Footer";
import Navbar from "../../../../components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-pink-50 min-h-screen py-16 px-4">
        {/* Page Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-pink-700 mb-4">About BraBliss</h1>
          <p className="text-lg text-gray-700">
            Comfort, confidence, and beauty — redefined. Discover our journey, our passion, and our promise to every woman.
          </p>
        </div>

        {/* Our Story Section */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 px-4">
          <div>
            <h2 className="text-2xl font-semibold text-pink-700 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              BraBliss was founded with a simple mission: to make every woman feel empowered, supported, and beautiful. Tired of compromising comfort for style, we designed a collection that celebrates all body types — blending elegance, softness, and support like never before.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              From seamless everyday bras to luxurious lace pieces, each design is made with love and purpose. We’re more than lingerie — we’re a movement of self-love and comfort-first fashion.
            </p>
          </div>
          <div className="w-full h-[300px] md:h-[400px] relative rounded-2xl shadow-md border border-pink-100 overflow-hidden">
            <Image
              src="/assets/imgs/about.jpg"
              alt="BraBliss Women Empowerment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="max-w-6xl mx-auto px-4 mb-20">
          <h2 className="text-2xl font-semibold text-pink-700 text-center mb-8">What Makes Us Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100">
              <h3 className="text-lg font-semibold text-pink-700 mb-2">Inclusive Fit</h3>
              <p className="text-gray-600 text-sm">Sizes for every body type, because beauty is limitless.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100">
              <h3 className="text-lg font-semibold text-pink-700 mb-2">Soft & Sustainable</h3>
              <p className="text-gray-600 text-sm">Eco-friendly fabrics that feel as good as they look.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-pink-100">
              <h3 className="text-lg font-semibold text-pink-700 mb-2">Designed by Women</h3>
              <p className="text-gray-600 text-sm">Created by women, for women — with love and expertise.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">Join the BraBliss Movement 💞</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Whether you're shopping for your first perfect fit or expanding your wardrobe with comfort-focused pieces — we're here for you every step of the way.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Explore Our Collection
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
