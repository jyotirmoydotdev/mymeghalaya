import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className='flex justify-center px-5 pt-10 pb-0'>
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-5xl w-full pb-10 border-b border-gray-700">
          <div className=' flex flex-col justify-between'>
            <div className="text-3xl" >
              <div className="flex">
                <div className="text-xs">
                  MY
                </div>
                MEGHALAYA
              </div>
              <div className="py-3 text-sm text-gray-500 ">
                Enjoy your time in Meghalaya
              </div>
            </div>
            <div className="flex gap-3">
              <Input type='email' className='w-2/3 border-gray-500 text-[16.1px]' disabled placeholder='YourEmail@email.com'></Input>
              <Button variant={'destructive'} disabled className=''>Subscibe</Button>
            </div>
          </div>
          <div className="flex gap-10 justify-start sm:justify-end">
            {/* <div>
                        <div className="py-5 text-xl font-bold" >Sections</div>
                        <div className="flex flex-col gap-5 text-sm text-gray-400">
                            <div className="">About</div>
                            <div className="">Destination</div>
                            <div className="">Festival</div>
                        </div>
                    </div>
                    <div>
                        <div className="py-5 text-xl font-bold" >Sections</div>
                        <div className="flex flex-col gap-5 text-sm text-gray-400">
                            <div className="">About</div>
                            <div className="">Destination</div>
                            <div className="">Festival</div>
                        </div>
                    </div> */}
            <div>
              <div className="py-5 text-xl font-bold" >Link</div>
              <div className="flex flex-col gap-5 text-sm text-gray-400">
                <Link href={"/destinations"} className='hover:underline'>
                  Destinations
                </Link>
                <Link href={"/"}>About</Link>
                <Link href={"/"}>Mission</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-5 text-sm text-gray-500">
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-5xl w-full pb-10 px-5 sm:px-0 gap-3">
          <div className="">@2024 My Meghalaya. All right reserved</div>
          <div className="flex gap-5 justify-start sm:justify-end">
            <Link href={"/privacy"} className='hover:underline'>
              Privacy Policy
            </Link>
            <Link href={"/terms"} className='hover:underline'>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
