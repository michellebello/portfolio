import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import pic1 from "./pictures/pic1.png";
import pic2 from "./pictures/pic2.png";
import pic3 from "./pictures/pic3.png";
import pic4 from "./pictures/pic4.png";
import "./styles/home.css";

function Home() {
  const pics = [pic1, pic2, pic3, pic4];
  const [pic, setPics] = useState(pics[0]);

  const PIC_INFO = [
    {
      path: "/",
      source: pics[0],
      label: "Home",
    },
    {
      path: "/projects",
      source: pics[1],
      label: "Projects",
    },
    {
      path: "/resume",
      source: pics[2],
      label: "Resume",
    },
    {
      path: "/contact",
      source: pics[3],
      label: "Contact",
    },
  ];

  return (
    <div>
      <div className="topBar">
        <p className="michelle">Michelle</p>
        <li>
          <ul>
            {PIC_INFO.map((pic) => {
              return (
                <NavLink to={pic.path} onMouseEnter={() => setPics(pic.source)}>
                  {pic.label}
                </NavLink>
              );
            })}
          </ul>
        </li>
      </div>
      <div className="homeBody">
        <div className="leftHome">
          <p className="mainText">Hi there!</p>
          <p className="smallText">
            My name is Michelle Bello Veramendi and I am an aspiring Software
            Engineer.
          </p>
        </div>
        <div className="rightHome">
          <img alt="pic" src={pic}></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
