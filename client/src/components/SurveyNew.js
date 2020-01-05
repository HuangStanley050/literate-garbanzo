import React, { useState } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import { connect } from "react-redux";

const SurveyNew = props => {
  const [currentPage, setPage] = useState(1);
  const handleSubmit = () => {
    console.log(props.form);
  };
  const nextPage = () => setPage(currentPage + 1);
  const prevPage = () => setPage(currentPage - 1);
  return (
    <div>
      {currentPage === 1 && <SurveyForm onSubmit={nextPage} />}
      {currentPage === 2 && (
        <SurveyFormReview
          formFields={props.form.values || []}
          prevPage={prevPage}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
const mapState = state => ({
  form: state.form.surveyForm
});
export default connect(mapState)(SurveyNew);
