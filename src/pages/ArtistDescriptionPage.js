import "../style/pages/ArtistDescriptionPage.css";
import { useSelector } from "react-redux";
import BackLink from "../sub-components/BackLink";
import { Helmet } from "react-helmet-async";

function ArtistDescriptionPage() {
  let { artistDescription } = useSelector((state) => state);

  return (
    <div className="ArtistDescriptionPage">
      <Helmet>
        <title>Robbie Motion - About</title>
        <meta
          name="description"
          content={`About Robbie Motion, a painter based in Wellington, New Zealand.`}
        />
      </Helmet>
      <div
        dangerouslySetInnerHTML={{ __html: artistDescription.data }}
        className="ArtistDescriptionPage__HTML-wrapper"
      ></div>
      <BackLink text={"Back to landing page"} link={`/`} />
    </div>
  );
}
export default ArtistDescriptionPage;
