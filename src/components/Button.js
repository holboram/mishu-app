import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.scss";
import telefon from "../images/telefon-servicii-tehnice.svg";

const Button = () => {
  return (
    <Link to="tel: 0747 835 456">
      <button className={classes["btn"]}>
        <img
          src={telefon}
          loading="lazy"
          alt="Iconita numar de telefon 0747 457 394"
          width="39"
        />
        0747 835 456
      </button>
    </Link>
  );
};

export default Button;
