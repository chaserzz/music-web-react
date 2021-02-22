import request from "./request"

//轮播图数据获取
export const getTopBanners = () =>{
  return request({
    url:"/banner"
  })
}

/**
 *  热门推荐数据获取
 * @param {num} limit 数量限制
 */
export const getHotRecommends = (limit) =>{
  return request({
    url:"/personalized",
    params:{
      limit
    }
  })
}