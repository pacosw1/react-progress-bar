import React from "react";
import "./SearchBar.css";
export const SearchBar = (props) => {
  return (
    <div className="search-div">
      <div className="search">
        <input className="search-bar" placeholder="Search"></input>
      </div>
      {/* <button className="search-button">Go</button> */}
    </div>
  );
};
