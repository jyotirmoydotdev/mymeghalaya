import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center px-5 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2  max-w-5xl w-full gap-3">
                <div className="pt-5 h-[450px]">
                    <Skeleton className='h-full rounded-md'></Skeleton>
                </div>
                <div className="flex flex-col gap-5 pt-5 h-[450px]">
                    <Skeleton className='w-1/2 h-12'></Skeleton>
                    <Skeleton className='w-2/3 h-5'></Skeleton>
                    <Skeleton className='w-full h-full'></Skeleton>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 max-w-5xl w-full gap-5 mt-5">
                <Skeleton className='h-[94px]'></Skeleton>
                <Skeleton className='h-[94px]'></Skeleton>
                <Skeleton className='h-[94px]'></Skeleton>
            </div>
            <div className="flex gap-3 mt-4 max-w-5xl w-full">
                <Skeleton className='h-5 w-full'></Skeleton>
                <Skeleton className='h-5 w-full'></Skeleton>
                <Skeleton className='h-5 w-full'></Skeleton>
                <Skeleton className='h-5 w-full'></Skeleton>
                <Skeleton className='h-5 w-full'></Skeleton>
                <Skeleton className='h-5 w-full'></Skeleton>
            </div>
            <div className="mt-10 max-w-5xl w-full flex flex-col gap-3">
                <Skeleton className='h-10 w-1/4'></Skeleton>
                <Skeleton className='h-48'></Skeleton>
            </div>
            <div className="my-10 max-w-5xl w-full flex flex-col gap-3">
                <Skeleton className='h-10 w-1/4'></Skeleton>
                <div className="flex flex-col sm:flex-row gap-5">
                    <Skeleton className='h-[380px] w-full'></Skeleton>
                    <Skeleton className='h-[380px] w-full'></Skeleton>
                    <Skeleton className='h-[380px] w-full'></Skeleton>
                </div>
            </div>
        </div>
    )
}

export default Loading