//新碟上架
import React, { memo } from 'react'

import MYRecommendHeader from "@/components/recommend-header"

import {
  NewAlbumWrapper
} from './style'

export default memo(function MYNewAlbum() {
  return (
    <NewAlbumWrapper>
      <MYRecommendHeader title="新碟上架" />
    </NewAlbumWrapper>
  )
})
