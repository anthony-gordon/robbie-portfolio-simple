import RobbiePortfolioSiteSimple from "./RobbiePortfolioSiteSimple";
import "./style/App.css";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <RobbiePortfolioSiteSimple />
      </div>
    </HelmetProvider>
  );
}

export default App;
