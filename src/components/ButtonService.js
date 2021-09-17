import React from "react";
import { Link } from "react-router-dom";
import classes from "./ButtonService.module.scss";

const ButtonService = () => {
  return (
    <Link to="/servicii">
      <button className={classes["btn-servicii"]}>Servicii</button>
    </Link>
  );
};

export default ButtonService;
