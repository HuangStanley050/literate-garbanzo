const Survey = require("../models/Survey");
const Mailer = require("../config/Mailer");
const surveyTemplate = require("../config/emailTemplates");
const User = require("../models/User");

exports.fetchSurveys = (req, res, next) => {};
exports.createSurvey = async (req, res, next) => {
  const { id } = req.user;
  const { title, subject, body, recipients } = req.body;
  const newSurvey = new Survey({
    title,
    subject,
    body,
    dateSent: Date.now(),
    recipients: recipients.split(",").map(email => ({ email: email.trim() })),
    user: id
  });
  const mailer = new Mailer(survey, surveyTemplate(survey));
  // const user = await User.findOne({ _id: id });
  // const surveyResult = await newSurvey.save();
  // user.surveys = [...user.surveys, surveyResult._id];
  // await user.save();
  // res.send("this is create survey route");
};
exports.webHook = (req, res, next) => {};
