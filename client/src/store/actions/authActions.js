import * as actionType from "./actionTypes";

export const loginOkay = token => ({
  type: actionType.LOGIN_OKAY,
  token
});
