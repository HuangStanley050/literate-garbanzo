import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import SurveyNew from "./components/SurveyNew";

function App() {
  useEffect(() => {
    console.log(window.location.search);
  }, []);
  return (
    <Container maxWidth="lg">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/surveys" component={Dashboard} />
        <Route path="/surveys/new" component={SurveyNew} />
      </Switch>
    </Container>
  );
}

export default App;
