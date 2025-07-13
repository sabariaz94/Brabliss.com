// // 'use client';

// // import React, { useEffect, useState } from 'react';
// // import { useSearchParams } from 'next/navigation';
// // import { client } from '@/sanity/lib/client';
// // import Navbar from '@/components/Navbar';
// // import Footer from '@/components/Footer';
// // import Image from 'next/image';
// // import Link from 'next/link';

// // export default function OrderSuccessPage() {
// //   const [order, setOrder] = useState(null);
// //   const searchParams = useSearchParams();
// //   const orderId = searchParams.get('orderId'); // optional if passed in URL

// //   useEffect(() => {
// //     const fetchLatestOrder = async () => {
// //       try {
// //         const res = await client.fetch(
// //           `*[_type == "order"] | order(createdAt desc)[0]`
// //         );
// //         setOrder(res);
// //       } catch (err) {
// //         console.error('Failed to fetch order:', err);
// //       }
// //     };

// //     fetchLatestOrder();
// //   }, []);

// //   if (!order) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center text-pink-600 text-lg font-medium">
// //         Loading your order details...
// //       </div>
// //     );
// //   }

// //   return (
// //     <>
// //       <Navbar />
// //       <main className="max-w-5xl mx-auto px-4 py-12 min-h-screen">
// //         <div className="bg-white shadow-lg rounded-xl p-8 border border-pink-100">
// //           <h1 className="text-3xl font-bold text-pink-700 text-center mb-6">
// //             🎉 Thank You for Your Order!
// //           </h1>
// //           <p className="text-center text-gray-600 mb-10">
// //             We've received your order and are preparing it for shipment. You'll receive a
// //             confirmation shortly.
// //           </p>

// //           {/* Order Info */}
// //           <div className="grid md:grid-cols-2 gap-8">
// //             <div>
// //               <h2 className="text-xl font-semibold text-pink-600 mb-2">
// //                 👤 Customer Information
// //               </h2>
// //               <p><strong>Name:</strong> {order.customer.fullName}</p>
// //               <p><strong>Email:</strong> {order.customer.email}</p>
// //               <p><strong>Phone:</strong> {order.customer.phone}</p>
// //               <p><strong>Address:</strong> {order.customer.address}, {order.customer.city}, {order.customer.zip}</p>
// //             </div>

// //             <div>
// //               <h2 className="text-xl font-semibold text-pink-600 mb-2">🧾 Order Summary</h2>
// //               <p><strong>Total:</strong> PKR {order.total}</p>
// //               <p><strong>Payment:</strong> {order.paymentMethod.toUpperCase()}</p>
// //               <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
// //             </div>
// //           </div>

// //           <hr className="my-8" />

// //           {/* Ordered Items */}
// //           <h2 className="text-xl font-semibold text-pink-600 mb-4">📦 Ordered Items</h2>
// //           <div className="space-y-4">
// //             {order.items.map((item, idx) =>
// //             {
// //                 console.log("item====> ", item);
                
// //                 return  (
// //               <div key={idx} className="flex items-center justify-between bg-pink-50 rounded-lg p-4 border">
// //                 <div className="flex items-center gap-4">
// //                   <Image
// //                     src={item.image ? `/images/${item.image}` : '/placeholder.jpg'}
// //                     alt={item.title}
// //                     width={60}
// //                     height={60}
// //                     className="rounded border"
// //                   />
// //                   <div>
// //                     <h4 className="font-semibold">{item.title}</h4>
// //                     <p className="text-sm text-gray-600">
// //                       Quantity: {item.quantity} × PKR {item.price}
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <p className="font-semibold text-gray-700">
// //                   PKR {item.quantity * item.price}
// //                 </p>
// //               </div>
// //             )
// //             })}
// //           </div>

// //           <div className="text-center mt-10">
// //             <Link
// //               href="/products"
// //               className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition"
// //             >
// //               Continue Shopping →
// //             </Link>
// //           </div>
// //         </div>
// //       </main>
// //       <Footer />
// //     </>
// //   );
// // }

// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';
// import { client } from '@/sanity/lib/client';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function OrderSuccessPage() {
//   const [order, setOrder] = useState(null);
//   const searchParams = useSearchParams();
//   const orderId = searchParams.get('orderId'); // optional usage

//   useEffect(() => {
//     const fetchLatestOrder = async () => {
//       try {
//         const res = await client.fetch(
//           `*[_type == "order"] | order(createdAt desc)[0]`
//         );
//         setOrder(res);
//       } catch (err) {
//         console.error('Failed to fetch order:', err);
//       }
//     };

//     fetchLatestOrder();
//   }, []);

//   if (!order) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-pink-600 text-lg font-medium">
//         Loading your order details...
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <main className="max-w-5xl mx-auto px-4 py-12 min-h-screen">
//         <div className="bg-white shadow-lg rounded-xl p-8 border border-pink-100">
//           <h1 className="text-3xl font-bold text-pink-700 text-center mb-6">
//             🎉 Thank You for Your Order!
//           </h1>
//           <p className="text-center text-gray-600 mb-10">
//             We've received your order and are preparing it for shipment. You'll receive a confirmation shortly.
//           </p>

//           {/* Order Info */}
//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <h2 className="text-xl font-semibold text-pink-600 mb-2">
//                 👤 Customer Information
//               </h2>
//               <p><strong>Name:</strong> {order.fullName}</p>
//               <p><strong>Email:</strong> {order.email}</p>
//               <p><strong>Phone:</strong> {order.phone}</p>
//               <p><strong>Address:</strong> {order.address}, {order.city}, {order.zip}</p>
//             </div>

//             <div>
//               <h2 className="text-xl font-semibold text-pink-600 mb-2">🧾 Order Summary</h2>
//               <p><strong>Total:</strong> PKR {order.total}</p>
//               <p><strong>Payment:</strong> {order.paymentMethod?.toUpperCase()}</p>
//               <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
//             </div>
//           </div>

//           <hr className="my-8" />

//           {/* Ordered Items */}
//           <h2 className="text-xl font-semibold text-pink-600 mb-4">📦 Ordered Items</h2>
//           <div className="space-y-4">
//             {order.items?.map((item) => (
//               <div key={item._key} className="flex items-center justify-between bg-pink-50 rounded-lg p-4 border">
//                 <div className="flex items-center gap-4">
//                   <Image
//                     src={item.imageUrl || '/placeholder.jpg'}
//                     alt={item.title}
//                     width={60}
//                     height={60}
//                     className="rounded border object-cover"
//                   />
//                   <div>
//                     <h4 className="font-semibold">{item.title}</h4>
//                     <p className="text-sm text-gray-600">
//                       Quantity: {item.quantity} × PKR {item.price}
//                     </p>
//                   </div>
//                 </div>
//                 <p className="font-semibold text-gray-700">
//                   PKR {item.quantity * item.price}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-10">
//             <Link
//               href="/products"
//               className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition"
//             >
//               Continue Shopping →
//             </Link>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }


import OrderSuccessPageClient from '@/components/OrderSuccess';
import React, { Suspense } from 'react';
// import OrderSuccessPageClient from './OrderSuccessPageClient';

export default function OrderSuccessWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen flex justify-center items-center text-pink-600">Loading...</div>}>
      <OrderSuccessPageClient />
    </Suspense>
  );
}
