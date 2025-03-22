import React from 'react';
import { useLocation ,useNavigate} from 'react-router-dom';
import '../css/PaymentPage.css';

function PaymentPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { timeSlot, meal, date, numGuests, amount } = location.state || {};

    const handlePayment = async () => {
        console.log('Proceeding with payment for', amount);
        // You can integrate Stripe or another payment gateway here
       
            console.log('Proceeding with payment for', amount);
    
            // Simulate a payment process
            setTimeout(() => {
                // Redirect to the booking confirmation page after payment
                navigate('/bookingconfirm', {
                    state: { timeSlot, meal, date, numGuests, amount }
                });
            }, 1000); // Add a short delay to mimic payment processing
        
    };

    return (
        <div className="payment-page-container">
            <div className="payment-page-content">
                <h2>Confirm Your Booking</h2>
                <p><strong>Date:</strong> {date || 'N/A'}</p>
                <p><strong>Meal:</strong> {meal || 'N/A'}</p>
                <p><strong>Time Slot:</strong> {timeSlot || 'N/A'}</p>
                <p><strong>Guests:</strong> {numGuests || 'N/A'}</p>
                <p><strong>Total Amount:</strong> ${amount ? (amount / 100).toFixed(2) : '0.00'}</p>
                
                <button className="payment-btn" onClick={handlePayment}>
                    Confirm and Pay
                </button>
            </div>
        </div>
    );
}

export default PaymentPage;
