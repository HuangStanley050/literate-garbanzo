import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { Link as RouterLink, withRouter } from "react-router-dom";
import { logout } from "../store/actions/authActions";
import Payment from "./Payment";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = ({ isAuth, logout, history }) => {
  const classes = useStyles();
  const LoginLinks = (
    <>
      <Payment />
      <Button color="inherit" href="#">
        Credits: 5
      </Button>
      <Button
        color="inherit"
        onClick={() => {
          if (window.confirm("Are you logging out?")) {
            logout();
            history.push("/");
          }
        }}
      >
        Log out
      </Button>
    </>
  );
  const LogoutLink = (
    <Button color="inherit" href="/auth/google">
      Login with Google
    </Button>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            component={RouterLink}
            to="/"
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <AssignmentIndIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            SurveyApp
          </Typography>
          {isAuth ? LoginLinks : LogoutLink}
        </Toolbar>
      </AppBar>
    </div>
  );
};
const mapState = state => ({
  isAuth: state.auth.isAuth
});
export default withRouter(
  connect(
    mapState,
    { logout }
  )(Header)
);
