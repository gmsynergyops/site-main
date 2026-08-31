"use client";

import FaqAccordion from '@/components/homepage/FaqAccordion';
import { useGeneralQuestions } from '@/data';
import {
    Activity,
    Baby,
    Bone,
    Brain,
    Clock,
    Eye,
    HeartPulse,
    Stethoscope,
    UserCheck
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export const OutPatientClinic = () => {
    const t = useTranslations("outPatientClinicPage");
    const generalQuestions = useGeneralQuestions();

    const clinicIcons = [
        HeartPulse,
        Brain,
        Bone,
        Baby,
        Eye,
        Stethoscope
    ];

    const featureIcons = [
        Clock,
        UserCheck,
        Activity
    ];

    const clinics = t.raw("clinics.items") as { name: string; description: string }[];
    const features = t.raw("features.items") as { title: string; description: string }[];

    return (
        <div className="font-sans text-gray-700">
            {/* Hero Section */}
            <section className="relative">
                <div className="absolute inset-0 bg-blue-800/30"></div>
                <div
                    className="bg-[url('/doctor-patient.jpg')] bg-cover bg-center h-96 flex items-center"
                    aria-label="Doctor consulting with patient"
                >
                    <div className="relative max-w-6xl mx-auto px-4 text-white z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                            {t("hero.title")}
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 drop-shadow-lg max-w-2xl mx-auto">
                            {t("hero.subtitle")}
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="prose-lg text-gray-600 text-center">
                        <p>{t("intro")}</p>
                    </div>
                </div>
            </section>

            {/* Clinics Grid */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
                        {t("clinics.title")}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {clinics.map((clinic, index) => {
                            const ClinicIcon = clinicIcons[index] || HeartPulse;
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border-l-4 border-blue-500"
                                >
                                    <ClinicIcon className="h-10 w-10 text-blue-600 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{clinic.name}</h3>
                                    <p className="text-gray-600">{clinic.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Appointment CTA */}
            <section className="py-16 px-4 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">{t("cta.title")}</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        {t("cta.subtitle")}
                    </p>
                    <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-semibold transition-all">
                        {t("cta.button")}
                    </button>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
                        {t("features.title")}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const FeatIcon = featureIcons[index] || Clock;
                            return (
                                <div key={index} className="text-center p-6">
                                    <div className="bg-blue-50 h-16 w-16 mx-auto rounded-full flex items-center justify-center mb-4">
                                        <FeatIcon className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
                        {t("faqs.title")}
                    </h2>
                    <FaqAccordion items={generalQuestions} />
                </div>
            </section>
        </div>
    );
};

export default OutPatientClinic;
