import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./project.css";

function Project({ labelFront, labelBack }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="project" onClick={flipCard}>
        <p className="projectTitle">{labelFront}</p>
      </div>
      <div className="project" onClick={flipCard}>
        <p className="projectDesc">{labelBack}</p>
      </div>
    </ReactCardFlip>
  );
}
export default Project;
