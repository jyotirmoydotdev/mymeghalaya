import { Button } from '@/components/ui/button'
import { signOutAction } from '@/functions/auth'
import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { GoSignOut } from 'react-icons/go'
import { createClient } from '@/utils/supabase/server';

const page = async () => {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    return (
        <div className='h-[90vh] px-4 container max-w-xl py-3 w-full '>
            <div className="flex flex-col gap-2">
                {/* <div className="flex flex-col gap-1 pb-2">
                    <div className="text-base font-semibold pl-1">Name</div>
                    <div className="rounded-md py-2 border shadow-sm text-sm px-3 text-gray-500 flex justify-between items-center">
                        <div className="">
                            {user ? user.user_metadata.full_name : "Your Name"}
                        </div>
                        <div className=""><CiEdit /></div>
                    </div>
                    <div className='text-[10px] text-gray-500 px-1'>This is the name that will be displayed on your profile and in emails.</div>
                </div> */}
                <div className="flex flex-col gap-1 pb-2">
                    <div className="text-base font-semibold pl-1">Email</div>
                    <div className="rounded-md py-2 border shadow-sm text-sm px-3 text-gray-500 flex justify-between items-center">
                        <div className="">
                            {user?.email || "Your Email"}
                        </div>
                        <div className=""><CiEdit /></div>
                    </div>
                    <div className='text-[10px] text-gray-500 px-1'>You can manage verified email addresses in your email settings.</div>
                </div>
                <div className="flex flex-col gap-1 pb-2">
                    <div className="text-base font-semibold pl-1">Bio</div>
                    <div className="rounded-md py-2 border shadow-sm text-sm px-3 text-gray-500 flex justify-between items-center">
                        <div className="">Your bio goes here.</div>
                        <div className=""><CiEdit /></div>
                    </div>
                    <div className='text-[10px] text-gray-500 px-1'>You can @mention other users and organizations to link to them.</div>
                </div>
                <form action={signOutAction} className='flex gap-2 w-full items-start justify-start'>
                    <Button variant={'destructive'} className='flex gap-2 w-fit' disabled={user ? false : true}>
                        <GoSignOut />
                        Sign out
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default page
