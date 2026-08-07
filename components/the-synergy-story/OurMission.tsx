"use client"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ImageWithFallback } from '@/components/global/ImageWithFallback'
import { useTranslations } from 'next-intl';

export const OurMission = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const t = useTranslations('TheSynergyStory.OurMission')
    return (
        <section
            ref={ref}
            className="w-full px-4 sm:px-6  py-12 "
            id="Our-Mission"
        >
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 ">
                {/* Left content */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <motion.h2
                        initial={{ x: -80, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                        className="text-3xl sm:text-4xl font-bold text-synergy-blue leading-tight"
                    >
                        {t('title')}
                    </motion.h2>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="space-y-5 text-gray-700 text-base leading-relaxed"
                    >
                        <p className="">At Synergy Super Speciality Hospital & Cancer Institute, our mission is to transform healthcare by delivering world-class, evidence-based, and compassionate medical care through clinical excellence, advanced technology, and a patient-first approach.</p>

                        <p className="">We are committed to providing accessible, affordable, and ethical healthcare across a wide range of super-speciality services, with a strong focus on comprehensive cancer care. Every patient is treated with dignity, empathy, respect, and personalized attention, ensuring the highest standards of safety and quality throughout their healthcare journey.</p>

                        <p className="">Our mission is to continuously advance medical excellence by investing in cutting-edge technology, highly skilled healthcare professionals, continuous research, innovation, and education. We strive to create an environment where healing is driven by compassion, trust, and excellence.</p>

                        <p>As a leading healthcare institution serving Eastern Uttar Pradesh, Western Bihar, and Southern Nepal, we aspire to become the region&apos;s most trusted destination for advanced medical care by improving patient outcomes, enhancing quality of life, and making healthcare accessible to every individual who needs it.</p>

                        <p>Healing with Compassion. Caring with Excellence. Inspiring Hope.</p>
                    </motion.div>
                </div>

                {/* Right image */}
                <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                    className="w-full lg:w-1/2 rounded-2xl shadow-lg overflow-hidden"
                >
                    <div className="relative w-full aspect-video">
                        <ImageWithFallback
                            fallbackSrc="/fallback-image.webp"
                            src="/mission-horizontal.webp"
                            alt="Doctors treating cancer patients at Synergy Super Specialty Hospital"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
