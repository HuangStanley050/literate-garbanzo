import { all } from "redux-saga/effects";
import billingSaga from "./billingSaga";
import dataSaga from "./dataSaga";

export default function* rootSaga() {
  yield all([billingSaga(), dataSaga()]);
}
