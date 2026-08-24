import { MAIN_URL, MOBILE_MAIN_URL } from "@/data";

const DESKTOP_POSTER = "/videos/homepage-main/poster-desktop.webp";

export default function HomepageVideo() {
    return (
        <video
            preload="none"
            autoPlay
            loop
            muted
            playsInline
            poster={DESKTOP_POSTER}
            className="absolute inset-0 h-full w-full object-cover"
            aria-label="Promotional video showcasing Synergy Hospital"
        >
            <source
                src={MOBILE_MAIN_URL}
                media="(max-width: 767px)"
                type="video/mp4"
            />
            <source
                src={MAIN_URL}
                type="video/webm"
            />
        </video>
    );
}