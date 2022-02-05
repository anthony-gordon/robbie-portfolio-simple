import React from "react";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import ArtworkGrid from "./components/ArtworkGrid";
import { useSelector } from "react-redux";
import ArtworkPage from "./pages/ArtworkPage";

function SiteRoutes() {
  let { artworkList } = useSelector((state) => state);

  function GetArtworkPage() {
    let params = useParams();

    let slug = params.slug;
    let currentArtwork = artworkList.find(
      (artwork) =>
        artwork.name.replaceAll(" ", "_").toLowerCase() === slug.toLowerCase()
    );
    return <ArtworkPage currentArtwork={currentArtwork} />;
  }

  return (
    <Routes>
      <Route exact path="/" element={<ArtworkGrid />} />
      <Route exact path="/artwork/:slug" element={<GetArtworkPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default SiteRoutes;
