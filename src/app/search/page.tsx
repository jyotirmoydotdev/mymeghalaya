'use client'

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import React, { useState } from 'react'
import { districtsData as districtData } from '@/staticData/districtData'
import { Query, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import { FaFilter, FaSpinner } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

interface Destination {
    name: string;
    slug: string;
    description: string;
    images: string[];
}

const Page = () => {
    const { data: allDestinationNames = [], isLoading, error } = useQuery<Destination[]>({
        queryKey: ['allDestinationNames'],
        queryFn: async () => {
            const res = await axios.get('/api/all-destination-name')
            return res.data.data
        },
        staleTime: Infinity,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        refetchInterval: false,
    })

    const [isDestinations, setIsDestinations] = useState(false)
    const [isDistricts, setisDistricts] = useState(false)
    const shouldShowAll = !isDestinations && !isDistricts;

    const toggleFilter = (filter: string) => {
        if (filter === "destinations") {
            setIsDestinations((prev) => !prev);
        } else if (filter === "districts") {
            setisDistricts((prev) => !prev);
        }
    };
    return (
        <div className="flex justify-center relative">
            <div className="max-w-5xl w-full h-[90vh] overflow-y-auto">
                <Command className=' md:min-w-[450px]'>
                    <CommandInput className='text-[16.1px]' placeholder='Search for destinations, districts...'></CommandInput>
                    <div className="flex flex-nowrap no-scrollbar px-4 py-2 gap-2">
                        <Button variant={isDestinations?'default':'outline'} className="border rounded-full" size={'sm'} onClick={() => toggleFilter("destinations")}>Destinations</Button>
                        <Button variant={isDistricts?'default':'outline'} className='border rounded-full' size={'sm'} onClick={() => toggleFilter("districts")}>Districts</Button>
                    </div>
                    <CommandList className='max-h-[80vh] px-3 no-scrollbar'>
                        <CommandEmpty>No results found.</CommandEmpty>
                        {(isDestinations || shouldShowAll) &&
                            <CommandGroup heading="Destinations">
                                {
                                    isLoading ? (
                                        <div className="flex justify-center items-center">
                                            <FaSpinner className='animate-spin' />
                                        </div>
                                    ) : (
                                        <div>
                                            {
                                                allDestinationNames.map((item, i) => (
                                                    <Link href={`/destinations/${item.slug}`} key={i}>
                                                        <CommandItem>
                                                            <div className="flex gap-3 justify-center items-center">
                                                                <Image src={item.images[0]} width={500} height={500} alt='' className='object-cover size-8 rounded-sm'></Image>
                                                                <div className="flex flex-col gap-1">
                                                                    {item.name}
                                                                    <div className="text-xs line-clamp-1">
                                                                        {item.description}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </CommandItem>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </CommandGroup>
                        }
                        {(isDistricts || shouldShowAll) &&
                            <CommandGroup heading="District">
                                {
                                    districtData.map((item, i) => (
                                        <Link href={`/meghalaya/${item.id}`} key={i}>
                                            <CommandItem>
                                                <div className="flex gap-3 justify-center items-center">
                                                    <Image src={item.img.url} width={500} height={500} alt='' className='object-cover size-8 rounded-sm'></Image>
                                                    <div className="flex flex-col gap-1">
                                                        {item.name}
                                                        <div className="text-xs line-clamp-1">
                                                            {item.about.slice(0, 60) + "..."}
                                                        </div>
                                                    </div>
                                                </div>
                                            </CommandItem>
                                        </Link>
                                    ))
                                }
                            </CommandGroup>
                        }
                    </CommandList>
                </Command>
            </div>
        </div>
    )
}

export default Page