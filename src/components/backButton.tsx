'use client'

import React from 'react'
import { Button } from './ui/button'
import { BsChevronLeft } from "react-icons/bs";
import { useRouter } from 'next/navigation'

const BackButton = () => {
    const route = useRouter();
    return (
        <Button size={'icon'} className="size-8 rounded-full border shadow-none" variant={'secondary'} onClick={() => route.back()}>
            <BsChevronLeft className="size-5 stroke-1" />
        </Button>
    )
}

export default BackButton