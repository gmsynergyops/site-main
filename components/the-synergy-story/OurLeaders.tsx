"use client"
import { useLeaders } from '@/data';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { LeaderCard } from '../global/LeaderCard';
import { useTranslations } from 'next-intl';

export const OurLeaders = () => {
    const LeaderRef = useRef(null);
    const isInView = useInView(LeaderRef, { once: true, margin: "-50px" });
    const Leaders = useLeaders()
    const t = useTranslations("TheSynergyStory.OurLeaders")
    return (
        <section
            ref={LeaderRef}
            id="Leadership"
            className="w-full px-4 sm:px-6 lg:px-0 py-8 my-8"
        >
            <div className='p-6 sm:p-8 lg:px-0  flex flex-col items-center w-full max-w-6xl mx-auto'>
                {/* Heading + Subheading */}
                <div className="w-full space-y-4 mb-8">
                    {/* Heading */}
                    <motion.h2
                        initial={{ x: -50, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-2xl sm:text-3xl font-semibold text-gray-900"
                    >
                        {t('title')}
                    </motion.h2>

                    {/* Subheading + Description */}
                    <div className="space-y-3">
                        <motion.p
                            initial={{ x: -50, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                            className="text-sm sm:text-base text-gray-600"
                        >
                            {t('subtitle')}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            className="text-sm sm:text-base text-gray-700"
                        >
                            {t('description')}
                        </motion.p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
                        {Leaders.map((leader, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 30, opacity: 0 }}
                                animate={isInView ? { y: 0, opacity: 1 } : {}}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: index * 0.08, // Slightly faster stagger
                                }}
                                className='w-full hover:shadow-xs hover:shadow-indigo-50 transition-shadow'
                            >
                                <LeaderCard
                                    image={leader.image || "/fallback-image.webp"}
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
            </div>
        </section>
    )
}
