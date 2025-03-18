import { CiSearch } from "react-icons/ci"

export const NavBarDesktopData = {
    links:[
        {
         name:"Home",
         link: "/home"
        },
        {
            name: "Destinations",
            link:"/search/destinations"
        },
        {
            name: "Districts",
            link:"/search/districts"
        }
    ],
    search:{
      icon: <CiSearch/>  ,
      link: "/search"
    }
}