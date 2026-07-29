"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TestimonialCard from "@/components/homepage/TestimonialCard";
import { useHospitalHighlights } from "@/app/[locale]/(with nav and footer)/(Home-Page)/_data";
import { useTranslations } from "next-intl";

export const TestimonialCards = () => {
    const testimonialRef = useRef(null);
    const isInView = useInView(testimonialRef, { once: true, margin: "-100px" });
    const t = useTranslations("homepage.TestimonialCards")
    const hospitalHighlights = useHospitalHighlights()
    return (
        <section
            ref={testimonialRef}
            className=" w-full bg-gradient-to-b from-transparent via-[#dceaff30] to-white px-4 sm:px-8 lg:px-20 py-10 flex items-center justify-center"
        >
            <div className="max-w-6xl w-full space-y-10">
                {/* Heading & Subheading Animation */}
                <div className="space-y-4 text-center">
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-heading text-2xl sm:text-3xl lg:text-4xl"
                    >
                        {t('title')}
                    </motion.h1>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="font-sans text-sm sm:text-base lg:text-lg text-slate-700"
                    >
                        {t('description')}
                    </motion.p>
                </div>

                {/* Testimonial Cards with Staggered Animation */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-center">
                    {hospitalHighlights.map((cardDetails, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : {}}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: index * 0.2, // Stagger effect for each card
                            }}
                        >
                            <TestimonialCard {...cardDetails} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
