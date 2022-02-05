import "../style/sub-components/ArtworkGridItem.css";
import { Link } from "react-router-dom";

function ArtworkGridItem({ artwork }) {
  return (
    <div className="ArtworkGridItem">
      <Link to={`/artwork/${artwork.name.replaceAll(" ", "_").toLowerCase()}`}>
        <img className="ArtworkGridItem__image" src={artwork.url} />
        <span className="ArtworkGridItem__caption">{`${artwork.name} - ${artwork.year}`}</span>
      </Link>
    </div>
  );
}

export default ArtworkGridItem;
