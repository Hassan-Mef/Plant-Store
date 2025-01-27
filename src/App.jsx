import React, { useState } from 'react';
import './App.css';
import Home from './components/home';
import ProductPage from './components/ProductPage';
import Cart from './components/cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('home');
  // Define the products state using useState
  const [products, setProducts] = useState([
    { id: 1, name: 'Snake Plant', price: 25, category: 'Low Light', image: 'img/snake_plant.jpeg', addedToCart: false },
    { id: 2, name: 'Aloe Vera', price: 15, category: 'Succulents', image: 'img/Aloe.jpeg', addedToCart: false },
    { id: 3, name: 'Spider Plant', price: 20, category: 'Air Purifying', image: 'img/Spider_palnt.jpeg', addedToCart: false },
    { id: 4, name: 'Fiddle Leaf Fig', price: 50, category: 'Large Plants', image: 'img/Fiddle_Leaf_Fig.jpeg', addedToCart: false },
    { id: 5, name: 'Pothos', price: 18, category: 'Easy Care', image: 'img/Pothos.jpeg', addedToCart: false },
    { id: 6, name: 'Peace Lily', price: 30, category: 'Flowering', image: 'img/Peace_Lily.jpeg', addedToCart: false },
    // Additional products
    { id: 7, name: 'ZZ Plant', price: 40, category: 'Low Light', image: 'img/zz_plant.jpeg', addedToCart: false },
    { id: 8, name: 'Cactus', price: 10, category: 'Succulents', image: 'img/cactus.jpeg', addedToCart: false },
    { id: 9, name: 'Bamboo Palm', price: 35, category: 'Air Purifying', image: 'img/Bamboo_Palm.jpeg', addedToCart: false },
    { id: 10, name: 'Monstera', price: 45, category: 'Large Plants', image: 'img/Monstera.jpeg', addedToCart: false },
    { id: 11, name: 'Philodendron', price: 28, category: 'Easy Care', image: 'img/Philodendron.jpeg', addedToCart: false },
    { id: 12, name: 'Orchid', price: 60, category: 'Flowering', image: 'img/Orchid.jpeg', addedToCart: false }
  ]);

  // Add product to cart and update products state to reflect that it's added
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

    // Update the product's 'addedToCart' property to true
    const updatedProducts = products.map((item) =>
      item.id === product.id ? { ...item, addedToCart: true } : item
    );
    setProducts(updatedProducts); // Set the updated products state
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
      setPage={setPage} // This is correct, keep it here
    />

        );
      default:
        return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1 onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>Green Haven</h1>
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
