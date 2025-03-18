'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Form from 'next/form'
import React, { useEffect, useRef } from 'react'
import { LucideFile, LucideFolder, LucideSettings2, SearchIcon } from 'lucide-react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from './ui/button';
import Link from 'next/link';
import { FaMagnifyingGlass, FaMapLocationDot } from 'react-icons/fa6';
import { CiLocationOn } from 'react-icons/ci';
import { MdLocationPin } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';


const SearchInput = () => {
    const pathname = usePathname();
    const isSearch = pathname.startsWith('/search')
    const router = useRouter();
    const isMobile = useIsMobile();
    const searchParams = useSearchParams();
    const checkQ = searchParams.get("q") || ''
    const [SearchQuery, setSearchQuery] = React.useState(checkQ)
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger>
                <div className={` flex gap-2 items-center justify-center h-full bg-accent px-1.5 focus-within:bg-accent focus-within:ring-1 focus-within:ring-blue-300 rounded-full ${isSearch ? "" : "sm:rounded-lg sm:py-1"} py-1.5 border`}>
                    {
                        (isSearch || isMobile) ? (
                            <>
                                <SearchIcon className={` stroke-[#363737] ${isSearch ? "" : "sm:stroke-gray-400"} bg-transparent size-5 stroke-2`} />
                            </>
                        ) : (
                            <>
                                <SearchIcon className={` stroke-[#363737] ${isSearch ? "" : "sm:stroke-gray-400"} bg-transparent size-5 stroke-2`} />
                                <input className='w-full md:w-40 lg:w-56 xl:w-64 focus-within:ring-0 focus-visible:outline-none  bg-accent' placeholder='What are you looking for?'></input>
                                <Link href={"/search"} className="pr-2 hidden md:block">
                                    <LucideFolder className='stroke-gray-400 size-5' />
                                </Link>
                            </>
                        )
                    }
                </div>
            </DialogTrigger>
            <DialogContent className='h-full sm:h-[70%] p-0 sm:rounded-3xl border-t-0' >
                <DialogHeader className='w-full'>
                    <DialogTitle className='pl-4 pt-2 pb-2 pr-2 sm:p-4 inline-flex items-center gap-2 border-b'>
                        <SearchIcon className='  size-5' />
                        <Form action={() => {
                            router.push(`/search/${encodeURI(SearchQuery)}`)
                            setIsDialogOpen(false)
                        }} className="w-full flex-1 md:w-[90%] md:flex-none">
                            <input
                                value={SearchQuery}
                                name="q"
                                onChange={event => setSearchQuery(event.target.value)}
                                className="w-full gap-2 whitespace-nowrap bg-white transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:text-black disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:text-accent-foreground  py-2 relative h-8  justify-start rounded-[0.3rem] bg-muted/50 font-normal text-muted-foreground text-[16.1px] shadow-none  "
                                placeholder='What are you looking for?'
                            >
                            </input>
                        </Form>
                        <DialogClose className='px-2 block sm:hidden text-base'>
                            Cancel
                        </DialogClose>
                    </DialogTitle>
                    <DialogDescription className='text-black'>
                    </DialogDescription>
                    <div className="pr-2">
                        {
                            SearchQuery ? (
                                <button onClick={(e) => {
                                    e.preventDefault()
                                    router.push(`/search/${encodeURI(SearchQuery)}`)
                                    setIsDialogOpen(false)
                                }}
                                    className='w-full'>
                                    <div className=" w-full p-2 pl-4 flex gap-3 items-center rounded-md hover:bg-gray-100 group">
                                        <div className="bg-gray-100 rounded-lg size-10 flex justify-center items-center group-hover:bg-gray-200">
                                            <FaMagnifyingGlass className='size-5 stroke-1' />
                                        </div>
                                        <div>Search for <span className='font-bold'> {SearchQuery} </span> </div>
                                    </div>
                                </button>
                            ) : (
                                <div className='flex flex-col pl-2'>
                                    <Link href={"/search"} onClick={() => setIsDialogOpen(false)}>
                                        <div className=" w-full p-2 flex gap-3 items-center rounded-md hover:bg-gray-100 group">
                                            <div className="bg-gray-100 rounded-lg size-10 flex justify-center items-center group-hover:bg-gray-200">
                                                <FaStar className='size-5 fill-gray-700 group-hover:fill-black' />
                                            </div>
                                            <div className='text-sm text-gray-700'>Top</div>
                                        </div>
                                    </Link>
                                    <Link href={"/search/destinations"} onClick={() => setIsDialogOpen(false)}>
                                        <div className=" w-full p-2 flex gap-3 items-center rounded-md hover:bg-gray-100 group">
                                            <div className="bg-gray-100 rounded-lg size-10 flex justify-center items-center group-hover:bg-gray-200">
                                                <MdLocationPin className='size-5 fill-gray-700 group-hover:fill-black' />
                                            </div>
                                            <div className='text-sm text-gray-700'>Destiantions</div>
                                        </div>
                                    </Link>
                                    <Link href={"/search/districts"} onClick={() => setIsDialogOpen(false)}>
                                        <div className=" w-full p-2 flex gap-3 items-center rounded-md hover:bg-gray-100 group">
                                            <div className="bg-gray-100 rounded-lg size-10 flex justify-center items-center group-hover:bg-gray-200">
                                                <FaMapLocationDot className='size-5 stroke-1 fill-gray-700 group-hover:fill-black' />
                                            </div>
                                            <div className='text-sm text-gray-700'>Districts</div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default SearchInput