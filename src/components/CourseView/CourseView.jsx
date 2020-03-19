import "./CourseView.css";

import React, { Component } from "react";

export const CourseView = props => {
  return (
    <div className="course-view">
      <div className="updates">
        <h1>Updates</h1>
      </div>

      <div className="assigments">
        <h1>Assignments</h1>
      </div>

      <div className="grades">
        <h1>Grades</h1>
      </div>
    </div>
  );
};
