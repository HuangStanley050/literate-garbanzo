import * as actionType from "./actionTypes";

export const sendSurvey = (values, history) => ({
  type: actionType.SUBMIT_SURVEY_START,
  payload: { values, history }
});

export const sendSurveyOkay = response => ({
  type: actionType.SUBMIT_SURVEY_OKAY,
  response
});

export const sendSurveyFail = err => ({
  type: actionType.SUBMIT_SURVEY_FAIL,
  err
});

export const fetchSurvey = () => ({ type: actionType.FETCH_SURVEYS_START });
export const fetchSurveyOkay = data => ({
  type: actionType.FETCH_SURVEYS_OKAY,
  data
});
export const fetchSurveyFail = err => ({
  type: actionType.FETCH_SURVEYS_FAIL,
  err
});
