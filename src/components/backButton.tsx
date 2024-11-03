'use client'

import React from 'react'
import { Button } from './ui/button'
import { BsChevronLeft } from "react-icons/bs";
import { useRouter } from 'next/navigation'

const BackButton = () => {
    const route = useRouter();
    return (
        <Button size={'icon'} className="size-7 " variant={'ghost'} onClick={() => route.back()}>
            <BsChevronLeft className="siz-3" />
        </Button>
    )
}

export default BackButton