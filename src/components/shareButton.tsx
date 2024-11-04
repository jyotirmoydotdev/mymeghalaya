import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import React from 'react'
import { FiShare } from 'react-icons/fi'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { IoLinkOutline, IoLogoWhatsapp } from 'react-icons/io5'
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa'
import CopyToClipboard from 'react-copy-to-clipboard'
import { toast } from './ui/use-toast'
import {
    FacebookShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookIcon,
    TwitterShareButton,
    FacebookShareCount,
    LinkedinShareButton,
} from 'react-share';


const ShareButton = ({ name, description, url }: { name: string, description: string, url: string }) => {
    return (
        <div>
            {/* Destop Share Button */}
            <div className="hidden sm:block">
                <Popover>
                    <Button variant={'ghost'} size={'icon'}>
                        <PopoverTrigger asChild >
                            <div className="p-2 active:scale-75 transition-transform">
                                <FiShare className=" size-4" />
                            </div>
                        </PopoverTrigger>
                    </Button>
                    <PopoverContent className="w-fit z-50">
                        <div className="p-3 flex flex-col gap-2 bg-white  border rounded-lg">
                            <button className='active:scale-75 inline-flex items-center  justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  hover:bg-accent hover:text-accent-foreground h-8 w-8 transition-transform'>
                                <CopyToClipboard text={url} onCopy={() => {
                                    return toast({
                                        title: "Copied to clipboard",
                                        description: "Now you can share with you friends.",
                                    })
                                }}>
                                    <IoLinkOutline className='active:scale-75 transition-transform' />
                                </CopyToClipboard>
                            </button>
                            <FacebookShareButton
                                resetButtonStyle
                                className='inline-flex items-center  justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 active:scale-75 transition-transform'
                                url={url}
                                hashtag={'MyMeghalaya is app which build for everyone.'}
                            >
                                <TiSocialFacebook className='active:scale-75 transition-transform' />
                            </FacebookShareButton>

                            <WhatsappShareButton
                                resetButtonStyle
                                className='inline-flex items-center  justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 active:scale-75 transition-transform'
                                url={url}
                                title={'MyMeghalaya is app which build for everyone.'}
                                separator={`\n`}
                            >
                                <IoLogoWhatsapp className='active:scale-75 transition-transform' />
                            </WhatsappShareButton>
                            <TwitterShareButton
                                resetButtonStyle
                                className='inline-flex items-center  justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 active:scale-75 transition-transform'
                                url={url}
                                title={'MyMeghalaya is app which build for everyone.'}
                            >
                                <FaXTwitter className='active:scale-75 transition-transform' />
                                <FacebookShareCount url={url}></FacebookShareCount>
                            </TwitterShareButton>
                            <LinkedinShareButton
                                resetButtonStyle
                                className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 active:scale-75 transition-transform'
                                url={url}
                                title={'MyMeghalaya is app which build for everyone.'}
                            >
                                <FaLinkedinIn className='active:scale-75 transition-transform' />
                            </LinkedinShareButton>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>

            {/* Mobile Share Button */}
            <div className="block sm:hidden">
                <Sheet >
                    <Button variant={'ghost'} size={'icon'}>
                        <SheetTrigger asChild>
                            <div className="p-2 active:scale-75 transition-transform">
                                <FiShare className=" size-4" />
                            </div>
                        </SheetTrigger>
                    </Button>
                    <SheetContent side={'bottom'} className='rounded-t-xl'>
                        <SheetHeader>
                            <SheetTitle className='flex gap-2 justify-center items-center pt-5'>
                                <FiShare /> Share {name}
                            </SheetTitle>
                            <SheetDescription className='line-clamp-2'>
                                {description}
                            </SheetDescription>
                        </SheetHeader>
                        <div className="flex gap-3 justify-center py-4">
                            <button className='active:scale-75 inline-flex items-center shadow-sm justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  hover:bg-accent hover:text-accent-foreground h-8 w-8 transition-transform'>
                                <CopyToClipboard text={url} onCopy={() => {
                                    return toast({
                                        title: "Copied to clipboard",
                                        description: "Now you can share with you friends.",
                                    })
                                }}>
                                    <IoLinkOutline className='active:scale-75 transition-transform' />
                                </CopyToClipboard>
                            </button>
                            <FacebookShareButton
                                resetButtonStyle
                                className='inline-flex items-center shadow-sm justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 active:scale-75 transition-transform'
                                url={url}
                                hashtag={'MyMeghalaya is app which build for everyone.'}
                            >
                                <TiSocialFacebook className='active:scale-75 transition-transform' />
                            </FacebookShareButton>

                            <WhatsappShareButton
                                resetButtonStyle
                                className='inline-flex items-center shadow-sm justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 active:scale-75 transition-transform'
                                url={url}
                                title={'MyMeghalaya is app which build for everyone.'}
                                separator={`\n`}
                            >
                                <IoLogoWhatsapp className='active:scale-75 transition-transform' />
                            </WhatsappShareButton>
                            <TwitterShareButton
                                resetButtonStyle
                                className='inline-flex items-center shadow-sm justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 active:scale-75 transition-transform'
                                url={url}
                                title={'MyMeghalaya is app which build for everyone.'}
                            >
                                <FaXTwitter className='active:scale-75 transition-transform' />
                            </TwitterShareButton>
                            <LinkedinShareButton
                                resetButtonStyle
                                className='inline-flex items-center shadow-sm justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 active:scale-75 transition-transform'
                                url={url}
                                title={'MyMeghalaya is app which build for everyone.'}
                            >
                                <FaLinkedinIn className='active:scale-75 transition-transform' />
                            </LinkedinShareButton>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div >
    )
}

export default ShareButton