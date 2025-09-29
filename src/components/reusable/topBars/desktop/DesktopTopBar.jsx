import { NavLink } from "react-router-dom";
import "./desktopTopBar.css";

function DesktopTopBar() {
  const LINK_INFO = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/projects",
      label: "Projects",
    },
    {
      path: "/resume",
      label: "Resume",
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ];

  return (
    <div className="topBar">
      <p className="michelle">Michelle</p>
      <li className="topBar-li">
        <ul className="topBar-ul">
          {LINK_INFO.map((link) => {
            return <NavLink to={link.path}>{link.label}</NavLink>;
          })}
        </ul>
      </li>
    </div>
  );
}

export default DesktopTopBar;
