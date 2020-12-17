import React, { memo } from 'react'

import {
  RecommendWrapper,
  RecommendContent,
  LeftContent,
  RightContent
} from "./style"
import MYTopBanner from "./c-comps/topBanner"
export default memo(function MYRecommend() {
  

  return (
    <RecommendWrapper>
      <MYTopBanner />
      <RecommendContent className="w980">
        <LeftContent>

        </LeftContent>
        <RightContent>
          
        </RightContent>
      </RecommendContent>
    </RecommendWrapper>
  )
})
