import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { allProducts } from '../data/products';

interface ShopProps {
  onAddToCart: (product: any) => void;
}

export default function Shop({ onAddToCart }: ShopProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const categories = ['all', 'blazers', 'shirts', 'trousers', 'skirts', 'shoes', 'jerseys', 'accessories'];

  const filteredProducts = selectedCategory === 'all'
    ? allProducts
    : allProducts.filter(product => product.category.toLowerCase() === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">School Uniform Shop</h1>
      
      {/* Categories */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full capitalize ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}