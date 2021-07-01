import styled from 'styled-components' 

export const PlayBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;
  z-index: 29;
  & .content{
    display: flex;
    position: relative;
    top: 5px;
    margin: 0 auto;
    height: 47px;
    align-content: center;
  }
`

export const ControlWrapper = styled.div`
  display: flex;
  width: 112px;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  .btn{
    cursor: pointer;
    margin-right: 8px;
  }
  .back{
    width: 28px;
    height: 28px;
    background-position: 0 -130px;
    &:hover{
      background-position: -30px -130px;
    }
  }
  .control {
    width: 36px;
    height: 36px;
  }
  .play{
    background-position: 0 -204px;
    &:hover{
      background-position: -40px -204px;
    }
  }
  .stop{
    background-position: 0 -165px;
    &:hover{
      background-position: -40px -165px;
    }
  }
  .next {
    width: 28px;
    height: 28px;
    background-position: -80px -130px;
    &:hover{
      background-position: -110px -130px;
    }
  }
`

export const PlayInfo = styled.div`
  width: 642px;
  display: flex;
  align-items: center;
  .image{
    width: 34px;
    height: 35px;
    border-radius: 5px;
  }
  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;
    /**歌曲信息 */
    .song{
      color: #e1e1e1;
    }
    .singer-name{
      color: #a1a1a1;
      margin-left: 10px;
    }
    /**进度条 */
    .progress{
      display: flex;
      align-items: center;
      .ant-slider {
      width: 493px;
      height: 9px;
      margin-top: -2px;
      z-index: 100;

      .ant-slider-rail,
      .ant-slider-track,
      .ant-slider-step {
        height: 9px;
      }

      .ant-slider-rail {
        background: url(${require('@/assets/img/progress_bar.png').default}) 0 0;
      }

      .ant-slider-track {
        background: url(${require('@/assets/img/progress_bar.png').default});
        background-position: left -66px;
      }

      .ant-slider-handle {
        width: 20px;
        height: 22px;
        border: 0;
        margin-top: -7px;
        background: url(${require('@/assets/img/sprite_icon.png').default});
        background-position: 0 -250px;
      }
    }
    /**时间 */
    .time {
      .now-time {
        color: #a1a1a1;
      }
      .divider{
        margin: 0 3px;
      }
      .total-time {
        color: #797979;
      }
    }
    }
  }
`

export const Operator = styled.div`
  display: flex;
  position: relative;
  top: 5px;
  align-items: center;
  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }
  .right {
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;
    
    .volume {
      background-position: -2px -248px;
    }

    .loop {
      background-position: ${props => {
        //这里props需要通过Operator传入
        switch(props.sequence) {
          case 1:
            return "-66px -248px";
          case 2:
            return "-66px -344px";
          default:
            return "-3px -344px";
        }
      }};
    }

    .playlist {
      float: right;
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`