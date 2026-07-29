import { CancerTypeData } from "@/types";
import { useTranslations } from "next-intl";

export const useCancerTypesData = () => {
  const t = useTranslations("healthLibrary.cancerTypes")
 const CANCER_TYPES_DATA: CancerTypeData[] = [
  {
    typeName: "adrenal-cancer",
    heroSection: {
      Image: "/cancer-types/adrenal-cancer-hero.jpg",
      title: t('adrenalCancer.heroSection.title'),
      description:
        t('adrenalCancer.heroSection.description'),
    },
    overviewSection: {
      Image: "/cancer-types/adrenal-glands.jpg",
      h2: t('adrenalCancer.overviewSection.h2'),
      paragraphs: t.raw('adrenalCancer.overviewSection.paragraphs'),
    },
    symptomsSection: {
      ...t.raw("adrenalCancer.symptomsSection"),
    },
    diagnosisSection: {
      ...t.raw("adrenalCancer.diagnosisSection"),
    },
    treatementOptionsSection: {
      ...t.raw("adrenalCancer.treatementOptionsSection"),
    },
    prognosisSection: {
      ...t.raw("adrenalCancer.prognosisSection"),
    },
  },
  {
    typeName: "anal-cancer",
    heroSection: {
      Image: "/cancer-types/anal-cancer-hero.jpg",
      title: t('analCancer.heroSection.title'),
      description:
        t('analCancer.heroSection.description'),
    },
    overviewSection: {
      Image: "/cancer-types/anal-glands.jpg",
      h2: t('analCancer.overviewSection.h2'),
      paragraphs: t.raw('analCancer.overviewSection.paragraphs'),
    },
    symptomsSection: {
      ...t.raw("analCancer.symptomsSection"),
    },
    diagnosisSection: {
      ...t.raw("analCancer.diagnosisSection"),
    },
    treatementOptionsSection: {
      ...t.raw("analCancer.treatementOptionsSection"),
    },
    prognosisSection: {
      ...t.raw("analCancer.prognosisSection"),
    },
  },
  {
    typeName: "bile-duct-cancer",
    heroSection: {
      Image: "/cancer-types/bile-duct-cancer-hero.jpg",
      title: t('bileDuctCancer.heroSection.title'),
      description:
        t('bileDuctCancer.heroSection.description'),
    },
    overviewSection: {
      Image: "/cancer-types/bile-duct-anatomy.jpg",
      h2: t('bileDuctCancer.overviewSection.h2'),
      paragraphs: t.raw('bileDuctCancer.overviewSection.paragraphs'),
    },
    symptomsSection: {
      ...t.raw("bileDuctCancer.symptomsSection"),
    },
    diagnosisSection: {
      ...t.raw("bileDuctCancer.diagnosisSection"),
    },
    treatementOptionsSection: {
      ...t.raw("bileDuctCancer.treatementOptionsSection"),
    },
    prognosisSection: {
      ...t.raw("bileDuctCancer.prognosisSection"),
    },
  },



  {
    typeName: "bile-duct-cancer",
    heroSection: {
      Image: "/cancer-types/bile-duct-cancer-hero.jpg",
      title: "Understanding Bile Duct Cancer",
      description:
        "Learn about symptoms, diagnosis, and treatment options for bile duct cancer (cholangiocarcinoma).",
    },
    overviewSection: {
      Image: "/cancer-types/bile-duct-anatomy.jpg",
      h2: "What is Bile Duct Cancer?",
      paragraphs: [
        "Bile duct cancer, also known as cholangiocarcinoma, is a rare and aggressive form of cancer that originates in the bile ducts — the channels that carry bile from the liver and gallbladder to the small intestine.",
        "There are three main types depending on location: intrahepatic (inside the liver), perihilar (where bile ducts exit the liver), and distal (near the small intestine). It often presents at an advanced stage due to subtle early symptoms.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Bile Duct Cancer",
      symptoms: [
        {
          title: "Jaundice",
          description:
            "Yellowing of the skin and eyes caused by bile duct blockage.",
        },
        {
          title: "Abdominal Pain",
          description: "Especially in the upper right part of the abdomen.",
        },
        {
          title: "Unintended Weight Loss",
          description: "Significant and unexplained weight loss.",
        },
        {
          title: "Dark Urine and Pale Stools",
          description: "Caused by disrupted bile flow.",
        },
        { title: "Fatigue", description: "General weakness and low energy." },
        {
          title: "Itchy Skin",
          description: "Due to accumulation of bile salts under the skin.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Blood Tests",
          paragraph: "Liver function tests and tumor markers like CA 19-9.",
        },
        {
          index: "2",
          h3: "Imaging Scans",
          paragraph:
            "Ultrasound, CT, MRI, or MRCP to visualize bile ducts and detect tumors.",
        },
        {
          index: "3",
          h3: "Biopsy",
          paragraph:
            "Sample taken via endoscopic or needle-guided methods to confirm cancer type.",
        },
      ],
      Image: "/cancer-types/bile-duct-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "Surgical resection is the best chance for a cure if the tumor is localized and operable.",
          Image: "/cancer-types/bile-duct-surgery.jpg",
        },
        {
          h3: { span: "2", copy: "Liver Transplant" },
          p: "In selected early-stage cases, a liver transplant may be an option, especially for perihilar tumors.",
          Image: "/cancer-types/liver-transplant.jpg",
        },
        {
          h3: { span: "3", copy: "Chemotherapy and Radiation" },
          p: "Used for advanced or inoperable cancers, often to relieve symptoms and slow progression.",
          Image: "/cancer-types/bile-duct-chemo.jpg",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "Prognosis varies by tumor location and stage at diagnosis. Unfortunately, many bile duct cancers are detected late, which limits treatment options and lowers survival rates.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Tumor confined to bile duct",
            survival: "30-40%",
          },
          {
            stage: "II",
            description: "Tumor has spread to nearby tissue",
            survival: "20-30%",
          },
          {
            stage: "III",
            description: "Involvement of lymph nodes",
            survival: "10-15%",
          },
          { stage: "IV", description: "Distant metastasis", survival: "2-5%" },
        ],
      },
    },
  },

  {
    typeName: "bladder-cancer",
    heroSection: {
      Image: "/cancer-types/bladder-cancer-hero.jpg",
      title: "Understanding Bladder Cancer",
      description:
        "Explore causes, symptoms, diagnosis, and treatment options for bladder cancer.",
    },
    overviewSection: {
      Image: "/cancer-types/bladder-anatomy.jpg",
      h2: "What is Bladder Cancer?",
      paragraphs: [
        "Bladder cancer starts in the cells of the bladder, the organ that stores urine. It most commonly begins in the transitional cells that line the inside of the bladder.",
        "The most common type is urothelial carcinoma (previously known as transitional cell carcinoma), but it can also involve squamous cells or glandular cells. Smoking is the most significant risk factor.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Bladder Cancer",
      symptoms: [
        {
          title: "Blood in Urine",
          description:
            "Visible or microscopic blood in the urine, often the first sign.",
        },
        {
          title: "Frequent Urination",
          description:
            "Needing to urinate more often than usual, especially at night.",
        },
        {
          title: "Painful Urination",
          description: "Pain or burning sensation during urination.",
        },
        {
          title: "Urgency to Urinate",
          description:
            "A strong feeling of needing to urinate, even if the bladder isn't full.",
        },
        {
          title: "Back or Pelvic Pain",
          description:
            "Pain in the lower back or pelvic region may occur as the tumor grows.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Urinalysis",
          paragraph: "Testing a urine sample for blood or cancer cells.",
        },
        {
          index: "2",
          h3: "Cystoscopy",
          paragraph:
            "A procedure where a thin tube with a camera is inserted into the bladder to look for tumors.",
        },
        {
          index: "3",
          h3: "Biopsy",
          paragraph:
            "Tissue sample taken from suspected tumor for analysis to confirm cancer.",
        },
      ],
      Image: "/cancer-types/bladder-cancer-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Transurethral Resection (TUR)" },
          p: "A common procedure to remove bladder tumors through the urethra without the need for incisions.",
          Image: "/cancer-types/tur-procedure.jpg",
        },
        {
          h3: { span: "2", copy: "Cystectomy" },
          p: "Surgical removal of part or all of the bladder, often combined with reconstructive surgery.",
          Image: "/cancer-types/cystectomy.jpg",
        },
        {
          h3: { span: "3", copy: "Chemotherapy" },
          p: "Chemotherapy can be given directly into the bladder (intravesical) or systemically to treat advanced cancer.",
          Image: "/cancer-types/bladder-cancer-chemotherapy.jpg",
        },
        {
          h3: { span: "4", copy: "Immunotherapy" },
          p: "For some cases, treatments like Bacillus Calmette-Guérin (BCG) immunotherapy can stimulate the immune system to fight cancer cells.",
          Image: "/cancer-types/bladder-immunotherapy.jpg",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "The prognosis for bladder cancer depends on the stage at diagnosis, tumor grade, and response to treatment. Early-stage cancers have a much higher chance of successful treatment.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Cancer confined to the bladder lining",
            survival: "90%+",
          },
          {
            stage: "II",
            description: "Cancer has spread to bladder muscle",
            survival: "60-70%",
          },
          {
            stage: "III",
            description: "Spread to surrounding tissues or lymph nodes",
            survival: "25-35%",
          },
          { stage: "IV", description: "Distant metastasis", survival: "5-10%" },
        ],
      },
    },
  },

  {
    typeName: "blood-cancer",
    heroSection: {
      Image: "/cancer-types/blood-cancer-hero.jpg",
      title: "Understanding Blood Cancer",
      description:
        "Learn about blood cancers including leukemia, lymphoma, and myeloma, and their symptoms, diagnosis, and treatments.",
    },
    overviewSection: {
      Image: "/cancer-types/blood-cancer-anatomy.jpg",
      h2: "What is Blood Cancer?",
      paragraphs: [
        "Blood cancer refers to cancers that affect the blood, bone marrow, or lymphatic system. This includes leukemia, lymphoma, and myeloma.",
        "Leukemia affects the blood and bone marrow, lymphoma targets the lymphatic system, and myeloma affects plasma cells in the bone marrow. These cancers interfere with the body’s ability to produce healthy blood cells.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Blood Cancer",
      symptoms: [
        {
          title: "Fatigue",
          description:
            "Feeling extremely tired despite resting, often due to low red blood cell count.",
        },
        {
          title: "Frequent Infections",
          description:
            "Infections that happen more often or take longer to heal, due to low white blood cell count.",
        },
        {
          title: "Unexplained Weight Loss",
          description:
            "Sudden, unexplained weight loss may occur as the cancer progresses.",
        },
        {
          title: "Pain in Bones or Joints",
          description:
            "Pain or tenderness in bones, especially in the back or ribs.",
        },
        {
          title: "Swollen Lymph Nodes",
          description:
            "Lymph nodes, especially in the neck, armpit, or groin, may become swollen and painless.",
        },
        {
          title: "Easy Bruising or Bleeding",
          description:
            "Frequent nosebleeds, easy bruising, or bleeding gums, caused by low platelet count.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Blood Tests",
          paragraph:
            "Blood tests can reveal abnormalities in the number and type of blood cells, which may indicate leukemia or other blood cancers.",
        },
        {
          index: "2",
          h3: "Bone Marrow Biopsy",
          paragraph:
            "A sample of bone marrow is taken to check for abnormal cells associated with leukemia or myeloma.",
        },
        {
          index: "3",
          h3: "Lymph Node Biopsy",
          paragraph:
            "A biopsy of swollen lymph nodes can help diagnose lymphoma and identify its type.",
        },
        {
          index: "4",
          h3: "Imaging Scans",
          paragraph:
            "CT, MRI, or PET scans are used to check for tumors or spread of cancer in other parts of the body.",
        },
      ],
      Image: "/cancer-types/blood-cancer-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Chemotherapy" },
          p: "Chemotherapy is the most common treatment for blood cancers. It uses powerful drugs to kill cancer cells and stop their growth.",
          Image: "/cancer-types/chemotherapy.jpg",
        },
        {
          h3: { span: "2", copy: "Stem Cell Transplant" },
          p: "Stem cell or bone marrow transplant is used to replace damaged marrow with healthy stem cells, especially in leukemia and lymphoma cases.",
          Image: "/cancer-types/stem-cell-transplant.jpg",
        },
        {
          h3: { span: "3", copy: "Targeted Therapy" },
          p: "Targeted drugs are designed to specifically target cancer cells and minimize damage to healthy cells. It is used in lymphoma and leukemia treatments.",
          Image: "/cancer-types/targeted-therapy.jpg",
        },
        {
          h3: { span: "4", copy: "Immunotherapy" },
          p: "Immunotherapy helps the immune system recognize and attack cancer cells more effectively. It is particularly effective for certain types of lymphoma.",
          Image: "/cancer-types/immunotherapy.jpg",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "The prognosis for blood cancer depends on the type of cancer, the stage at diagnosis, and how well the patient responds to treatment. Treatment has improved significantly in recent years, especially for leukemia and lymphoma.",
      table: {
        headers: ["Type", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "Leukemia (Acute)",
            description:
              "Rapidly progressing cancer of the bone marrow or blood.",
            survival: "40-50%",
          },
          {
            stage: "Leukemia (Chronic)",
            description:
              "Slow-growing leukemia that may be asymptomatic for years.",
            survival: "70-90%",
          },
          {
            stage: "Lymphoma (Hodgkin's)",
            description:
              "Cancer of the lymphatic system, typically affecting younger people.",
            survival: "85-90%",
          },
          {
            stage: "Lymphoma (Non-Hodgkin's)",
            description:
              "A diverse group of blood cancers affecting the lymphatic system.",
            survival: "60-70%",
          },
          {
            stage: "Multiple Myeloma",
            description: "Cancer of plasma cells in the bone marrow.",
            survival: "50-60%",
          },
        ],
      },
    },
  },

  {
    typeName: "bone-cancer",
    heroSection: {
      Image: "/cancer-types/bone-cancer-hero.jpg",
      title: "Understanding Bone Cancer",
      description:
        "Explore the causes, symptoms, diagnosis, and treatment of cancers that affect the bones, including osteosarcoma and Ewing's sarcoma.",
    },
    overviewSection: {
      Image: "/cancer-types/bone-cancer-anatomy.jpg",
      h2: "What is Bone Cancer?",
      paragraphs: [
        "Bone cancer is a rare form of cancer that begins in the bones. The two main types of bone cancer are osteosarcoma, which typically affects the long bones, and Ewing's sarcoma, which often affects the bones and soft tissues of children and adolescents.",
        "Bone cancer can either begin in the bones (primary bone cancer) or spread to the bones from other parts of the body (secondary or metastatic bone cancer).",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Bone Cancer",
      symptoms: [
        {
          title: "Bone Pain",
          description:
            "The most common symptom, often localized to a specific bone and worsening at night.",
        },
        {
          title: "Swelling and Tenderness",
          description:
            "Visible swelling or tenderness over the affected bone, which may increase with physical activity.",
        },
        {
          title: "Fractures",
          description:
            "Fractures in the affected bone can occur with minimal impact, as the bone becomes weakened by the cancer.",
        },
        {
          title: "Fatigue",
          description:
            "Feeling unusually tired or weak due to the body's response to the cancer.",
        },
        {
          title: "Unexplained Weight Loss",
          description:
            "Sudden weight loss without a known cause, which can be a sign of advanced cancer.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "X-rays",
          paragraph:
            "X-rays of the affected bone can help identify abnormal growths or tumors.",
        },
        {
          index: "2",
          h3: "MRI Scan",
          paragraph:
            "An MRI can provide detailed images of the bones and surrounding tissues to determine the extent of the tumor.",
        },
        {
          index: "3",
          h3: "CT Scan",
          paragraph:
            "A CT scan can help identify tumors in bones and soft tissues, providing more detailed cross-sectional images.",
        },
        {
          index: "4",
          h3: "Bone Biopsy",
          paragraph:
            "A biopsy involves taking a small sample of bone tissue for lab analysis to confirm the cancer diagnosis.",
        },
        {
          index: "5",
          h3: "Bone Scintigraphy (Bone Scan)",
          paragraph:
            "A bone scan involves injecting a radioactive substance to detect areas of bone growth and abnormalities.",
        },
      ],
      Image: "/cancer-types/bone-cancer-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "Surgical removal of the tumor is the most common treatment for bone cancer. The surgery aims to remove the cancerous tissue while preserving the bone’s function whenever possible.",
          Image: "/cancer-types/surgery.jpg",
        },
        {
          h3: { span: "2", copy: "Chemotherapy" },
          p: "Chemotherapy is often used in combination with surgery, especially in cases of osteosarcoma, to target and kill cancer cells throughout the body.",
          Image: "/cancer-types/chemotherapy.jpg",
        },
        {
          h3: { span: "3", copy: "Radiation Therapy" },
          p: "Radiation therapy is used to shrink tumors before surgery or to treat remaining cancer cells after surgery, especially in cases of Ewing's sarcoma.",
          Image: "/cancer-types/radiation-therapy.jpg",
        },
        {
          h3: { span: "4", copy: "Targeted Therapy" },
          p: "Targeted therapies aim to target and destroy cancer cells more precisely, often used in cases of Ewing's sarcoma or other bone cancers that do not respond well to traditional treatments.",
          Image: "/cancer-types/targeted-therapy.jpg",
        },
        {
          h3: { span: "5", copy: "Bone Marrow Transplant" },
          p: "In cases where bone cancer spreads to the bone marrow, a bone marrow transplant may be considered to replace damaged marrow and restore blood cell production.",
          Image: "/cancer-types/bone-marrow-transplant.jpg",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "Prognosis for bone cancer largely depends on the type, size, location, and stage of the cancer, as well as how well the tumor responds to treatment. Early detection and treatment improve the chances of successful treatment.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Cancer is confined to the bone and has not spread.",
            survival: "80-90%",
          },
          {
            stage: "II",
            description:
              "Tumor is localized, but has spread to nearby tissues or bones.",
            survival: "60-70%",
          },
          {
            stage: "III",
            description: "Cancer has spread to other bones or organs.",
            survival: "40-50%",
          },
          {
            stage: "IV",
            description:
              "Metastasis has occurred to distant organs, such as the lungs.",
            survival: "20-30%",
          },
        ],
      },
    },
  },

  {
    typeName: "brain-cancer",
    heroSection: {
      Image: "/cancer-types/brain-cancer-hero.jpg",
      title: "Understanding Brain Cancer",
      description:
        "Learn about symptoms, causes, diagnosis, and treatment options for tumors affecting the brain and central nervous system.",
    },
    overviewSection: {
      Image: "/cancer-types/brain-structure.jpg",
      h2: "What is Brain Cancer?",
      paragraphs: [
        "Brain cancer refers to the growth of abnormal cells in the brain or central nervous system (CNS). These tumors can be primary (originating in the brain) or secondary (spread from other parts of the body).",
        "Primary brain tumors include gliomas, meningiomas, and medulloblastomas. Some are benign (non-cancerous), but others are malignant and can interfere with vital brain functions. Early detection and specialized care are critical due to the complexity of brain structures.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Brain Cancer",
      symptoms: [
        {
          title: "Persistent Headaches",
          description:
            "Often worse in the morning or during activity like coughing or sneezing.",
        },
        {
          title: "Seizures",
          description:
            "New onset seizures or changes in existing seizure patterns.",
        },
        {
          title: "Cognitive or Personality Changes",
          description: "Memory issues, confusion, or mood swings.",
        },
        {
          title: "Vision or Hearing Loss",
          description:
            "Blurred vision, double vision, or hearing difficulties.",
        },
        {
          title: "Nausea and Vomiting",
          description: "Especially when unexplained and persistent.",
        },
        {
          title: "Difficulty with Balance",
          description: "Loss of coordination or dizziness.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Neurological Exam",
          paragraph:
            "A comprehensive evaluation of vision, hearing, coordination, and reflexes to detect nervous system impairment.",
        },
        {
          index: "2",
          h3: "Imaging Tests",
          paragraph:
            "MRI or CT scans help identify the tumor’s location, size, and impact on brain tissues.",
        },
        {
          index: "3",
          h3: "Biopsy",
          paragraph:
            "A surgical procedure to extract and analyze tumor tissue, which determines if it’s cancerous and helps guide treatment.",
        },
      ],
      Image: "/cancer-types/brain-cancer-mri.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "The primary approach for accessible tumors. It may fully remove the tumor or reduce its size for further treatment.",
          Image: "/cancer-types/brain-surgery.jpg",
        },
        {
          h3: { span: "2", copy: "Radiation Therapy" },
          p: "Used post-surgery or for inoperable tumors. It targets and kills cancer cells with high-energy rays.",
          Image: "/cancer-types/brain-radiation.jpg",
        },
        {
          h3: { span: "3", copy: "Chemotherapy" },
          p: "Medicines that kill or slow cancer cells, sometimes delivered directly to the cerebrospinal fluid.",
          Image: "/cancer-types/brain-chemo.jpg",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "The prognosis for brain cancer depends on the tumor type, location, grade, and patient age. Early-stage and low-grade tumors generally have better outcomes, while high-grade gliomas are more aggressive.",
      table: {
        headers: ["Grade", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Slow-growing, non-cancerous",
            survival: "80-90%",
          },
          {
            stage: "II",
            description: "Low-grade but infiltrative",
            survival: "50-70%",
          },
          {
            stage: "III",
            description: "Malignant, fast-growing",
            survival: "30-50%",
          },
          {
            stage: "IV",
            description: "Highly aggressive (e.g., glioblastoma)",
            survival: "5-15%",
          },
        ],
      },
    },
  },

  {
    typeName: "breast-cancer",
    heroSection: {
      Image: "/cancer-types/breast-cancer-hero.jpg",
      title: "Understanding Breast Cancer",
      description:
        "Discover the causes, symptoms, diagnosis, and treatment options for breast cancer, the most common cancer among women worldwide.",
    },
    overviewSection: {
      Image: "/cancer-types/breast-anatomy.jpg",
      h2: "What is Breast Cancer?",
      paragraphs: [
        "Breast cancer occurs when cells in the breast grow uncontrollably. It can begin in the lobules, ducts, or connective tissue of the breast. Though more common in women, men can also develop breast cancer.",
        "There are several types of breast cancer, including ductal carcinoma in situ (DCIS), invasive ductal carcinoma (IDC), and invasive lobular carcinoma (ILC). Risk factors include age, genetics (BRCA1/2 mutations), hormonal factors, and lifestyle choices.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Breast Cancer",
      symptoms: [
        {
          title: "Lump in the Breast or Underarm",
          description:
            "Often the first noticeable sign; may feel hard and immovable.",
        },
        {
          title: "Change in Breast Shape or Size",
          description: "Visible swelling, distortion, or asymmetry.",
        },
        {
          title: "Nipple Discharge",
          description:
            "May be bloody or clear; especially concerning if spontaneous.",
        },
        {
          title: "Skin Dimpling",
          description: "Skin on the breast may resemble an orange peel.",
        },
        {
          title: "Nipple Retraction",
          description: "The nipple may turn inward or change in position.",
        },
        {
          title: "Breast Pain",
          description:
            "Not always present, but persistent pain may indicate underlying issues.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Mammogram",
          paragraph:
            "A specialized X-ray of the breast to detect abnormal areas, often before symptoms appear.",
        },
        {
          index: "2",
          h3: "Ultrasound or MRI",
          paragraph:
            "Used to evaluate suspicious masses or dense breast tissue more clearly.",
        },
        {
          index: "3",
          h3: "Biopsy",
          paragraph:
            "A sample of tissue is taken and examined under a microscope to confirm cancer type and grade.",
        },
      ],
      Image: "/cancer-types/breast-cancer-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "Includes lumpectomy (removing tumor only) or mastectomy (removing one or both breasts), depending on cancer stage and spread.",
          Image: "/cancer-types/breast-surgery.jpg",
        },
        {
          h3: { span: "2", copy: "Radiation Therapy" },
          p: "Common after surgery to kill remaining cancer cells and reduce recurrence risk.",
          Image: "/cancer-types/breast-radiation.jpg",
        },
        {
          h3: { span: "3", copy: "Chemotherapy" },
          p: "Uses drugs to destroy fast-growing cancer cells, often before or after surgery.",
          Image: "/cancer-types/breast-chemo.jpg",
        },
        {
          h3: { span: "4", copy: "Hormone Therapy" },
          p: "For hormone receptor-positive cancers, it blocks estrogen or progesterone to slow growth.",
          Image: "/cancer-types/breast-hormone.jpg",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "Breast cancer prognosis is generally favorable when detected early. Survival depends on tumor size, lymph node involvement, cancer subtype, and response to treatment.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "0",
            description: "Non-invasive (DCIS)",
            survival: "98-100%",
          },
          {
            stage: "I",
            description: "Small, localized tumor",
            survival: "90-99%",
          },
          {
            stage: "II",
            description: "Larger tumor or spread to nearby nodes",
            survival: "75-90%",
          },
          { stage: "III", description: "Locally advanced", survival: "55-75%" },
          {
            stage: "IV",
            description: "Metastatic (spread to distant organs)",
            survival: "25-30%",
          },
        ],
      },
    },
  },

  {
    typeName: "breast-cancer-in-men",
    heroSection: {
      Image: "/cancer-types/breast-cancer-men-hero.jpg",
      title: "Breast Cancer in Men",
      description:
        "Understand the rare but serious condition of breast cancer in men—its signs, risk factors, diagnosis, and treatment.",
    },
    overviewSection: {
      Image: "/cancer-types/male-breast-anatomy.jpg",
      h2: "What is Breast Cancer in Men?",
      paragraphs: [
        "Breast cancer in men is rare, accounting for less than 1% of all breast cancer cases. It occurs when malignant cells form in the small amount of breast tissue found in men.",
        "Most cases are diagnosed in older men, typically between the ages of 60 and 70. Risk factors include genetic mutations (especially BRCA2), radiation exposure, high estrogen levels, liver disease, and a family history of breast cancer.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Breast Cancer in Men",
      symptoms: [
        {
          title: "Lump or Swelling",
          description: "Usually painless and located near the nipple.",
        },
        {
          title: "Nipple Retraction",
          description: "The nipple may become inverted or pulled inward.",
        },
        {
          title: "Nipple Discharge",
          description: "Clear or bloody discharge from one nipple.",
        },
        {
          title: "Skin Changes",
          description:
            "Dimpling, scaling, or redness of the nipple or breast area.",
        },
        {
          title: "Swollen Lymph Nodes",
          description: "Especially under the arm, may indicate spread.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Clinical Breast Exam",
          paragraph:
            "A healthcare provider checks for lumps or abnormalities in the breast and lymph nodes.",
        },
        {
          index: "2",
          h3: "Imaging Tests",
          paragraph:
            "Mammograms and ultrasounds are used to visualize suspicious areas.",
        },
        {
          index: "3",
          h3: "Biopsy",
          paragraph:
            "A sample of breast tissue is examined under a microscope to confirm the presence and type of cancer.",
        },
      ],
      Image: "/cancer-types/breast-cancer-men-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "Most men undergo a mastectomy, which involves removal of the breast tissue and often nearby lymph nodes.",
          Image: "/cancer-types/male-breast-surgery.jpg",
        },
        {
          h3: { span: "2", copy: "Radiation Therapy" },
          p: "May be used after surgery to target remaining cancer cells, especially if the tumor was large or involved lymph nodes.",
          Image: "/cancer-types/breast-radiation.jpg",
        },
        {
          h3: { span: "3", copy: "Hormone Therapy" },
          p: "Most male breast cancers are estrogen receptor-positive, making hormone-blocking treatments effective.",
          Image: "/cancer-types/breast-hormone.jpg",
        },
        {
          h3: { span: "4", copy: "Chemotherapy" },
          p: "Used when there is a higher risk of recurrence or if the cancer is aggressive or advanced.",
          Image: "/cancer-types/breast-chemo.jpg",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "Early diagnosis is key to a positive outcome. Men are often diagnosed at later stages, which can affect survival. Prognosis depends on tumor size, lymph node involvement, and cancer subtype.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Small, localized tumor",
            survival: "95-100%",
          },
          {
            stage: "II",
            description: "Tumor with some lymph node involvement",
            survival: "80-90%",
          },
          {
            stage: "III",
            description: "More extensive local spread",
            survival: "60-75%",
          },
          {
            stage: "IV",
            description: "Distant metastasis",
            survival: "20-30%",
          },
        ],
      },
    },
  },

  {
    typeName: "cervical-cancer",
    heroSection: {
      Image: "/cancer-types/cervical-cancer-hero.jpg",
      title: "Understanding Cervical Cancer",
      description:
        "Learn about cervical cancer, its causes, symptoms, screening methods, treatment options, and survival outlook.",
    },
    overviewSection: {
      Image: "/cancer-types/cervix-anatomy.jpg",
      h2: "What is Cervical Cancer?",
      paragraphs: [
        "Cervical cancer develops in the cells lining the cervix — the lower part of the uterus that connects to the vagina. Almost all cases are linked to persistent infection with high-risk types of human papillomavirus (HPV).",
        "It progresses slowly and begins as a precancerous condition called cervical dysplasia. Routine screening (Pap smears and HPV testing) can detect these changes early, making cervical cancer one of the most preventable cancers.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Cervical Cancer",
      symptoms: [
        {
          title: "Abnormal Vaginal Bleeding",
          description:
            "Bleeding between periods, after intercourse, or after menopause.",
        },
        {
          title: "Unusual Vaginal Discharge",
          description: "Foul-smelling or watery discharge may occur.",
        },
        {
          title: "Pelvic Pain",
          description: "Pain in the pelvic region or during intercourse.",
        },
        {
          title: "Pain During Urination",
          description: "Can occur if cancer spreads to nearby tissues.",
        },
        {
          title: "Fatigue or Weight Loss",
          description:
            "In advanced stages, unexplained fatigue or weight loss may occur.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Pap Smear",
          paragraph:
            "Screens for abnormal cells in the cervix, which may indicate precancer or cancer.",
        },
        {
          index: "2",
          h3: "HPV Testing",
          paragraph:
            "Detects high-risk HPV strains responsible for most cervical cancers.",
        },
        {
          index: "3",
          h3: "Colposcopy and Biopsy",
          paragraph:
            "Detailed examination and tissue sampling of suspicious cervical areas.",
        },
        {
          index: "4",
          h3: "Imaging Tests",
          paragraph:
            "MRI, CT scan, or PET scan may be used to determine the cancer’s extent.",
        },
      ],
      Image: "/cancer-types/cervical-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "In early stages, surgery may involve removing part or all of the cervix and uterus (hysterectomy).",
          Image: "/cancer-types/cervical-surgery.jpg",
        },
        {
          h3: { span: "2", copy: "Radiation Therapy" },
          p: "Uses high-energy rays to destroy cancer cells, often combined with chemotherapy for better outcomes.",
          Image: "/cancer-types/cervical-radiation.jpg",
        },
        {
          h3: { span: "3", copy: "Chemotherapy" },
          p: "Drugs that kill or stop the growth of cancer cells, especially in advanced or recurrent cases.",
          Image: "/cancer-types/cervical-chemo.jpg",
        },
        {
          h3: { span: "4", copy: "Targeted and Immunotherapy" },
          p: "Used in select advanced cases to target specific cancer pathways or enhance immune response.",
          Image: "/cancer-types/cervical-immunotherapy.jpg",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "Prognosis improves greatly with early detection. Regular screening and HPV vaccination significantly reduce risk. Survival rates vary based on stage at diagnosis.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Cancer confined to cervix",
            survival: "90-95%",
          },
          {
            stage: "II",
            description: "Spread beyond cervix but not to pelvic wall",
            survival: "60-80%",
          },
          {
            stage: "III",
            description: "Spread to pelvic wall or lower vagina",
            survival: "30-50%",
          },
          {
            stage: "IV",
            description: "Spread to bladder, rectum, or distant organs",
            survival: "15-20%",
          },
        ],
      },
    },
  },

  {
    typeName: "colon-rectal-cancer",
    heroSection: {
      Image: "/cancer-types/colorectal-cancer-hero.jpg",
      title: "Understanding Colon and Rectal Cancer",
      description:
        "Explore causes, signs, screening, treatment, and outlook for cancers of the colon and rectum.",
    },
    overviewSection: {
      Image: "/cancer-types/colorectal-anatomy.jpg",
      h2: "What is Colorectal Cancer?",
      paragraphs: [
        "Colorectal cancer refers to cancer that starts in the colon or rectum, parts of the large intestine responsible for water absorption and stool formation.",
        "It usually begins as benign polyps that gradually become cancerous over time. Early detection through screening significantly improves treatment outcomes. Risk factors include age, diet, family history, inflammatory bowel disease, and genetic syndromes like Lynch syndrome or familial adenomatous polyposis (FAP).",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Colorectal Cancer",
      symptoms: [
        {
          title: "Blood in Stool",
          description:
            "Bright red or dark-colored blood may appear in bowel movements.",
        },
        {
          title: "Change in Bowel Habits",
          description:
            "Persistent constipation, diarrhea, or narrowing of the stool.",
        },
        {
          title: "Abdominal Pain",
          description:
            "Cramps, bloating, or discomfort, especially after meals.",
        },
        {
          title: "Fatigue or Weakness",
          description:
            "Often caused by slow internal bleeding leading to anemia.",
        },
        {
          title: "Unexplained Weight Loss",
          description:
            "Sudden, unintentional weight loss may be a sign of advanced cancer.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Colonoscopy",
          paragraph:
            "A thin flexible tube with a camera is used to examine the colon and rectum. Polyps may be removed during this procedure.",
        },
        {
          index: "2",
          h3: "Fecal Tests",
          paragraph:
            "Stool-based tests detect hidden blood or cancer DNA markers.",
        },
        {
          index: "3",
          h3: "Biopsy",
          paragraph:
            "Tissue from abnormal areas is collected and examined under a microscope to confirm cancer.",
        },
        {
          index: "4",
          h3: "Imaging",
          paragraph:
            "CT colonography, MRI, or PET-CT may be used to determine cancer spread.",
        },
      ],
      Image: "/cancer-types/colorectal-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "The most common treatment, involving removal of the tumor and surrounding lymph nodes. Can be curative in early stages.",
          Image: "/cancer-types/colorectal-surgery.jpg",
        },
        {
          h3: { span: "2", copy: "Chemotherapy" },
          p: "Used before or after surgery to shrink tumors or prevent recurrence. Often used in stage III or IV cancers.",
          Image: "/cancer-types/colorectal-chemo.jpg",
        },
        {
          h3: { span: "3", copy: "Radiation Therapy" },
          p: "Primarily used for rectal cancer to reduce tumor size before surgery or treat localized areas after.",
          Image: "/cancer-types/colorectal-radiation.jpg",
        },
        {
          h3: { span: "4", copy: "Targeted & Immunotherapy" },
          p: "Drugs that block specific cancer pathways or enhance immune response, used for certain advanced or genetic subtypes.",
          Image: "/cancer-types/colorectal-immunotherapy.jpg",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "Colorectal cancer prognosis depends heavily on the stage at diagnosis. Regular screenings (starting at age 45 for most adults) and removal of precancerous polyps can prevent the disease altogether.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Cancer limited to inner layers of colon or rectum",
            survival: "90-95%",
          },
          {
            stage: "II",
            description: "Cancer has grown into or through the wall",
            survival: "75-85%",
          },
          {
            stage: "III",
            description: "Cancer spread to nearby lymph nodes",
            survival: "50-70%",
          },
          {
            stage: "IV",
            description: "Distant spread to organs (e.g., liver, lungs)",
            survival: "10-15%",
          },
        ],
      },
    },
  },

  {
    typeName: "endometrial-cancer",
    heroSection: {
      Image: "/cancer-types/endometrial-cancer-hero.jpg",
      title: "Understanding Endometrial Cancer",
      description:
        "Learn about the symptoms, diagnosis, treatment, and survival of cancer originating from the lining of the uterus.",
    },
    overviewSection: {
      Image: "/cancer-types/uterus-anatomy.jpg",
      h2: "What is Endometrial Cancer?",
      paragraphs: [
        "Endometrial cancer begins in the inner lining of the uterus, known as the endometrium. It's the most common type of uterine cancer and typically affects postmenopausal women.",
        "Hormonal imbalances, particularly high estrogen levels unopposed by progesterone, play a significant role. Risk factors include obesity, diabetes, hormone replacement therapy (without progesterone), polycystic ovary syndrome (PCOS), and certain genetic syndromes like Lynch syndrome.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Endometrial Cancer",
      symptoms: [
        {
          title: "Abnormal Vaginal Bleeding",
          description:
            "Especially postmenopausal bleeding or bleeding between periods.",
        },
        {
          title: "Pelvic Pain",
          description: "Discomfort or pressure in the lower abdomen.",
        },
        {
          title: "Unusual Vaginal Discharge",
          description:
            "Watery, pink, or foul-smelling discharge without obvious infection.",
        },
        {
          title: "Pain During Intercourse",
          description:
            "Discomfort or pain while having sex, especially postmenopause.",
        },
        {
          title: "Unintended Weight Loss",
          description:
            "Losing weight without trying may occur in advanced stages.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Pelvic Examination",
          paragraph:
            "The doctor examines the uterus and surrounding organs for abnormalities.",
        },
        {
          index: "2",
          h3: "Transvaginal Ultrasound",
          paragraph:
            "Ultrasound probe inserted into the vagina to measure endometrial thickness and detect abnormalities.",
        },
        {
          index: "3",
          h3: "Endometrial Biopsy",
          paragraph:
            "A sample of the endometrial lining is removed and examined for cancer cells.",
        },
        {
          index: "4",
          h3: "Dilation and Curettage (D&C)",
          paragraph:
            "A surgical procedure to obtain a larger tissue sample if biopsy results are inconclusive.",
        },
      ],
      Image: "/cancer-types/endometrial-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "The primary treatment is a total hysterectomy — removal of the uterus and often ovaries and fallopian tubes.",
          Image: "/cancer-types/hysterectomy.jpg",
        },
        {
          h3: { span: "2", copy: "Radiation Therapy" },
          p: "Used to destroy remaining cancer cells after surgery or in patients who can’t undergo surgery.",
          Image: "/cancer-types/radiation-therapy.jpg",
        },
        {
          h3: { span: "3", copy: "Hormone Therapy" },
          p: "For cancers sensitive to hormones, progesterone-like medications can help control tumor growth.",
          Image: "/cancer-types/hormone-therapy.jpg",
        },
        {
          h3: { span: "4", copy: "Chemotherapy" },
          p: "Used in advanced or aggressive types of endometrial cancer, either alone or with other treatments.",
          Image: "/cancer-types/endometrial-chemo.jpg",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "Endometrial cancer has a favorable prognosis when detected early, often before it spreads beyond the uterus. Regular checkups and attention to abnormal bleeding are key to early detection.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Cancer confined to the uterus",
            survival: "85-90%",
          },
          { stage: "II", description: "Spread to cervix", survival: "70-80%" },
          {
            stage: "III",
            description: "Spread to pelvic region or lymph nodes",
            survival: "40-60%",
          },
          {
            stage: "IV",
            description: "Spread to distant organs (lungs, liver, etc.)",
            survival: "15-20%",
          },
        ],
      },
    },
  },

  {
    typeName: "esophageal-cancer",
    heroSection: {
      Image: "/cancer-types/esophageal-cancer-hero.jpg",
      title: "Understanding Esophageal Cancer",
      description:
        "Discover the symptoms, diagnostic tools, treatments, and survival insights for esophageal cancer.",
    },
    overviewSection: {
      Image: "/cancer-types/esophagus-anatomy.jpg",
      h2: "What is Esophageal Cancer?",
      paragraphs: [
        "Esophageal cancer starts in the lining of the esophagus, the muscular tube that connects the throat to the stomach. It typically begins in the inner layer and grows outward.",
        "There are two main types: squamous cell carcinoma (arises from the upper and middle parts of the esophagus) and adenocarcinoma (more common in the lower esophagus). Risk factors include chronic acid reflux (GERD), Barrett's esophagus, smoking, heavy alcohol use, and obesity.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Esophageal Cancer",
      symptoms: [
        {
          title: "Difficulty Swallowing (Dysphagia)",
          description:
            "Progressive trouble swallowing solids and then liquids.",
        },
        {
          title: "Chest Pain or Discomfort",
          description: "Burning or pressure behind the breastbone.",
        },
        {
          title: "Unintended Weight Loss",
          description: "Significant weight loss without trying.",
        },
        {
          title: "Persistent Cough or Hoarseness",
          description: "Caused by irritation or nerve involvement.",
        },
        {
          title: "Regurgitation",
          description: "Food coming back up after swallowing.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Upper Endoscopy (EGD)",
          paragraph:
            "A flexible tube with a camera is used to view the esophagus and obtain biopsies.",
        },
        {
          index: "2",
          h3: "Biopsy",
          paragraph:
            "Tissue samples collected during endoscopy are examined for cancer cells.",
        },
        {
          index: "3",
          h3: "Barium Swallow X-ray",
          paragraph:
            "A series of X-rays taken after swallowing a barium solution to highlight blockages or irregularities.",
        },
        {
          index: "4",
          h3: "CT or PET Scans",
          paragraph:
            "Imaging to detect spread of cancer to lymph nodes or distant organs.",
        },
      ],
      Image: "/cancer-types/esophageal-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery (Esophagectomy)" },
          p: "Removes part or all of the esophagus and nearby lymph nodes. Often used for early or localized cancers.",
          Image: "/cancer-types/esophagectomy.jpg",
        },
        {
          h3: { span: "2", copy: "Chemoradiation" },
          p: "A combination of chemotherapy and radiation either before surgery (neoadjuvant) or as the primary treatment if surgery isn't possible.",
          Image: "/cancer-types/chemo-radiation.jpg",
        },
        {
          h3: { span: "3", copy: "Endoscopic Therapy" },
          p: "For very early-stage cancers or precancerous conditions like Barrett’s esophagus; includes mucosal resection and ablation.",
          Image: "/cancer-types/endoscopic-treatment.jpg",
        },
        {
          h3: { span: "4", copy: "Targeted Therapy & Immunotherapy" },
          p: "Used in advanced or metastatic cases, particularly when genetic markers or immune response targets are present.",
          Image: "/cancer-types/immunotherapy.jpg",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "Survival depends heavily on stage at diagnosis. Because symptoms often appear late, many cases are diagnosed in advanced stages. Early detection improves outcomes significantly.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Cancer confined to inner lining",
            survival: "45-55%",
          },
          {
            stage: "II",
            description: "Spread to deeper layers or nearby lymph nodes",
            survival: "25-35%",
          },
          {
            stage: "III",
            description: "Involves nearby structures and more lymph nodes",
            survival: "15-20%",
          },
          { stage: "IV", description: "Distant metastasis", survival: "5-10%" },
        ],
      },
    },
  },

  {
    typeName: "eye-cancer",
    heroSection: {
      Image: "/cancer-types/eye-cancer-hero.jpg",
      title: "Understanding Eye Cancer",
      description:
        "Learn about types, symptoms, diagnosis, and treatment of cancers that affect the eye and surrounding tissues.",
    },
    overviewSection: {
      Image: "/cancer-types/eye-anatomy.jpg",
      h2: "What is Eye Cancer?",
      paragraphs: [
        "Eye cancer refers to malignant tumors that originate in or around the eye. These can affect different parts of the eye, including the eyeball (intraocular), orbit (tissues surrounding the eyeball), or adnexal structures like eyelids and tear glands.",
        "The most common primary intraocular cancer in adults is uveal melanoma. In children, retinoblastoma is most prevalent. Eye cancers can also be secondary, meaning they spread from other parts of the body such as the breast or lung.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Eye Cancer",
      symptoms: [
        {
          title: "Vision Changes",
          description:
            "Blurred vision, sudden loss of vision, or double vision.",
        },
        {
          title: "Eye Pain or Pressure",
          description: "Unexplained pain in or around the eye.",
        },
        {
          title: "A Growing Dark Spot",
          description: "Often seen on the iris or in the visual field.",
        },
        {
          title: "Bulging of the Eye",
          description:
            "Protrusion of the eyeball (proptosis), especially in orbital tumors.",
        },
        {
          title: "Change in Eye Movement",
          description: "Restricted or abnormal eye movement may occur.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Eye Exam and Ophthalmoscopy",
          paragraph:
            "A thorough exam of the eye using a special scope to look at internal structures.",
        },
        {
          index: "2",
          h3: "Ultrasound of the Eye",
          paragraph:
            "High-frequency sound waves help evaluate the size and location of tumors.",
        },
        {
          index: "3",
          h3: "Fluorescein Angiography",
          paragraph:
            "Dye is injected into a vein to highlight blood vessels in the eye during imaging.",
        },
        {
          index: "4",
          h3: "MRI or CT Scan",
          paragraph:
            "Used to detect tumor spread to nearby tissues or assess deeper orbital involvement.",
        },
        {
          index: "5",
          h3: "Biopsy (Rare)",
          paragraph:
            "In some cases, a sample is taken to confirm the cancer type, especially for orbital or eyelid cancers.",
        },
      ],
      Image: "/cancer-types/eye-cancer-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Radiation Therapy" },
          p: "Common for intraocular melanomas; plaque brachytherapy or external beam radiation is used.",
          Image: "/cancer-types/eye-radiation.jpg",
        },
        {
          h3: { span: "2", copy: "Surgical Removal" },
          p: "Includes removal of tumors or, in advanced cases, the eye itself (enucleation).",
          Image: "/cancer-types/eye-surgery.jpg",
        },
        {
          h3: { span: "3", copy: "Laser Therapy" },
          p: "Photocoagulation or thermotherapy may be used for small tumors, particularly in the retina.",
          Image: "/cancer-types/eye-laser.jpg",
        },
        {
          h3: { span: "4", copy: "Chemotherapy" },
          p: "More common for retinoblastoma in children or for systemic treatment in secondary eye cancers.",
          Image: "/cancer-types/eye-chemo.jpg",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "Prognosis varies by tumor type and location. Early detection of intraocular cancers, like melanoma and retinoblastoma, improves the chance of preserving vision and life.",
      table: {
        headers: ["Cancer Type", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "Uveal Melanoma (Localized)",
            description: "Confined to eye",
            survival: "80-85%",
          },
          {
            stage: "Uveal Melanoma (Metastatic)",
            description: "Spread to liver or other organs",
            survival: "15-20%",
          },
          {
            stage: "Retinoblastoma (Localized)",
            description: "Childhood cancer, confined to eye",
            survival: ">95%",
          },
          {
            stage: "Orbital Tumors",
            description: "Affect soft tissues around the eye",
            survival: "Varies based on subtype",
          },
        ],
      },
    },
  },

  {
    typeName: "gallbladder-cancer",
    heroSection: {
      Image: "/cancer-types/gallbladder-cancer-hero.jpg",
      title: "Understanding Gallbladder Cancer",
      description:
        "Explore symptoms, risk factors, diagnosis methods, and treatment options for gallbladder cancer.",
    },
    overviewSection: {
      Image: "/cancer-types/gallbladder-anatomy.jpg",
      h2: "What is Gallbladder Cancer?",
      paragraphs: [
        "Gallbladder cancer begins in the gallbladder, a small organ beneath the liver that stores bile. It's a rare but aggressive form of cancer, often detected late due to vague symptoms.",
        "The most common type is adenocarcinoma, which starts in the glandular cells lining the gallbladder. Risk factors include gallstones, chronic gallbladder inflammation, porcelain gallbladder, and certain infections.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Gallbladder Cancer",
      symptoms: [
        {
          title: "Abdominal Pain",
          description: "Usually in the upper right side of the abdomen.",
        },
        {
          title: "Jaundice",
          description:
            "Yellowing of the skin and eyes due to bile duct blockage.",
        },
        {
          title: "Nausea and Vomiting",
          description: "Common signs that may mimic gallstone issues.",
        },
        {
          title: "Lumps or Swelling",
          description: "A mass may be felt in the right upper abdomen.",
        },
        {
          title: "Unintended Weight Loss",
          description: "Can occur as the disease progresses.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Ultrasound",
          paragraph:
            "Often the first imaging test used to detect abnormalities in the gallbladder.",
        },
        {
          index: "2",
          h3: "CT Scan and MRI",
          paragraph:
            "Provide detailed images to assess the extent of disease and check for metastasis.",
        },
        {
          index: "3",
          h3: "Endoscopic Ultrasound (EUS)",
          paragraph:
            "Helps visualize and biopsy deeper lesions in the gallbladder area.",
        },
        {
          index: "4",
          h3: "Biopsy",
          paragraph:
            "Tissue sample may be obtained during surgery or guided by imaging for confirmation.",
        },
        {
          index: "5",
          h3: "Blood Tests",
          paragraph:
            "Includes liver function tests and tumor markers like CA 19-9.",
        },
      ],
      Image: "/cancer-types/gallbladder-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "If detected early, removal of the gallbladder (cholecystectomy) and nearby tissues may be curative.",
          Image: "/cancer-types/gallbladder-surgery.jpg",
        },
        {
          h3: { span: "2", copy: "Chemotherapy" },
          p: "Used in advanced stages or after surgery to kill remaining cancer cells.",
          Image: "/cancer-types/gallbladder-chemotherapy.jpg",
        },
        {
          h3: { span: "3", copy: "Radiation Therapy" },
          p: "May be used post-surgery or for symptom relief in unresectable cancers.",
          Image: "/cancer-types/gallbladder-radiation.jpg",
        },
        {
          h3: { span: "4", copy: "Palliative Care" },
          p: "Helps manage symptoms and improve quality of life in advanced cases.",
          Image: "/cancer-types/palliative-care.jpg",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "Prognosis for gallbladder cancer depends on the stage at diagnosis. Early detection significantly improves outcomes, but many cases are diagnosed late due to subtle symptoms.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Confined to gallbladder lining",
            survival: "60-80%",
          },
          {
            stage: "II",
            description: "Invades muscle layer or connective tissue",
            survival: "40-50%",
          },
          {
            stage: "III",
            description: "Spread to nearby organs or lymph nodes",
            survival: "20-30%",
          },
          {
            stage: "IV",
            description: "Distant spread to organs like liver or lungs",
            survival: "5-10%",
          },
        ],
      },
    },
  },

  {
    typeName: "gastric-cancer",
    heroSection: {
      Image: "/cancer-types/gastric-cancer-hero.jpg",
      title: "Understanding Gastric Cancer",
      description:
        "Learn about the symptoms, risk factors, diagnosis methods, and treatment options for gastric cancer.",
    },
    overviewSection: {
      Image: "/cancer-types/gastric-anatomy.jpg",
      h2: "What is Gastric Cancer?",
      paragraphs: [
        "Gastric cancer, also known as stomach cancer, begins in the cells of the stomach. It is the fifth most common cancer globally but is often diagnosed late, reducing survival rates.",
        "The majority of gastric cancers are adenocarcinomas, originating from the glandular cells that line the stomach. Risk factors include chronic gastritis, infection with Helicobacter pylori, smoking, and a diet high in salty or smoked foods.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Gastric Cancer",
      symptoms: [
        {
          title: "Indigestion",
          description: "Persistent discomfort or bloating after eating.",
        },
        {
          title: "Stomach Pain",
          description:
            "Pain or tenderness in the abdomen, often in the upper stomach area.",
        },
        {
          title: "Nausea and Vomiting",
          description:
            "Especially if vomiting blood or material resembling coffee grounds.",
        },
        {
          title: "Unexplained Weight Loss",
          description: "Significant weight loss without any clear reason.",
        },
        {
          title: "Loss of Appetite",
          description:
            "A reduced desire to eat, often accompanied by feeling full after small meals.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Endoscopy",
          paragraph:
            "A procedure where a flexible tube with a camera is used to look inside the stomach and biopsy any suspicious areas.",
        },
        {
          index: "2",
          h3: "CT Scan",
          paragraph:
            "Used to determine the extent of the cancer and check for metastasis.",
        },
        {
          index: "3",
          h3: "Upper GI Series (Barium Swallow)",
          paragraph:
            "A series of X-rays taken after drinking a contrast material that highlights the stomach in images.",
        },
        {
          index: "4",
          h3: "Biopsy",
          paragraph:
            "A tissue sample is taken during an endoscopy to confirm the presence of cancer cells.",
        },
        {
          index: "5",
          h3: "Blood Tests",
          paragraph:
            "Include tests for anemia, liver function, and tumor markers like CEA and CA 19-9.",
        },
      ],
      Image: "/cancer-types/gastric-cancer-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "The primary treatment for early-stage gastric cancer. Involves removal of the stomach tumor and possibly part of the stomach or nearby lymph nodes.",
          Image: "/cancer-types/gastric-surgery.jpg",
        },
        {
          h3: { span: "2", copy: "Chemotherapy" },
          p: "Used before or after surgery to shrink the tumor or kill remaining cancer cells, often combined with radiation therapy.",
          Image: "/cancer-types/gastric-chemotherapy.jpg",
        },
        {
          h3: { span: "3", copy: "Targeted Therapy" },
          p: "A newer treatment that targets specific cancer cells to stop their growth, with fewer side effects compared to chemotherapy.",
          Image: "/cancer-types/gastric-targeted-therapy.jpg",
        },
        {
          h3: { span: "4", copy: "Radiation Therapy" },
          p: "Sometimes used after surgery or for palliation in advanced cases to relieve symptoms like pain and bleeding.",
          Image: "/cancer-types/gastric-radiation.jpg",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "The prognosis for gastric cancer depends on the stage at diagnosis, with early-stage cancers having better survival rates. Late-stage gastric cancer has a much lower survival rate due to its ability to spread to other organs.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Cancer confined to the stomach lining",
            survival: "80-90%",
          },
          {
            stage: "II",
            description: "Spread to nearby lymph nodes",
            survival: "50-60%",
          },
          {
            stage: "III",
            description: "Cancer spread to surrounding tissues and organs",
            survival: "20-30%",
          },
          { stage: "IV", description: "Distant metastasis", survival: "5-10%" },
        ],
      },
    },
  },

  {
    typeName: "head-and-neck-cancer",
    heroSection: {
      Image: "/cancer-types/head-and-neck-cancer-hero.jpg",
      title: "Understanding Head and Neck Cancer",
      description:
        "Explore the symptoms, diagnosis, treatment, and prognosis for cancers that affect the head and neck area.",
    },
    overviewSection: {
      Image: "/cancer-types/head-and-neck-anatomy.jpg",
      h2: "What is Head and Neck Cancer?",
      paragraphs: [
        "Head and neck cancers are a group of cancers that develop in the mouth, throat, voice box (larynx), sinuses, or salivary glands. These cancers are often linked to smoking, alcohol use, and HPV infection.",
        "The most common types of head and neck cancer are squamous cell carcinomas, which arise from the thin, flat cells lining the surfaces of these areas. Early detection can significantly improve outcomes.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Head and Neck Cancer",
      symptoms: [
        {
          title: "Lump or Mass",
          description:
            "A noticeable lump or swelling in the neck or mouth area.",
        },
        {
          title: "Persistent Sore Throat",
          description:
            "A sore throat that doesn't go away or gets worse over time.",
        },
        {
          title: "Hoarseness",
          description:
            "Changes in voice quality, including persistent hoarseness or difficulty speaking.",
        },
        {
          title: "Difficulty Swallowing",
          description:
            "Pain or difficulty swallowing, also known as dysphagia.",
        },
        {
          title: "Mouth or Throat Pain",
          description:
            "Pain in the mouth, throat, or jaw area, especially when chewing or swallowing.",
        },
        {
          title: "Unexplained Weight Loss",
          description: "Significant weight loss without a clear cause.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Physical Exam and Endoscopy",
          paragraph:
            "Doctor may perform a thorough exam of the head, neck, and throat area, using an endoscope to look for abnormalities.",
        },
        {
          index: "2",
          h3: "Biopsy",
          paragraph:
            "Tissue samples are taken from suspicious areas for lab analysis to confirm cancer presence.",
        },
        {
          index: "3",
          h3: "CT and MRI Scans",
          paragraph:
            "Imaging tests used to determine the extent of cancer spread and to help plan treatment.",
        },
        {
          index: "4",
          h3: "PET Scan",
          paragraph:
            "A PET scan may be used to detect areas of cancer spread (metastasis) throughout the body.",
        },
        {
          index: "5",
          h3: "Blood Tests",
          paragraph:
            "Blood tests are done to evaluate overall health, liver function, and detect potential cancer markers.",
        },
      ],
      Image: "/cancer-types/head-and-neck-cancer-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "Surgical removal of the tumor is the most common treatment for early-stage head and neck cancer. This may involve removing parts of the mouth, throat, or larynx.",
          Image: "/cancer-types/head-and-neck-surgery.jpg",
        },
        {
          h3: { span: "2", copy: "Radiation Therapy" },
          p: "Radiation therapy is often used to target tumors that are not surgically accessible or for post-surgery to eliminate remaining cancer cells.",
          Image: "/cancer-types/head-and-neck-radiation.jpg",
        },
        {
          h3: { span: "3", copy: "Chemotherapy" },
          p: "Chemotherapy is sometimes used in combination with radiation for advanced-stage head and neck cancers or when surgery isn't possible.",
          Image: "/cancer-types/head-and-neck-chemotherapy.jpg",
        },
        {
          h3: { span: "4", copy: "Targeted Therapy" },
          p: "Targeted therapies focus on specific genetic changes in cancer cells. Drugs like cetuximab are used to block growth signals in cancer cells.",
          Image: "/cancer-types/head-and-neck-targeted-therapy.jpg",
        },
        {
          h3: { span: "5", copy: "Immunotherapy" },
          p: "Immunotherapy drugs help stimulate the body's immune system to attack cancer cells. Pembrolizumab is an example of an immunotherapy drug used in head and neck cancers.",
          Image: "/cancer-types/head-and-neck-immunotherapy.jpg",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "The prognosis for head and neck cancer depends on the stage of the cancer, the location, and the overall health of the individual. Early detection and treatment typically lead to better outcomes.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description:
              "Cancer confined to the primary site (mouth, throat, etc.)",
            survival: "80-90%",
          },
          {
            stage: "II",
            description:
              "Localized cancer with slight spread to nearby tissue or lymph nodes",
            survival: "60-70%",
          },
          {
            stage: "III",
            description: "Cancer spread to nearby lymph nodes",
            survival: "40-60%",
          },
          {
            stage: "IV",
            description: "Advanced cancer with spread to distant organs",
            survival: "20-30%",
          },
        ],
      },
    },
  },

  {
    typeName: "kidney-cancer",
    heroSection: {
      Image: "/cancer-types/kidney-cancer-hero.jpg",
      title: "Understanding Kidney Cancer",
      description:
        "Explore the causes, symptoms, diagnosis, and treatment options for kidney cancer.",
    },
    overviewSection: {
      Image: "/cancer-types/kidney-anatomy.jpg",
      h2: "What is Kidney Cancer?",
      paragraphs: [
        "Kidney cancer begins in the kidneys, two bean-shaped organs that filter waste from the blood and produce urine. The most common type of kidney cancer is renal cell carcinoma (RCC), which forms in the lining of the small tubes in the kidney.",
        "Risk factors include smoking, obesity, high blood pressure, and family history. Kidney cancer is more common in adults, but can occur at any age.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Kidney Cancer",
      symptoms: [
        {
          title: "Blood in Urine",
          description:
            "Visible blood in the urine (hematuria) is one of the most common signs.",
        },
        {
          title: "Pain in the Side or Back",
          description:
            "Persistent pain in the lower back or side may indicate kidney cancer.",
        },
        {
          title: "Unexplained Weight Loss",
          description: "Significant weight loss without any known cause.",
        },
        {
          title: "Fatigue",
          description:
            "Feeling excessively tired and weak, even with adequate rest.",
        },
        {
          title: "Fever",
          description:
            "A low-grade fever that doesn't go away can be a symptom.",
        },
        {
          title: "Swelling in the Ankles or Legs",
          description: "Swelling may occur due to kidney dysfunction.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Physical Exam and Medical History",
          paragraph:
            "A doctor will begin by reviewing medical history and performing a physical exam to check for lumps or abnormalities.",
        },
        {
          index: "2",
          h3: "Urine and Blood Tests",
          paragraph:
            "Tests to check kidney function and detect abnormalities, such as blood in the urine or changes in creatinine levels.",
        },
        {
          index: "3",
          h3: "Imaging Tests (CT, MRI, Ultrasound)",
          paragraph:
            "Imaging techniques are used to view the kidneys and detect tumors or other abnormalities.",
        },
        {
          index: "4",
          h3: "Biopsy",
          paragraph:
            "A biopsy may be performed to confirm the presence of cancer by taking a small tissue sample from the kidney.",
        },
      ],
      Image: "/cancer-types/kidney-cancer-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "Surgical removal of the tumor is the most common treatment for localized kidney cancer. This may involve partial or total nephrectomy, where part or the entire kidney is removed.",
          Image: "/cancer-types/kidney-surgery.jpg",
        },
        {
          h3: { span: "2", copy: "Ablation Therapy" },
          p: "Ablation techniques such as cryoablation or radiofrequency ablation destroy small kidney tumors without the need for surgery.",
        },
        {
          h3: { span: "3", copy: "Targeted Therapy" },
          p: "Targeted therapies use drugs that target specific cancer cell mechanisms, such as sunitinib, to inhibit tumor growth and spread.",
        },
        {
          h3: { span: "4", copy: "Immunotherapy" },
          p: "Immunotherapy drugs, like nivolumab and pembrolizumab, stimulate the immune system to fight cancer cells more effectively.",
        },
        {
          h3: { span: "5", copy: "Chemotherapy" },
          p: "Chemotherapy may be used when cancer has spread to other parts of the body, but it is generally less effective in kidney cancer than in other cancers.",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "The prognosis for kidney cancer depends on the stage of the cancer, the size of the tumor, and whether it has spread to other organs. Early detection improves the likelihood of successful treatment.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Cancer confined to the kidney",
            survival: "90-95%",
          },
          {
            stage: "II",
            description: "Cancer confined to the kidney but larger in size",
            survival: "70-80%",
          },
          {
            stage: "III",
            description: "Cancer spread to nearby lymph nodes",
            survival: "50-60%",
          },
          {
            stage: "IV",
            description: "Cancer spread to distant organs",
            survival: "10-20%",
          },
        ],
      },
    },
  },

  {
    typeName: "laryngeal-cancer",
    heroSection: {
      Image: "/cancer-types/laryngeal-cancer-hero.jpg",
      title: "Understanding Laryngeal Cancer",
      description:
        "Explore the causes, symptoms, diagnosis, and treatment options for laryngeal cancer.",
    },
    overviewSection: {
      Image: "/cancer-types/larynx-anatomy.jpg",
      h2: "What is Laryngeal Cancer?",
      paragraphs: [
        "Laryngeal cancer is a type of cancer that develops in the larynx, or voice box, which is located in the throat. The larynx contains the vocal cords, which are crucial for speaking, breathing, and swallowing.",
        "The most common type of laryngeal cancer is squamous cell carcinoma, which begins in the flat cells lining the larynx. Smoking and excessive alcohol consumption are the most significant risk factors for developing laryngeal cancer.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Laryngeal Cancer",
      symptoms: [
        {
          title: "Hoarseness or Voice Changes",
          description:
            "Persistent hoarseness or a change in voice is the most common symptom of laryngeal cancer.",
        },
        {
          title: "Sore Throat or Painful Swallowing",
          description:
            "A constant sore throat or difficulty swallowing food or liquids.",
        },
        {
          title: "Lump in the Neck",
          description:
            "A visible or palpable lump in the neck, possibly due to swollen lymph nodes.",
        },
        {
          title: "Coughing or Coughing up Blood",
          description:
            "Persistent coughing or coughing up blood may be present.",
        },
        {
          title: "Breathing Difficulty",
          description:
            "In advanced stages, difficulty breathing can occur as the tumor obstructs the airway.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Physical Exam and Medical History",
          paragraph:
            "A doctor will first conduct a thorough physical exam and inquire about medical history to check for signs of cancer.",
        },
        {
          index: "2",
          h3: "Laryngoscopy",
          paragraph:
            "A laryngoscopy uses a flexible tube with a camera to look at the larynx and detect abnormal growths.",
        },
        {
          index: "3",
          h3: "Imaging Tests (CT, MRI, Ultrasound)",
          paragraph:
            "Imaging tests like CT scans, MRIs, and ultrasounds are used to assess the size and spread of the tumor.",
        },
        {
          index: "4",
          h3: "Biopsy",
          paragraph:
            "A biopsy is performed to take a tissue sample from the larynx to confirm the presence of cancer cells.",
        },
      ],
      Image: "/cancer-types/laryngeal-cancer-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "Surgical treatment options include partial or total laryngectomy, where part or all of the voice box is removed. This may be followed by reconstructive surgery to restore voice function.",
          Image: "/cancer-types/laryngeal-surgery.jpg",
        },
        {
          h3: { span: "2", copy: "Radiation Therapy" },
          p: "Radiation therapy uses high-energy rays to target and kill cancer cells, either as a primary treatment or in conjunction with surgery.",
        },
        {
          h3: { span: "3", copy: "Chemotherapy" },
          p: "Chemotherapy may be used in combination with radiation or surgery, especially for advanced cases where cancer has spread.",
        },
        {
          h3: { span: "4", copy: "Targeted Therapy" },
          p: "Targeted therapy drugs aim to target specific cancer cell mutations, such as cetuximab, which is used for head and neck cancers.",
        },
        {
          h3: { span: "5", copy: "Immunotherapy" },
          p: "Immunotherapy drugs, like nivolumab, help the body's immune system recognize and destroy cancer cells.",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "The prognosis for laryngeal cancer largely depends on the stage at diagnosis, the tumor's location, and whether it has spread to other parts of the body. Early-stage cancers have a much higher survival rate than advanced stages.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Cancer is confined to the vocal cords, no spread",
            survival: "85-90%",
          },
          {
            stage: "II",
            description: "Cancer has spread to nearby tissues or structures",
            survival: "70-75%",
          },
          {
            stage: "III",
            description: "Cancer has spread to lymph nodes in the neck",
            survival: "45-50%",
          },
          {
            stage: "IV",
            description: "Cancer has spread to distant organs",
            survival: "15-30%",
          },
        ],
      },
    },
  },

  {
    typeName: "liver-cancer",
    heroSection: {
      Image: "/cancer-types/liver-cancer-hero.jpg",
      title: "Understanding Liver Cancer",
      description:
        "Learn about the causes, symptoms, diagnosis, and treatment options for liver cancer.",
    },
    overviewSection: {
      Image: "/cancer-types/liver-anatomy.jpg",
      h2: "What is Liver Cancer?",
      paragraphs: [
        "Liver cancer begins in the liver, a vital organ responsible for many important functions including detoxification, metabolism, and protein synthesis. The majority of liver cancers are primary, meaning they originate in the liver, with hepatocellular carcinoma being the most common type.",
        "Chronic liver diseases such as hepatitis B and C, cirrhosis, and alcohol use disorder are major risk factors for liver cancer. It is often diagnosed at a later stage, as it may not cause symptoms early on.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Liver Cancer",
      symptoms: [
        {
          title: "Unexplained Weight Loss",
          description:
            "A significant and unexplained loss of weight can be an indicator of liver cancer.",
        },
        {
          title: "Abdominal Pain or Swelling",
          description:
            "Pain or swelling in the upper right side of the abdomen, where the liver is located.",
        },
        {
          title: "Jaundice",
          description:
            "Yellowing of the skin and eyes due to the liver's inability to process bilirubin.",
        },
        {
          title: "Nausea and Vomiting",
          description: "Feeling nauseous or vomiting without a clear cause.",
        },
        {
          title: "Loss of Appetite",
          description:
            "A significant loss of appetite that affects normal eating patterns.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Physical Exam and Medical History",
          paragraph:
            "The doctor will begin by reviewing your medical history and performing a physical examination to check for signs of liver problems, such as tenderness or a swollen abdomen.",
        },
        {
          index: "2",
          h3: "Imaging Tests (CT, MRI, Ultrasound)",
          paragraph:
            "CT scans, MRIs, and ultrasounds can help identify liver tumors and assess their size and spread.",
        },
        {
          index: "3",
          h3: "Blood Tests",
          paragraph:
            "Blood tests, such as liver function tests, can help assess how well the liver is working and detect any abnormalities.",
        },
        {
          index: "4",
          h3: "Biopsy",
          paragraph:
            "A biopsy involves taking a small sample of liver tissue for laboratory analysis to confirm the presence of cancer.",
        },
      ],
      Image: "/cancer-types/liver-cancer-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "Surgery is often the preferred treatment option for liver cancer if the tumor is small and localized. Procedures include partial hepatectomy (removal of part of the liver) or a liver transplant if the liver is extensively damaged.",
        },
        {
          h3: { span: "2", copy: "Ablation Therapy" },
          p: "Ablation therapies, such as radiofrequency ablation (RFA) or microwave ablation (MWA), involve using heat to destroy cancer cells in the liver.",
        },
        {
          h3: { span: "3", copy: "Transarterial Chemoembolization (TACE)" },
          p: "In TACE, chemotherapy drugs are injected directly into the blood vessels feeding the tumor, combined with a substance that blocks the blood supply to the cancer.",
        },
        {
          h3: { span: "4", copy: "Radiation Therapy" },
          p: "Radiation therapy uses high-energy beams to target and destroy cancer cells, though it is less commonly used for liver cancer.",
        },
        {
          h3: { span: "5", copy: "Chemotherapy" },
          p: "Chemotherapy can be used to treat liver cancer, particularly in advanced cases where the cancer has spread beyond the liver.",
        },
        {
          h3: { span: "6", copy: "Immunotherapy" },
          p: "Immunotherapy treatments, such as checkpoint inhibitors, can help boost the immune system to recognize and attack cancer cells.",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "The prognosis for liver cancer depends on the stage at diagnosis, liver function, and the extent of metastasis. Early detection improves the chances of successful treatment and recovery.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Cancer confined to the liver, no spread",
            survival: "30-50%",
          },
          {
            stage: "II",
            description:
              "Cancer has spread to nearby blood vessels or lymph nodes",
            survival: "20-30%",
          },
          {
            stage: "III",
            description: "Cancer has spread to nearby organs",
            survival: "10-15%",
          },
          {
            stage: "IV",
            description: "Cancer has spread to distant parts of the body",
            survival: "2-5%",
          },
        ],
      },
    },
  },

  {
    typeName: "lung-cancer",
    heroSection: {
      Image: "/cancer-types/lung-cancer-hero.jpg",
      title: "Understanding Lung Cancer",
      description:
        "Discover the causes, symptoms, diagnosis, and treatment options for lung cancer, one of the leading causes of cancer-related deaths worldwide.",
    },
    overviewSection: {
      Image: "/cancer-types/lung-anatomy.jpg",
      h2: "What is Lung Cancer?",
      paragraphs: [
        "Lung cancer begins in the lungs and is one of the most common cancers worldwide. It can be broadly categorized into two types: non-small cell lung cancer (NSCLC) and small cell lung cancer (SCLC), with NSCLC being more common.",
        "Smoking is the leading cause of lung cancer, though non-smokers can also develop the disease due to factors such as exposure to radon, secondhand smoke, or certain environmental toxins.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Lung Cancer",
      symptoms: [
        {
          title: "Chronic Cough",
          description:
            "A persistent cough that doesn't go away or worsens over time.",
        },
        {
          title: "Shortness of Breath",
          description:
            "Feeling out of breath even with minimal exertion, due to blocked airways.",
        },
        {
          title: "Chest Pain",
          description:
            "Pain in the chest that may worsen with deep breathing or coughing.",
        },
        {
          title: "Coughing Up Blood",
          description:
            "Coughing up blood or rust-colored sputum, a common symptom in later stages.",
        },
        {
          title: "Fatigue",
          description:
            "Feeling unusually tired or weak, which can affect daily activities.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Chest X-ray",
          paragraph:
            "A chest X-ray can help detect abnormal growths or tumors in the lungs, prompting further tests.",
        },
        {
          index: "2",
          h3: "CT Scan",
          paragraph:
            "A CT scan provides more detailed images of the lungs and can reveal the size, shape, and location of tumors.",
        },
        {
          index: "3",
          h3: "Bronchoscopy",
          paragraph:
            "A bronchoscope is used to look inside the airways and take a biopsy to confirm the presence of cancer.",
        },
        {
          index: "4",
          h3: "Biopsy",
          paragraph:
            "A biopsy involves removing a small tissue sample from the tumor for laboratory analysis to determine if cancer cells are present.",
        },
      ],
      Image: "/cancer-types/lung-cancer-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "Surgical removal of the tumor is often the best option for localized non-small cell lung cancer (NSCLC). The procedure can involve partial removal of the lung (lobectomy) or complete removal of the lung (pneumonectomy).",
        },
        {
          h3: { span: "2", copy: "Chemotherapy" },
          p: "Chemotherapy involves the use of drugs to kill cancer cells, and it is commonly used for both small cell and non-small cell lung cancer.",
        },
        {
          h3: { span: "3", copy: "Radiation Therapy" },
          p: "Radiation therapy uses high-energy beams to target and destroy cancer cells. It is often used to shrink tumors before surgery or to treat tumors that cannot be surgically removed.",
        },
        {
          h3: { span: "4", copy: "Immunotherapy" },
          p: "Immunotherapy boosts the body's immune system to fight cancer. It is especially useful for certain types of advanced non-small cell lung cancer.",
        },
        {
          h3: { span: "5", copy: "Targeted Therapy" },
          p: "Targeted therapy uses drugs that specifically target cancer cells by blocking the molecular signals that allow the cancer cells to grow and divide.",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "The prognosis for lung cancer depends on the stage at diagnosis, the type of lung cancer, and the patient's overall health. Early detection increases the chances of successful treatment.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description:
              "Cancer is confined to the lungs, no spread to lymph nodes",
            survival: "50-60%",
          },
          {
            stage: "II",
            description: "Cancer has spread to nearby lymph nodes",
            survival: "30-40%",
          },
          {
            stage: "III",
            description:
              "Cancer has spread to surrounding tissues and lymph nodes",
            survival: "10-20%",
          },
          {
            stage: "IV",
            description: "Cancer has spread to distant organs (metastasized)",
            survival: "5-10%",
          },
        ],
      },
    },
  },

  {
    typeName: "multiple-myeloma",
    heroSection: {
      Image: "/cancer-types/multiple-myeloma-hero.jpg",
      title: "Understanding Multiple Myeloma",
      description:
        "Learn about multiple myeloma, a type of cancer that affects plasma cells in the bone marrow and impacts the production of blood cells.",
    },
    overviewSection: {
      Image: "/cancer-types/bone-marrow.jpg",
      h2: "What is Multiple Myeloma?",
      paragraphs: [
        "Multiple myeloma is a cancer of the plasma cells, which are a type of white blood cell found in the bone marrow. These cells help produce antibodies to fight infections.",
        "In multiple myeloma, abnormal plasma cells grow uncontrollably and accumulate in the bone marrow, impairing the production of normal blood cells and leading to weakened bones, anemia, infections, and kidney problems.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Multiple Myeloma",
      symptoms: [
        {
          title: "Bone Pain",
          description:
            "Pain in the back, ribs, or hips is common due to weakened bones caused by the cancer.",
        },
        {
          title: "Fatigue",
          description:
            "Feeling unusually tired or weak, often due to anemia or the body's inability to produce enough healthy blood cells.",
        },
        {
          title: "Frequent Infections",
          description:
            "Multiple myeloma weakens the immune system, increasing the risk of infections such as pneumonia or urinary tract infections.",
        },
        {
          title: "Numbness or Weakness",
          description:
            "Pressure on the spinal cord or nerves can cause numbness, tingling, or weakness in the legs or arms.",
        },
        {
          title: "Unexplained Weight Loss",
          description:
            "A significant and unexplained weight loss can be a symptom of multiple myeloma.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Blood Tests",
          paragraph:
            "Blood tests can detect abnormalities in the plasma cells, including elevated protein levels or a low red blood cell count.",
        },
        {
          index: "2",
          h3: "Urine Tests",
          paragraph:
            "Urine tests can help identify abnormal proteins produced by myeloma cells, such as Bence-Jones proteins.",
        },
        {
          index: "3",
          h3: "Bone Marrow Biopsy",
          paragraph:
            "A bone marrow biopsy involves taking a sample from the bone marrow to check for the presence of myeloma cells.",
        },
        {
          index: "4",
          h3: "X-rays and MRI",
          paragraph:
            "X-rays, MRIs, and CT scans are used to detect bone damage, tumors, or other complications caused by myeloma.",
        },
      ],
      Image: "/cancer-types/multiple-myeloma-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Chemotherapy" },
          p: "Chemotherapy involves the use of drugs to kill cancer cells and is a common treatment for multiple myeloma, often combined with other therapies.",
        },
        {
          h3: { span: "2", copy: "Stem Cell Transplant" },
          p: "A stem cell transplant can replace the damaged bone marrow with healthy stem cells to help the body produce new, healthy blood cells.",
        },
        {
          h3: { span: "3", copy: "Targeted Therapy" },
          p: "Targeted therapies work by attacking specific molecules involved in the growth of myeloma cells, such as proteasome inhibitors or immunomodulatory drugs.",
        },
        {
          h3: { span: "4", copy: "Immunotherapy" },
          p: "Immunotherapy helps the body's immune system recognize and attack myeloma cells, using agents like monoclonal antibodies.",
        },
        {
          h3: { span: "5", copy: "Radiation Therapy" },
          p: "Radiation therapy may be used to shrink tumors or relieve symptoms such as bone pain caused by multiple myeloma.",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "The prognosis for multiple myeloma varies based on the stage at diagnosis and the patient's overall health. Although it is not considered curable, effective treatments can help manage the disease for many years.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description:
              "Early stage with few symptoms and minimal organ damage",
            survival: "70-80%",
          },
          {
            stage: "II",
            description: "Intermediate stage with more aggressive cancer cells",
            survival: "40-50%",
          },
          {
            stage: "III",
            description:
              "Advanced stage with widespread disease and significant organ damage",
            survival: "20-30%",
          },
        ],
      },
    },
  },

  {
    typeName: "neuroendocrine-tumors",
    heroSection: {
      Image: "/cancer-types/neuroendocrine-tumors-hero.jpg",
      title: "Understanding Neuroendocrine Tumors",
      description:
        "Explore neuroendocrine tumors, cancers that form in cells of the neuroendocrine system, affecting various organs.",
    },
    overviewSection: {
      Image: "/cancer-types/neuroendocrine.jpg",
      h2: "What are Neuroendocrine Tumors?",
      paragraphs: [
        "Neuroendocrine tumors (NETs) are a group of rare cancers that develop in the neuroendocrine cells, which have characteristics of both nerve cells and hormone-producing cells.",
        "NETs can occur in several parts of the body, including the lungs, pancreas, and gastrointestinal tract. These tumors often grow slowly, and their symptoms may not be noticeable for years.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Neuroendocrine Tumors",
      symptoms: [
        {
          title: "Abdominal Pain",
          description:
            "Pain or discomfort in the abdomen, particularly if the tumor is located in the digestive tract or pancreas.",
        },
        {
          title: "Unexplained Weight Loss",
          description:
            "Unexplained weight loss can occur in patients with advanced NETs, particularly those in the pancreas or intestines.",
        },
        {
          title: "Flushing and Diarrhea",
          description:
            "Certain NETs, particularly those in the gastrointestinal system, can cause symptoms like flushing or diarrhea due to hormone secretion.",
        },
        {
          title: "Fatigue",
          description:
            "Excessive tiredness or weakness, which is common with many cancers, including NETs.",
        },
        {
          title: "Breathing Difficulties",
          description:
            "Lung neuroendocrine tumors may cause symptoms like wheezing or shortness of breath.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Blood Tests",
          paragraph:
            "Blood tests can detect abnormal hormone levels that might indicate the presence of a neuroendocrine tumor.",
        },
        {
          index: "2",
          h3: "Urine Tests",
          paragraph:
            "Urine tests, such as measuring 5-HIAA (a metabolite of serotonin), can help diagnose NETs, especially in the gastrointestinal or lung regions.",
        },
        {
          index: "3",
          h3: "Imaging Tests",
          paragraph:
            "Imaging tests such as CT scans, MRIs, and PET scans help to locate the tumor and determine if it has spread to other parts of the body.",
        },
        {
          index: "4",
          h3: "Biopsy",
          paragraph:
            "A biopsy may be performed to confirm the presence of cancerous neuroendocrine cells and determine the tumor's specific type and grade.",
        },
      ],
      Image: "/cancer-types/neuroendocrine-tumors-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "Surgical removal of the tumor is often the most effective treatment for neuroendocrine tumors, especially if they are localized.",
        },
        {
          h3: { span: "2", copy: "Chemotherapy" },
          p: "Chemotherapy is sometimes used for aggressive or metastatic NETs to shrink the tumor or slow its growth.",
        },
        {
          h3: { span: "3", copy: "Targeted Therapy" },
          p: "Targeted therapies focus on specific proteins or genes that contribute to the growth of NETs, improving treatment outcomes for some patients.",
        },
        {
          h3: { span: "4", copy: "Radioactive Therapy" },
          p: "Radioactive therapy, such as PRRT (peptide receptor radionuclide therapy), involves using radiation to target and destroy tumor cells.",
        },
        {
          h3: { span: "5", copy: "Somatostatin Analogs" },
          p: "Somatostatin analogs are drugs that can help control symptoms and slow tumor growth, especially in patients with well-differentiated NETs.",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "The prognosis for neuroendocrine tumors depends on the tumor's location, size, and whether it has spread. Slow-growing NETs have a relatively favorable prognosis, while more aggressive tumors can be challenging to treat.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Localized, small tumors without spread",
            survival: "90-95%",
          },
          {
            stage: "II",
            description: "Regional spread, but confined to nearby tissues",
            survival: "70-80%",
          },
          {
            stage: "III",
            description: "Spread to nearby lymph nodes or organs",
            survival: "50-60%",
          },
          {
            stage: "IV",
            description: "Distant metastasis, extensive spread",
            survival: "15-25%",
          },
        ],
      },
    },
  },

  {
    typeName: "non-hodgkin-lymphoma",
    heroSection: {
      Image: "/cancer-types/non-hodgkin-lymphoma-hero.jpg",
      title: "Understanding Non-Hodgkin Lymphoma",
      description:
        "Explore Non-Hodgkin lymphoma, a type of cancer that starts in the lymphatic system, affecting lymph nodes and other organs.",
    },
    overviewSection: {
      Image: "/cancer-types/non-hodgkin-lymphoma.jpg",
      h2: "What is Non-Hodgkin Lymphoma?",
      paragraphs: [
        "Non-Hodgkin lymphoma (NHL) is a group of blood cancers that develop in the lymphatic system, which is part of the body’s immune system.",
        "NHL can start in the lymph nodes or other lymphatic tissues, and it can spread to other organs. It includes a wide variety of lymphoma types, with some being more aggressive and others slow-growing.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Non-Hodgkin Lymphoma",
      symptoms: [
        {
          title: "Swollen Lymph Nodes",
          description:
            "Enlarged lymph nodes, often felt as painless lumps under the skin, are common in NHL.",
        },
        {
          title: "Unexplained Weight Loss",
          description:
            "Significant, unintended weight loss without a clear cause.",
        },
        {
          title: "Night Sweats",
          description:
            "Profuse sweating during the night, which may be severe enough to soak clothing.",
        },
        {
          title: "Fatigue",
          description: "Tiredness or weakness that does not improve with rest.",
        },
        {
          title: "Fever",
          description:
            "A persistent fever without infection can be a sign of NHL.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Physical Examination",
          paragraph:
            "A doctor may feel for enlarged lymph nodes or other signs of lymphoma during a physical examination.",
        },
        {
          index: "2",
          h3: "Blood Tests",
          paragraph:
            "Blood tests can help detect abnormal cell counts or other signs of lymphoma.",
        },
        {
          index: "3",
          h3: "Biopsy",
          paragraph:
            "A biopsy, often of an enlarged lymph node or other affected tissue, is necessary to confirm the diagnosis of NHL.",
        },
        {
          index: "4",
          h3: "Imaging Tests",
          paragraph:
            "Imaging tests such as CT scans, PET scans, and MRIs can help locate the tumor and determine how far the cancer has spread.",
        },
      ],
      Image: "/cancer-types/non-hodgkin-lymphoma-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Chemotherapy" },
          p: "Chemotherapy is the primary treatment for most forms of Non-Hodgkin lymphoma. It uses drugs to destroy cancerous cells or stop their growth.",
        },
        {
          h3: { span: "2", copy: "Radiation Therapy" },
          p: "Radiation therapy uses high-energy rays to target and kill cancer cells, especially in localized NHL cases.",
        },
        {
          h3: { span: "3", copy: "Targeted Therapy" },
          p: "Targeted therapies specifically attack the molecules that contribute to cancer cell growth, often with fewer side effects than chemotherapy.",
        },
        {
          h3: { span: "4", copy: "Immunotherapy" },
          p: "Immunotherapy works by stimulating the body’s immune system to fight cancer cells or by providing synthetic immune system proteins.",
        },
        {
          h3: { span: "5", copy: "Stem Cell Transplant" },
          p: "In cases of aggressive NHL, a stem cell transplant may be considered to restore healthy blood cells after chemotherapy or radiation.",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "The prognosis for Non-Hodgkin lymphoma depends on the subtype, stage, and overall health of the patient. Some types of NHL are highly treatable, while others are more aggressive.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Cancer is localized in a single lymph node or area",
            survival: "80-90%",
          },
          {
            stage: "II",
            description:
              "Cancer is in multiple lymph nodes or areas on one side of the diaphragm",
            survival: "70-80%",
          },
          {
            stage: "III",
            description:
              "Cancer has spread to lymph nodes on both sides of the diaphragm",
            survival: "50-70%",
          },
          {
            stage: "IV",
            description:
              "Cancer has spread to other organs, such as the liver, bone marrow, or lungs",
            survival: "30-40%",
          },
        ],
      },
    },
  },

  {
    typeName: "oral-cancer",
    heroSection: {
      Image: "/cancer-types/oral-cancer-hero.jpg",
      title: "Understanding Oral Cancer",
      description:
        "Learn about oral cancer, which affects the mouth, lips, tongue, gums, and other parts of the oral cavity.",
    },
    overviewSection: {
      Image: "/cancer-types/oral-cancer.jpg",
      h2: "What is Oral Cancer?",
      paragraphs: [
        "Oral cancer refers to cancer that forms in the tissues of the mouth or throat. It can occur on the lips, tongue, gums, the roof or floor of the mouth, and the lining of the cheeks.",
        "The majority of oral cancers are squamous cell carcinomas, which start in the thin, flat cells that line the oral cavity. It is often linked to tobacco use, alcohol consumption, and HPV infection.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Oral Cancer",
      symptoms: [
        {
          title: "Sore or Ulcer in the Mouth",
          description: "A persistent sore or ulcer that doesn't heal.",
        },
        {
          title: "Lumps or Swellings",
          description: "Lumps or swelling in the mouth, jaw, or neck.",
        },
        {
          title: "Difficulty Swallowing",
          description:
            "Trouble swallowing or a feeling of something stuck in the throat.",
        },
        {
          title: "Pain or Tenderness",
          description:
            "Pain or tenderness in the mouth or lips, often when chewing or speaking.",
        },
        {
          title: "Changes in Voice",
          description: "A hoarse voice or changes in speech may occur.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Oral Examination",
          paragraph:
            "A doctor or dentist inspects the mouth for abnormal growths, sores, or signs of infection.",
        },
        {
          index: "2",
          h3: "Biopsy",
          paragraph:
            "A biopsy involves taking a tissue sample from a suspicious area to confirm the presence of cancerous cells.",
        },
        {
          index: "3",
          h3: "Imaging Tests",
          paragraph:
            "CT scans, MRIs, or PET scans are used to determine if the cancer has spread to other parts of the body.",
        },
      ],
      Image: "/cancer-types/oral-cancer-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "Surgical removal of the tumor or affected area is often the first treatment for oral cancer. In some cases, it may involve removing part of the jaw or tongue.",
        },
        {
          h3: { span: "2", copy: "Radiation Therapy" },
          p: "Radiation therapy is used to target cancer cells in the mouth and throat, often after surgery to ensure all cancerous tissue is removed.",
        },
        {
          h3: { span: "3", copy: "Chemotherapy" },
          p: "Chemotherapy uses powerful drugs to kill cancer cells, and it may be used in conjunction with surgery and radiation for advanced cases.",
        },
        {
          h3: { span: "4", copy: "Targeted Therapy" },
          p: "Targeted therapies can target specific proteins or mutations in cancer cells to stop their growth, and it may be used in some cases of oral cancer.",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "The prognosis for oral cancer depends on the stage of the cancer, its location, and how early it is detected. Early-stage oral cancer is often treatable with surgery and radiation.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Tumor is ≤ 2 cm and localized to the mouth",
            survival: "80-90%",
          },
          {
            stage: "II",
            description: "Tumor is > 2 cm but still localized",
            survival: "60-80%",
          },
          {
            stage: "III",
            description: "Cancer has spread to nearby lymph nodes",
            survival: "40-60%",
          },
          {
            stage: "IV",
            description: "Cancer has spread to distant organs or structures",
            survival: "20-30%",
          },
        ],
      },
    },
  },

  {
    typeName: "ovarian-cancer",
    heroSection: {
      Image: "/cancer-types/ovarian-cancer-hero.jpg",
      title: "Understanding Ovarian Cancer",
      description:
        "Ovarian cancer affects the ovaries and is one of the most common types of cancer in women. Learn about causes, symptoms, and treatment options.",
    },
    overviewSection: {
      Image: "/cancer-types/ovarian-cancer.jpg",
      h2: "What is Ovarian Cancer?",
      paragraphs: [
        "Ovarian cancer is cancer that starts in the ovaries, the reproductive glands where eggs are produced. It is often not detected until it has spread within the pelvis and abdomen.",
        "The most common types of ovarian cancer are epithelial ovarian cancers, which arise from the outer layer of the ovary. Genetic mutations, including those in BRCA genes, can increase the risk.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Ovarian Cancer",
      symptoms: [
        {
          title: "Abdominal Bloating",
          description:
            "Persistent bloating or feeling full quickly after eating.",
        },
        {
          title: "Pelvic or Abdominal Pain",
          description:
            "Pain in the pelvic region or abdomen that is persistent or does not go away.",
        },
        {
          title: "Changes in Bowel Habits",
          description:
            "Changes such as constipation, diarrhea, or frequent urination.",
        },
        {
          title: "Fatigue",
          description:
            "Unusual or unexplained fatigue or feeling tired all the time.",
        },
        {
          title: "Loss of Appetite",
          description: "A decrease in appetite, leading to weight loss.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Pelvic Exam",
          paragraph:
            "A doctor manually examines the ovaries for any abnormal growths or tenderness.",
        },
        {
          index: "2",
          h3: "Ultrasound",
          paragraph:
            "An ultrasound is used to create images of the ovaries to check for abnormalities such as cysts or masses.",
        },
        {
          index: "3",
          h3: "CA-125 Blood Test",
          paragraph:
            "The CA-125 test measures the level of a protein in the blood that can be elevated in ovarian cancer.",
        },
        {
          index: "4",
          h3: "CT Scan or MRI",
          paragraph:
            "CT scans or MRI scans are used to determine the extent of the cancer and if it has spread.",
        },
      ],
      Image: "/cancer-types/ovarian-cancer-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "Surgery is the primary treatment for ovarian cancer and often involves removing the ovaries, fallopian tubes, and sometimes the uterus.",
        },
        {
          h3: { span: "2", copy: "Chemotherapy" },
          p: "Chemotherapy uses drugs to kill cancer cells or stop them from growing. It is often used after surgery to destroy remaining cancer cells.",
        },
        {
          h3: { span: "3", copy: "Targeted Therapy" },
          p: "Targeted therapy aims at specific genes or proteins in cancer cells, blocking the growth and spread of tumors.",
        },
        {
          h3: { span: "4", copy: "Hormone Therapy" },
          p: "Hormone therapy may be used to block the hormones that encourage the growth of certain types of ovarian cancer.",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "The prognosis for ovarian cancer depends on the stage at diagnosis, with earlier stages having better outcomes. Unfortunately, ovarian cancer is often diagnosed at later stages.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Cancer is confined to one or both ovaries",
            survival: "90%",
          },
          {
            stage: "II",
            description: "Cancer has spread to the pelvis",
            survival: "70-80%",
          },
          {
            stage: "III",
            description: "Cancer has spread to the abdomen",
            survival: "40-60%",
          },
          {
            stage: "IV",
            description: "Cancer has spread to distant organs",
            survival: "15-20%",
          },
        ],
      },
    },
  },

  {
    typeName: "pancreatic-cancer",
    heroSection: {
      Image: "/cancer-types/pancreatic-cancer-hero.jpg",
      title: "Understanding Pancreatic Cancer",
      description:
        "Pancreatic cancer starts in the pancreas and is often diagnosed at an advanced stage. Learn about its causes, symptoms, diagnosis, and treatment options.",
    },
    overviewSection: {
      Image: "/cancer-types/pancreatic-cancer.jpg",
      h2: "What is Pancreatic Cancer?",
      paragraphs: [
        "Pancreatic cancer begins in the pancreas, a gland located behind the stomach that helps with digestion and blood sugar regulation. It is a highly aggressive cancer with a poor prognosis.",
        "Most pancreatic cancers are exocrine cancers, specifically pancreatic ductal adenocarcinomas. Risk factors include smoking, obesity, family history, and certain genetic mutations like BRCA.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Pancreatic Cancer",
      symptoms: [
        {
          title: "Abdominal Pain",
          description:
            "Pain in the upper abdomen or back, often worsening after eating.",
        },
        {
          title: "Unexplained Weight Loss",
          description:
            "Significant weight loss without changing diet or exercise habits.",
        },
        {
          title: "Jaundice",
          description:
            "Yellowing of the skin or eyes, a result of a blocked bile duct.",
        },
        {
          title: "Fatigue",
          description:
            "Chronic fatigue or weakness, often feeling unusually tired.",
        },
        {
          title: "Nausea and Vomiting",
          description:
            "Persistent nausea and vomiting, particularly after eating.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "CT Scan",
          paragraph:
            "CT scans are often used to obtain detailed images of the pancreas and surrounding organs to identify tumors.",
        },
        {
          index: "2",
          h3: "Endoscopic Ultrasound",
          paragraph:
            "A thin tube with an ultrasound device is inserted into the stomach to get a close look at the pancreas and take a biopsy if needed.",
        },
        {
          index: "3",
          h3: "MRI",
          paragraph:
            "MRI scans provide detailed images and help in assessing the spread of cancer in the pancreas.",
        },
        {
          index: "4",
          h3: "Blood Tests (CA 19-9)",
          paragraph:
            "A blood test can measure levels of CA 19-9, a marker that may be elevated in people with pancreatic cancer.",
        },
      ],
      Image: "/cancer-types/pancreatic-cancer-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "Surgery may be an option if the cancer is localized and hasn't spread. The Whipple procedure is the most common surgery for pancreatic cancer.",
        },
        {
          h3: { span: "2", copy: "Chemotherapy" },
          p: "Chemotherapy uses drugs to target cancer cells. It's often used before surgery to shrink tumors or after surgery to kill remaining cancer cells.",
        },
        {
          h3: { span: "3", copy: "Radiation Therapy" },
          p: "Radiation therapy uses high-energy beams to kill cancer cells. It may be combined with chemotherapy to treat pancreatic cancer.",
        },
        {
          h3: { span: "4", copy: "Targeted Therapy" },
          p: "Targeted therapy targets specific molecules involved in the growth and spread of cancer cells. This treatment can be used in advanced cases.",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "Pancreatic cancer has a low survival rate due to its late-stage diagnosis and aggressive nature. Early detection is key to improving outcomes.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Cancer is confined to the pancreas",
            survival: "20-30%",
          },
          {
            stage: "II",
            description: "Cancer has spread to nearby tissues or lymph nodes",
            survival: "10-15%",
          },
          {
            stage: "III",
            description:
              "Cancer has spread to major blood vessels or distant organs",
            survival: "5-10%",
          },
          {
            stage: "IV",
            description:
              "Cancer has spread to distant organs, such as the liver or lungs",
            survival: "3-5%",
          },
        ],
      },
    },
  },

  {
    typeName: "penile-cancer",
    heroSection: {
      Image: "/cancer-types/penile-cancer-hero.jpg",
      title: "Understanding Penile Cancer",
      description:
        "Penile cancer is a rare cancer that affects the tissues of the penis. Learn about its causes, symptoms, diagnosis, and treatment options.",
    },
    overviewSection: {
      Image: "/cancer-types/penile-cancer.jpg",
      h2: "What is Penile Cancer?",
      paragraphs: [
        "Penile cancer is a type of cancer that occurs in the tissues of the penis. It often starts in the skin cells of the penis and can spread to other parts of the body if not treated early.",
        "The most common type of penile cancer is squamous cell carcinoma. Risk factors include smoking, human papillomavirus (HPV) infection, poor hygiene, and a history of certain sexually transmitted infections.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Penile Cancer",
      symptoms: [
        {
          title: "Lump or Growth on the Penis",
          description:
            "A lump or growth that may be painless initially, but could become painful as the cancer progresses.",
        },
        {
          title: "Changes in the Skin",
          description:
            "Changes such as color changes, thickening, or sores that do not heal.",
        },
        {
          title: "Pain or Discomfort",
          description:
            "Pain or discomfort in the penis, particularly in the area where the cancer is located.",
        },
        {
          title: "Swelling or Enlarged Lymph Nodes",
          description:
            "Swelling in the groin area due to the spread of cancer to the lymph nodes.",
        },
        {
          title: "Unusual Discharge",
          description:
            "Unusual discharge or bleeding from the penis, sometimes with an unpleasant odor.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Physical Examination",
          paragraph:
            "The doctor will conduct a physical exam to check for visible lumps, growths, or any abnormalities on the penis.",
        },
        {
          index: "2",
          h3: "Biopsy",
          paragraph:
            "A tissue sample is taken from the lump or lesion for laboratory examination to confirm the presence of cancer.",
        },
        {
          index: "3",
          h3: "Ultrasound",
          paragraph:
            "An ultrasound may be used to check for cancer spread to nearby lymph nodes or other tissues.",
        },
        {
          index: "4",
          h3: "CT Scan",
          paragraph:
            "A CT scan may be performed to determine if cancer has spread to other parts of the body.",
        },
      ],
      Image: "/cancer-types/penile-cancer-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "Surgery is the most common treatment for penile cancer. It may involve the removal of the tumor, part of the penis, or the entire penis in severe cases.",
        },
        {
          h3: { span: "2", copy: "Radiation Therapy" },
          p: "Radiation therapy uses high-energy rays to kill cancer cells. It may be used after surgery or as an alternative if surgery is not possible.",
        },
        {
          h3: { span: "3", copy: "Chemotherapy" },
          p: "Chemotherapy uses drugs to kill cancer cells or stop their growth. It may be used for advanced cases or to shrink tumors before surgery.",
        },
        {
          h3: { span: "4", copy: "Topical Therapy" },
          p: "In some cases, topical treatments such as imiquimod or 5-fluorouracil (5-FU) may be used to treat early-stage penile cancer.",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "The prognosis for penile cancer depends on the stage of the cancer at diagnosis. Early detection is critical for successful treatment and better outcomes.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description:
              "Tumor confined to the penis, no lymph node involvement",
            survival: "90-95%",
          },
          {
            stage: "II",
            description: "Cancer has spread to nearby tissues or lymph nodes",
            survival: "70-80%",
          },
          {
            stage: "III",
            description: "Cancer has spread to regional lymph nodes",
            survival: "50-60%",
          },
          {
            stage: "IV",
            description: "Cancer has spread to distant organs or lymph nodes",
            survival: "15-20%",
          },
        ],
      },
    },
  },

  {
    typeName: "pituitary-tumors",
    heroSection: {
      Image: "/cancer-types/pituitary-tumor-hero.jpg",
      title: "Understanding Pituitary Tumors",
      description:
        "Pituitary tumors are abnormal growths in the pituitary gland, which controls critical body functions. Learn about their causes, symptoms, diagnosis, and treatment options.",
    },
    overviewSection: {
      Image: "/cancer-types/pituitary-tumor.jpg",
      h2: "What are Pituitary Tumors?",
      paragraphs: [
        "Pituitary tumors are growths that develop in the pituitary gland, a small gland located at the base of the brain. While most pituitary tumors are benign (non-cancerous), they can still cause a variety of symptoms due to their location and impact on hormone production.",
        "Pituitary tumors can interfere with the gland’s ability to produce hormones, leading to various symptoms depending on the type of hormone affected. They may also exert pressure on surrounding structures, such as the optic nerves, leading to vision problems.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Pituitary Tumors",
      symptoms: [
        {
          title: "Headaches",
          description:
            "Frequent or persistent headaches, often caused by pressure from the tumor on nearby structures.",
        },
        {
          title: "Vision Problems",
          description:
            "Loss of peripheral vision or double vision due to pressure on the optic nerves.",
        },
        {
          title: "Hormonal Imbalances",
          description:
            "Changes in hormone levels that can lead to a variety of symptoms, including fatigue, weight gain, or changes in menstrual cycles.",
        },
        {
          title: "Fatigue",
          description:
            "Extreme tiredness or weakness due to hormonal imbalances caused by the tumor.",
        },
        {
          title: "Nausea and Vomiting",
          description:
            "A result of increased pressure in the brain from a large tumor or its hormonal effects.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Physical Examination",
          paragraph:
            "The doctor will conduct a thorough physical exam, looking for signs of hormonal imbalance and changes in vision.",
        },
        {
          index: "2",
          h3: "MRI Scan",
          paragraph:
            "An MRI scan provides detailed images of the pituitary gland and surrounding structures to identify tumors.",
        },
        {
          index: "3",
          h3: "CT Scan",
          paragraph:
            "A CT scan may be used to provide additional detail or if an MRI is not available.",
        },
        {
          index: "4",
          h3: "Blood Tests",
          paragraph:
            "Blood tests help measure hormone levels and can identify whether the pituitary gland is producing too much or too little of a particular hormone.",
        },
      ],
      Image: "/cancer-types/pituitary-tumor-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "Surgery to remove the tumor is often the first-line treatment, especially for tumors that are causing significant symptoms or hormone imbalances. Most tumors are accessed through the nose via endoscopic surgery.",
        },
        {
          h3: { span: "2", copy: "Radiation Therapy" },
          p: "Radiation therapy is used when surgery is not an option or to treat remaining tumor cells after surgery.",
        },
        {
          h3: { span: "3", copy: "Medications" },
          p: "Medications, including dopamine agonists, somatostatin analogs, and corticosteroids, can be used to shrink tumors or correct hormone imbalances.",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "The prognosis for pituitary tumors depends on factors such as tumor size, location, and the extent of hormonal imbalance. Most patients with benign pituitary tumors can expect a good long-term outlook with treatment.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Small tumor, confined to the pituitary gland",
            survival: "95-100%",
          },
          {
            stage: "II",
            description: "Moderate tumor size, localized",
            survival: "90-95%",
          },
          {
            stage: "III",
            description: "Tumor affecting surrounding structures or spreading",
            survival: "70-85%",
          },
          {
            stage: "IV",
            description: "Aggressive or metastatic tumors",
            survival: "50-60%",
          },
        ],
      },
    },
  },

  {
    typeName: "prostate-cancer",
    heroSection: {
      Image: "/cancer-types/prostate-cancer-hero.jpg",
      title: "Understanding Prostate Cancer",
      description:
        "Prostate cancer is one of the most common types of cancer among men. Learn about its causes, symptoms, diagnosis, and treatment options.",
    },
    overviewSection: {
      Image: "/cancer-types/prostate-cancer.jpg",
      h2: "What is Prostate Cancer?",
      paragraphs: [
        "Prostate cancer is a type of cancer that begins in the prostate gland, a small walnut-shaped gland that produces seminal fluid. The cancer typically grows slowly, but in some cases, it can be aggressive and spread to other parts of the body.",
        "Most prostate cancers are adenocarcinomas, which develop in the gland cells. Risk factors include age, family history, race, and lifestyle choices, with older men being at higher risk.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Prostate Cancer",
      symptoms: [
        {
          title: "Difficulty Urinating",
          description:
            "A feeling of incomplete emptying or weak urine flow, often due to the tumor pressing on the urethra.",
        },
        {
          title: "Blood in Urine or Semen",
          description:
            "Blood in urine or semen can sometimes be a sign of prostate cancer.",
        },
        {
          title: "Pain in the Lower Back, Hips, or Thighs",
          description:
            "Persistent pain or discomfort in these areas, which can be a sign of cancer spreading to nearby bones.",
        },
        {
          title: "Erectile Dysfunction",
          description:
            "Difficulty achieving or maintaining an erection, which can be linked to prostate cancer.",
        },
        {
          title: "Painful Ejaculation",
          description: "Pain or discomfort during ejaculation.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Digital Rectal Exam (DRE)",
          paragraph:
            "A healthcare provider manually examines the prostate for lumps or abnormalities through the rectum.",
        },
        {
          index: "2",
          h3: "Prostate-Specific Antigen (PSA) Test",
          paragraph:
            "A blood test that measures the level of PSA, a substance produced by the prostate. Elevated PSA levels can indicate prostate cancer or other prostate conditions.",
        },
        {
          index: "3",
          h3: "Biopsy",
          paragraph:
            "A tissue sample is taken from the prostate for examination under a microscope to confirm the presence of cancer.",
        },
        {
          index: "4",
          h3: "MRI and CT Scans",
          paragraph:
            "These imaging techniques can help determine the size and spread of the tumor.",
        },
      ],
      Image: "/cancer-types/prostate-cancer-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "Radical prostatectomy, the surgical removal of the prostate gland, is a common treatment for localized prostate cancer.",
        },
        {
          h3: { span: "2", copy: "Radiation Therapy" },
          p: "Radiation therapy uses high-energy rays to target and kill cancer cells. It may be used after surgery or for more advanced cases.",
        },
        {
          h3: { span: "3", copy: "Hormone Therapy" },
          p: "Hormone therapy reduces the levels of male hormones (androgens) that fuel prostate cancer growth. It is often used in advanced stages.",
        },
        {
          h3: { span: "4", copy: "Chemotherapy" },
          p: "Chemotherapy may be used for advanced or metastatic prostate cancer that doesn't respond to other treatments.",
        },
        {
          h3: { span: "5", copy: "Active Surveillance" },
          p: "For low-risk, slow-growing prostate cancer, active surveillance may be recommended, with regular monitoring rather than immediate treatment.",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "Prostate cancer typically grows slowly, and many men live for many years after diagnosis, especially with early detection and treatment. The survival rate is high for localized prostate cancer.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Localized to the prostate, not spread",
            survival: "100%",
          },
          {
            stage: "II",
            description: "Localized but larger tumor size",
            survival: "100%",
          },
          {
            stage: "III",
            description: "Spread to nearby tissues or lymph nodes",
            survival: "70-80%",
          },
          {
            stage: "IV",
            description: "Distant metastasis",
            survival: "30-40%",
          },
        ],
      },
    },
  },

  {
    typeName: "salivary-gland-cancer",
    heroSection: {
      Image: "/cancer-types/salivary-gland-cancer-hero.jpg",
      title: "Understanding Salivary Gland Cancer",
      description:
        "Salivary gland cancer is a rare type of cancer that starts in the glands that produce saliva. Learn about the causes, symptoms, diagnosis, and treatment options.",
    },
    overviewSection: {
      Image: "/cancer-types/salivary-gland.jpg",
      h2: "What is Salivary Gland Cancer?",
      paragraphs: [
        "Salivary gland cancer occurs in the salivary glands, which are responsible for producing saliva. This cancer can develop in any of the major or minor salivary glands. It's relatively rare compared to other cancers.",
        "Most salivary gland cancers are adenocarcinomas, which are cancers that originate in glandular cells. Risk factors include radiation exposure and certain inherited conditions.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Salivary Gland Cancer",
      symptoms: [
        {
          title: "Swelling or Lump in the Mouth or Neck",
          description:
            "A painless lump or swelling near the jaw or in the neck, which is one of the most common symptoms.",
        },
        {
          title: "Pain in the Affected Area",
          description:
            "Pain or discomfort near the jaw, mouth, or neck, particularly when swallowing or chewing.",
        },
        {
          title: "Difficulty Swallowing",
          description:
            "Pain or difficulty swallowing, often accompanied by a feeling of fullness.",
        },
        {
          title: "Numbness or Weakness in the Face",
          description:
            "A feeling of numbness or weakness in the muscles of the face on one side.",
        },
        {
          title: "Dry Mouth",
          description:
            "A decrease in saliva production, leading to dry mouth or difficulty speaking.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Physical Examination",
          paragraph:
            "A doctor will check for swelling or lumps in the mouth, neck, and face and may perform a thorough head and neck exam.",
        },
        {
          index: "2",
          h3: "Imaging Tests",
          paragraph:
            "CT scans, MRIs, and ultrasounds are commonly used to determine the size, location, and spread of the tumor.",
        },
        {
          index: "3",
          h3: "Biopsy",
          paragraph:
            "A sample of the tumor tissue is removed and examined under a microscope to confirm the presence of cancer cells.",
        },
      ],
      Image: "/cancer-types/salivary-gland-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "Surgical removal of the tumor and possibly the affected salivary gland is the primary treatment for most cases of salivary gland cancer.",
        },
        {
          h3: { span: "2", copy: "Radiation Therapy" },
          p: "Radiation therapy may be used after surgery to destroy any remaining cancer cells or if the tumor is inoperable.",
        },
        {
          h3: { span: "3", copy: "Chemotherapy" },
          p: "Chemotherapy may be recommended in advanced cases of salivary gland cancer, especially if the cancer has spread to other areas of the body.",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "Prognosis depends on the type and stage of salivary gland cancer. Most people with early-stage salivary gland cancer have a favorable outcome, but the prognosis may vary based on factors such as tumor size and location.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Localized tumor, small in size",
            survival: "90-95%",
          },
          {
            stage: "II",
            description: "Tumor larger but still confined",
            survival: "80-90%",
          },
          {
            stage: "III",
            description: "Spread to nearby lymph nodes",
            survival: "50-70%",
          },
          {
            stage: "IV",
            description: "Distant metastasis",
            survival: "20-40%",
          },
        ],
      },
    },
  },

  {
    typeName: "skin-cancer",
    heroSection: {
      Image: "/cancer-types/skin-cancer-hero.jpg",
      title: "Understanding Skin Cancer",
      description:
        "Skin cancer is the most common type of cancer, and it forms in the skin cells. Learn about the causes, symptoms, diagnosis, and treatment options.",
    },
    overviewSection: {
      Image: "/cancer-types/skin-cancer.jpg",
      h2: "What is Skin Cancer?",
      paragraphs: [
        "Skin cancer occurs when abnormal cells begin to grow uncontrollably in the skin. It is the most common type of cancer in the world and can occur in any part of the body.",
        "The three main types of skin cancer are basal cell carcinoma, squamous cell carcinoma, and melanoma. Basal cell and squamous cell cancers are common but rarely spread, while melanoma can spread to other parts of the body.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Skin Cancer",
      symptoms: [
        {
          title: "New Growth or Mole",
          description:
            "A new growth or an existing mole that changes in size, shape, or color.",
        },
        {
          title: "Itchy or Painful Spot",
          description:
            "An area of the skin that becomes itchy, painful, or tender.",
        },
        {
          title: "Bleeding or Oozing",
          description:
            "A mole or growth that begins to bleed or ooze, especially if it wasn't injured.",
        },
        {
          title: "Irregular Borders",
          description:
            "Moles or spots with uneven borders, which are characteristic of melanoma.",
        },
        {
          title: "Color Variation",
          description:
            "A spot or mole that has different colors within it, such as shades of brown, black, and even red or white.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Physical Examination",
          paragraph:
            "A dermatologist will visually examine your skin for signs of abnormal growths or changes in existing moles.",
        },
        {
          index: "2",
          h3: "Skin Biopsy",
          paragraph:
            "A sample of the suspicious skin tissue is removed and analyzed to determine if cancer cells are present.",
        },
        {
          index: "3",
          h3: "Imaging Tests",
          paragraph:
            "In some cases, imaging tests like CT scans or MRIs may be used to check if the cancer has spread to other areas.",
        },
      ],
      Image: "/cancer-types/skin-cancer-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgical Removal" },
          p: "Surgical excision is the most common treatment for skin cancer, involving removal of the tumor and surrounding tissue.",
        },
        {
          h3: { span: "2", copy: "Radiation Therapy" },
          p: "Radiation therapy may be used for cancers that are difficult to remove surgically or if they have spread.",
        },
        {
          h3: { span: "3", copy: "Topical Treatments" },
          p: "Certain skin cancers can be treated with topical treatments such as creams that target cancer cells directly on the skin.",
        },
        {
          h3: { span: "4", copy: "Chemotherapy" },
          p: "Chemotherapy is used for advanced skin cancers, particularly melanoma, when the cancer has spread beyond the skin.",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "Skin cancer prognosis depends on the type, size, and location of the tumor. Basal cell carcinoma and squamous cell carcinoma typically have very high cure rates when detected early. Melanoma can be more aggressive, but it has a good survival rate when caught early.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Localized to the skin",
            survival: "98-100%",
          },
          {
            stage: "II",
            description: "Tumor grows larger or spreads to nearby tissue",
            survival: "85-95%",
          },
          {
            stage: "III",
            description: "Spread to lymph nodes",
            survival: "60-80%",
          },
          {
            stage: "IV",
            description: "Distant metastasis",
            survival: "15-30%",
          },
        ],
      },
    },
  },

  {
    typeName: "stomach-cancer",
    heroSection: {
      Image: "/cancer-types/stomach-cancer-hero.jpg",
      title: "Understanding Stomach Cancer",
      description:
        "Stomach cancer, also known as gastric cancer, occurs when cancer cells form in the lining of the stomach. Explore its causes, symptoms, diagnosis, and treatment options.",
    },
    overviewSection: {
      Image: "/cancer-types/stomach-cancer.jpg",
      h2: "What is Stomach Cancer?",
      paragraphs: [
        "Stomach cancer, or gastric cancer, begins in the stomach lining. It can develop in various parts of the stomach and may spread to nearby organs.",
        "The exact cause of stomach cancer is not fully understood, but risk factors include infection with Helicobacter pylori, a family history of stomach cancer, smoking, and a diet high in salty and smoked foods.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Stomach Cancer",
      symptoms: [
        {
          title: "Persistent Stomach Pain",
          description:
            "Pain or discomfort in the stomach area, often after eating.",
        },
        {
          title: "Bloating or Fullness",
          description: "Feeling full after eating even a small amount of food.",
        },
        {
          title: "Nausea and Vomiting",
          description: "Nausea or vomiting, sometimes with blood.",
        },
        {
          title: "Unexplained Weight Loss",
          description:
            "Losing weight without trying, due to difficulty eating or nutrient absorption.",
        },
        {
          title: "Difficulty Swallowing",
          description: "Difficulty swallowing food, especially solid foods.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Endoscopy",
          paragraph:
            "A flexible tube is used to examine the stomach lining for abnormalities and take tissue samples for biopsy.",
        },
        {
          index: "2",
          h3: "Upper GI Series",
          paragraph:
            "A series of X-rays are taken after the patient drinks a contrast liquid to highlight the stomach and detect abnormal growths.",
        },
        {
          index: "3",
          h3: "Biopsy",
          paragraph:
            "Tissue samples are taken during an endoscopy to determine if cancer cells are present.",
        },
        {
          index: "4",
          h3: "CT Scan or PET Scan",
          paragraph:
            "Imaging tests such as CT or PET scans help determine the extent of the cancer and whether it has spread.",
        },
      ],
      Image: "/cancer-types/stomach-cancer-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "Surgical removal of the tumor is the primary treatment, and in some cases, the entire stomach may be removed.",
        },
        {
          h3: { span: "2", copy: "Chemotherapy" },
          p: "Chemotherapy is often used before or after surgery to shrink the tumor or eliminate remaining cancer cells.",
        },
        {
          h3: { span: "3", copy: "Radiation Therapy" },
          p: "Radiation therapy may be used to treat stomach cancer, especially when it is inoperable or has spread to other organs.",
        },
        {
          h3: { span: "4", copy: "Targeted Therapy" },
          p: "Targeted drugs are used to target specific molecules involved in cancer growth and spread.",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "Stomach cancer prognosis depends on the stage at diagnosis and the effectiveness of treatments. Early-stage stomach cancer has a better chance of survival compared to advanced stages.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Cancer confined to the stomach lining",
            survival: "60-80%",
          },
          {
            stage: "II",
            description: "Spread to nearby lymph nodes",
            survival: "50-70%",
          },
          {
            stage: "III",
            description: "Cancer has spread to nearby organs",
            survival: "30-50%",
          },
          { stage: "IV", description: "Distant metastasis", survival: "5-15%" },
        ],
      },
    },
  },

  {
    typeName: "uterine-cancer",
    heroSection: {
      Image: "/cancer-types/uterine-cancer-hero.jpg",
      title: "Understanding Uterine Cancer",
      description:
        "Uterine cancer, also known as endometrial cancer, begins in the lining of the uterus. Learn about its causes, symptoms, diagnosis, and treatment options.",
    },
    overviewSection: {
      Image: "/cancer-types/uterine-cancer.jpg",
      h2: "What is Uterine Cancer?",
      paragraphs: [
        "Uterine cancer is cancer that begins in the uterus, specifically in the lining known as the endometrium. It is one of the most common cancers of the female reproductive system.",
        "The exact cause of uterine cancer is not fully known, but factors like obesity, hormone replacement therapy, and certain genetic conditions increase the risk. It typically occurs in postmenopausal women, but it can affect younger women as well.",
      ],
    },
    symptomsSection: {
      h2: "Symptoms of Uterine Cancer",
      symptoms: [
        {
          title: "Abnormal Vaginal Bleeding",
          description:
            "The most common symptom is bleeding that is not part of the regular menstrual cycle, especially after menopause.",
        },
        {
          title: "Pelvic Pain",
          description:
            "Pain or discomfort in the pelvic area, which may worsen over time.",
        },
        {
          title: "Pain During Urination or Intercourse",
          description: "Painful urination or pain during sexual activity.",
        },
        {
          title: "Unexplained Weight Loss",
          description:
            "Weight loss that occurs without trying, which can be a sign of advanced disease.",
        },
      ],
    },
    diagnosisSection: {
      h2: "Diagnosis and Tests",
      diagnosis: [
        {
          index: "1",
          h3: "Pelvic Exam",
          paragraph:
            "A doctor may conduct a pelvic exam to feel for any abnormalities or masses in the uterus or surrounding areas.",
        },
        {
          index: "2",
          h3: "Transvaginal Ultrasound",
          paragraph:
            "An ultrasound is used to examine the uterus and detect abnormal growths or changes in the lining.",
        },
        {
          index: "3",
          h3: "Endometrial Biopsy",
          paragraph:
            "A sample of the endometrial tissue is taken to check for cancer cells.",
        },
        {
          index: "4",
          h3: "Hysteroscopy",
          paragraph:
            "A small, lighted camera is inserted through the cervix to examine the inside of the uterus and take a biopsy if needed.",
        },
        {
          index: "5",
          h3: "CT Scan or MRI",
          paragraph:
            "Imaging tests help determine the size and spread of the tumor, if present.",
        },
      ],
      Image: "/cancer-types/uterine-cancer-diagnosis.jpg",
    },
    treatementOptionsSection: {
      h2: "Treatment Options",
      options: [
        {
          h3: { span: "1", copy: "Surgery" },
          p: "The main treatment for uterine cancer is surgery, typically a hysterectomy to remove the uterus, and sometimes the ovaries and fallopian tubes.",
        },
        {
          h3: { span: "2", copy: "Radiation Therapy" },
          p: "Radiation therapy may be used to treat localized tumors or to reduce the risk of recurrence after surgery.",
        },
        {
          h3: { span: "3", copy: "Chemotherapy" },
          p: "Chemotherapy may be used in more advanced stages to destroy cancer cells that have spread beyond the uterus.",
        },
        {
          h3: { span: "4", copy: "Hormone Therapy" },
          p: "Hormone therapy, such as progestins, can be used to treat cancers that are estrogen receptor-positive.",
        },
      ],
    },
    prognosisSection: {
      h2: "Prognosis and Survival Rates",
      paragraph:
        "The prognosis for uterine cancer depends on the stage at diagnosis and the success of treatment. Early detection leads to higher survival rates.",
      table: {
        headers: ["Stage", "Description", "5-Year Survival"],
        rows: [
          {
            stage: "I",
            description: "Cancer confined to the uterus",
            survival: "85-90%",
          },
          {
            stage: "II",
            description: "Spread to the cervix",
            survival: "70-80%",
          },
          {
            stage: "III",
            description: "Spread to nearby tissues or lymph nodes",
            survival: "40-60%",
          },
          {
            stage: "IV",
            description: "Distant metastasis",
            survival: "15-25%",
          },
        ],
      },
    },
  },
];

return CANCER_TYPES_DATA;
}