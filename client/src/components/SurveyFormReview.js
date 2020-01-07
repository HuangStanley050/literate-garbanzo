import React from "react";
import Button from "@material-ui/core/Button";
import EmailIcon from "@material-ui/icons/Email";
import { reduxForm, getFormValues, Field } from "redux-form";
import { connect } from "react-redux";
import { sendSurvey } from "../store/actions/surveyActions";
import SurveyField from "./SurveyField";

let Review = props => {
  const formFields = Object.keys(props.values);
  const handleSubmit = () => {
    console.log("submitting");
    console.log(props.values);
    props.dispatch(sendSurvey(props.values));
  };
  return (
    <div style={{ textAlign: "center", width: "80%", margin: "3rem auto" }}>
      <h1>Review</h1>

      {formFields.map((field, index) => {
        return (
          <div key={index}>
            <Field
              disabled
              style={{ width: "100%" }}
              name={field}
              label={field}
              type="text"
              component={SurveyField}
            />
          </div>
        );
      })}
      <div
        style={{
          margin: "2rem auto",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <Button onClick={props.prevPage} variant="contained" color="primary">
          Go back
        </Button>
        <Button
          startIcon={<EmailIcon />}
          onClick={handleSubmit}
          variant="contained"
          color="secondary"
        >
          Send Survey
        </Button>
      </div>
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
