const Survey = require("../models/Survey");
exports.fetchSurveys = (req, res, next) => {};
exports.createSurvey = async (req, res, next) => {
  const { id } = req.user;
  const { title, subject, body, recipients } = req.body;

  const newSurvey = new Survey({
    title,
    subject,
    body,
    recipients: recipients.split(",").map(email => ({ email })),
    user: id
  });
  await newSurvey.save();
  res.send("this is create survey route");
};
exports.webHook = (req, res, next) => {};
