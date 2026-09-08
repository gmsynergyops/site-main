import { useTranslations } from "next-intl";

export interface CenterSection {
  title: string;
  description?: string[];
  items?: string[];
}

export interface CenterLocation {
  id: string;
  number: string;
  name: string;
  shortName: string;
  tag: string;
  address: string;
  description: string;
  mapUrl: string;
  accent: "blue" | "pink";
}

export interface CentersData {
  slug: string;
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  bannerImage: string;
  themeBgClass: string;

  /**
   * Physical Synergy centres.
   * Currently used by the `network` page.
   */
  centers?: CenterLocation[];

  sections: CenterSection[];
}

export const CENTERS_METADATA: Record<string, { bannerImage: string; themeBgClass?: string }> = {
  "network": {
    bannerImage: "/fallback-image.webp",
    themeBgClass: "bg-linear-to-br from-blue-50 via-white to-sky-50",
  },
  "outstation-support": {
    bannerImage: "/fallback-image.webp",
    themeBgClass: "bg-linear-to-br from-teal-50 via-white to-emerald-50",
  },
  "find-center": {
    bannerImage: "/fallback-image.webp",
    themeBgClass: "bg-linear-to-br from-indigo-50 via-white to-violet-50",
  },
};

export const useCentersData = (): CentersData[] => {
  const t = useTranslations();

  const centersData: CentersData[] = t.raw("CentersDataMegaArray") || [];

  return centersData.map((item) => {
    const meta = CENTERS_METADATA[item.slug] || { bannerImage: "/fallback-image.webp" };
    return {
      ...item,
      bannerImage: meta.bannerImage,
      themeBgClass: item.themeBgClass || meta.themeBgClass || "",
    };
  });
};