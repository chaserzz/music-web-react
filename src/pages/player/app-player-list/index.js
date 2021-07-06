import React, { memo } from 'react'

import ListHeader from "./c-pages/listHeader"
import PlayList from "./c-pages/play-list"
import LyricPanel from "./c-pages/lyric-panel"
import { PanelWrapper } from "./style.js"

export default memo(function AppPlayerList() {
  return (
    <PanelWrapper>
      <ListHeader />
      <div className="main">
        <img className="image" src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg" alt=""/>
        <PlayList />
        <LyricPanel />
      </div>
    </PanelWrapper>
  )
})
