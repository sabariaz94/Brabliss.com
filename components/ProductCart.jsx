"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  // const [filterProduct, setFilterProduct] = useState(null);
  const imageUrl = product?.images?.[0]?.asset?.url;
  // console.log("ABCXYZ==> ", product);

  return (
    <div className="group relative bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.015]">
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <Link href={`/productDetails/${product?._id}`}>
          <Image
            src={imageUrl}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300 line-clamp-1">
          {product?.title}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2">
          {product?.description || "No description available."}
        </p>

        {/* Price + Cart */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold text-pink-600">
            PKR {product?.price}
          </span>
          {/* router.push("/cart"); */}
          <button
            onClick={() => {
              addToCart(product);
              toast.success("Product Added Successfully!")
            }}
            className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full shadow transition-all duration-300"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>

      {/* Floating Label (optional size/label) */}
      {product?.sizes && (
        <span className="absolute top-2 left-2 bg-white text-pink-700 text-xs font-medium px-2 py-0.5 rounded-full shadow">
          Sizes: {product?.sizes}
        </span>
      )}
    </div>
  );
}
