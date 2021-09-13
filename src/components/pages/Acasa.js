import React, { Fragment, useEffect, useState } from "react";
import Hero from "./Hero";
import AcasaMainElement from "../AcasaMainElement";

import classes from "./Acasa.module.scss";

// import data from "../../content.json";

const Acasa = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(process.env.PUBLIC_URL);
  return (
    <Fragment>
      <Hero />

      <section className={classes["main-section"]}>
        <h2 className="main-heading">Instalăm pentru tine</h2>
        <div className="main-container">
          {data &&
            data.map((content) => {
              return (
                <AcasaMainElement
                  width={content.width}
                  loading={content.loading}
                  srcSet={content.srcSet}
                  sizes={content.sizes}
                  src={content.imgSrc}
                  alt={content.alt}
                  imgCName={content.imgCName}
                  text={content.paragraph}
                  paragraphCName={content.paragraphCName}
                  key={content.id}
                />
              );
            })}
        </div>
      </section>
    </Fragment>
  );
};

export default Acasa;
