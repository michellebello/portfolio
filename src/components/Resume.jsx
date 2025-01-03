import React from "react";
import TopBar from "./reusable/TopBar";
import resume from "./pictures/resume.svg";
import download from "./pictures/download.svg";
import "./styles/resume.css";

class Resume extends React.Component {
  render() {
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

    return (
      <div className="resumeBody">
        <TopBar></TopBar>
        <div className="resumeFlex">
          <div className="resumebox">
            <p className="text"> Download my resume here </p>
            <button className="resumeButton" onClick={onClickResume}>
              <img className="download" alt="download" src={download}></img>
            </button>
          </div>
          <img className="resume" alt="resume" src={resume}></img>
        </div>
      </div>
    );
  }
}

export default Resume;
