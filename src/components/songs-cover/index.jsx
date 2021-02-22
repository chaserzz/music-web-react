import React, { memo } from 'react'

import { SongCoverWrapper } from './style'

import { getCount, getSizeImage } from "@/utils/format-utils"

export default memo(function SongsCover(props) {

  const { info, width = 140 } = props

  return (
    <SongCoverWrapper width={width}>
      <header className="cover-wrapper">
        <img src={getSizeImage(info.picUrl,140)} alt="" />
        <section className="cover-mask sprite_cover">
          <div className="bottom-bar sprite_cover">
            <span>
              <i className="sprite_icon erji"/>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play isLink"/>
          </div>
        </section>
      </header>
      <section className="cover-title text-nowrap">
        {info.name}
      </section>
      <footer className="cover-source text-nowrap isLink">
        by {info && info.copywriter}
      </footer>
    </SongCoverWrapper>
  )
})
