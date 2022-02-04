import "../style/sub-components/NavMenuLi.css";
import { v4 as uuidv4 } from "uuid";

function NavMenuLi({ menuItem }) {
  return (
    <li key={uuidv4()} className="NavMenu__li">
      <button className="NavMenu__button">
        <p className="NavMenu__title">
          {menuItem.words.map((word, index) => (
            <span key={uuidv4()} className={`NavMenu__title-span `}>
              {`${word} `}
            </span>
          ))}
        </p>
      </button>
    </li>
  );
}

export default NavMenuLi;
