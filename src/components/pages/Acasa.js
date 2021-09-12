import React, { Fragment } from "react";
import Hero from "./Hero";
import AcasaMainElement from "../AcasaMainElement";

import classes from "./Acasa.module.scss";

import data from "../main-content.json";

const Acasa = () => {
  const mainContent = data.mainContent;
  return (
    <Fragment>
      <Hero />

      <section className={classes["main-section"]}>
        <h2 className="main-heading">Instalăm pentru tine</h2>
        <div className="main-container">
          {mainContent.map((item, index) => {
            return (
              <AcasaMainElement
                image={item.imgSrc}
                key={index}
                loading={item.loading}
                width={item.width}
                sizes={item.sizes}
                alt={item.alt}
              />
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Acasa;
