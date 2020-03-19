import "./Button.css";
import React from "react";

export const Button = ({ onClick, text, style, disabled }) => {
  return (
    <button
      className={`button ${style}`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
