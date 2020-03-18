import "./Navbar.css";

import React from "react";

export const Navbar = props => {
  return (
    <div className="navbar">
      <div className="left-side">
        <div>
          <h1 className="logo">JS University</h1>
          <h1 className="sub-header">Computer Science in Javascript</h1>
        </div>
      </div>

      <div className="right-side">
        <h1 className="nav-item">Login</h1>
        <h1 className="nav-item">Sign Up</h1>
      </div>
    </div>
  );
};
