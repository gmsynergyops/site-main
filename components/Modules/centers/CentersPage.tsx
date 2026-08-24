"use client";

import { usePathname } from "next/navigation";
import { useCentersData } from "@/data/centersData";
import { ImageWithFallback } from "@/components/global/ImageWithFallback";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  MdArrowForward,
  MdDirections,
  MdLocationOn,
  MdPhone,
} from "react-icons/md";
import { CONTACT_INFO } from "@/data/contactData";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 text-synergy-blue mt-1 mr-2 shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 01-1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      clipRule="evenodd"
    />
  </svg>
);

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const newYorkTypography = {
  h1: "text-4xl md:text-5xl font-display font-bold tracking-tight",
  h2: "text-3xl font-display font-semibold",
  h3: "text-2xl font-display font-semibold",
  body: "text-gray-700 leading-relaxed font-sans",
};

export default function CentersPage() {
  const pathname = usePathname();

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const slug = pathname?.split("/").filter(Boolean).pop() || "";

  const centersData = useCentersData();

  const pageData = centersData.find((page) => page.slug === slug);

  /*
   * ------------------------------------------------------------
   * PAGE NOT FOUND
   * ------------------------------------------------------------
   */

  if (!pageData) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-mono text-synergy-blue/50 mb-4">
            Centres
          </p>

          <h1 className="text-4xl font-display font-bold text-gray-900 mb-5">
            Page Not Found
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            The requested centre page does not exist.
          </p>

          <Link
            href="/centers/network"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-synergy-blue text-white font-medium hover:opacity-90 transition"
          >
            View Our Centres
            <MdArrowForward size={18} />
          </Link>
        </div>
      </main>
    );
  }

  /*
   * ------------------------------------------------------------
   * WHETHER THIS PAGE CONTAINS PHYSICAL CENTRES
   * ------------------------------------------------------------
   *
   * `network` now has a `centers` array in the translation data.
   *
   * `outstation-support` and `find-center` don't, so those pages
   * automatically fall back to the generic sections below.
   */
  const hasCenters = Boolean(
    pageData.centers?.length
  );

  const isFindCenter = pageData.slug === "find-center";

  const isOutstation = pageData.slug === "outstation-support";

  return (
    <main className="min-h-screen flex flex-col">
      {/* =========================================================
          HERO
      ========================================================== */}

      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mb-16 md:mb-20 mx-auto max-w-7xl w-full"
      >
        <motion.div
          variants={itemVariants}
          className="relative h-100 md:h-125 rounded-2xl overflow-hidden shadow-xl"
        >
          <ImageWithFallback
            fallbackSrc="/fallback-image.webp"
            src={pageData.bannerImage}
            alt={pageData.name}
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

          <div className="absolute bottom-2.5 left-0 right-0 w-full px-4 flex justify-center z-10">
            <div className="w-full max-w-4xl p-6 md:p-10 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/50 shadow-[inset_0_0_20px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.2)] text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" />

              <motion.h1
                variants={itemVariants}
                className={`${newYorkTypography.h1} text-white mb-3 md:mb-4 relative z-10 [text-shadow:0_0_20px_rgba(255,255,255,0.8),0_0_5px_rgba(255,255,255,1)]`}
              >
                {pageData.heroTitle}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-white font-serif max-w-3xl mx-auto font-medium relative z-10 [text-shadow:0_0_15px_rgba(255,255,255,0.6)]"
              >
                {pageData.heroSubtitle}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.section>
      {/* =========================================================
          PAGE CONTENT
      ========================================================== */}

      {hasCenters ? (
        /* =======================================================
           NETWORK / ACTUAL CENTRES
        ======================================================== */

        <motion.section
          ref={contentRef}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto text-center mb-12 md:mb-16 px-4"
          >
            <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-mono text-synergy-blue/50 mb-4">
              <span className="w-8 h-px bg-synergy-pink" />
              Our Centres
              <span className="w-8 h-px bg-synergy-pink" />
            </span>

            <h2
              className="text-3xl md:text-5xl text-synergy-blue mb-5"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontWeight: 600,
              }}
            >
              Care, where it matters.
            </h2>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Synergy currently operates two centres in Gorakhpur, helping
              patients access specialised cancer care closer to home.
            </p>
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            {pageData.centers!.map((center, index) => (
              <motion.article
                key={center.id}
                variants={itemVariants}
                className="relative"
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                    {/* Centre Information */}

                    <div
                      className={cn(
                        "rounded-3xl p-7 md:p-10 border shadow-sm flex flex-col justify-between",
                        center.accent === "blue"
                          ? "bg-blue-50/70 border-blue-100"
                          : "bg-pink-50/70 border-pink-100"
                      )}
                    >
                      <div>
                        <div className="flex items-center gap-4 mb-7">
                          <span
                            className={cn(
                              "text-sm font-mono tracking-widest",
                              center.accent === "blue"
                                ? "text-synergy-blue"
                                : "text-synergy-pink"
                            )}
                          >
                            {center.number}
                          </span>

                          <span className="w-10 h-px bg-black/10" />

                          <span className="text-xs uppercase tracking-[0.15em] text-gray-500">
                            {center.tag}
                          </span>
                        </div>

                        <h3
                          className="text-3xl md:text-4xl leading-tight text-synergy-blue mb-5"
                          style={{
                            fontFamily: "'Fraunces', Georgia, serif",
                            fontWeight: 600,
                          }}
                        >
                          {center.shortName}
                        </h3>

                        <p className="text-sm md:text-base font-semibold text-gray-800 mb-5">
                          {center.name}
                        </p>

                        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                          {center.description}
                        </p>

                        <div className="flex items-start gap-3">
                          <MdLocationOn
                            size={23}
                            className={cn(
                              "shrink-0 mt-0.5",
                              center.accent === "blue"
                                ? "text-synergy-blue"
                                : "text-synergy-pink"
                            )}
                          />

                          <div>
                            <p className="text-xs uppercase tracking-[0.15em] font-mono text-gray-400 mb-1">
                              Address
                            </p>

                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                              {center.address}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 mt-10">
                        <a
                          href={center.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white transition-all hover:-translate-y-0.5",
                            center.accent === "blue"
                              ? "bg-synergy-blue hover:opacity-90"
                              : "bg-synergy-pink hover:opacity-90"
                          )}
                        >
                          <MdDirections size={18} />
                          Get Directions
                        </a>

                        <a
                          href={`tel:${CONTACT_INFO.phoneNumbers.primary}`}
                          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-synergy-blue bg-white border border-black/10 hover:border-synergy-blue transition"
                        >
                          <MdPhone size={17} />
                          Call Us
                        </a>
                      </div>
                    </div>

                    {/* Map */}

                    <div className="relative min-h-[360px] md:min-h-[420px] rounded-3xl overflow-hidden bg-white border border-black/5 shadow-lg">
                      <iframe
                        src={center.mapUrl}
                        title={`${center.name} location`}
                        className="absolute inset-0 w-full h-full"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ border: 0 }}
                      />

                      <div className="absolute top-5 left-5 pointer-events-none">
                        <div className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-white">
                          <span className="text-xs font-mono uppercase tracking-wider text-synergy-blue">
                            Centre {center.number}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {index < pageData.centers!.length - 1 && (
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
                    <div className="h-px bg-black/10" />
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </motion.section>

      ) : isFindCenter ? (
        /* =======================================================
           FIND A CENTRE
        ======================================================== */

        <motion.section
          ref={contentRef}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-20"
        >
          {/* Intro */}

          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto text-center px-4 mb-12 md:mb-16"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-synergy-blue/50">
              Find Your Centre
            </span>

            <h2
              className="text-3xl md:text-5xl text-synergy-blue mt-3 mb-5"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontWeight: 600,
              }}
            >
              Which Synergy Centre Is Right For You?
            </h2>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Synergy currently operates two centres in Gorakhpur. Choose the
              location based on the type of care or treatment you need.
            </p>
          </motion.div>

          {/* Centre comparison */}

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">

              {/* Main Hospital */}

              <motion.div
                variants={itemVariants}
                className="group rounded-3xl bg-blue-50 border border-blue-100 p-7 md:p-9"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono tracking-widest text-synergy-blue">
                    01
                  </span>

                  <span className="px-3 py-1.5 rounded-full bg-white text-xs uppercase tracking-wider text-synergy-blue">
                    Main Hospital
                  </span>
                </div>

                <h3
                  className="text-3xl text-synergy-blue mb-4"
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontWeight: 600,
                  }}
                >
                  Comprehensive Cancer Care
                </h3>

                <p className="text-gray-600 leading-relaxed mb-7">
                  Our main hospital provides comprehensive cancer care with
                  outpatient, inpatient and surgical services under one roof.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "OPD consultations",
                    "IPD care",
                    "Surgical care",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start text-sm text-gray-700"
                    >
                      <CheckIcon />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/centers/network"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-synergy-blue group-hover:gap-3 transition-all"
                >
                  View Centre Details
                  <MdArrowForward size={18} />
                </Link>
              </motion.div>

              {/* Radiation Centre */}

              <motion.div
                variants={itemVariants}
                className="group rounded-3xl bg-pink-50 border border-pink-100 p-7 md:p-9"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono tracking-widest text-synergy-pink">
                    02
                  </span>

                  <span className="px-3 py-1.5 rounded-full bg-white text-xs uppercase tracking-wider text-synergy-pink">
                    Radiation Centre
                  </span>
                </div>

                <h3
                  className="text-3xl text-synergy-blue mb-4"
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontWeight: 600,
                  }}
                >
                  Radiation & Day Care
                </h3>

                <p className="text-gray-600 leading-relaxed mb-7">
                  Our radiation centre and day-care facility extends
                  specialised cancer care closer to patients in Gorakhpur.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Radiation care",
                    "Day-care services",
                    "Specialised cancer care",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start text-sm text-gray-700"
                    >
                      <CheckIcon />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/centers/network"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-synergy-blue group-hover:gap-3 transition-all"
                >
                  View Centre Details
                  <MdArrowForward size={18} />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

      ) : isOutstation ? (
        /* =======================================================
           OUTSTATION SUPPORT
        ======================================================== */

        <motion.section
          ref={contentRef}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-20"
        >
          {/* Intro */}

          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto text-center px-4 mb-12 md:mb-16"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-synergy-blue/50">
              Outstation Support
            </span>

            <h2
              className="text-3xl md:text-5xl text-synergy-blue mt-3 mb-5"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontWeight: 600,
              }}
            >
              Your Care Journey, Coordinated.
            </h2>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Coming to Gorakhpur from another city or town? Our team helps
              coordinate your visit so you can focus on your care rather than
              the logistics.
            </p>
          </motion.div>

          {/* Journey steps */}

          <div className="max-w-5xl mx-auto px-4">
            <div className="space-y-5">

              {/* Step 01 */}

              <motion.div
                variants={itemVariants}
                className="grid md:grid-cols-[100px_1fr] gap-5 md:gap-8 items-start p-6 md:p-8 rounded-3xl bg-teal-50 border border-teal-100"
              >
                <div className="text-4xl font-display font-semibold text-teal-700/40">
                  01
                </div>

                <div>
                  <h3
                    className="text-2xl text-synergy-blue mb-3"
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontWeight: 600,
                    }}
                  >
                    Before You Travel
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-5">
                    Prepare your visit before making the journey to Gorakhpur.
                  </p>

                  <div className="space-y-3">
                    {[
                      "Appointment scheduling support",
                      "Treatment planning before travel",
                      "Guidance on the appropriate Synergy centre",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <CheckIcon />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Step 02 */}

              <motion.div
                variants={itemVariants}
                className="grid md:grid-cols-[100px_1fr] gap-5 md:gap-8 items-start p-6 md:p-8 rounded-3xl bg-white border border-black/5 shadow-sm"
              >
                <div className="text-4xl font-display font-semibold text-synergy-blue/20">
                  02
                </div>

                <div>
                  <h3
                    className="text-2xl text-synergy-blue mb-3"
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontWeight: 600,
                    }}
                  >
                    When You Reach Synergy
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-5">
                    Our team helps coordinate your visit and guide you towards
                    the appropriate care team.
                  </p>

                  <div className="space-y-3">
                    {[
                      "Coordination with the appropriate Synergy care team",
                      "Consultation and treatment coordination",
                      "Clear guidance on the next steps",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <CheckIcon />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Step 03 */}

              <motion.div
                variants={itemVariants}
                className="grid md:grid-cols-[100px_1fr] gap-5 md:gap-8 items-start p-6 md:p-8 rounded-3xl bg-emerald-50 border border-emerald-100"
              >
                <div className="text-4xl font-display font-semibold text-emerald-700/30">
                  03
                </div>

                <div>
                  <h3
                    className="text-2xl text-synergy-blue mb-3"
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontWeight: 600,
                    }}
                  >
                    Follow-up & Continuity
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-5">
                    Your care journey continues after your visit. Our team can
                    help coordinate future visits and follow-up.
                  </p>

                  <div className="space-y-3">
                    {[
                      "Guidance for follow-up visits",
                      "Coordination between local centres and the main hospital",
                      "Support with planning future visits",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <CheckIcon />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Community Outreach */}

          <motion.div
            variants={itemVariants}
            className="max-w-5xl mx-auto px-4 mt-12"
          >
            <div className="rounded-3xl bg-blue-50 border border-blue-100 p-7 md:p-10">
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-synergy-blue/50">
                Beyond The Hospital
              </span>

              <h3
                className="text-2xl md:text-3xl text-synergy-blue mt-3 mb-4"
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontWeight: 600,
                }}
              >
                Community Outreach
              </h3>

              <p className="text-gray-600 leading-relaxed max-w-3xl mb-7">
                Synergy also takes cancer awareness and early-detection
                initiatives beyond the hospital through community outreach
                programmes and screening activities.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Cancer awareness",
                  "Screening",
                  "Early detection",
                  "Initial consultation and referral",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start bg-white/70 p-4 rounded-xl border border-white"
                  >
                    <CheckIcon />
                    <span className="text-sm text-gray-700 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

      ) : (
        /* =======================================================
           FALLBACK
        ======================================================== */

        <motion.section
          ref={contentRef}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-20"
        >
          <div
            className={cn(
              "p-6 md:p-12 rounded-3xl shadow-sm border border-black/5",
              pageData.themeBgClass
            )}
          >
            <div className="max-w-4xl mx-auto space-y-16">
              {pageData.sections.map((section, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="space-y-6"
                >
                  <h2
                    className={`${newYorkTypography.h2} text-synergy-blue border-b-2 border-blue-200 pb-3`}
                  >
                    {section.title}
                  </h2>

                  {section.description?.map((desc, dIndex) => (
                    <p
                      key={dIndex}
                      className={`${newYorkTypography.body} text-lg`}
                    >
                      {desc}
                    </p>
                  ))}

                  {section.items && (
                    <div className="bg-white/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-white mt-6">
                      <ul className="space-y-4">
                        {section.items.map((item, iIndex) => (
                          <li
                            key={iIndex}
                            className="flex items-start text-gray-700 leading-relaxed bg-white p-4 rounded-xl shadow-sm border border-gray-50"
                          >
                            <CheckIcon />

                            <span className="font-medium">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* =========================================================
          CONTEXTUAL CTA
      ========================================================== */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mb-20 bg-blue-900 text-white py-16 md:py-20 rounded-3xl shadow-xl overflow-hidden relative mx-auto max-w-7xl w-full"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />

          <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-synergy-pink/10 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-5">
          <motion.h2
            variants={itemVariants}
            className={`${newYorkTypography.h1} mb-6 text-white`}
          >
            {isOutstation
              ? "Planning your visit to Gorakhpur?"
              : isFindCenter
                ? "Still not sure where to begin?"
                : "Not sure where to start?"}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {isOutstation
              ? "Speak with our care team before you travel and let us help coordinate your visit."
              : "Our team will help you find the right centre and guide you through the next steps."}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 w-full sm:w-auto rounded-full font-serif font-bold shadow-md bg-white text-blue-900 hover:bg-gray-100 transition-colors"
            >
              Talk to Our Care Team
            </Link>

            <Link
              href="/centers/network"
              className="inline-flex items-center justify-center px-8 py-3.5 w-full sm:w-auto rounded-full font-serif font-bold shadow-md border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              View Our Centres
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}