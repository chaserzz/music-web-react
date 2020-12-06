import React, { memo } from 'react'

import { headerLists } from "@/common/local-data"

import { NavLink } from 'react-router-dom'
import{
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export default memo(function MYAppHeader() {
  //顶部路由的循环渲染逻辑抽取
  const  showSelectItem = (item,index) =>{
    if(! item.isNewPage){
      return (
      <NavLink to={item.link}
               exact
               key={item.title}
               className="header-item">{item.title}</NavLink>
      )
    }else{
      return (
        <a href={item.link} key={item.title} className="header-item" >{item.title}</a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <section className="content w1100">
        <HeaderLeft>
          <a href="#/" className="sprite_01 logo "> </a>
          <div className="header-group">
            {
              headerLists.map(showSelectItem)
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
        <div className="search-wrapper">
            <Input
              className="search"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            />
        </div>
        <a href="/#" className="center">创作者中心</a>
        <a href="/#" className="login">登录</a>
        </HeaderRight>
      </section>
      <div className="red-line"/>
    </HeaderWrapper>
  )
})
