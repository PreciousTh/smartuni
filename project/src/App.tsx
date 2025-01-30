import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './components/Cart';
import type { CartItem } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product: any) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1, selectedSize: product.sizes[0], selectedColor: product.colors[0] }];
    });
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar cartCount={cartItems.length} onCartClick={() => setShowCart(!showCart)} />
        
        <Cart 
          show={showCart} 
          onClose={() => setShowCart(false)} 
          items={cartItems} 
        />

        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;