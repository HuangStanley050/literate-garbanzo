import * as actionType from "../actions/actionTypes";
const initialState = {
  data: [],
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_SURVEYS_START:
      return {
        ...state,
        loading: true
      };
    case actionType.FETCH_SURVEYS_OKAY:
      return {
        ...state,
        data: [...action.data],
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
