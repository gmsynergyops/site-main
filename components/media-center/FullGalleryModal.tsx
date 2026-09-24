"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { GalleryMediaItem, getLocalizedGalleryMedia } from "@/data/mediaCenterData";
import { ImageWithFallback } from "@/components/global/ImageWithFallback";
import {
  Search,
  X,
  Play,
  Image as ImageIcon,
  Sparkles,
} from "lucide-react";
import { GalleryLightboxModal } from "./GalleryLightboxModal";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";

interface FullGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullGalleryModal: React.FC<FullGalleryModalProps> = ({
  isOpen,
  onClose,
}) => {
  const t = useTranslations("mediaCenter.mediaGallery");
  const locale = useLocale();
  const allLocalizedItems = getLocalizedGalleryMedia(locale);

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMediaType, setSelectedMediaType] = useState<"all" | "image" | "video">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  const filteredItems = allLocalizedItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesType =
      selectedMediaType === "all" || item.type === selectedMediaType;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesType && matchesSearch;
  });

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const getCategoryLabel = (catKey: string) => {
    const found = categories.find((c) => c.key === catKey);
    return found ? found.label : catKey;
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DialogContent
          data-lenis-prevent
          showCloseButton={false}
          className="fixed inset-0 top-0 left-0 translate-x-0 translate-y-0 sm:top-0 sm:left-0 sm:translate-x-0 sm:translate-y-0 w-screen sm:w-screen h-[100dvh] sm:h-[100dvh] max-w-none sm:max-w-none max-h-none sm:max-h-none rounded-none sm:rounded-none border-none ring-0 p-0 sm:p-0 overflow-y-auto bg-white z-[100] flex flex-col gap-0"
        >
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-neutral-200 px-4 sm:px-8 py-4 flex items-center justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-synergy-pink text-xs font-semibold uppercase tracking-wider mb-1">
                <Sparkles className="size-4" />
                <span>{t("fullGalleryBadge")}</span>
              </div>
              <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                {t("fullGalleryTitle")}
              </DialogTitle>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-6 sm:py-8 space-y-6">
            <p className="text-sm text-gray-600 max-w-3xl leading-relaxed">
              {t("fullGalleryDesc")}
            </p>

            {/* Filter & Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between pb-4 border-b border-neutral-100">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <input
                  type="text"
                  placeholder={t("searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-synergy-blue/20 focus:border-synergy-blue transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="size-3.5" />
                  </button>
                )}
              </div>

              {/* Type Switcher (Photos / Videos) */}
              <div className="flex items-center gap-1.5 bg-gray-100 p-1.5 rounded-2xl">
                <button
                  onClick={() => setSelectedMediaType("all")}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    selectedMediaType === "all"
                      ? "bg-white text-gray-900 shadow-xs font-semibold"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {t("categories.All")} ({allLocalizedItems.length})
                </button>
                <button
                  onClick={() => setSelectedMediaType("image")}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                    selectedMediaType === "image"
                      ? "bg-white text-gray-900 shadow-xs font-semibold"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <ImageIcon className="size-3.5" />
                  {t("photos")}
                </button>
                <button
                  onClick={() => setSelectedMediaType("video")}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                    selectedMediaType === "video"
                      ? "bg-white text-gray-900 shadow-xs font-semibold"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Play className="size-3.5 fill-current" />
                  {t("videos")}
                </button>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    selectedCategory === cat.key
                      ? "bg-synergy-blue text-white shadow-xs font-semibold"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Gallery Items Grid */}
            <div className="pt-2">
              {filteredItems.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                  <ImageIcon className="size-12 text-gray-300 mx-auto mb-3" />
                  <h4 className="text-sm font-semibold text-gray-700">{t("noMediaFound")}</h4>
                  <p className="text-xs text-gray-400 mt-1">{t("noMediaDesc")}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedMediaType("all");
                      setSearchQuery("");
                    }}
                    className="mt-4 text-xs text-synergy-blue border-synergy-blue/30"
                  >
                    {t("resetAllFilters")}
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {filteredItems.map((item, index) => (
                    <div
                      key={item.id}
                      onClick={() => handleOpenLightbox(index)}
                      className="group relative rounded-2xl overflow-hidden bg-gray-900 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer aspect-[4/3]"
                    >
                      <ImageWithFallback
                        src={item.src}
                        fallbackSrc="/fallback-image.webp"
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-108 transition-transform duration-500"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                      {/* Video Play Badge or Photo Badge */}
                      {item.type === "video" ? (
                        <div className="absolute inset-0 m-auto size-12 rounded-full bg-synergy-pink text-white flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform duration-300">
                          <Play className="size-5 ml-0.5 fill-white" />
                        </div>
                      ) : null}

                      {/* Category Tag */}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-black/60 text-white backdrop-blur-md">
                          {getCategoryLabel(item.category)}
                        </span>
                      </div>

                      {/* Bottom Title */}
                      <div className="absolute bottom-0 inset-x-0 p-3.5 text-white space-y-1">
                        <h4 className="text-xs sm:text-sm font-semibold line-clamp-2 leading-snug group-hover:text-blue-200 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Lightbox for viewing individual selected item */}
      {lightboxIndex !== null && (
        <GalleryLightboxModal
          items={filteredItems}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}
    </>
  );
};
