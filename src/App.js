import React, { memo } from 'react'
import { renderRoutes } from "react-router-config"
import { HashRouter } from 'react-router-dom'

import routes from '@/router'

import MYAppHeader from "@/components/app-header"
import MYAppFooter from "@/components/app-footer"

export default memo(function App() {
  return (
    <HashRouter>
      <MYAppHeader />
        {renderRoutes(routes)}
      <MYAppFooter />
    </HashRouter>
  )
})
