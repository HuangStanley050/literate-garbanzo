import React, { useState } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

const SurveyNew = () => {
  const [currentPage, setPage] = useState(1);
  const nextPage = () => setPage(currentPage + 1);
  const prevPage = () => setPage(currentPage - 1);
  return (
    <div>
      <SurveyForm />
      <SurveyFormReview />
    </div>
  );
};

export default SurveyNew;
