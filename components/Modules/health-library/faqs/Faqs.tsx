"use client";

import FaqAccordion from '@/components/homepage/FaqAccordion';
import { useAfterTreatmentQuestions, useBeforeVisitQuestions, useDuringTreatmentQuestions, useGeneralQuestions } from '@/data';
import React from 'react';
import { useTranslations } from 'next-intl';

export const Faqs = () => {
    const t = useTranslations("faqsPage");

    const generalQuestions = useGeneralQuestions();
    const beforeYouVisitQuestions = useBeforeVisitQuestions();
    const duringTreatementQuestions = useDuringTreatmentQuestions();
    const afterTreatementQuestions = useAfterTreatmentQuestions();

    return (
        <main className='bg-indigo-50 py-20 -mt-24 flex items-center justify-center flex-col'>
            {/* General FAQs */}
            <section
                id='general'
                className="max-w-7xl w-full my-12 px-2 md:px-6 lg:px-24 py-4"
            >
                <div className='lg:p-8 md:px-4 px-2 py-5 rounded-2xl bg-white space-y-12'>
                    <div className='container mx-auto'>
                        <h2 className='text-heading'>{t("general.title")}</h2>
                        <div className="space-y-4">
                            <p className='text-base md:text-sm text-gray-700 leading-relaxed'>
                                {t("general.p1")}
                            </p>
                            <p className='text-base sm:text-sm md:text-base lg:text-base text-left'>
                                {t("general.p2")}
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-start w-full'>
                        <FaqAccordion items={generalQuestions} />
                    </div>
                </div>
            </section>

            {/* Before You Visit */}
            <section
                className='max-w-7xl w-full my-12 bg-indigo-50 px-2 md:px-6 lg:px-24 py-4'
                id='before-visit'
            >
                <div className='lg:p-8 md:px-4 px-2 py-5 rounded-2xl bg-white space-y-12'>
                    <div className='container mx-auto'>
                        <h2 className='text-heading'>{t("beforeVisit.title")}</h2>
                        <div className="space-y-4">
                            <p className='text-base md:text-sm text-gray-700 leading-relaxed'>
                                {t("beforeVisit.p1")}
                            </p>
                            <p className='text-base sm:text-sm md:text-base lg:text-base text-left'>
                                {t("beforeVisit.p2")}
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-start w-full'>
                        <FaqAccordion items={beforeYouVisitQuestions}/>
                    </div>
                </div>
            </section>

            {/* During Treatment */}
            <section
                className='max-w-7xl w-full my-12 bg-indigo-50 px-2 md:px-6 lg:px-24 py-4'
                id='during-treatment'
            >
                <div className='lg:p-8 md:px-4 px-2 py-5 rounded-2xl bg-white space-y-12'>
                    <div className='container mx-auto'>
                        <h2 className='text-heading'>{t("duringTreatment.title")}</h2>
                        <div className="space-y-4">
                            <p className='text-base md:text-sm text-gray-700 leading-relaxed'>
                                {t("duringTreatment.p1")}
                            </p>
                            <p className='text-base sm:text-sm md:text-base lg:text-base text-left'>
                                {t("duringTreatment.p2")}
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-start w-full'>
                        <FaqAccordion items={duringTreatementQuestions}/>
                    </div>
                </div>
            </section>

            {/* After Treatment */}
            <section
                className='max-w-7xl w-full my-12 bg-indigo-50 px-2 md:px-6 lg:px-24 py-4'
                id='after-treatment'
            >
                <div className='lg:p-8 md:px-4 px-2 py-5 rounded-2xl bg-white space-y-12'>
                    <div className='container mx-auto'>
                        <h2 className='text-heading'>{t("afterTreatment.title")}</h2>
                        <div className="space-y-4">
                            <p className='text-base md:text-sm text-gray-700 leading-relaxed'>
                                {t("afterTreatment.p1")}
                            </p>
                            <p className='text-base sm:text-sm md:text-base lg:text-base text-left'>
                                {t("afterTreatment.p2")}
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-start w-full'>
                        <FaqAccordion items={afterTreatementQuestions} />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Faqs;
