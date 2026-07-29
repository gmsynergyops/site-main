"use client"
import React from 'react'
import NewsSlider from '@/components/homepage/NewsSlider';
import { motion } from "framer-motion"
import { Mic, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

export const SynergyInTheNewsSection = () => {
    const t = useTranslations('mediaCenter.synergyInTheNews');

    return (
        <section className='min-h-[80vh] w-full px-2 md:px-6 lg:px-24 py-4' id='synergy-in-the-news'>
            <div className="lg:p-8 md:px-4 px-2 py-5 rounded-3xl bg-white flex flex-col lg:flex-row border-3 border-neutral-200 shadow-expanded">
                {/* New Content Section */}
                <div className="w-full lg:w-1/3 flex flex-col space-y-6 pr-0 lg:pr-8 mb-8 lg:mb-0">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-synergy-blue"
                    >
                        {t('title')}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-gray-600 text-sm md:text-base lg:text-lg leading-normal"
                    >
                        {t('description')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col space-y-4"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-synergy-pink/10 rounded-full flex items-center justify-center">
                                <Trophy className="text-synergy-pink w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold">{t('awardWinningCare.title')}</h3>
                                <p className="text-sm text-gray-500">{t('awardWinningCare.description')}</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-synergy-blue/10 rounded-full flex items-center justify-center">
                                <Mic className="text-synergy-blue w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold">{t('mediaFeatures.title')}</h3>
                                <p className="text-sm text-gray-500">{t('mediaFeatures.description')}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="pt-4 flex justify-center lg:justify-start"
                    >
                        <Button variant="outline" className="border-synergy-blue text-synergy-blue hover:text-synergy-blue hover:bg-synergy-blue/10">
                            {t('viewAllMedia')}
                        </Button>
                    </motion.div>
                </div>

                {/* News Slider Section */}
                <div className="w-full lg:w-2/3">
                    <NewsSlider />
                </div>
            </div>
        </section>
    )
}
