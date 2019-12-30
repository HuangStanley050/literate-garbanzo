import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Button from "@material-ui/core/Button";
import axios from "axios";

const Payment = props => {
  const onToken = async token => {
    console.log(token);
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
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <Button variant="contained" color="secondary">
        Add Credit
      </Button>
    </StripeCheckout>
  );
};

export default Payment;
