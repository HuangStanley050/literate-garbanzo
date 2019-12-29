import * as actionType from "../actions/actionTypes";
const initialState = {
  isAuth: false,
  userInfo: {},
  loading: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN_OKAY:
      //console.log(action.token);
      localStorage.setItem("surveyApp", action.token);
      return {
        ...state,
        isAuth: true
      };
    default:
      return state;
  }
};

export default reducer;
