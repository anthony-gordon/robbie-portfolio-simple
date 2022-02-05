import "../style/pages/ArtworkPage.css";

function ArtworkPage({ currentArtwork }) {
  if (currentArtwork) {
    return (
      <div className="ArtworkPage">
        <img className="ArtworkPage__image" src={currentArtwork.url} />
      </div>
    );
  } else return <div className="ArtworkPage">Nothing here!</div>;
}
export default ArtworkPage;
