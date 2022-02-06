import "../style/pages/ArtworkListPage.css";
import ArtworkGrid from "./../components/ArtworkGrid";
import Loading from "./../sub-components/Loading";
import { useSelector } from "react-redux";
import Pagination from "./../components/Pagination";
import { Helmet } from "react-helmet-async";

function ArtworkListPage({ postsPerPage, totalPosts, currentArtworkList }) {
  let { loading } = useSelector((state) => state);

  return (
    <div className="ArtworkListPage">
      <Helmet>
        <title>Robbie Motion - Portfolio</title>
        <meta
          name="description"
          content={`A list of artworks by Robbie Motion, a painter based in Wellington, New Zealand.`}
        />
      </Helmet>
      {loading ? (
        <Loading />
      ) : (
        <div className="ArtworkListPage__wrapper">
          <ArtworkGrid artworkList={currentArtworkList} />
          <Pagination postsPerPage={postsPerPage} totalPosts={totalPosts} />
        </div>
      )}
    </div>
  );
}
export default ArtworkListPage;
