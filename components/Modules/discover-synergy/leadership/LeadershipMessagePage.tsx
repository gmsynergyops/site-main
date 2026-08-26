"use client";

import { motion, Variants } from "framer-motion";
import { ImageWithFallback } from "@/components/global/ImageWithFallback";
import {
    ArrowDown,
    HeartHandshake,
    Quote,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
import { useInView } from "react-intersection-observer";

export type LeadershipData = {
    name: string;
    designation: string;
    qualification: string;
    image: string;

    greeting: string;

    message: string[];

    vision: {
        title: string;
        text: string;
    };

    commitment: string[];

    closing: string;

    organization: string;
};

type LeadershipMessagePageProps = LeadershipData;

const heroFadeUp = {
    hidden: {
        opacity: 1,
        y: 0,
    },
    visible: {
        opacity: 1,
        y: 0,
    },
} satisfies Variants;

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
        },
    },
} satisfies Variants;

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

export default function LeadershipMessagePage(
    props: LeadershipMessagePageProps
) {
    const {
        name,
        designation,
        qualification,
        image,
        greeting,
        message,
        vision,
        commitment,
        closing,
        organization,
    } = props;

    const [messageRef, messageInView] = useInView({
        triggerOnce: true,
        threshold: 0.08,
        rootMargin: "-50px 0px",
    });

    const [visionRef, visionInView] = useInView({
        triggerOnce: true,
        threshold: 0.15,
        rootMargin: "-50px 0px",
    });

    const [commitmentRef, commitmentInView] = useInView({
        triggerOnce: true,
        threshold: 0.08,
        rootMargin: "-50px 0px",
    });

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": name,
        "jobTitle": designation,
        "description": message[0] || `${name} - ${designation} at ${organization}`,
        "image": image.startsWith("http") ? image : `https://synergy-website-alpha.vercel.app${image}`,
        "worksFor": {
            "@type": "MedicalOrganization",
            "name": organization,
            "url": "https://synergy-website-alpha.vercel.app"
        },
        "medicalSpecialty": designation.includes("Surgical")
            ? "SurgicalOncology"
            : designation.includes("Medical")
            ? "Oncology"
            : "GynecologicOncology"
    };

    return (
        <main className="overflow-hidden bg-[#f7f8fa]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* =========================================================
                HERO
            ========================================================= */}
            <section className="relative bg-[#173b78] text-white">

                {/* Decorative background */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                    <div className="absolute -right-40 -top-40 h-125 w-125 rounded-full bg-white/[0.035]" />

                    <div className="absolute -bottom-48 -left-32 h-125 w-125 rounded-full bg-white/[0.025]" />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_30%)]" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

                    <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">

                        {/* -------------------------------------------------
                            IMAGE
                        ------------------------------------------------- */}
                        <div className="mx-auto w-full max-w-md lg:mx-0">
                            <div className="relative">

                                {/* Image frame */}
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl">

                                    <ImageWithFallback
                                        fallbackSrc="/fallback-image.webp"
                                        src={image}
                                        alt={`${name} - ${designation} at ${organization}`}
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                        className="object-cover"
                                    />

                                    {/* Image overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-[#071a35]/50 via-transparent to-transparent" />
                                </div>

                                {/* Decorative frame */}
                                <div className="absolute -bottom-4 -right-4 -z-0 h-28 w-28 rounded-br-[28px] border-b-2 border-r-2 border-blue-200/30" />

                                <div className="absolute -left-3 -top-3 h-20 w-20 rounded-tl-5 border-l-2 border-t-2 border-blue-200/30" />

                            </div>
                        </div>


                        {/* -------------------------------------------------
                            INTRO
                        ------------------------------------------------- */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={stagger}
                            className="max-w-3xl"
                        >

                            <motion.div variants={heroFadeUp}>
                                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-200">
                                    <span className="h-px w-8 bg-blue-200" />
                                    Leadership Message
                                </span>
                            </motion.div>


                            <motion.h1
                                variants={heroFadeUp}
                                className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
                            >
                                A Message from
                                <br />

                                <span className="text-blue-200">
                                    {designation.split("|")[0].trim()}
                                </span>
                            </motion.h1>


                            <motion.div
                                variants={heroFadeUp}
                                className="mt-8"
                            >
                                <h2 className="text-2xl font-semibold sm:text-3xl">
                                    {name}
                                </h2>

                                <p className="mt-2 text-base font-medium text-blue-100 sm:text-lg">
                                    {designation}
                                </p>
                            </motion.div>


                            {/* Qualifications */}
                            <motion.div
                                variants={fadeUp}
                                className="mt-7 max-w-2xl border-l border-white/20 pl-5"
                            >
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                                    Qualifications
                                </p>

                                <p className="mt-2 text-sm leading-6 text-blue-100/80">
                                    {qualification}
                                </p>
                            </motion.div>


                            {/* Greeting */}
                            <motion.div
                                variants={fadeUp}
                                className="mt-8 flex items-start gap-3"
                            >
                                <HeartHandshake className="mt-1 h-5 w-5 shrink-0 text-blue-200" />

                                <p className="text-lg font-medium leading-7 text-white/95">
                                    {greeting}
                                </p>
                            </motion.div>

                        </motion.div>

                    </div>


                    {/* Scroll indicator */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 1,
                            duration: 0.5,
                        }}
                        className="mt-12 hidden items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] text-blue-200/70 lg:flex"
                    >
                        <span>Read the message</span>
                        <ArrowDown className="h-4 w-4" />
                    </motion.div>

                </div>
            </section>


            {/* =========================================================
                MESSAGE
            ========================================================= */}
            <section
                ref={messageRef}
                className="w-full px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
            >
                <div className="mx-auto max-w-5xl">

                    {/* Section intro */}
                    <motion.div
                        initial="hidden"
                        animate={
                            messageInView
                                ? "visible"
                                : "hidden"
                        }
                        variants={stagger}
                        className="mb-12"
                    >
                        <motion.p
                            variants={fadeUp}
                            className="text-xs font-bold uppercase tracking-[0.2em] text-[#29498f]"
                        >
                            From the Leadership
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            className="mt-4 flex items-start gap-4"
                        >
                            <Quote className="mt-1 h-8 w-8 shrink-0 text-[#29498f]/30" />

                            <p className="max-w-3xl text-2xl font-semibold leading-tight text-[#152238] sm:text-3xl">
                                Healthcare is about more than treatment.
                                It is about trust, dignity, hope and
                                transforming lives.
                            </p>
                        </motion.div>
                    </motion.div>


                    {/* Message paragraphs */}
                    <motion.div
                        initial="hidden"
                        animate={
                            messageInView
                                ? "visible"
                                : "hidden"
                        }
                        variants={stagger}
                        className="space-y-7"
                    >
                        {message.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                variants={fadeUp}
                                className={`text-[15px] leading-8 text-slate-600 sm:text-base ${
                                    index === 0
                                        ? "first-letter:text-4xl first-letter:font-bold first-letter:text-[#29498f]"
                                        : ""
                                }`}
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </motion.div>

                </div>
            </section>


            {/* =========================================================
                VISION / DREAM
            ========================================================= */}
            <section
                ref={visionRef}
                className="relative px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
            >
                <div className="mx-auto max-w-7xl">

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        animate={
                            visionInView
                                ? {
                                    opacity: 1,
                                    y: 0,
                                }
                                : {}
                        }
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative overflow-hidden rounded-[28px] bg-[#173b78] px-7 py-10 text-white shadow-xl sm:px-10 sm:py-14 lg:px-16 lg:py-16"
                    >

                        {/* Background decoration */}
                        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/[0.04]" />

                        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-white/[0.035]" />

                        <div className="relative mx-auto max-w-4xl text-center">

                            <Sparkles className="mx-auto h-7 w-7 text-blue-200" />

                            <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-blue-200">
                                {vision.title}
                            </p>

                            <div className="mx-auto mt-7 h-px w-16 bg-blue-200/40" />

                            <blockquote className="mt-8 text-2xl font-medium leading-[1.5] tracking-tight text-white sm:text-3xl lg:text-4xl">
                                “{vision.text}”
                            </blockquote>

                        </div>

                    </motion.div>

                </div>
            </section>


            {/* =========================================================
                COMMITMENT
            ========================================================= */}
            <section
                ref={commitmentRef}
                className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
            >
                <div className="mx-auto max-w-7xl">

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        animate={
                            commitmentInView
                                ? {
                                    opacity: 1,
                                    y: 0,
                                }
                                : {}
                        }
                        transition={{
                            duration: 0.6,
                        }}
                        className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"
                    >

                        {/* Heading */}
                        <div>
                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef3fb] text-[#29498f]">
                                <ShieldCheck className="h-6 w-6" />
                            </span>

                            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#29498f]">
                                Looking Ahead
                            </p>

                            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#152238] sm:text-4xl">
                                Our commitment
                                <br />
                                continues.
                            </h2>

                            <div className="mt-6 h-px w-16 bg-[#29498f]" />
                        </div>


                        {/* Commitment paragraphs */}
                        <motion.div
                            initial="hidden"
                            animate={
                                commitmentInView
                                    ? "visible"
                                    : "hidden"
                            }
                            variants={stagger}
                            className="space-y-6"
                        >
                            {commitment.map((paragraph, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="flex items-start gap-4"
                                >
                                    <span className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-[#29498f]" />

                                    <p className="text-[15px] leading-8 text-slate-600 sm:text-base">
                                        {paragraph}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>

                    </motion.div>

                </div>
            </section>


            {/* =========================================================
                SIGNATURE
            ========================================================= */}
            <section className="border-t border-slate-200 bg-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-7xl">

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="flex flex-col items-center text-center sm:items-end sm:text-right"
                    >

                        <p className="text-sm italic text-slate-500">
                            {closing}
                        </p>

                        <p className="mt-2 text-2xl font-bold text-[#152238]">
                            {name}
                        </p>

                        <p className="mt-1 text-sm font-medium text-[#29498f]">
                            {designation}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                            {organization}
                        </p>

                    </motion.div>

                </div>
            </section>

        </main>
    );
}