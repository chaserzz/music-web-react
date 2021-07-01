import React from "react"
import { Redirect } from "react-router-dom"

import MYDiscover from "@/pages/discover"
import MYAlbum from '../pages/discover/c-pages/album'
import MYArtist from '@/pages/discover/c-pages/artist'
import MYSongs from '@/pages/discover/c-pages/songs'
import MYDjradio from '@/pages/discover/c-pages/djradio'
import MYRecommend from "@/pages/discover/c-pages/recommend"
import MYRanking from "@/pages/discover/c-pages/ranking"

import MYMine from "@/pages/mine"
import MYFriends from "@/pages/friends"
import MYDownLoad from "@/pages/download"
import MYPlayer from "../pages/player/MYPlayer"

const routes = [
  {
    path:'/',
    exact:true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path:'/discover',
    component:MYDiscover,
    routes:[
      {
        path:'/discover',
        exact:true,
        render: () => (
          <Redirect to="/discover/recommend" />
        )
      },{
        path:'/discover/album',
        component:MYAlbum
      },{
        path:"/discover/ranking",
        component:MYRanking
      },{
        path:"/discover/djradio",
        component:MYDjradio
      },{
        path:"/discover/songs",
        component:MYSongs
      },{
        path:"/discover/recommend",
        component:MYRecommend
      },{
        path:"/discover/artist",
        component:MYArtist
      },{
        path:"/discover/player",
        component: MYPlayer
      }
    ]
  },
  {
    path:'/mine',
    component:MYMine
  },
  {
    path:'/friends',
    component:MYFriends
  },
  {
    path:'/download',
    component:MYDownLoad
  }
]

export default routes