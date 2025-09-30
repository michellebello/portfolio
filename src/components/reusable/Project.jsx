/* eslint-disable jsx-a11y/anchor-has-content */
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import github from "../pictures/github.png";
import "./project.css";

function Project({ labelFront, labelBack, labelLogo, githubLinks }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="project" onClick={flipCard}>
        <p className="projectTitle">{labelFront}</p>
        <img src={labelLogo} alt="labelLogo" className="projectLogo" />
      </div>
      <div className="project" onClick={flipCard}>
        <p className="projectDesc">{labelBack}</p>
        <div className="github-info-container">
          <img alt="github" src={github} className="github-logo" />
          <div className="github-links">
            {Object.entries(githubLinks).map(([key, value]) => (
              <a
                key={key}
                href={value}
                target="_blank"
                className="github-link"
                rel="noreferrer"
              >
                {key}
              </a>
            ))}
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
}
export default Project;
