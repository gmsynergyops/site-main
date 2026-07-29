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

export const useSurvivorsData = () => {
  const t = useTranslations();
  const survivorsData: SurvivorData[] = t.raw("SurvivorsDataMegaArray");
  return survivorsData;
};