import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../css/BookTable.css';

function BookTable() {
    const [timeSlot, setTimeSlot] = useState('');
    const [meal, setMeal] = useState('Lunch');
    const [date, setDate] = useState('Today');
    const [numGuests, setNumGuests] = useState(1);
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [availableTables, setAvailableTables] = useState([1, 2, 3]);
    const [errorMessage, setErrorMessage] = useState(''); // State to store error message
    
    const navigate = useNavigate(); // Initialize navigate function

    const handlePaymentRedirect = () => {
        // Check if time slot is selected
        if (!timeSlot) {
            setErrorMessage('Please select a time slot before proceeding.');
            return; // Prevent navigation if no time slot is selected
        }

        // Reset error message if a time slot is selected
        setErrorMessage('');

        // Prepare the payment details and pass them to the PaymentPage
        const bookingDetails = {
            timeSlot,
            meal,
            date,
            numGuests,
            amount: numGuests * 100, // Calculate amount based on guests
        };

        // Redirect to PaymentPage with booking details
        navigate('/paymentpage', { state: bookingDetails });
    };

    return (
        <div className="full-page-center">
            <div className="book-table-container">
                <h2 className="title">Book a Table</h2>

                <div className="select-group">
                    <label className="guest-label">Select Number of Guests:</label>
                    <select
                        value={numGuests}
                        onChange={(e) => setNumGuests(e.target.value)}
                        className="guest-select"
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                                {num} Guest{num > 1 ? 's' : ''}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="select-group">
                    <label>Select Date:</label>
                    <div className="date-options">
                        <button
                            className={`date-btn ${date === 'Today' ? 'active' : ''}`}
                            onClick={() => setDate('Today')}
                        >
                            Today
                        </button>
                        <button
                            className={`date-btn ${date === 'Tomorrow' ? 'active' : ''}`}
                            onClick={() => setDate('Tomorrow')}
                        >
                            Tomorrow
                        </button>
                        <button
                            className={`date-btn ${date === 'Saturday' ? 'active' : ''}`}
                            onClick={() => setDate('Saturday')}
                        >
                            Saturday
                        </button>
                    </div>
                </div>

                <div className="select-group">
                    <label>Select Meal:</label>
                    <div className="meal-options">
                        <button
                            className={`meal-btn ${meal === 'Lunch' ? 'active' : ''}`}
                            onClick={() => { setMeal('Lunch'); setTimeSlot(''); }}
                        >
                            Lunch
                        </button>
                        <button
                            className={`meal-btn ${meal === 'Dinner' ? 'active' : ''}`}
                            onClick={() => { setMeal('Dinner'); setTimeSlot(''); }}
                        >
                            Dinner
                        </button>
                    </div>
                </div>

                <div className="select-group">
                    <label>Select Time Slot:</label>
                    <div className="time-options">
                        {['12:00 PM', '12:15 PM', '12:30 PM', '1:00 PM', '6:00 PM', '6:30 PM', '7:00 PM'].map((slot) => (
                            <button
                                key={slot}
                                className={`time-btn ${timeSlot === slot ? 'active' : ''}`}
                                onClick={() => setTimeSlot(slot)}
                            >
                                {slot}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Display error message if no time slot is selected */}
                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <button className="proceed-btn" onClick={handlePaymentRedirect}>
                    Proceed to Payment
                </button>

                {bookingSuccess && (
                    <div className="alert-success">
                        Booking Successful! Available Tables: {availableTables.join(', ')}
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookTable;
