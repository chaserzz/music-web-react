import { getSongDetail, getLyric } from '@/service/player'
import * as actionType from "./constants"
import { getRandomNubmer } from "@/utils/math.utils"
import { parseLyric } from "@/utils/parse-lyric"
//同步action

//修改播放的歌曲的下标
export const changeCurrentSongIdAction = (id) =>  ({
    type: actionType.CHANGE_CURRENT_SONG_ID,
    currentSongId: id
})

//修改当前播放列表
export const changePlayListAction = (playList) => ({
    type: actionType.CHANGE_PLAY_LIST,
    playList
})

//修改当前歌曲
const changeCurrentSongAction = (currentSong) => ({
  type: actionType.CHANGE_CURRENT_SONG,
  currentSong
})

//用户点击下一首或者上一首

export const changeCurrentSong = (tag) => {
  console.log("changeCurrentSong")
  return (dispatch,getState) => {
    const playList = getState().getIn(['player', 'playList']);
    const currentSongId = getState().getIn(['player', 'currentSongId']);
    const playSequenceType = getState().getIn(['player', 'playSequenceType']);
    let nextSongIds = 0 //下一首歌的id
    let nextSongId = currentSongId  //下一首歌曲的下标值
    switch (playSequenceType) {
      //由于顺序播放和单曲循环播放的逻辑基本相同，所以不单独拉出
      case 1:{  //随机
        nextSongId = getRandomNubmer(playList.length);  //下一首歌的下标
        while(nextSongId === currentSongId){
          //随机去掉本首歌曲
          nextSongId = getRandomNubmer(playList.length);
        }
        break;
      }
      default:{  //顺序
        nextSongId = currentSongId + tag //下一首歌曲的下标
        if(nextSongId === -1){
          // 当前播放的歌曲是第一首歌曲
          nextSongId = playList.length - 1
        }
        if(nextSongId >= playList.length){
          //当前播放的歌曲是最后一首歌曲
          nextSongId = 0
        }
        break;
      }
    }
    nextSongIds = playList[nextSongId].id
    dispatch(changeCurrentSongIdAction(nextSongId));
    dispatch(getSongDetailAction(nextSongIds));
  }
}

//修改当前播放方式 0顺序 1随机 2单曲
export const changeCurrentPlaySequenceAction = (playSequenceType) => ({
  type: actionType.CHANGE_PLAY_SEQUENCE_TYPE,
  playSequenceType
}) 

// 保存当前播放的歌词的Map
export const changeLyricMapAction = (lyricMap) => ({
  type: actionType.CHANGE_LYRIC_MAP,
  lyricMap
})
// 保存当前播放的歌词的数组
export const changeLyricListAction = (lyricList) => ({
  type: actionType.CHANGE_LYRIC_LIST,
  lyricList
})

//异步action
//获得歌曲详情
export const getSongDetailAction = (ids) => {
  return (dispatch,getState) => {
    const playList = getState().getIn(["player","playList"]);
    const songIndex = playList.findIndex(song => song.id === ids);  //获得对应歌曲在playList中的下标， 不存在获得的是-1
    //搜索playList中是否存在该歌曲
    let song = null
    if(songIndex === -1){
      //该歌曲不存在playList中
      getSongDetail(ids).then(res => {
        song = res.songs && res.songs[0];
        //修改currentSong
        if( !song ){
          return;
        }
        dispatch(changeCurrentSongAction(song));
        //将该歌曲添加到播放列表末尾
        const newPlayList = [...playList,song];
        dispatch(changePlayListAction(newPlayList));
        //修改当前播放歌曲的下标
        dispatch(changeCurrentSongIdAction(newPlayList.length - 1));
        //获得歌词
        dispatch(getLyricAction(song.id));
      })
    }else{
      // 该歌曲在playList中
      dispatch(changeCurrentSongAction(playList[songIndex]));
      dispatch(changeCurrentSongIdAction(songIndex));
      if(!song){
        return;
      }
      //获得歌词
      dispatch(getLyricAction(song.id));
    }
  }
}

export const getLyricAction = (id) => {
  return dispatch => {
    console.log("object")
    getLyric(id).then(res => {
      const lyric = res.lrc.lyric;
      const {lyricList, lyricMap } = parseLyric(lyric);
      dispatch(changeLyricMapAction(lyricMap));
      dispatch(changeLyricListAction(lyricList));
    })
  }
}