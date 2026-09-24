"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Tv, Calendar } from "lucide-react";
import { useRef, useEffect, useState, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { getLocalizedNewsVideos, NewsVideoItem } from "@/data/mediaCenterData";
import { ImageWithFallback } from "@/components/global/ImageWithFallback";
import { VideoPlayerModal } from "@/components/media-center/VideoPlayerModal";

interface NewsSliderProps {
  heading?: string;
  items?: NewsVideoItem[];
}

export default function NewsSlider({ heading, items }: NewsSliderProps) {
  const t = useTranslations("homepage.NewsSlider");
  const locale = useLocale();
  const newsList = items || getLocalizedNewsVideos(locale);

  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [selectedVideo, setSelectedVideo] = useState<NewsVideoItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  }, []);

  const scroll = useCallback((direction: "left" | "right") => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      const scrollAmount = containerWidth * 0.75;
      const newScrollLeft =
        direction === "left"
          ? carouselRef.current.scrollLeft - scrollAmount
          : carouselRef.current.scrollLeft + scrollAmount;

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  }, []);

  // Auto scroll that smoothly respects boundaries without jarring resets
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (!isHovered && carouselRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
          const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 15;

          if (isAtEnd) {
            carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            scroll("right");
          }
        }
      }, 5500);
    };

    startAutoScroll();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, scroll]);

  useEffect(() => {
    updateScrollButtons();
    const currentRef = carouselRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", updateScrollButtons, { passive: true });
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, [updateScrollButtons]);

  const handleCardClick = (news: NewsVideoItem) => {
    setSelectedVideo(news);
    setIsModalOpen(true);
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
      <motion.div
        className="relative w-full px-2 sm:px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 font-display">
            {heading || t("heading")}
          </h2>

          <div className="hidden sm:flex gap-2">
            <Button
              onClick={() => scroll("left")}
              variant="outline"
              size="icon"
              disabled={!canScrollLeft}
              aria-label="Previous slide"
              className="size-9 rounded-full border-gray-200 text-gray-700 hover:bg-synergy-blue hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              onClick={() => scroll("right")}
              variant="outline"
              size="icon"
              disabled={!canScrollRight}
              aria-label="Next slide"
              className="size-9 rounded-full border-gray-200 text-gray-700 hover:bg-synergy-blue hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>

        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={carouselRef}
            className="flex overflow-x-auto w-full py-2 space-x-4 scrollbar-none snap-x snap-mandatory scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {newsList.map((news, index) => (
              <motion.div
                key={news.id || `${index}-${news.title}`}
                onClick={() => handleCardClick(news)}
                className="min-w-[85vw] sm:min-w-[46%] lg:min-w-[31%] rounded-2xl overflow-hidden relative snap-start cursor-pointer group/card bg-neutral-900 border border-neutral-200 shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/5] flex flex-col justify-end"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                {/* Thumbnail Image */}
                <div className="absolute inset-0 size-full">
                  <ImageWithFallback
                    src={news.thumbnail}
                    fallbackSrc="/fallback-image.webp"
                    alt={news.title}
                    fill
                    className="size-full object-cover transition-transform duration-700 group-hover/card:scale-108"
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover/card:from-black/95 transition-all duration-300" />
                </div>

                {/* Top Tags */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-synergy-blue/90 text-white backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                    <Tv className="size-3" />
                    <span className="line-clamp-1 max-w-[120px]">{news.channel}</span>
                  </span>
                  {news.duration && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-black/60 text-white/90 backdrop-blur-md">
                      {news.duration}
                    </span>
                  )}
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 m-auto size-14 sm:size-16 rounded-full bg-white/25 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-xl group-hover/card:scale-115 group-hover/card:bg-synergy-pink group-hover/card:border-transparent transition-all duration-300 z-10 pointer-events-none">
                  <Play className="size-6 sm:size-7 ml-1 fill-white" />
                </div>

                {/* Bottom Title & Details */}
                <div className="relative z-10 p-4 sm:p-5 flex flex-col gap-1.5 pointer-events-none">
                  {news.tag && (
                    <span className="text-[11px] font-medium text-synergy-pink uppercase tracking-wider">
                      {news.tag}
                    </span>
                  )}
                  <h3 className="text-sm sm:text-base text-white font-semibold line-clamp-2 leading-snug group-hover/card:text-blue-100 transition-colors">
                    {news.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[11px] text-neutral-300 pt-1">
                    <Calendar className="size-3 text-neutral-400" />
                    <span>{formatDate(news.date)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Bottom navigation hints */}
          <div className="flex sm:hidden justify-center gap-3 mt-3">
            <Button
              onClick={() => scroll("left")}
              variant="outline"
              size="sm"
              disabled={!canScrollLeft}
              className="rounded-full size-8 p-0"
              aria-label="Previous slide"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              onClick={() => scroll("right")}
              variant="outline"
              size="sm"
              disabled={!canScrollRight}
              className="rounded-full size-8 p-0"
              aria-label="Next slide"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <VideoPlayerModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
