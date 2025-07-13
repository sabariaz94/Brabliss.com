'use client'
import React, { useState } from 'react';
import Image from 'next/image';

export default function ProductCard({ id, title, price, imageUrl,description, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('');

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size before adding to cart.');
      return;
    }

    if (onAddToCart) {
      onAddToCart({
        id,
        title,
        price,
        imageUrl,
        size: selectedSize,
      });
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-pink-100 transition hover:shadow-lg">
      <div className="relative w-full h-60">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-pink-600 font-bold mt-1">${price}</p>
        <p className="text-pink-600 font-bold mt-1">description:{description}</p>

        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="mt-3 w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          <option value="">Select Size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
