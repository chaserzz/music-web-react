//榜单
import React, { memo } from 'react'

import MYRecommendHeader from "@/components/recommend-header"

import {
  RecommendRankingWrapper
} from './style'
export default memo(function MYRecommendRank() {
  return (
    <RecommendRankingWrapper>
      <MYRecommendHeader title="榜单" />
    </RecommendRankingWrapper>
  )
})
