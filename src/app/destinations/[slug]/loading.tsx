import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
    return (
        <div className="flex justify-center pt-4 px-4">
            <div className="max-w-5xl w-full">
                <div className="flex flex-col gap-2">
                    {/* Title Loading Skeleton */}
                    <div className="flex justify-between items-center pb-0 sm:pb-3">
                        <div className="w-1/2 flex gap-2 sm:gap-3 flex-col">
                            <Skeleton className='h-8 sm:h-12 rounded-md w-11/12'></Skeleton>
                            <Skeleton className='h-4 rounded-md w-full'></Skeleton>
                        </div>
                        <div className="flex gap-4 sm:gap-2 pr-1 pt-1">
                            <Skeleton className=" rounded-md size-5 sm:size-10"></Skeleton>
                            <Skeleton className=" rounded-md size-5 sm:size-10"></Skeleton>
                        </div>
                    </div>

                    {/* Main Section Skeleton */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="h-64 sm:h-96 w-full">
                            <Skeleton className='rounded-md h-full w-full'></Skeleton>
                        </div>
                        <div className="grid grid-cols-4 sm:grid-cols-2 gap-3 h-14 sm:h-full">
                            <Skeleton className='rounded-md h-full w-full'></Skeleton>
                            <Skeleton className='rounded-md h-full w-full'></Skeleton>
                            <Skeleton className='rounded-md h-full w-full'></Skeleton>
                            <Skeleton className='rounded-md h-full w-full'></Skeleton>
                        </div>
                        <div className="flex flex-col gap-1 pt-2">
                            <Skeleton className='h-9  w-full rounded-md'></Skeleton>
                            <Skeleton className='h-80 w-full rounded-md'></Skeleton>
                        </div>
                        <div className="flex flex-col gap-1 pt-2 mt-5 sm:mt-0">
                            <Skeleton className='h-9  w-1/4 rounded-md'></Skeleton>
                            <Skeleton className='h-14 sm:h-full  w-full rounded-md'></Skeleton>
                        </div>
                    </div>

                    {/* Nearby Section Skeleton */}
                    <div className="flex flex-col gap-4 pt-5">
                        <Skeleton className='w-1/3 h-10'></Skeleton>
                        <div className="grid grid-cols-3 gap-3">
                            <div className="flex flex-col gap-3">
                                <Skeleton className='h-52 rounded-md'></Skeleton>
                                <div className="p-6 flex flex-col gap-2">
                                    <Skeleton className='h-6 w-1/3'></Skeleton>
                                    <Skeleton className='h-10'></Skeleton>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Skeleton className='h-52 rounded-md'></Skeleton>
                                <div className="p- flex flex-col gap-2">
                                    <Skeleton className='h-6 w-1/3'></Skeleton>
                                    <Skeleton className='h-10'></Skeleton>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Skeleton className='h-52 rounded-md'></Skeleton>
                                <div className="p-6 flex flex-col gap-2">
                                    <Skeleton className='h-6 w-1/3'></Skeleton>
                                    <Skeleton className='h-10'></Skeleton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading