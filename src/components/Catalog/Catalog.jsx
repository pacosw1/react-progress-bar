import "./Catalog.css";

import React from "react";
import { CoursePreview } from "../CoursePreview/CoursePreview";

export const Catalog = ({ courses }) => {
  return (
    <div className="catalog">
      <Phase courses={courses} header="Phase 1" phase={1} />
      <Phase courses={courses} header="Phase 2" phase={2} />
      <Phase courses={courses} header="Phase 3" phase={3} />
    </div>
  );
};

const Phase = ({ courses, header, phase }) => {
  let renderPreviews = courses.map(course => {
    if (course.phase == phase) {
      return (
        <CoursePreview
          title={course.title}
          description={course.description}
          progress={course.progress}
          phase={course.phase}
        />
      );
    }
  });
  return (
    <div className="phase">
      <h1 className="header">{header}</h1>
      <div className="container">{renderPreviews}</div>
    </div>
  );
};
