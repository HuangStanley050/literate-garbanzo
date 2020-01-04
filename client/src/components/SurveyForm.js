import React from "react";
import { Field, reduxForm } from "redux-form";
import SurveyField from "./SurveyField";

const SurveyForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={SurveyField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={SurveyField}
        label="Last Name"
      />
      <div>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "wizard", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(SurveyForm);
