import { CiSearch } from "react-icons/ci"

export const NavBarDesktopData = {
    links:[
        {
         name:"Home",
         link: "/"
        },
        {
            name: "Destinations",
            link:"/destinations"
        }
    ],
    search:{
      icon: <CiSearch/>  ,
      link: "/search"
    }
}