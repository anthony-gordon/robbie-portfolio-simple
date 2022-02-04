import "../style/sub-components/NavLogo.css";
import { ReactComponent as NavBarLogoImage } from "../images/robbieheader.svg";

function NavLogo() {
  return (
    <div className="NavLogo">
      <NavBarLogoImage
        alt="Nav bar logo image"
        className="NavBar__logo-image"
      />
    </div>
  );
}

export default NavLogo;
