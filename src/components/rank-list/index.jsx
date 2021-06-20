import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils.js'

import { RankingListWrapper } from './style'

export default memo(function MYRankList(props) {
  //props
  const { info } = props
  const { tracks = [] } = info

  
  return (
    <RankingListWrapper>
      <div className="ranking-header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
          <div className="image_cover ">
            {info.name}
          </div>
        </div>
        <div className="tit">
          <div>
            <h3>{info.name}</h3>
          </div>
          <div className="btn">
            <a href="/discover/recommend" className="no-link sprite_02 text-indent play">
              播放
            </a>
            <a href="/discover/recommend" className="no-link sprite_02 text-indent favourite">
              收藏
            </a>
          </div>
        </div>
      </div>
      <div className="ranking-list">
        {tracks &&
          tracks.length > 0 &&
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="number">{index + 1}</div>
                  <a href="/play" className="song-name text-nowrap" >
                    {item.name}
                  </a>
                <div className="oper">
                  <a
                    href="/discover/recommend"
                    className="sprite_02 btn play"
                    
                  >
                    {item.name}
                  </a>
                  <a
                    href="/discover/recommend"
                    className="sprite_icon2 btn addto"
                    
                  >
                    {item.name}
                  </a>
                  <a href="/play" className="no-link sprite_02 btn favourite">
                    {item.name}
                  </a>
                </div>
              </div>
            )
          })}
      </div>
      <div className="ranking-footer">
        <a href="/all" className="no-link show-all">
          查看全部&gt;
        </a>
      </div>
    </RankingListWrapper>
  )
})
