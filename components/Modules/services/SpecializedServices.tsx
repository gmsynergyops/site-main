"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import {
    Activity,
    BedDouble,
    Check,
    HeartPulse,
    PersonStanding,
    Phone,
    Scissors,
    ShieldCheck,
    Siren,
    Syringe,
    Users,
} from "lucide-react";
import Image from "next/image";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { useState, useEffect } from "react";
import type { LucideIcon } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Type pairing                                                       */
/*  Space Grotesk = structure/headings, IBM Plex Sans = body copy,     */
/*  IBM Plex Mono = stat read-outs + eyebrow labels — a monitor-panel  */
/*  cadence that fits a critical-care / surgical-care subject.         */
/* ------------------------------------------------------------------ */

const display = Space_Grotesk({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    variable: "--font-display",
});

const body = IBM_Plex_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-body",
});

const mono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "500"],
    variable: "--font-mono",
});

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/*  Only ICU, OT and Physiotherapy have confirmed client copy.         */
/*  NICU and Endoscopy are intentionally left out until real content   */
/*  is provided — add another key to `services` when it's ready.       */
/* ------------------------------------------------------------------ */

type ServiceKey = "ICU" | "OT" | "PHYSIOTHERAPY";

type StatItem = { value: string; label: string };
type ChecklistItem = { kind: "line"; text: string } | { kind: "card"; title: string; desc: string };
type Block = { title: string; icon: LucideIcon; type: "check" | "tag"; items: string[] };

type Service = {
    label: string;
    shortLabel: string;
    title: string;
    subtitle: string;
    description: string;
    secondaryDescription: string;
    icon: LucideIcon;
    stats: StatItem[];
    servicesTitle: string;
    serviceItems: ChecklistItem[];
    blocks: Block[];
    whyTitle: string;
    why: string[];
    commitment?: string;
    images: string[];
};

const line = (text: string): ChecklistItem => ({ kind: "line", text });

const services: Record<ServiceKey, Service> = {
    ICU: {
        label: "Intensive Care Unit",
        shortLabel: "ICU",
        title: "Advanced Critical Care.",
        subtitle: "Compassionate Healing.",
        description:
            "At Synergy Super Speciality Hospital & Cancer Institute, our Intensive Care Unit is designed to provide comprehensive, round-the-clock care for patients with life-threatening illnesses, severe injuries, and post-operative critical conditions.",
        secondaryDescription:
            "Our multidisciplinary critical care team combines clinical expertise with advanced monitoring technology to deliver timely, evidence-based treatment in a safe and compassionate environment.",
        icon: HeartPulse,
        stats: [
            { value: "24×7", label: "Critical care" },
            { value: "Multi", label: "Parameter monitoring" },
            { value: "Adult", label: "Dedicated ICU" },
        ],
        servicesTitle: "Our ICU Services",
        serviceItems: [
            "24×7 Critical Care Management",
            "Multi-Parameter Bedside Monitoring",
            "Advanced Mechanical Ventilator Support",
            "High Flow Nasal Oxygen (HFNO)",
            "Non-Invasive Ventilation (BiPAP/CPAP)",
            "Invasive Hemodynamic Monitoring",
            "Central Venous & Arterial Line Monitoring",
            "Emergency Resuscitation & Code Blue Response",
            "Post-Operative Intensive Care",
            "Sepsis & Septic Shock Management",
            "Stroke & Neurological Critical Care",
            "Cardiac Monitoring & Critical Cardiac Care",
            "Trauma & Accident Critical Care",
            "Renal Support & Dialysis Coordination",
            "Nutritional & Rehabilitation Support",
        ].map(line),
        blocks: [
            {
                title: "Conditions We Treat",
                icon: Siren,
                type: "tag",
                items: [
                    "Severe infections and sepsis",
                    "Respiratory failure",
                    "Cardiac emergencies",
                    "Stroke & neurological disorders",
                    "Multi-organ failure",
                    "Poisoning & drug overdose",
                    "Major trauma & road traffic accidents",
                    "Post-operative complications",
                    "Acute kidney injury",
                    "Cancer-related critical illnesses",
                    "Shock & emergency conditions",
                ],
            },
            {
                title: "ICU Facilities",
                icon: BedDouble,
                type: "check",
                items: [
                    "Dedicated Adult ICU",
                    "Central Oxygen & Medical Gas Pipeline",
                    "Isolation Beds for Infection Control",
                    "Computerized Documentation",
                    "Infusion & Syringe Pumps",
                    "Defibrillator & Crash Cart",
                    "Portable Ultrasound Support",
                    "ABG (Arterial Blood Gas) Analysis",
                    "Emergency Laboratory & Imaging Support",
                    "24×7 Pharmacy Services",
                    "Strict Infection Prevention Protocols",
                ],
            },
        ],
        whyTitle: "Why Choose Synergy ICU?",
        why: [
            "Highly Experienced Critical Care Team",
            "24×7 Intensivist Supervision",
            "Evidence-Based Treatment Protocols",
            "NABH Standard Patient Safety Practices",
            "Advanced Life Support Equipment",
            "Multidisciplinary Consultant Support",
            "Compassionate Nursing Care",
            "Rapid Emergency Response System",
            "Patient & Family-Centered Care",
        ],
        commitment:
            "At Synergy, every second matters. Our ICU is committed to delivering timely interventions, continuous monitoring, and compassionate care to improve survival and support faster recovery for critically ill patients.",
        images: ["/specializations/icu/1.jpeg", "/specializations/icu/2.jpeg", "/specializations/icu/3.jpeg"],
    },

    OT: {
        label: "Operation Theatres",
        shortLabel: "OT",
        title: "Precision Surgery.",
        subtitle: "Advanced Technology. Uncompromising Safety.",
        description:
            "Our Operation Theatre Complex is designed to deliver safe, efficient, and high-quality surgical care across multiple specialties. Equipped with modern surgical technology and built to stringent infection-control standards, our OT complex supports routine, advanced, and emergency surgeries.",
        secondaryDescription:
            "With three dedicated Operation Theatres and a team of highly experienced surgeons, anaesthesiologists, OT technicians, and perioperative nurses, Synergy has successfully performed more than 5,000 surgeries.",
        icon: Syringe,
        stats: [
            { value: "3", label: "Dedicated operation theatres" },
            { value: "1", label: "Advanced modular OT" },
            { value: "5,000+", label: "Successful surgeries" },
            { value: "24×7", label: "Emergency surgical services" },
        ],
        servicesTitle: "Our OT Infrastructure",
        serviceItems: [
            {
                kind: "card",
                title: "Modular Operation Theatre",
                desc: "State-of-the-art infrastructure built for advanced and complex surgeries to international standards.",
            },
            {
                kind: "card",
                title: "Major Operation Theatre",
                desc: "Dedicated for major surgical procedures requiring comprehensive anaesthesia support and perioperative care.",
            },
            {
                kind: "card",
                title: "Minor Operation Theatre",
                desc: "Built for minimally invasive, day-care and minor procedures — faster recovery, shorter hospital stay.",
            },
        ],
        blocks: [
            {
                title: "Advanced OT Features",
                icon: Activity,
                type: "check",
                items: [
                    "Advanced LED Shadowless Operating Lights",
                    "Modern Anaesthesia Workstations",
                    "Multiparameter Patient Monitoring",
                    "High-End Electrosurgical Units",
                    "Advanced Surgical Instrumentation",
                    "Central Medical Gas Pipeline System",
                    "HEPA Filtered Air Handling System",
                    "Positive Pressure Ventilation",
                    "Laminar Air Flow Technology",
                    "Sterile OT Environment",
                    "Dedicated Pre-Operative & Recovery Areas",
                    "Fully Equipped Emergency Crash Cart",
                    "Uninterrupted Power Backup",
                ],
            },
            {
                title: "Our Surgical Expertise",
                icon: Scissors,
                type: "tag",
                items: [
                    "Surgical Oncology",
                    "General Surgery",
                    "Laparoscopic Surgery",
                    "Gastrointestinal Surgery",
                    "Head & Neck Surgery",
                    "Breast Surgery",
                    "Gynaecological Surgery",
                    "Urological Procedures",
                    "Orthopaedic Surgery",
                    "Trauma & Emergency Surgery",
                    "Plastic & Reconstructive Surgery",
                    "Minor Day-Care Procedures",
                ],
            },
            {
                title: "Patient Safety Protocols",
                icon: ShieldCheck,
                type: "check",
                items: [
                    "WHO Surgical Safety Checklist",
                    "NABH-Compliant OT Protocols",
                    "Strict Sterilization & CSSD Support",
                    "Surgical Site Infection Prevention Measures",
                    "Time-Out & Patient Identification Protocol",
                    "Safe Anaesthesia Practices",
                    "Continuous Intraoperative Monitoring",
                    "Dedicated Infection Control Team",
                ],
            },
            {
                title: "Expert Surgical Team",
                icon: Users,
                type: "check",
                items: [
                    "Experienced Consultant Surgeons",
                    "Expert Surgical Oncologists",
                    "Skilled Anaesthesiologists",
                    "Trained OT Nurses",
                    "Certified OT Technicians",
                    "Infection Control Professionals",
                    "Critical Care & Emergency Support Team",
                ],
            },
        ],
        whyTitle: "Why Choose Synergy Operation Theatres?",
        why: [
            "5,000+ Successful Surgeries",
            "Three Dedicated Operation Theatres",
            "Advanced Modular OT Technology",
            "Highly Experienced Surgical Team",
            "24×7 Emergency Surgical Services",
            "NABH Standard Safety Protocols",
            "Advanced Anaesthesia & Monitoring Systems",
            "Strict Infection Prevention Measures",
            "Comprehensive Multidisciplinary Surgical Care",
            "Excellent Clinical Outcomes with Compassionate Care",
        ],
        images: ["/specializations/ot/1.jpeg", "/specializations/ot/2.jpeg", "/specializations/ot/3.jpeg"],
    },

    PHYSIOTHERAPY: {
        label: "Physiotherapy & Rehabilitation",
        shortLabel: "Physiotherapy",
        title: "Restoring Mobility.",
        subtitle: "Relieving Pain. Rebuilding Lives.",
        description:
            "At Synergy Super Speciality Hospital & Cancer Institute, our Physiotherapy & Rehabilitation Department is dedicated to helping patients recover faster, reduce pain, improve mobility, and regain independence.",
        secondaryDescription:
            "Our experienced physiotherapists provide personalized rehabilitation programs using evidence-based techniques and modern therapeutic equipment for patients of all age groups.",
        icon: PersonStanding,
        stats: [
            { value: "1:1", label: "Personalized therapy" },
            { value: "All", label: "Age groups" },
            { value: "Evidence", label: "Based care" },
        ],
        servicesTitle: "Our Physiotherapy Services",
        serviceItems: [
            "Orthopaedic Rehabilitation",
            "Post-Operative Physiotherapy",
            "Neurological Rehabilitation",
            "Sports Injury Rehabilitation",
            "Pain Management Therapy",
            "Spine & Back Pain Rehabilitation",
            "Joint Replacement Rehabilitation",
            "Stroke Rehabilitation",
            "Cancer Rehabilitation",
            "Geriatric Physiotherapy",
            "Pediatric Physiotherapy",
            "Balance & Gait Training",
            "Exercise Therapy",
            "Electrotherapy",
        ].map(line),
        blocks: [
            {
                title: "Rehabilitation Highlights",
                icon: Activity,
                type: "check",
                items: [
                    "Comprehensive Rehabilitation Services",
                    "Personalized One-to-One Therapy Sessions",
                    "Advanced Electrotherapy Equipment",
                    "Specialized Orthopaedic & Neurological Rehabilitation",
                    "Post-Operative Recovery Programs",
                    "Cancer & Palliative Rehabilitation",
                    "Experienced Physiotherapy Team",
                    "Evidence-Based Treatment Protocols",
                    "Focus on Faster Recovery & Improved Quality of Life",
                ],
            },
        ],
        whyTitle: "Why Choose Synergy Physiotherapy?",
        why: [
            "Personalized Treatment Plans",
            "Experienced Physiotherapists",
            "Advanced Rehabilitation Techniques",
            "Pain Relief & Functional Recovery",
            "Post-Surgical Rehabilitation",
            "Stroke & Neurological Care",
            "Cancer Rehabilitation Support",
            "Patient-Centered, Evidence-Based Care",
        ],
        images: ["/specializations/physio/1.jpeg", "/specializations/physio/2.jpeg", "/specializations/physio/3.jpeg"],
    },
};

const serviceKeys: ServiceKey[] = ["ICU", "OT", "PHYSIOTHERAPY"];

/* ------------------------------------------------------------------ */
/*  Signature element — a heartbeat / trace line used as a divider.    */
/*  It nods to vitals-monitoring, the thread running through ICU, OT   */
/*  and rehab alike: reading the patient, moment to moment.            */
/* ------------------------------------------------------------------ */

const PulseLine = ({ animKey, className = "" }: { animKey: string; className?: string }) => (
    <svg viewBox="0 0 400 32" preserveAspectRatio="none" className={className} aria-hidden="true">
        <motion.path
            key={animKey}
            d="M0 16 H128 L142 4 L158 28 L172 16 H208 L220 8 L232 24 L244 16 H400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
        />
    </svg>
);

/* ------------------------------------------------------------------ */
/*  Motion presets                                                     */
/* ------------------------------------------------------------------ */

const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

/* ------------------------------------------------------------------ */
/*  Info block — renders a titled group as checkmarks or tag pills     */
/* ------------------------------------------------------------------ */

function InfoBlock({ block }: { block: Block }) {
    const Icon = block.icon;
    return (
        <div className="border-b border-slate-200 p-6 sm:p-8 lg:p-10 lg:[&:nth-child(even)]:border-l lg:border-slate-200">
            <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E7F3F3] text-[#0E7C86]">
                    <Icon className="h-5 w-5" />
                </span>
                <h4 className={`${display.className} text-lg sm:text-xl font-bold text-[#10233A]`}>{block.title}</h4>
            </div>

            {block.type === "check" && (
                <div className="space-y-3">
                    {block.items.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E7F3F3] text-[#0E7C86]">
                                <Check className="h-3.5 w-3.5" />
                            </span>
                            <span className="text-sm leading-6 text-slate-600">{item}</span>
                        </div>
                    ))}
                </div>
            )}

            {block.type === "tag" && (
                <div className="flex flex-wrap gap-2">
                    {block.items.map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-[#BFE0E0] bg-[#E7F3F3] px-3 py-1.5 text-xs font-medium text-[#0E7C86] sm:text-sm"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function SpecializedServices() {
    const [activeTab, setActiveTab] = useState<ServiceKey>("ICU");
    const [activeImage, setActiveImage] = useState(0);

    const service = services[activeTab];
    const Icon = service.icon;

    useEffect(() => {
        if (service.images.length <= 1) return;
        const interval = setInterval(() => {
            setActiveImage((prev) => (prev + 1) % service.images.length);
        }, 4500);
        return () => clearInterval(interval);
    }, [activeTab, service.images.length]);

    return (
        <section id="specialized-services" className={`${body.className} relative overflow-hidden bg-[#F6F8FA] py-16 sm:py-20 lg:py-24`}>
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-10 max-w-3xl text-center"
                >
                    <span className={`${mono.className} mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0E7C86]`}>
                        <span className="h-px w-7 bg-[#0E7C86]" />
                        Specialized Care
                        <span className="h-px w-7 bg-[#0E7C86]" />
                    </span>

                    <h2 className={`${display.className} text-3xl font-bold tracking-tight text-[#10233A] sm:text-4xl lg:text-5xl`}>
                        Specialized Services
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                        Advanced clinical care, modern infrastructure and experienced medical teams focused on better patient outcomes.
                    </p>
                </motion.div>

                {/* TABS */}
                <div className="mb-8 flex justify-center">
                    <div className="inline-flex max-w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
                        {serviceKeys.map((key) => {
                            const svc = services[key];
                            const TabIcon = svc.icon;
                            const active = activeTab === key;
                            return (
                                <button
                                    key={key}
                                    type="button"
                                    onClick={() => {
                                        setActiveTab(key);
                                        setActiveImage(0);
                                    }}
                                    className={`relative flex shrink-0 items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all sm:px-6 ${
                                        active ? "bg-[#10233A] text-white shadow-md" : "text-slate-600 hover:bg-slate-50"
                                    }`}
                                >
                                    <TabIcon className={`h-4 w-4 ${active ? "text-[#D6336C]" : "text-[#0E7C86]"}`} />
                                    <span>{svc.shortLabel}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,35,65,0.08)]">

                            <div className="grid lg:grid-cols-[1fr_1fr]">

                                {/* IMAGE */}
                                <div className="relative min-h-[420px] overflow-hidden lg:min-h-[560px]">
                                    {service.images.map((image, index) => (
                                        <motion.div
                                            key={image}
                                            initial={false}
                                            animate={{ opacity: activeImage === index ? 1 : 0, scale: activeImage === index ? 1 : 1.04 }}
                                            transition={{ opacity: { duration: 0.8, ease: "easeInOut" }, scale: { duration: 5, ease: "linear" } }}
                                            className="absolute inset-0"
                                        >
                                            <Image
                                                src={image}
                                                alt={`${service.label} at Synergy Super Speciality Hospital`}
                                                fill
                                                priority={index === 0}
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    ))}

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2438]/85 via-[#0F2438]/10 to-transparent" />

                                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
                                        <div>
                                            <p className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70`}>
                                                Synergy Super Speciality Hospital
                                            </p>
                                            <p className="mt-1 text-sm font-medium text-white">{service.label}</p>
                                        </div>

                                        {service.images.length > 1 && (
                                            <div className="flex items-center gap-1.5">
                                                {service.images.map((_, index) => (
                                                    <button
                                                        key={index}
                                                        type="button"
                                                        onClick={() => setActiveImage(index)}
                                                        aria-label={`View image ${index + 1}`}
                                                        className={`h-1.5 rounded-full transition-all ${
                                                            activeImage === index ? "w-7 bg-white" : "w-1.5 bg-white/50"
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* CONTENT PANEL */}
                                <div className="relative overflow-hidden bg-gradient-to-br from-[#0F2438] to-synergy-blue px-6 py-10 text-white sm:px-10 lg:px-12 lg:py-12">
                                    <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/5" />
                                    <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/5" />

                                    <div className="relative flex h-full flex-col">
                                        <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                                            <Icon className="h-7 w-7" />
                                        </div>

                                        <p className={`${mono.className} mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#7FD1C6]`}>
                                            {service.label}
                                        </p>

                                        <h3 className={`${display.className} text-3xl font-bold leading-tight sm:text-4xl`}>{service.title}</h3>
                                        <p className={`${display.className} mt-1 text-xl font-medium text-[#7FD1C6] sm:text-2xl`}>{service.subtitle}</p>

                                        <PulseLine animKey={activeTab} className="my-4 h-5 w-32 text-[#D6336C]" />

                                        <p className="max-w-2xl text-sm leading-7 text-white/85 sm:text-base">{service.description}</p>
                                        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">{service.secondaryDescription}</p>

                                        <div className="mt-7 flex flex-wrap gap-3">
                                            <button className="rounded-lg bg-[#D6336C] px-5 py-2.5 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#bb2a5c]">
                                                Book an Appointment
                                            </button>
                                            <a
                                                href="tel:+911800570-6595"
                                                className="flex items-center gap-2 rounded-lg border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                                            >
                                                <Phone className="h-3.5 w-3.5" />
                                                Emergency Hotline
                                            </a>
                                        </div>

                                        {/* Stats */}
                                        <div className="mt-auto pt-8">
                                            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                                                {service.stats.map((stat) => (
                                                    <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-sm">
                                                        <div className={`${mono.className} text-xl font-semibold text-white sm:text-2xl`}>{stat.value}</div>
                                                        <div className="mt-1 text-[11px] leading-4 text-white/60 sm:text-xs">{stat.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SERVICE LIST */}
                            <div className="border-t border-slate-200 px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
                                <div className="mb-7">
                                    <p className={`${mono.className} text-xs font-semibold uppercase tracking-[0.2em] text-[#0E7C86]`}>What We Offer</p>
                                    <h4 className={`${display.className} mt-2 text-2xl font-bold text-[#10233A]`}>{service.servicesTitle}</h4>
                                </div>

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.1 }}
                                    className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
                                >
                                    {service.serviceItems.map((item) =>
                                        item.kind === "line" ? (
                                            <motion.div
                                                key={item.text}
                                                variants={itemVariants}
                                                className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4 transition-all hover:border-[#0E7C86]/30 hover:bg-white hover:shadow-sm"
                                            >
                                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E7F3F3] text-[#0E7C86]">
                                                    <Check className="h-3.5 w-3.5" />
                                                </span>
                                                <span className="text-sm leading-6 text-slate-600">{item.text}</span>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key={item.title}
                                                variants={itemVariants}
                                                className="rounded-xl border border-l-2 border-slate-200 border-l-[#0E7C86] bg-slate-50/60 p-5 transition-all hover:bg-white hover:shadow-sm"
                                            >
                                                <p className="mb-1.5 text-sm font-semibold text-[#10233A]">{item.title}</p>
                                                <p className="text-sm leading-6 text-slate-600">{item.desc}</p>
                                            </motion.div>
                                        )
                                    )}
                                </motion.div>
                            </div>

                            {/* EXTRA INFO BLOCKS */}
                            {service.blocks.length > 0 && (
                                <div className="grid border-t border-slate-200 lg:grid-cols-2">
                                    {service.blocks.map((block) => (
                                        <InfoBlock key={block.title} block={block} />
                                    ))}
                                </div>
                            )}

                            {/* WHY CHOOSE */}
                            <div className="border-t border-slate-200 bg-gradient-to-br from-[#0F2438] to-synergy-blue px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
                                <p className={`${mono.className} text-xs font-semibold uppercase tracking-[0.2em] text-[#7FD1C6]`}>The Synergy Difference</p>
                                <h4 className={`${display.className} mt-2 mb-7 text-2xl font-bold text-white`}>{service.whyTitle}</h4>

                                <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                                    {service.why.map((item) => (
                                        <div key={item} className="flex items-start gap-3">
                                            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#D6336C]" />
                                            <span className="text-sm leading-6 text-white/90">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* COMMITMENT */}
                            {service.commitment && (
                                <div className="border-t border-slate-200 px-6 py-8 sm:px-10 lg:px-14">
                                    <div className="rounded-2xl bg-[#E7F3F3] p-6 sm:p-8">
                                        <div className="flex gap-4">
                                            <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0E7C86] text-white sm:flex">
                                                <HeartPulse className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className={`${mono.className} text-xs font-semibold uppercase tracking-[0.18em] text-[#0E7C86]`}>
                                                    Our Commitment
                                                </p>
                                                <p className="mt-3 text-sm leading-7 text-[#10233A]">{service.commitment}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* EMERGENCY BANNER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="mt-10 rounded-r-lg border-l-4 border-red-500 bg-red-50 p-4"
                >
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">Emergency Services Available 24/7</h3>
                            <div className="mt-2 text-sm text-red-700">
                                <p>
                                    For emergency cases in any of these specialized units, please call our emergency hotline at{" "}
                                    <strong>+91 (1800)-570-6595</strong> or proceed directly to our emergency department.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}