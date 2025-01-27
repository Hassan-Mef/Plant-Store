import React, { useState } from 'react';
import './App.css';
import Home from './components/home';
import ProductPage from './components/ProductPage';
import Cart from './components/cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('home'); // Manages which page to show

  const products = [
    { id: 1, name: 'Snake Plant', price: 25, category: 'Low Light', image: 'img/snake_plant.jpeg' },
    { id: 2, name: 'Aloe Vera', price: 15, category: 'Succulents', image: 'img/Aloe.jpeg' },
    { id: 3, name: 'Spider Plant', price: 20, category: 'Air Purifying', image: 'img/Spider_palnt.jpeg' },
    { id: 4, name: 'Fiddle Leaf Fig', price: 50, category: 'Large Plants', image: 'img/Fiddle_Leaf_Fig.jpeg' },
    { id: 5, name: 'Pothos', price: 18, category: 'Easy Care', image: 'img/Pothos.jpeg' },
    { id: 6, name: 'Peace Lily', price: 30, category: 'Flowering', image: 'img/Peace_Lily.jpeg' },
  ];

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);

  const getTotalCost = () => cart.reduce((total, item) => total + item.quantity * item.price, 0);

  // Logic to render the current page
  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home setPage={setPage} />;
      case 'products':
        return <ProductPage products={products} addToCart={addToCart} />;
      case 'cart':
        return (
          <Cart
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            getTotalItems={getTotalItems}
            getTotalCost={getTotalCost}
          />
        );
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1 onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>Plant Store</h1>
        <nav className="navigation">
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('products')}>Products</button>
          <button onClick={() => setPage('cart')}>Cart ({getTotalItems()})</button>
        </nav>
      </header>
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
