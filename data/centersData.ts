import { useTranslations } from 'next-intl';

export interface CenterSection {
  title: string;
  description?: string[];
  items?: string[];
}

export interface CentersData {
  slug: string;
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  bannerImage: string;
  themeBgClass: string;
  sections: CenterSection[];
}

export const useCentersData = () => {
  const t = useTranslations();
  const centersData: CentersData[] = t.raw("CentersDataMegaArray");
  return centersData;
};