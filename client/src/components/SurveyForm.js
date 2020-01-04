import React from "react";
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";
import SurveyField from "./SurveyField";

const validate = values => {
  const errors = {};
  const requiredFields = ["Title", "Subject", "Body", "favoriteColor", "notes"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const SurveyForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="Subject"
          type="text"
          component={SurveyField}
          label="Subject"
        />
      </div>
      <div>
        <Field name="Title" type="text" component={SurveyField} label="Title" />
      </div>
      <div>
        <Field
          name="Body"
          type="text"
          component={SurveyField}
          label="Question"
        />
      </div>

      <div>
        <Button type="submit" variant="contained" color="primary">
          Create
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "surveyForm", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SurveyForm);
