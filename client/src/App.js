import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import SurveyNew from "./components/SurveyNew";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/surveys" component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
      </Switch>
    </div>
  );
}

export default App;
