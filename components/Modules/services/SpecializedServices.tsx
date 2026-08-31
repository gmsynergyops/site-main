"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import {
    Check,
    HeartPulse,
    Phone,
    ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Link } from '@/i18n/navigation';
import { GiSiren } from "react-icons/gi";
import { CONTACT_INFO } from "@/data/contactData";
import { useTranslations } from "next-intl";
import {
    useSpecializedServicesData,
    serviceKeys,
    ServiceKey,
    Block,
} from "@/data/specializedServicesData";

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
        <div className="border-b border-slate-200 p-6 sm:p-8 lg:p-10 lg:even:border-l lg:border-slate-200">
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

function SpecializedServicesContent() {
    const t = useTranslations("specializedServicesPage");
    const services = useSpecializedServicesData();
    const searchParams = useSearchParams();

    // Derive active tab directly from URL search params without triggering cascading effect renders
    const paramTab = (() => {
        const raw = (searchParams.get("tab") || searchParams.get("service") || "").toUpperCase();
        if (raw === "ICU" || raw === "OT" || raw === "PHYSIOTHERAPY") {
            return raw as ServiceKey;
        }
        return null;
    })();

    const [selectedTab, setSelectedTab] = useState<ServiceKey>(() => {
        if (typeof window !== "undefined" && window.location.hash) {
            const hash = window.location.hash.replace("#", "").toUpperCase();
            if (hash === "ICU" || hash === "OT" || hash === "PHYSIOTHERAPY") {
                return hash as ServiceKey;
            }
        }
        return "ICU";
    });

    const activeTab = paramTab || selectedTab;

    const [prevTab, setPrevTab] = useState<ServiceKey>(activeTab);
    const [activeImage, setActiveImage] = useState(0);

    // Adjust state during render when tab changes (React recommended pattern)
    if (prevTab !== activeTab) {
        setPrevTab(activeTab);
        setActiveImage(0);
    }

    const service = services[activeTab];
    const Icon = service.icon;

    // Fallback support for external hash changes (#icu, #ot, #physiotherapy)
    useEffect(() => {
        const handleHash = () => {
            if (typeof window !== "undefined" && window.location.hash) {
                const hash = window.location.hash.replace("#", "").toUpperCase();
                if (hash === "ICU" || hash === "OT" || hash === "PHYSIOTHERAPY") {
                    setSelectedTab(hash as ServiceKey);
                }
            }
        };
        window.addEventListener("hashchange", handleHash);
        return () => window.removeEventListener("hashchange", handleHash);
    }, []);

    useEffect(() => {
        if (service.images.length <= 1) return;
        const interval = setInterval(() => {
            setActiveImage((prev) => (prev + 1) % service.images.length);
        }, 4500);
        return () => clearInterval(interval);
    }, [activeTab, service.images.length]);

    const handleTabSelect = (key: ServiceKey) => {
        setSelectedTab(key);
        setActiveImage(0);
        if (typeof window !== "undefined") {
            const url = new URL(window.location.href);
            url.searchParams.set("tab", key.toLowerCase());
            url.searchParams.delete("service");
            url.hash = "";
            window.history.replaceState(null, "", url.pathname + url.search);
        }
    };

    return (
        <section id="specialized-services" className={`${body.className} relative overflow-hidden bg-[#F6F8FA] py-16 sm:py-20 lg:py-24`}>
            <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">

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
                        {t("header.eyebrow")}
                        <span className="h-px w-7 bg-[#0E7C86]" />
                    </span>

                    <h2 className={`${display.className} text-3xl font-bold tracking-tight text-[#10233A] sm:text-4xl lg:text-5xl`}>
                        {t("header.title")}
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                        {t("header.subtitle")}
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
                                    onClick={() => handleTabSelect(key)}
                                    className={`relative flex shrink-0 items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all sm:px-6 ${active ? "bg-[#10233A] text-white shadow-md" : "text-slate-600 hover:bg-slate-50"
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
                                <div className="relative min-h-105 overflow-hidden lg:min-h-140">
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

                                    <div className="absolute inset-0 bg-linear-to-t from-[#0F2438]/85 via-[#0F2438]/10 to-transparent" />

                                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
                                        <div>
                                            <p className={`${mono.className} text-2.5 font-semibold uppercase tracking-[0.22em] text-white/70`}>
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
                                                        className={`h-1.5 rounded-full transition-all ${activeImage === index ? "w-7 bg-white" : "w-1.5 bg-white/50"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* CONTENT PANEL */}
                                <div className="relative overflow-hidden bg-linear-to-br from-[#0F2438] to-synergy-blue px-6 py-10 text-white sm:px-10 lg:px-12 lg:py-12">
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
                                            <Link href={`/book-appointment?department=${encodeURIComponent(service.shortLabel || service.title)}`}>
                                                <button className="rounded-lg bg-[#D6336C] px-5 py-2.5 text-sm font-medium text-white shadow-md transition-colors hover:bg-[#bb2a5c]">
                                                    {t("buttons.bookAppointment")}
                                                </button>
                                            </Link>
                                            <a
                                                href={`tel:${CONTACT_INFO.phoneNumbers.emergency}`}
                                                className="flex items-center gap-2 rounded-lg border border-white/25 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                                            >
                                                <Phone className="h-3.5 w-3.5" />
                                                {t("buttons.emergencyHotline")}
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
                                    <p className={`${mono.className} text-xs font-semibold uppercase tracking-[0.2em] text-[#0E7C86]`}>{t("sections.whatWeOffer")}</p>
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
                            <div className="border-t border-slate-200 bg-linear-to-br from-[#0F2438] to-synergy-blue px-6 py-10 sm:px-10 lg:px-14 lg:py-12">
                                <p className={`${mono.className} text-xs font-semibold uppercase tracking-[0.2em] text-[#7FD1C6]`}>{t("sections.synergyDifference")}</p>
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
                                                    {t("sections.ourCommitment")}
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
                        <div className="shrink-0">
                            <GiSiren
                                className="size-7 transition-colors duration-200 group-hover:text-white text-red-500" 
                            />
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-red-800">{t("emergencyBanner.title")}</h3>
                            <div className="mt-2 text-sm text-red-700">
                                <p>
                                    {t.rich("emergencyBanner.description", {
                                        phone: CONTACT_INFO.phoneNumbers.emergencyFormatted,
                                        phoneLink: (chunks) => <strong>{chunks}</strong>,
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default function SpecializedServices() {
    return (
        <Suspense fallback={null}>
            <SpecializedServicesContent />
        </Suspense>
    );
}