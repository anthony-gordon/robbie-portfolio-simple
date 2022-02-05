import NavBar from "./components/NavBar";
import NavMenu from "./components/NavMenu";
import ArtworkGrid from "./components/ArtworkGrid";
import Footer from "./components/Footer";
import Axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function RobbiePortfolioSiteSimple() {
  const dispatch = useDispatch();

  const { updateArtworkList } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(
        `https://docs.google.com/spreadsheets/d/1DAdJqw7D-S1MSO6bAtA4fEwUzgRw-2OAdM5K0l9znR0/export?format=csv`
      );
      const csv = require("csvtojson");
      csv()
        .fromString(response.data)
        .then((artworkData) => {
          updateArtworkList(artworkData);
        });
    }
    getData();
  }, []);

  return (
    <div className="RobbiePortfolioSiteSimple">
      <NavBar />
      <NavMenu />
      <ArtworkGrid />
      <Footer />
    </div>
  );
}

export default RobbiePortfolioSiteSimple;
