import React from "react";
import Button from "@material-ui/core/Button";
import { reduxForm } from "redux-form";

const Review = props => {
  return (
    <div>
      <h1>Review</h1>
      <Button onClick={props.prevPage} variant="contained" color="primary">
        Go back
      </Button>
      <Button variant="contained" color="secondary">
        Send Survey
      </Button>
    </div>
  );
};

export default reduxForm({
  form: "surveyForm", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(Review);
