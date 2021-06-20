//榜单
import React, { memo , useEffect} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import MYRecommendHeader from "@/components/recommend-header"
import MYRankList from "@/components/rank-list"

import { getTopListAction } from '../../store/actionCreator'

import {
  RecommendRankingWrapper
} from './style'
export default memo(function MYRecommendRank() {
    //state
    // redux hook
    const { upRanking = [], originRanking = [], newRanking = [] } = useSelector(state => ({
      upRanking: state.getIn(['recommend', 'upRanking']),
      originRanking: state.getIn(['recommend', 'originRanking']),
      newRanking: state.getIn(['recommend', 'newRanking'])
    }), shallowEqual)
    const dispatch = useDispatch()
  
    // other hook
    useEffect(() => { 
      dispatch(getTopListAction(19723756))
      dispatch(getTopListAction(3779629))
      dispatch(getTopListAction(2884035))
    }, [dispatch])

  return (
    <RecommendRankingWrapper>
      <MYRecommendHeader title="榜单" />
      <div className="ranking-info">
        <MYRankList info={originRanking} />
        <MYRankList info={upRanking} />
        <MYRankList info={newRanking} />
      </div>
    </RecommendRankingWrapper>
  )
})
