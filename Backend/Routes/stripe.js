// stripe.js
const express = require('express');
const stripe = require('stripe');
const router = express.Router();

const createPaymentIntent = (stripeSecretKey) => {
  const stripeInstance = stripe(stripeSecretKey);

  router.post('/', async (req, res) => {
    const { amount } = req.body; // Total amount in cents (₹1 = 100 cents)
    
    try {
      const paymentIntent = await stripeInstance.paymentIntents.create({
        amount: amount, // The amount to charge in cents
        currency: 'inr', // Currency in INR
      });

      res.send({
        clientSecret: paymentIntent.client_secret, // clientSecret to be used in the frontend
      });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });

  return router;
};

module.exports = createPaymentIntent;
