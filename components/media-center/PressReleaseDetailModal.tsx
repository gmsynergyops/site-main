"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { PressReleaseItem } from "@/data/mediaCenterData";
import { ImageWithFallback } from "@/components/global/ImageWithFallback";
import {
  Calendar,
  MapPin,
  Building2,
  Download,
  Share2,
  CheckCircle2,
  X,
  FileText,
  Tag,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ShareButton from "@/components/global/ShareButton";

interface PressReleaseDetailModalProps {
  release: PressReleaseItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PressReleaseDetailModal: React.FC<PressReleaseDetailModalProps> = ({
  release,
  isOpen,
  onClose,
}) => {
  if (!release) return null;

  const typeColorMap: Record<
    PressReleaseItem["type"],
    { bg: string; text: string; border: string; label: string }
  > = {
    innovation: {
      bg: "bg-indigo-50",
      text: "text-indigo-700",
      border: "border-indigo-200",
      label: "Medical Innovation",
    },
    award: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-200",
      label: "Award & Recognition",
    },
    research: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-200",
      label: "Clinical Research",
    },
    partnership: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
      label: "Strategic Partnership",
    },
    community: {
      bg: "bg-pink-50",
      text: "text-pink-700",
      border: "border-pink-200",
      label: "Community Outreach",
    },
  };

  const badge = typeColorMap[release.type] || typeColorMap.innovation;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        data-lenis-prevent
        showCloseButton={false}
        className="fixed inset-0 top-0 left-0 translate-x-0 translate-y-0 sm:top-0 sm:left-0 sm:translate-x-0 sm:translate-y-0 w-screen sm:w-screen h-[100dvh] sm:h-[100dvh] max-w-none sm:max-w-none max-h-none sm:max-h-none rounded-none sm:rounded-none border-none ring-0 p-0 sm:p-0 overflow-y-auto bg-white z-[100] flex flex-col gap-0"
      >
        <DialogTitle className="sr-only">{release.title}</DialogTitle>

        {/* Top Sticky Header */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-neutral-200 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${badge.bg} ${badge.text} border ${badge.border}`}
            >
              {badge.label}
            </span>
            <span className="text-xs text-gray-400 hidden sm:inline">
              Official Press Release
            </span>
          </div>

          <div className="flex items-center gap-2">
            <ShareButton
              shareText={`${release.title} - Synergy Super Speciality Hospital`}
              shareUrl={
                typeof window !== "undefined"
                  ? window.location.href
                  : "https://synergyhospital.com/media-center"
              }
              className="text-xs px-3.5 py-1.5 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 flex items-center gap-1.5 font-medium transition-colors"
            >
              <Share2 className="size-3.5" />
              <span>Share</span>
            </ShareButton>

            <Button
              variant="outline"
              size="sm"
              onClick={() => window.print()}
              className="text-xs rounded-xl border-synergy-blue/30 text-synergy-blue hover:bg-synergy-blue/10 gap-1.5"
            >
              <Download className="size-3.5" />
              <span className="hidden sm:inline">Print / Save</span> PDF
            </Button>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors ml-2"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Main Article Container (Centered for optimum reading experience) */}
        <div className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-10 space-y-8">
          {/* Hero Banner with Responsive Aspect Ratio */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-neutral-900 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <ImageWithFallback
              src={release.image}
              fallbackSrc="/fallback-image.webp"
              alt={release.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

            {/* Banner Meta Overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 text-white space-y-2">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${badge.bg} ${badge.text} border ${badge.border} shadow-sm backdrop-blur-md`}
              >
                {badge.label}
              </span>
              <h1 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight">
                {release.title}
              </h1>
            </div>
          </div>

          {/* Metadata bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-200 text-xs sm:text-sm text-gray-500">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-1.5">
                <Calendar className="size-4 text-synergy-blue" />
                <span className="font-medium text-gray-700">
                  {new Date(release.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="size-4 text-synergy-pink" />
                <span>{release.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="size-4 text-gray-400" />
                <span>{release.author}</span>
              </div>
            </div>
          </div>

          {/* Key Highlights Box */}
          {release.keyHighlights && release.keyHighlights.length > 0 && (
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/60 border border-blue-100 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-synergy-blue font-bold text-sm sm:text-base">
                <FileText className="size-5" />
                <span>Executive Summary & Strategic Highlights</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
                {release.keyHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-synergy-blue shrink-0 mt-0.5" />
                    <span className="leading-snug">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Full Article Content */}
          <div className="space-y-6 text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line font-normal">
            {release.content}
          </div>

          {/* Tags Footer */}
          {release.tags && release.tags.length > 0 && (
            <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center gap-2">
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Tag className="size-3.5" />
                Categorized Tags:
              </span>
              {release.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-xl text-xs bg-gray-100 text-gray-600 font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
