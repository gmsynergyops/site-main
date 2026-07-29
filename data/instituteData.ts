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
  themeBgClass: string;
  sections: InstituteSection[];
}

export const useInstituteData = () => {
  const t = useTranslations();
  const instituteData: InstituteData[] = t.raw("InstituteDataMegaArray");
  return instituteData;
};