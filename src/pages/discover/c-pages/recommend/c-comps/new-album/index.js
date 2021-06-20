//新碟上架
import React, { memo , useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getNewAlbumAction } from "../../store/actionCreator"

import { Carousel } from 'antd'
import MYRecommendHeader from "@/components/recommend-header"
import MYAlbumCover from "@/components/album-cover"

import { NewAlbumWrapper } from './style'

export default memo(function MYNewAlbum() {
  //state
  const { newAlbum } = useSelector(state => ({
    newAlbum: state.getIn(["recommend","newAlbum"])
  }),shallowEqual)
  
  //redux hooks
  const dispatch = useDispatch()

  //other hooks
  const albumRef = useRef()
  
  useEffect(() =>{
    dispatch(getNewAlbumAction())
  }, [dispatch])

  
  return (
    <NewAlbumWrapper>
      <MYRecommendHeader title="新碟上架" />
      <div className="content">
        <button className="arrow sprite_02 arrow-left" 
                onClick={e => albumRef.current.prev()} />
        <button className="arrow sprite_02 arrow-right" 
                onClick={e => albumRef.current.next()} />
        <div className="inner">
          <Carousel dots={false} ref={albumRef} >
            {
              [0,1].map(item => (
                <div key={item} className="page">
                  {
                    newAlbum.slice( item * 5,(item + 1) * 5 ).map(album =>{
                      return (
                        <MYAlbumCover key={album.id}
                                      info={album}
                                      size={100}
                                      width={118}
                                      bgp="-570px">
                          {album.name}
                        </MYAlbumCover>
                      )
                    })
                  }
                </div>
              ))
            }
          </Carousel>
        </div>
      </div>
    </NewAlbumWrapper>
  )
})
