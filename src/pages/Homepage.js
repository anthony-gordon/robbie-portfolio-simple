import "../style/pages/Homepage.css";
import { Helmet } from "react-helmet-async";
import ArtworkGrid from "../components/ArtworkGrid";

import Loading from "./../sub-components/Loading";
import { useSelector } from "react-redux";

function Homepage({ artworkList }) {
  let { loading } = useSelector((state) => state);

  return (
    <div className="Homepage">
      <Helmet>
        <title>Robbie Motion </title>
        <meta
          name="description"
          content={`Robbie Motion - painter based in Wellington, New Zealand.`}
        />
      </Helmet>
      {loading ? <Loading /> : <ArtworkGrid artworkList={artworkList} />}
    </div>
  );
}
export default Homepage;
