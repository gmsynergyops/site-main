import { OurExcellence } from '@/components/the-synergy-story/OurExcellence';
import { OurLeaders } from '@/components/the-synergy-story/OurLeaders';
import { OurMission } from '@/components/the-synergy-story/OurMission';
import { OurVision } from '@/components/the-synergy-story/OurVision';
import { RestSections } from '@/components/the-synergy-story/RestSections';


// app/the-synergy-story/page.tsx

import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata(props: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await props.params;
    const t = await getTranslations({ locale, namespace: 'TheSynergyStory.metadata' });

    return {
        title: t('title'),
        description: t('description'),
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
            title: t('title'),
            description: t('description'),
            url: `https://synergy-website-alpha.vercel.app/${locale}/the-synergy-story`,
            siteName: "Synergy Super Speciality Hospital",
            images: [
                {
                    url: "/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Synergy Super Speciality Hospital",
                },
            ],
            locale: locale === "hi" ? "hi_IN" : "en_US",
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
            canonical: `https://synergy-website-alpha.vercel.app/${locale}/the-synergy-story`,
        },
    };
}


const TheSynergyStory = () => {
    return (
        <main id='Overview' className='-mt-5 bg-mauve-100'>
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
