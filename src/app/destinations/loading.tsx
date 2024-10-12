import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = ({size = 6}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 max-w-5xl w-full gap-3 py-3">
        {Array.from({ length: size }).map((_, index) => ( 
            <div className="rounded-md flex flex-col gap-3 w-full min-h-[182px]" key={index}>
                <Skeleton className='sm:h-[208px] h-24 w-full'></Skeleton>
                <div className="p-1 flex flex-col gap-2">
                  <Skeleton className='h-[30px]   w-1/2'></Skeleton>
                  <Skeleton className='sm:h-[45px] h-[25px] w-full'></Skeleton>
                </div>
            </div>   
        ))}
    </div>
  )
}

export default Loading