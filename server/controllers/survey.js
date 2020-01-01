const Survey = require("../models/Survey");
exports.fetchSurveys = (req, res, next) => {};
exports.createSurvey = async (req, res, next) => {
  const { title, subject, body, recipients } = req.body;
  const newSurvey = new Survey({
    title,
    subject,
    body,
    recipients: recipients.split(",").map(email => ({ email }))
  });
  res.send("this is create survey route");
};
exports.webHook = (req, res, next) => {};
