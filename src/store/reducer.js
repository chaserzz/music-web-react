import { combineReducers } from "redux-immutable"

import { reducer as recommend } from "../pages/discover/c-pages/recommend/store"

export default combineReducers({
  recommend
})