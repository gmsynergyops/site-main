import CareerForm from '@/components/forms/CareerForm'
import React from 'react'
import { FaHeartPulse, FaGraduationCap, FaHandsHoldingChild, FaHospitalUser } from "react-icons/fa6"

/**
 * Fonts (add once, e.g. in app/layout.tsx):
 * Fraunces (display, weights 500/600), Inter (body, 400/500/600), IBM Plex Mono (labels, 500)
 *
 * <link rel="preconnect" href="https://fonts.googleapis.com" />
 * <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet" />
 */

const HOSPITAL_NAME = "Synergy Superspeciality Hospital & Cancer Institute";

const values = [
    {
        icon: FaHeartPulse,
        title: "Purpose-driven work",
        description: "Every role here — clinical or not — shows up in a patient's outcome.",
    },
    {
        icon: FaGraduationCap,
        title: "Room to grow",
        description: "Structured training, certifications, and internal mobility across departments.",
    },
    {
        icon: FaHospitalUser,
        title: "Modern facilities",
        description: "Two well-equipped centres, current protocols, and a team that keeps learning.",
    },
    {
        icon: FaHandsHoldingChild,
        title: "A team that looks out for you",
        description: "Fair scheduling, respectful leadership, and colleagues who cover for each other.",
    },
];

const departments = [
    "Operations", "Reception", "Nursing", "Maintenance",
    "Marketing", "I.T.", "TPA", "TeleCaller", "Other",
];

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

const CareersPage = () => {
    return (
        <main className="min-h-screen bg-[#F6F8F6]" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

            {/* Hero */}
            <section className="border-b border-[#E1E8E3]">
                <div className="max-w-5xl mx-auto px-6 pt-20 pb-14">
                    <span
                        className="inline-block text-xs tracking-[0.18em] uppercase text-synergy-blue/70 mb-5"
                        style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                        Careers
                    </span>
                    <h1
                        className="text-4xl sm:text-5xl leading-[1.1] text-synergy-blue mb-5 max-w-2xl"
                        style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}
                    >
                        Build a career that shows up in someone&apos;s recovery.
                    </h1>
                    <p className="text-synergy-blue/80 text-base sm:text-lg max-w-xl mb-9">
                        {HOSPITAL_NAME} is hiring across clinical and non-clinical
                        roles at both our Gorakhpur centres. Tell us a little about
                        yourself and we&apos;ll take it from there.
                    </p>
                    <a
                        href="#apply"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-synergy-blue/95 text-white text-sm font-medium hover:bg-[#163F33] transition-colors"
                    >
                        Apply now ↓
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
                    Why work here
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    {values.map(({ icon: Icon, title, description }, index) => {
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
                    We&apos;re hiring across
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
                    Apply now
                </h2>
                <p className="text-synergy-blue/80 mb-8">
                    Fill in your details and attach your resume — it takes about two minutes.
                </p>

                <div className="rounded-2xl bg-white border border-[#E1E8E3] p-6 sm:p-8">
                    <CareerForm />
                </div>
            </section>

            {/* Footer strip */}
            <footer className="border-t border-[#e2e1e8] py-8">
                <div className="max-w-5xl mx-auto px-6 text-xs text-synergy-blue/85 flex flex-col sm:flex-row justify-between gap-2">
                    <span>{HOSPITAL_NAME}</span>
                    <span>Gorakhpur, Uttar Pradesh · 273001</span>
                </div>
            </footer>
        </main>
    )
}

export default CareersPage