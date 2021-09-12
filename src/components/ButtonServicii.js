import React from "react";
import { Link } from "react-router-dom";
import classes from "./ButtonServicii.module.scss";

const ButtonServicii = () => {
  return (
    <Link to="/servicii">
      <button className={classes["btn-servicii"]}>Servicii</button>
    </Link>
  );
};

export default ButtonServicii;
