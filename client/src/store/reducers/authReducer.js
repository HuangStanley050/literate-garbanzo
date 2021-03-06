import * as actionType from "../actions/actionTypes";
import jwt_decode from "jwt-decode";
const initialState = {
  isAuth: false,
  userInfo: {},
  loading: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SUBMIT_SURVEY_START:
      return {
        ...state,
        loading: true
      };
    case actionType.SUBMIT_SURVEY_OKAY:
      return {
        ...state,
        loading: false,
        userInfo: { ...action.response }
      };
    case actionType.MAKE_PAYMENT_OKAY:
      console.log(action.info);
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...action.info
        }
      };
    case actionType.LOGOUT:
      return {
        ...state,
        isAuth: false,
        userInfo: {}
      };
    case actionType.LOGIN_OKAY:
      //console.log(action.token);
      const decoded = jwt_decode(action.token);
      //console.log(decoded);
      localStorage.setItem("surveyApp", action.token);
      return {
        ...state,
        isAuth: true,
        userInfo: {
          ...state.userInfo,
          ...decoded
        }
      };
    default:
      return state;
  }
};

export default reducer;
