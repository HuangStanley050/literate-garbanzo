import * as actionType from "../actions/actionTypes";
import { takeEvery, put } from "redux-saga/effects";
import { sendSurveyOkay, sendSurveyFail } from "../actions/surveyActions";
import axios from "axios";
import API from "../../api";

function* surveySagaWorker(action) {
  // yield console.log("survey start sending");
  // yield console.log(action);
  const token = yield localStorage.getItem("surveyApp");
  let result;
  try {
    result = yield axios({
      headers: { Authorization: `bearer ${token}` },
      method: "post",
      url: API.sendSurvey,
      data: action.values
    });
    console.log(result.data);
    yield put(sendSurveyOkay(result.data.user));
  } catch (err) {
    console.log(err);
    yield put(sendSurveyFail(err));
  }
}

export default function* surveySagaWatcher() {
  yield takeEvery(actionType.SUBMIT_SURVEY_START, surveySagaWorker);
}
