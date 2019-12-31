const express = require("express");
const passport = require("passport");
const router = express.Router();
const paymentController = require("../controllers/payment");

router.post(
  "/api/stripe",
  //passport.authenticate("jwt", { session: false }),
  paymentController.charge
);

module.exports = router;
