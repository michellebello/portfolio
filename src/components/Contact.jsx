import React from "react";
import DesktopTopBar from "./reusable/topBars/desktop/DesktopTopBar.jsx";
import MobileTopBar from "./reusable/topBars/mobile/MobileTopBar.jsx";
import contact from "./pictures/contact.svg";
import linkedin from "./pictures/linked.png";
import github from "./pictures/github.png";
import "./styles/contact.css";
import { useMediaQuery } from "react-responsive";

function Contact() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="total-page">
      <header>{isMobile ? <MobileTopBar /> : <DesktopTopBar />}</header>
      <div className="contactBody">
        <div className="contactFlex">
          <img className="contact" alt="contact" src={contact}></img>
          <div className="logos">
            <a
              href="https://www.linkedin.com/in/michellebellov/"
              className="contactButton"
            >
              <img className="logo" alt="linkedin" src={linkedin}></img>
            </a>
            <a
              href="https://github.com/michellebello"
              className="contactButton"
            >
              <img className="logo" alt="github" src={github}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
