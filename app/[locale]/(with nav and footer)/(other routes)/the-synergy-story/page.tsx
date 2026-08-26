import { OurExcellence } from '@/components/the-synergy-story/OurExcellence';
import { OurLeaders } from '@/components/the-synergy-story/OurLeaders';
import { OurMission } from '@/components/the-synergy-story/OurMission';
import { OurVision } from '@/components/the-synergy-story/OurVision';
import { RestSections } from '@/components/the-synergy-story/RestSections';


// app/the-synergy-story/page.tsx

export const metadata = {
    title: "Synergy Super Speciality Hospital | Our Mission & Vision",
    description:
        "Discover Synergy's mission to offer affordable, compassionate, and comprehensive cancer care in Gorakhpur and beyond.",
    keywords: [
        "Cancer hospital in Gorakhpur",
        "Synergy Super Speciality Hospital",
        "Oncology",
        "Cancer treatment",
        "Comprehensive care",
        "Cancer surgery",
        "chemotherapy",
        "immunotherapy",
    ],
    authors: [{ name: "Synergy Super Speciality Hospital and Cancer Institute" }],
    openGraph: {
        title: "Synergy Super Speciality Hospital | Our Mission & Vision",
        description:
            "Learn about Synergy's journey to becoming a beacon of hope in cancer treatment through dedication, innovation, and compassion.",
        url: "https://synergy-website-alpha.vercel.app/the-synergy-story",
        siteName: "Synergy Super Speciality Hospital",
        images: [
            {
                url: "/og-image.jpg", // place the image inside /public folder
                width: 1200,
                height: 630,
                alt: "Synergy Super Speciality Hospital",
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
        canonical: "https://synergy-website-alpha.vercel.app/the-synergy-story",
    },
};


const TheSynergyStory = () => {
    return (
        <main id='Overview' className='-mt-5 bg-amber-50'>
            <div className="max-w-7xl relative left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
            <OurMission/>
            <OurVision/>
            <OurExcellence/>
            <OurLeaders/>
            <RestSections/>
            </div>
        </main>
    )
}

export default TheSynergyStory
