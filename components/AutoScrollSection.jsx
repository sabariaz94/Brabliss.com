"use client";
import { motion } from "framer-motion";
import ProductCard from "./ProductCart";

export default function AutoScrollSection({ title, products }) {
    console.log("AutoScrollSection", products);
    
  return (
    <section className="overflow-hidden bg-white py-12 border-t border-pink-200">
      <h2 className="text-3xl font-bold text-pink-800 mb-10 text-center">{products.title}</h2>
      <div className="relative">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...products, ...products].map((product, i) => (
            <div key={i} className="min-w-[250px]">
              <ProductCard key={i} product={product} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}