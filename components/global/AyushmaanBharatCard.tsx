'use client';

import React from 'react';
import { FaIdCardAlt, FaHospitalUser, FaCheckCircle } from 'react-icons/fa';
import { ImageWithFallback } from './ImageWithFallback';
import { useTranslations } from 'next-intl';

const AyushmaanBharatCard = () => {
    const t = useTranslations('ayushmaanBharat');

    return (
        <section className="py-6 sm:py-10 px-3 sm:px-6 lg:px-8">
            {/* Main Wrapper */}
<div className="max-w-[1130px] mx-auto bg-white rounded-2xl shadow-[0_4px_24px_rgb(0,0,0,0.06)] border border-slate-200 overflow-hidden">                
                {/* 1. HEADER SECTION (Left: PM-JAY + Modi | Center: Title | Right: Yogi) */}
                {/* Grid layout use kiya hai taaki alignment perfect rahe */}
                <div className="bg-slate-50/80 border-b border-slate-100 p-6 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 sm:gap-8 items-center">
                    
                    {/* Left Logos (PM-JAY & Modi) */}
                    <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-6 order-2 md:order-1">
                        <ImageWithFallback
                            fallbackSrc="/fallback-image.webp"
                            src="/insurance-companies/PMJAY.png"
                            width={120}
                            height={120}
                            alt="PMJAY"
                            className="object-cover object-center rounded-full size-24 sm:size-28 md:size-32 bg-white shadow-md ring-4 ring-white"
                        />
                        <ImageWithFallback
                            fallbackSrc="/fallback-image.webp"
                            src="/MODI.png"
                            width={120}
                            height={120}
                            alt="PM Modi"
                            className="object-cover object-center rounded-full size-24 sm:size-28 md:size-32 bg-white shadow-md ring-4 ring-white"
                        />
                    </div>

                    {/* Center Title */}
                    <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-center text-synergy-blue order-1 md:order-2 px-4 leading-tight">
                        {t('title')}
                    </h1>

                    {/* Right Logo (Yogi) */}
                    <div className="flex items-center justify-center md:justify-end order-3 md:order-3">
                        <ImageWithFallback
                            fallbackSrc="/fallback-image.webp"
                            src="/Oggy.jpg"
                            width={120}
                            height={120}
                            alt="CM Yogi"
                            className="object-cover object-center rounded-full size-24 sm:size-28 md:size-32 bg-white shadow-md ring-4 ring-white"
                        />
                    </div>
                </div>

                {/* 2. MIDDLE SECTION (Left: Image | Right: Benefits Cards) */}
                <div className="p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start bg-white">
                    
                    {/* Left: Ayushmaan Card Image */}
                    <div className="flex justify-center lg:justify-start w-full">
                        <div className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-100 shadow-inner w-full flex justify-center">
                            <ImageWithFallback
                                fallbackSrc="/fallback-image.webp"
                                src="/Ayushman-Card.jpg"
                                width={600}
                                height={400}
                                alt="Ayushmaan Bharat Card"
                                className="object-cover object-center w-full max-w-[500px] rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>
                    </div>
                    
                    {/* Right: Benefits Section */}
                    <div className="space-y-6 w-full">
                        <h2 className="text-xl sm:text-2xl md:text-2xl font-bold flex items-center justify-center lg:justify-start gap-3 text-synergy-blue mb-6">
                            <FaIdCardAlt className="text-synergy-blue text-2xl md:text-2xl" />
                            <span>{t('benefits.title')}</span>
                        </h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
                            {/* Card 1 */}
                            <div className="bg-white border border-slate-200 hover:border-synergy-blue/40 shadow-sm hover:shadow-md transition-all p-5 md:p-6 rounded-xl group">
                                <div className="flex items-center gap-3 mb-3">
                                    <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                                    <h3 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-synergy-blue transition-colors">
                                        {t('benefits.whatIs.title')}
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                    {t('benefits.whatIs.description')}
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white border border-slate-200 hover:border-synergy-blue/40 shadow-sm hover:shadow-md transition-all p-5 md:p-6 rounded-xl group">
                                <div className="flex items-center gap-3 mb-3">
                                    <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                                    <h3 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-synergy-blue transition-colors">
                                        {t('benefits.availing.title')}
                                    </h3>
                                </div>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                    {t('benefits.availing.description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. FULL WIDTH TEXT PARAGRAPH */}
                <div className="px-5 sm:px-5 md:px-5 pb-4 pt-4 bg-white">
                    <p className="text-base text-sm sm:text-sm md:text-md text-slate-600 text-justify font-medium">
                        The Ayushmaan Bharat Card, launched under the Pradhan Mantri Jan Arogya Yojana (PM-JAY), is a revolutionary step toward providing universal health coverage in India. It offers cashless healthcare services up to ₹5 lakh per family per year for secondary and tertiary hospitalization across public and private empanelled hospitals. Targeting economically vulnerable families, the scheme ensures access to quality healthcare without financial hardship. Beneficiaries can avail treatments for a wide range of diseases, surgeries, and medical procedures. With minimal documentation, quick approvals, and a vast network of hospitals, Ayushmaan Bharat empowers millions to lead healthier, more secure lives with dignity.
                    </p>
                </div>

                {/* 4. FULL WIDTH CTA BANNER (No Button) */}
                <div className="bg-gradient-to-r from-synergy-blue via-blue-800 to-blue-900 text-white p-5 sm:p-10 md:p-12 w-full flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-6 md:gap-8">
                    <div className="bg-white/10 p-4 md:p-5 rounded-full backdrop-blur-sm shadow-inner flex-shrink-0">
                        <FaHospitalUser className="text-4xl md:text-4xl text-white" />
                    </div>
                    <div>
                        <h3 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-2 tracking-wide">
                            {t('getCovered.title')}
                        </h3>
                        <p className="text-blue-100 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
                            {t('getCovered.description')}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AyushmaanBharatCard;
