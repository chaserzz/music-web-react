import {Map} from "immutable"
import * as actionType from "./constants"
const defaultState = Map({
  playList:[],  //播放列表
  currentSongId: 0,  //当前播放的歌曲的索引值
  currentSong: {},  //当前播放歌曲的信息
  playSequenceType: 0, //0: 顺序 1随机 2单曲
  lyricMap: {},  //播放歌曲的Map
  lyricList: [],
  currentLyricIndex: 0 //当前播放的歌词的下标
})

export default function reducer(state = defaultState, action){
  switch (action.type) {
    case actionType.CHANGE_CURRENT_SONG: {
      return state.set("currentSong",action.currentSong)
    }
    case actionType.CHANGE_CURRENT_SONG_ID: {
      return state.set("currentSongId",action.currentSongId)
    }
    case actionType.CHANGE_PLAY_LIST: {
      return state.set("playList",action.playList)
    }
    case actionType.CHANGE_PLAY_SEQUENCE_TYPE: {
      return state.set("playSequenceType",action.playSequenceType)
    }
    case actionType.CHANGE_LYRIC_MAP: {
      return state.set("lyricMap",action.lyricMap)
    }
    case actionType.CHANGE_LYRIC_LIST: {
      return state.set("lyricList",action.lyricList)
    }
    case actionType.CHANGE_CURRENT_LYRIC_INDEX: {
      return state.set("currentLyricIndex",action.currentLyricIndex)
    }
    default:
      return state
  }
}