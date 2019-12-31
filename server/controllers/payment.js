const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/*

stripe.charges.create({
  amount: 1000,
  currency: "aud",
  source: "tok_visa",
}, {
  stripe_account: "{{CONNECTED_STRIPE_ACCOUNT_ID}}",
}).then(function(charge) {
  // asynchronously called
});
 */

exports.charge = (req, res, next) => {
  res.send("payment controller");
};
