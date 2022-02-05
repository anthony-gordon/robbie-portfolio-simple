import "../style/sub-components/NavMenuLi.css";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./../state/index";

function NavMenuLi({ menuItem }) {
  const dispatch = useDispatch();

  let { menuDisplay } = useSelector((state) => state);
  const { toggleMenuDisplay, toggleMenuOpacity } = bindActionCreators(
    actionCreators,
    dispatch
  );

  function toggleMenuDisplayOpacity() {
    if (!menuDisplay) {
      toggleMenuDisplay();
      setTimeout(() => {
        toggleMenuOpacity();
      }, 10);
    } else if (menuDisplay) {
      toggleMenuOpacity();
      setTimeout(() => {
        toggleMenuDisplay();
      }, 500);
    }
  }
  return (
    <li className="NavMenu__li">
      <Link to={menuItem.link} className="NavMenu__button">
        <p onClick={toggleMenuDisplayOpacity} className="NavMenu__title">
          {menuItem.words.map((word, index) => (
            <span key={uuidv4()} className={`NavMenu__title-span `}>
              {`${word} `}
            </span>
          ))}
        </p>
      </Link>
    </li>
  );
}

export default NavMenuLi;
