import React from "react";
import classes from "./ButtonPhoneNo.module.scss";
import phone from "../assets/telefon-servicii-tehnice.svg";

const ButtonPhoneNo = () => {
  return (
    <button className={classes["btn"]}>
      <a href="tel: 0747 835 456">
        <img
          src={phone}
          loading="lazy"
          alt="numar de telefon 0747 457 394"
          width="39"
        />
        0747 835 456
      </a>
    </button>
  );
};

export default ButtonPhoneNo;
