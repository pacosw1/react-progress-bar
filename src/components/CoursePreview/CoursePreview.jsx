import React from "react";
import { Card } from "../Reusable/Card/Card";
import { Button } from "../Reusable/Button/Button";
import { ProgressBar } from "../Reusable/ProgressBar/ProgressBar";

export var CoursePreview = ({ title, description, progress }) => {
  return (
    <Card width={280} height={150} p>
      <h1 className="title">{title}</h1>
      <p>{description}</p>
      <ProgressBar width={225} percent={progress} />
      <div className="options">
        <div className="dual">
          <Button text="Home" style="secondary-outline half left" />
          <Button text="No Pre-requisites" style="third-outline half pre " />
        </div>

        <Button
          text={`${
            progress > 0 ? (progress == 1 ? "Completed" : "Resume") : "Start"
          }`}
          style="primary-outline full"
        />
      </div>
    </Card>
  );
};
