import * as actionType from "../actions/actionTypes";
import { takeEvery, put } from "redux-saga/effects";
import { paymentOkay } from "../actions/billingActions";
import API from "../../api";
function* billingSagaWorker(action) {
  yield console.log(action);
}

export default function* billingSagaWatcher() {
  yield takeEvery(actionType.MAKE_PAYMENT, billingSagaWorker);
}
