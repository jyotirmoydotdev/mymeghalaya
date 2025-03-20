'use client'

import { raftingImage } from '@/assests/images/imagesExport'
import ResponsiveCard from '@/components/responsiveCard'
import { Calendar } from '@/components/ui/calendar'
import { Skeleton } from '@/components/ui/skeleton'
import { fetchDestinations } from '@/functions/fetchDestinations'
import { supabaseUrl } from '@/lib/supabaseUrl'
import { DestinationDataType } from '@/types/destinationDataType'
import { useInfiniteQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React, { useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaHiking } from 'react-icons/fa'
import { GiCampingTent, GiMountainClimbing } from 'react-icons/gi'
import { MdKayaking, MdScubaDiving } from 'react-icons/md'
import { PiSailboatFill } from 'react-icons/pi'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import { Button } from '@/components/ui/button'

const activities = [
  {
    name: "Hiking",
    icon: <FaHiking className='size-[1rem] sm:size-[1.5rem]' />
  },
  {
    name: "Kayaking",
    icon: <MdKayaking className='size-[1rem] sm:size-[1.5rem]' />
  },
  {
    name: "Camping",
    icon: <GiCampingTent className='size-[1rem] sm:size-[1.5rem]' />
  },
  {
    name: "Diving",
    icon: <MdScubaDiving className='size-[1rem] sm:size-[1.5rem]' />
  },
  {
    name: "Climbing",
    icon: <GiMountainClimbing className='size-[1rem] sm:size-[1.5rem]' />
  },
  {
    name: "Boating",
    icon: <PiSailboatFill className='size-[1rem] sm:size-[1.5rem]' />
  }
]

const Page = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
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
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  return (
    <div className="flex gap-3">
      <div className="pb-5 ">

        {/** Banner */}
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent>
            <CarouselItem className=' sm:basis-1/2 '>
            <div className="relative rounded-lg w-full aspect-video">
                <Image src={'/images-public/dawki.webp'} width={500} height={500} alt='' className='h-full w-full object-cover rounded-lg'></Image>
                <div className=" bottom-0 absolute p-3 sm:p-5 flex flex-col gap-2 w-full bg-gradient-to-t from-gray-700 to-transparent rounded-lg">
                  <div className="text-sm sm:text-lg font-bold text-gray-200">Dawki River</div>
                  <div className="text-xs sm:text-sm text-white">Top Destination - India&lsquo;s Cleanest River</div>
                </div>
                </div>
            </CarouselItem>
            <CarouselItem className='sm:basis-1/2 '>
              <div className="relative rounded-lg w-full aspect-video">
                <Image src={'/images-public/daribokgre.webp'} width={500} height={500} alt='' className='h-full w-full object-cover rounded-lg'></Image>
                <div className=" absolute bottom-0 p-3 sm:p-5 flex flex-col gap-2 w-full bg-gradient-to-t from-gray-700 to-transparent rounded-lg">
                  <div className="text-sm sm:text-lg font-bold text-gray-200">Daribokgre</div>
                  <div className="text-xs sm:text-sm text-white">Hidden Gems - Natural Wonders</div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="w-full flex justify-center gap-1 py-2">
            {Array.from({ length: count }).map((_, index) => (
              <div key={index} className={`h-2 rounded-full transition-all duration-300 bg-accent border ${((index + 1) === current ? "w-8" : "w-4")}`}></div>
            ))}
          </div>
        </Carousel>

        {/** Trending Destinations */}
        <div>
          <Carousel className="w-full">
            <div className=" pt-3 pb-2 sm:pb-5 flex justify-between">
              <div className="font-semibold text-base sm:text-xl">
                Trending Destinations
              </div>
              <div className="flex gap-1 relative ">
                <CarouselPrevious  className=' border-none shadow-none static translate-y-0 size-6 sm:size-8 '/>
                <CarouselNext     className=' border-none shadow-none static translate-y-0 size-6 sm:size-8 ' />
              </div>
            </div>
            { data ? data.pages.map((group, i) => (
              <CarouselContent className='pl-2 sm:pl-0' key={i}>
                {group.data.map((item: DestinationDataType, i: number) => (
                  <CarouselItem key={i} className=' basis-1/2 sm:basis-1/3 pl-2 sm:pl-4'>
                    <ResponsiveCard
                      i={i}
                      url={`/destinations/${item.slug}`}
                      created_at={item.created_at}
                      rating={item.rating}
                      imgUrl={supabaseUrl(item.images[0].image_url)}
                      name={item.name as string}
                      imgBlurDataUrl={item.images[0].image_blur_data_url}
                      des={item.tagline as string}
                      icon={<CiLocationOn />}
                      className="w-full h-full"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            )) : (<>
            <CarouselContent className='pl-2'>
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem className='basis-1/2 md:basis-1/3 lg:basis-1/4' key={index}>
                  <Skeleton key={index} className=' rounded-lg w-full aspect-square'></Skeleton>
                </CarouselItem>
              ))}
              </CarouselContent>
            </>)}
          </Carousel>
        </div>

        {/** Popular Activities */}
        <div className=" font-semibold pt-3 pb-2 sm:pb-5 text-base sm:text-xl">Popular Activities</div>
        <div className='grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 w-full '>
          {
            activities.map((item, i) => (
              <div key={i} className=' rounded-2xl w-full aspect-square flex justify-center items-center bg-accent shadow-sm border flex-col gap-1 sm:gap-2'>
                {item.icon}
                <div className=" text-xs sm:text-base font-semibold text-gray-600">{item.name}</div>
              </div>
            ))
          }
        </div>

      </div>

      <div className={`hidden sm:sticky top-0 h-[calc(100vh-3.5rem)]`}> {/* md:block */}
        {/* <div className=" font-semibold pt-1 pb-3 text-lg hover:underline hover:underline-offset-2">
          Upcoming Events
        </div> */}
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-xl shadow-sm border "
        />
        <div className="overflow-y-scroll h-[calc(100vh-24rem)] no-scrollbar ">
          <div className="flex flex-col gap-3 mt-3">
            <Image src={'/santa.webp'} width={280} height={500} alt='' className='h-auto max-w-[17.5rem] object-cover rounded-md'/>
            <Image src={'/2025.webp'} width={280} height={500} alt='' className='h-auto max-w-[17.5rem] object-cover rounded-md'/>
            <Skeleton className=" h-full aspect-video"></Skeleton>
            <Skeleton className=" h-full aspect-video"></Skeleton>
            <Skeleton className=" h-full aspect-video"></Skeleton>
            <Skeleton className=" h-full aspect-video"></Skeleton>
            <Skeleton className=" h-full aspect-video"></Skeleton>
            <Skeleton className=" h-full aspect-video"></Skeleton>
            <Skeleton className=" h-full aspect-video"></Skeleton>
            <Skeleton className=" h-full aspect-video"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page