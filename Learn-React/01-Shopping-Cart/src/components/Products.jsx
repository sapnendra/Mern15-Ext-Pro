import React from "react";
import "./Products.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, clearCart, removeFromCart } from "../app/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const cart = useSelector((state) => state.cart.cart);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <div className="cart-container">
        <h1 className="cart-title">🛒 Shopping Cart</h1>
        {/* Product section */}
        <div className="product-section">
          <h2 className="section-title">👜 Products</h2>
          <div className="products-list">
            {products.map((p) => (
              <div key={p.id} className="product-card">
                <div className="product-info">
                  <span className="product-name">{p.name}</span>
                  <span className="product-price">₹{p.price}</span>
                </div>
                <button
                  className="btn add-btn"
                  onClick={() => dispatch(addToCart(p))}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
        <hr className="divider" />
        {/* cart section */}
        <div className="cart-section">
          <h2 className="section-title">🛒 Your Cart</h2>
          {cart.length == 0 ? (
            <p className="empty-cart">No items in your cart</p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">₹{item.price}</span>
                    <button
                      className="btn remove-btn"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <hr className="divider" />

        <div className="cart-summary">
            <p>
                <strong>Total Items:</strong>
                {cart.length}
            </p>
            <p><strong>Total Price: </strong>₹{totalPrice}</p>
            <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
      </div>
    </>
  );
};

export default Products;
