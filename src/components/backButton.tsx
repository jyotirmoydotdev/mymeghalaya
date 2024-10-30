'use client'

import React from 'react'
import { Button } from './ui/button'
import { FaChevronLeft } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

const BackButton = () => {
    const route = useRouter();
    return (
        <Button size={'icon'} className="size-7 active:scale-75 transition-transform" variant={'outline'} onClick={() => route.back()}>
            <FaChevronLeft className="siz-3" />
        </Button>
    )
}

export default BackButton