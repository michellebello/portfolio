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
      <NavLink key="michelle_button" to="/" className="michelle">
        {" "}
        Michelle{" "}
      </NavLink>
      <li className="topBar-li" key="topBar-li">
        <ul className="topBar-ul">
          {LINK_INFO.map((link) => {
            return (
              <NavLink key={link.label} to={link.path}>
                {link.label}
              </NavLink>
            );
          })}
        </ul>
      </li>
    </div>
  );
}

export default DesktopTopBar;
