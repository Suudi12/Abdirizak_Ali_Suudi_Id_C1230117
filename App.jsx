import React, { useState } from 'react';
import { productsData } from './Components/products'; // Path-ka halkan waa sax hadda!
import ProductList from './Components/ProductList';  // C-da waa weyn tahay
import CartSection from './Components/CartSection';  // C-da waa weyn tahay

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);
      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      const target = prevCart.find((item) => item.id === id);
      if (target.quantity === 1) {
        return prevCart.filter((item) => item.id !== id);
      }
      return prevCart.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item));
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-gray-600">
      <main className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">
        <ProductList products={productsData} onAdd={addToCart} />
        <CartSection 
          cart={cart} 
          onIncrease={increaseQuantity} 
          onDecrease={decreaseQuantity} 
          onRemove={removeFromCart} 
        />
      </main>
    </div>
  );
}