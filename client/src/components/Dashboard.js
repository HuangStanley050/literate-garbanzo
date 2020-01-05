import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

const Dashboard = ({ credits }) => {
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
        disabled={credits <= 0}
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
const mapState = state => ({
  credits: state.auth.userInfo.credits
});
export default connect(mapState)(Dashboard);
