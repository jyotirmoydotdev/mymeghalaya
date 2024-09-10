'use client'

import Footer from '@/components/Footer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { DirectionAwareHover1 } from '@/components/ui/direction-aware-hover1'
import { locationData } from '@/data/locationData'
import { LocationData } from '@/types/locationTypes'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { FaOtter, FaShare } from 'react-icons/fa6'
import { HiArrowLongRight } from 'react-icons/hi2'
import { CiParking1 } from "react-icons/ci";
import { PiTicketThin } from "react-icons/pi";
import { CiImageOn } from "react-icons/ci";

const Pages = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<LocationData>();
  const [others, setOthers] = useState<LocationData[]>()
  function fetch() {
    try {
      setLoading(true);
      const idNumber = Number(id);
      const fetchedData = locationData[idNumber];
      setData(fetchedData);
      if (fetchedData && fetchedData.others) {
        const othersArray: LocationData[] = [];
        for (let i = 0; i < 3; i++) {
          const temp = locationData[fetchedData.others[i]];
          if (temp) {
            othersArray.push(temp);
          }
        }
        setOthers(othersArray);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetch()
  }, [])
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh] text-4xl">
        Loading...
      </div>
    )
  } else if (data === undefined) {
    return (
      <>
        <div className="flex flex-col gap-3 justify-center items-center h-[90vh] text-4xl">
          No Destination !
          <Link href="/" >
            <Button>Back to Home</Button>
          </Link>
        </div>
        <Footer />
      </>
    )
  }
  return (
    <div className="">
      <div className="flex justify-center px-5 sm:p-5">
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-5xl gap-3 ">
            <div className="bg-gray-100 object-cover relative">
              <Image alt='' width={500} height={500} priority className='object-cover rounded-md shadow-sm h-full w-full overflow-hidden' src={data.images ? data.images[0] : ""}></Image>
              <div className="absolute right-2 bottom-2">
                <CiImageOn size={35} className='fill-white stroke-white'/>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-5xl font-sans" >{data.name}</div>
              <a target='_blank' href={data.addressGLink} className="hover:underline ">
                <div className="text-sm font-semibold flex items-center gap-2 text-gray-500"><CiLocationOn />{data.address}</div>
              </a>
              <div className="border flex flex-col p-5 gap-3 rounded-md shadow-sm text-sm font-medium ">
                {data.timing?.map((item, i) => (
                  <div className="flex justify-between border-b pb-2" key={i}>
                    <div className="">{item.day}</div>
                    <div className="">{item.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 mt-5 text-sm font-medium gap-5 ">
            <div className="flex flex-col gap-3 p-5 shadow-sm border rounded-md">
              {
                data.ticket?.map((item, i) => (
                  <div className="flex gap-2 items-center" key={i}>
                    <PiTicketThin size={20}/>
                    <div key={i} className="flex justify-between w-full">
                      <div className="">{item.type}</div>
                      <div className="">{item.price}</div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="flex flex-col p-5 shadow-sm rounded-md gap-3 border">
              {
                data.parking?.map((item, i) => (
                  <div className="flex gap-2 items-center" key={i}>
                    <CiParking1 size={20}/>
                    <div key={i} className="flex justify-between w-full">
                      <div className="">{item.type}</div>
                      <div className="">{item.price}</div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="flex flex-col gap-3 p-5 shadow-sm rounded-md border">
              {
                data.distance?.map((item, i) => (
                  <a href={item.link} target='_blank' className='flex gap-2 items-center' key={i}>
                    <CiLocationOn/>
                    <div key={i} className="hover:underline">{item.distance}</div>
                  </a>
                ))
              }
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-row gap-3 mt-5 font-semibold">
            <Badge>{data.category}</Badge>
            {data.tags?.map((item, i) => (
              <Badge key={i} className=' capitalize'>{item}</Badge>
            ))}
            <Badge variant={'destructive'}>More</Badge>
          </div>
          <div className="flex flex-col mt-10 max-w-5xl gap-3">
            <div className="text-4xl font-semibold text-gray-400 font-sans" >ABOUT</div>
            <div className="py-5">
              {data.about}
            </div>
          </div>
          <div className="flex flex-col mt-10 max-w-5xl gap-3 ">
            <div className="text-4xl font-semibold text-gray-400 font-sans">NEARBY</div>
            <div className='grid grid-cols-1 sm:grid-cols-3 py-5 gap-5'>
              {
                others?.map((item, i) => (
                  <Link href={`/destinations/${item.id}`} key={i}>
                    <Card className='overflow-hidden' key={i}>
                      <div className="relative flex items-center justify-center">
                        <DirectionAwareHover1 imageUrl={item.images ? item.images[0] : ""}>
                          <p className="font-bold flex gap-3 items-center text-xl">Visit<HiArrowLongRight /></p>
                        </DirectionAwareHover1>
                      </div>
                      <CardHeader>
                        <CardTitle className='flex items-center gap-2 mb-2'><CiLocationOn />{item.name}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <div className="flex justify-between w-full">
                          <Button className='text-xs' variant={'outline'}>{item.category}</Button>
                          <Button className='text-xs' variant={'outline'}>{item.location}</Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                ))
              }
            </div>
          </div>
          <div className="flex justify-center items-center p-10">
            <Button className='flex gap-2'>
              <FaShare />
              Share
            </Button>
          </div>
        </div>
      </div>
      <iframe src={data.embedMapLink} className='w-full' height="450" loading="lazy" ></iframe>
      <Footer />
    </div>
  )
}

export default Pages