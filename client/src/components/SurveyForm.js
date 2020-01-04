import React from "react";
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";
import SurveyField from "./SurveyField";

const validate = values => {
  const errors = {};
  const requiredFields = ["Title", "Subject", "Body", "Recipients"];
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

const FIELDS = [
  { label: "Subject", name: "subject" },
  { label: "Title", name: "title" },
  { label: "Question", name: "body" },
  { label: "Recipients emails", name: "recipients" }
];

const SurveyForm = props => {
  const { handleSubmit } = props;
  return (
    <form
      style={{ textAlign: "center", marginTop: "3rem" }}
      onSubmit={handleSubmit}
    >
      {FIELDS.map((field, index) => {
        return (
          <div key={index}>
            <Field
              name={field.name}
              label={field.label}
              type="text"
              component={SurveyField}
            />
          </div>
        );
      })}
      <div>
        <Button
          style={{ marginTop: "2rem" }}
          type="submit"
          variant="contained"
          color="primary"
        >
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
