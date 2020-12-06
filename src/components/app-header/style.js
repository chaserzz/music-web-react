import styled from "styled-components"

import sprite_01 from "@/assets/img/sprite_01.png"

export const HeaderWrapper =styled.div`
  width:100%;
  background-color: #242424;
  .content{
    display: flex;
    height: 70px;
    justify-content: space-between;
  }
  .red-line {
    height: 5px;
    background-color: #c20b0b;
  }
` 

export const HeaderLeft = styled.div`
  display:flex;
  .logo{
    display: block;
    padding-right: 8px;
    width: 176px;
    height: 100%;
    background-position: 0 0;
  }
  .header-group{
    display: flex;
    justify-content: start;
    .header-item{
      position: relative;
      display: block;
      padding: 0 19px;
      height: 70px;
      line-height: 70px;
      text-align: center;
      font-size: 14px;
      color: #ccc;
      &:hover{
        background-color: #000;
        color:#fff;
      }
      /* hot图标 */
      :last-of-type {
        position: relative;
        ::after {
          position: absolute;
          content: '';
          z-index:99;
          width: 28px;
          height: 19px;
          background-image: url(${sprite_01});
          background-position: -190px 0;
          top: 20px;
          right: -20px;
        }
       }
      }
    }
    .active{
        background-color: #000;
        color: #fff !important;
      &::before{
        position: absolute;
        display: block;
        content: "";
        width: 12px;
        height: 7px;
        background-image: url(${sprite_01});
        background-position: -226px 0;
        bottom: -1px;
        left: 50%;
        transform: translate( -50% , 0)
      }
    }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;
  .search-wrapper {
    position: relative;
    /* 搜索框 */
    .search {
      width: 158px;
      height: 32px;
      border-radius: 16px;
      input {
        outline: none;
        &::placeholder {
          color:#9B9B9B;
          font-size: 12px;
        }
      }
    }
  }
  /**创作中心 */
  .center{
    display:block;
    width: 90px;
    height: 32px;
    margin: 0 16px;
    border: 1px solid #666;
    border-radius: 16px;
    background-color: transparent;
    line-height: 32px;
    text-align: center;
    color: #ccc;
    &:hover{
      border-color: #ccc;
      color: #fff;
    }
  }
`