// data/cancerCareData.ts
import { useTranslations } from 'next-intl';

export interface CancerCareSection {
  title: string;
  description?: string[];
  items?: string[];
}

export interface CancerCareData {
  slug: string;
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  bannerImage: string;
  themeBgClass: string;
  sections: CancerCareSection[];
}

export const useCancerCareData = () => {
  const t = useTranslations();
  const cancerCareData: CancerCareData[] = t.raw("CancerCareDataMegaArray");
  return cancerCareData;
};