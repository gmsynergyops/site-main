import { useTranslations } from 'next-intl';

export interface InstituteSection {
  title: string;
  description?: string[];
  items?: string[];
}

export interface InstituteData {
  slug: string;
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  bannerImage: string;
  bannerImageMobile?: string; // Optional mobile-specific banner
  themeBgClass: string;
  sections: InstituteSection[];
}

export const INSTITUTE_METADATA: Record<string, { bannerImage: string; themeBgClass?: string }> = {
  overview: {
    bannerImage: "/fallback-image.webp",
    themeBgClass: "bg-linear-to-br from-blue-50 via-white to-sky-50",
  },
  vision: {
    bannerImage: "/fallback-image.webp",
    themeBgClass: "bg-linear-to-br from-indigo-50 via-white to-purple-50",
  },
};

export const useInstituteData = (): InstituteData[] => {
  const t = useTranslations();
  const instituteData: InstituteData[] = t.raw("InstituteDataMegaArray") || [];

  return instituteData.map((item) => {
    const meta = INSTITUTE_METADATA[item.slug] || { bannerImage: "/fallback-image.webp" };
    return {
      ...item,
      bannerImage: meta.bannerImage,
      themeBgClass: item.themeBgClass || meta.themeBgClass || "",
    };
  });
};