import NavBar from "./components/NavBar";
import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import Axios from "axios";
import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import SiteRoutes from "./SiteRoutes";

function RobbiePortfolioSiteSimple() {
  const dispatch = useDispatch();

  const {
    updateArtworkList,
    updateArtistDescription,
    updateWindowSize,
    updateLoading,
    updateLinks,
  } = bindActionCreators(actionCreators, dispatch);

  function sort_by_key(array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  useEffect(() => {
    async function getData() {
      updateLoading(true);
      const response = await Axios.get(
        `https://docs.google.com/spreadsheets/d/1DAdJqw7D-S1MSO6bAtA4fEwUzgRw-2OAdM5K0l9znR0/export?format=csv`
      );
      const csv = require("csvtojson");
      csv()
        .fromString(response.data)
        .then((artworkData) => {
          updateArtworkList(sort_by_key(artworkData, "year").reverse());
        });
      updateLoading(false);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(
        `https://docs.google.com/document/d/1HRDKzXJ9W6k-6RvINszCcPrv6tJERWoFhxjFuHgF1rY/export?format=html`
      );
      updateArtistDescription(response);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(
        `https://docs.google.com/spreadsheets/d/1dyCbcomB1gi9sDEaKPCCVJaV6xfSp15FcDuV2NxNKmo/export?format=csv`
      );
      const csv = require("csvtojson");
      csv()
        .fromString(response.data)
        .then((Links) => {
          updateLinks(sort_by_key(Links, "year").reverse());
        });
    }
    getData();
  }, []);

  useLayoutEffect(() => {
    function updateSize() {
      updateWindowSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  });

  return (
    <div className="RobbiePortfolioSiteSimple">
      <NavBar />
      <NavMenu />
      <SiteRoutes />
      <Footer />
    </div>
  );
}

export default RobbiePortfolioSiteSimple;
