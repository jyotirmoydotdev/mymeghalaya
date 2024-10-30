import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import React from 'react'
import { FiShare } from 'react-icons/fi'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { IoLinkOutline, IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io5'
import { FaXTwitter } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa'

const ShareButton = ({ name, url }: { name: string, url: string }) => {
    return (
        <div>
            {/* Destop Share Button */}
            <div className="hidden sm:block">
                <Popover>
                    <Button disabled variant={'ghost'} size={'icon'}>
                    <PopoverTrigger asChild >
                        <div className="p-2 active:scale-75 transition-transform">
                            <FiShare className=" size-4" />
                        </div>
                    </PopoverTrigger>
                    </Button>
                    <PopoverContent className="w-fit z-50">
                        <div className="p-3 flex flex-col gap-2 bg-white shadow-sm border rounded-lg">
                            <Button variant={'ghost'} className="flex justify-between"> <IoLinkOutline/> </Button>
                            <Button variant={'ghost'} className="flex justify-between"> <IoLogoWhatsapp/> </Button>
                            <Button variant={'ghost'} className="flex justify-between"> <IoLogoInstagram/></Button>
                            <Button variant={'ghost'} className="flex justify-between"> <FaXTwitter/></Button>
                            <Button variant={'ghost'} className="flex justify-between"> <FaLinkedinIn/></Button>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>

            {/* Mobile Share Button */}
            <div className="block sm:hidden">
                <Sheet >
                    <Button disabled variant={'ghost'} size={'icon'}>
                    <SheetTrigger asChild>
                        <div className="p-2 active:scale-75 transition-transform">
                            <FiShare className=" size-4"/>
                        </div>
                    </SheetTrigger>
                    </Button>
                    <SheetContent side={'bottom'} className='rounded-t-xl'>
                        <SheetHeader>
                            <SheetTitle className='flex gap-2 justify-center items-center pt-5'>
                                <FiShare/> Share {name}
                            </SheetTitle>
                            <SheetDescription>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, repellat!
                            </SheetDescription>
                        </SheetHeader>
                        <div className="flex gap-3 justify-center py-4">
                            <Button className='active:scale-75 transition-transform' variant={'outline'} size={'icon'}><IoLinkOutline className='active:scale-75 transition-transform'/></Button>
                            <Button className='active:scale-75 transition-transform' variant={'outline'} size={'icon'}><IoLogoWhatsapp className='active:scale-75 transition-transform'/></Button>
                            <Button className='active:scale-75 transition-transform' variant={'outline'} size={'icon'}><IoLogoInstagram className='active:scale-75 transition-transform'/></Button>
                            <Button className='active:scale-75 transition-transform' variant={'outline'} size={'icon'}><FaXTwitter className='active:scale-75 transition-transform'/></Button>
                            <Button className='active:scale-75 transition-transform' variant={'outline'} size={'icon'}><FaLinkedinIn className='active:scale-75 transition-transform'/></Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

export default ShareButton