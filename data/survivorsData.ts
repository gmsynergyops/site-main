// data/survivorsData.ts
import { useTranslations } from 'next-intl';

export interface SurvivorSection {
  title: string;
  description?: string[];
  items?: string[];
  isQuotes?: boolean;
}

export interface SurvivorData {
  slug: string;
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  bannerImage: string;
  themeBgClass: string;
  sections: SurvivorSection[];
}

export const SURVIVORS_METADATA: Record<string, { bannerImage: string; themeBgClass?: string }> = {
  "cancer-survivor-mean": {
    bannerImage: "/fallback-image.webp",
    themeBgClass: "bg-linear-to-br from-rose-50 via-white to-orange-50",
  },
  "testimonials": {
    bannerImage: "/fallback-image.webp",
    themeBgClass: "bg-linear-to-br from-blue-50 via-white to-indigo-50",
  },
  "support-for-families": {
    bannerImage: "/fallback-image.webp",
    themeBgClass: "bg-linear-to-br from-teal-50 via-white to-emerald-50",
  },
};

export const useSurvivorsData = (): SurvivorData[] => {
  const t = useTranslations();
  const survivorsData: SurvivorData[] = t.raw("SurvivorsDataMegaArray") || [];

  return survivorsData.map((item) => {
    const meta = SURVIVORS_METADATA[item.slug] || { bannerImage: "/fallback-image.webp" };
    return {
      ...item,
      bannerImage: meta.bannerImage,
      themeBgClass: item.themeBgClass || meta.themeBgClass || "",
    };
  });
};