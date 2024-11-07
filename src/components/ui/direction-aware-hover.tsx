"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMediaQuery } from 'usehooks-ts'

export const DirectionAwareHover = ({
  name,
  imageUrl,
  imgBlurDataUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  name: string;
  imageUrl: string;
  imgBlurDataUrl?: string;
  children: React.ReactNode | string;
  hover?: boolean;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<
    "top" | "bottom" | "left" | "right" | string
  >("left");

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
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn(
        "h-52 w-full bg-transparent overflow-hidden group/card relative !m-0 !p-0",
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
          <motion.div className="sm:group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500" />
          <motion.div
            variants={variants}
            className="h-full w-full relative bg-gray-50 dark:bg-black"
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <Image
              alt={name}
              title={name}
              className={cn(
                "h-full w-full object-cover object-center scale-100 sm:scale-[1.15] rounded-t-[11px]",
                imageClassName
              )}
              width="500"
              height="500"
              src={imageUrl}
              blurDataURL={imgBlurDataUrl as string}
              loading="lazy"
              placeholder={imgBlurDataUrl?"blur":"empty"}
            />
          </motion.div>
          <motion.div
            variants={isDesktop ? textVariants : mobile}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            initial={true} animate={{ opacity: isDesktop ? 0 : 1, transform: 'none' }}
            className={cn(
              "text-white absolute bottom-4 left-4 z-40",
              childrenClassName
            )}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

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
