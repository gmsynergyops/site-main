import { CancerTypeData } from "@/types";
import { useTranslations } from "next-intl";

interface CancerMetadata {
  slug: string;
  key: string;
  heroImage: string;
  overviewImage: string;
}

export const CANCER_METADATA: CancerMetadata[] = [
  {
    "slug": "adrenal-cancer",
    "key": "adrenalCancer",
    "heroImage": "/health-library/banner/adrenal-cancer.png",
    "overviewImage": "/cancer-types/adrenal-glands.jpg"
  },
  {
    "slug": "anal-cancer",
    "key": "analCancer",
    "heroImage": "/health-library/banner/anal-cancer.png",
    "overviewImage": "/cancer-types/anal-glands.jpg"
  },
  {
    "slug": "bile-duct-cancer",
    "key": "bileDuctCancer",
    "heroImage": "/health-library/banner/bile-duct-cancer.png",
    "overviewImage": "/cancer-types/bile-duct-anatomy.jpg"
  },
  {
    "slug": "bladder-cancer",
    "key": "bladderCancer",
    "heroImage": "/health-library/banner/bladder-cancer.png",
    "overviewImage": "/cancer-types/bladder-anatomy.jpg"
  },
  {
    "slug": "blood-cancer",
    "key": "bloodCancer",
    "heroImage": "/health-library/banner/blood-cancer.png",
    "overviewImage": "/cancer-types/blood-cancer-anatomy.jpg"
  },
  {
    "slug": "bone-cancer",
    "key": "boneCancer",
    "heroImage": "/health-library/banner/bone-cancer.png",
    "overviewImage": "/cancer-types/bone-cancer-anatomy.jpg"
  },
  {
    "slug": "brain-cancer",
    "key": "brainCancer",
    "heroImage": "/health-library/banner/brain-cancer.png",
    "overviewImage": "/cancer-types/brain-structure.jpg"
  },
  {
    "slug": "breast-cancer",
    "key": "breastCancer",
    "heroImage": "/health-library/banner/breast-cancer.png",
    "overviewImage": "/cancer-types/breast-anatomy.jpg"
  },
  {
    "slug": "breast-cancer-in-men",
    "key": "breastCancerMen",
    "heroImage": "/health-library/banner/breast-cancer-men.png",
    "overviewImage": "/cancer-types/male-breast-anatomy.jpg"
  },
  {
    "slug": "cervical-cancer",
    "key": "cervicalCancer",
    "heroImage": "/health-library/banner/cervical-cancer.png",
    "overviewImage": "/cancer-types/cervix-anatomy.jpg"
  },
  {
    "slug": "colon-rectal-cancer",
    "key": "colonRectalCancer",
    "heroImage": "/health-library/banner/colorectal-cancer.png",
    "overviewImage": "/cancer-types/colorectal-anatomy.jpg"
  },
  {
    "slug": "endometrial-cancer",
    "key": "endometrialCancer",
    "heroImage": "/health-library/banner/endometrial-cancer.png",
    "overviewImage": "/cancer-types/uterus-anatomy.jpg"
  },
  {
    "slug": "esophageal-cancer",
    "key": "esophagealCancer",
    "heroImage": "/health-library/banner/esophageal-cancer.png",
    "overviewImage": "/cancer-types/esophagus-anatomy.jpg"
  },
  {
    "slug": "eye-cancer",
    "key": "eyeCancer",
    "heroImage": "/health-library/banner/eye-cancer.png",
    "overviewImage": "/cancer-types/eye-anatomy.jpg"
  },
  {
    "slug": "gallbladder-cancer",
    "key": "gallbladderCancer",
    "heroImage": "/health-library/banner/gallbladder-cancer.png",
    "overviewImage": "/cancer-types/gallbladder-anatomy.jpg"
  },
  {
    "slug": "gastric-cancer",
    "key": "gastricCancer",
    "heroImage": "/health-library/banner/gastric-cancer.png",
    "overviewImage": "/cancer-types/gastric-anatomy.jpg"
  },
  {
    "slug": "head-and-neck-cancer",
    "key": "headNeckCancer",
    "heroImage": "/health-library/banner/head-and-neck-cancer.png",
    "overviewImage": "/cancer-types/head-and-neck-anatomy.jpg"
  },
  {
    "slug": "kidney-cancer",
    "key": "kidneyCancer",
    "heroImage": "/health-library/banner/kidney-cancer.png",
    "overviewImage": "/cancer-types/kidney-anatomy.jpg"
  },
  {
    "slug": "laryngeal-cancer",
    "key": "laryngealCancer",
    "heroImage": "/health-library/banner/laryngeal-cancer.png",
    "overviewImage": "/cancer-types/larynx-anatomy.jpg"
  },
  {
    "slug": "liver-cancer",
    "key": "liverCancer",
    "heroImage": "/health-library/banner/liver-cancer.png",
    "overviewImage": "/cancer-types/liver-anatomy.jpg"
  },
  {
    "slug": "lung-cancer",
    "key": "lungCancer",
    "heroImage": "/health-library/banner/lung-cancer.png",
    "overviewImage": "/cancer-types/lung-anatomy.jpg"
  },
  {
    "slug": "multiple-myeloma",
    "key": "multipleMyeloma",
    "heroImage": "/health-library/banner/multiple-myeloma.png",
    "overviewImage": "/cancer-types/bone-marrow.jpg"
  },
  {
    "slug": "neuroendocrine-tumors",
    "key": "neuroendocrineTumors",
    "heroImage": "/health-library/banner/neuroendocrine-tumors.png",
    "overviewImage": "/cancer-types/neuroendocrine.jpg"
  },
  {
    "slug": "non-hodgkin-lymphoma",
    "key": "nonHodgkinLymphoma",
    "heroImage": "/health-library/banner/non-hodgkin-lymphoma.png",
    "overviewImage": "/cancer-types/non-hodgkin-lymphoma.jpg"
  },
  {
    "slug": "oral-cancer",
    "key": "oralCancer",
    "heroImage": "/health-library/banner/oral-cancer.png",
    "overviewImage": "/cancer-types/oral-cancer.jpg"
  },
  {
    "slug": "ovarian-cancer",
    "key": "ovarianCancer",
    "heroImage": "/health-library/banner/ovarian-cancer.png",
    "overviewImage": "/cancer-types/ovarian-cancer.jpg"
  },
  {
    "slug": "pancreatic-cancer",
    "key": "pancreaticCancer",
    "heroImage": "/health-library/banner/pancreatic-cancer.png",
    "overviewImage": "/cancer-types/pancreatic-cancer.jpg"
  },
  {
    "slug": "penile-cancer",
    "key": "penileCancer",
    "heroImage": "/health-library/banner/penile-cancer.png",
    "overviewImage": "/cancer-types/penile-cancer.jpg"
  },
  {
    "slug": "pituitary-tumors",
    "key": "pituitaryTumors",
    "heroImage": "/health-library/banner/pituitary-tumor.png",
    "overviewImage": "/cancer-types/pituitary-tumor.jpg"
  },
  {
    "slug": "prostate-cancer",
    "key": "prostateCancer",
    "heroImage": "/health-library/banner/prostate-cancer.png",
    "overviewImage": "/cancer-types/prostate-cancer.jpg"
  },
  {
    "slug": "salivary-gland-cancer",
    "key": "salivaryGlandCancer",
    "heroImage": "/health-library/banner/salivary-gland-cancer.png",
    "overviewImage": "/cancer-types/salivary-gland.jpg"
  },
  {
    "slug": "skin-cancer",
    "key": "skinCancer",
    "heroImage": "/health-library/banner/skin-cancer.png",
    "overviewImage": "/cancer-types/skin-cancer.jpg"
  },
  {
    "slug": "stomach-cancer",
    "key": "stomachCancer",
    "heroImage": "/health-library/banner/stomach-cancer.png",
    "overviewImage": "/cancer-types/stomach-cancer.jpg"
  },
  {
    "slug": "uterine-cancer",
    "key": "uterineCancer",
    "heroImage": "/health-library/banner/uterine-cancer.png",
    "overviewImage": "/cancer-types/uterine-cancer.jpg"
  }
];

export const useCancerTypesData = (): CancerTypeData[] => {
  const t = useTranslations("healthLibrary.cancerTypes");

  return CANCER_METADATA.map((item) => ({
    typeName: item.slug,
    heroSection: {
      Image: item.heroImage,
      title: t(`${item.key}.heroSection.title`),
      description: t(`${item.key}.heroSection.description`),
    },
    overviewSection: {
      Image: item.overviewImage,
      h2: t(`${item.key}.overviewSection.h2`),
      paragraphs: t.raw(`${item.key}.overviewSection.paragraphs`),
    },
    symptomsSection: t.raw(`${item.key}.symptomsSection`),
    diagnosisSection: t.raw(`${item.key}.diagnosisSection`),
    treatementOptionsSection: t.raw(`${item.key}.treatementOptionsSection`),
    prognosisSection: t.raw(`${item.key}.prognosisSection`),
  }));
};
