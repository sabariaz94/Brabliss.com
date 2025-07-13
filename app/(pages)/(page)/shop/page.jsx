// src/app/page.js
'use client'
import { useEffect, useState } from 'react'
import { getProducts } from '@/sanity/lib/getProducts'

export default function HomePage() {
  const [products, setProducts] = useState([])
console.log("productData====? ", products);


  useEffect(() => {
    getProducts().then(setProducts)
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <div key={product._id} className="border p-3 rounded">
            <img
              src={product?.images[0]?.asset.url}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p>Price: ${product?.price}</p>
            <p>Category: {product?.category}</p>
            <p className="text-sm">{product.description}</p>
            <p>Sizes: {product?.sizes}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
