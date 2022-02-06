import "../style/pages/ArtworkPage.css";
import BackLink from "../sub-components/BackLink";
import { Helmet } from "react-helmet-async";

function ArtworkPage({ currentArtwork, page }) {
  return currentArtwork ? (
    <div className="ArtworkPage">
      <Helmet>
        <title>{currentArtwork.name} - Robbie Motion</title>
        <meta
          name="description"
          content={`"${currentArtwork.name}" - an artwork by Robbie Motion, a painter based in Wellington, New Zealand.`}
        />
      </Helmet>
      <img className="ArtworkPage__image" src={currentArtwork.url} />
      <div className="ArtworkPage__details">
        <div className="ArtworkPage__details-row">
          <h4 className="ArtworkPage__details-row-header">Title:</h4>
          <p className="ArtworkPage__details-row-text">{currentArtwork.name}</p>
        </div>
        <div className="ArtworkPage__details-row">
          <h4 className="ArtworkPage__details-row-header">Year:</h4>
          <p className="ArtworkPage__details-row-text">{currentArtwork.year}</p>
        </div>
        <div className="ArtworkPage__details-row">
          <h4 className="ArtworkPage__details-row-header">Description:</h4>
          <p className="ArtworkPage__details-row-text">
            {currentArtwork.description}
          </p>
        </div>
      </div>
      <BackLink text={"Back to all artworks"} link={`/artworks/${page}`} />
    </div>
  ) : (
    ""
  );
}
export default ArtworkPage;
