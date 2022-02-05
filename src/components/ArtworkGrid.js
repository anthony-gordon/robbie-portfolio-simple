import "../style/components/ArtworkGrid.css";
import { useSelector } from "react-redux";
import ArtworkGridItem from "../sub-components/ArtworkGridItem";

function ArtworkGrid() {
  let { artworkList } = useSelector((state) => state);

  return (
    <div className="ArtworkGrid">
      {artworkList.map((artwork, index) => {
        return <ArtworkGridItem artwork={artwork} />;
      })}
    </div>
  );
}
export default ArtworkGrid;
