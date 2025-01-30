import React from 'react';
import { ShoppingBag } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <div className="mt-4">
          <div className="flex gap-2 mb-3">
            <div className="text-sm">
              <span className="text-gray-600">Sizes: </span>
              {product.sizes.join(', ')}
            </div>
          </div>
          <div className="flex gap-2 mb-4">
            <div className="text-sm">
              <span className="text-gray-600">Colors: </span>
              {product.colors.join(', ')}
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">R {product.price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <ShoppingBag className="h-5 w-5 mr-1" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}