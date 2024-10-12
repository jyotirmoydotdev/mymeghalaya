import React, { ReactNode } from "react"
import { FaRegCopyright } from 'react-icons/fa';
import { GiPartyFlags } from 'react-icons/gi'
import { LiaHikingSolid } from "react-icons/lia";
import { PiBowlFoodThin } from "react-icons/pi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { MdOutlineHotel } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";;
import { PiBinoculars } from "react-icons/pi";
import { CiLocationOn, CiRoute } from "react-icons/ci";
import { GoHome } from 'react-icons/go';

export interface sectionType {
    icon: ReactNode,
    name: string,
    url: string,
}

export const firstSection: sectionType[] = [
    {
        icon: <GoHome/>,
        name: "Home",
        url: "/",
    },
    {
        icon: <CiRoute/>,
        name: "Itinerarys",
        url: "/itinerarys",
    },
    {
        icon: <CiLocationOn/>,
        name: "Destinations",
        url: "/destinations",
    },
    {
        icon: <LiaHikingSolid/>,
        name: "Adventures",
        url: "/adventures",
    },
    {
        icon: <GiPartyFlags/>,
        name: "Festivals",
        url: "/festivals",
    },
    {
        icon: <PiBowlFoodThin/>,
        name: "Foods",
        url: "/foods",
    },
]

export const secondSection: sectionType[] = [
    {
        icon: <LiaShoppingBagSolid/>,
        name: "Buy Products",
        url: "/buy-products",
    },
    {
        icon: <TbTruckDelivery/>,
        name: "Order Foods",
        url: "/order-foods",
    },
    {
        icon: <MdOutlineHotel/>,
        name: "Book Hotels",
        url: "/book-hotels",
    },
    {
        icon: <PiBinoculars/>,
        name: "Reserve Tours",
        url: "/reserve-tours",
    },
]