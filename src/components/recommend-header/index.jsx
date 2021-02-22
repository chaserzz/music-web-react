import React, { memo } from 'react'
import propTypes from 'prop-types'
import { RcmHeaderLeft, RcmHeaderRight, RcmHeaderWrapper } from './style'

const RecommendHeader = function RecommendHeader(props) {
  const { title, keywords, showIcon, right } = props
  return (
    <RcmHeaderWrapper className="sprite_02" showIcon={showIcon}>
      <RcmHeaderLeft>
        <h2 className="hot-title">
          <a href="/discover/recommend" className="no-link hot-text">
            {title}
          </a>
        </h2>
        <ul className="keywords">
          {keywords.map((item,index) => {
            if(index === keywords.length - 1){
              return (
                <li className="item" key={item}>
                  <a href="/">{item}</a>
                </li>
              )
            }
            return (
              <li className="item" key={item}>
                <a href="/">{item}</a>
                <span className="line">|</span>
              </li>
            )
          })}
        </ul>
      </RcmHeaderLeft>
      <RcmHeaderRight>
        <span>{right}</span>
        {showIcon &&<i className="icon sprite_02"></i>}
      </RcmHeaderRight>
    </RcmHeaderWrapper>
  )
}

RecommendHeader.propTypes = {
  // title属性必填
  title: propTypes.string.isRequired,
  keywords: propTypes.array,
  showIcon: propTypes.bool,
  right: propTypes.any
}

RecommendHeader.defaultProps  = {
  keywords: [],
  showIcon: true,
  right: '更多'
}

export default memo(RecommendHeader)
