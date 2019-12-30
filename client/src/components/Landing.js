import React from "react";
import backgroundIMG from "../assets/vacation.jpeg";

const Landing = () => {
  const landingStyle = {
    backgroundImage: `url(${backgroundIMG})`,
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
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

export default Landing;
