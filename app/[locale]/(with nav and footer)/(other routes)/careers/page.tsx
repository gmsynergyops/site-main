import CareerForm from '@/components/forms/CareerForm'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import React from 'react'
import { FaHeartPulse, FaGraduationCap, FaHandsHoldingChild, FaHospitalUser } from "react-icons/fa6"

export async function generateMetadata(props: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await props.params;
    const t = await getTranslations({ locale, namespace: "CareersPage.metadata" });

    return {
        title: t("title"),
        description: t("description"),
    };
}

const valueIcons = [FaHeartPulse, FaGraduationCap, FaHospitalUser, FaHandsHoldingChild];

const PulseDivider = () => (
    <div className="w-full flex justify-center py-2" aria-hidden="true">
        <svg width="100%" height="28" viewBox="0 0 800 28" preserveAspectRatio="none" className="max-w-5xl px-6">
            <polyline
                points="0,14 300,14 330,14 345,2 360,26 375,6 390,14 420,14 800,14"
                fill="none"
                stroke="#C9D6CE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </div>
);

const CareersPage = async (props: {
    params: Promise<{ locale: string }>;
}) => {
    const { locale } = await props.params;
    const t = await getTranslations({ locale, namespace: "CareersPage" });
    const valueItems: Array<{ title: string; description: string }> = t.raw("values.items");
    const departments: string[] = t.raw("departments.list");

    return (
        <main className="min-h-screen bg-[#F6F8F6]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

            {/* Hero */}
            <section className="border-b border-[#E1E8E3]">
                <div className="max-w-5xl mx-auto px-6 pt-20 pb-14">
                    <span
                        className="inline-block text-xs tracking-[0.18em] uppercase text-synergy-blue/70 mb-5"
                        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                        {t("hero.tag")}
                    </span>
                    <h1
                        className="text-4xl sm:text-5xl leading-[1.1] text-synergy-blue mb-5 max-w-2xl"
                        style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                    >
                        {t("hero.title")}
                    </h1>
                    <p className="text-synergy-blue/80 text-base sm:text-lg max-w-xl mb-9">
                        {t("hero.subtitle")}
                    </p>
                    <a
                        href="#apply"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-synergy-blue/95 text-white text-sm font-medium hover:bg-[#163F33] transition-colors"
                    >
                        {t("hero.applyNow")}
                    </a>
                </div>
            </section>

            <PulseDivider />

            {/* Why join us */}
            <section className="max-w-5xl mx-auto px-6 py-14">
                <h2
                    className="text-2xl sm:text-3xl text-synergy-blue mb-8"
                    style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                >
                    {t("values.title")}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    {valueItems.map(({ title, description }, index) => {
                        const Icon = valueIcons[index % valueIcons.length];
                        const isOdd = index % 2 !== 0;

                        return (
                            <div
                                key={title}
                                className={`rounded-2xl bg-white border border-[#e2e1e8] p-5 flex gap-4 ${isOdd
                                        ? "border-l-synergy-blue"
                                        : "border-l-synergy-pink"
                                    } border-l-4`}
                            >
                                <span
                                    className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center ${isOdd
                                            ? "bg-synergy-blue/15"
                                            : "bg-synergy-pink/15"
                                        }`}
                                >
                                    <Icon
                                        size={18}
                                        className={
                                            isOdd
                                                ? "text-synergy-blue"
                                                : "text-synergy-pink"
                                        }
                                    />
                                </span>

                                <div>
                                    <h3
                                        className={`text-base font-semibold mb-1 ${isOdd
                                                ? "text-synergy-blue"
                                                : "text-synergy-pink"
                                            }`}
                                    >
                                        {title}
                                    </h3>

                                    <p
                                        className={`text-sm ${isOdd
                                                ? "text-synergy-blue/80"
                                                : "text-synergy-pink/80"
                                            }`}
                                    >
                                        {description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Departments */}
            <section className="max-w-5xl mx-auto px-6 pb-14">
                <p
                    className="text-xs uppercase tracking-wide text-synergy-blue/85 mb-4"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                    {t("departments.title")}
                </p>
                <div className="flex flex-wrap gap-2">
                    {departments.map((dept) => (
                        <span
                            key={dept}
                            className="px-4 py-2 rounded-full bg-white border border-[#E1E8E3] text-sm text-[#3A483F]"
                        >
                            {dept}
                        </span>
                    ))}
                </div>
            </section>

            <PulseDivider />

            {/* Application form */}
            <section id="apply" className="max-w-3xl mx-auto px-6 py-16 scroll-mt-10">
                <h2
                    className="text-2xl sm:text-3xl text-synergy-blue mb-2"
                    style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                >
                    {t("formSection.title")}
                </h2>
                <p className="text-synergy-blue/80 mb-8">
                    {t("formSection.subtitle")}
                </p>

                <div className="rounded-2xl bg-white border border-[#E1E8E3] p-6 sm:p-8">
                    <CareerForm />
                </div>
            </section>

            {/* Footer strip */}
            <footer className="border-t border-[#e2e1e8] py-8">
                <div className="max-w-5xl mx-auto px-6 text-xs text-synergy-blue/85 flex flex-col sm:flex-row justify-between gap-2">
                    <span>{t("hospitalName")}</span>
                    <span>{t("footer.location")}</span>
                </div>
            </footer>
        </main>
    )
}

export default CareersPage