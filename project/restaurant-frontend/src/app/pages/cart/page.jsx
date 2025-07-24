"use client";/*
import { useSearchParams } from "next/navigation";
import MainLayout from '@/components/layout/MainLayout';

export default function CartPage() {
  const params = useSearchParams();
  const name = params.get("name");
  const quantity = params.get("quantity");
  const price = params.get("price");

  const total = (parseFloat(price) * parseInt(quantity)).toFixed(2);

  return (
    <MainLayout>
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {name ? (
        <div className="bg-white p-4 rounded shadow-md max-w-md">
          <p><strong>Item:</strong> {name}</p>
          <p><strong>Quantity:</strong> {quantity}</p>
          <p><strong>Price Each:</strong> ${parseFloat(price).toFixed(2)}</p>
          <p><strong>Total:</strong> ${total}</p>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
    </MainLayout>
  );
}
*/
import React, { useState } from 'react';

const initialCartItems = [
  { id: 1, name: 'Apple', price: 1.5, quantity: 2 },
  { id: 2, name: 'Banana', price: 0.75, quantity: 3 },
  { id: 3, name: 'Orange', price: 1.25, quantity: 1 },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {cartItems.map(item => (
            <li key={item.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
              <h4>{item.name}</h4>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>
                Quantity: 
                <button onClick={() => handleQuantityChange(item.id, -1)} style={{ margin: '0 0.5rem' }}>-</button>
                {item.quantity}
                <button onClick={() => handleQuantityChange(item.id, 1)} style={{ margin: '0 0.5rem' }}>+</button>
              </p>
              <button onClick={() => handleRemove(item.id)} style={{ color: 'red' }}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
