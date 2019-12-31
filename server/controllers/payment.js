const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.charge = async (req, res, next) => {
  const accountId = req.body.id;
  let result = await stripe.charges.create({
    amount: 500,
    currency: "aud",
    source: accountId,
    description: "$5 for a credit"
  });
  console.log(result);
  res.send("payment controller");
};
