import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/PaymentPage.css';

function ConfirmBooking() {
    const location = useLocation();
    const navigate = useNavigate();

    // Extract booking details from the location state
    const { timeSlot, meal, date, numGuests, amount } = location.state || {};

    // Function to handle navigation to the home page or another page
    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="payment-page-container">
            <div className="payment-page-content">
                <h2>Booking Confirmed!</h2>
                <p>Your booking has been successfully confirmed.</p>
                <p><strong>Date:</strong> {date || 'N/A'}</p>
                <p><strong>Meal:</strong> {meal || 'N/A'}</p>
                <p><strong>Time Slot:</strong> {timeSlot || 'N/A'}</p>
                <p><strong>Guests:</strong> {numGuests || 'N/A'}</p>
                <p><strong>Total Amount:</strong> ${amount ? (amount / 100).toFixed(2) : '0.00'}</p>
                
                <button className="payment-btn" onClick={handleGoHome}>
                    Back to Home
                </button>
            </div>
        </div>
    );
}

export default ConfirmBooking;
