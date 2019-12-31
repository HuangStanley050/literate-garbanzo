import * as actionType from "./actionTypes";

export const makePayment = token => ({
  type: actionType.MAKE_PAYMENT,
  token
});

export const paymentOkay = info => ({
  type: actionType.MAKE_PAYMENT_OKAY,
  info
});
