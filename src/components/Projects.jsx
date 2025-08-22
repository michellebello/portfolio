import React from "react";
import TopBar from "./reusable/TopBar";
import "./styles/projects.css";
import Project from "./reusable/Project";
import cuentaLogo from "../components/pictures/logoCuenta.png";
import mepLogo from "../components/pictures/logomark.png";
import tfLogo from "../components/pictures/tfLogo.png";

const PROJECT_LIST = [
  {
    name: "Cuenta",
    description:
      "A web app to track your spendings, plan your budget, and work towards your financial goals.",
    logo: cuentaLogo,
  },
  {
    name: "Mise En Plate",
    description:
      "A recipe website, where users can upload, view, and review recipes.",
    logo: mepLogo,
  },
  {
    name: "Tutti Frutti",
    description:
      "A fun classic game where users can join parties to play this game.",
    logo: tfLogo,
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
                  labelLogo={project.logo}
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
