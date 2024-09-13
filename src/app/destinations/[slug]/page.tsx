'use client'

import { TbExternalLink } from "react-icons/tb";
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { LocationDataType } from '@/types/locationDataTypes'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { CiLocationOn } from 'react-icons/ci'
import { CiParking1 } from "react-icons/ci";
import { PiTicketThin } from "react-icons/pi";
import { CiImageOn } from "react-icons/ci";
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Loading from './loading'
import ResponsiveCard from '@/components/ResponsiveCard'
import { IoCopyOutline } from "react-icons/io5";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { toast } from "@/components/ui/use-toast"

const Pages = () => {
  const { slug } = useParams()
  const url = usePathname()

  const [data, setData] = useState<LocationDataType>();
  const [others, setOthers] = useState<LocationDataType[]>([]);

  const fetchData = useQuery({
    queryKey: ['destination'],
    queryFn: async (): Promise<{ destination: LocationDataType, nearby: LocationDataType[] }> => {
      const response = await axios.get(`/api/destinations/${slug}`)
      setData(response.data.data.destination)
      setOthers(response.data.data.nearby)
      return response.data.data
    }
  })

  const lastUpdate = new Date(data?.lastUpdated || "");

  if (fetchData.isLoading || fetchData.isFetching) {
    return (
      <Loading />
    )
  }

  if (data === undefined) {
    return (
      <>
        <div className="flex flex-col gap-3 justify-center items-center h-[90vh] text-4xl">
          No Destination !
          <Link href="/" >
            <Button>Back to Home</Button>
          </Link>
        </div>
      </>
    )
  }

  return (
    <div className="">
      <div className="flex justify-center p-5">
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-5xl gap-3 ">
            <div className="bg-gray-100 object-cover relative">
              <Image alt='' width={500} height={500} priority className='object-cover rounded-md shadow-sm h-full w-full overflow-hidden' src={data.images ? data.images[0] : ""}></Image>
              <div className="absolute right-2 bottom-2">
                <CiImageOn size={35} className='fill-white stroke-white hover:scale-150 transition' />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-3xl font-black text-gray-500 sm:text-5xl font-sans" >{data.name}</div>
              <a target='_blank' href={data.addressGLink} className="hover:underline ">
                <div className="text-sm font-semibold flex items-center gap-2 text-gray-500"><CiLocationOn />{data.address}</div>
              </a>
              <div className="border flex flex-col p-5 gap-3 rounded-md shadow-sm text-xs sm:text-sm font-medium ">
                {data.timing?.map((item, i) => (
                  <div className="flex justify-between border-b pb-2" key={i}>
                    <div className="">{item.day}</div>
                    <div className="">{item.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 mt-5 text-xs sm:text-sm font-medium gap-5 ">
            <div className="flex flex-col p-5 shadow-sm border rounded-md">
              {
                data.ticket?.map((item, i) => (
                  <div className="flex gap-2 p-1.5 items-center" key={i}>
                    <PiTicketThin size={20} className="hover:scale-150 transition"/>
                    <div className="flex justify-between w-full">
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
                  <div className="text-xs sm:text-sm flex gap-2 items-center" key={i}>
                    <CiParking1 size={20} className="hover:scale-150 transition"/>
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
                  <div className="flex items-center justify-between" key={i}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center gap-2">
                          <CiLocationOn className=" hover:scale-150 transition"/>
                        <div key={i} className="hover:underline">{item.distance}</div>
                      </div>
                    </a>
                    <div className="flex gap-2">
                      <CopyToClipboard text={item.link} onCopy={()=>{
                        return toast({
                          title: "Copied to clipboard",
                          description: "Now you can share with you friends.",
                        })
                      }}>
                        <IoCopyOutline className="hover:scale-150 transition" />
                      </CopyToClipboard>
                      <div className="">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <TbExternalLink className="hover:scale-150 transition"/>
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="flex flex-col sm:flex-row ">
            <div className="flex flex-wrap sm:flex-row gap-3 mt-5 font-semibold grow">
              <Badge>{data.category}</Badge>
              {data.tags?.map((item, i) => (
                <Badge key={i} className=' capitalize'>
                  {item}
                </Badge>
              ))}
              <Badge variant={'destructive'}>More</Badge>
            </div>
            <div className="mt-5 text-xs font-semibold flex gap-1 items-center">
              <div className="">
                Last Updated -
              </div>
              <div className="text-gray-500">
                {lastUpdate.toDateString()}
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10 max-w-5xl ">
            <div className="text-4xl font-black text-gray-400 font-sans" >ABOUT</div>
            <div className="py-5 text-sm">
              {data.about}
            </div>
          </div>
          <div className="flex flex-col mt-5 max-w-5xl">
            <div className="text-4xl font-black text-gray-400 font-sans">NEARBY</div>
            <div className='grid grid-cols-1 sm:grid-cols-3 py-5 gap-5'>
              {
                others?.map((item, i) => (
                  <ResponsiveCard
                  key={i}
                  i={i}
                  url={`/destinations/${item.slug}`}
                  imgUrl={item.images?item.images[0]:''}
                  name={item.name as string}
                  des={item.description as string}
                  />
                ))
              }
            </div>
          </div>
          <div className="flex justify-center items-center p-10">
            <CopyToClipboard text={url} onCopy={()=>{
              return toast({
                title: "Copied to clipboard",
                description: "Now you can share with you friends.",
              })
            }}>
              <Button  variant={'default'} className="flex gap-2 ">
              <IoCopyOutline />
              <div className="">
                Copy To Clipboard
              </div>
              </Button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
      {/* <iframe src={data.embedMapLink} className='w-full' height="450" loading="lazy" ></iframe> */}
    </div>
  )
}

export default Pages