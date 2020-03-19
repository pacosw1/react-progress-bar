import React from "react";

import "./Landing.css";

export const Landing = props => {
  return (
    <div className="landing">
      <div className="left">
        <h1>Become a real Software Engineer</h1>
        <p>
          Most online courses only teach you practical material used in web
          development when learning javascript. This are called{" "}
          <b>programmers</b>. This course will teach you <b>Computer Science</b>
          .
        </p>

        <h1>This isn't your tipical javascript course in Udemy</h1>
        <p>
          This is a complete program, with more than 15 courses challenge you to
          be the best you can be. <b>It won't be easy</b>
        </p>

        <h1>Our Courses</h1>
        <h3>Introduction to Computer Science</h3>
        <h3>Introduction to programming in Javascript</h3>
        <h3>Introduction to Object Oriented Design</h3>
        <h3>Operating Systems</h3>
        <h3>Computational Organization</h3>
        <h3>Data Structures</h3>
        <h3>Algorithms</h3>
        <h3>VideoGames</h3>
        <h3>Compilers</h3>
      </div>
      <div className="right"></div>
    </div>
  );
};
