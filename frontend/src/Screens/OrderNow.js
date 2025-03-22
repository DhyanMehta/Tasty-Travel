import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/OrderNow.css';

function OrderNow() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const items = [
    { id: 1, name: 'Pizza Margherita', price: 300, category: 'Italian' },
    { id: 2, name: 'Pasta Carbonara', price: 350, category: 'Italian' },
    { id: 3, name: 'Lasagna', price: 400, category: 'Italian' },
    { id: 4, name: 'Spaghetti Bolognese', price: 450, category: 'Italian' },
    { id: 5, name: 'Fettuccine Alfredo', price: 500, category: 'Italian' },
    { id: 6, name: 'Penne Arrabbiata', price: 350, category: 'Italian' },
    { id: 7, name: 'Caprese Salad', price: 250, category: 'Italian' },
    { id: 8, name: 'Minestrone Soup', price: 200, category: 'Italian' },
    { id: 9, name: 'Marinara Pizza', price: 300, category: 'Italian' },
    { id: 10, name: 'Margarita Pizza', price: 320, category: 'Italian' },
    
    { id: 11, name: 'Butter Chicken', price: 450, category: 'Indian' },
    { id: 12, name: 'Chicken Tikka Masala', price: 400, category: 'Indian' },
    { id: 13, name: 'Paneer Butter Masala', price: 350, category: 'Indian' },
    { id: 14, name: 'Dal Makhani', price: 250, category: 'Indian' },
    { id: 15, name: 'Aloo Gobi', price: 200, category: 'Indian' },
    { id: 16, name: 'Naan', price: 50, category: 'Indian' },
    { id: 17, name: 'Rogan Josh', price: 500, category: 'Indian' },
    { id: 18, name: 'Chole Bhature', price: 300, category: 'Indian' },
    { id: 19, name: 'Biryani', price: 400, category: 'Indian' },
    { id: 20, name: 'Tandoori Chicken', price: 450, category: 'Indian' },
  
    { id: 21, name: 'Sushi Rolls', price: 550, category: 'Japanese' },
    { id: 22, name: 'Ramen', price: 500, category: 'Japanese' },
    { id: 23, name: 'Tempura', price: 350, category: 'Japanese' },
    { id: 24, name: 'Takoyaki', price: 400, category: 'Japanese' },
    { id: 25, name: 'Teriyaki Chicken', price: 450, category: 'Japanese' },
    { id: 26, name: 'Gyoza', price: 250, category: 'Japanese' },
    { id: 27, name: 'Miso Soup', price: 150, category: 'Japanese' },
    { id: 28, name: 'Katsu Curry', price: 350, category: 'Japanese' },
    { id: 29, name: 'Unagi Don', price: 600, category: 'Japanese' },
    { id: 30, name: 'Chirashi', price: 650, category: 'Japanese' },
  
    { id: 31, name: 'Tacos', price: 250, category: 'Mexican' },
    { id: 32, name: 'Burrito', price: 300, category: 'Mexican' },
    { id: 33, name: 'Enchiladas', price: 350, category: 'Mexican' },
    { id: 34, name: 'Quesadilla', price: 400, category: 'Mexican' },
    { id: 35, name: 'Nachos', price: 200, category: 'Mexican' },
    { id: 36, name: 'Fajitas', price: 500, category: 'Mexican' },
    { id: 37, name: 'Churros', price: 150, category: 'Mexican' },
    { id: 38, name: 'Guacamole', price: 100, category: 'Mexican' },
    { id: 39, name: 'Tamales', price: 300, category: 'Mexican' },
    { id: 40, name: 'Pico de Gallo', price: 50, category: 'Mexican' },
  
    { id: 41, name: 'Falafel', price: 150, category: 'Middle Eastern' },
    { id: 42, name: 'Hummus and Pita', price: 100, category: 'Middle Eastern' },
    { id: 43, name: 'Shawarma', price: 400, category: 'Middle Eastern' },
    { id: 44, name: 'Kebabs', price: 500, category: 'Middle Eastern' },
    { id: 45, name: 'Tabbouleh', price: 200, category: 'Middle Eastern' },
    { id: 46, name: 'Baba Ganoush', price: 250, category: 'Middle Eastern' },
    { id: 47, name: 'Grilled Halloumi', price: 350, category: 'Middle Eastern' },
    { id: 48, name: 'Labneh', price: 150, category: 'Middle Eastern' },
    { id: 49, name: 'Moutabel', price: 100, category: 'Middle Eastern' },
    { id: 50, name: 'Manakish', price: 300, category: 'Middle Eastern' },
  
    { id: 51, name: 'Steak', price: 800, category: 'American' },
    { id: 52, name: 'Burger', price: 350, category: 'American' },
    { id: 53, name: 'Fries', price: 150, category: 'American' },
    { id: 54, name: 'Mac and Cheese', price: 400, category: 'American' },
    { id: 55, name: 'Hot Dog', price: 250, category: 'American' },
    { id: 56, name: 'Buffalo Wings', price: 450, category: 'American' },
    { id: 57, name: 'Chicken Fried Steak', price: 600, category: 'American' },
    { id: 58, name: 'Apple Pie', price: 200, category: 'American' },
    { id: 59, name: 'Pecan Pie', price: 250, category: 'American' },
    { id: 60, name: 'Clam Chowder', price: 300, category: 'American' },
  
    { id: 61, name: 'Paella', price: 700, category: 'Spanish' },
    { id: 62, name: 'Gazpacho', price: 250, category: 'Spanish' },
    { id: 63, name: 'Tortilla Espanola', price: 300, category: 'Spanish' },
    { id: 64, name: 'Croquetas', price: 150, category: 'Spanish' },
    { id: 65, name: 'Churros con Chocolate', price: 200, category: 'Spanish' },
    { id: 66, name: 'Fabada Asturiana', price: 350, category: 'Spanish' },
    { id: 67, name: 'Patatas Bravas', price: 200, category: 'Spanish' },
    { id: 68, name: 'Jamón Ibérico', price: 500, category: 'Spanish' },
    { id: 69, name: 'Pulpo a la Gallega', price: 600, category: 'Spanish' },
    { id: 70, name: 'Empanadas', price: 250, category: 'Spanish' },
  
    { id: 71, name: 'Dim Sum', price: 350, category: 'Chinese' },
    { id: 72, name: 'Kung Pao Chicken', price: 400, category: 'Chinese' },
    { id: 73, name: 'Peking Duck', price: 600, category: 'Chinese' },
    { id: 74, name: 'Sweet and Sour Pork', price: 350, category: 'Chinese' },
    { id: 75, name: 'Hot and Sour Soup', price: 200, category: 'Chinese' },
    { id: 76, name: 'Spring Rolls', price: 150, category: 'Chinese' },
    { id: 77, name: 'Chow Mein', price: 300, category: 'Chinese' },
    { id: 78, name: 'Mapo Tofu', price: 250, category: 'Chinese' },
    { id: 79, name: 'Wonton Soup', price: 200, category: 'Chinese' },
    { id: 80, name: 'Char Siu', price: 450, category: 'Chinese' },
  
    { id: 81, name: 'Pho', price: 400, category: 'Vietnamese' },
    { id: 82, name: 'Banh Mi', price: 350, category: 'Vietnamese' },
    { id: 83, name: 'Goi Cuon', price: 300, category: 'Vietnamese' },
    { id: 84, name: 'Bun Cha', price: 450, category: 'Vietnamese' },
    { id: 85, name: 'Com tam', price: 500, category: 'Vietnamese' },
    { id: 86, name: 'Banh Xeo', price: 400, category: 'Vietnamese' },
    { id: 87, name: 'Chao', price: 200, category: 'Vietnamese' },
    { id: 88, name: 'Bo Kho', price: 450, category: 'Vietnamese' },
    { id: 89, name: 'Xoi', price: 250, category: 'Vietnamese' },
    { id: 90, name: 'Hu Tieu', price: 350, category: 'Vietnamese' },
  
    { id: 91, name: 'Laksa', price: 450, category: 'Singaporean' },
    { id: 92, name: 'Chilli Crab', price: 650, category: 'Singaporean' },
    { id: 93, name: 'Hainanese Chicken Rice', price: 400, category: 'Singaporean' },
    { id: 94, name: 'Satay', price: 350, category: 'Singaporean' },
    { id: 95, name: 'Char Kway Teow', price: 400, category: 'Singaporean' },
    { id: 96, name: 'Mee Goreng', price: 350, category: 'Singaporean' },
    { id: 97, name: 'Kaya Toast', price: 150, category: 'Singaporean' },
    { id: 98, name: 'Roti Prata', price: 250, category: 'Singaporean' },
    { id: 99, name: 'Nasi Lemak', price: 300, category: 'Singaporean' },
    { id: 100, name: 'Fish Head Curry', price: 500, category: 'Singaporean' }
  ];
  
  
  useEffect(() => {
    // Reset cart on revisiting page
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
    setTotalPrice(savedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));
  }, []);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    let updatedCartItems;

    if (existingItem) {
      updatedCartItems = cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCartItems = [...cartItems, { ...item, quantity: 1 }];
    }

    setCartItems(updatedCartItems);
    setTotalPrice(prevTotal => prevTotal + item.price);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
    setTotalPrice(updatedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const increaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === itemId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedCartItems);
    setTotalPrice(updatedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const decreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
    setTotalPrice(updatedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleProceedToCheckout = () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    navigate('/checkout', { state: { cartItems, totalPrice } });
  };

  // Group items by category
  const groupedItems = items.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="order-now-wrapper">
      <button className={`cart-icon ${showCart ? 'hidden' : ''}`} onClick={() => setShowCart(true)}>
        <i className="bi bi-cart"></i>
        {cartItems.length > 0 && <span className="cart-item-count">{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>}
      </button>

      <h2 className="order-now-title">Order Now</h2>

      <div className="order-now-items">
        {Object.keys(groupedItems).map(category => (
          <div key={category} className="category-section">
            <h3 className="category-title">{category}</h3>
            <div className="category-items row">
              {groupedItems[category].map(item => (
                <div key={item.id} className="col-md-4 mb-4">
                  <div className="order-now-card card">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">Price: ₹{item.price}</p>
                      <button className="order-now-button btn btn-primary" onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="order-now-total-container">
        <h3 className="order-now-total">Total Price: ₹{totalPrice.toFixed(2)}</h3>
        <button className="checkout-button btn btn-success" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
      </div>

      {showCart && (
        <div className="offcanvas offcanvas-end show">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Your Cart</h5>
            <button type="button" className="btn-close" onClick={() => setShowCart(false)}></button>
          </div>
          <div className="offcanvas-body">
            {cartItems.length === 0 ? (
              <p>Your cart is empty!</p>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <p>{item.name} - ₹{item.price} x {item.quantity}</p>
                  <div className="quantity-buttons">
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
                </div>
              ))
            )}
            <h4>Total: ₹{totalPrice.toFixed(2)}</h4>
          </div>
          <div className="offcanvas-footer">
            <button className="btn btn-danger" onClick={() => setShowCart(false)}>Close</button>
            <button className="btn btn-success" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderNow;
