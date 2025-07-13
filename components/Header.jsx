// 'use client';

// import Link from 'next/link';
// import { useState } from 'react';
// import {
//   Menu,
//   X,
//   ShoppingCart,
//   PackageSearch,
//   CreditCard,
//   Info,
//   Phone
// } from 'lucide-react';

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <header className="bg-white border-b border-pink-100 shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">

//           {/* Logo */}
//           <Link href="/" className="text-2xl font-bold tracking-tight text-pink-600 hover:opacity-90">
//             💖 BraBliss
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex gap-8 text-pink-700 font-medium">
//             <NavItem href="/products" icon={<PackageSearch size={18} />} label="Products" />
//             <NavItem href="/cart" icon={<ShoppingCart size={18} />} label="Cart" />
//             <NavItem href="/checkout" icon={<CreditCard size={18} />} label="Checkout" />
//             <NavItem href="/about" icon={<Info size={18} />} label="About Us" />
//             <NavItem href="/contact" icon={<Phone size={18} />} label="Contact" />
//           </nav>

//           {/* CTA */}
//           <div className="hidden md:block">
//             <Link
//               href="/login"
//               className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition font-semibold text-sm"
//             >
//               Sign In
//             </Link>
//           </div>

//           {/* Mobile Hamburger */}
//           <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-pink-700">
//             {mobileOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="md:hidden bg-white border-t border-pink-100 shadow-sm px-4 py-4 space-y-4 text-pink-700 font-medium">
//           <MobileLink href="/shop" icon={<PackageSearch size={18} />} label="Shop" onClick={() => setMobileOpen(false)} />
//           <MobileLink href="/cart" icon={<ShoppingCart size={18} />} label="Cart" onClick={() => setMobileOpen(false)} />
//           <MobileLink href="/checkout" icon={<CreditCard size={18} />} label="Checkout" onClick={() => setMobileOpen(false)} />
//           <MobileLink href="/about" icon={<Info size={18} />} label="About Us" onClick={() => setMobileOpen(false)} />
//           <MobileLink href="/contact" icon={<Phone size={18} />} label="Contact" onClick={() => setMobileOpen(false)} />
//           <Link href="/login" onClick={() => setMobileOpen(false)} className="block text-pink-600 font-semibold">
//             Sign In
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }

// function NavItem({ href, icon, label }) {
//   return (
//     <Link
//       href={href}
//       className="flex items-center gap-2 hover:text-pink-600 transition"
//     >
//       {icon}
//       {label}
//     </Link>
//   );
// }

// function MobileLink({
//   href,
//   icon,
//   label,
//   onClick
// }) {
//   return (
//     <Link
//       href={href}
//       onClick={onClick}
//       className="flex items-center gap-3 hover:text-pink-600 transition"
//     >
//       {icon}
//       {label}
//     </Link>
//   );
// }

