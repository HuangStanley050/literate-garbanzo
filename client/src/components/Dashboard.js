import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { Link as RouterLink } from "react-router-dom";

const Dashboard = () => {
  const fabStyle = {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "absolute"
  };
  return (
    <div style={{ position: "relative", minHeight: "90vh" }}>
      <Fab
        size="large"
        component={RouterLink}
        to="/surveys/new"
        style={fabStyle}
        color="secondary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Dashboard;
