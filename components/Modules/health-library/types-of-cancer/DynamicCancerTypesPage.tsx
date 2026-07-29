"use client"
import React from 'react'
import { useTranslations } from 'next-intl'
import { ImageWithFallback } from '@/components/global/ImageWithFallback'
import { useCancerTypesData } from '@/data/CANCER_TYPES'
import { usePathname } from 'next/navigation'

export const DynamicCancerTypesPage = () => {
    const pathname = usePathname();
    const segments = pathname.split('/');
    const cancerTypeName = segments[segments.length - 1]; // 'adrenal-cancer'
    const CANCER_TYPES_DATA = useCancerTypesData();
    const t = useTranslations('healthLibrary.cancerTypes')
    const cancerTypeData = CANCER_TYPES_DATA.find(
        (item) => item.typeName === cancerTypeName
    );

    // Optional: Handle case where data is not found
    if (!cancerTypeData) {
        console.error("Cancer type not found");
        return (
            <div>
                Data Not Found
            </div>
        )
    }
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <section className="mb-16">
                <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
                    <ImageWithFallback
                        src={cancerTypeData?.heroSection.Image}
                        fallbackSrc="/fallback-image.webp"
                        alt="Adrenal Cancer Awareness"
                        className="object-cover"
                        fill
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="text-center px-4">
                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{cancerTypeData.heroSection.title}</h1>
                            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
                                {cancerTypeData.heroSection.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="mb-16">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                            <ImageWithFallback
                                src={cancerTypeData.overviewSection.Image}
                                fallbackSrc="/fallback-image.webp"
                                alt="Adrenal Glands Location"
                                className="object-cover"
                                fill
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{cancerTypeData.overviewSection.h2}</h2>
                        {cancerTypeData.overviewSection.paragraphs.map((p, index) => {
                            return (
                                <p key={index} className="text-gray-600 mb-4">{p}</p>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Symptoms Section */}
            <section className="mb-16 bg-blue-50 rounded-xl p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">{cancerTypeData.symptomsSection.h2}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cancerTypeData.symptomsSection.symptoms.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-lg text-blue-700 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Diagnosis Section */}
            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">{cancerTypeData.diagnosisSection.h2}</h2>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                        <div className="space-y-6">
                            {cancerTypeData.diagnosisSection.diagnosis.map((diagnosisStep, index) => {
                                return (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full text-sm">{diagnosisStep.index}</div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-800 mb-1">{diagnosisStep.h3}</h3>
                                            <p className="text-gray-600">
                                                {diagnosisStep.paragraph}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="lg:w-1/3">
                        <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                            <ImageWithFallback
                                src={cancerTypeData.diagnosisSection.Image}
                                fallbackSrc="/fallback-image.webp"
                                alt="Adrenal Cancer Diagnosis"
                                className="object-cover"
                                fill
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Treatment Options */}
            <section className="mb-16 bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">{cancerTypeData.treatementOptionsSection.h2}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {cancerTypeData.treatementOptionsSection.options.map((treatment, index) => {
                        return (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-xl text-gray-800 mb-3 flex items-center gap-2">
                                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">{treatment.h3.span}</span>
                                    {treatment.h3.copy}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {treatment.p}
                                </p>
                                {
                                    treatment.Image &&
                                    <div className="relative h-48 rounded overflow-hidden">
                                    <ImageWithFallback
                                        src={treatment.Image}
                                        fallbackSrc="/fallback-image.webp"
                                        alt="Adrenal Cancer Surgery"
                                        className="object-cover"
                                        fill
                                        />
                                </div>
                                    }
                            </div>
                        )
                    })}
                </div>
            </section>

            {/* Prognosis Section */}
            <section className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">{cancerTypeData.prognosisSection.h2}</h2>
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <p className="text-gray-600 mb-6">
                        {cancerTypeData.prognosisSection.paragraph}
                    </p>

                    {cancerTypeData.prognosisSection.table &&
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white rounded-lg overflow-hidden">
                                <thead className="bg-gray-100">
                                    <tr>
                                        {cancerTypeData.prognosisSection.table.headers.map((header, index) => (
                                            <th
                                                key={index}
                                                className="py-3 px-4 text-left font-semibold text-gray-700"
                                            >
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {cancerTypeData.prognosisSection.table.rows.map((row, rowIndex) => (
                                        <tr
                                            key={rowIndex}
                                            className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                                        >
                                            <td className="py-3 px-4">{row.stage}</td>
                                            <td className="py-3 px-4">{row.description}</td>
                                            <td className="py-3 px-4">{row.survival}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-linear-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('commonCta.title')}</h2>
                <p className="mb-6 max-w-2xl mx-auto">{t('commonCta.description')}</p>
                <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                    {t('commonCta.buttonText')}
                </button>
            </section>
        </div>
    )
}
