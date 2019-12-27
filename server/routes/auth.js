const express = require("express");
const passport = require("passport");
const router = express.Router();

router
  .get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
      session: false
    })
  )
  .get(
    "/auth/google/callback",
    passport.authenticate("google", { session: false }),
    (req, res) => {
      console.log(req.user);
      res.send("you have been authenticated");
    }
  );

module.exports = router;
