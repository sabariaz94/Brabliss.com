// app/product/[id]/page.jsx
"use client";

import { getProducts } from "@/sanity/lib/getProducts";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { use } from "react";

export default function ProductPage(props) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [filterProduct, setFilterProduct] = useState(null);

  // Unwrap `params` (as it's now a Promise in Next.js App Router)
  const params = use(props.params);

  useEffect(() => {
    async function fetchProduct() {
      const allProducts = await getProducts();
      const matchedProduct = allProducts.find((item) => item._id === params.id);
      setFilterProduct(matchedProduct);
    }

    fetchProduct();
  }, [params.id]);

  if (!filterProduct)
    return <div className="text-center py-20 text-xl font-semibold">Loading product...</div>;

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src={filterProduct?.images[0]?.asset?.url}
            alt={filterProduct?.title}
            fill
            className="rounded-3xl object-cover shadow-2xl"
          />
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-extrabold text-gray-800">
            {filterProduct?.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            {filterProduct?.description}
          </p>
          <p className="text-3xl font-semibold text-pink-600 mt-2">
            {filterProduct?.price} PKR
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => {
                addToCart(filterProduct);
                router.push("/cart");
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition-all shadow-md"
            >
              Add to Cart
            </button>
            <button
              onClick={() => router.push("/checkout")}
              className="bg-pink-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-pink-700 transition-all shadow-md"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}