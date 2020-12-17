import styled from "styled-components"

// 下载中心的图片
import download from "@/assets/img/download.png"
//下载中心的button图片
import downloadButton from "@/assets/img/downloadButton.png"
// 下载中心的鼠标hover时的图片
import downloadButtonActive from "@/assets/img/downloadButton-active.png"
//左右箭头控制的图片
import Arrow from "@/assets/img/banner_sprite.png"

export const TopBannerWrapper = styled.div`
  height: 285px;
  background: url(${props => props.bgImage});
  .banner{
    position: relative;
    margin: 0 auto;
    height: 100%;
  }
  .slick-dots{
    height: 6px;
    li{
      margin-left: 2px;
      margin-right: 2px;
      button{
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }
      &.slick-active {
        width: 16px;
        button {
          background-color: #A40011;
        }
      }
    }
  }
`

export const BannerLeft = styled.div`
  display: inline-block;
  background: url('${props => props.bgImage}') center center/6000px;
  height: 100%;
  width: 730px;
  img{
    width:100%;
    height:285px;
  }
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${Arrow});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    &:nth-child(1) {
      left: -68px;
      background-position: 0 -360px;
    }
    &:nth-child(2) {
      right: -68px;
      background-position: 0 -508px;
    }
  }
`

export const BannerRight = styled.div`
  display: inline-block;
  position: relative;
  height: 285px;
  width: 250px;
  background: url(${download});
`

export const DownLoadButton = styled.a`
  display: inline-block;
  position: absolute;
  margin-top: 185px;
  margin-left: 19.5px ;
  width: 215px;
  height: 57px;
  border-radius: 2px;
  background: url(${downloadButton}) no-repeat;
  &:hover{
    background: url(${downloadButtonActive}) no-repeat;
  }
`

export const DownLoadDesc = styled.p.attrs({
  children:"PC 安卓 iPhone WP iPad Mac 六大客户端"
})`
  position: absolute;
  width:100%;
  bottom: 15px;
  text-align: center;
  font-size: 12px;
  color: #8d8d8d;
`