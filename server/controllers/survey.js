const Survey = require("../models/Survey");
const Mailer = require("../config/Mailer");
const surveyTemplate = require("../config/emailTemplates");
const User = require("../models/User");

exports.feedBack = (req, res) => {
  return res.send("Thank you for your feedback");
};
exports.fetchSurveys = (req, res, next) => {};
exports.createSurvey = async (req, res, next) => {
  const { id } = req.user;
  let user;
  const { title, subject, body, recipients } = req.body;
  const newSurvey = new Survey({
    title,
    subject,
    body,
    dateSent: Date.now(),
    recipients: recipients.split(",").map(email => ({ email: email.trim() })),
    user: id
  });
  const mailer = new Mailer(newSurvey, surveyTemplate(newSurvey));

  try {
    const response = await mailer.send();
    user = await User.findOne({ _id: id });
    const surveyResult = await newSurvey.save();
    user.surveys = [...user.surveys, surveyResult._id];
    user.credits--;
    user = await user.save();
    return res.status(200).send({ message: "Survey created and sent", user });
  } catch (err) {
    console.log(err);
    return res.status(422).send(err);
  }
};
exports.webHook = (req, res, next) => {};
