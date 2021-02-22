import * as actionTypes from "./constants"
/** 网络请求方法 */
import { 
  getTopBanners,
  getHotRecommends
  } from "@/service/recommend"

/** 同步的acion */

//轮播图action发送
const changeTopBannersAction = (data) =>{
  return {
    type: actionTypes.CHANGE_TOP_BANNER,
    topBanners: data.banners
  }
}

//热门推荐action发送
const changeHotRecommend = (data) =>{
  return{
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: data.result
  }
}

/** 异步的action */

//轮播图网络请求
export const getTopBannersAction = () =>{
  return dispatch => {
    getTopBanners().then(res =>{
      dispatch(changeTopBannersAction(res))
    })
  }
}

//热门推荐
export const getHotRecommendsAction = (limit = 8) =>{
  return dispatch => {
    getHotRecommends(limit).then(res =>{
      dispatch(changeHotRecommend(res))
    })
  }
}