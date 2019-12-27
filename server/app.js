const express = require("express");
const passport = require("passport");
const authRouter = require("./routes/auth");
const app = express();
require("./config/passport");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.get("/", (req, res) => res.send("Hello"));
app.use(authRouter);

module.exports = app;
