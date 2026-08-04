"use client";

import { MAIN_URL, MOBILE_MAIN_URL } from "@/data";
import { useIsMobile } from "@/hooks/use-mobile"; // apne path ke hisaab se

export default function HomepageVideo() {
    const isMobile = useIsMobile();

    const videoSrc = isMobile ? MOBILE_MAIN_URL : MAIN_URL;

    return (
        <video
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            aria-label="Promotional video showcasing Synergy Hospital"
        >
            <source
                src={videoSrc}
                type={isMobile ? "video/mp4" : "video/webm"}
            />
        </video>
    );
}