import React from "react";

import classes from "./AcasaMainElement.module.scss";

const AcasaMainElement = (props) => {
  return (
    <div className={classes["main-row"]}>
      <img
        width={props.width}
        loading={props.loading}
        srcSet={props.srcSet}
        sizes={props.sizes}
        src={process.env.PUBLIC_URL + props.src}
        alt={props.alt}
      />
      <p>{props.text}</p>
    </div>
  );
};

export default AcasaMainElement;
