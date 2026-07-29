"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn, imageVariants } from "@/lib/utils"
import { LeaderCardProps } from '@/types'
import { motion, useInView } from "framer-motion"
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'
// import { DownloadImageButton } from '../the-synergy-story/DownloadImageButton'
import { Button } from '../ui/button'
import { ImageWithFallback } from "./ImageWithFallback"

export const LeaderCard: React.FC<LeaderCardProps> = ({
    image,
    name,
    role,
    description,
    onReadMore,
    className
    // onDownload,
}) => {
    const router = useRouter()

    const HeaderRef = useRef(null)
    const imageRef = useRef(null)

    const isInView = useInView(HeaderRef, { once: true, margin: "-100px" })
    const isImageInView = useInView(imageRef, { once: true, margin: "-100px" })

    return (
<Card className="h-full w-full flex flex-col justify-between bg-gradient-to-t from-slate-100 to-transparent rounded-xl shadow-md overflow-hidden py-2! max-w-[640px] border-border/10 hover:border-border transition-colors duration-200 ease-in-out">
    <CardContent className="flex justify-center py-1 px-3">
        <motion.div
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={isImageInView ? "visible" : "hidden"}
            className="relative w-full h-[22rem]"
        >
{
    name === "Dr. Saurabh Mishra" ?
    <ImageWithFallback
    fallbackSrc="/fallback-image.webp"
    src={image}
    alt={name}
    fill
    className={cn("object-cover rounded-md  object-top")}
    priority={false}
    /> : <ImageWithFallback
    fallbackSrc="/fallback-image.webp"
    src={image}
    alt={name}
    fill
    className={cn("object-cover rounded-md  object-center")}
    priority={false}
    />
}
        </motion.div>
    </CardContent>

    <CardHeader ref={HeaderRef} className="px-4 pt-2 pb-1 space-y-1 w-full">
        <CardTitle className="text-base sm:text-lg font-semibold w-full overflow-hidden">
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
                {name}
            </motion.div>
        </CardTitle>
        <CardDescription className="text-sm text-gray-500 overflow-hidden">
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
                {role}
            </motion.div>
        </CardDescription>
        <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <CardDescription className="text-sm text-gray-700 w-full line-clamp-5 min-h-[6rem]">
                {description}
            </CardDescription>
        </motion.div>
    </CardHeader>

    <CardFooter className="flex justify-between items-center gap-2 px-4 pb-3 pt-1 min-h-[3rem]">
        <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <Button
                variant="default"
                className="text-xs sm:text-sm px-3 py-1.5"
                onClick={() => onReadMore && router.push(onReadMore)}
            >
                Read more...
            </Button>
        </motion.div>
        {/* <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
        >
            <DownloadImageButton filePath={onDownload!} />
        </motion.div> */}
    </CardFooter>
</Card>

    )
}
