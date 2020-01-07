import { all } from "redux-saga/effects";
import billingSaga from "./billingSaga";
import surveySaga from "./surveySaga";

export default function* rootSaga() {
  yield all([billingSaga(), surveySaga()]);
}
