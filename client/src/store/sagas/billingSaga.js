import * as actionType from "../actions/actionTypes";
import { takeEvery, put } from "redux-saga/effects";
import { paymentOkay } from "../actions/billingActions";
import axios from "axios";
import API from "../../api";

function* billingSagaWorker(action) {
  const { token } = yield action;
  let result;
  const jwt = yield localStorage.getItem("surveyApp");
  try {
    result = yield axios({
      headers: { Authorization: `bearer ${jwt}` },
      method: "post",
      url: API.payment,
      data: token
    });
    console.log(result.data);
  } catch (err) {
    console.log(err);
  }
}

export default function* billingSagaWatcher() {
  yield takeEvery(actionType.MAKE_PAYMENT, billingSagaWorker);
}
