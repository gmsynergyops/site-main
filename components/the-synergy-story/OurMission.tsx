"use client"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ImageWithFallback } from '@/components/global/ImageWithFallback'
import { useTranslations } from 'next-intl';

export const OurMission = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const t =  useTranslations('TheSynergyStory.OurMission')
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
                        <p>
                            <strong className="text-primary">{t('description.strong1')}</strong> {t('description.normal1')} <strong className="text-primary">{t('description.strong2')}</strong>, {t('description.normal2')}
                        </p>

                        <p>
                            {t('body.normal1')} <strong className="text-primary">&quot;{t('body.strong1')}&quot;</strong>, {t('body.normal2')}
                            <span className="block mt-1">
                                <strong className="text-primary">{t('body.span.strong.0')}</strong>, <strong className="text-primary">{t('body.span.strong.1')}</strong>, <strong className="text-primary">{t('body.span.strong.2')}</strong>,
                                <strong className="text-primary"> {t('body.span.strong.3')}</strong>, <strong className="text-primary">{t('body.span.strong.4')}</strong>, <strong className="text-primary">{t('body.span.strong.5')}</strong>, {t('body.span.and')} <strong className="text-primary">{t('body.span.strong.6')}</strong>.
                            </span>
                        </p>

                        <p>
                        {t('body2.normal1')} <strong className="text-primary">{t('body2.strong1')}</strong>, {t('body2.normal2')} <strong className="text-primary">{t('body2.strong2')}</strong> {t('body.span.and')}  <strong className="text-primary">{t('body2.strong3')}</strong> {t('body2.normal3')} <strong className="text-primary">{t('body2.strong4')}</strong> {t('body2.normal4')}
                        </p>

                        <p>
                        {t('body2.normal5')} <strong className="text-primary">{t('body2.strong5')}</strong>, <strong className="text-primary">{t('body2.strong6')}</strong>, {t('body.span.and')} <strong className="text-primary">{t('body2.strong7')}</strong> {t('body2.normal6')}
                        </p>
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
