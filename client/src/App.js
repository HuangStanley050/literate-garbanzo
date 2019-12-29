import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginOkay } from "./store/actions/authActions";
import Container from "@material-ui/core/Container";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import SurveyNew from "./components/SurveyNew";

function App({ isAuth, loginOkay, history }) {
  useEffect(() => {
    if (window.location.search !== "" && !isAuth) {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("jwt");
      loginOkay(token);
      history.push("/surveys");
    }
  }, [history, isAuth, loginOkay]);
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
const mapState = state => ({
  isAuth: state.auth.isAuth
});
const mapDispatch = dispatch => ({
  loginOkay: token => dispatch(loginOkay(token))
});
export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(App)
);
