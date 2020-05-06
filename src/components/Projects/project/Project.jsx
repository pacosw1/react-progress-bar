import React, { Component } from "react";
import { Card } from "../../Reusable/Card/Card";
import { ProgressBar } from "../../Reusable/ProgressBar/ProgressBar";

import "./Project.css";
import { Button } from "../../Reusable/Button/Button";

export var Project = ({
  img,
  title,
  description,
  challenges,
  stack,
  status,
  percent,
  preview,
}) => {
  return (
    <Card width={500} height={800}>
      <div className="project">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="info">
          <h1>{title}</h1>
          <ProgressBar width={450} percent={percent} status={status} />
          <br />
          <Button
            width={150}
            style={"primary-outline"}
            height={30}
            text="Live Preview"
          />
          <br />
          <p>{description}</p>
          <h1>Tech Stack</h1>
          {stack}

          <h1>Challenges</h1>
          <p>{challenges}</p>
        </div>
      </div>
    </Card>
  );
};

export default Project;
