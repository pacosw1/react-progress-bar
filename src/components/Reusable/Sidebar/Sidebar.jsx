import "./Sidebar.css";
import React from "react";
import { ProgressBar } from "../ProgressBar/ProgressBar";

export const Sidebar = ({ width, children }) => {
  const [currentWidth, setWidth] = React.useState(0);

  const toggleMenu = () => {
    if (currentWidth < 0) {
      setWidth(0);
    } else {
      setWidth(-width);
    }
  };
  React.useEffect(() => {
    setWidth(currentWidth);
  });
  return (
    <React.Fragment>
      <div
        className="side-bar"
        style={{ transform: `translatex(${currentWidth}px)`, width: 300 }}
      >
        {/* <button
          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(${width}px, 20vh)`
          }}
        ></button> */}
        <div className="content">{children}</div>
      </div>
    </React.Fragment>
  );
};
