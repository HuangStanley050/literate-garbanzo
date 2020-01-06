import * as actionType from "./actionTypes";

export const sendSurvey = values => ({
  type: actionType.SUBMIT_SURVEY_START,
  values
});

export const sendSurveyOkay = response => ({
  type: actionType.SUBMIT_SURVEY_OKAY,
  response
});

export const sendSurveyFail = err => ({
  type: actionType.SUBMIT_SURVEY_FAIL,
  err
});
