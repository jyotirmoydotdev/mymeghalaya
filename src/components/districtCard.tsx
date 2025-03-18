import { cn } from '@/lib/utils'
import React, { lazy, ReactNode, useRef, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import Image from 'next/image';
import { useMediaQuery } from 'usehooks-ts';
import { GoArrowRight } from 'react-icons/go';
import Link from 'next/link';

const DistrictCard = (
    {
        icon,
        name,
        description,
        url,
        imageUrl,
        imageTitle,
        imageBlurData,
        className
    }: {
        icon: ReactNode,
        name: string,
        description: string,
        url: string,
        imageUrl: string,
        imageTitle: string,
        imageBlurData: string,
        className: string
    }) => {

    const isDesktop = useMediaQuery("(min-width: 425px)")

    const ref = useRef<HTMLDivElement>(null);
    const [direction, setDirection] = useState< "top" | "bottom" | "left" | "right" | string >("left");

    const handleMouseEnter = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (!ref.current) return;

        const direction = getDirection(event, ref.current);
        switch (direction) {
            case 0:
                setDirection("left");
                break;
            case 1:
                setDirection("right");
                break;
            case 2:
                setDirection("right");
                break;
            case 3:
                setDirection("left");
                break;
            default:
                setDirection("left");
                break;
        }
    };

    const getDirection = (
        ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
        obj: HTMLElement
    ) => {
        const { width: w, height: h, left, top } = obj.getBoundingClientRect();
        const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
        const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
        const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
        return d;
    };

    return (
        <Link href={url} className={cn('group flex flex-col gap-1.5 sm:gap-3 pb-4', className)}>
            <div className="">
                <motion.div
                    onMouseEnter={handleMouseEnter}
                    ref={ref}
                    className={cn(
                        "h-36 sm:h-52 w-full bg-transparent overflow-hidden group/card relative !m-0 !p-0 rounded-md sm:rounded-xl",
                        className
                    )}
                >
                    <AnimatePresence mode='wait'>
                        <motion.div
                            className="relative h-full w-full"
                            initial="initial"
                            whileHover={direction}
                            exit="exit"
                        >
                            {/* <motion.div className="sm:group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500" /> */}
                            <motion.div
                                variants={variants}
                                className="h-full w-full relative bg-gray-50 dark:bg-black"
                                transition={{
                                    duration: 0.2,
                                    ease: "easeOut",
                                }}
                            >
                                <Image
                                    alt={imageTitle}
                                    title={imageTitle}
                                    className={"h-full w-full object-cover object-center scale-100 sm:scale-[1.15]"}
                                    width={500}
                                    height={500}
                                    src={imageUrl}
                                    blurDataURL={imageBlurData}
                                    loading='lazy'
                                    placeholder='blur'
                                />
                            </motion.div>
                            {/* <motion.div
                                variants={(isDesktop) ? textVariants : mobile}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                                initial={true} animate={{ opacity: isDesktop ? 0 : 1, transform: 'none' }}
                                className={"text-white absolute bottom-4 left-4 z-40"}
                            >
                                {children}
                            </motion.div> */}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
            <div className=" inline-flex items-center gap-2">
                {icon}
                <span className='text-sm sm:text-base line-clamp-1 font-semibold text-gray-500'>
                    {name}
                </span>
            </div>
            <div className="text-[10px] text-wrap line-clamp-2 sm:text-sm text-muted-foreground">
                {description}
            </div>
            <div className="flex gap-2 items-center text-xs text-green-800 font-medium group-hover:font-bold group-hover:gap-3 transition-all sm:text-sm">
                <span>Learn more</span>
                <GoArrowRight/> 
            </div>
        </Link>
    )
}

export default DistrictCard

const variants = {
    initial: {
        x: 0,
    },

    exit: {
        x: 0,
        y: 0,
    },
    top: {
        y: 20,
    },
    bottom: {
        y: -20,
    },
    left: {
        x: 20,
    },
    right: {
        x: -20,
    },
};

const textVariants = {
    initial: {
        y: 0,
        x: 0,
        opacity: 0,
    },
    exit: {
        y: 0,
        x: 0,
        opacity: 0,
    },
    top: {
        y: -20,
        opacity: 1,
    },
    bottom: {
        y: 2,
        opacity: 1,
    },
    left: {
        x: -2,
        opacity: 1,
    },
    right: {
        x: 20,
        opacity: 1,
    },
};

const mobile = {
    initial: {
        y: 0,
        x: 0,
        opacity: 1,
    },
    exit: {
        y: 0,
        x: 0,
        opacity: 1,
    },
    top: {
        y: 0,
        opacity: 1,
    },
    bottom: {
        y: 0,
        opacity: 1,
    },
    left: {
        x: 0,
        opacity: 1,
    },
    right: {
        x: 0,
        opacity: 1,
    },
};