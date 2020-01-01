const express = require("express");
const passport = require("passport");
const router = express.Router();
const surveyController = require("../controllers/survey");

router
  .get("/api/surveys", surveyController.fetchSurveys)
  .post("/api/surveys/webhooks", surveyController.webHook)
  .post(
    "/api/surveys",
    passport.authenticate("jwt", { session: false }),
    surveyController.createSurvey
  );

module.exports = router;
