import { combineReducers } from "redux";

import toggleMenuOpacityReducer from "./toggleMenuOpacityReducer";
import toggleMenuDisplayReducer from "./toggleMenuDisplayReducer";
import updateArtworkListReducer from "./updateArtworkListReducer";
import updateWindowSizeReducer from "./updateWindowSizeReducer";
import updateLoadingReducer from "./updateLoadingReducer";

const reducers = combineReducers({
  menuDisplay: toggleMenuDisplayReducer,
  menuOpacity: toggleMenuOpacityReducer,
  artworkList: updateArtworkListReducer,
  windowSize: updateWindowSizeReducer,
  loading: updateLoadingReducer,
});

export default reducers;
