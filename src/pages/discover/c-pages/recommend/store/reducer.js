import * as actionType from './constants'
import { Map } from "immutable" //使用immutable可以增加性能
const defaultState = Map({
  topBanners:[],
  hotRecommends:[]
})

export default function reducer (state = defaultState, action){
  switch(action.type){
    case actionType.CHANGE_TOP_BANNER:{
      return state.set("topBanners",action.topBanners)
    }
    case actionType.CHANGE_HOT_RECOMMEND:{
      return state.set("hotRecommends",action.hotRecommends)
    }
    default:
      return state
  }
}
