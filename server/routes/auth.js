const express = require("express");
const passport = require("passport");
const router = express.Router();

router
  .get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  )
  .get("/auth/google/callback", (req, res) => {
    res.send("redirected back from google");
  });

module.exports = router;
