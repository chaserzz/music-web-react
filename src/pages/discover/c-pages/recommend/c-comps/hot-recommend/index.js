//热门推荐
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import MYRecommendHeader from "@/components/recommend-header" //header组件
import MYSongsCover from "@/components/songs-cover" //专辑组件

import { getHotRecommendsAction } from "../../store/actionCreator"

import { 
  HotRecommendWrapper
} from "./style"

export default memo(function MYHotRecommend() {
  //state相关代码
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend","hotRecommends"])
  }),shallowEqual)


  //redux hooks
  const dispatch = useDispatch()

  //other hooks
  useEffect(() =>{
    dispatch(getHotRecommendsAction())
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <MYRecommendHeader title="热门推荐" keywords={["华语","流行","民谣","摇滚","电子"]} />
      <div className="recommend-list">
        {
          hotRecommends.map(item =>  (
            <MYSongsCover key={item.id} info={item} />
            )
          )
        }
      </div>
    </HotRecommendWrapper>
  )
})
