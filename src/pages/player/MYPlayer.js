import React, { memo } from 'react'

import {
  PlayWrapper,
  PlayerLeft,
  PlayerRight
} from "./style"

export default memo(function MYPlayer() {
  return (
    <PlayWrapper>
      <div className="content">
        <PlayerLeft>
          
        </PlayerLeft>
        <PlayerRight>
  
        </PlayerRight>
      </div>
    </PlayWrapper>
  )
})
