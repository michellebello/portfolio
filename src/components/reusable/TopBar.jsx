import { NavLink } from "react-router-dom";
import "./topBar.css";

function TopBar() {
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
      <li>
        <ul>
          {LINK_INFO.map((link) => {
            return <NavLink to={link.path}>{link.label}</NavLink>;
          })}
        </ul>
      </li>
    </div>
  );
}

export default TopBar;
