// app/donate/page.tsx
import { Donate } from '@/components/Modules/cancer-survivors/get-involved/Donate'
import React from 'react'


export const metadata = {
    title: "Support Cancer Care | Donate to Synergy Super Speciality Hospital",
    description:
      "Contribute to the cause of affordable cancer care. Your donation helps us treat underprivileged patients and upgrade our facilities at Synergy Hospital.",
    keywords: [
      "Donate cancer hospital",
      "Support Synergy Hospital",
      "Cancer treatment donation",
      "Help cancer patients",
      "Charity for cancer care",
      "Affordable healthcare Gorakhpur",
      "Synergy Super Speciality Hospital",
    ],
    authors: [{ name: "Synergy Super Speciality Hospital" }],
    openGraph: {
      title: "Support Cancer Care | Donate to Synergy Hospital",
      description:
        "Your support brings hope. Join us in the fight against cancer by donating to Synergy Super Speciality Hospital, Gorakhpur.",
      url: "https://synergy-website-alpha.vercel.app/donate",
      siteName: "Synergy Super Speciality Hospital",
      images: [
        {
          url: "/donate-og-image.jpg", // put a good donation banner image in /public
          width: 1200,
          height: 630,
          alt: "Donate to Synergy Hospital",
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
      canonical: "https://synergy-website-alpha.vercel.app/donate",
    },
    icons: {
      icon: "/favicon.ico",
    },
    twitter: {
      card: "summary_large_image",
      title: "Support Cancer Care | Donate to Synergy Hospital",
      description:
        "Join Synergy Super Speciality Hospital in providing affordable cancer care by making a donation today.",
      images: ["/donate-og-image.jpg"],
      creator: "@synergy_hospital",
    },
  };


const DonatePage = () => {
  return (
    <div>
        <Donate/>
    </div>
  )
}

export default DonatePage
