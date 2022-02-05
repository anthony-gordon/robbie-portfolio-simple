import "../style/pages/ArtworkListPage.css";
import ArtworkGrid from "./../components/ArtworkGrid";
import NothingHere from "./../components/NothingHere";
import Loading from "./../sub-components/Loading";
import { useSelector } from "react-redux";
import Pagination from "./../components/Pagination";

function ArtworkListPage({ postsPerPage, totalPosts, currentArtworkList }) {
  let { loading } = useSelector((state) => state);

  return (
    <div className="ArtworkListPage">
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
