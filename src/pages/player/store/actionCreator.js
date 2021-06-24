import { getSongDetail } from '@/service/player'
import * as actionType from "./constants"
//同步action
const changeCurrentSongAction = (currentSong) => ({
  type: actionType.CHANGE_CURRENT_SONG,
  currentSong
})

//异步action
//获得歌曲详情
export const getSongDetailAction = (ids) => {
  return dispatch => {
    getSongDetail(ids).then(res => {
      dispatch(changeCurrentSongAction(res.songs[0]))
    })
  }
}