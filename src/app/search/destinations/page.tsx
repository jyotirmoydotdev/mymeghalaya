'use client'

import React, { useState } from 'react'
import axios from 'axios';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button'
import { CiLocationOn } from 'react-icons/ci'
import { LocationDataType } from '@/types/locationDataTypes'
import ResponsiveCard from '@/components/responsiveCard'

// Data and functions
import { districtsData as districts } from '@/staticData/districtData';
import { fetchDestinations } from '@/functions/fetchDestinations';
import { Skeleton } from '@/components/ui/skeleton';
import { DestinationDataType } from '@/types/destinationDataType';
import { supabaseUrl } from '@/lib/supabaseUrl';
import { FaArrowDown } from 'react-icons/fa6';

const Page = () => {
  const [districtData, setdistrictData] = useState(districts.slice(0, 6))
  const [districtDataLoading, setDistrictDataLoading] = useState(false)

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['fetchDestinations'],
    queryFn: fetchDestinations,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextPage,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  })

  const totalDestinationCount = useQuery({
    queryKey: ['totalDestinations'],
    queryFn: async () => {
      const res = await axios.get('/api/v1/total-destinations')
      return res.data
    },
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  })

  const loadDistrict = async () => {
    try {
      setDistrictDataLoading(true);
      setdistrictData((prevData) => {
        const currentLength = prevData.length;
        const newItems = districts.slice(currentLength, currentLength + 6);
        return [...prevData, ...newItems];
      });
    } catch (error) {
      console.log("Something went wrong")
    } finally {
      setDistrictDataLoading(false);
    }
  };

  return (
    <div className='px-4 sm:px-0'>
      <div className="pb-2" id='destinations'>
        <div className="flex justify-between items-center">
          <div className="rounded-lg font-sans flex gap-2 items-center pb-2 px-0 ">
            <div className={`font-semibold text-base sm:text-xl`}>Destinations</div>
            <div className="text-sm sm:text-base">
              ( {totalDestinationCount.data ? totalDestinationCount.data.count : "0"} )
            </div>
          </div>
          <FaArrowDown className='fill-gray-500'/>
        </div>
        <div className="px-0">
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl w-full gap-1 sm:gap-3 py-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div className="rounded-md flex flex-col gap-3 w-full min-h-[182px]" key={index}>
                  <Skeleton className='sm:h-[208px] h-36 w-full'></Skeleton>
                  <div className="p-1 flex flex-col gap-2">
                    <Skeleton className='h-[30px]   w-1/2'></Skeleton>
                    <Skeleton className='sm:h-[45px] h-[25px] w-full'></Skeleton>
                  </div>
                </div>
              ))}
            </div>
          ) : <>{
            data?.pages.map((group, i) => (
              <div key={i} className='py-2 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-1 sm:gap-3'>
                {group.data.map((item: DestinationDataType, i: number) => (
                  <ResponsiveCard
                    i={i}
                    key={i}
                    rating={item.rating}
                    created_at={item.created_at}
                    url={`/destinations/${item.slug}`}
                    imgUrl={supabaseUrl(item.images[0].image_url)}
                    name={item.name as string}
                    imgBlurDataUrl={item.images[0].image_blur_data_url}
                    des={item.tagline as string}
                    icon={<CiLocationOn />}
                    className='w-full h-full'
                  />
                ))}
              </div>
            ))
          }</>}
          {isFetchingNextPage ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 max-w-5xl w-full gap-3 py-3">
              {Array.from({ length: 2 }).map((_, index) => (
                <div className="rounded-md flex flex-col gap-3 w-full min-h-[182px]" key={index}>
                  <Skeleton className='sm:h-[208px] h-24 w-full'></Skeleton>
                  <div className="p-1 flex flex-col gap-2">
                    <Skeleton className='h-[30px]   w-1/2'></Skeleton>
                    <Skeleton className='sm:h-[45px] h-[25px] w-full'></Skeleton>
                  </div>
                </div>
              ))}
            </div>
          ) : <></>}
          <Button variant={'outline'} disabled className=' hidden col-span-1 sm:col-span-2 md:col-span-3'>Load More</Button>
        </div>
        <div className="py-5">
          <div className="flex w-full justify-center gap-3">
            <Button variant={'secondary'} onClick={() => fetchNextPage()} disabled={!hasNextPage}>
              Load more
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Page