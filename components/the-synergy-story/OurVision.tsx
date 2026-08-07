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


                        <p>At Synergy Super Speciality Hospital & Cancer Institute, our vision is to build a future where cancer is no longer feared, no life is lost due to lack of timely treatment, and no patient&apos;s journey to healing is interrupted because of financial constraints.</p>

                        <p>We envision becoming one of India&apos;s most trusted and respected centers of excellence in comprehensive cancer care and super speciality healthcare, delivering world-class, evidence-based, compassionate, and affordable medical services to every individual who needs them.</p>

                        <p>Our vision is to ensure that every patient receives timely access to advanced diagnostics, cutting-edge treatment, multidisciplinary expertise, and personalized care with dignity, empathy, and hope. We are committed to breaking barriers to quality healthcare by making advanced treatment accessible, ethical, and affordable for all.</p>

                        <p>Through continuous innovation, clinical excellence, research, education, advanced technology, and an unwavering commitment to patient safety, we aspire to redefine healthcare standards and improve lives across Eastern Uttar Pradesh, Western Bihar, Southern Nepal, and beyond.</p>

                        <p>We believe that every life is precious, every patient deserves hope, and every family deserves the chance to see their loved ones healed.</p>

                        <p>Our Vision is simple yet profound:</p>

                        <ul className="list-disc pl-5 space-y-1">
                            <li>No life should be lost to cancer because treatment was delayed.</li>
                            <li>No patient&apos;s treatment should stop because of financial hardship.</li>
                            <li>No family should lose hope when quality healthcare can make a difference.</li>
                        </ul>

                        <p> Together, we envision a healthier tomorrow—where healing is driven by compassion, excellence, innovation, and the unwavering belief that every life matters.</p>

                        <p>Saving Lives. Restoring Hope. Caring Beyond Boundaries.</p>
                        <p>{t('conclusion')}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
