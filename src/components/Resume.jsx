import React from "react";
import DesktopTopBar from "../components/reusable/topBars/desktop/DesktopTopBar.jsx";
import MobileTopBar from "./reusable/topBars/mobile/MobileTopBar.jsx";
import { useMediaQuery } from "react-responsive";
import resume from "./pictures/resume.svg";
import { Download } from "lucide-react";
import "./styles/resume.css";

function Resume() {
  const onClickResume = () => {
    fetch("MichelleBV_Resume.pdf").then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "MichelleBV_Resume.pdf";
        alink.click();
      });
    });
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="total-page">
      <header>{isMobile ? <MobileTopBar /> : <DesktopTopBar />}</header>
      <div className="resumeBody">
        <div className="resumeFlex">
          <img className="resume" alt="resume" src={resume}></img>
          <div className="resumebox">
            <p className="text"> Download my resume here </p>
            <button className="resumeButton" onClick={onClickResume}>
              <Download className="download" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
