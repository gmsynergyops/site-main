// app/page.tsx

import { Homepage } from "./_components/homepage";
import InsurancePartners from '@/components/global/InsurancePartners';


export const metadata = {
    title: "Synergy Super Speciality Hospital - Best Cancer Treatment in Gorakhpur",
    description:
        "Synergy Super Speciality Hospital is Gorakhpur's leading cancer hospital offering advanced, affordable cancer care with a compassionate touch.",
    keywords: [
        "Synergy Hospital Gorakhpur",
        "Cancer hospital Gorakhpur",
        "Best cancer treatment UP",
        "Affordable cancer care",
        "Oncology specialist Gorakhpur",
        "Synergy Super Speciality",
        "Top cancer doctors Gorakhpur",
    ],
    authors: [{ name: "Synergy Super Speciality Hospital" }],
    openGraph: {
        title: "Synergy Super Speciality Hospital - Best Cancer Hospital in Gorakhpur",
        description:
            "Get world-class cancer treatment at Synergy Hospital, Gorakhpur. Our expert oncologists and modern facilities offer hope and healing.",
        url: "https://synergy-website-alpha.vercel.app/",
        siteName: "Synergy Super Speciality Hospital",
        images: [
            {
                url: "/og-image-home.jpg", // Add this image in /public
                width: 1200,
                height: 630,
                alt: "Synergy Hospital Gorakhpur",
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
        canonical: "https://synergy-website-alpha.vercel.app/",
    },
    icons: {
        icon: "/favicon.ico",
    },
    twitter: {
        card: "summary_large_image",
        title: "Synergy Super Speciality Hospital - Best Cancer Hospital in Gorakhpur",
        description:
            "Get advanced cancer treatment from experienced oncologists at Synergy Hospital, Gorakhpur.",
        images: ["/og-image-home.jpg"],
        creator: "@synergy_hospital",
    },
};


export default function Home() {

    return (
        <main>
            <Homepage />
            <InsurancePartners />
        </main>

    );
}
