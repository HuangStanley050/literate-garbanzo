import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const SurveyList = ({ surveys }) => {
  const classes = useStyles();

  return (
    <div
      style={{
        width: "80%",
        textAlign: "center",
        margin: "3rem auto"
      }}
    >
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Survey Title</TableCell>
              <TableCell align="right">Subject</TableCell>
              <TableCell align="right">Question</TableCell>
              <TableCell align="right">Yes</TableCell>
              <TableCell align="right">No</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {surveys.map(survey => (
              <TableRow key={survey._id}>
                <TableCell component="th" scope="row">
                  {survey.title}
                </TableCell>
                <TableCell align="right">{survey.subject}</TableCell>
                <TableCell align="right">{survey.body}</TableCell>
                <TableCell align="right">{survey.Yes}</TableCell>
                <TableCell align="right">{survey.no}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SurveyList;
