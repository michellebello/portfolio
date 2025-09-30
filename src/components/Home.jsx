import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { TextAlignJustify } from "lucide-react";
import pic1 from "./pictures/pic1.png";
import pic2 from "./pictures/pic2.png";
import pic3 from "./pictures/pic3.png";
import pic4 from "./pictures/pic4.png";
import "./styles/home.css";

function Home() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [open, setOpen] = useState(false);

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
    <div className="total-home">
      <header className="topBar">
        <div className="topBar-left">
          <p className="michelle">Michelle</p>
        </div>

        <div className="topBar-right">
          {isMobile ? (
            <>
              <button
                className="menu-button"
                aria-label="Open menu"
                onClick={() => setOpen(!open)}
              >
                <TextAlignJustify className="button-icon" />
              </button>

              {open && (
                <nav className="mobile-menu" role="menu">
                  {PIC_INFO.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      onClick={() => {
                        setPics(item.source);
                        setOpen(false);
                      }}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
              )}
            </>
          ) : (
            <nav className="desktop-nav" role="navigation">
              <ul>
                {PIC_INFO.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.path}
                      onMouseEnter={() => setPics(item.source)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </header>
      <div className="homeBody">
        <div className="leftHome">
          <p className="mainText">Hi there!</p>
          <p className="smallText">
            My name is Michelle Bello Veramendi and I am an aspiring Software
            Engineer.
          </p>
        </div>
        <div className="rightHome">
          <img alt="pic" src={pic} className="avatar"></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
