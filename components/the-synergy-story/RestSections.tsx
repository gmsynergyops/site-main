"use client"
import React, { useRef } from 'react'
import { useInView, motion } from 'framer-motion';
import { useDailySchedule } from '@/data/rest-sections-data';
import { useTranslations } from 'next-intl';

type TimelineItem = {
    date: string;
    title: string;
    description: string;
    points?: string[];
};

const qualityAccolades = [
    {
        date: "September 2025",
        title: "QCI Empanelment",
        description:
            "Successfully achieved Quality Council of India (QCI) Empanelment, reflecting the hospital's commitment to standardized, quality-driven, and patient-centric healthcare services.",
    },
    {
        date: "May 2026",
        title: "NABH Accreditation",
        description:
            "Successfully received NABH (National Accreditation Board for Hospitals & Healthcare Providers) Accreditation, one of India's highest quality certifications for healthcare institutions.",
    },
];

const synergyTimeline: TimelineItem[] = [
    {
        date: "July 2023",
        title: "Foundation of Excellence",
        description:
            "Synergy Super Speciality Hospital & Cancer Institute was established as a 100-bedded tertiary care hospital in Gorakhpur with the vision of providing comprehensive, affordable, and advanced healthcare services under one roof.",
        points: [
            "Commenced operations with multidisciplinary specialties, critical care services, advanced operation theatres, diagnostics, and emergency care.",
        ],
    },
    {
        date: "October 2023",
        title: "Expansion of Super Speciality Services",
        description:
            "To strengthen comprehensive patient care, three new super speciality departments were introduced.",
        points: [
            "Urology & Andrology",
            "Orthopaedics & Joint Replacement",
            "Plastic & Reconstructive Surgery",
        ],
    },
    {
        date: "February 2024",
        title: "Launch of First Peripheral OPD",
        description:
            "Established the first Peripheral OPD Centre in Ayodhya, extending specialist consultation and cancer care closer to patients residing outside Gorakhpur.",
        points: [
            "Marked the beginning of Synergy's regional healthcare outreach program.",
        ],
    },
    {
        date: "September 2025",
        title: "QCI Empanelment",
        description:
            "Successfully achieved Quality Council of India (QCI) Empanelment, reflecting the hospital's commitment to standardized, quality-driven, and patient-centric healthcare services.",
    },
    {
        date: "February 2026",
        title: "Commissioning of Advanced Radiation Oncology Centre",
        description:
            "Started the State-of-the-Art Radiation Therapy Centre, offering advanced radiation treatment for cancer patients.",
        points: [
            "Enabled complete cancer care — from diagnosis to surgery, chemotherapy, and radiation — under one roof.",
        ],
    },
    {
        date: "May 2026",
        title: "NABH Accreditation",
        description:
            "Successfully received NABH (National Accreditation Board for Hospitals & Healthcare Providers) Accreditation, one of India's highest quality certifications for healthcare institutions.",
        points: [
            "Reaffirmed Synergy's commitment to patient safety, clinical excellence, infection control, and international quality standards.",
        ],
    },
    {
        date: "May 2026",
        title: "Dedicated Pediatric Oncology Unit",
        description:
            "Inaugurated a Specialized Pediatric Oncology Unit, providing comprehensive diagnosis, chemotherapy, supportive care, and holistic treatment for children battling cancer in a child-friendly environment.",
    },
    {
        date: "June 2026",
        title: "Advanced Trauma & Emergency Centre",
        description:
            "Launched a 24×7 Advanced Trauma Centre equipped with dedicated trauma specialists, modular operation theatres, emergency critical care, and rapid response services for accident and emergency patients.",
    },
    {
        date: "2026 — Present",
        title: "Regional Healthcare Network Expansion",
        description:
            "Expanded from 1 Peripheral OPD Centre to 6 Peripheral OPDs across six districts, bringing specialist consultation, cancer screening, follow-up care, and diagnostic services closer to underserved communities.",
    },
];

const centreOfExcellence = [
    "100+ Bedded Super Speciality Hospital",
    "Comprehensive Cancer Care",
    "Advanced Radiation Oncology",
    "Medical, Surgical & Pediatric Oncology",
    "24×7 Trauma & Emergency Centre",
    "13-Bedded ICU & Critical Care Services",
    "Advanced Modular Operation Theatres",
    "Peripheral OPD Network Across Six Districts",
    "NABH Accredited Hospital",
    "QCI Empanelled Healthcare Institution",
    "Highly Experienced Consultants & Multidisciplinary Care",
    "Patient-Centric, Ethical & Evidence-Based Healthcare",
];

const futureVision =
    "Continuing to expand advanced healthcare infrastructure, academic programs, and innovative treatment technologies, Synergy aims to become India's most trusted destination for comprehensive super speciality and cancer care, ensuring that quality healthcare is accessible, affordable, and available to every patient regardless of geography or financial status.";

export const RestSections = () => {
    const awardsRef = useRef(null);
    const achievementsRef = useRef(null);
    const dayAtSynergyRef = useRef(null);
    const dailyVisionRef = useRef(null);

    const isAwardsInView = useInView(awardsRef, { once: true, margin: "-50px" });
    const isAchievementsInView = useInView(achievementsRef, { once: true, margin: "-50px" });
    const isDayAtSynergyInView = useInView(dayAtSynergyRef, { once: true, margin: "-50px" });
    const isDailyVisionInView = useInView(dailyVisionRef, { once: true, margin: "-50px" });

    const { dailySchedule, cards } = useDailySchedule()

    const t = useTranslations('TheSynergyStory.RestSections')
    return (
        <div className="space-y-8 md:space-y-12">
            {/* Quality & Accolades Section */}
            <section
                ref={awardsRef}
                id="Awards-and-Accolades"
                className="w-full px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
            >
                <div className="mx-auto max-w-7xl">

                    {/* Heading */}
                    <motion.div
                        initial={{ x: -40, opacity: 0 }}
                        animate={
                            isAwardsInView
                                ? { x: 0, opacity: 1 }
                                : {}
                        }
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                        className="mb-10"
                    >
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#29498f]">
                            Recognition & Quality
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Quality & Accolades
                        </h2>

                        <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
                            Milestones that reflect Synergy&apos;s commitment to
                            standardized, quality-driven, and patient-centric
                            healthcare.
                        </p>
                    </motion.div>

                    {/* Accolades */}
                    <div className="grid gap-5 md:grid-cols-2">

                        {qualityAccolades.map((accolade, index) => (
                            <motion.div
                                key={accolade.title}
                                initial={{
                                    y: 30,
                                    opacity: 0,
                                }}
                                animate={
                                    isAwardsInView
                                        ? {
                                            y: 0,
                                            opacity: 1,
                                        }
                                        : {}
                                }
                                transition={{
                                    delay: index * 0.12,
                                    duration: 0.5,
                                }}
                                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                            >

                                {/* Accent */}
                                <div className="absolute left-0 top-0 h-full w-1 bg-[#29498f]" />

                                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

                                    {/* Date */}
                                    <div className="shrink-0">
                                        <span className="inline-flex rounded-full bg-[#eef3fb] px-3 py-1.5 text-xs font-bold text-[#29498f]">
                                            {accolade.date}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {accolade.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-gray-600">
                                            {accolade.description}
                                        </p>
                                    </div>

                                </div>
                            </motion.div>
                        ))}

                    </div>

                </div>
            </section>

            {/* Achievements and Milestones Section */}
            <section
                ref={achievementsRef}
                id="Achievements-and-Milestones"
                className="w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
            >
                <div className="mx-auto max-w-7xl">

                    {/* Heading */}
                    <motion.div
                        initial={{
                            y: 30,
                            opacity: 0,
                        }}
                        animate={
                            isAchievementsInView
                                ? {
                                    y: 0,
                                    opacity: 1,
                                }
                                : {}
                        }
                        transition={{
                            duration: 0.6,
                        }}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#29498f]">
                            2023 — 2026
                        </p>

                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                            Our Journey of Excellence
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                            From the foundation of a tertiary care hospital to
                            a growing regional healthcare network, every milestone
                            reflects Synergy&apos;s commitment to accessible,
                            advanced and comprehensive healthcare.
                        </p>
                    </motion.div>


                    {/* Timeline */}
                    <div className="relative mt-16">

                        {/* Vertical line */}
                        <div className="absolute bottom-0 left-[17px] top-0 hidden w-px bg-slate-200 md:left-1/2 md:block md:-translate-x-1/2" />

                        <div className="space-y-10 md:space-y-14">

                            {synergyTimeline.map((item, index) => {

                                const isLeft = index % 2 === 0;

                                return (
                                    <motion.div
                                        key={`${item.date}-${item.title}`}
                                        initial={{
                                            opacity: 0,
                                            y: 35,
                                        }}
                                        animate={
                                            isAchievementsInView
                                                ? {
                                                    opacity: 1,
                                                    y: 0,
                                                }
                                                : {}
                                        }
                                        transition={{
                                            duration: 0.55,
                                            delay: index * 0.08,
                                        }}
                                        className="relative md:grid md:grid-cols-2 md:gap-16"
                                    >

                                        {/* Mobile / Desktop dot */}
                                        <div className="absolute left-0 top-7 z-10 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-[#29498f] shadow-md md:left-1/2 md:-translate-x-1/2">
                                            <div className="h-2 w-2 rounded-full bg-white" />
                                        </div>


                                        {/* Empty side */}
                                        <div
                                            className={`hidden md:block ${isLeft
                                                    ? "order-2"
                                                    : "order-1"
                                                }`}
                                        />


                                        {/* Card */}
                                        <div
                                            className={`pl-14 md:pl-0 ${isLeft
                                                    ? "md:order-1"
                                                    : "md:order-2"
                                                }`}
                                        >
                                            <div
                                                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${isLeft
                                                        ? "md:text-right"
                                                        : "md:text-left"
                                                    }`}
                                            >

                                                {/* Date */}
                                                <div
                                                    className={`flex ${isLeft
                                                            ? "md:justify-end"
                                                            : "md:justify-start"
                                                        }`}
                                                >
                                                    <span className="inline-flex rounded-full bg-[#eef3fb] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#29498f]">
                                                        {item.date}
                                                    </span>
                                                </div>


                                                {/* Title */}
                                                <h3 className="mt-4 text-xl font-bold text-gray-900 sm:text-2xl">
                                                    {item.title}
                                                </h3>


                                                {/* Description */}
                                                <p className="mt-3 text-sm leading-7 text-gray-600">
                                                    {item.description}
                                                </p>


                                                {/* Bullet Points */}
                                                {item.points &&
                                                    item.points.length > 0 && (
                                                        <div
                                                            className={`mt-5 space-y-2 ${isLeft
                                                                    ? "md:text-right"
                                                                    : "md:text-left"
                                                                }`}
                                                        >
                                                            {item.points.map(
                                                                (point) => (
                                                                    <div
                                                                        key={point}
                                                                        className={`flex items-start gap-2 ${isLeft
                                                                                ? "md:flex-row-reverse"
                                                                                : ""
                                                                            }`}
                                                                    >
                                                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#29498f]" />

                                                                        <span className="text-sm leading-6 text-gray-600">
                                                                            {point}
                                                                        </span>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    )}
                                            </div>
                                        </div>

                                    </motion.div>
                                );
                            })}

                        </div>
                    </div>


                    {/* Centre of Excellence */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        animate={
                            isAchievementsInView
                                ? {
                                    opacity: 1,
                                    y: 0,
                                }
                                : {}
                        }
                        transition={{
                            delay: 0.7,
                            duration: 0.6,
                        }}
                        className="mt-20 overflow-hidden rounded-3xl bg-[#173b78] text-white"
                    >

                        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

                            {/* Intro */}
                            <div className="relative overflow-hidden p-7 sm:p-10 lg:p-12">

                                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/5" />
                                <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/5" />

                                <div className="relative">
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                                        A Centre of Excellence
                                    </p>

                                    <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                                        Growing with purpose.
                                        <br />
                                        Caring with excellence.
                                    </h3>

                                    <p className="mt-6 text-sm leading-7 text-blue-100/80">
                                        Synergy Super Speciality Hospital &
                                        Cancer Institute has evolved into one
                                        of Eastern Uttar Pradesh&apos;s leading
                                        tertiary care institutions.
                                    </p>
                                </div>

                            </div>


                            {/* Highlights */}
                            <div className="bg-white p-7 text-gray-900 sm:p-10 lg:p-12">

                                <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">

                                    {centreOfExcellence.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eef3fb] text-[#29498f]">
                                                <span className="h-1.5 w-1.5 rounded-full bg-[#29498f]" />
                                            </span>

                                            <span className="text-sm leading-6 text-gray-600">
                                                {item}
                                            </span>
                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>
                    </motion.div>


                    {/* Future Vision */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        animate={
                            isAchievementsInView
                                ? {
                                    opacity: 1,
                                    y: 0,
                                }
                                : {}
                        }
                        transition={{
                            delay: 0.85,
                            duration: 0.6,
                        }}
                        className="mt-8 rounded-2xl border border-[#dce5f4] bg-[#f7f9fc] p-7 sm:p-10"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#29498f]">
                            Vision for the Future
                        </p>

                        <p className="mt-4 max-w-5xl text-sm leading-7 text-gray-600 sm:text-base">
                            {futureVision}
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
