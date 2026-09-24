"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { NewsVideoItem, getLocalizedNewsVideos } from "@/data/mediaCenterData";
import { ImageWithFallback } from "@/components/global/ImageWithFallback";
import { Play, Search, Calendar, Tv, X, Sparkles } from "lucide-react";
import { VideoPlayerModal } from "./VideoPlayerModal";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";

interface AllMediaCoverageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AllMediaCoverageModal: React.FC<AllMediaCoverageModalProps> = ({
  isOpen,
  onClose,
}) => {
  const t = useTranslations("mediaCenter.synergyInTheNews");
  const locale = useLocale();
  const allVideos = getLocalizedNewsVideos(locale);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [selectedVideo, setSelectedVideo] = useState<NewsVideoItem | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Extract unique tags
  const tags = ["all", ...Array.from(new Set(allVideos.map((v) => v.tag).filter(Boolean)))];

  const filteredVideos = allVideos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.channel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (video.summary && video.summary.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = selectedTag === "all" || video.tag === selectedTag;

    return matchesSearch && matchesTag;
  });

  const handlePlayVideo = (video: NewsVideoItem) => {
    setSelectedVideo(video);
    setIsVideoModalOpen(true);
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString(locale === "hi" ? "hi-IN" : "en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
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
                <span>{t("allCoverageBadge")}</span>
              </div>
              <DialogTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                {t("allCoverageTitle")}
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

          {/* Main Content Container */}
          <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8 py-6 sm:py-8 space-y-6">
            <p className="text-sm text-gray-600 max-w-3xl leading-relaxed">
              {t("allCoverageDesc")}
            </p>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between pb-4 border-b border-neutral-100">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                <input
                  type="text"
                  placeholder={t("searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-synergy-blue/20 focus:border-synergy-blue transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </div>

              {/* Tag Filters */}
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-1">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag || "all")}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-full capitalize transition-all ${
                      selectedTag === tag
                        ? "bg-synergy-blue text-white shadow-xs"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {tag === "all" ? t("allTags") : tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Video Grid */}
            <div>
              {filteredVideos.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
                  <Tv className="size-12 text-gray-300 mx-auto mb-3" />
                  <h4 className="text-base font-semibold text-gray-700">{t("noCoverageFound")}</h4>
                  <p className="text-xs text-gray-400 mt-1">{t("noCoverageDesc")}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedTag("all");
                    }}
                    className="mt-4 text-xs text-synergy-blue border-synergy-blue/30"
                  >
                    {t("resetFilters")}
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredVideos.map((video) => (
                    <div
                      key={video.id}
                      onClick={() => handlePlayVideo(video)}
                      className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col"
                    >
                      {/* Thumbnail Image with Play Overlay */}
                      <div className="relative aspect-video w-full overflow-hidden bg-gray-950">
                        <ImageWithFallback
                          src={video.thumbnail}
                          fallbackSrc="/fallback-image.webp"
                          alt={video.title}
                          fill
                          className="object-cover group-hover:scale-108 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                        {/* Play Button Glow */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="size-12 rounded-full bg-synergy-blue/90 text-white flex items-center justify-center shadow-lg group-hover:scale-115 group-hover:bg-synergy-pink transition-all duration-300">
                            <Play className="size-5 ml-0.5 fill-white" />
                          </div>
                        </div>

                        {/* Duration Tag */}
                        {video.duration && (
                          <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-black/70 text-white backdrop-blur-xs">
                            {video.duration}
                          </span>
                        )}

                        {/* Category Tag */}
                        {video.tag && (
                          <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-synergy-pink/90 text-white backdrop-blur-xs shadow-xs">
                            {video.tag}
                          </span>
                        )}
                      </div>

                      {/* Content info */}
                      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span className="font-semibold text-synergy-blue flex items-center gap-1 line-clamp-1">
                              <Tv className="size-3 text-synergy-blue" />
                              {video.channel}
                            </span>
                            <span className="flex items-center gap-1 shrink-0 text-gray-400">
                              <Calendar className="size-3" />
                              {formatDate(video.date)}
                            </span>
                          </div>
                          <h4 className="text-sm font-semibold text-gray-900 group-hover:text-synergy-blue transition-colors line-clamp-2 leading-snug">
                            {video.title}
                          </h4>
                          {video.summary && (
                            <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                              {video.summary}
                            </p>
                          )}
                        </div>

                        <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-synergy-blue">
                          <span>{t("watchFullCoverage")}</span>
                          <Play className="size-3 fill-synergy-blue group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Actual Player Modal */}
      <VideoPlayerModal
        video={selectedVideo}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </>
  );
};
