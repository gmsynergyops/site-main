// app/media-center/page.tsx
import { EventsAndConferences } from '@/components/media-center/EventsAndConferences';
import { MediaContacts } from '@/components/media-center/MediaContacts';
import { MediaGallery } from '@/components/media-center/MediaGallery';
import { PressReleasesSection } from '@/components/media-center/PressReleasesSection';
import { SynergyInTheNewsSection } from '@/components/media-center/SynergyInTheNewsSection';

export const metadata = {
    title: "Media Center - Synergy Super Speciality Hospital, Gorakhpur",
    description:
        "Stay updated with the latest news, press releases, and media coverage from Synergy Super Speciality Hospital, Gorakhpur.",
    keywords: [
        "Synergy Hospital media",
        "Synergy news",
        "hospital press release Gorakhpur",
        "Synergy hospital updates",
        "medical events Gorakhpur",
        "Synergy Super Speciality news",
    ],
    authors: [{ name: "Synergy Super Speciality Hospital" }],
    openGraph: {
        title: "Media Center - Synergy Super Speciality Hospital",
        description:
            "Catch all the latest updates and media buzz from Synergy Super Speciality Hospital, Gorakhpur.",
        url: "https://synergy-website-alpha.vercel.app/media-center",
        siteName: "Synergy Super Speciality Hospital",
        images: [
            {
                url: "/og-image-media.jpg", // Add this image in /public
                width: 1200,
                height: 630,
                alt: "Media updates from Synergy Hospital",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    alternates: {
        canonical: "https://yourdomain.com/media-center",
    },
    icons: {
        icon: "/favicon.ico",
    },
    twitter: {
        card: "summary_large_image",
        title: "Media Center - Synergy Super Speciality Hospital",
        description:
            "Explore the latest hospital media coverage, health stories, and announcements from Synergy, Gorakhpur.",
        images: ["/og-image-media.jpg"],
        creator: "@synergy_hospital",
    },
};


const MediaCenter = () => {
    return (
        <main className='bg-accent lg:pt-20 lg:-mt-10'>
            <SynergyInTheNewsSection />
            <PressReleasesSection />
            <EventsAndConferences />
            <MediaGallery />
            <MediaContacts />
        </main>
    )
}

export default MediaCenter
