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
                className="w-full py-20 px-4 sm:px-6 lg:px-8"
            >
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <motion.h2
                        initial={{ y: 30, opacity: 0 }}
                        animate={isAchievementsInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-center text-gray-900"
                    >
                        {t("MilestonesSection.title")}
                    </motion.h2>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={isAchievementsInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="max-w-3xl mx-auto mt-6 text-center text-gray-600 leading-relaxed"
                    >
                        {t("MilestonesSection.description")}
                    </motion.p>

                    {/* Timeline */}
                    <div className="relative mt-20 overflow-x-auto pb-8">

                        <div className="min-w-[1100px] relative">

                            {/* Line */}
                            <div className="absolute top-[185px] left-0 right-0 h-[2px] bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-blue-500" />

                            <div className="grid grid-cols-5 gap-10">

                                {milestones.map((milestone, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ y: 40, opacity: 0 }}
                                        animate={
                                            isAchievementsInView
                                                ? { y: 0, opacity: 1 }
                                                : {}
                                        }
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.12,
                                        }}
                                        className="relative flex flex-col items-center"
                                    >

                                        {/* Card */}
                                        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 w-full">

                                            <span className="inline-flex rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-white text-xs font-semibold px-3 py-1 mb-4">
                                                {milestone.year}
                                            </span>

                                            <h3 className="text-lg font-semibold text-gray-900">
                                                {milestone.title}
                                            </h3>

                                            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                                                {milestone.description}
                                            </p>

                                        </div>

                                        {/* Spacer */}
                                        <div className="h-10" />

                                        {/* Timeline Dot */}
                                        <div className="relative z-10 h-6 w-6 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-600 border-4 border-white shadow-lg" />

                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isAchievementsInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 }}
                        className="mt-16 rounded-2xl border border-yellow-200 bg-yellow-50 p-6"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            {t("MilestonesSection.summaryTitle")}
                        </h3>

                        <p className="text-gray-700 leading-relaxed">
                            {t("MilestonesSection.summaryDescription")}
                        </p>
                    </motion.div>

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
