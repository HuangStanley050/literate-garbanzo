import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import backgroundIMG from "../assets/vacation.jpeg";

const Landing = props => {
  const landingStyle = {
    backgroundImage: `url(${backgroundIMG})`,
    height: "90vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  if (props.isAuth) {
    return <Redirect to="/surveys" />;
  }
  return (
    <div style={landingStyle}>
      <div>
        <h1 style={{ color: "yellow", fontSize: "3rem" }}>Survey App</h1>
        <h2 style={{ color: "yellow", marginLeft: "1rem" }}>
          Collect information from users
        </h2>
      </div>
    </div>
  );
};
const mapState = state => ({
  isAuth: state.auth.isAuth
});
export default connect(mapState)(Landing);
