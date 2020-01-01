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
      //console.log(decoded._doc);
      localStorage.setItem("surveyApp", action.token);
      return {
        ...state,
        isAuth: true,
        userInfo: {
          ...state.userInfo,
          ...decoded._doc
        }
      };
    default:
      return state;
  }
};

export default reducer;
