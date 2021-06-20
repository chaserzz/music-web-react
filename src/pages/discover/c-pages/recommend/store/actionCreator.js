import * as actionTypes from "./constants"
/** 网络请求方法 */

//发现页面数据获取
import { 
  getTopBanners,
  getHotRecommends,
  getNewAlbum,
  } from "@/service/recommend"

// 榜单数据获取
import {
  getRankListDetail
} from "@/service/rankList"


/** 同步的acion */

//轮播图action发送
const changeTopBannersAction = (data) =>{
  return {
    type: actionTypes.CHANGE_TOP_BANNER,
    topBanners: data.banners
  }
}

//热门推荐action发送
const changeHotRecommendAction = (data) =>{
  return{
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommends: data.result
  }
}

//新碟上架action发送
const changeNewAlbumAction = (data) =>{
  return {
    type:actionTypes.CHANGE_NEW_ALBUM,
    newAlbum: data.albums
  }
}

// 飙升榜单Action
const changeUpRanking = res => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist,
})
// 新歌榜单Action
const changeNewRanking = res => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
})
// 原创榜单Action
const changeOriginRanking = res => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
})

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
      dispatch(changeHotRecommendAction(res))
    })
  }
}

//新碟上架

export const getNewAlbumAction = (limit = 10) => {
  return dispatch =>{
    getNewAlbum(limit).then(res =>{
      dispatch(changeNewAlbumAction(res))
    })
  }
}

// 获取榜单数据
export const getTopListAction = id => {
  return dispatch => {
    getRankListDetail(id).then(res => {
      switch (id) {
        case 19723756:
          dispatch(changeUpRanking(res))
          break
        case 3779629:
          dispatch(changeNewRanking(res))
          break
        case 2884035:
          dispatch(changeOriginRanking(res))
          break
        default:
      }
    })
  }
}