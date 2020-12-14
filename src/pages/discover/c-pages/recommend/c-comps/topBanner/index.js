import React, { memo, useEffect, useRef, useState , useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from "react-redux"

import { getTopBannersAction } from "../../store/actionCreator"

import { Carousel } from 'antd';
import {
  TopBannerWrapper,
  BannerLeft,
  BannerRight,
  DownLoadButton,
  DownLoadDesc,
  BannerControl
} from "./style"

export default memo(function MYTopBanner() {

  //控制毛玻璃的图片地址state
  const [ currentIndex, setCurrentIndex ] = useState(0)
  // 将state中的Topbanner映射到此组件中
  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(["recommend","topBanners"])
  }),shallowEqual/** 使得useSelector进行浅层比较,而不是引用比较 */ )
  //利用react-redux提供的Hook直接返回dispatch这个对象
  const dispatch = useDispatch()    
  
  //除了状态相关的其余Hooks
  const bannerRef = useRef()

  // Hooks实现ComponentDidMount的生命周期函数
  useEffect(()=>{
    dispatch(getTopBannersAction())
  },[dispatch])

  //在轮播图切换图片之前触发的事件
  const beforeBannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])
   
  // 毛玻璃图片的url
  const bgImg = topBanners && topBanners[currentIndex] && topBanners[currentIndex].imageUrl + "?imageView&blur=40x20"
  return (
    <TopBannerWrapper bgImage = {bgImg}>
      <div className="banner w980">
        <BannerLeft>
          <Carousel ref={bannerRef} 
                    effect="fade"
                    autoplay={true}
                    beforeChange={beforeBannerChange}>
            {
             topBanners && topBanners.map((item,index) =>{
                return (
                  <div key={item.imageUrl}>
                    <img src={item.imageUrl}/>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <DownLoadButton />
          <DownLoadDesc />
        </BannerRight>
        <BannerControl >
        <button
            className="btn"
            onClick={() => bannerRef.current.prev()}
          ></button>
          <button
            className="btn"
            onClick={() => bannerRef.current.next()}
          ></button>
        </BannerControl >
      </div>
    </TopBannerWrapper>
  )
})
