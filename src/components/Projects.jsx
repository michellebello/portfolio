import DesktopTopBar from "./reusable/topBars/desktop/DesktopTopBar.jsx";
import MobileTopBar from "./reusable/topBars/mobile/MobileTopBar.jsx";
import { useMediaQuery } from "react-responsive";
import "./styles/projects.css";
import Project from "./reusable/Project";
import cuentaLogo from "../components/pictures/logoCuenta.png";
import mepLogo from "../components/pictures/logomark.png";
import tfLogo from "../components/pictures/tfLogo.png";

function Projects() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

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

  return (
    <div className="total-page">
      <header>{isMobile ? <MobileTopBar /> : <DesktopTopBar />}</header>
      <div className="projectBody">
        <div className="body">
          <p className="topText">Take a look at some of my projects</p>
          <div className="projects">
            {PROJECT_LIST.map((project) => {
              return (
                <Project
                  className="project"
                  labelFront={project.name}
                  labelBack={project.description}
                  labelLogo={project.logo}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
