import * as actionType from './constants'
import { Map } from "immutable" //使用immutable可以增加性能
const defaultState = Map({
  topBanners:[], //轮播图
  hotRecommends:[], //热门推荐
  newAlbum:[], //新碟上架

  upRanking: {},  //飙升榜
  newRanking: {},  //新生榜
  originRanking: {}, //原生榜
})

export default function reducer (state = defaultState, action){
  switch(action.type){
    case actionType.CHANGE_TOP_BANNER:{
      return state.set("topBanners",action.topBanners)
    }
    case actionType.CHANGE_HOT_RECOMMEND:{
      return state.set("hotRecommends",action.hotRecommends)
    }
    case actionType.CHANGE_NEW_ALBUM:{
      return state.set("newAlbum",action.newAlbum)
    }
    case actionType.CHANGE_UP_RANKING:{ 
      return state.set('upRanking', action.upRanking)
    }
    case actionType.CHANGE_NEW_RANKING:{
      return state.set('newRanking', action.newRanking)
    }
    case actionType.CHANGE_ORIGIN_RANKING:{
       return state.set('originRanking', action.originRanking)
    }
    default:
      return state
  }
}
