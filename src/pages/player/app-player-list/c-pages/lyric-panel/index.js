import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { PannelWrapper } from "./style"

import { scrollTo } from "@/utils/ui-helper"

export default memo(function LyricPanel() {
  const { lyricList, currentLyricIndex } = useSelector(state => ({
    lyricList: state.getIn(["player","lyricList"]),
    currentLyricIndex: state.getIn(["player","currentLyricIndex"])
  }),shallowEqual)

  //other hook
  const panelRef = useRef();
  useEffect(() => {
    // 前3行不滚动
    if (currentLyricIndex > 0 && currentLyricIndex < 3){
      return;
    }
    scrollTo(panelRef.current,(currentLyricIndex - 3) * 32, 320 );
  },[currentLyricIndex])

  return (
    <PannelWrapper ref={panelRef}>
      <div className="lrc-content" >
        {lyricList.map((item,index) => {
          return (<div key={item.time} className={index === currentLyricIndex ? "lrc-item active" : "lrc-item"}>
            {item.content}
          </div>)
        })}
      </div>
    </PannelWrapper>
  )
})
