import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TextAlignJustify } from "lucide-react";
import "./mobileTopBar.css";

function MobileTopBar() {
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

  const [open, setOpen] = useState(false);

  return (
    <div className="topBar">
      <div className="topBar-left">
        <NavLink key="michelle" to="/" className="michelle">
          {" "}
          Michelle{" "}
        </NavLink>
        <div className="topBar-right">
          <button
            className="menu-button"
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
          >
            <TextAlignJustify className="button-icon" />
          </button>
          {open && (
            <nav className="mobile-menu" role="menu">
              {LINK_INFO.map((item) => (
                <NavLink
                  className="mobile-menu-links"
                  key={item.label}
                  to={item.path}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}
export default MobileTopBar;
