const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const app = express();
require("./config/passport");

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("connected to database"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello"));
app.use(authRouter);

module.exports = app;
