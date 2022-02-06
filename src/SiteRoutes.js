import React from "react";
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { useSelector } from "react-redux";
import ArtworkPage from "./pages/ArtworkPage";
import ArtworkListPage from "./pages/ArtworkListPage";
import ArtistDescriptionPage from "./pages/ArtistDescriptionPage";
import ContactPage from "./pages/ContactPage";
import LinksPage from "./pages/LinksPage";

function SiteRoutes() {
  let { artworkList } = useSelector((state) => state);
  const postsPerPage = 4;

  function GetArtworkPage() {
    let params = useParams();
    let slug = params.slug;
    let currentArtwork = artworkList.find(
      (artwork) =>
        artwork.name.replaceAll(" ", "_").toLowerCase() === slug.toLowerCase()
    );
    let page = Math.ceil(
      (artworkList.findIndex((artwork) => artwork.name == currentArtwork.name) +
        1) /
        postsPerPage
    );

    return <ArtworkPage page={page} currentArtwork={currentArtwork} />;
  }

  function GetArtworkListPage() {
    let params = useParams();
    let pageNumber = params.pageNumber;
    const indexOfLastArtwork = pageNumber * postsPerPage;
    const indexOfFirstArtwork = indexOfLastArtwork - postsPerPage;
    const currentArtworkList = artworkList.slice(
      indexOfFirstArtwork,
      indexOfLastArtwork
    );
    return (
      <ArtworkListPage
        postsPerPage={postsPerPage}
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
        element={<Homepage artworkList={artworkList.slice(0, postsPerPage)} />}
      />
      <Route exact path="/artwork/:slug" element={<GetArtworkPage />} />
      <Route
        exact
        path="/artworks/:pageNumber"
        element={<GetArtworkListPage />}
      />
      <Route path="/about" element={<ArtistDescriptionPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/links" element={<LinksPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default SiteRoutes;
