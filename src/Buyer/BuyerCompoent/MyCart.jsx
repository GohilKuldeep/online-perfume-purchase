import React, { useState } from 'react'
import "./css/Mycart.css";

const initialCart = [
  {
    id: 1,
    name: "Dior Sauvage",
    brand: "Dior",
    price: 4500,
    image: "https://via.placeholder.com/100x100?text=Dior",
    quantity: 1,
  },
  {
    id: 2,
    name: "Gucci Bloom",
    brand: "Gucci",
    price: 3800,
    image: "https://via.placeholder.com/100x100?text=Gucci",
    quantity: 2,
  },
];

const MyCart = () => {
  const [cart, setCart] = useState(initialCart);

  const handleQuantity = (id, delta) => {
    setCart(cart =>
      cart.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = id => {
    setCart(cart => cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
        <h2 className="cart-title">🛒 My Cart</h2>
        {cart.length === 0 ? (
          <div className="cart-empty">
            <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="Empty Cart" style={{width:60,marginBottom:10,opacity:0.7}}/>
            <div>Your cart is empty.</div>
          </div>
        ) : (
          <>
            <div className="cart-list">
              <div className="cart-list-header">
                <span>Product</span>
                <span>Brand</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
                <span></span>
              </div>
              {cart.map(item => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-product">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-name">{item.name}</div>
                  </div>
                  <div className="cart-item-brand">{item.brand}</div>
                  <div className="cart-item-price">₹{item.price}</div>
                  <div className="cart-item-qty">
                    <button onClick={() => handleQuantity(item.id, -1)} className="qty-btn">-</button>
                    <span className="qty-value">{item.quantity}</span>
                    <button onClick={() => handleQuantity(item.id, 1)} className="qty-btn">+</button>
                  </div>
                  <div className="cart-item-total">₹{item.price * item.quantity}</div>
                  <button className="cart-remove-btn" onClick={() => handleRemove(item.id)} title="Remove">&times;</button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="cart-summary-label">Total:</div>
              <div className="cart-summary-value">₹{total}</div>
              <button className="cart-checkout-btn">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
  );
}

export default MyCart
