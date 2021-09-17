import React, { Fragment, useEffect, useState } from "react";
import Hero from "../../components/Hero";
import HomeMainElement from "../../components/HomeMainElement";

import classes from "./Home.module.scss";

const Home = () => {
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
        <h2 className={classes["main-section__heading"]}>
          Instalăm pentru tine
        </h2>
        {data &&
          data.map((content) => {
            return (
              <HomeMainElement
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
      </section>
    </Fragment>
  );
};

export default Home;
