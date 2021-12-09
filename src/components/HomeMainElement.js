import React from "react";

import classes from "./HomeMainElement.module.scss";

const HomeMainElement = (props) => {
  const regex = new RegExp("\\bSuceava\\b", "i");

  let text;
  if (props.text) {
    text = props.text;
    text = text.replace(regex, `<strong>Suceava</strong>`);
  }

  return (
    <div className={classes["main-row"]}>
      {props.imgCName && (
        <img
          className={classes["main-row__img"]}
          width={props.width}
          loading={props.loading}
          srcSet={props.srcSet}
          sizes={props.sizes}
          src={process.env.PUBLIC_URL + props.src}
          alt={props.alt}
        />
      )}
      {props.paragraphCName && (
        <p className={classes["main-row__text"]}>{text}</p>
      )}
    </div>
  );
};

export default HomeMainElement;
