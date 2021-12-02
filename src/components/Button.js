import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <button className={classes["btn-servicii"]}>
      <Link to="/servicii" className={classes["btn-servicii-link"]}>
        {props.text}
      </Link>
    </button>
  );
};

export default Button;
