import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.scss";

const Button = (props) => {
  if (!props.text) {
    return (
      <a
        href={`tel:${props.telNo}`}
        className={classes["btn-servicii-link"]}
        type={props.type || "button"}
      >
        {props.telNo}
      </a>
    );
  }

  if (!props.telNo) {
    return (
      <Link
        to="/service"
        className={classes["btn-servicii-link"]}
        type={props.type || "button"}
      >
        {props.text}
      </Link>
    );
  }
};

export default Button;
