import React, { Component } from "react";
import "./Projects.css";
import Project from "./project/Project";
class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="projects">
        <br />
        <h1 className="tit">Portfolio</h1>

        <div className="p-list">
          <Project
            title={"Zombie Survival Game"}
            description={
              "Round based top down zombie survival shooter. Zombies get stronger and faster each round. How long can you survive?"
            }
            stack={"Javascript Canvas"}
            challenges={"Physics and geometry review"}
            percent={1}
            status={"Completed"}
          />
          <Project
            title={"Zombie Survival Game Multiplayer"}
            description={
              "Round based top down zombie survival shooter. Zombies get stronger and faster each round. How long can you survive?"
            }
            stack={"Javascript Canvas Golang Websockets"}
            challenges={"Physics and geometry review"}
            percent={0.3}
            status={"In Ongoing Development"}
          />
          <Project
            title={"Sales Management System"}
            description={
              "Round based top down zombie survival shooter. Zombies get stronger and faster each round. How long can you survive?"
            }
            stack={"React NodeJS MongoDB "}
            challenges={"Physics and geometry review"}
            percent={1}
            status={"Completed"}
          />
          <Project
            title={"Zombie Survival Game"}
            description={
              "Round based top down zombie survival shooter. Zombies get stronger and faster each round. How long can you survive?"
            }
            stack={"Javascript\nTCanvas"}
            challenges={"Physics and geometry review"}
            percent={1}
            status={"Completed"}
          />
        </div>
      </div>
    );
  }
}

export default Projects;
