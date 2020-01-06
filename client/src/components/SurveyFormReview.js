import React from "react";
import Button from "@material-ui/core/Button";
import { reduxForm, getFormValues, Field } from "redux-form";
import { connect } from "react-redux";
import SurveyField from "./SurveyField";

let Review = props => {
  const formFields = Object.keys(props.values);

  return (
    <div>
      <h1>Review</h1>
      <div>
        {formFields.map((field, index) => {
          return (
            <div key={index}>
              <Field
                style={{ width: "100%" }}
                name={field}
                label={field}
                type="text"
                component={SurveyField}
              />
            </div>
          );
        })}
      </div>
      <Button onClick={props.prevPage} variant="contained" color="primary">
        Go back
      </Button>
      <Button onClick={props.onSubmit} variant="contained" color="secondary">
        Send Survey
      </Button>
    </div>
  );
};

Review = connect(state => ({
  values: getFormValues("surveyForm")(state)
}))(Review);

export default reduxForm({
  form: "surveyForm", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(Review);
