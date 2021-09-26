import React from "react";
import classes from "./CTA.module.scss";

const CTA = () => {
  return (
    <section className={classes["cta-section"]}>
      <div className={classes["cta-section__content"]}>
        <h3 className={classes["cta-section__heading"]}>
          Alegerea Perfectă pentru Casa Ta
        </h3>
        <p className={classes["cta-section__paragraph"]}>
          Achiziționarea unui aparat de aer condiționat de încredere începe cu
          un instalator de încredere
        </p>
        <button></button>
      </div>
    </section>
  );
};

export default CTA;
