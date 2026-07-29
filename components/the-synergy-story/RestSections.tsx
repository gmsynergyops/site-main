"use client"
import React, { useRef } from 'react'
import { useInView, motion } from 'framer-motion';
import { useAwards, useDailySchedule, useMilestones } from '@/data/rest-sections-data';
import { useTranslations } from 'next-intl';

export const RestSections = () => {
    const awardsRef = useRef(null);
    const achievementsRef = useRef(null);
    const dayAtSynergyRef = useRef(null);
    const dailyVisionRef = useRef(null);

    const isAwardsInView = useInView(awardsRef, { once: true, margin: "-50px" });
    const isAchievementsInView = useInView(achievementsRef, { once: true, margin: "-50px" });
    const isDayAtSynergyInView = useInView(dayAtSynergyRef, { once: true, margin: "-50px" });
    const isDailyVisionInView = useInView(dailyVisionRef, { once: true, margin: "-50px" });
    const awards = useAwards()
    const milestones = useMilestones()
    const { dailySchedule, cards } = useDailySchedule()

    const t = useTranslations('TheSynergyStory.RestSections')
    return (
        <div className="space-y-8 md:space-y-12">
            {/* Awards and Accolades Section */}
            <section
                ref={awardsRef}
                id="Awards-and-Accolades"
                className="w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8"
            >
                <div className='p-6 sm:p-8 '>
                    <div className="space-y-6">
                        <motion.h2
                            initial={{ x: -50, opacity: 0 }}
                            animate={isAwardsInView ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="text-2xl sm:text-3xl font-bold text-gray-900"
                        >
                            {t('AwardsSection.title')}
                        </motion.h2>

                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed max-w-3xl">
                                {t('AwardsSection.description')}
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {awards.map((award, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={isAwardsInView ? { y: 0, opacity: 1 } : {}}
                                        transition={{ delay: index * 0.08, duration: 0.4 }}
                                        className="bg-blue-50 p-4 rounded-lg border-l-2 border-blue-500 hover:bg-blue-100/50 transition-colors"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-full text-xs sm:text-sm">
                                                {award.year}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-800 mb-1">{award.title}</h3>
                                                <p className="text-gray-600 text-sm">{award.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <p className="text-gray-600 italic text-sm text-center max-w-2xl mx-auto">
                                &quot;{t('AwardsSection.summary')}&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements and Milestones Section */}
            <section
                ref={achievementsRef}
                id="Achievements-and-Milestones"
                className="w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8"
            >
                <div className="p-6 sm:p-8 ">
                    <div className="space-y-6">
                        <motion.h2
                            initial={{ x: -50, opacity: 0 }}
                            animate={isAchievementsInView ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="text-2xl sm:text-3xl font-bold text-gray-900"
                        >
                            {t('MilestonesSection.title')}
                        </motion.h2>

                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed max-w-3xl">
                                {t('MilestonesSection.description')}
                            </p>

                            <div className="relative">
                                <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-linear-to-b from-blue-400 to-purple-500 transform -translate-x-1/2" />

                                <div className="space-y-4">
                                    {milestones.map((milestone, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                            animate={isAchievementsInView ? { x: 0, opacity: 1 } : {}}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
                                            className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                        >
                                            <div className={`w-full md:w-5/12 p-2 ${index % 2 === 0 ? 'md:pr-4 md:text-right' : 'md:pl-4 md:text-left'}`}>
                                                <div className="bg-white p-4 rounded-lg shadow-xs border border-gray-100 w-full">
                                                    <h3 className="font-semibold text-gray-800 mb-1">{milestone.title}</h3>
                                                    <p className="text-gray-600 text-sm mb-2">{milestone.description}</p>
                                                    <span className="text-xs font-medium text-blue-600">{milestone.year}</span>
                                                </div>
                                            </div>

                                            <div className="hidden md:flex py-1 px-3 rounded-full bg-linear-to-r from-fuchsia-500 to-indigo-600 items-center justify-center text-white font-medium text-xs mx-2">
                                                {milestone.year}
                                            </div>

                                            <div className="hidden md:block md:w-5/12 p-2"></div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-2 border-yellow-400 p-4 rounded-r">
                                <h3 className="font-semibold text-gray-800 mb-2">{t('MilestonesSection.summaryTitle')}</h3>
                                <p className="text-gray-700 text-sm">
                                    {t('MilestonesSection.summaryDescription')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* A Day at Synergy Section */}
            <section
                ref={dayAtSynergyRef}
                id="A-Day-at-Synergy"
                className="w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8"
            >
                <div className="p-6 sm:p-8 ">
                    <div className="space-y-6">
                        <motion.h2
                            initial={{ x: -50, opacity: 0 }}
                            animate={isDayAtSynergyInView ? { x: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="text-2xl sm:text-3xl font-bold text-gray-900"
                        >
                            {t('DayAtSynergySection.title')}
                        </motion.h2>

                        <div className="space-y-6">
                            <p className="text-gray-700 leading-relaxed max-w-3xl">
                                {t('DayAtSynergySection.description')}
                            </p>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {cards.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ scale: 0.95, opacity: 0 }}
                                        animate={isDayAtSynergyInView ? { scale: 1, opacity: 1 } : {}}
                                        transition={{ delay: 0.1 * (index + 1), duration: 0.4 }}
                                        className={`bg-white p-4 rounded-lg border border-gray-100 hover:border-${item.color}-200 transition-colors`}
                                    >
                                        <div className={`text-${item.color}-600 text-3xl mb-3`}>{item.icon}</div>
                                        <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                                        <p className="text-gray-600 text-sm">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div ref={dailyVisionRef} className="mt-6 space-y-6">
                                <h3 className="text-xl font-bold text-gray-800">{t('DayAtSynergySection.subtitle')}</h3>

                                <div className="relative">
                                    <div className="hidden md:block absolute left-5 h-full w-0.5 bg-linear-to-b from-blue-300 to-purple-400" />

                                    <div className="space-y-4">
                                        {dailySchedule.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={isDailyVisionInView ? { y: 0, opacity: 1 } : {}}
                                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                                className="relative flex items-start pl-8 md:pl-6"
                                            >
                                                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-fuchsia-100 border-2 border-fuchsia-300 mt-1 md:mt-1.5" />
                                                <div className="bg-white p-4 rounded-lg border border-gray-100 w-full">
                                                    <div className="text-xs font-medium text-blue-600 mb-1">{item.time}</div>
                                                    <h3 className="font-medium text-gray-800 mb-1">{item.activity}</h3>
                                                    <p className="text-gray-600 text-sm">{item.description}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-600 italic text-sm text-center max-w-2xl mx-auto">
                                    &quot;{t('DayAtSynergySection.summary')}&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
