// app/[section]/[slug]/page.tsx
import {
    CancerSurvivorsMap,
    DoctorsMap,
    HealthLibraryMap,
    PatientCareMap,
    ServicesMap,
    CancerCareMap,
    InstituteMap,
    CentersMap 
} from "@/data/DYNAMIC_MAPS";
import { seoData } from "@/data/seoData";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { JSX } from "react";

export async function generateMetadata(props: {
  params: Promise<{ section: string; slug: string }>;
}): Promise<Metadata> {
  const { section, slug } = await props.params;

  const meta = seoData[section]?.[slug];

  if (!meta) {
    return {
      title: "Page Not Found",
      description: "This page does not exist.",
    };
  }

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      url: `https://synergy-website-alpha.vercel.app/${section}/${slug}`,
      images: [
        {
          url: meta.ogImage,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [meta.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function DynamicPage(props: {
  params: Promise<{ section: string; slug: string }>;
}) {
  const { section, slug } = await props.params;
  
  if (section === "leadership") {
      const DynamicComponent = dynamic(() => import(`@/components/leadership-pages/${slug}`));
      return <DynamicComponent />;
  }

  // YAHAN PAR SAARI MAPPING EK HI JAGAH HONI CHAHIYE
  const sectionMap: Record<string, Record<string, JSX.Element>> = {
    services: ServicesMap,
    "patient-care": PatientCareMap,
    "health-library": HealthLibraryMap,
    survivors: CancerSurvivorsMap,
    doctors: DoctorsMap,
    "cancer-care": CancerCareMap,
    institute: InstituteMap,
    centers: CentersMap, // <-- Ab ye bilkul sahi jagah par hai
  };

  const Component = sectionMap[section]?.[slug];

  if (!Component) return notFound();

  return Component;
}