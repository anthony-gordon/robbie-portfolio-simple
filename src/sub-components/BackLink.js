import "./../style/sub-components/BackLink.css";
import { Link } from "react-router-dom";

function BackLink({ text, link }) {
  return (
    <Link to={link} className="BackLink">
      {text}
    </Link>
  );
}

export default BackLink;
