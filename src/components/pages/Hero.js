import React from "react";
import ButtonServicii from "../ButtonServicii";
import classes from "./Hero.module.scss";

import HeroImage from "../../images/hero-image-instalare-aer-conditionat-min.png";
import HeroImageMobile from "../../images/hero-image-instalare-aer-conditionat-min-p-500.png";
import HeroImageMobileLarge from "../../images/hero-image-instalare-aer-conditionat-min.png";

const Hero = () => {
  return (
    <section className={classes["hero-section"]}>
      <div className={classes["left-block"]}>
        <h1>Montaj Aer Condiționat</h1>
        <p>
          Servicii de instalare si mentenanță pentru
          <br />
          aparatele de aer condiționat.
        </p>
        <div className={classes["left-block__container-cta"]}>
          <div className={classes["left-block__cta-text"]}>Sună Acum</div>
          <button className={classes["left-block__btn-phone-no"]}>
            <b>0747 457 394</b>
            <div className={classes["left-block__btn-borders"]}></div>
            <div
              className={`${classes["left-block__btn-borders"]} ${classes["left-block__btn-borders--purple"]}`}
            ></div>
          </button>
        </div>
        <ButtonServicii />
      </div>
      <div className={classes["right-block"]}>
        <img
          src={HeroImage}
          loading="lazy"
          sizes="(max-width: 479px) 100vw, (max-width: 767px) 83vw, (max-width: 991px) 42vw, 39vw"
          width="543"
          alt="Instalare unitate internă și externă de aer condiționat"
          srcSet={`${HeroImageMobile} 500w, ${HeroImageMobileLarge} 1116w`}
        />
      </div>
    </section>
  );
};

export default Hero;
