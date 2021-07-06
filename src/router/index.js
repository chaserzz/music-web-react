import React from "react"
import { Redirect } from "react-router-dom"

const MYDiscover = React.lazy(() => import("@/pages/discover"));
const MYAlbum = React.lazy(() => import("../pages/discover/c-pages/album"));
const MYArtist = React.lazy(() => import("@/pages/discover/c-pages/artist"));
const MYSongs = React.lazy(() => import("@/pages/discover/c-pages/songs"));
const MYDjradio = React.lazy(() => import("@/pages/discover/c-pages/djradio"));
const MYRecommend = React.lazy(() => import("@/pages/discover/c-pages/recommend"));
const MYRanking = React.lazy(() => import("@/pages/discover/c-pages/ranking"));

const MYMine = React.lazy(() => import("@/pages/mine"));
const MYFriends = React.lazy(() => import("@/pages/friends"));
const MYDownLoad = React.lazy(() => import("@/pages/download"));
const MYPlayer = React.lazy(() => import("@/pages/player/MYPlayer"));

// import MYDiscover from "@/pages/discover"
// import MYAlbum from '../pages/discover/c-pages/album'
// import MYArtist from '@/pages/discover/c-pages/artist'
// import MYSongs from '@/pages/discover/c-pages/songs'
// import MYDjradio from '@/pages/discover/c-pages/djradio'
// import MYRecommend from "@/pages/discover/c-pages/recommend"
// import MYRanking from "@/pages/discover/c-pages/ranking"

// import MYMine from "@/pages/mine"
// import MYFriends from "@/pages/friends"
// import MYDownLoad from "@/pages/download"
// import MYPlayer from "../pages/player/MYPlayer"

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