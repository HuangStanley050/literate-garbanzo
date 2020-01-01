const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const User = require("../models/User");

exports.charge = async (req, res, next) => {
  const accountId = req.body.id;
  const userInfo = req.user;
  let user = await User.findOne({ googleID: userInfo.googleID });
  let result = await stripe.charges.create({
    amount: 500,
    currency: "aud",
    source: accountId,
    description: "$5 for a credit"
  });
  user.credits++;
  const updatedUser = await user.save();
  return res.status(200).send({ message: "payment successful", updatedUser });
};
