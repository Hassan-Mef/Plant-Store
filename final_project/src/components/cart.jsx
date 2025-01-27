import React from 'react';
import './Cart.css';

const Cart = ({ cart, updateQuantity, removeFromCart, getTotalItems, getTotalCost }) => {
  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty!</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map(item => (
              <li className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Unit Price: ${item.price}</p>
                  <p>Total: ${item.quantity * item.price}</p>
                  <div className="cart-item-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="remove-item">
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <p>Total Items: {getTotalItems()}</p>
            <p>Total Cost: ${getTotalCost()}</p>
            <button className="checkout-button">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
