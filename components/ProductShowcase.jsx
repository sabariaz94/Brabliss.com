"use client";
import { motion } from "framer-motion";
import ProductCard from "./ProductCart";
// import ProductCard from "./ProductCards";
// import ProductCard from "./ProductCard";

export default function ProductShowcase({ title, products }) {
    // console.log("product===>Show", products);
    
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-pink-800 mb-10 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product,i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </section>
  );
}