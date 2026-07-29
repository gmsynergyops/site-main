"use client"

import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { VideoModalTriggerProps } from "@/types";
import React, { useRef, useState } from "react";
import { ImageWithFallback } from "./ImageWithFallback";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useTranslations } from 'next-intl';

export function VideoModalForJourney({
    image,
    videoUrl,
    children,
    className,
}: VideoModalTriggerProps) {
    const t = useTranslations('global');
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play().catch((error: unknown) => {
                    console.error("Error playing the video: ", error);
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };
    return (
        <Dialog>
            <DialogTrigger
                className={cn(
                    "relative rounded-xl aspect-video w-full h-full overflow-hidden group cursor-pointer",
                    className
                )}
                title="Play Patient Testimonial Video"
            >
                {
                    image ? <>
                        <ImageWithFallback
                            fallbackSrc='/fallback-image.webp'
                            src={image}
                            alt={t('videoThumbnail')}
                            width={240}
                            height={240}
                            className="object-cover"
                        />
                        <ImageWithFallback
                            fallbackSrc='/fallback-image.webp'
                            src="/player-thumb-overlay.svg"
                            alt="Play button overlay"
                            width={70}
                            height={70}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
                        />
                    </> : children ? children : null
                }
            </DialogTrigger>

            <DialogContent className="rounded-2xl p-0 overflow-hidden min-w-[90vw] max-w-5xl w-full">
                <DialogTitle className="sr-only">Video Preview</DialogTitle>
                <div className="aspect-video w-full relative bg-black">
                    <video
                        ref={videoRef}
                        src={videoUrl}
                        className="w-full h-full"
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onClick={togglePlay}
                    />

                    {/* Video controls */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent flex items-center">
                        <button
                            onClick={togglePlay}
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 mr-4 flex items-center justify-center"
                        >
                            {isPlaying ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white" />}
                        </button>

                        <button
                            onClick={toggleMute}
                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                        >
                            {isMuted ? <VolumeX size={20} className="text-white" /> : <Volume2 size={20} className="text-white" />}
                        </button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
