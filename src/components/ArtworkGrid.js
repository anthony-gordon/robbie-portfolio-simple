import "../style/components/ArtworkGrid.css";
import { useSelector } from "react-redux";
import ArtworkGridItem from "../sub-components/ArtworkGridItem";
import Loading from "./../sub-components/Loading";

function ArtworkGrid({ artworkList }) {
  let { windowSize, loading } = useSelector((state) => state);

  return (
    <div className="ArtworkGrid">
      {windowSize[0] < 769 ? (
        artworkList.map((artwork, index) => {
          return <ArtworkGridItem key={artwork.id} artwork={artwork} />;
        })
      ) : (
        <div className="ArtworkGrid__column-wrapper">
          <div className="ArtworkGrid__column">
            {artworkList.map((artwork, index) => {
              if (index % 2 === 0) {
                return <ArtworkGridItem key={artwork.id} artwork={artwork} />;
              }
            })}
          </div>
          <div className="ArtworkGrid__column">
            {artworkList.map((artwork, index) => {
              if (index % 2 !== 0) {
                return <ArtworkGridItem key={artwork.id} artwork={artwork} />;
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
}
export default ArtworkGrid;
