import React from "react";
import TextField from "@material-ui/core/TextField";

const SurveyField = ({
  input,
  label,
  type,
  meta: { touched, error, invalid },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  ></TextField>
);

export default SurveyField;
