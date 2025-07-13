'use client';

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';

import { format } from 'date-fns';

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const query = `*[_type == "order"] | order(createdAt desc){
          _id,
          fullName,
          email,
          phone,
          address,
          city,
          zip,
          paymentMethod,
          total,
          createdAt,
          items
        }`;
        const data = await client.fetch(query);
        setOrders(data);
      } catch (err) {
        console.error('Error fetching orders:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
     

      <main className="max-w-7xl mx-auto px-4 py-10 min-h-screen">
        <h1 className="text-3xl font-bold text-pink-700 mb-8">📦 Admin: Manage Orders</h1>

        {loading ? (
          <p>Loading orders...</p>
        ) : orders.length === 0 ? (
          <p className="text-gray-500">No orders found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orders.map((order) => (
              <div key={order._id} className="bg-white border border-pink-100 rounded-xl shadow p-5 space-y-3">
                <h2 className="text-lg font-semibold text-pink-700">{order.fullName}</h2>
                <p className="text-sm text-gray-600">📧 {order.email}</p>
                <p className="text-sm text-gray-600">📞 {order.phone}</p>
                <p className="text-sm text-gray-600">🏠 {order.address}, {order.city} - {order.zip}</p>
                <p className="text-sm text-gray-600">💳 {order.paymentMethod.toUpperCase()}</p>
                <p className="text-sm text-gray-600">🕒 {format(new Date(order.createdAt), 'PPPpp')}</p>
                <p className="text-md font-bold text-pink-700">Total: PKR {order.total}</p>

                <div className="text-sm mt-2 border-t pt-2">
                  <p className="font-semibold mb-1 text-pink-600">🛒 Items:</p>
                  {order.items?.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-gray-700 text-sm mb-1">
                      <span>{item.title} (x{item.quantity})</span>
                      <span>PKR {item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
 
   
    </>
  );
}
