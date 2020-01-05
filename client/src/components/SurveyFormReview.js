import React from "react";
import Button from "@material-ui/core/Button";
import { reduxForm } from "redux-form";

const Review = props => {
  // console.log("from form review");
  // console.log(props.formFields);
  return (
    <div>
      <h1>Review</h1>
      <Button onClick={props.prevPage} variant="contained" color="primary">
        Go back
      </Button>
      <Button
        onClick={props.handleSubmit}
        variant="contained"
        color="secondary"
      >
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
