// 'use client'
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Footer from '@/components/Footer';
// import Link from 'next/link';
// import Navbar from '@/components/Navbar';

// // Dummy product data
// const dummyProducts = [
//   {
//     id: '1',
//     name: 'Luxe Lace Bra',
//     price: 39.99,
//     imageUrl: '/images/lace-bra.jpg',
//   },
//   {
//     id: '2',
//     name: 'Seamless Comfort Bra',
//     price: 29.99,
//     imageUrl: '/images/seamless-bra.jpg',
//   },
//   {
//     id: '3',
//     name: 'Everyday Support Bra',
//     price: 34.99,
//     imageUrl: '/images/support-bra.jpg',
//   },
// ];

// // ProductCard component
// function ProductCard({ id, name, price, imageUrl }) {
//   const [size, setSize] = useState('M');

//   const handleAddToCart = () => {
//     alert(`Added ${name} (Size: ${size}) to cart!`);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg">
//       <img src={imageUrl} alt={name} className="w-full h-60 object-cover" />
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-pink-800">{name}</h3>
//         <p className="text-pink-600 mb-2">${price.toFixed(2)}</p>

//         <div className="mb-3">
//           <label htmlFor={`size-${id}`} className="block text-sm font-medium text-pink-700 mb-1">
//             Size
//           </label>
//           <select
//             id={`size-${id}`}
//             className="w-full border border-pink-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
//             value={size}
//             onChange={(e) => setSize(e.target.value)}
//           >
//             <option value="XS">XS</option>
//             <option value="S">S</option>
//             <option value="M">M</option>
//             <option value="L">L</option>
//             <option value="XL">XL</option>
//           </select>
//         </div>

//         <button
//           onClick={handleAddToCart}
//           className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-md font-semibold transition duration-300"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default function HomePage() {
//   return (
//     <>
//     <Navbar/>
//       <main className="min-h-screen bg-pink-50">
//         {/* Hero Section */}
//         <section className="relative overflow-hidden bg-gradient-to-b from-pink-100 to-white py-24 text-center px-4">
//           <motion.div
//             className="max-w-3xl mx-auto relative z-10"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//           >
//             <motion.h1
//               className="text-5xl md:text-6xl font-extrabold text-pink-800 mb-6 leading-tight"
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.3, duration: 0.6 }}
//             >
//               Feel Confident. <br className="hidden md:block" />
//               Look Beautiful.
//             </motion.h1>

//             <motion.p
//               className="text-lg md:text-xl text-pink-700 mb-8"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.6 }}
//             >
//               Discover perfectly fitting bras designed for all-day comfort & elegance.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.9, duration: 0.4 }}
//             >
//               <Link href='/'>
//                 <span className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow transition-all duration-300 cursor-pointer">
//                   Shop Collection
//                 </span>
//               </Link>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             className="absolute top-0 left-0 w-72 h-72 bg-pink-200 opacity-30 rounded-full filter blur-3xl animate-pulse"
//             style={{ zIndex: 0 }}
//             animate={{ x: [0, 30, -20, 0], y: [0, 20, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 15 }}
//           />
//         </section>

//         {/* Featured Products */}
//         <section className="py-16 px-4 max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-pink-800 mb-10 text-center">Featured Bras</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {dummyProducts.map((product) => (
//               <ProductCard
//                 key={product.id}
//                 id={product.id}
//                 name={product.name}
//                 price={product.price}
//                 imageUrl={product.imageUrl}
//               />
//             ))}
//           </div>
//         </section>

//         {/* Auto-scrolling Product Showcase */}
//         <section className="overflow-hidden bg-white py-12 border-t border-pink-200">
//           <h2 className="text-3xl font-bold text-pink-800 mb-10 text-center">Our Bestsellers</h2>
//           <div className="relative">
//             <motion.div
//               className="flex gap-6 w-max"
//               animate={{ x: ['0%', '-50%'] }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 20,
//                 ease: 'linear',
//               }}
//             >
//               {[...dummyProducts, ...dummyProducts].map((product, index) => (
//                 <div key={index} className="min-w-[250px]">
//                   <ProductCard
//                     id={product.id}
//                     name={product.name}
//                     price={product.price}
//                     imageUrl={product.imageUrl}
//                   />
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </section>
//       </main>

//       {/* Benefits Section */}
//       <section className="bg-white py-16 border-t border-pink-200 px-4">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
//           <div className="p-4">
//             <div className="text-4xl mb-2">🌸</div>
//             <h3 className="text-xl font-semibold text-pink-800">Delicate Comfort</h3>
//             <p className="text-pink-700 mt-2">
//               Soft, breathable fabrics that feel like a second skin.
//             </p>
//           </div>
//           <div className="p-4">
//             <div className="text-4xl mb-2">🌈</div>
//             <h3 className="text-xl font-semibold text-pink-800">Inclusive Sizes</h3>
//             <p className="text-pink-700 mt-2">From petite to plus — every body is beautiful.</p>
//           </div>
//           <div className="p-4">
//             <div className="text-4xl mb-2">📦</div>
//             <h3 className="text-xl font-semibold text-pink-800">Fast & Discreet Shipping</h3>
//             <p className="text-pink-700 mt-2">
//               Free delivery over $50 in elegant packaging.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Footer (Optional) */}
//       <Footer />
//     </>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import HeroSection from "../../../../components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import AutoScrollSection from "@/components/AutoScrollSection";
import Benefits from "@/components/Benefits";
import { getProducts } from '@/sanity/lib/getProducts';
// import Header from '@/components/Header';
import WhyBrabliss from '@/components/WhyBrabliss';
import Testimonials from '@/components/Testimonials';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Optional loading state

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading products...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-pink-50">
        <HeroSection />
        <ProductShowcase title="Featured Bras" products={products} />
        <AutoScrollSection title="Our Bestsellers" products={products} />
        <WhyBrabliss />
        <Benefits />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
