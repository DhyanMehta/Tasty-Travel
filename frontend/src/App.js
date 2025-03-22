import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Screens/Signup";
import HomePage from "./Screens/HomePage";
import Login from "./Screens/Login";
import RestaurantList from "./Components/RestaurantList"; 
import OrderNow from './Screens/OrderNow';
import BookTable from './Screens/BookTable';
import Checkout from './Screens/Checkout';
import OrderDetails from './Screens/OrderDetails';
import 'leaflet/dist/leaflet.css';
import Contact from './Screens/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewForm from './Components/ReviewForm';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import OrderConfirmed from './Screens/OrderConfirm';
import PaymentPage from './Screens/PaymentPage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ConfirmBooking from './Screens/ConfirmBooking';
import About from './Screens/About';

const stripePromise = loadStripe('pk_test_51QLSOBEbMNQMsrvHVDmrj3HXXj0VR8rElQDkp8qrSozLNGsSA7xfdQDEKpUjy0XhA4WI4KFx0rLScIE5ZrfXzzqx00T72QTWgU');

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <Router>
        <Elements stripe={stripePromise}>
      <div className="main-content">
        <Navbar cartItems={cartItems} setCartItems={setCartItems} />
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage    
                cartItems={cartItems}
                setCartItems={setCartItems}
                totalPrice={totalPrice}
              />
            } 
          />
          <Route path="/createuser" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/order" element={<OrderNow cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/booktable" element={<BookTable />} />
          {/* <Route path="/Restaurantcard" element={<RestaurantCard/>}/> */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="restaurantlist" element={<RestaurantList/>}/>
          <Route path="/order-confirmed" element={<OrderConfirmed />} />
          <Route path="/paymentpage" element={<PaymentPage/>}/>
          <Route path="/bookingconfirm" element={<ConfirmBooking/>}/>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ReviewForm" element={<ReviewForm />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
      </Elements>
      
      <Footer />
    </Router>
  );
}

export default App;
