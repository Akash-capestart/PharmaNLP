import React from "react";

type LoaderProps = {
  size : number,
  activeColor : string,
  inActiveColor : string,
  loaderBarWidth : string
}

export function Loader({ size, activeColor, inActiveColor, loaderBarWidth } : LoaderProps) {
  return (
    <div
      className="loader"
      style={{
        width: size,
        height: size,
        borderTop: `solid ${loaderBarWidth} ${inActiveColor}`,
        borderRight: `solid ${loaderBarWidth} ${activeColor}`,
        borderBottom: `solid ${loaderBarWidth} ${activeColor}`,
        borderLeft: `solid ${loaderBarWidth} ${activeColor}`,
      }}
    ></div>
  );
}
