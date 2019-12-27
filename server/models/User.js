const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  googleID: String,
  email: String,
  name: String
});

module.exports = mongoose.model("User", userSchema);
