import React from "react";
import TopBar from "./reusable/TopBar";
import "./styles/projects.css";
import Project from "./reusable/Project";

const PROJECT_LIST = [
  {
    name: "Project1",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    name: "Project2",
    description: "Ohh yeah!",
  },
  {
    name: "Project3",
    description: "Can I borrow your notes?",
  },
];

class Projects extends React.Component {
  render() {
    return (
      <div className="projectBody">
        <TopBar></TopBar>
        <div className="body">
          <p className="topText">Take a look at some of my projects</p>
          <div className="projects">
            {PROJECT_LIST.map((project) => {
              return (
                <Project
                  labelFront={project.name}
                  labelBack={project.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
