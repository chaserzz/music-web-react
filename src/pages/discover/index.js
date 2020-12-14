import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import { dicoverMenu } from "@/common/local-data"
import {
  DiscoverWrapper,  
  CategoryList
} from './style'
import { NavLink } from 'react-router-dom'

export default memo(function Discover(props) {
  const route = props.route
  return (
    <DiscoverWrapper>
      <div className="top">
      <CategoryList className="w1100">
        {
          dicoverMenu.map((item) => {
            return (
              <li className="item" key={item.title}>
                <NavLink activeClassName="menu-active" to={item.link}>{item.title}</NavLink>
              </li>
            )
          })
        }
      </CategoryList>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
