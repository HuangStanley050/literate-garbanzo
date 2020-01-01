const mongoose = require("mongoose");
const schema = mongoose.Schema;

const surveySchema = schema({
  title: String,
  subject: String,
  body: String,
  recipients: [String],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 }
});

module.exports = mongoose.model("Survey", surveySchema);
