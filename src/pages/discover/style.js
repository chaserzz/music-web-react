import styled from "styled-components"

export const DiscoverWrapper = styled.div`
  .top{
    height: 30px;
    background-color: #C20C0C;
  }

`

export const CategoryList = styled.ul`
  display: flex;
  padding-left: 180px;
  .item {
    text-align: center;
    a {
      display: inline-block;
      padding: 0 13px;
      margin: 3px 17px 0;
      border-radius: 20px;
      color: #fff;
      &:hover,
      &.menu-active {
        text-decoration: none;
        background-color: #9b0909;
      }
    }
  }
`