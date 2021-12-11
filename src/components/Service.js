import React from "react";

import classes from "./Service.module.scss";

import imgInstalare from "../assets/mentenanta-compresor-min.jpg";
import imgMentenanta from "../assets/mentenanta-compresor-2-min.jpg";

const Service = () => {
  return (
    <section className={classes["main-section"]}>
      <div className={classes["main-section__wrapper-title"]}>
        <h2 className={classes["main-section__title"]}>Instalare</h2>
        <div className={classes["main-section__title-underline"]}></div>
      </div>
      <div
        className={`${classes["main-section__wrapper-content"]} ${classes["box-shadow"]}`}
      >
        <img
          className={classes["main-section__service-image"]}
          src={imgInstalare}
          alt="Insalator efectuand o instalare de aer conditionat"
          width="450"
        />
        <p className={classes["main-section__instalare-text"]}>
          Sistemele calibrate incorect sunt mai puțin eficiente și sunt mai
          predispuse la eșec, motiv pentru care montarea este importantă pentru
          noi.
          <br /> Tehnicienii noștri sunt familiarizați cu toate specificațiile
          producătorului și știm cum să ne asigurăm pentru ca fiecare sistem pe
          care îl instalăm să îndeplinească aceste specificații.
          <br /> Echipa noastră de instalare poate face aproape întotdeauna
          treaba într-o singură vizită și, dacă există probleme, îl informăm în
          permanență pe proprietar.{" "}
        </p>
      </div>
      <div className={classes["main-section__wrapper-title"]}>
        <h2 className={classes["main-section__title"]}>Mentenanță</h2>
        <div className={classes["main-section__title-underline"]}></div>
      </div>
      <div className={classes["main-section__wrapper-content"]}>
        <img
          className={classes["main-section__service-image"]}
          src={imgMentenanta}
          alt="Tehnician efectuand o mentenanta la compresor de aer conditionat"
          width="450"
        />
        <ul className={classes["main-section__mentenanta-list"]}>
          <li>
            Verificarea nivelului lichidului de răcire (Freon) in aparatul de
            aer condiționat
          </li>
          <li>Curățare filtre</li>
          <li>Curățare bobine evaporatoare și condensatoare</li>
          <li>Curățarea ventilatorului condensatorului și evaporatorului</li>
          <li>Inspecție generală a unității de curent alternativ</li>
        </ul>
      </div>
    </section>
  );
};

export default Service;
