import "./CourseView.css";

import React, { Component } from "react";
import { Button } from "../Reusable/Button/Button";
import { ProgressBar } from "../Reusable/ProgressBar/ProgressBar";

export const CourseView = props => {
  return (
    <div className="course-view">
      <div className="course-intro">
        <h1>Data Structures</h1>
        <p>
          In this course you will learn about the different data structures used
          in computer science to store and modify data efficiently. From stacks
          and queues to binary trees and graphs, you will understand how each
          works and be able to implement them fully in Javascript.
        </p>
        <div style={{ alignSelf: "flex-start", marginTop: "35px" }}>
          <Button style="primary " text="Resume" width={300} height={40} />
        </div>
      </div>

      <div className="course-overview">
        <div className="course-tabs">
          <h1 className="inactive-tab">Overview</h1>
          <h1 className="active-tab">Asignments</h1>
          <h1 className="inactive-tab">Grades</h1>
        </div>
        <Chapter
          title="Arrays"
          lessons={[
            {
              title: "Introduccion to stacks",
              description:
                "This is the best way to undestand data structures in the whole wide world. This is a test.",
              readingTime: 5
            },
            {
              title: "Test",
              description: "test description",
              readingTime: 5
            },
            {
              title: "Test",
              description: "test description",
              readingTime: 5
            }
          ]}
        />
        <Chapter
          title="Stacks"
          lessons={[
            {
              title: "Test",
              description: "test description",
              readingTime: 5
            },
            {
              title: "Test",
              description: "test description",
              readingTime: 5
            },
            {
              title: "Test",
              description: "test description",
              readingTime: 5
            }
          ]}
        />
      </div>

      {/* <div className="assigments">
        <h1>Assignments</h1>
      </div>

      <div className="grades">
        <h1>Grades</h1>
      </div> */}
    </div>
  );
};

const Chapter = ({ title, lessons }) => {
  const [open, toggle] = React.useState(false);
  var renderLessons = lessons.map(
    ({ title, description, readingTime }, index) => {
      return (
        <LessonPreview
          title={title}
          description={description}
          readingTime={readingTime}
          index={index}
        />
      );
    }
  );
  return (
    <div className="chapter" onClick={() => toggle(!open)}>
      <div className="menu">
        <div className="container">
          <div
            className="indicator"
            style={{
              transform: open
                ? "rotate(180deg) translate(0,0px)"
                : "rotate(00deg) translate(0,5px)"
            }}
          >
            <svg id="icon-circle-down" viewBox="0 0 32 32">
              <title>circle-down</title>
              <path d="M32 16c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zM3 16c0-7.18 5.82-13 13-13s13 5.82 13 13-5.82 13-13 13-13-5.82-13-13z"></path>
              <path d="M9.914 11.086l-2.829 2.829 8.914 8.914 8.914-8.914-2.828-2.828-6.086 6.086z"></path>
            </svg>
          </div>
        </div>
        <h1 className="chapter-h1">{title}</h1>
      </div>
      <div
        style={{
          //   display: open ? "none" : "block",
          opacity: open ? 1 : 0,
          maxHeight: open ? "300px" : "0",
          visibility: open ? "visible" : "hidden",
          transform: open
            ? `translate(0, 0px)`
            : "translate(0,-10px) translateZ(0px)"
        }}
        className="list"
      >
        {renderLessons}
      </div>
    </div>
  );
};

const LessonPreview = ({ title, description, readingTime, index }) => {
  return (
    <div className="lesson-overview">
      <div>
        <h1>{index + 1 + ". " + title}</h1>
        <p>{description}</p>
      </div>
      <div className="side">
        <ProgressBar percent={0.5} width={300} />

        <div className="course-btn">
          <Button style="third-outline" text="continue" />
        </div>
      </div>
    </div>
  );
};
