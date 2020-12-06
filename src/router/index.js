import MYDiscover from "@/pages/discover"
import MYMine from "@/pages/mine"
import MYFriends from "@/pages/friends"
import MYDownLoad from "@/pages/download"

const routes = [
  {
    path:'/',
    exact:true,
    component:MYDiscover
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