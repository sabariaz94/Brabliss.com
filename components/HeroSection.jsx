"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-pink-100 to-white py-24 text-center px-4">
      <motion.div
        className="max-w-3xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-pink-800 mb-6 leading-tight"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Feel Confident. <br className="hidden md:block" /> Look Beautiful.
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-pink-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Discover perfectly fitting bras designed for all-day comfort & elegance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          <Link href="/">
            <span className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow cursor-pointer">
              Shop Collection
            </span>
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-pink-200 opacity-30 rounded-full filter blur-3xl animate-pulse"
        style={{ zIndex: 0 }}
        animate={{ x: [0, 30, -20, 0], y: [0, 20, -10, 0] }}
        transition={{ repeat: Infinity, duration: 15 }}
      />
    </section>
  );
}