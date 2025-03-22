import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import '../css/Checkout.css';

// Load Stripe with your public key
const stripePromise = loadStripe('pk_test_51QLSOBEbMNQMsrvHVDmrj3HXXj0VR8rElQDkp8qrSozLNGsSA7xfdQDEKpUjy0XhA4WI4KFx0rLScIE5ZrfXzzqx00T72QTWgU');

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (location.state && location.state.cartItems) {
      setCartItems(location.state.cartItems);
      setTotalPrice(location.state.totalPrice);
    } else {
      const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
      if (savedCartItems) {
        setCartItems(savedCartItems);
        setTotalPrice(savedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0));
      }
    }
  }, [location]);

  const amount = Math.round(totalPrice * 100 + 500); // Convert totalPrice to paise and add ₹50 delivery fee

  useEffect(() => {
    const createPaymentIntent = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ amount }),
        });
        const data = await response.json();
        setClientSecret(data.clientSecret);
        setLoading(false);
      } catch (error) {
        setErrorMessage('Failed to create payment intent. Please try again.');
        setLoading(false);
      }
    };

    if (amount > 0) {
      createPaymentIntent();
    }
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: elements.getElement(CardElement) },
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      navigate('/order-confirmed', { state: { cartItems, totalPrice, paymentIntent } });
    }
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>

      <div className="bill-total-section">
        <h3>Bill Summary</h3>
        <div className="order-total">
          <p>Items Total: ₹{totalPrice.toFixed(2)}</p>
          <hr />
          <p>GST (8%): ₹{(totalPrice * 0.08).toFixed(2)}</p>
          <p>Delivery Charge: ₹50</p>
          <hr />
          <strong>Total: ₹{(totalPrice * 1.08 + 50).toFixed(2)}</strong>
        </div>
      </div>

      <div className="payment-method-section">
        <h3>Payment Method</h3>
        <div className="payment-options">
          <label>
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="credit-card"
              checked={paymentMethod === 'credit-card'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Credit / Debit Card
          </label>
        </div>

        {paymentMethod === 'credit-card' && (
          <div className="payment-form">
            <h4 className='card-details'>Card Details</h4>
            <CardElement />
          </div>
        )}
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <button
        className="confirm-order-btn"
        onClick={handleSubmit}
        disabled={!stripe || !clientSecret || loading}
      >
        {loading ? 'Processing...' : 'Confirm Order'}
      </button>
    </div>
  );
}

export default Checkout;
