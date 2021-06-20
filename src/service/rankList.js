import request from "./request"
//所有榜单的信息获取
export function getRankList(){
  return request({
    url:"/toplist"
  })
}

// 榜单的详细数据获取
export function getRankListDetail(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}