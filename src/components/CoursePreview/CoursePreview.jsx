import React from "react";
import { Card } from "../Reusable/Card/Card";
import { Button } from "../Reusable/Button/Button";
import { ProgressBar } from "../Reusable/ProgressBar/ProgressBar";

export var CoursePreview = ({ title, description }) => {
  return (
    <Card width={280} height={150} p>
      <h1 className="title">{title}</h1>
      <p>{description}</p>
      <ProgressBar width={225} percent={0.5} />
      <div className="options">
        <Button text="Course" style="secondary" />
        <Button text="Continue" style="primary" />
      </div>
    </Card>
  );
};
