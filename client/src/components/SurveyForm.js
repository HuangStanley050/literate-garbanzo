import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link as RouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SurveyField from "./SurveyField";

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
      style={{ textAlign: "center", margin: "3rem auto", width: "80%" }}
      onSubmit={handleSubmit}
    >
      {FIELDS.map((field, index) => {
        return (
          <div key={index}>
            <Field
              style={{ width: "100%" }}
              name={field.name}
              label={field.label}
              type="text"
              component={SurveyField}
            />
          </div>
        );
      })}
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <Button
          style={{ marginTop: "2rem" }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Create
        </Button>
        <Button
          style={{ marginTop: "2rem" }}
          component={RouterLink}
          to="/surveys"
          variant="contained"
          color="secondary"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validateEmails = emails => {
  //console.log("i am running");
  const invalidEmails = emails
    .split(",")
    .map(email => email.trim())
    .filter(email => re.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails} `;
  }
  return null;
};

const validate = values => {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || "");
  const requiredFields = ["title", "subject", "body", "recipients"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  //console.log(errors);
  return errors;
};

export default reduxForm({
  form: "surveyForm", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(SurveyForm);
