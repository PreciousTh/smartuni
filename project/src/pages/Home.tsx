import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { ShoppingBag, Users, CreditCard, Package } from 'lucide-react';
import { featuredProducts } from '../data/products';

const features = [
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    title: "Quality Uniforms",
    description: "Premium quality school uniforms that last longer"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Bulk Orders",
    description: "Special pricing for schools and bulk purchases"
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Secure Payment",
    description: "Multiple payment options with secure checkout"
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: "Fast Delivery",
    description: "Quick and reliable shipping nationwide"
  }
];

interface HomeProps {
  onAddToCart: (product: any) => void;
}

export default function Home({ onAddToCart }: HomeProps) {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Quality School Uniforms for Every Student
          </h1>
          <p className="text-xl mb-8">
            Discover our range of comfortable and durable school uniforms
          </p>
          <button 
            onClick={() => navigate('/shop')}
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <button 
            onClick={() => navigate('/shop')}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            View All Products →
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SmartUni</h3>
              <p className="text-gray-400">Quality uniforms for every student</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/shop')} className="text-gray-400 hover:text-white">Shop Now</button></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Bulk Orders</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Shipping Info</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe for updates and offers</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md text-gray-800"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}