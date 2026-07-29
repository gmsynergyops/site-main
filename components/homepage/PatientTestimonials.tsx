"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PatientTestimonialMarquee from "@/components/global/PatientTestimonialMarquee";
import { useTranslations } from "next-intl";

export const PatientTestimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: true }); // Triggers when 50% is in view
const t = useTranslations('homepage')
    return (
        <section className="w-full bg-gradient-to-b from-white to-indigo-100 py-10">
            <div ref={ref} className="w-full md:space-y-4 space-y-4">
                {/* Animated Heading */}
                <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }} // Animate when in view
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-heading text-2xl sm:text-3xl lg:text-4xl px-4 sm:px-8 lg:px-20 text-center"
                >
                    {t('PatientTestimonials')}
                </motion.h1>

                <PatientTestimonialMarquee />
            </div>
        </section>
    );
};
