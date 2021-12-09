import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      className={`${classes["btn-servicii"]} ${props.className}`}
      type={props.type || "button"}
    >
      {props.telNo && (
        <a href={`tel:${props.telNo}`} className={classes["btn-servicii-link"]}>
          {props.children}
        </a>
      )}

      {props.telNo || (
        <Link to="/service" className={classes["btn-servicii-link"]}>
          {props.text}
        </Link>
      )}
    </button>
  );
};

export default Button;
