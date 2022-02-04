import { combineReducers } from "redux";

import toggleMenuOpacityReducer from "./toggleMenuOpacityReducer";
import toggleMenuDisplayReducer from "./toggleMenuDisplayReducer";

const reducers = combineReducers({
  menuDisplay: toggleMenuDisplayReducer,
  menuOpacity: toggleMenuOpacityReducer,
});

export default reducers;
