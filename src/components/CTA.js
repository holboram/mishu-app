import React from "react";
import classes from "./CTA.module.scss";
import Button from "./Button";

const CTA = () => {
  return (
    <section className={classes["cta-section"]}>
      <div className={classes["cta-content"]}>
        <h3 className={classes["cta-content__heading"]}>
          Alegerea Perfectă pentru Casa Ta
        </h3>
        <p className={classes["cta-content__paragraph"]}>
          Achiziționarea unui aparat de aer condiționat de încredere începe cu
          un instalator de încredere
        </p>
        <div className={classes["cta-content__action-wrapper"]}>
          <span className={classes["cta-content__action"]}>Sună Acum</span>
          <Button telNo={"56456466"} />
        </div>
      </div>
    </section>
  );
};

export default CTA;
