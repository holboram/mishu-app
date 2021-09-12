import React from "react";
const AcasaMainElement = (props) => {
  return (
    <>
      <img
        src={props.image}
        loading={props.loading}
        width={props.width}
        sizes={props.sizes}
        alt={props.alt}
      />
    </>
  );
};

export default AcasaMainElement;
