import React from "react";

import classes from "./HomeMainElement.module.scss";

const HomeMainElement = (props) => {
  return (
    <div className={classes["main-row"]}>
      <div className={classes["main-row__img-container"]}>
        <img
          width={props.width}
          loading={props.loading}
          srcSet={props.srcSet}
          sizes={props.sizes}
          src={process.env.PUBLIC_URL + props.src}
          alt={props.alt}
        />
      </div>
      <p className={classes["main-row__text"]}>{props.text}</p>
    </div>
  );
};

export default HomeMainElement;
