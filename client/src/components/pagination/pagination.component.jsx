import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import "./pagination.css";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function BasicPagination() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination count={10} color="secondary" />
    </div>
  );
}
