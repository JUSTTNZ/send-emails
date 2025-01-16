const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const stripeController = async(req, res) => {
    console.log(req.body);
    
    const { purchase, total_amount, shipping_fee } = req.body;

    const calculateOrderAmount = () => {
        return total_amount + shipping_fee;
    };

    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        
    })
    res.send('Stripe Route');   
}

module.exports = stripeController;