import "./CourseHeader.css";

import React from "react";
import { Header } from "../Reusable/Header/Header";

export const CourseHeader = ({ title }) => {
  return (
    <Header>
      <div className="left-side">
        <h1 className="title">{title}</h1>
      </div>
      <div className="right-side">
        <p className="course-tab">Home</p>
        <p className="course-tab">Assignments</p>
        <p className="course-tab">Sylabus</p>
        <p className="course-tab">Grades</p>
      </div>
    </Header>
  );
};
