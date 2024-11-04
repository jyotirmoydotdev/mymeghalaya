'use client'

import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet'

const AcceptCookies = () => {
    return (
        <Sheet defaultOpen>
            <SheetContent side={'bottom'}>
                <SheetHeader>
                <SheetTitle className=''>
                    Accept Cookies
                </SheetTitle>
                <SheetDescription className='text-xs px-2'>
                    We use cookies to enhance your experience, personalize content, and analyze our traffic. By clicking &apos;Accept,&apos; you agree to our use of cookies. For more details, see our Privacy Policy and Cookie Policy.
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default AcceptCookies