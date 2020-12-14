import * as actionTypes from "./constants"

import { getTopBanners } from "@/service/recommend"

/** 同步的acion */

const changeTopBannersAction = (data) =>{
  return {
    type: actionTypes.CHANGE_TOP_BANNER,
    topBanners: data.banners
  }
}

/** 异步的action */

export const getTopBannersAction = () =>{
  return dispatch => {
    getTopBanners().then(res =>{
      dispatch(changeTopBannersAction(res))
    })
  }
}