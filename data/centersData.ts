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

export const useCentersData = () => {
  const t = useTranslations();

  const centersData: CentersData[] =
    t.raw("CentersDataMegaArray");

  return centersData;
};