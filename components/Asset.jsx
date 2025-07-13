// Checkout page code
// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';


// export default function CheckoutPage() {
//   const router = useRouter();
//   const [orderPlaced, setOrderPlaced] = useState(false);

//   const handleOrderSubmit = (e) => {
//     e.preventDefault();

//     // Simulate order processing
//     setTimeout(() => {
//       localStorage.removeItem('cart'); // Clear the cart
//       setOrderPlaced(true);

//       // Optionally redirect after a delay
//       setTimeout(() => {
//         router.push('/thank-you'); // You can create this page
//       }, 1500);
//     }, 1000);
//   };

//   return (
//     <>
//       <Navbar />

//       <main className="max-w-5xl mx-auto px-4 py-12 min-h-screen bg-pink-50">
//         <h1 className="text-4xl font-bold text-pink-700 mb-10 text-center">
//           🧾 Checkout & Secure Payment
//         </h1>

//         {orderPlaced ? (
//           <div className="bg-white p-8 rounded-2xl shadow-xl text-center text-pink-700">
//             <h2 className="text-3xl font-bold mb-4">🎉 Order Placed Successfully!</h2>
//             <p className="text-lg">Thank you for shopping with us.</p>
//             <p className="text-sm text-gray-500 mt-2">Redirecting to Thank You page...</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white shadow-xl border border-pink-100 rounded-2xl p-8">
//             {/* Billing Info */}
//             <form className="space-y-6" onSubmit={handleOrderSubmit}>
//               <h2 className="text-2xl font-semibold text-pink-700">Billing Details</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <input type="text" placeholder="Full Name" required className="input-style" />
//                 <input type="email" placeholder="Email Address" required className="input-style" />
//                 <input type="tel" placeholder="Phone Number" required className="input-style" />
//                 <input type="text" placeholder="Street Address" required className="input-style" />
//                 <input type="text" placeholder="City" required className="input-style" />
//                 <input type="text" placeholder="Postal Code" required className="input-style" />
//               </div>

//               <h2 className="text-2xl font-semibold text-pink-700 mt-8">Payment Info</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <input type="text" placeholder="Cardholder Name" required className="input-style" />
//                 <input type="text" placeholder="Card Number" required className="input-style" />
//                 <input type="text" placeholder="Expiry Date (MM/YY)" required className="input-style" />
//                 <input type="text" placeholder="CVV" required className="input-style" />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full mt-6 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-full transition"
//               >
//                 Complete Order
//               </button>
//             </form>

//             {/* Order Summary */}
//             <div className="bg-pink-50 border border-pink-200 p-6 rounded-xl h-fit">
//               <h2 className="text-2xl font-semibold text-pink-700 mb-4">Order Summary</h2>
//               <div className="space-y-4 text-gray-700 text-sm">
//                 <div className="flex justify-between">
//                   <span>Lace Push-up Bra</span>
//                   <span>$45.00</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Seamless Bralette</span>
//                   <span>$32.00</span>
//                 </div>
//                 <div className="flex justify-between border-t pt-4 font-semibold">
//                   <span>Subtotal</span>
//                   <span>$77.00</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Shipping</span>
//                   <span>Free</span>
//                 </div>
//                 <div className="flex justify-between text-lg border-t pt-4 font-bold text-pink-700">
//                   <span>Total</span>
//                   <span>$77.00</span>
//                 </div>
//               </div>
//               <p className="text-xs text-gray-500 mt-6">
//                 By placing your order, you agree to our Terms & Conditions and Privacy Policy.
//               </p>
//             </div>
//           </div>
//         )}
//       </main>

//       <Footer />
//     </>
//   );
// }



//******************************************** */