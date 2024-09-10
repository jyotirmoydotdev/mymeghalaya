'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'
import { DirectionAwareHover1 } from '@/components/ui/direction-aware-hover1'
import { Skeleton } from '@/components/ui/skeleton'
import { LocationData } from '@/types/locationTypes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { HiArrowLongRight } from 'react-icons/hi2'

const page = () => {
  const [destinationList, setDestinationList] = useState<LocationData[]>([]);
  const destinations = useQuery({
    queryKey: ['data'],
    queryFn: async (): Promise<LocationData[]> => {
      const response = await axios.get('/api/destination', {
        params: {
          search: "",
          location: "south west khasi hills",
          category: "all",
        }
      })
      setDestinationList(response.data.destination);
      return response.data.destination
    },
  })
  return (
    <div>
      <Navbar />
      <div className="px-5">
        <div className="flex justify-center py-5 sm:p-5 sm:pb-0 " >
          <div className="max-w-5xl w-full border-b pb-5">
            <div className="text-3xl font-semibold sm:text-6xl uppercase text-gray-500 ">
              South West Khasi Hills
            </div>
            <div className="font-medium text-sm capitalize pt-2 text-gray-400">
              District of meghalaya
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-5 sm:p-10">
          <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 w-full gap-10">
            <div className="text-sm flex flex-col gap-3 order-2 sm:order-1">
              <p>
              Southwest Khasi Hills, carved out of the West Khasi Hills district on August 3, 2012, is a relatively new administrative district in Meghalaya. Its headquarters is located at Mawkyrwat, and the district spans an area of 1,341 square kilometers. The district comprises villages from two Community & Rural Development Blocks—Ranikor and Mawkyrwat—as well as 18 additional villages from the Nongstoin block. The region's strategic boundaries include West Khasi Hills to the north and west, East Khasi Hills to the east, and the international border with Bangladesh to the south.
              </p>
              <p>
              Historically, the district has deep cultural roots tied to the Khasi people, one of the earliest ethnic groups in the Indian subcontinent, belonging to the Proto-Austroloid Mon-Khmer race. The Khasi society, with its matrilineal system, continues to follow traditional customs while adapting to modern influences. The Khasis are divided into various subgroups, including the War-Khasis, who inhabit the southern part of the district, and the Lyngngams in the northwest. Traditional attire, such as the "Jymphong" for men and elaborate female dress, is still worn during ceremonial occasions, preserving the region's cultural identity.
              </p>
              <p>
              The social structure of the Khasis is unique, with descent traced through the mother, but the father playing a crucial role in the family's material and mental well-being. Inheritance follows the matrilineal system, with the youngest daughter, or "Ka Khadduh," inheriting ancestral property. While many Khasis have adopted Christianity, traditional religious beliefs in a Supreme Creator and nature deities still hold significance in certain communities. The cultural richness of the region is reflected in its customs, festivals, and social practices, which continue to shape the identity of the district.
              </p>
            </div>
            <DirectionAwareHover imageUrl={"/chimite.webp"} className=' h-[516px] rounded-md order-1 sm:order-2'>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl">Chimite Lake</p>
                <p className="font-normal text-sm">Mahendraganj, South West Garo Hills</p>
              </div>
            </DirectionAwareHover>
          </div>
        </div>
        <div className="flex justify-center py-5  " >
          <div className="max-w-5xl w-full border-b pb-5">
            <div className="text-xl font-thin sm:text-3xl uppercase text-gray-500 ">
              Destinations to visit
            </div>
          </div>
        </div>
      </div>
      {
        (destinations.isLoading || destinations.isRefetching || destinations.isPending || destinations.isFetching) ?
          <div className="flex justify-center px-5">
            <div className="py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-5xl">
              <div className="flex flex-col gap-3">
                <Skeleton className='w-full h-60'></Skeleton>
                <Skeleton className='w-1/2 h-9'></Skeleton>
                <Skeleton className=' h-9'></Skeleton>
                <div className="flex justify-between">
                  <Skeleton className='w-1/3 h-9'></Skeleton>
                  <Skeleton className='w-1/3 h-9'></Skeleton>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Skeleton className='w-full h-60'></Skeleton>
                <Skeleton className='w-1/2 h-9'></Skeleton>
                <Skeleton className=' h-9'></Skeleton>
                <div className="flex justify-between">
                  <Skeleton className='w-1/3 h-9'></Skeleton>
                  <Skeleton className='w-1/3 h-9'></Skeleton>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Skeleton className='w-full h-60'></Skeleton>
                <Skeleton className='w-1/2 h-9'></Skeleton>
                <Skeleton className=' h-9'></Skeleton>
                <div className="flex justify-between">
                  <Skeleton className='w-1/3 h-9'></Skeleton>
                  <Skeleton className='w-1/3 h-9'></Skeleton>
                </div>
              </div>
              <Skeleton className='w-full h-10 col-span-3'></Skeleton>
            </div>
          </div>
          :
          <div className="flex justify-center px-5 pb-5">
            <div className="py-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-5xl">
              {destinationList.length > 0 ? destinationList.map((item: LocationData, i: number) => (
                <Link href={`/destinations/${item.id}`} key={i}>
                  <Card className='overflow-hidden h-full' >
                    <div className="relative flex items-center justify-center">
                      <DirectionAwareHover1 imageUrl={item.images ? item.images[0] : ""}>
                        <p className="flex gap-3 items-center text-xl">Visit<HiArrowLongRight /></p>
                      </DirectionAwareHover1>
                    </div>
                    <CardHeader>
                      <CardTitle className='flex items-center gap-2 mb-2'><CiLocationOn />{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              )) : (
                <div className="h-[80vh] col-span-3  flex justify-center items-center text-4xl">
                  No Destination !!
                </div>
              )}
              <Button variant={'outline'} disabled className=' hidden col-span-1 sm:col-span-2 md:col-span-3'>Load More</Button>
            </div>
          </div>
      }
      <Footer />
    </div>
  )
}

export default page