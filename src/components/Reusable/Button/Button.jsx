import "./Button.css";
import React from "react";

export const Button = ({ onClick, text, style }) => {
  return (
    <button className={`button ${style}`} onClick={() => onClick()}>
      {text}
    </button>
  );
};
