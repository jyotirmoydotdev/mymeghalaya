'use client'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { LucideSettings2 } from 'lucide-react'
import Form from 'next/form'
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { IoIosTrendingUp } from "react-icons/io";
import { BiSolidHotel } from 'react-icons/bi'
import { CiLocationOn, CiSearch } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'
import { FaArrowRight, FaLocationDot, FaMapLocationDot } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import { PiBowlFoodFill } from 'react-icons/pi'

const SearchBar = ({
    children,
}: Readonly<{
    children?: React.ReactNode;
}>) => {
    const dataArr = ["All", "Shillong", "Tura", "Wedding", "River", "Picnic", "Festivals", "Hidden", "Garo"]
    const searchParam = useSearchParams()
    const path = usePathname()

    const pathname = path.split('/')

    const [SearchQuery, setSearchQuery] = useState(decodeURI(pathname[2] || ""))
    const [debounceValue, setDebounceValue] = useState(SearchQuery);

    const router = useRouter();
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(SearchQuery);
        }, 600);

        return () => clearTimeout(handler);
    }, [SearchQuery]);

    useEffect(() => {
        if (debounceValue.trim() || (pathname[2] !== undefined)) {
            router.push(`/search/${debounceValue.toLowerCase()}`);
        } else {
            router.push(`/search`); // Navigate back to `/search` when the query is empty
        }
    }, [debounceValue, router,pathname]);
    
    return (
        <div className={`static sm:sticky top-0 pt-2 md:pt-0 pb-2 z-10 bg-white grid grid-cols-1 sm:grid-cols-2 gap-2 items-center`}>
            <div className="flex w-full px-4 sm:px-0">
                <form className="w-full sm:max-w-[42rem]" onSubmit={(e) => {
                    e.preventDefault()
                }}>
                    <div className="inline-flex rounded-xl bg-accent w-full focus-visible:outline-blue-400 focus-visible:outline border items-center">
                        <div className="pl-3 my-[10px]">
                            <CiSearch className='size-5 stroke-1' />
                        </div>
                        <div className="pl-3 pr-5 w-full">
                            <input
                                name='q'
                                value={SearchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className='w-full h-full outline-none bg-accent'
                                placeholder='What are you looking for?'
                            />
                        </div>
                        <Button className='' variant={'link'} size={'default'}>
                            <LucideSettings2 />
                        </Button>
                    </div>
                </form>
            </div>
            <div className="relative flex">
                <div className="flex gap-1 sm:gap-2 overflow-x-scroll no-scrollbar items-center pl-4 sm:pl-0">
                    <Button size={'sm'} className='border rounded-lg' variant={'secondary'}><IoIosTrendingUp /></Button>
                    {
                        dataArr.map((item, i) => (
                            <Button 
                            onClick={(e) => {
                                e.preventDefault();
                                setSearchQuery(item);
                                router.push(`/search/${item.toLowerCase()}`);
                            }}
                            variant={'secondary'} className='font-semibold border rounded-lg' size={'sm'} key={i}>{item}</Button>
                        ))
                    }
                </div>
                <div className=" absolute w-16 pr-4 sm:pr-0 h-full bg-gradient-to-r from-transparent via-white to-white right-0 flex items-center flex-row-reverse z-10">
                    <FaAngleRight className='fill-gray-400' />
                </div>
            </div>
        </div>
    )
}

export default SearchBar