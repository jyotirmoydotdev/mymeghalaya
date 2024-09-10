import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl w-full gap-3 py-3">
        <div className="rounded-md flex flex-col gap-3 w-full min-h-[328px]">
            <Skeleton className='h-[208px] w-full'></Skeleton>
            <Skeleton className='h-[30px] w-1/2'></Skeleton>
            <Skeleton className='h-[45px] w-full'></Skeleton>
        </div>
        <div className="rounded-md flex flex-col gap-3 w-full min-h-[328px]">
            <Skeleton className='h-[208px] w-full'></Skeleton>
            <Skeleton className='h-[30px] w-1/2'></Skeleton>
            <Skeleton className='h-[45px] w-full'></Skeleton>
        </div>
        <div className="rounded-md flex flex-col gap-3 w-full min-h-[328px]">
            <Skeleton className='h-[208px] w-full'></Skeleton>
            <Skeleton className='h-[30px] w-1/2'></Skeleton>
            <Skeleton className='h-[45px] w-full'></Skeleton>
        </div>
        <div className="rounded-md flex flex-col gap-3 w-full min-h-[328px]">
            <Skeleton className='h-[208px] w-full'></Skeleton>
            <Skeleton className='h-[30px] w-1/2'></Skeleton>
            <Skeleton className='h-[45px] w-full'></Skeleton>
        </div>
        <div className="rounded-md flex flex-col gap-3 w-full min-h-[328px]">
            <Skeleton className='h-[208px] w-full'></Skeleton>
            <Skeleton className='h-[30px] w-1/2'></Skeleton>
            <Skeleton className='h-[45px] w-full'></Skeleton>
        </div>
        <div className="rounded-md flex flex-col gap-3 w-full min-h-[328px]">
            <Skeleton className='h-[208px] w-full'></Skeleton>
            <Skeleton className='h-[30px] w-1/2'></Skeleton>
            <Skeleton className='h-[45px] w-full'></Skeleton>
        </div>
    </div>
  )
}

export default Loading