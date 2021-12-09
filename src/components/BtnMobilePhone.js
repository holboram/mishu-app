import React from "react";

import phoneImg from "../assets/phone-icon-servicii-tehnice.png";

import classes from "./BtnMobilePhone.module.scss";

const BtnMobilePhone = () => {
  return (
    <a href="tel: 0747 456 234" className={classes["mobile-btn-phone"]}>
      <img src={phoneImg} alt="servicii tehnice telefon" width="60" />
    </a>
  );
};

export default BtnMobilePhone;
