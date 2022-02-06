import "../style/pages/LinksPage.css";
import { Helmet } from "react-helmet-async";
import LinksPageLink from "../sub-components/LinksPageLink";
import { useSelector } from "react-redux";

function LinksPage() {
  let { links } = useSelector((state) => state);

  return (
    <div className="LinksPage">
      <Helmet>
        <title>Robbie Motion - Links</title>
        <meta
          name="description"
          content={`Links related to Robbie Motion - painter based in Wellington, New Zealand.`}
        />
      </Helmet>
      <div className="LinksPage__wrapper">
        <h2 className="LinksPage__h2">Links</h2>
        <ul className="LinksPage__ul">
          {links.map((link, index) => (
            <LinksPageLink key={index} link={link} />
          ))}
        </ul>
      </div>
    </div>
  );
}
export default LinksPage;
