import "../style/sub-components/NavLogo.css";
import { ReactComponent as NavBarLogoImage } from "../images/robbieheader.svg";
import { Link } from "react-router-dom";

function NavLogo() {
  return (
    <div className="NavLogo">
      <Link to={`/`}>
        <NavBarLogoImage
          alt="Nav bar logo image"
          className="NavBar__logo-image"
        />
      </Link>
    </div>
  );
}

export default NavLogo;
