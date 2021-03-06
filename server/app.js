const express = require("express");
//const passport = require("passport");
const path = require("path");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const paymentRouter = require("./routes/payment");
const surveyRouter = require("./routes/survey");
const app = express();
require("./config/passport");

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log("connected to database"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client/build")));

app.use(authRouter);
app.use(paymentRouter);
app.use(surveyRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../client/build/index.html"));
});

module.exports = app;
