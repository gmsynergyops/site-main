"use client";

import React from 'react';
import {
    BedIcon,
    UserCircleIcon,
    HeartPulseIcon,
    AlarmClockIcon,
    ShieldCheckIcon,
    WifiIcon,
    TvIcon,
    UtensilsIcon,
    MapPinIcon,
    PhoneIcon
} from 'lucide-react';
import { ImageWithFallback } from '@/components/global/ImageWithFallback';
import { CONTACT_INFO } from '@/data/contactData';
import { useTranslations } from 'next-intl';

export const InPatientFacilities = () => {
    const t = useTranslations("inPatientFacilitiesPage");

    const facilityIcons = [
        BedIcon,
        UserCircleIcon,
        HeartPulseIcon,
        AlarmClockIcon,
        ShieldCheckIcon,
        WifiIcon,
        TvIcon,
        UtensilsIcon
    ];

    const roomImages = [
        '/economy-ward.jpg',
        '/semi-private.jpg',
        '/private-room.jpg',
        '/deluxe-room.jpg'
    ];

    const facilities = t.raw("facilities.items") as { title: string; description: string }[];
    const roomTypes = t.raw("rooms.items") as { name: string; description: string; features: string[] }[];
    const admissionSteps = t.raw("process.steps") as { title: string; description: string }[];
    const whyCol1 = t.raw("whyChooseUs.column1") as string[];
    const whyCol2 = t.raw("whyChooseUs.column2") as string[];
    const testimonials = t.raw("testimonials.items") as { name: string; quote: string; stay: string }[];

    return (
        <div className="font-sans text-gray-700">
            {/* Hero Section */}
            <section className="bg-linear-to-r from-blue-50 to-cyan-50 py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        {t("hero.title")}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t("hero.subtitle")}
                    </p>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="prose-lg text-gray-600 text-center">
                        <p>{t("overview")}</p>
                    </div>
                </div>
            </section>

            {/* Facilities Grid */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
                        {t("facilities.title")}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {facilities.map((facility, index) => {
                            const IconComponent = facilityIcons[index] || BedIcon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-500"
                                >
                                    <IconComponent className="h-10 w-10 text-blue-600 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{facility.title}</h3>
                                    <p className="text-gray-600">{facility.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Room Types */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
                        {t("rooms.title")}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {roomTypes.map((room, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                                <div className="h-48 bg-gray-200 overflow-hidden">
                                    <ImageWithFallback
                                        fallbackSrc='/fallback-image.webp'
                                        width={720}
                                        height={560}
                                        src={roomImages[index] || '/private-room.jpg'}
                                        alt={room.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{room.name}</h3>
                                    <p className="text-gray-600 mb-4">{room.description}</p>
                                    <ul className="space-y-2">
                                        {room.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Admission Process */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
                        {t("process.title")}
                    </h2>
                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
                        <div className="space-y-8 md:space-y-0 md:grid grid-cols-5 gap-4">
                            {admissionSteps.map((step, index) => (
                                <div key={index} className="relative bg-white p-6 rounded-lg shadow-sm text-center z-10">
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-blue-800">{step.title}</h3>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
                        {t("whyChooseUs.title")}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-blue-50 p-8 rounded-xl">
                            <ul className="space-y-6">
                                {whyCol1.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="h-6 w-6 text-blue-600 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-8 rounded-xl">
                            <ul className="space-y-6">
                                {whyCol2.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="h-6 w-6 text-blue-600 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
                        {t("testimonials.title")}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                                <div className="flex items-center mb-4">
                                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.stay}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto bg-blue-50 rounded-xl p-8 text-center">
                    <h2 className="text-3xl font-semibold mb-6 text-gray-800">
                        {t("helpdesk.title")}
                    </h2>
                    <div className="space-y-4 mb-8">
                        <p className="flex items-center justify-center text-gray-700">
                            <PhoneIcon className="h-5 w-5 mr-2 text-blue-600" />
                            <a href={`tel:${CONTACT_INFO.phoneNumbers.admissionDesk}`} className="hover:underline font-semibold">
                                {CONTACT_INFO.phoneNumbers.admissionDeskFormatted}
                            </a>
                        </p>
                        <p className="flex items-center justify-center text-gray-700">
                            <MapPinIcon className="h-5 w-5 mr-2 text-blue-600" />
                            {t("helpdesk.location")}
                        </p>
                        <p className="text-gray-600">
                            {t("helpdesk.timing")}
                        </p>
                    </div>
                    <a
                        href={`tel:${CONTACT_INFO.phoneNumbers.admissionDesk}`}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                    >
                        {t("helpdesk.button")}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default InPatientFacilities;
