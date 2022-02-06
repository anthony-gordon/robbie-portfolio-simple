import "../style/sub-components/NavLogo.css";
import { ReactComponent as NavBarLogoImage } from "../images/robbieheader.svg";
import { Link } from "react-router-dom";

function NavLogo() {
  return (
    <h1 className="NavLogo">
      <Link to={`/`}>
        <NavBarLogoImage alt="Robbie Motion" className="NavBar__logo-image" />
      </Link>
    </h1>
  );
}

export default NavLogo;
