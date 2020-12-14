import * as actionType from './constants'
import { Map } from "immutable" //使用immutable可以增加性能
const defaultState = Map({
  topBanners:[]
})

export default function reducer (state = defaultState, action){
  switch(action.type){
    case actionType.CHANGE_TOP_BANNER:{
      return state.set("topBanners",action.topBanners)
    }
    default:
      return state
  }
}
