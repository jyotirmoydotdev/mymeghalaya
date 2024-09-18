import Link from 'next/link'
import React, { ReactNode } from 'react'
import { DirectionAwareHover } from './ui/direction-aware-hover'
import { HiArrowLongRight } from 'react-icons/hi2'
import { CiLocationOn } from 'react-icons/ci'

const ResponsiveCard = ({ i, url, imgUrl, name, des, icon }: { i: number, url: string, imgUrl: string, name: string, des: string, icon?: ReactNode }) => {
  return (
    <Link href={url} key={i}>
      <div className="grid grid-cols-2 sm:grid-cols-1 rounded-xl border bg-card text-card-foreground shadow">
        <div className="relative flex items-center justify-start sm:justify-center h-40 sm:h-52">
          <DirectionAwareHover imageUrl={imgUrl} className='rounded-xl h-40 sm:h-52'>
            <p className="font-bold flex gap-3 items-center text-xl">Visit<HiArrowLongRight /></p>
          </DirectionAwareHover>
        </div>
        <div className="flex flex-col justify-center space-y-1.5 p-6">
          <div className="font-semibold leading-none tracking-tight flex items-center gap-2 mb-2">
            {icon}
            <div className="line-clamp-2">
              {name}
            </div>
          </div>
          <div className="text-xs line-clamp-4 sm:text-sm text-muted-foreground">{des}</div>
        </div>
      </div>
    </Link>
  )
}

export default ResponsiveCard