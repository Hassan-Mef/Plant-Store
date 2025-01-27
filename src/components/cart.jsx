import React from 'react';
import './Cart.css';

const Cart = ({ cart, updateQuantity, removeFromCart, getTotalItems, getTotalCost, setPage }) => {
  return (
    <div className="cart-page">
      <h2 className="cart-title">Shopping Cart</h2>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <div className="cart-item-actions">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="cart-summary">
        {/* Display "Continue Shopping" and Checkout button accordingly */}
        {cart.length === 0 ? (
          <button className="checkout-button" onClick={() => alert('Coming Soon')}>Checkout</button>
        ) : (
          <>
            <button className="continue-shopping-button" onClick={() => setPage('home')}>Continue Shopping</button>

            <button className="checkout-button" onClick={() => alert('Coming Soon')}>Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
