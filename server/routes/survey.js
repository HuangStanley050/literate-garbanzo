const express = require("express");
const router = express.Router();
const surveyController = require("../controllers/survey");

router
  .get("/api/surveys", surveyController.fetchSurveys)
  .post("/api/surveys/webhooks", surveyController.webHook)
  .post("/api/surveys", surveyController.createSurvey);

module.exports = router;
