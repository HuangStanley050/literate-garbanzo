const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipientSchema = schema({
  email: String,
  responded: { type: Boolean, default: false }
});

const surveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
  recipients: [recipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  dateSent: Date,
  lastResponded: Date
});

module.exports = mongoose.model("Survey", surveySchema);
