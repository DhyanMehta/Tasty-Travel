const express = require('express');
const mongoDB = require('./db');
const cors = require('cors');
const stripe = require('stripe'); // Stripe SDK
const RestaurantData = require('./models/Restaurant');

const app = express();
const PORT = 5000;

// Initialize Stripe with your secret key
const stripeSecretKey = 'YOUR_STRIPE_SECRET_KEY';
const stripeInstance = stripe(stripeSecretKey);

mongoDB();

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/LoginUser'));
app.use('/api/users', require('./routes/user'));

// Create Payment Intent route for Stripe
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body; // Amount in cents (₹1 = 100 cents)
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount: amount, // Amount in cents
      currency: 'inr', // Currency in INR
    });

    // Send client secret to the frontend
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Uncomment this line if you want to serve restaurant data from the backend
// app.use('/api', RestaurantData); 
// app.use('/api', require('./Routes/GetRestaurants'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
