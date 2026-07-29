"use client"
import React, { useRef } from 'react'
import { useLeaders } from "@/data";
import { LeaderCard } from "../global/LeaderCard";
import { motion, useInView } from "framer-motion";
import { useTranslations } from 'next-intl';

export const LeaderCards = () => {
    const Leaders = useLeaders()
    const leaderRef = useRef(null);
    const isInView = useInView(leaderRef, { once: true, margin: "-100px" });
    const t = useTranslations()
    return (
        <div ref={leaderRef} className="max-w-6xl h-full w-full lg:py-16 p-4 space-y-10 ">
            <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-heading text-center"
            >
                {t('meetOurLeaders')}
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {Leaders.map((leader, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: -50, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: index * 0.2, // Stagger effect for each card
                        }}
                    >
                        <LeaderCard
                            image={leader.image || "/Dummy.png"}
                            name={leader.name || "Leader Name"}
                            role={leader.role || "Senior Doctor"}
                            description={leader.description || "No description provided"}
                            onReadMore={leader.onReadMore}
                            onDownload={leader.onDownload}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
