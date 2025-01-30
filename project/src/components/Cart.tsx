import React from 'react';
import type { CartItem } from '../types';

interface CartProps {
  show: boolean;
  onClose: () => void;
  items: CartItem[];
}

export default function Cart({ show, onClose, items }: CartProps) {
  const cartTotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (!show) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={onClose} className="text-gray-500">&times;</button>
      </div>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} className="flex items-center gap-2 mb-4 border-b pb-2">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                <p className="text-sm font-semibold">R {item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between mb-4">
              <span className="font-bold">Total:</span>
              <span className="font-bold">R {cartTotal.toFixed(2)}</span>
            </div>
            <button 
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              onClick={() => alert('Checkout functionality coming soon!')}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}