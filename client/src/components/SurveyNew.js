import React, { useState } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

import { reduxForm } from "redux-form";
// import { connect } from "react-redux";

let SurveyNew = props => {
  const [currentPage, setPage] = useState(1);
  // const handleSubmit = () => {
  //   console.log("submitting");
  //   /*
  //   {subject,title,body,recipients}
  //    */
  //   //props.survey(props.form.values);
  // };
  const nextPage = () => setPage(currentPage + 1);
  const prevPage = () => setPage(currentPage - 1);
  return (
    <div>
      {currentPage === 1 && <SurveyForm onSubmit={nextPage} />}
      {currentPage === 2 && <SurveyFormReview prevPage={prevPage} />}
    </div>
  );
};

// const mapState = state => ({
//   form: state.form.surveyForm
// });
// const mapDispatch = dispatch => ({
//   survey: values => dispatch(sendSurvey(values))
// });

// SurveyNew = connect(
//   mapState,
//   mapDispatch
// )(SurveyNew);

export default reduxForm({
  form: "surveyForm"
})(SurveyNew);
