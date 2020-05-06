import "./Button.css";
import React from "react";

export const Button = ({ onClick, text, style, disabled, width, height }) => {
  return (
    <button
      style={{ width: width, height: height }}
      className={`button ${style}`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
