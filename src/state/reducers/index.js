import { combineReducers } from "redux";

import toggleMenuOpacityReducer from "./toggleMenuOpacityReducer";
import toggleMenuDisplayReducer from "./toggleMenuDisplayReducer";
import updateArtworkListReducer from "./updateArtworkListReducer";

const reducers = combineReducers({
  menuDisplay: toggleMenuDisplayReducer,
  menuOpacity: toggleMenuOpacityReducer,
  artworkList: updateArtworkListReducer,
});

export default reducers;