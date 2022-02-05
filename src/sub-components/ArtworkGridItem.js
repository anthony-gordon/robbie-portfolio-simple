import "../style/sub-components/ArtworkGridItem.css";

function ArtworkGridItem({ artwork }) {
  return (
    <div className="ArtworkGridItem">
      <img className="ArtworkGridItem__image" src={artwork.url} />
      <span className="ArtworkGridItem__caption">{`${artwork.name} - ${artwork.year}`}</span>
    </div>
  );
}

export default ArtworkGridItem;
