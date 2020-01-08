const Survey = require("../models/Survey");
const Mailer = require("../config/Mailer");
const _ = require("lodash");
const { URL } = require("url");
const { Path } = require("path-parser");
const surveyTemplate = require("../config/emailTemplates");
const User = require("../models/User");
const path = require("path");

exports.feedBack = (req, res) => {
  return res.sendFile(path.join(__dirname, "../ThankYou.html"));
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
exports.webHook = async (req, res, next) => {
  const events = _.map(req.body, ({ email, url }) => {
    const pathname = new URL(url).pathname;
    const p = new Path("/api/surveys/:surveyId/:answer");
    const match = p.test(pathname);
    if (match) {
      return {
        email,
        surveyId: match.surveyId,
        answer: match.answer
      };
    }
  });
  console.log(events);
};
