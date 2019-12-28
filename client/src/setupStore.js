import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { authReducer, dataReducer } from "./store/reducers";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer
  // error: errorReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

export default store;
