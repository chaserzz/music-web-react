import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux';

import { ListHeaderWrapper, ListHeaderLeft, ListHeaderRight, ListHeaderGap } from "./style.js"

export default memo(function ListHeader() {
  const { currentSong, playList, } = useSelector(state => ({
    currentSong: state.getIn(["player","currentSong"]),
    playList: state.getIn(['player','playList']),
  }),shallowEqual)

  return (
    <ListHeaderWrapper>
      <ListHeaderLeft>
        <h4>
          播放列表({playList.length})
        </h4>
        <span className="addAll">
          <i className="sprite_playlist icon favor"></i>
          收藏全部
        </span>
        <span className="clear">
            <i className="sprite_playlist icon remove"></i>
            清除
        </span>
      </ListHeaderLeft>
      <ListHeaderGap />
      <ListHeaderRight>
        <span>
          {currentSong.name}
        </span>
      </ListHeaderRight>
    </ListHeaderWrapper>
  )
})
