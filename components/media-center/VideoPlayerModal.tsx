"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Play, Pause, Volume2, VolumeX, Maximize2, X, Calendar, Tv } from "lucide-react";
import { NewsVideoItem } from "@/data/mediaCenterData";

interface VideoPlayerModalProps {
  video: NewsVideoItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  video,
  isOpen,
  onClose,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isOpen, video]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setProgress((curr / dur) * 100);

    const format = (t: number) => {
      const mins = Math.floor(t / 60);
      const secs = Math.floor(t % 60);
      return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    setCurrentTime(format(curr));
    if (videoRef.current.duration) {
      setDuration(format(videoRef.current.duration));
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const newTime = (parseFloat(e.target.value) / 100) * (videoRef.current.duration || 1);
    videoRef.current.currentTime = newTime;
    setProgress(parseFloat(e.target.value));
  };

  const toggleFullScreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  if (!video) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        data-lenis-prevent
        showCloseButton={false}
        className="fixed inset-0 top-0 left-0 translate-x-0 translate-y-0 sm:top-0 sm:left-0 sm:translate-x-0 sm:translate-y-0 w-screen sm:w-screen h-[100dvh] sm:h-[100dvh] max-w-none sm:max-w-none max-h-none sm:max-h-none rounded-none sm:rounded-none border-none ring-0 p-0 sm:p-0 overflow-y-auto bg-neutral-950 text-white flex flex-col justify-between z-[100] gap-0"
      >
        <DialogTitle className="sr-only">{video.title}</DialogTitle>

        {/* Top Header Bar */}
        <div className="w-full flex items-center justify-between px-6 py-4 bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800 shrink-0 z-30">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-synergy-blue/20 text-synergy-blue border border-synergy-blue/30 flex items-center gap-1.5">
              <Tv className="size-3.5" />
              {video.channel}
            </span>
            {video.tag && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-synergy-pink/15 text-synergy-pink border border-synergy-pink/30">
                {video.tag}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-all hover:scale-105"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Main Video Area */}
        <div className="flex-1 w-full max-w-6xl mx-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="relative aspect-video w-full max-h-[70vh] bg-black rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center group border border-neutral-800">
            <video
              ref={videoRef}
              src={video.videoUrl}
              poster={video.thumbnail}
              className="w-full h-full object-contain cursor-pointer"
              onClick={togglePlay}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              playsInline
            />

            {/* Center Play Button on Hover or Paused */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 m-auto size-16 sm:size-20 flex items-center justify-center bg-synergy-blue/90 hover:bg-synergy-blue text-white rounded-full shadow-2xl backdrop-blur-sm transition-transform duration-200 hover:scale-110 z-20"
                aria-label="Play video"
              >
                <Play className="size-8 sm:size-9 ml-1 fill-white" />
              </button>
            )}

            {/* Custom Controls Bar */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 flex flex-col gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* Progress Bar Slider */}
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="w-full h-1.5 bg-neutral-600 accent-synergy-blue rounded-lg cursor-pointer hover:h-2 transition-all"
              />

              <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-300 pt-1">
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="hover:text-white transition-colors"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="size-5" /> : <Play className="size-5" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="hover:text-white transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX className="size-5 text-red-400" /> : <Volume2 className="size-5" />}
                  </button>

                  <span className="font-mono text-neutral-400 text-xs">
                    {currentTime} / {duration}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleFullScreen}
                    className="hover:text-white transition-colors"
                    aria-label="Fullscreen"
                  >
                    <Maximize2 className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Info Section */}
        <div className="w-full bg-neutral-900 border-t border-neutral-800 px-6 py-5 shrink-0">
          <div className="max-w-6xl mx-auto space-y-2">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5 text-synergy-blue" />
                <span>{new Date(video.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-neutral-100 leading-snug">
              {video.title}
            </h3>

            {video.summary && (
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-4xl">
                {video.summary}
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
