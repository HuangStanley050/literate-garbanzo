import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { makePayment } from "../store/actions/billingActions";

const Payment = ({ dispatch }) => {
  const onToken = token => {
    dispatch(makePayment(token));
  };
  return (
    <StripeCheckout
      ComponentClass="div"
      name="Survey App"
      amount={500}
      panelLabel="Make Payment"
      label="Add Credit"
      currency="AUD"
      token={onToken}
      stripeKey={"pk_test_rOnIUC7hbo7ElO2ZOTW2mbDZ	"}
    >
      <Button
        onClick={() => makePayment("stuff")}
        variant="contained"
        color="secondary"
      >
        Add Credit
      </Button>
    </StripeCheckout>
  );
};

export default connect()(Payment);
