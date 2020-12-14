import React, { memo } from 'react'

import {
  RecommendWrapper
} from "./style"
import MYTopBanner from "./c-comps/topBanner"
export default memo(function MYRecommend() {
  

  return (
    <RecommendWrapper>
      <MYTopBanner />
    </RecommendWrapper>
  )
})
