import React from "react";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import ArtworkGrid from "./components/ArtworkGrid";
import { useSelector } from "react-redux";
import ArtworkPage from "./pages/ArtworkPage";
import ArtworkListPage from "./pages/ArtworkListPage";

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

  function GetArtworkListPage() {
    let params = useParams();
    let pageNumber = params.pageNumber;
    const indexOfLastArtwork = pageNumber * 4;
    const indexOfFirstArtwork = indexOfLastArtwork - 4;
    const currentArtworkList = artworkList.slice(
      indexOfFirstArtwork,
      indexOfLastArtwork
    );
    return (
      <ArtworkListPage
        postsPerPage={4}
        totalPosts={artworkList.length}
        currentArtworkList={currentArtworkList}
      />
    );
  }

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<ArtworkGrid artworkList={artworkList.slice(0, 4)} />}
      />
      <Route exact path="/artwork/:slug" element={<GetArtworkPage />} />
      <Route
        exact
        path="/artworks/:pageNumber"
        element={<GetArtworkListPage />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default SiteRoutes;
