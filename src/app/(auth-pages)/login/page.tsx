'use client'

import { Button } from '@/components/ui/button'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, use } from 'react'
import { BiHide, BiShow } from 'react-icons/bi'
import { FaGoogle } from 'react-icons/fa'
import { supabaseUrl } from '@/lib/supabaseUrl'
import AngleImage from '@/components/angleImage'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from '@/components/submit-button'
import { handleGoogleSignin, signInAction } from '@/functions/auth'

const Page = (props: { searchParams: Promise<Message> }) => {
    const images = [
        {
            name: "Dawki River",
            location: "Dawki, East Khasi Hills",
            imgUrl: supabaseUrl("/images-public/dawki.webp"),
            imageBlurDataUrl: "data:image/webp;base64,UklGRnAIAABXRUJQVlA4WAoAAAAgAAAAXgIAXgIASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggggYAAFBqAJ0BKl8CXwI+0WiqUygloyKgCEEAGglpbuFkrlSCdLJRzhPLlH9q/jm6Bf/Vwdv9Lzp9gCe+nTp06dOnTp06dOnTp06dOju7Nm/vkfujEiX5D32xEIdAITU30zLBRtdThG57/oBnuxqsxupXQyMSLtLHh0rosJUJEbB2yqyRmguMNiYoHEMIuWV0LeeNV/BtBZuq7V02mL9Kg5qRE1+11VCmnHDBEj8S2fU/YlCsg7w16ez+ZF/FmrpIW8d/7yL2vNQgst5MqegUn40n/ZqKEvfyOcCee5vnL9R/c5d3oOMApQutRXHPTtrpIW/8JfBimVoYoCn0zUUHTBXXy2LeRQl8Fde2mFvIo/3BWncuiR8GsjshAtgrr3SQt5FCXxUyg2o9h7t5yNZcfiElJIW8hcywp4XTu5YWfv6f2X9HJONrtOeMbXdvbXRloDLEdWr28KyLsA4Wemo0cZHIqmusjd8ssKdrVg85rmfTuW+f6SyzQYkMjja690o8U7W7qGbzTWk4kfhEn8iQD9+4xyzz7wU7W4JwSwCVlDGpCQ4RZHb2t7TW0f/270IccUHa0BljrMigvp7jUSrz0V+b8x5j8UsBUB9hJSoU7WgNTQWima+nTp06dOpIG0ohNrQHmPMZYU+27EBfmolXmms6dOnTp0gFEAH/E5687jUSrzTWdOnTp06Pu+gsPOae41Eq801nTp1Wmob7WdOnTp06dOnTp06dOnTpwLV5prOnTp06dOnTp06dOnR9yrzTWdOnTp06dOnTp1Wmob7WdOnTp06dOnTp06dOnTpwLV5prOq01FV9PcaiVeaazo+nMSl6GMmnQZr6dOnTp06zNeTeBl1dmVGWVUpBLzp06dOnTo7uzSIX9O2kTOl8SflFEq801nTfygOEsofoeCuvdkPXU/wVfT3GolXni3kayzdIznmeYvJNqhaKrzmnuNRK6rsP+u21hXSSOeiVQMXqxfazp06dOpNofUAPPT9JMTDAgnnWYiLubzTWdSbNNkiZ9CjsUO/5Nd/rv5unTp06dOnTqThBatEej86KlfXzRKvNNZ1Js1F66DFrwlHkMiPwXQHa+nTp1Jq3hLUe9qUvWENvMBO59xqJV1GaeHHHUL7lQ9ikWmX7A5unTp0fTAAA/vbn755utc8L/g3kXpqo0eFEkqPBUObq02oYW78rmPEpowoRhDiJObzWyRaGfrMlDxFfvBFKBSq01rTe/xem4SGcM3EBhEl4o8FJshBU+hPB5wUiaCc722L3XUqbHmhw8CpYCux0G0dShbSSr8B4iVTqRYbnSPqs3StaJ8wXnRHhhH9D6SMqv1Afx9e5oqT9ergLmL5eVp7NqLuFaqkFMX47GlH3gO2hpyV17vV4wrtWWh8h1Tsa2vAjSHfa7vsEuHsp88HhF4KH3F6yXPwe735m1x+uE5wi1bKLBjwlOfewL1ghFiNv8hhZWWBCtYtu+peApfkhala38Fca/hK00/XKEnpT1yO/bCISPcTFf++ZG+WE8byvMm1BvhcRV16ZEAasLXbiMyGQWWjzforec/NsZID2+6ouM9zRO6ZKhZz84kDEqSpNuamhbTuudtsyk08WmgcfixTZFhh5EN80IuR1YEqYnsISzg9wsuvS7mHukecshBJ3lwMFGERCSeG52cz1p3b+Yq9PXekUw4y4Ou25CR7uRa0SZupjXcnNDGN6TYgOhYoGYXT+Q47KBWu6HYNBWo/4XNU+kxb4HwGGzQ53apzO2TwhrL2qlHpzFnbucYbqYpYcTlBpgHe2+mkpesPK2MS2pVgoC7fxUO+OGvjdmXPH8x9P1ABAFi8exkWbbGZu+bxBSbTQhmE6YXLgeNkrFmIAUjHGVF/U6y+wmvh4/DuNovgzocxXWL2VcAAZmQL6kAIAAAAAAAAA18iAAAADWyAAAAAAAAAAAN/IgAAAA1sgG6IAAADE/HPkAADQytftX8AADQGpFk3CF7D6YUxs/ZJXwt5UWEYpAACRyVC/9LqGcXvMd6opp2fC/e1iHLriAAFCPT4yE3aMAPZtbIqkMaZJ2sQALUGWzNyqShtzpmqxucw/IZLnAS/8QBahUW0GcTj7SBQiGARTAB+oAb0vyWtet+9xqONECOn+ZHqVdYAZI3Gv459aC2XWHLdp4BePIwsoTADxU70/XdFUe2qdu5BWARXPTM/T8/DekcIFOwBRkFXTI1SIxlN5Zg4YCIAAAAA=",
            slug: "",
        },
        {
            name: "Cherrapunji",
            location: "Cherrapunji, East Khasi Hills",
            imgUrl: supabaseUrl("/images-public/cherrapunji.webp"),
            imageBlurDataUrl: "data:image/webp;base64,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",
            slug: "",
        },
        {
            name: "Wei Sawdong",
            location: "Wei Sawdong, East Khasi Hills",
            imgUrl: supabaseUrl("/images-public/wei-sawdong.webp"),
            imageBlurDataUrl: "data:image/webp;base64,UklGRtwIAABXRUJQVlA4WAoAAAAgAAAAXgIAjgMASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg7gYAANCLAJ0BKl8CjwM+7Xa4VqmnJSOgCAEwHYlpbuFs7zOh0mJmcmKz6iw8EnRulpedPsAVm7Xi5OQ99snIe+2TkPfbJyJtz6aziAeRBogoRMLtQv/poszyeoLwAyyj0uF33UR7MJS7XjgQD4a5bc/rvvoujqLrRf+bTWhAFoBTCwoniHh9DnKWx09PlYyrdpvaHl/VAR1tjWZV4ffUxSaZQMpR+RED7BO7WGPiqhlL2RBVNj3CrVsW/nRN0MHQPGKgzh8f6xrJVEPgXzeFevD59xgpaGNqpn3y0AqvAaTYIxU/eeZTowTxVAoOoBWwmpcURPawTn7z3SzR8BKoCOhIitscRaVjl8LYhTKdp/OiskP2WlY/x4IxU/eeoqgFdhbxGvB+in5nO7UATGsm3K2ybbAVbXCci4jxCIzPiHWTXkFW1wp62n6G7zqgChzPHr3EJTRHNE/RERo/RHWTBQruLFEyfA8WM+CAeXnul6HWTbyqIx13z1FT955lQEdZNtgLD39/86W1KXhO9tgKskP2M+qGZBSONSr8tk21Ojl7Zmaya8eP+xxteeoojL7SALIo7BDdxQ+o8Yqt5K2X0upUD2KRcU+XN+XP3nqKexzPHrhz1FT+CMVP3LoqfuW3bYdEF3rO46ybbAVZNtfe+5oJf7ZRJ7ZPV1NqKn7z1FTKD/+YiLk5D32ye5QdNk22AqaUl7bvtcoGXi5OQ+TmhFGSG+fSKqN4uTkRA8nIe+2rZ8KalCBPTdzxcnIjve+2TkPf4gHL8NOerYuTkPfbJyHvtk5LGFuPbzs25teLk5D32ych77ZORdEzpUCyXa8XJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyP+eTkPfbJyHvtk5D32ych8B+l2vFych77ZOQ99snIe+2Yy09snIe+2TkPfbJyHvtk5H/PJyHvtk5D32ych77ZOQ+A/S7Xi5OQ99snIe+2TkPfbMZae2TkPfbJyHvtk5D32ycj/nk5D32ych77ZOQ99snIfAfpdrxcnIe+2TkPfbJyHwXaAEA99snIe+2TkPfbJyHvtk5FEi0qBZLteLk5D32ych78X3gLB4Hvtk5D32ych77ZOP/Ti0CiwwQRcnIe+2TkPfbJyHE1bde+ofUT+0CyXa8XJyHvtk5FmXfU+B58UrjvNrxcnIe+2TkPenX1ZCsqcdd/2tAsl2vFych77Y4h+0CnVgiIpRhHvJyHvtk5D32xxDKVDDPdiLk64k5D32ych77ZOTC83DKUk23beJOQ99snIe+sV7EX0zRTdU4fM4ebych77ZOQ9+Ep3/XWWmN+M4ebych77ZOQ/BLFU4n9nRTXHZiwYbXi5OQ99snOKRKMWQU/AJkz2b9PbJyHvtk6KZEQPo02yQCI8dhvFych77ezDm7vPb31I3DhDwjAHaVAsl2vvbCzIiDqCFvUe11mKAkVp7ZORN97HtEpUOTDvbIZxO66rs36hahEYSfulLfEfzReskVMz67f5CJccAAP75Xn/pPj3ov9b4CqsVhS7un6cDQaPKuu0mc0kBGx3pLeqGyRq3y8LssvHu5qwPB/A6r6mHdKw0WwwW70WlpmRiFvIiGesnFfxgxiKZwq3u5gZUos79Z8aGbKyun8fKm3Fnpp6iVQ4MYjTpa3TpWsTsEBXiJXmE1QS9ft++LdYMdVWUrVp+VVq/3A8de2d5scMAbU5GoJNIO4a0/rdO9uCz2MaHUFR4I6myXVlrlm3t4c8CF/gfGDPA6Qn44RTdjwsvG0ZCtxwnWSwChpBqvHXmN2g4vLsOlaRDvJtSASRxRo8yRZCvfA/1z4T7aFuPwvrT+fMDVhX4Cn986YkfhKAHvNnNSuMPQPLcxaUqWSHckDiDpWNDsCO2gj2IfONKbm9zRPfxeuEYm2Hw6ZRK96js/uZ63tSP/jFN8ELyiWVWkWhQND+3KdN9udqICFA7ixuNpdKsaQxktf88nqpbulXZeJumKE/F9DEtsbsX+l5VYp6dXhbTWP9S4Jr99IHzVxkrzR+t1Z8+W1BvNYJjm51sR2ZKVla0r/P+09V8/rX0Aoj87psQGn5jfX3QNx1WW1lsr+1tgC9b/fmq/ffGUuPtXbplejcqHpIXMj30DcZByFIxdlrEF6D7Pwm8AHOb+b2PJZ6AFX+cAAe4wQACyCAAAAAAAAAAAAAAAAAAAAAAAAAAAAApJcUoIADZuN0LeACIgXoAC59APbnShbACtcSwyu49Mf0ApGaIrrxhL5vru4A4WqzbdEo3gDIyVAPSrbu/fQjMDLOv2eAMv5y3QkPgZwn8xjhws1hb0IakV8F6Cy6z3onCW6ynPjtoDxLz3oAgcQ7F4QgWU5uXpYn3gF64AAAAAAA=",
            slug: "",
        },
        {
            name: "Nohkalikai Falls",
            location: "Cherrapunji, East Khasi Hills",
            imgUrl: supabaseUrl("/images-public/nohkalikai-falls.webp"),
            imageBlurDataUrl: "data:image/webp;base64,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",
            slug: "",
        }
    ]
    const searchParams = use(props.searchParams);
    const [passwordHide, setPasswordHide] = useState(true)

    return (
        <div className=" container px-4 pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                <div className="flex h-full w-full justify-center items-center">
                    {images.map((image, idx) => (
                        <div key={idx}>
                            <AngleImage
                                imageUrl={image.imgUrl}
                                imageName={image.name}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center items-center place-self-center py-4 sm:py-12 h-full max-w-[425px]">

                    <div className="pb-4 sm:pb-6 text-center w-full">
                        <div className="text-lg sm:text-3xl sm:pb-2 font-bold">Welcome Back</div>
                        <div className="text-xs sm:text-base text-gray-500">Login to your account or Sign in to continue </div>
                    </div>

                    <Button className='active:scale-90 text-black transition-transform flex sm:px-9 sm:py-6 sm:text-base sm:gap-3' onClick={(e) => handleGoogleSignin(e)}>
                        <FaGoogle />
                        <div>
                            Sign in with Google
                        </div>
                    </Button>

                    <div className="relative py-4 flex justify-center items-center w-full">
                        <span className="w-[200px] border-t border-gray-400 absolute -z-10 "></span>
                        <div className="bg-white py-3 px-2 uppercase text-xs text-gray-400 ">
                            Or continue with
                        </div>
                    </div>

                    <form method="POST" className='w-full'>
                        <div className="grid gap-2">
                            <div className="grid gap-4 pb-2">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input className="text-[16.1px]" type="email" name="email" placeholder="name@example.com" required />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <div className="relative flex items-center gap-2">
                                        <Input className="text-[16.1px]" type={passwordHide ? 'password' : 'text'} name="password" placeholder="Your password" required />
                                        <Button type="button" variant={'outline'} onClick={() => setPasswordHide(!passwordHide)}>
                                            {passwordHide ? <BiShow /> : <BiHide />}
                                        </Button>
                                    </div>
                                    <Link href={'/forgot-password'} className=" hover:underline text-xs">Forget Password ?</Link>
                                    <Link href={'/sign-up'} className=" hover:underline text-xs">Don&lsquo;t have an account ?</Link>
                                </div>
                            </div>
                            <SubmitButton pendingText="Signing In..." formAction={signInAction}>
                                Sign in with Email
                            </SubmitButton>
                            <FormMessage message={searchParams} />
                        </div>
                    </form>


                    <div className="text-center text-sm sm:text-base text-gray-500 py-2">
                        By signing in, you agree to our
                        <div className="">
                            <Link href={"/privacy"} className='px-1 underline'>
                                Privacy Policy
                            </Link>
                            and
                            <Link href={"/terms"} className='px-1 underline'>
                                Terms of Service
                            </Link>
                            .
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page