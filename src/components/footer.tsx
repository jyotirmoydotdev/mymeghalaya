'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Baloo_2 } from "next/font/google";
import { appconfig } from '@/appconfig';
import { cn } from '@/src/lib/utils';
import { ThemeSwitcher } from './theme-switcher';


const baloo = Baloo_2({
    weight: '800',
    display: 'swap',
})

export const data: {
    header: string,
    links: {
        label: string,
        link: string
    }[]
}[] = [
        {
            header: "Others",
            links: [
                {
                    label: "Support",
                    link: "/support"
                },
                {
                    label: "Log in",
                    link: "/login"
                }
            ]
        }, {
            header: "Links",
            links: [
                {
                    label: "Destinations",
                    link: "/destinations",
                }, {
                    label: "Search",
                    link: "/search"
                }
            ]
        }, {
            header: "Legal",
            links: [
                {
                    label: "Privacy policy",
                    link: "/privacy",
                }, {
                    label: "Terms of service",
                    link: "/terms"
                }
            ]
        }
    ]


const Footer = () => {
    return (
        <div className="  pb-14 sm:pb-5 w-full">
            <div className='flex justify-center px-5 pt-10'>
                <div className="grid grid-cols-1 sm:grid-cols-2 max-w-5xl w-full pb-5 sm:pb-10 border-b">
                    <div className=' flex flex-col justify-between pb-0 sm:pb-5'>
                        <div className="flex flex-col" >
                            <div className="flex gap-2 items-center font-semibold">
                                <Image src={"/logo.svg"} width={200} height={250} className="w-10 h-full" alt="My Meghalaya logo" />
                                <Link href={"/"} className="flex">
                                    <span className={cn(baloo.className, " text-base pr-1")}>
                                        {appconfig.app}
                                    </span>
                                    <span className="font-light text-xs self-start">
                                        IN
                                    </span>
                                </Link>
                            </div>
                            <div className="sm:py-3 pb-3 text-xs sm:text-sm text-gray-500 ">
                                Enjoy your time in Meghalaya
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 justify-start sm:justify-end text-xs">
                        {
                            data.map((group, i) => (
                                <div key={i}>
                                    <div className="py-5 text-sm font-bold" >{group.header}</div>
                                    <div className="flex flex-col gap-5 text-gray-600">
                                        {
                                            group.links.map((item, i) => (
                                                <Link href={item.link} key={i}>
                                                    {item.label}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-5 text-sm text-gray-500">
                <div className="flex justify-between max-w-5xl w-full pb-10 px-5 sm:px-0 gap-3">
                    <div className="text-xs sm:text-sm">@2025 MyMeghalaya. All right reserved</div>
                    <div className="">
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer