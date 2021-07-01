import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux"

import { getSongDetailAction, changeCurrentPlaySequenceAction, changeCurrentSong } from "../store/actionCreator"

import { NavLink } from 'react-router-dom'
import { Slider } from 'antd'
import { PlayBarWrapper, ControlWrapper, PlayInfo, Operator} from "./style"

import { getSizeImage, formatDate, getPlaySong } from "@/utils/format-utils"

export default memo(function AppPlayBar() {
  //state hook 
  let [ currentTime, setCurrentTime ] = useState(0); //歌曲的当前时间，毫秒格式
  const [progress, setProgress ] = useState(0) //进度条的进度
  const [isSliderChangeFlag , setIsSliderChangeFlag] = useState(false)  //用来判断是否在更改歌曲的进度
  const [isPlaying,setIsPlaying] = useState(false) //歌曲是否正在播放

  //redux hook
   const dispatch = useDispatch()
   //获得需要播放的歌曲的信息
   const { currentSong, playSequenceType, playList } = useSelector(state => ({
     currentSong: state.getIn(["player","currentSong"]),
     playSequenceType: state.getIn(['player','playSequenceType']),  //0: 顺序 1随机 2单曲
     playList: state.getIn(['player','playList'])
   }),shallowEqual)
  //other hooks
  //获得audio元素对象
   const audioRef = useRef();
  
   //获得歌曲的详情
  useEffect(() => {
    dispatch(getSongDetailAction(66282));
  },[dispatch])

  //根据歌曲修改audio的src
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    if(isPlaying){
    //修改音乐后查看是否报错: 无版权或null
    audioRef.current.play().then(res => {
      if(isPlaying){
        setIsPlaying(true)
      }
      }).catch(err => {
        console.log(err)
        setIsPlaying(false)
      })
    }
    
  },[currentSong])

  //数据获取以及转换
  const picUrl = currentSong.al && currentSong.al.picUrl; //歌曲图片
  const singerName = currentSong.ar && currentSong.ar[0].name; //歌手
  const totalTime = currentSong.dt || 0;  //总时间 毫秒
  const totalShowTime = formatDate(totalTime, "mm:ss");  //总时间 mm:ss格式
  const currentShowTime = formatDate(currentTime, "mm:ss");  //当前时间 mm:ss 格式

  //播放或暂停音乐点击
  const handleControlClick = () => {
    isPlaying ? pauseMusic() : playMusic();
  }

  //播放音乐
  const playMusic = () => {
    setIsPlaying(true);
    audioRef.current.play();
  }

  //暂停音乐
  const pauseMusic = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  }

  // 音乐播放完毕,播放下一首歌曲
  const handlePlayEnded = (e) => {
    if(playSequenceType === 2){
      // 单曲循环
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      return;
    }
    dispatch(changeCurrentSong(1));
  }

  // 修改播放列表的方式
  const handleSequenceChange = () => {
    let nextPlaySequence = playSequenceType + 1;
    if(nextPlaySequence > 2){
      nextPlaySequence = 0;
    }
    dispatch(changeCurrentPlaySequenceAction(nextPlaySequence));
  }
  
  //修改当前播放的音乐 tag 1 下一首 -1 上一首
  const changeMusic = (tag) => {
    dispatch(changeCurrentSong(tag));
    if(isPlaying){
      //如果修改前正在播放，则更换音乐后继续播放
      playMusic()
    }
  }

  // audio播放时修改当前时间
  const handleTimeUpdate = (e) => {
    console.log("currentTime",e.target.currentTime)
    //如果正在修改歌曲的进度，则当前时间和进度不再跟随audio中的时间
    if(isSliderChangeFlag){
      return;
    }
    setCurrentTime(e.target.currentTime * 1000);
    setProgress(currentTime / totalTime * 100);
  }

  /**
   *  滑块滑动时，调整显示的时间
   * @param {number} value slider目前所处的位置 为百分比*100的整数 
   */
  const handleSliderOnChange = useCallback(value => {
    setIsSliderChangeFlag(true) //将sliderChangeFlag设置为true
    setCurrentTime(value / 100 * totalTime);
    setProgress(value);
  },[totalTime])

/**
 * 滑块停止滑动(类似于mouseup事件),调整audio元素的currentTime
 * @param {number} value 所处进度 百分比整数
 */
  const handleSliderAfterChange = useCallback(value => {
    audioRef.current.currentTime = value / 100 * totalTime / 1000;
    setIsSliderChangeFlag(false); //将sliderChangeFalg设置为false，使得进度和当前时间继续跟随audio标签的时间
  },[totalTime,isPlaying])

  return (
    <PlayBarWrapper className="sprite_player">
       <div className="w980 content">
         {/** 歌曲控制 */}
        <ControlWrapper>
          <div className="btn sprite_player back" onClick={e => {changeMusic(-1)}} />
          <div className={`btn sprite_player control ${isPlaying ? "stop" : "play" }`} onClick={e => handleControlClick()} />
          <div className="btn sprite_player next" onClick={e => {changeMusic(1)}} />
        </ControlWrapper>
        <PlayInfo>
          <NavLink             
                  to={{
                  pathname: '/discover/player',
                  }}
                  className="image">
            <img src={getSizeImage(picUrl, 35)} alt="" />
          </NavLink>
          {/* 歌曲信息 */}
          <div className="info">
            <p className="song">
              {currentSong.name}
              <span className="singer-name">
                {singerName}
              </span>
            </p>
            <div className="progress">
              <Slider defaultValue={0}
                      value={progress}
                      onChange={handleSliderOnChange}
                      onAfterChange={handleSliderAfterChange}
                      tooltipVisible={false}
                     />
              <div className="time">
                  <span className="now-time">{currentShowTime}</span>
                  <span className="divider">/</span>
                  <span className="total-time">{totalShowTime}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        {/* 播放设置 */}
        <Operator sequence={playSequenceType}>
        <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={handleSequenceChange}></button>
            <button className="sprite_player btn playlist" >{playList.length}</button>
          </div>
        </Operator>
       </div>
       <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={handlePlayEnded} />
    </PlayBarWrapper>
  )
})
