import React, { memo } from 'react'

import MYTopBanner from "./c-comps/topBanner"  //轮播图组件
import MYHotRecommend from "./c-comps/hot-recommend"  //热门推荐组件
import MYNewAlbum from "./c-comps/new-album" //新碟上架组件
import MYRecommendRank from "./c-comps/recommend-ranking" //榜单组件

import {
  RecommendWrapper,
  RecommendContent,
  LeftContent,
  RightContent
} from "./style"
export default memo(function MYRecommend() {
  

  return (
    <RecommendWrapper>
      <MYTopBanner />
      <RecommendContent className="w980">
        <LeftContent>
          <MYHotRecommend />
          <MYNewAlbum />
          <MYRecommendRank />
        </LeftContent>
        <RightContent>
          
        </RightContent>
      </RecommendContent>
    </RecommendWrapper>
  )
})
