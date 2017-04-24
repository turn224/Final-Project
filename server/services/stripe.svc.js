var stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.charge = function(stripetransactionid, amount) {
    return stripe.charges.create({
        amount: amount,
        currency: 'usd',
        source: stripetransactionid,
        description: 'Hair Smoothie Bar'
    });
}