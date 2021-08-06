import React, { useState, useEffect } from "react";
import "./Lists.css";

import Loader from "react-loader-spinner";

import {
  Button,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Lists = () => {
  const classes = useStyles();
  const history = useHistory();
  const [user, setUser] = useState("");

  const fetchHandler = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((result) => setUser(result));
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      fetchHandler();
    }, 6000);

    return () => {
      clearTimeout(interval);
    };
  }, []);

  return (
    <>
      {user.length > 0 ? (
        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead style={{ color: "white" }}>
                <TableRow style={{ background: "teal", fontWeight: "700" }}>
                  <TableCell>Serial No</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Website</TableCell>
                  <TableCell align="left">User Name</TableCell>
                  <TableCell align="left">Phone</TableCell>
                  <TableCell align="left">email</TableCell>
                  <TableCell align="left">Company</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.website}</TableCell>
                    <TableCell align="left">{row.username}</TableCell>
                    <TableCell align="left">{row.phone}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.company.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="actions">
            <Button
              onClick={() => history.push("/chart")}
              style={{ marginRight: "1rem", fontSize: "20px" }}
              variant="outlined"
              color="primary"
            >
              Next Page
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <Loader type="Circles" className="loader" color="red" />
          <p>Please Wait...</p>
          <div className="actions">
            <Button
              onClick={() => history.push("/chart")}
              style={{ fontSize: "20px",position:"relative",bottom:"-29.5rem" }}
              variant="outlined"
              color="primary"
            >
              Next Page
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Lists;
