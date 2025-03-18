"use client";

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';

const AngleImage = ({ imageUrl, imageName }: { imageUrl: string, imageName: string }) => {
    const [randomValue, setRandomValue] = useState<number>(0);

    useEffect(() => {
        // Generate a random value only on the client side
        setRandomValue(Math.random());
    }, []);
    return (
        <motion.div
            style={{
                rotate: randomValue * 20 - 10,
            }}
            whileHover={{
                scale: 1.1,
                rotate: 0,
                zIndex: 100,
            }}
            whileTap={{
                scale: 1.1,
                rotate: 0,
                zIndex: 100,
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
        >
            <Image
                src={imageUrl}
                alt={imageName}
                width="500"
                height="500"
                className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
        </motion.div>
    )
}

export default AngleImage