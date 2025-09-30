import { useMediaQuery } from "react-responsive";
import DesktopTopBar from "./desktop/DesktopTopBar.jsx";
import MobileTopBar from "./mobile/MobileTopBar.jsx";

function TopBar() {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  return isMobile ? <MobileTopBar /> : <DesktopTopBar />;
}

export default TopBar;
