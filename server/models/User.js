const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleID: String,
  email: String,
  name: String,
  surveys: [{ type: Schema.Types.ObjectId, ref: "Survey" }],
  credits: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("User", userSchema);
