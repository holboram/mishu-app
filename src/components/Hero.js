import React from "react";
import Button from "./Button";
import classes from "./Hero.module.scss";

import HeroImage from "../assets/hero-image-instalare-aer-conditionat-min.png";
import HeroImageMobile from "../assets/hero-image-instalare-aer-conditionat-min-p-500.png";
import HeroImageMobileLarge from "../assets/hero-image-instalare-aer-conditionat-min.png";

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
          <div className={classes["left-block__btn-phone-no-wrapper"]}>
            <a href="tel: 0747 835 456">
              <button className={classes["left-block__btn-phone-no"]}>
                <b>0747 457 394</b>
                <div
                  className={`${classes["left-block__btn-borders"]} ${classes["left-block__btn-borders--moved"]}`}
                ></div>
                <div
                  className={`${classes["left-block__btn-borders"]} ${classes["left-block__btn-borders--purple"]}`}
                ></div>
              </button>
            </a>
            <button className={classes["left-block__btn-phone-no"]}>
              <a href="tel: 0747 835 456">
                <b>0747 457 394</b>
                <div className={classes["left-block__btn-borders"]}></div>
                <div
                  className={`${classes["left-block__btn-borders"]} ${classes["left-block__btn-borders--purple"]}`}
                ></div>
              </a>
            </button>
          </div>
        </div>
        <Button
          text={"Servicii"}
          className={classes["left-block__btn-service"]}
        />
      </div>
      <div className={classes["right-block"]}>
        <img
          srcSet={`${HeroImageMobile} 500w, ${HeroImageMobileLarge} 1116w`}
          loading="lazy"
          sizes="(max-width: 479px) 100vw, (max-width: 767px) 83vw, (max-width: 991px) 42vw, 39vw"
          width="543"
          src={HeroImage}
          alt="Instalare unitate internă și externă de aer condiționat"
        />
      </div>
    </section>
  );
};

export default Hero;
