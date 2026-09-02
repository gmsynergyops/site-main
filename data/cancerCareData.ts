// data/cancerCareData.ts
import { useTranslations } from 'next-intl';

export interface CancerCareSection {
  title: string;
  description?: string[];
  items?: string[];
}

export interface CancerCareTextData {
  slug: string;
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  sections: CancerCareSection[];
}

export interface CancerCareVisualMeta {
  bannerImage: string;
  themeBgClass: string;
}

export interface CancerCareData extends CancerCareTextData, CancerCareVisualMeta {}

export const CANCER_CARE_METADATA: Record<string, CancerCareVisualMeta> = {
  "preventive-oncology": {
    bannerImage: "/cancer-care/preventive-oncology.png",
    themeBgClass: "bg-linear-to-br from-teal-50 via-white to-emerald-50",
  },
  "surgical-oncology": {
    bannerImage: "/cancer-care/surgical-oncology.png",
    themeBgClass: "bg-linear-to-br from-blue-50 via-white to-indigo-50",
  },
  "medical-oncology": {
    bannerImage: "/cancer-care/medical-oncology.png",
    themeBgClass: "bg-linear-to-br from-violet-50 via-white to-purple-50",
  },
  "radiation-oncology": {
    bannerImage: "/cancer-care/radiation-oncology.png",
    themeBgClass: "bg-linear-to-br from-orange-50 via-white to-amber-50",
  },
  "multidisciplinary-tumour-board": {
    bannerImage: "/cancer-care/multidisciplinary-tumour-board.png",
    themeBgClass: "bg-linear-to-br from-sky-50 via-white to-blue-50",
  },
  "advanced-technology": {
    bannerImage: "/cancer-care/advanced-technology.png",
    themeBgClass: "bg-linear-to-br from-slate-50 via-white to-gray-100",
  },
  "patient-centric-care": {
    bannerImage: "/cancer-care/patient-centric-care.png",
    themeBgClass: "bg-linear-to-br from-rose-50 via-white to-pink-50",
  },
};

const DEFAULT_CANCER_CARE_META: CancerCareVisualMeta = {
  bannerImage: "/fallback-image.webp",
  themeBgClass: "bg-linear-to-br from-blue-50 via-white to-indigo-50",
};

export const useCancerCareData = (): CancerCareData[] => {
  const t = useTranslations();
  const textItems: CancerCareTextData[] = t.raw("CancerCareDataMegaArray") || [];

  return textItems.map((item) => {
    const meta = CANCER_CARE_METADATA[item.slug] || DEFAULT_CANCER_CARE_META;
    return {
      ...item,
      bannerImage: meta.bannerImage,
      themeBgClass: meta.themeBgClass,
    };
  });
};