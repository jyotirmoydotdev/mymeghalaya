'use client'

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import React, { useCallback, useState } from 'react'
import { districtsData as districtData } from '@/staticData/districtData'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import { FaAngleRight, FaSpinner } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { DestinationDataType } from '@/types/destinationDataType'
import { supabaseUrl } from '@/lib/supabaseUrl'
import { Skeleton } from '@/components/ui/skeleton'
import { useRouter, useSearchParams } from 'next/navigation'
import { CiLocationOn, CiSearch } from 'react-icons/ci'
import Form from 'next/form'
import { LucideSettings2 } from 'lucide-react'
import { useDebounceCallback } from 'usehooks-ts'
import ResponsiveCard from '@/components/responsiveCard'
import { FaMapLocationDot } from 'react-icons/fa6'
import { LiaMapMarkedAltSolid } from "react-icons/lia";

const Page = () => {
    interface datatype {
        items: DestinationDataType[],
        __typename: string
    }[]
    const searchParam = useSearchParams();
    const searchQ = searchParam.get('q') || ""
    const [SearchQuery, setSearchQuery] = useState(searchQ)
    const [isDestinations, setIsDestinations] = useState(false)
    const [isDistricts, setisDistricts] = useState(false)
    const shouldShowAll = !isDestinations && !isDistricts;

    const { data, isLoading, refetch } = useQuery<datatype[]>({
        queryKey: ['allDestinationNames'],
        queryFn: async () => {
            const res = await axios.get('/api/v1/top')
            console.log(res.data.data)
            return res.data.data
        },
        refetchInterval: false,
        refetchOnMount: false,
        staleTime: Infinity,
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    })

    const toggleFilter = (filter: string) => {
        if (filter === "destinations") {
            setIsDestinations((prev) => !prev);
        } else if (filter === "districts") {
            setisDistricts((prev) => !prev);
        }
    };
    return (
        <div className="flex flex-col pb-4 gap-1 sm:gap-5 sm:px-0">
            {
                isLoading ?
                    <div className="pl-4 sm:px-0 flex flex-col gap-1 sm:gap-5">
                        {
                            Array.from({ length: 3 }).map((_, index) => (
                                <div key={index} className='flex flex-col gap-0 sm:gap-2'>
                                    <Skeleton className="h-6 sm:h-7 w-1/3"></Skeleton>
                                    <div className="flex gap-1 py-4">
                                        {
                                            Array.from({ length: 6 }).map((_, index) => (
                                                <div className="flex flex-col gap-2" key={index}>
                                                    <Skeleton className="h-36 w-[169px] sm:h-[208px] sm:w-[255px] rounded-md sm:rounded-xl"></Skeleton>
                                                    <div className="flex gap-2">
                                                        <Skeleton className="size-4 rounded-full"></Skeleton>
                                                        <Skeleton className="h-4 rounded-md w-1/2"></Skeleton>
                                                    </div>
                                                    <Skeleton className="h-5 sm:h-10 rounded-md w-[169px] sm:w-[255px]"></Skeleton>
                                                    <Skeleton className="h-3 rounded-md w-1/3"></Skeleton>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <>
                        {/* <div>
                            <div className="px-4 sm:px-0 flex justify-between items-center">
                                <div className="text-base sm:text-xl font-semibold">
                                    Top Events
                                </div>
                                <FaAngleRight className='fill-gray-400' />
                            </div>
                            <div className="flex gap-2 sm:gap-3 overflow-x-scroll no-scrollbar py-4 pl-4 sm:pl-0">
                                {
                                    Array.from({ length: 6 }).map((_, index) => (
                                        <div className="flex flex-col gap-2" key={index}>
                                            <Skeleton className="min-h-60 min-w-[200px] sm:h-[208px] sm:w-[255px] rounded-md sm:rounded-xl relative">
                                                <div className="absolute bottom-4 left-4 flex w-full gap-3 pr-[2rem]">
                                                    <div className="min-h-10 min-w-10 aspect-square bg-white rounded-full"></div>
                                                    <div className="flex flex-col gap-2 w-full">
                                                        <div className="min-h-4 w-full bg-white rounded-full"></div>
                                                        <div className="min-h-4 w-1/2 bg-white rounded-full"></div>
                                                    </div>
                                                </div>
                                            </Skeleton>
                                        </div>
                                    ))
                                }
                            </div>
                        </div> */}
                        {
                            data?.map((items, index) => (
                                <div key={index}>
                                    <div className="px-4 sm:px-0 flex justify-between items-center">
                                        <div className="text-base sm:text-xl font-semibold">
                                            {items.__typename}
                                        </div>
                                        {/* <FaAngleRight className='fill-gray-400' /> */}
                                    </div>
                                    <div className="flex gap-1 sm:gap-3 overflow-x-scroll overflow-y-clip no-scrollbar pt-4 pb-4 pl-4 sm:pl-0 sm:pb-20 md:pb-4"> {/* grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 */}
                                        {
                                            items.items.map((destinationData, index) => (
                                                <ResponsiveCard
                                                    key={index}
                                                    name={destinationData.name}
                                                    created_at={destinationData.created_at}
                                                    rating={destinationData.rating}
                                                    imgUrl={supabaseUrl(destinationData.images[0].image_url)}
                                                    des={destinationData.tagline!}
                                                    url={`/destinations/${destinationData.slug}`}
                                                    i={index}
                                                    icon={<CiLocationOn />}
                                                    imgBlurDataUrl={destinationData.images[0].image_blur_data_url}
                                                    imgMsg={destinationData.name}
                                                    className='min-w-[155px] sm:min-w-[260px]'
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </>
            }
        </div>
    )
}

export default Page