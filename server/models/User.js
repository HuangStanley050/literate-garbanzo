const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  googleID: String,
  email: String,
  name: String,
  credits: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("User", userSchema);
