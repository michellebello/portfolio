import React from "react";
import TopBar from "./reusable/TopBar";
import contact from "./pictures/contact.svg";
import linkedin from "./pictures/linked.png";
import github from "./pictures/github.png";
import "./styles/contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="contactBody">
        <TopBar></TopBar>
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
    );
  }
}

export default Contact;
