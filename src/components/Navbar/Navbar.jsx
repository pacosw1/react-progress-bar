import "./Navbar.css";

import React from "react";
import { Button } from "../Reusable/Button/Button";
import { SearchBar } from "../Reusable/searchbar/SearchBar";

export const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="left-side">
        <div>
          <h1 className="logo">Pac.io</h1>
        </div>
        {/* <SearchBar /> */}
      </div>

      <div className="right-side">
        {/* {/* <h1 className="nav-item member">Become a member</h1>
        // <h1 className="nav-item login">Login</h1> */}
        {/* <Button style="primary-outline" text="Projects" /> */}
        <Button style="primary-outline" text="Blog" />
      </div>
    </div>
  );
};
