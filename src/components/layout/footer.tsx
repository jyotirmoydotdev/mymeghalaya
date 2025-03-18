'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from './logo'

import { footerData as data } from '@/staticData/layout/footerData'

const Footer = () => {
    return (
        <div className=" bg-gray-50 pb-14 sm:pb-5">
            <div className='flex justify-center px-5 pt-10'>
                <div className="grid grid-cols-1 sm:grid-cols-2 max-w-5xl w-full pb-5 sm:pb-10 border-b border-gray-300">
                    <div className=' flex flex-col justify-between pb-0 sm:pb-5'>
                        <div className="flex flex-col" >
                            <Logo />
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
                <div className="grid grid-cols-1 sm:grid-cols-2 max-w-5xl w-full pb-10 px-5 sm:px-0 gap-3">
                    <div className="text-xs sm:text-sm">@2024 My Meghalaya. All right reserved</div>
                    <a href="http://x.com/jyotirmoydotdev" target="_blank" rel="noopener noreferrer">
                        <div className="font-semibold group flex gap-1 justify-start items-center text-xs sm:text-sm sm:justify-end">
                            Made by
                            <div className='text-[#f87160] underline'>
                                Jyotirmoy
                            </div>
                            <Image className='group-hover:rotate-[360deg] group-active:rotate-[360deg]  group-hover:scale-110 transition-all size-7 rounded-full' alt='Jyotirmoy Profile Image' src={'/jyotirmoy.webp'} width={500} height={500} loading='lazy' blurDataURL={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8n+z7HwAGyAKwweeKNgAAAABJRU5ErkJggg=="} placeholder='blur'></Image>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer