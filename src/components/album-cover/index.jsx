import React, { memo } from 'react'

import { getSizeImage } from "@/utils/format-utils.js"

import { AlbumCoverWrapper } from './style'

export default memo(function MYAlbumCover(props) {
  
  const { info, width = 153, size = 130, bgp="-845px", } = props

  return (
    <AlbumCoverWrapper width={width} bgp={bgp} size={size}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl,size)} alt="" />
        <a href="/#" className=" image_cover cover">{info.name}</a>
      </div>
      <div className="album-info">
      <div className="album-name text-nowrap">
        <a className="isLink" href="/#">{info.name}</a>
      </div>
      <div className="artist text-nowrap">
        {
          /**处理多个歌手的情况**/
          info.artists.map((item,index) =>{
            if(index === info.artists.length - 1){
              return (
                <a className="isLink" key={item.name} href="/#">{item.name}</a>
              )
            }else{
              return (
                <span key={item.name}>
                  <a className="isLink" href="/#">{item.name}</a> /&nbsp;
                </span>
              )
            }
          })
        }
      </div>
      </div>
    </AlbumCoverWrapper>
  )
})
