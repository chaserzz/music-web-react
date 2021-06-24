import { combineReducers } from "redux-immutable"

import { reducer as recommend } from "../pages/discover/c-pages/recommend/store"
import { reducer as player } from "../pages/player/store/"

export default combineReducers({
  recommend,
  player
})