import { CancerTypeData } from "@/types";
import { useTranslations } from "next-intl";

interface CancerMetadata {
  slug: string;
  key: string;
  heroImage: string;
  overviewImage: string;
  diagnosisImage?: string;
  treatmentImages?: (string | null)[];
}

export const CANCER_METADATA: CancerMetadata[] = [
  {
    "slug": "adrenal-cancer",
    "key": "adrenalCancer",
    "heroImage": "/health-library/banner/adrenal-cancer.png",
    "overviewImage": "/health-library/sub/adrenal-cancer-1.png",
    "diagnosisImage": "/health-library/sub/adrenal-cancer-2.png",
    "treatmentImages": [
      "/health-library/sub/adrenal-cancer-3.png",
      "/health-library/sub/adrenal-cancer-4.png",
    ]
  },
  {
    "slug": "anal-cancer",
    "key": "analCancer",
    "heroImage": "/health-library/banner/anal-cancer.png",
    "overviewImage": "/health-library/sub/anal-cancer-1.png",
    "diagnosisImage": "/health-library/sub/anal-cancer-2.png",
    "treatmentImages": [
      "/health-library/sub/anal-cancer-3.png",
      "/health-library/sub/anal-cancer-4.png",
    ]
  },
  {
    "slug": "bile-duct-cancer",
    "key": "bileDuctCancer",
    "heroImage": "/health-library/banner/bile-duct-cancer.png",
    "overviewImage": "/health-library/sub/bile-duct-cancer-1.png",
    "diagnosisImage": "/health-library/sub/bile-duct-cancer-2.png",
    "treatmentImages": [
      "/health-library/sub/bile-duct-cancer-3.png",
      "/health-library/sub/bile-duct-cancer-4.png",
    ]
  },
  {
    "slug": "bladder-cancer",
    "key": "bladderCancer",
    "heroImage": "/health-library/banner/bladder-cancer.png",
    "overviewImage": "/health-library/sub/bladder-cancer-1.png",
    "diagnosisImage": "/health-library/sub/bladder-cancer-2.png",
    "treatmentImages": [
      "/health-library/sub/bladder-cancer-3.png",
      "/health-library/sub/bladder-cancer-4.png",
    ]
  },
  {
    "slug": "blood-cancer",
    "key": "bloodCancer",
    "heroImage": "/health-library/banner/blood-cancer.png",
    "overviewImage": "/health-library/sub/blood-cancer-1.png",
    "diagnosisImage": "/health-library/sub/blood-cancer-2.png",
    "treatmentImages": [
      "/health-library/sub/blood-cancer-3.png",
      "/health-library/sub/blood-cancer-4.png",
      "/health-library/sub/blood-cancer-5.png",
      "/cancer-types/immunotherapy.jpg"
    ]
  },
  {
    "slug": "bone-cancer",
    "key": "boneCancer",
    "heroImage": "/health-library/banner/bone-cancer.png",
    "overviewImage": "/health-library/sub/bone-cancer-1.png",
    "diagnosisImage": "/health-library/sub/bone-cancer-2.png",
    "treatmentImages": [
      "/health-library/sub/bone-cancer-3.png",
      "/health-library/sub/bone-cancer-4.png",
      "/health-library/sub/bone-cancer-5.png",
      "/health-library/sub/bone-cancer-6.png",
      "/health-library/sub/bone-cancer-7.png",
    ]
  },
  {
    "slug": "brain-cancer",
    "key": "brainCancer",
    "heroImage": "/health-library/banner/brain-cancer.png",
    "overviewImage": "/cancer-types/brain-structure.jpg",
    "diagnosisImage": "/cancer-types/brain-cancer-mri.jpg",
    "treatmentImages": [
      "/cancer-types/brain-surgery.jpg",
      "/cancer-types/brain-radiation.jpg",
      "/cancer-types/brain-chemo.jpg"
    ]
  },
  {
    "slug": "breast-cancer",
    "key": "breastCancer",
    "heroImage": "/health-library/banner/breast-cancer.png",
    "overviewImage": "/cancer-types/breast-anatomy.jpg",
    "diagnosisImage": "/cancer-types/breast-cancer-diagnosis.jpg",
    "treatmentImages": [
      "/cancer-types/breast-surgery.jpg",
      "/cancer-types/breast-radiation.jpg",
      "/cancer-types/breast-chemo.jpg",
      "/cancer-types/breast-hormone.jpg"
    ]
  },
  {
    "slug": "breast-cancer-in-men",
    "key": "breastCancerMen",
    "heroImage": "/health-library/banner/breast-cancer-men.png",
    "overviewImage": "/cancer-types/male-breast-anatomy.jpg",
    "diagnosisImage": "/cancer-types/breast-cancer-men-diagnosis.jpg",
    "treatmentImages": [
      "/cancer-types/male-breast-surgery.jpg",
      "/cancer-types/breast-radiation.jpg",
      "/cancer-types/breast-hormone.jpg",
      "/cancer-types/breast-chemo.jpg"
    ]
  },
  {
    "slug": "cervical-cancer",
    "key": "cervicalCancer",
    "heroImage": "/health-library/banner/cervical-cancer.png",
    "overviewImage": "/cancer-types/cervix-anatomy.jpg",
    "diagnosisImage": "/cancer-types/cervical-diagnosis.jpg",
    "treatmentImages": [
      "/cancer-types/cervical-surgery.jpg",
      "/cancer-types/cervical-radiation.jpg",
      "/cancer-types/cervical-chemo.jpg",
      "/cancer-types/cervical-immunotherapy.jpg"
    ]
  },
  {
    "slug": "colon-rectal-cancer",
    "key": "colonRectalCancer",
    "heroImage": "/health-library/banner/colorectal-cancer.png",
    "overviewImage": "/cancer-types/colorectal-anatomy.jpg",
    "diagnosisImage": "/cancer-types/colorectal-diagnosis.jpg",
    "treatmentImages": [
      "/cancer-types/colorectal-surgery.jpg",
      "/cancer-types/colorectal-chemo.jpg",
      "/cancer-types/colorectal-radiation.jpg",
      "/cancer-types/colorectal-immunotherapy.jpg"
    ]
  },
  {
    "slug": "endometrial-cancer",
    "key": "endometrialCancer",
    "heroImage": "/health-library/banner/endometrial-cancer.png",
    "overviewImage": "/cancer-types/uterus-anatomy.jpg",
    "diagnosisImage": "/cancer-types/endometrial-diagnosis.jpg",
    "treatmentImages": [
      "/cancer-types/hysterectomy.jpg",
      "/cancer-types/radiation-therapy.jpg",
      "/cancer-types/hormone-therapy.jpg",
      "/cancer-types/endometrial-chemo.jpg"
    ]
  },
  {
    "slug": "esophageal-cancer",
    "key": "esophagealCancer",
    "heroImage": "/health-library/banner/esophageal-cancer.png",
    "overviewImage": "/cancer-types/esophagus-anatomy.jpg",
    "diagnosisImage": "/cancer-types/esophageal-diagnosis.jpg",
    "treatmentImages": [
      "/cancer-types/esophagectomy.jpg",
      "/cancer-types/chemo-radiation.jpg",
      "/cancer-types/endoscopic-treatment.jpg",
      "/cancer-types/immunotherapy.jpg"
    ]
  },
  {
    "slug": "eye-cancer",
    "key": "eyeCancer",
    "heroImage": "/health-library/banner/eye-cancer.png",
    "overviewImage": "/cancer-types/eye-anatomy.jpg",
    "diagnosisImage": "/cancer-types/eye-cancer-diagnosis.jpg",
    "treatmentImages": [
      "/cancer-types/eye-radiation.jpg",
      "/cancer-types/eye-surgery.jpg",
      "/cancer-types/eye-laser.jpg",
      "/cancer-types/eye-chemo.jpg"
    ]
  },
  {
    "slug": "gallbladder-cancer",
    "key": "gallbladderCancer",
    "heroImage": "/health-library/banner/gallbladder-cancer.png",
    "overviewImage": "/cancer-types/gallbladder-anatomy.jpg",
    "diagnosisImage": "/cancer-types/gallbladder-diagnosis.jpg",
    "treatmentImages": [
      "/cancer-types/gallbladder-surgery.jpg",
      "/cancer-types/gallbladder-chemotherapy.jpg",
      "/cancer-types/gallbladder-radiation.jpg",
      "/cancer-types/palliative-care.jpg"
    ]
  },
  {
    "slug": "gastric-cancer",
    "key": "gastricCancer",
    "heroImage": "/health-library/banner/gastric-cancer.png",
    "overviewImage": "/cancer-types/gastric-anatomy.jpg",
    "diagnosisImage": "/cancer-types/gastric-cancer-diagnosis.jpg",
    "treatmentImages": [
      "/cancer-types/gastric-surgery.jpg",
      "/cancer-types/gastric-chemotherapy.jpg",
      "/cancer-types/gastric-targeted-therapy.jpg",
      "/cancer-types/gastric-radiation.jpg"
    ]
  },
  {
    "slug": "head-and-neck-cancer",
    "key": "headNeckCancer",
    "heroImage": "/health-library/banner/head-and-neck-cancer.png",
    "overviewImage": "/cancer-types/head-and-neck-anatomy.jpg",
    "diagnosisImage": "/cancer-types/head-and-neck-cancer-diagnosis.jpg",
    "treatmentImages": [
      "/cancer-types/head-and-neck-surgery.jpg",
      "/cancer-types/head-and-neck-radiation.jpg",
      "/cancer-types/head-and-neck-chemotherapy.jpg",
      "/cancer-types/head-and-neck-targeted-therapy.jpg",
      "/cancer-types/head-and-neck-immunotherapy.jpg"
    ]
  },
  {
    "slug": "kidney-cancer",
    "key": "kidneyCancer",
    "heroImage": "/health-library/banner/kidney-cancer.png",
    "overviewImage": "/cancer-types/kidney-anatomy.jpg",
    "diagnosisImage": "/cancer-types/kidney-cancer-diagnosis.jpg",
    "treatmentImages": [
      "/cancer-types/kidney-surgery.jpg",
      null,
      null,
      null,
      null
    ]
  },
  {
    "slug": "laryngeal-cancer",
    "key": "laryngealCancer",
    "heroImage": "/health-library/banner/laryngeal-cancer.png",
    "overviewImage": "/cancer-types/larynx-anatomy.jpg",
    "diagnosisImage": "/cancer-types/laryngeal-cancer-diagnosis.jpg",
    "treatmentImages": [
      "/cancer-types/laryngeal-surgery.jpg",
      null,
      null,
      null,
      null
    ]
  },
  {
    "slug": "liver-cancer",
    "key": "liverCancer",
    "heroImage": "/health-library/banner/liver-cancer.png",
    "overviewImage": "/cancer-types/liver-anatomy.jpg",
    "diagnosisImage": "/cancer-types/liver-cancer-diagnosis.jpg"
  },
  {
    "slug": "lung-cancer",
    "key": "lungCancer",
    "heroImage": "/health-library/banner/lung-cancer.png",
    "overviewImage": "/cancer-types/lung-anatomy.jpg",
    "diagnosisImage": "/cancer-types/lung-cancer-diagnosis.jpg"
  },
  {
    "slug": "multiple-myeloma",
    "key": "multipleMyeloma",
    "heroImage": "/health-library/banner/multiple-myeloma.png",
    "overviewImage": "/cancer-types/bone-marrow.jpg",
    "diagnosisImage": "/cancer-types/multiple-myeloma-diagnosis.jpg"
  },
  {
    "slug": "neuroendocrine-tumors",
    "key": "neuroendocrineTumors",
    "heroImage": "/health-library/banner/neuroendocrine-tumors.png",
    "overviewImage": "/cancer-types/neuroendocrine.jpg",
    "diagnosisImage": "/cancer-types/neuroendocrine-tumors-diagnosis.jpg"
  },
  {
    "slug": "non-hodgkin-lymphoma",
    "key": "nonHodgkinLymphoma",
    "heroImage": "/health-library/banner/non-hodgkin-lymphoma.png",
    "overviewImage": "/cancer-types/non-hodgkin-lymphoma.jpg",
    "diagnosisImage": "/cancer-types/non-hodgkin-lymphoma-diagnosis.jpg"
  },
  {
    "slug": "oral-cancer",
    "key": "oralCancer",
    "heroImage": "/health-library/banner/oral-cancer.png",
    "overviewImage": "/cancer-types/oral-cancer.jpg",
    "diagnosisImage": "/cancer-types/oral-cancer-diagnosis.jpg"
  },
  {
    "slug": "ovarian-cancer",
    "key": "ovarianCancer",
    "heroImage": "/health-library/banner/ovarian-cancer.png",
    "overviewImage": "/cancer-types/ovarian-cancer.jpg",
    "diagnosisImage": "/cancer-types/ovarian-cancer-diagnosis.jpg"
  },
  {
    "slug": "pancreatic-cancer",
    "key": "pancreaticCancer",
    "heroImage": "/health-library/banner/pancreatic-cancer.png",
    "overviewImage": "/cancer-types/pancreatic-cancer.jpg",
    "diagnosisImage": "/cancer-types/pancreatic-cancer-diagnosis.jpg"
  },
  {
    "slug": "penile-cancer",
    "key": "penileCancer",
    "heroImage": "/health-library/banner/penile-cancer.png",
    "overviewImage": "/cancer-types/penile-cancer.jpg",
    "diagnosisImage": "/cancer-types/penile-cancer-diagnosis.jpg"
  },
  {
    "slug": "pituitary-tumors",
    "key": "pituitaryTumors",
    "heroImage": "/health-library/banner/pituitary-tumor.png",
    "overviewImage": "/cancer-types/pituitary-tumor.jpg",
    "diagnosisImage": "/cancer-types/pituitary-tumor-diagnosis.jpg"
  },
  {
    "slug": "prostate-cancer",
    "key": "prostateCancer",
    "heroImage": "/health-library/banner/prostate-cancer.png",
    "overviewImage": "/cancer-types/prostate-cancer.jpg",
    "diagnosisImage": "/cancer-types/prostate-cancer-diagnosis.jpg"
  },
  {
    "slug": "salivary-gland-cancer",
    "key": "salivaryGlandCancer",
    "heroImage": "/health-library/banner/salivary-gland-cancer.png",
    "overviewImage": "/cancer-types/salivary-gland.jpg",
    "diagnosisImage": "/cancer-types/salivary-gland-diagnosis.jpg"
  },
  {
    "slug": "skin-cancer",
    "key": "skinCancer",
    "heroImage": "/health-library/banner/skin-cancer.png",
    "overviewImage": "/cancer-types/skin-cancer.jpg",
    "diagnosisImage": "/cancer-types/skin-cancer-diagnosis.jpg"
  },
  {
    "slug": "stomach-cancer",
    "key": "stomachCancer",
    "heroImage": "/health-library/banner/stomach-cancer.png",
    "overviewImage": "/cancer-types/stomach-cancer.jpg",
    "diagnosisImage": "/cancer-types/stomach-cancer-diagnosis.jpg"
  },
  {
    "slug": "uterine-cancer",
    "key": "uterineCancer",
    "heroImage": "/health-library/banner/uterine-cancer.png",
    "overviewImage": "/cancer-types/uterine-cancer.jpg",
    "diagnosisImage": "/cancer-types/uterine-cancer-diagnosis.jpg"
  }
];

export const useCancerTypesData = (): CancerTypeData[] => {
  const t = useTranslations("healthLibrary.cancerTypes");

  return CANCER_METADATA.map((item) => {
    const diag = t.raw(`${item.key}.diagnosisSection`);
    const treat = t.raw(`${item.key}.treatementOptionsSection`);

    return {
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
      diagnosisSection: {
        ...diag,
        Image: item.diagnosisImage || "/department/sub/diagnostic-imaging.png",
      },
      treatementOptionsSection: {
        ...treat,
        options: (treat?.options || []).map((opt: any, idx: number) => {
          const img = item.treatmentImages?.[idx];
          return {
            ...opt,
            ...(img ? { Image: img } : {}),
          };
        }),
      },
      prognosisSection: t.raw(`${item.key}.prognosisSection`),
    };
  });
};
