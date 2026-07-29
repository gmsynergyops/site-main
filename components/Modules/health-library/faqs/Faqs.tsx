import FaqAccordion from '@/components/homepage/FaqAccordion';
import { useAfterTreatmentQuestions, useBeforeVisitQuestions, useDuringTreatmentQuestions, useGeneralQuestions } from '@/data';
import React from 'react';

export const Faqs = () => {
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
                        <h2 className='text-heading'>General Questions</h2>
                        <div className="space-y-4">
                            <p className='text-base md:text-sm text-gray-700 leading-relaxed'>
                                Find answers to common questions about our hospital, services, facilities, insurance, and more.
                            </p>
                            <p className='text-base sm:text-sm md:text-base lg:text-base text-left'>
                                Synergy Super Speciality Hospital and Cancer Institute (SSSHCI) is committed to making cancer care accessible, affordable,
                                and patient-centric. This section provides helpful information for understanding what we offer and how we operate.
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
                        <h2 className='text-heading'>Before You Visit</h2>
                        <div className="space-y-4">
                            <p className='text-base md:text-sm text-gray-700 leading-relaxed'>
                                Get ready for your visit to Synergy Cancer Hospital with these commonly asked questions.
                            </p>
                            <p className='text-base sm:text-sm md:text-base lg:text-base text-left'>
                                From how to book an appointment to what documents you should carry, this section helps you prepare with confidence
                                before stepping into our care.
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
                        <h2 className='text-heading'>During Treatment</h2>
                        <div className="space-y-4">
                            <p className='text-base md:text-sm text-gray-700 leading-relaxed'>
                                Understand what to expect while undergoing treatment at SSSHCI.
                            </p>
                            <p className='text-base sm:text-sm md:text-base lg:text-base text-left'>
                                Learn about procedures, side effects, day-to-day care, and support services provided throughout your treatment journey.
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
                        <h2 className='text-heading'>After Treatment</h2>
                        <div className="space-y-4">
                            <p className='text-base md:text-sm text-gray-700 leading-relaxed'>
                                Life after cancer treatment can bring new questions. This section helps you move forward with clarity.
                            </p>
                            <p className='text-base sm:text-sm md:text-base lg:text-base text-left'>
                                Discover how we support your recovery, monitor your health, and help you regain a quality life beyond treatment.
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
