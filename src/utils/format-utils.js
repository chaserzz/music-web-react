/**
 * 对数字进行格式化
 * @param {number} count
 */
export function getCount(count) {
  if (count < 0) return
  //一万以下
  if (count < 10000) {
    return count
  } /*一万以上一亿以下*/else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万'
  } else /*一亿以上*/{
    return Math.floor(count / 10000000) / 10 + '亿'
  }
}

//处理图片
export function getSizeImage(imgUrl,size){
  return `${imgUrl}?param=${size}x${size}`
}

//时间格式化
export function formatDate(time, fmt) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
};

export function formatMonthDay(time) {
  return formatDate(time, "MM月dd日");
}

export function formatMinuteSecond(time) {
  return formatDate(time, "mm:ss");
}

/**
 * 拼接歌曲播放的路径
 * @param {number} id - 播放的歌曲的id
 */
export function getPlaySong(id){
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}