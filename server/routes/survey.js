const express = require("express");
const passport = require("passport");
const router = express.Router();
const surveyController = require("../controllers/survey");
const Middleware = require("../middlewares");

router
  .get("/api/surveys/:surveyId/:answer", surveyController.feedBack)
  .get("/api/surveys", surveyController.fetchSurveys)
  .post("/api/surveys/webhooks", surveyController.webHook)
  .post(
    "/api/surveys",
    passport.authenticate("jwt", { session: false }),
    Middleware.checkCredit,
    surveyController.createSurvey
  );

module.exports = router;
