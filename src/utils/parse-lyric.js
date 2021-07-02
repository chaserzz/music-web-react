const praseReg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/  //歌词正则
export const parseLyric = (lyric) => {
  const lyricList = lyric.split("\n");
  const resultList = []
  const lyricMap = lyricList.reduce((pre,currentItem,index) => {
      if(!currentItem){
        return pre
      }
      let result = praseReg.exec(currentItem);
      if(! result){
        return pre;
      }
      let minute = result[1] * 60 * 1000;
      let second = result[2] * 1000;
      let millisecond = result[3] - 0;
      const time = minute + second + millisecond; //获得歌词的毫秒时间
      pre[time] = currentItem.replace(praseReg,"").trim();
      resultList.push({
        time,
        content: pre[time]
      })
      return pre;
    },{})
    return {
      lyricList:resultList,
      lyricMap}
  }