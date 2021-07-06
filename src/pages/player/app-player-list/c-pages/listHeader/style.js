import styled from 'styled-components';
import PlayPanel from "@/assets/img/playpanel_bg.png"

export const ListHeaderWrapper = styled.div`
  height: 40px;
  line-height: 40px;
  background: url(${PlayPanel}) 0 0;
` 

export const ListHeaderLeft = styled.div`
  display: inline-block;
  height: 40px;
  width: 553px;
  h4{
    position: absolute;
    left: 25px;
    top: 0;
    height: 39px;
    line-height: 39px;
    font-size: 14px;
    font-weight: 600;
    color: #e2e2e2;
  }

  .icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin: 1px 6px 0 0 ;
  }
  .addAll{
    position: absolute;
    left: 398px;
    top: 12px;
    height: 15px;
    line-height: 15px;
    cursor: pointer;
    .favor {
    background-position: -24px 0;
    }
    &:hover{
      .favor{
        background-position: -24px -20px;
      }
    }
  }
  .clear{
    position: absolute;
    left: 490px;
    top: 12px;
    height: 15px;
    line-height: 15px;
    cursor: pointer;
    .remove {
    width: 13px;
    background-position: -51px 0;
    }
    &:hover{
      .remove{
        background-position: -51px -20px;
      }
    }
  }

`
export const ListHeaderGap = styled.div`
  display: inline-block;
  height: 40px;
  width: 6px;
`


export const ListHeaderRight = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  height: 40px;
  width: 420px;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
  color: #fff;
  .colse{

  }
`