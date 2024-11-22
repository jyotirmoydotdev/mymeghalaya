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
import { supabaseFetch } from '@/libs/supabaseFetch';

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
      const res = await axios.get('/api/total-destinations')
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
    <div>
      <div className="pb-2 sm:container sm:max-w-6xl w-full" id='destinations'>
        <div className="rounded-lg font-sans flex gap-2 items-center pt-3 py-2 px-3 ">
          <div className={`font-semibold text-base sm:text-3xl`}>Destinations</div>
          <div className="text-sm sm:text-base">
            ( {totalDestinationCount.data ? totalDestinationCount.data.count : "0"} )
          </div>
        </div>
        <div className="px-3">
          {isLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 max-w-5xl w-full gap-3 py-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div className="rounded-md flex flex-col gap-3 w-full min-h-[182px]" key={index}>
                  <Skeleton className='sm:h-[208px] h-24 w-full'></Skeleton>
                  <div className="p-1 flex flex-col gap-2">
                    <Skeleton className='h-[30px]   w-1/2'></Skeleton>
                    <Skeleton className='sm:h-[45px] h-[25px] w-full'></Skeleton>
                  </div>
                </div>
              ))}
            </div>
          ) : <>{
            data?.pages.map((group, i) => (
              <div key={i} className='py-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                {group.data.map((item: DestinationDataType, i: number) => (
                  <ResponsiveCard
                    i={i}
                    key={i}
                    url={`/destinations/${item.slug}`}
                    imgUrl={supabaseFetch(item.images[0].imageUrl)}
                    name={item.name as string}
                    imgBlurDataUrl={item.images[0].imageBlurDataUrl}
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
      <div className="sm:container sm:max-w-6xl w-full" id='districts'>
        <div className="p-3 flex flex-col gap-2 h-full">
          <div className="flex gap-1 pt-4 pb-2 items-center">
            <div className="font-semibold text-base sm:text-3xl"> Districts</div>
            <div className="text-sm sm:text-base">( 12 )</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 overflow-x-auto no-scrollbar gap-2 justify-items-center">
            {
              districtData.map((item, i) => (
                <ResponsiveCard
                  i={i}
                  key={i}
                  url={`/meghalaya/${item.id}`}
                  imgUrl={item.img.url}
                  imgBlurDataUrl={item.img.blurDataUrl}
                  name={item.name}
                  des={item.about.slice(0, 60) + "..."}
                  icon={<CiLocationOn />}
                  className='w-full'
                />
              ))
            }
          </div>
          {districtDataLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 py-3">
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
          <div className=" text-center py-4">
            <Button disabled={districtData.length < 12 ? false : true} variant={'secondary'} onClick={loadDistrict}>Load more</Button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Page