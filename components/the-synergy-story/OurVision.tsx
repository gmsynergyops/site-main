"use client"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ImageWithFallback } from '../global/ImageWithFallback'
import { useTranslations } from 'next-intl';

export const OurVision = () => {
    const VisionRef = useRef(null);
    const isInView = useInView(VisionRef, { once: true, margin: "-100px" });
    const t = useTranslations('TheSynergyStory.OurVision');

    return (
        <section ref={VisionRef} className='w-full  md:px-8 py-8 md:py-12' id='Our-Vision'>
            <div className="max-w-6xl mx-auto py-6 md:py-8  flex flex-col lg:flex-row-reverse ">
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-5/12 mb-6 lg:mb-0 lg:ml-8 space-y-8 ">
                    {/* Responsive Image */}
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden ">
                        <ImageWithFallback
                            fallbackSrc='/fallback-image.webp'
                            src="/vision-horizontal.webp"
                            alt="Our Vision"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg aspect-video outline outline-blue-200">
                        <p className="font-medium mb-2">{t('coreValues.title')}</p>
                        <ul className="grid grid-cols-2 gap-2">
                            {t.raw('coreValues.values').map((value: string) => (
                                <li key={value} className="flex items-center">
                                    <span className="text-primary font-medium">{value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-7/12 space-y-6">
                    <h1 className='text-2xl md:text-3xl font-bold text-synergy-blue leading-tight'>
                        {t('title')}
                    </h1>

                    <div className="space-y-4 text-sm md:text-base text-gray-700">
                        <p>
                            {t('description.normal1')} <strong className='text-primary'>{t('description.strong1')}</strong> {t('description.normal2')}
                        </p>

                        <p>
                            {t('vision.normal1')} <strong className='text-primary'>{t('vision.strong1')}</strong> {t('vision.normal2')} <strong className='text-primary'>{t('vision.strong2')}</strong> {t('vision.normal3')} <strong className='text-primary'>{t('vision.strong3')}</strong>{t('vision.normal4')}
                        </p>

                        <p>{t('location.normal1')}</p>
                        <ul className="list-disc pl-5 space-y-1">
                            {t.raw('location.services').map((service: string) => (
                                <li key={service}>{service}</li>
                            ))}
                        </ul>

                        <p>{t('conclusion')}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
