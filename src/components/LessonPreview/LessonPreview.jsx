import "./LessonPreview.css";
import React from "react";
import { ProgressBar } from "../Reusable/ProgressBar/ProgressBar";

export const LessonPreview = ({ chapter, title, progress, width }) => {
  return (
    <div className="lesson-preview">
      <div className="content">
        <p>
          Chapter {chapter}: {title}
        </p>
        <ProgressBar width={width - width / 4} percent={progress} />
      </div>
    </div>
  );
};
