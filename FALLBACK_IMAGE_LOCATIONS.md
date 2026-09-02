# Fallback Image (`/fallback-image.webp`) Audit & Inventory Report

> **Target Asset:** `/fallback-image.webp` (`public/fallback-image.webp`)  
> **Server Inspected:** `http://localhost:3001` (Dev Server)  
> **Total Routes Checked:** 114 routes  

---

## 1. Executive Summary

In this codebase, `/fallback-image.webp` was used in two ways:
1. **Directly Configured**: Hardcoded in component templates or entered directly as the image path in data dictionaries (`data/messages/en.json`, `data/messages/hi.json`, `data/departmentData.ts`, `data/cancerCareData.ts`).
2. **Runtime Fallbacks via `ImageWithFallback`**: Triggered dynamically when the configured image URL is missing, `undefined`, or points to a non-existent file in `public/` that returns HTTP 404.

### Progress & Status Tracker
* **Cancer Care Section Banners:** **COMPLETED (7/7 REPLACED)**
  * All 7 cancer-care sections now have dedicated high-resolution banners in `/public/cancer-care/`.
* **Remaining Major Banner Fallbacks:** **8 pages** (`centers` [3], `survivors` [3], `institute` [2]).
* **Remaining Facility Showcases:** **9 departments** in `departmentData.ts` and **5** in `en.json`/`hi.json`.
* **Remaining Patient Testimonials:** **44+ testimonial cards** across all 22 clinical departments in `departmentData.ts`.
* **Hero Banner on Main Services Page:** `components/Modules/services/ServicesPage.tsx` (`/services/all`).
* **Missing Asset Directories (Runtime 404 Fallbacks):**
  * All 32 Cancer Type pages (`/health-library/[cancer-slug]`) due to missing `/cancer-types/` directory.
  * 4 Patient Education pages (`/health-library/prevention`, `diagnosis`, `treatments`, `nutrition`).
  * 8 Department Hero Banners and 6 Department Facility images in `data/departmentData.ts`.

---

## 2. Direct Static References (Hardcoded in Code & Data)

### A. Completed Section Banners: Cancer Care (7/7 Done)
All 7 cancer care sections have been migrated out of locale files and configured with dedicated images in `data/cancerCareData.ts`:

| Route | Page Name | New Asset Path | Status |
| :--- | :--- | :--- | :---: |
| `/cancer-care/preventive-oncology` | Preventive Oncology | `/cancer-care/preventive-oncology.png` | `[x] REPLACED` |
| `/cancer-care/surgical-oncology` | Surgical Oncology | `/cancer-care/surgical-oncology.png` | `[x] REPLACED` |
| `/cancer-care/medical-oncology` | Medical Oncology | `/cancer-care/medical-oncology.png` | `[x] REPLACED` |
| `/cancer-care/radiation-oncology` | Radiation Oncology | `/cancer-care/radiation-oncology.png` | `[x] REPLACED` |
| `/cancer-care/multidisciplinary-tumour-board` | Tumour Board | `/cancer-care/multidisciplinary-tumour-board.png` | `[x] REPLACED` |
| `/cancer-care/advanced-technology` | Advanced Technology | `/cancer-care/advanced-technology.png` | `[x] REPLACED` |
| `/cancer-care/patient-centric-care` | Patient-Centric Care | `/cancer-care/patient-centric-care.png` | `[x] REPLACED` |

---

### B. Section Banners Awaiting Real Hospital Photography (3 Pages - Blocked on Client)
> **Note:** `/centers/*` pages represent the physical hospital campus and radiation center in Gorakhpur. These should use authentic, real-world architectural and interior photos provided by the client/hospital administration rather than synthetic images.

| Category | Route | Page Title / Name | Requirement | Status |
| :--- | :--- | :--- | :--- | :---: |
| **Centers** | `/centers/network` | Synergy Centers Network | Real photo of Main Hospital & Radiation Center | `[BLOCKED: Client Photos Needed]` |
| **Centers** | `/centers/outstation-support` | Outstation Patient Support | Real photo of Patient Helpdesk / Reception | `[BLOCKED: Client Photos Needed]` |
| **Centers** | `/centers/find-center` | Find a Synergy Center | Real photo of Campus entrance / Concourse | `[BLOCKED: Client Photos Needed]` |

---

### C. NEXT Actionable Section Banners to Replace (5 Pages Available)
These pages focus on human stories, caregiver support, cancer survivorship, and institutional vision, making them ideal for high-impact commercial healthcare photography:

| Category | Route | Page Title / Name | Theme / Content | Status |
| :--- | :--- | :--- | :--- | :---: |
| **Survivors** | `/survivors/cancer-survivor-mean` | What Does It Mean to Be a Cancer Survivor? | Hope, survivorship resilience, ringing the bell | `[NEXT PRIORITY 1]` |
| **Survivors** | `/survivors/support-for-families` | Support for Families & Caregivers | Emotional bonding, family solidarity, caregiver care | `[NEXT PRIORITY 1]` |
| **Survivors** | `/survivors/testimonials` | Patient Stories & Testimonials | Inspiring patient victory, gratitude, thriving life | `[NEXT PRIORITY 1]` |
| **Institute** | `/institute/overview` | Synergy Institute Overview | Comprehensive oncology center, leadership, research | `[NEXT PRIORITY 2]` |
| **Institute** | `/institute/vision` | Our Vision & Future Plans | Regional cancer mission for Purvanchal, future cure | `[NEXT PRIORITY 2]` |

---

### D. Component Hero Banners (1 Item)
| File Path | Line | Element | Description | Status |
| :--- | :---: | :--- | :--- | :---: |
| `components/Modules/services/ServicesPage.tsx` | 107 | `<ImageWithFallback src="/fallback-image.webp" ...>` | Main Hero Facility banner on `/services/all` | `[NEXT PRIORITY 3]` |

---

### E. Department Facility Images in `en.json` / `hi.json` (5 Items Pending)
* [ ] `DepartmentDataMegaArray.Orthopedics.facilities.image` -> `/fallback-image.webp`
* [ ] `DepartmentDataMegaArray.GeneralSurgery.facilities.image` -> `/fallback-image.webp`
* [ ] `DepartmentDataMegaArray.Pediatrics.facilities.image` -> `/fallback-image.webp`
* [ ] `DepartmentDataMegaArray.HeadNeck.facilities.image` -> `/fallback-image.webp`
* [ ] `DepartmentDataMegaArray.EmergencyCriticalCare.facilities.image` -> `/fallback-image.webp`

---

### F. Department Master Data (`data/departmentData.ts`)

#### 1. Facility Showcase Images (`facilities.image: "/fallback-image.webp"`)
Rendered on department pages (`/services/[slug]`):
* Line 726: **Neurology** (`/services/neurology`)
* Line 863: **Neurosurgery** (`/services/neurosurgery`)
* Line 995: **Gastroenterology** (`/services/gastroenterology`)
* Line 1121: **Nephrology** (`/services/nephrology`)
* Line 1252: **Urology** (`/services/urology`)
* Line 1786: **Pediatrics** (`/services/pediatrics`)
* Line 1926: **Head and Neck** (`/services/head-and-neck`)
* Line 2063: **Emergency & Critical Care** (`/services/emergency-and-critical-care`)
* Line 2988: **Pain and Palliative Care** (`/services/pain-and-palliative-care`)

#### 2. Patient Testimonial Avatars (`testimonials.items[].image: "/fallback-image.webp"`)
Two patient testimonial cards on every service department page currently use `/fallback-image.webp`:
* Lines 127, 132: **Medical Oncology** (`/services/medical-oncology`)
* Lines 288, 293: **Surgical Oncology** (`/services/surgical-oncology`)
* Lines 481, 486: **Radiation Oncology** (`/services/radiation-oncology`)
* Lines 621, 626: **Gynecology** (`/services/gynecology`)
* Lines 754, 759: **Neurology** (`/services/neurology`)
* Lines 893, 898: **Neurosurgery** (`/services/neurosurgery`)
* Lines 1023, 1028: **Gastroenterology** (`/services/gastroenterology`)
* Lines 1149, 1154: **Nephrology** (`/services/nephrology`)
* Lines 1280, 1285: **Urology** (`/services/urology`)
* Lines 1417, 1422: **Orthopedics** (`/services/orthopedics`)
* Lines 1548, 1553: **Anesthesia** (`/services/anesthesia`)
* Lines 1679, 1684: **General Surgery** (`/services/general-surgery`)
* Lines 1814, 1819: **Pediatrics** (`/services/pediatrics`)
* Lines 1955, 1961: **Head and Neck** (`/services/head-and-neck`)
* Lines 2092, 2098: **Emergency & Critical Care** (`/services/emergency-and-critical-care`)
* Lines 2224, 2229: **Diagnostic Imaging** (`/services/diagnostic-imaging`)
* Lines 2350, 2355: **Dialysis** (`/services/dialysis`)
* Lines 2476, 2481: **Radiology** (`/services/radiology`)
* Lines 2604, 2609: **Pathology** (`/services/pathology`)
* Lines 2724, 2729: **Microbiology** (`/services/microbiology`)
* Lines 2858, 2863: **Biochemistry** (`/services/biochemistry`)
* Lines 3028, 3033: **Pain and Palliative Care** (`/services/pain-and-palliative-care`)

---

## 3. Runtime Fallbacks (Missing Files Resulting in 404 -> Fallback Rendered)

Because `components/global/ImageWithFallback.tsx` automatically switches to `fallbackSrc` on error, all missing image files in `public/` trigger fallback rendering on `localhost:3001`:

### A. All 32 Cancer Types (`/health-library/[slug]`)
In `components/Modules/health-library/types-of-cancer/DynamicCancerTypesPage.tsx`:
* **Hero Image** (Line 33): `cancerTypeData?.heroSection.Image` is `undefined` in `en.json`/`hi.json` -> Renders fallback immediately.
* **Overview Image** (Line 56): `cancerTypeData.overviewSection.Image` is `undefined` in `en.json`/`hi.json` -> Renders fallback immediately.
* **Diagnosis & Treatment Images** (Lines 113, 142): Configured paths like `/cancer-types/adrenal-cancer-scan.jpg`, `/cancer-types/chemoradiation.jpg`, etc. fail to load because the entire `public/cancer-types/` folder does not exist -> Browser triggers `onError` -> Renders fallback.

**Affected Routes (32 Pages):**
1. `/health-library/adrenal-cancer`
2. `/health-library/anal-cancer`
3. `/health-library/bile-duct-cancer`
4. `/health-library/bladder-cancer`
5. `/health-library/blood-cancer`
6. `/health-library/bone-cancer`
7. `/health-library/brain-cancer`
8. `/health-library/breast-cancer`
9. `/health-library/breast-cancer-in-men`
10. `/health-library/cervical-cancer`
11. `/health-library/colon-rectal-cancer`
12. `/health-library/endometrial-cancer`
13. `/health-library/esophageal-cancer`
14. `/health-library/eye-cancer`
15. `/health-library/gallbladder-cancer`
16. `/health-library/gastric-cancer`
17. `/health-library/head-and-neck-cancer`
18. `/health-library/kidney-cancer`
19. `/health-library/laryngeal-cancer`
20. `/health-library/liver-cancer`
21. `/health-library/lung-cancer`
22. `/health-library/multiple-myeloma`
23. `/health-library/neuroendocrine-tumors`
24. `/health-library/non-hodgkin-lymphoma`
25. `/health-library/oral-cancer`
26. `/health-library/ovarian-cancer`
27. `/health-library/pancreatic-cancer`
28. `/health-library/penile-cancer`
29. `/health-library/pituitary-tumors`
30. `/health-library/prostate-cancer`
31. `/health-library/salivary-gland-cancer`
32. `/health-library/skin-cancer`
33. `/health-library/stomach-cancer`
34. `/health-library/uterine-cancer`

---

### B. Patient Education Pages
| Route | Component | Missing Image Path | Reason |
| :--- | :--- | :--- | :--- |
| `/health-library/prevention` | `CancerPrevention.tsx:30` | `/images/cancer-prevention.webp` | File missing from `public/images/` |
| `/health-library/diagnosis` | `DiagnosisAndStaging.tsx:36` | `/images/diagnosis-staging.webp` | File missing from `public/images/` |
| `/health-library/treatments` | `TreatmentOptions.tsx:36` | `/images/treatment-options.webp` | File missing from `public/images/` |
| `/health-library/nutrition` | `NutritionAndWellness.tsx:28` | `/images/cancer-prevention.webp` | File missing from `public/images/` |

---

### C. Patient Care & Support Pages
| Route | Component | Missing Image Path | Reason |
| :--- | :--- | :--- | :--- |
| `/patient-care/emergency` | `EmergencyCare.tsx:110` | `/department/emergency-and-critical-career-banner.png` | Typo ("career" vs "care") / missing file |
| `/patient-care/second-opinion` | `SecondOpinion.tsx:36` | `/doctor-consultation.jpg` | Missing file in `public/` |
| `/survivors/rehab` | `RehabilationPrograms.tsx:96` | `/rehab/rehab-hero.webp` | Missing `public/rehab/` directory |

---

### D. Department Hero Banners & Facilities in `data/departmentData.ts`
Rendered on `/services/[slug]`:
* **Radiation Oncology** (`/services/radiation-oncology`): missing `/department/radiation-oncology.webp`
* **Gastroenterology** (`/services/gastroenterology`): missing `/department/gastroenterology.webp`
* **Pediatrics** (`/services/pediatrics`): missing `/department/pediatrics.jpeg`
* **Urology** (`/services/urology`): missing `/department/urology.jpeg`
* **Radiology** (`/services/radiology`): missing `/radiology-hero.webp` and `/radiology-lab.webp`
* **Pathology** (`/services/pathology`): missing `/pathology-hero.webp` and `/pathology-lab.webp`
* **Microbiology** (`/services/microbiology`): missing `/microbiology-hero.webp` and `/microbiology-lab.webp`
* **Biochemistry** (`/services/biochemistry`): missing `/biochemistry-hero.webp` and `/biochemistry-lab.webp`
* **Diagnostic Imaging** (`/services/diagnostic-imaging`): missing `/imaging-facility.webp`
* **Dialysis** (`/services/dialysis`): missing `/dialysis-unit.webp`

---

## 4. Components with `fallbackSrc="/fallback-image.webp"` Configured

These components pass `fallbackSrc="/fallback-image.webp"` to `<ImageWithFallback />`. If their data is missing or fails, they immediately render the fallback image:

1. `components/Modules/cancer-care/CancerCarePage.tsx` (Line 56)
2. `components/Modules/cancer-survivors/stories-of-hope/PatientTestimonials.tsx` (Lines 351, 386)
3. `components/Modules/cancer-survivors/stories-of-hope/VictoryStories.tsx` (Lines 395, 437)
4. `components/Modules/cancer-survivors/support-programs/CounselingAndMentalHealth.tsx` (Lines 96, 173)
5. `components/Modules/cancer-survivors/support-programs/RehabilationPrograms.tsx` (Lines 96, 173)
6. `components/Modules/centers/CentersPage.tsx` (Line 158)
7. `components/Modules/discover-synergy/doctors/DoctorsPage.tsx` (Line 267)
8. `components/Modules/discover-synergy/leadership/LeadershipMessagePage.tsx` (Line 164)
9. `components/Modules/health-library/patient-education/CancerPrevention.tsx` (Line 30)
10. `components/Modules/health-library/patient-education/DiagnosisAndStaging.tsx` (Line 36)
11. `components/Modules/health-library/patient-education/NutritionAndWellness.tsx` (Line 28)
12. `components/Modules/health-library/patient-education/TreatmentOptions.tsx` (Line 36)
13. `components/Modules/health-library/types-of-cancer/DynamicCancerTypesPage.tsx` (Lines 34, 57, 113, 142)
14. `components/Modules/institute/InstitutePage.tsx` (Line 60)
15. `components/Modules/patient-care/EmergencyCare.tsx` (Lines 110, 210)
16. `components/Modules/patient-care/HealthChecks.tsx` (Line 116)
17. `components/Modules/patient-care/InPatientFacilities.tsx` (Line 106)
18. `components/Modules/patient-care/SecondOpinion.tsx` (Line 36)
19. `components/Modules/services/DiagnosticServices.tsx` (Line 68)
20. `components/Modules/services/ServicesPage.tsx` (Lines 105, 165)
21. `components/Modules/services/SingleServicePage.tsx` (Lines 108, 289, 337, 397)
22. `components/Modules/services/support-services/SupportServicesPage.tsx` (Line 117)
23. `components/Modules/survivors/SurvivorPage.tsx` (Line 63)
24. `components/global/AyushmaanBharatCard.tsx` (Lines 20, 29, 47, 65)
25. `components/global/InsurancePartners.tsx` (Line 36)
26. `components/global/LeaderCard.tsx` (Lines 47, 56)
27. `components/global/SupportServicePage.tsx` (Line 37)
28. `components/global/VideoModal.tsx` (Lines 60, 69)
29. `components/global/VideoModalForJourney.tsx` (Lines 58, 66)
30. `components/global/WhatsappReachOutButton.tsx` (Line 18)
31. `components/homepage/GalleryMarquee.tsx` (Line 43)
32. `components/homepage/LeaderCards.tsx` (Line 36)
33. `components/homepage/SliderWithTriggers.tsx` (Line 177)
34. `components/media-center/EventsAndConferences.tsx` (Lines 86, 163)
35. `components/media-center/MediaGallery.tsx` (Line 126)
36. `components/the-synergy-story/OurLeaders.tsx` (Line 70)
37. `components/the-synergy-story/OurMission.tsx` (Line 30)
38. `components/the-synergy-story/OurVision.tsx` (Line 23)
