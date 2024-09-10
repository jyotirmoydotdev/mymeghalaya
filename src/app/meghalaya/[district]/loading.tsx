import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center px-5'>
        <div className="w-full max-w-5xl py-5 ">
            <Skeleton className='h-[60px] w-1/2'/>
            <Skeleton className='h-[24px] w-1/3 mt-2'/>
        </div>
        <div className="border w-full max-w-5xl"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 py-0 sm:py-10 gap-10 w-full max-w-5xl">
            <div className="h-[516px] w-full flex flex-col gap-3 order-2 sm:order-1">
                <Skeleton className='w-10/12 h-7'/>
                <Skeleton className='w-11/12 h-7'/>
                <Skeleton className='w-12/12 h-7'/>
                <Skeleton className='w-9/12 h-7'/>
                <Skeleton className='w-11/12 h-7'/>
                <Skeleton className='w-4/5 h-7'/>
                <Skeleton className='w-full h-7'/>
                <Skeleton className='w-3/4 h-7'/>
                <Skeleton className='w-11/12 h-7'/>
                <Skeleton className='w-5/6 h-7'/>
                <Skeleton className='w-3/4 h-7'/>
                <Skeleton className='w-full h-7'/>
                <Skeleton className='w-3/4 h-7'/>
            </div>
            <Skeleton className='h-[516px] w-full order-1 sm:order-2'/>
        </div>
        <div className="w-full max-w-5xl py-5 border-b">
            <Skeleton className='h-[36px] mb-5 w-1/2'/>
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