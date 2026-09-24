"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Newspaper,
  Share2,
  Sparkles,
  MapPin,
  Layers,
} from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import ShareButton from "../global/ShareButton";
import { ImageWithFallback } from "@/components/global/ImageWithFallback";
import {
  PressReleaseItem,
  getLocalizedPressReleases,
  getLocalizedFeaturedPressRelease,
} from "@/data/mediaCenterData";

type FilterType = "all" | "innovation" | "award" | "research" | "partnership" | "community";

export const PressReleasesSection = () => {
  const t = useTranslations("mediaCenter.PressReleases");
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const localizedReleases = getLocalizedPressReleases(locale);
  const featuredRelease = getLocalizedFeaturedPressRelease(locale);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === "hi" ? "hi-IN" : "en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const filteredReleases =
    activeFilter === "all"
      ? localizedReleases
      : localizedReleases.filter(
          (release) => release.type.toLowerCase() === activeFilter.toLowerCase()
        );

  const filterButtons: { label: string; value: FilterType; count: number }[] = [
    { label: t("filterButtons.All"), value: "all", count: localizedReleases.length },
    {
      label: t("filterButtons.Innovation"),
      value: "innovation",
      count: localizedReleases.filter((r) => r.type === "innovation").length,
    },
    {
      label: t("filterButtons.Awards"),
      value: "award",
      count: localizedReleases.filter((r) => r.type === "award").length,
    },
    {
      label: t("filterButtons.Research"),
      value: "research",
      count: localizedReleases.filter((r) => r.type === "research").length,
    },
    {
      label: t("filterButtons.Partnership"),
      value: "partnership",
      count: localizedReleases.filter((r) => r.type === "partnership").length,
    },
    {
      label: t("filterButtons.Community"),
      value: "community",
      count: localizedReleases.filter((r) => r.type === "community").length,
    },
  ];

  const getTypeBadgeStyles = (type: PressReleaseItem["type"]) => {
    switch (type) {
      case "innovation":
        return "bg-indigo-50 text-indigo-700 border-indigo-200";
      case "award":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "research":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "partnership":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "community":
        return "bg-pink-50 text-pink-700 border-pink-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getTypeBadgeLabel = (type: PressReleaseItem["type"]) => {
    switch (type) {
      case "innovation":
        return t("filterButtons.Innovation");
      case "award":
        return t("filterButtons.Awards");
      case "research":
        return t("filterButtons.Research");
      case "partnership":
        return t("filterButtons.Partnership");
      case "community":
        return t("filterButtons.Community");
      default:
        return type;
    }
  };

  return (
    <section
      className="w-full px-2 sm:px-4 md:px-6 lg:px-16 xl:px-24 py-6 md:py-10"
      id="press-releases"
    >
      <div className="p-4 sm:p-6 lg:p-10 rounded-3xl bg-white border border-neutral-200 shadow-sm space-y-8">
        {/* Header & Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-synergy-pink/10 text-synergy-pink text-xs font-semibold mb-2">
              <Newspaper className="size-3.5" />
              <span>{t("badge")}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-synergy-blue">
              {t("title")}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-1 max-w-2xl">
              {t("description")}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterButtons.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setActiveFilter(btn.value)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 ${
                  activeFilter === btn.value
                    ? "bg-synergy-blue text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span>{btn.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    activeFilter === btn.value
                      ? "bg-white/20 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {btn.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Release Banner Card (Clean Aspect Ratio & Responsive Image) */}
        <motion.div
          className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 bg-neutral-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative aspect-[16/10] sm:aspect-[16/7] lg:aspect-[21/8] w-full min-h-[320px]">
            <ImageWithFallback
              src={featuredRelease.image}
              fallbackSrc="/fallback-image.webp"
              alt={featuredRelease.title}
              fill
              className="object-cover opacity-80 group-hover:opacity-90 group-hover:scale-103 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />

            <div className="absolute inset-0 p-5 sm:p-8 lg:p-10 flex flex-col justify-between z-10">
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-synergy-pink text-white text-xs font-semibold shadow-md">
                  <Sparkles className="size-3.5" />
                  <span>{t("featuredRelease")}</span>
                </div>
                <span className="text-xs text-neutral-300 flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                  <Calendar className="size-3.5" />
                  {formatDate(featuredRelease.date)}
                </span>
              </div>

              <div className="space-y-3 max-w-4xl">
                <Link
                  href={`/press-releases/${featuredRelease.id}`}
                  className="block group/title"
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight group-hover/title:text-blue-200 transition-colors">
                    {featuredRelease.title}
                  </h3>
                </Link>

                <p className="text-xs sm:text-sm text-neutral-200 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                  {featuredRelease.summary}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Button
                    asChild
                    className="bg-synergy-pink hover:bg-synergy-pink/90 text-white rounded-xl text-xs sm:text-sm font-medium gap-2 shadow-lg"
                  >
                    <Link href={`/press-releases/${featuredRelease.id}`}>
                      <span>{t("readFullRelease")}</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>

                  <ShareButton
                    shareText={`${featuredRelease.title} - Synergy Super Speciality Hospital`}
                    shareUrl={`https://synergy-website-alpha.vercel.app/press-releases/${featuredRelease.id}`}
                    className="bg-black/40 hover:bg-black/60 text-white border border-white/20 rounded-xl text-xs sm:text-sm px-3.5 py-2 flex items-center gap-1.5 backdrop-blur-md transition-colors"
                  >
                    <Share2 className="size-3.5" />
                    <span>{t("share")}</span>
                  </ShareButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Grid & Timeline Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Press Releases Cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <AnimatePresence mode="popLayout">
                {filteredReleases.map((release, index) => (
                  <motion.div
                    key={release.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Card Image */}
                    <Link
                      href={`/press-releases/${release.id}`}
                      className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100 block cursor-pointer"
                    >
                      <ImageWithFallback
                        src={release.image}
                        fallbackSrc="/fallback-image.webp"
                        alt={release.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                      {/* Badge Overlay */}
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border shadow-xs backdrop-blur-xs ${getTypeBadgeStyles(
                            release.type
                          )}`}
                        >
                          {getTypeBadgeLabel(release.type)}
                        </span>
                      </div>
                    </Link>

                    {/* Card Body */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="size-3 text-synergy-blue" />
                            {formatDate(release.date)}
                          </span>
                          <span className="flex items-center gap-1 text-gray-400">
                            <MapPin className="size-3 text-synergy-pink" />
                            {release.location.split(",")[0]}
                          </span>
                        </div>

                        <Link
                          href={`/press-releases/${release.id}`}
                          className="block group/link"
                        >
                          <h3 className="text-base font-bold text-gray-900 group-hover/link:text-synergy-blue transition-colors line-clamp-2 leading-snug">
                            {release.title}
                          </h3>
                        </Link>

                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                          {release.summary}
                        </p>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                        <ShareButton
                          shareText={`${release.title} - Synergy Hospital`}
                          shareUrl={`https://synergy-website-alpha.vercel.app/press-releases/${release.id}`}
                          className="text-xs text-gray-600 hover:text-synergy-pink flex items-center gap-1 transition-colors p-1"
                        >
                          <Share2 className="size-3.5" />
                          <span>{t("share")}</span>
                        </ShareButton>

                        <Link
                          href={`/press-releases/${release.id}`}
                          className="text-xs font-semibold text-synergy-blue hover:text-synergy-blue/80 flex items-center gap-1 transition-colors group/read"
                        >
                          <span>{t("readMore")}</span>
                          <ArrowRight className="size-3.5 group-hover/read:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Sidebar: Timeline & Media Inquiries */}
          <div className="space-y-6">
            {/* Interactive Timeline */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-2 mb-4 text-synergy-blue font-bold text-base">
                <Layers className="size-4" />
                <span>{t("recentChronology")}</span>
              </div>
              <div className="relative pl-4 space-y-4 before:absolute before:left-1.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
                {localizedReleases.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/press-releases/${rel.id}`}
                    className="relative group/timeline block pl-3"
                  >
                    <div className="absolute -left-[19px] top-1.5 size-3 rounded-full bg-white border-2 border-synergy-blue group-hover/timeline:bg-synergy-pink group-hover/timeline:border-synergy-pink transition-colors" />
                    <span className="text-[11px] font-medium text-gray-400">
                      {formatDate(rel.date)}
                    </span>
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-800 group-hover/timeline:text-synergy-blue transition-colors line-clamp-2 leading-snug mt-0.5">
                      {rel.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

            {/* Media Office Contact Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-synergy-blue to-blue-900 text-white space-y-3">
              <h4 className="font-bold text-base">{t("mediaInquiriesTitle")}</h4>
              <p className="text-xs text-blue-100 leading-relaxed">
                {t("mediaInquiriesDesc")}
              </p>
              <div className="pt-2 text-xs space-y-1.5 text-blue-100 border-t border-white/10">
                <p>
                  <strong className="text-white">Email:</strong> media@synergyhospital.com
                </p>
                <p>
                  <strong className="text-white">Phone:</strong> +91 95552 46666
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
