"use client";

import React, { useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { GalleryMediaItem } from "@/data/mediaCenterData";
import { ImageWithFallback } from "@/components/global/ImageWithFallback";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Share2,
} from "lucide-react";
import ShareButton from "@/components/global/ShareButton";
import { useLocale } from "next-intl";

interface GalleryLightboxModalProps {
  items: GalleryMediaItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const GalleryLightboxModal: React.FC<GalleryLightboxModalProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const locale = useLocale();
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(items.length - 1);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!currentItem) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        data-lenis-prevent
        showCloseButton={false}
        className="fixed inset-0 top-0 left-0 translate-x-0 translate-y-0 sm:top-0 sm:left-0 sm:translate-x-0 sm:translate-y-0 w-screen sm:w-screen h-[100dvh] sm:h-[100dvh] max-w-none sm:max-w-none max-h-none sm:max-h-none rounded-none sm:rounded-none border-none ring-0 p-0 sm:p-0 overflow-hidden bg-neutral-950 text-white z-[100] flex flex-col justify-between gap-0"
      >
        <DialogTitle className="sr-only">{currentItem.title}</DialogTitle>

        {/* Top bar with category, count & actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800 z-30 shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-synergy-blue/20 text-synergy-blue border border-synergy-blue/30">
              {currentItem.category}
            </span>
            <span className="text-xs font-mono text-neutral-400">
              {currentIndex + 1} / {items.length}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ShareButton
              shareText={`${currentItem.title} - Synergy Hospital Media Gallery`}
              shareUrl={
                typeof window !== "undefined"
                  ? window.location.href
                  : "https://synergyhospital.com/media-center"
              }
              className="p-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
            >
              <Share2 className="size-4" />
            </ShareButton>

            <button
              onClick={onClose}
              aria-label="Close lightbox"
              className="p-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Main Media Preview Stage */}
        <div className="flex-1 relative w-full h-full max-h-[75vh] flex items-center justify-center p-4 sm:p-8 overflow-hidden">
          <div className="relative w-full h-full max-w-6xl mx-auto flex items-center justify-center">
            {currentItem.type === "video" && currentItem.videoUrl ? (
              <video
                src={currentItem.videoUrl}
                poster={currentItem.src}
                controls
                autoPlay
                className="w-full h-full max-h-[70vh] object-contain rounded-2xl"
              />
            ) : (
              <ImageWithFallback
                src={currentItem.src}
                fallbackSrc="/fallback-image.webp"
                alt={currentItem.title}
                fill
                className="object-contain"
              />
            )}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all hover:scale-110 shadow-xl border border-white/10"
          >
            <ChevronLeft className="size-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-all hover:scale-110 shadow-xl border border-white/10"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>

        {/* Caption & Metadata Footer */}
        <div className="px-6 py-4 bg-neutral-900 border-t border-neutral-800 shrink-0">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                {currentItem.title}
              </h3>
              {currentItem.description && (
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {currentItem.description}
                </p>
              )}
            </div>

            {currentItem.date && (
              <span className="text-xs text-neutral-400 flex items-center gap-1.5 shrink-0">
                <Calendar className="size-3.5 text-synergy-blue" />
                <span>{currentItem.date}</span>
              </span>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
