import React from "react";

import SurveyListItem from "./SurveyListItem";

const SurveyList = ({ surveys }) => {
  return surveys.map((survey, index) => {
    return <SurveyListItem key={index} />;
  });
};

export default SurveyList;
