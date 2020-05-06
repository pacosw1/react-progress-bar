import "./Card.css";

import React from "react";

export const Card = (props) => {
  return (
    <div
      className="card"
      style={{ width: `${props.width}px`, height: `${props.height}px` }}
    >
      <div className="content">{props.children}</div>
    </div>
  );
};
