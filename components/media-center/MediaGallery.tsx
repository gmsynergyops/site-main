"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "@/components/global/ImageWithFallback";
import {
  Play,
  Images,
  ArrowRight,
  Maximize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GalleryMediaItem, getLocalizedGalleryMedia } from "@/data/mediaCenterData";
import { GalleryLightboxModal } from "./GalleryLightboxModal";
import { FullGalleryModal } from "./FullGalleryModal";
import { useTranslations, useLocale } from "next-intl";

export const MediaGallery = () => {
  const t = useTranslations("mediaCenter.mediaGallery");
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isFullGalleryOpen, setIsFullGalleryOpen] = useState(false);

  const categories: { key: string; label: string }[] = [
    { key: "All", label: t("categories.All") },
    {
      key: "Facilities & Infrastructure",
      label: t("categories.Facilities & Infrastructure"),
    },
    {
      key: "Advanced Medical Tech",
      label: t("categories.Advanced Medical Tech"),
    },
    { key: "Events & Camps", label: t("categories.Events & Camps") },
    { key: "Doctors & Surgeries", label: t("categories.Doctors & Surgeries") },
    { key: "Community Outreach", label: t("categories.Community Outreach") },
  ];

  const allLocalizedItems = getLocalizedGalleryMedia(locale);

  const filteredItems =
    activeCategory === "All"
      ? allLocalizedItems
      : allLocalizedItems.filter((item) => item.category === activeCategory);

  // Take top 6 for on-page preview grid
  const previewItems = filteredItems.slice(0, 6);

  const handleOpenLightbox = (item: GalleryMediaItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const getCategoryLabel = (catKey: string) => {
    const found = categories.find((c) => c.key === catKey);
    return found ? found.label : catKey;
  };

  return (
    <>
      <section
        id="media-gallery"
        className="w-full px-2 sm:px-4 md:px-6 lg:px-16 xl:px-24 py-6 md:py-10"
      >
        <div className="p-4 sm:p-6 lg:p-10 rounded-3xl bg-white border border-neutral-200 shadow-sm space-y-8">
          {/* Header & Category Tabs */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-gray-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-synergy-blue/10 text-synergy-blue text-xs font-semibold mb-2">
                <Images className="size-3.5" />
                <span>{t("badge")}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-synergy-blue">
                {t("title")}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-1 max-w-2xl leading-relaxed">
                {t("description")}
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    activeCategory === cat.key
                      ? "bg-synergy-blue text-white shadow-sm font-semibold"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Showcase Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {previewItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  onClick={() => handleOpenLightbox(item)}
                  className="group relative rounded-2xl overflow-hidden bg-neutral-950 border border-gray-200 shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer aspect-[4/3]"
                >
                  {/* Image Asset */}
                  <ImageWithFallback
                    src={item.src}
                    fallbackSrc="/fallback-image.webp"
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />

                  {/* Gradient Backing */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                  {/* Top Badge: Category */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-md border border-white/10 shadow-xs">
                      {getCategoryLabel(item.category)}
                    </span>
                  </div>

                  {/* Top Right: View Icon on Hover */}
                  <div className="absolute top-3 right-3 z-10 size-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="size-3.5" />
                  </div>

                  {/* Center Play Button for Video Items */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 m-auto size-12 sm:size-14 rounded-full bg-synergy-pink text-white flex items-center justify-center shadow-2xl group-hover:scale-115 transition-transform duration-300 z-10">
                      <Play className="size-5 sm:size-6 ml-0.5 fill-white" />
                    </div>
                  )}

                  {/* Bottom Captions */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-white line-clamp-2 leading-snug group-hover:text-blue-200 transition-colors">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-xs text-neutral-300 line-clamp-1 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* View Full Gallery CTA */}
          <div className="pt-4 text-center">
            <Button
              onClick={() => setIsFullGalleryOpen(true)}
              size="lg"
              className="bg-synergy-blue hover:bg-synergy-blue/90 text-white rounded-2xl px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold shadow-md hover:shadow-xl transition-all duration-300 gap-2"
            >
              <Images className="size-4" />
              <span>
                {t("viewFullGallery")} ({allLocalizedItems.length} {t("allAssets")})
              </span>
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox for Selected Item */}
      {lightboxIndex !== null && (
        <GalleryLightboxModal
          items={filteredItems}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}

      {/* Full Gallery Modal */}
      <FullGalleryModal
        isOpen={isFullGalleryOpen}
        onClose={() => setIsFullGalleryOpen(false)}
      />
    </>
  );
};
