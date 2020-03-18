import * as React from "react";

import "./ProgressBar.css";

export var ProgressBar = ({ width, percent }) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue(percent * width);
  });

  return (
    <div className={"progressComp"}>
      <h1 className="percent-number">{percent * 100}% Completed</h1>
      <div className="progress-div" style={{ width: width }}>
        <div style={{ width: `${value}px` }} className="progress" />
      </div>
    </div>
  );
};
