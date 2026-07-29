import { JSX } from "react";
// MAPS FOR DYNAMIC PAGES
import { AwarenessCampaigns } from "@/components/Modules/cancer-survivors/get-involved/AwarenessCampaigns"
import { Volunteer } from "@/components/Modules/cancer-survivors/get-involved/Volunteer"
import { VictoryStories } from "@/components/Modules/cancer-survivors/stories-of-hope/VictoryStories"
import { CounselingAndMentalHealth } from "@/components/Modules/cancer-survivors/support-programs/CounselingAndMentalHealth"
import { RehabilationPrograms } from "@/components/Modules/cancer-survivors/support-programs/RehabilationPrograms"
import { DoctorsPage } from "@/components/Modules/discover-synergy/doctors/DoctorsPage"
import { Faqs } from "@/components/Modules/health-library/faqs/Faqs"
import { CancerPrevention } from "@/components/Modules/health-library/patient-education/CancerPrevention"
import { DiagnosisAndStaging } from "@/components/Modules/health-library/patient-education/DiagnosisAndStaging"
import { NutritionAndWellness } from "@/components/Modules/health-library/patient-education/NutritionAndWellness"
import { TreatmentOptions } from "@/components/Modules/health-library/patient-education/TreatmentOptions"
import { DynamicCancerTypesPage } from "@/components/Modules/health-library/types-of-cancer/DynamicCancerTypesPage"
import { EmergencyCare } from "@/components/Modules/patient-care/EmergencyCare"
import HealthChecks from "@/components/Modules/patient-care/HealthChecks"
import { InPatientFacilities } from "@/components/Modules/patient-care/InPatientFacilities"
import Insurance from "@/components/Modules/patient-care/Insurance"
import { OutPatientClinic } from "@/components/Modules/patient-care/OutPatientClinic"
import { SecondOpinion } from "@/components/Modules/patient-care/SecondOpinion"
import AdmissionDischarge from "@/components/Modules/services/administrative-services/AdmissionDischarge"
import MedicalRecords from "@/components/Modules/services/administrative-services/MedicalRecords"
import DiagnosticServices from "@/components/Modules/services/DiagnosticServices"
import ServicesPage from "@/components/Modules/services/ServicesPage"
import DepartmentPage from "@/components/Modules/services/SingleServicePage"
import SpecializedServices from "@/components/Modules/services/SpecializedServices"
import Ambulance from "@/components/Modules/services/support-services/Ambulance"
import BloodBank from "@/components/Modules/services/support-services/BloodBank"
import { Dietary } from "@/components/Modules/services/support-services/Dietary"
import { HouseKeeping } from "@/components/Modules/services/support-services/HouseKeeping"
import { Laundry } from "@/components/Modules/services/support-services/Laundry"
import { Pharmacy } from "@/components/Modules/services/support-services/Pharmacy"
import { Security } from "@/components/Modules/services/support-services/Security"
import SupportServicesPage from "@/components/Modules/services/support-services/SupportServicesPage"

// ---- NAYE PAGES KE IMPORTS ----
import CancerCarePage from "@/components/Modules/cancer-care/CancerCarePage"
import SurvivorPage from "@/components/Modules/survivors/SurvivorPage"
import InstitutePage from "@/components/Modules/institute/InstitutePage"
import CentersPage from "@/components/Modules/centers/CentersPage"


export const ServicesMap: Record<string, JSX.Element> = {
    all: <ServicesPage />,
    "specialized-services": <SpecializedServices />,
    "support-services": <SupportServicesPage />,
    "diagnostic-services": <DiagnosticServices />,
    "medical-oncology": <DepartmentPage />,
    "surgical-oncology": <DepartmentPage />,
    "gynecology": <DepartmentPage />,
    "neurology": <DepartmentPage />,
    "neurosurgery": <DepartmentPage />,
    "gastroenterology": <DepartmentPage />,
    "nephrology": <DepartmentPage />,
    "urology": <DepartmentPage />,
    "orthopedics": <DepartmentPage />,
    "anesthesia": <DepartmentPage />,
    "general-surgery": <DepartmentPage />,
    "pediatrics": <DepartmentPage />,
    "head-and-neck": <DepartmentPage />,
    "emergency-and-critical-care": <DepartmentPage />,
    "pain-and-palliative-care": <DepartmentPage />,
    "pharmacy": <Pharmacy />,
    "blood-bank": <BloodBank />,
    "dietary": <Dietary />,
    "laundry": <Laundry />,
    "house-keeping": <HouseKeeping />,
    "security": <Security />,
    "ambulance": <Ambulance />,
    "diagnostic-imaging": <DepartmentPage />,
    "dialysis": <DepartmentPage />,
    "radiology": <DepartmentPage />,
    "pathology": <DepartmentPage />,
    "microbiology": <DepartmentPage />,
    "biochemistry": <DepartmentPage />,
    "admission-and-discharge": <AdmissionDischarge />,
    "medical-records": <MedicalRecords />,
}

export const HealthLibraryMap: Record<string, JSX.Element> = {
    faqs: <Faqs />,
    "adrenal-cancer": <DynamicCancerTypesPage />,
    "anal-cancer": <DynamicCancerTypesPage />,
    "bile-duct-cancer": <DynamicCancerTypesPage />,
    "bladder-cancer": <DynamicCancerTypesPage />,
    "blood-cancer": <DynamicCancerTypesPage />,
    "bone-cancer": <DynamicCancerTypesPage />,
    "brain-cancer": <DynamicCancerTypesPage />,
    "breast-cancer": <DynamicCancerTypesPage />,
    "breast-cancer-in-men": <DynamicCancerTypesPage />,
    "cervical-cancer": <DynamicCancerTypesPage />,
    "colon-rectal-cancer": <DynamicCancerTypesPage />,
    "endometrial-cancer": <DynamicCancerTypesPage />,
    "esophageal-cancer": <DynamicCancerTypesPage />,
    "eye-cancer": <DynamicCancerTypesPage />,
    "gallbladder-cancer": <DynamicCancerTypesPage />,
    "gastric-cancer": <DynamicCancerTypesPage />,
    "head-and-neck-cancer": <DynamicCancerTypesPage />,
    "kidney-cancer": <DynamicCancerTypesPage />,
    "laryngeal-cancer": <DynamicCancerTypesPage />,
    "liver-cancer": <DynamicCancerTypesPage />,
    "lung-cancer": <DynamicCancerTypesPage />,
    "multiple-myeloma": <DynamicCancerTypesPage />,
    "neuroendocrine-tumors": <DynamicCancerTypesPage />,
    "non-hodgkin-lymphoma": <DynamicCancerTypesPage />,
    "oral-cancer": <DynamicCancerTypesPage />,
    "ovarian-cancer": <DynamicCancerTypesPage />,
    "pancreatic-cancer": <DynamicCancerTypesPage />,
    "penile-cancer": <DynamicCancerTypesPage />,
    "pituitary-tumors": <DynamicCancerTypesPage />,
    "prostate-cancer": <DynamicCancerTypesPage />,
    "salivary-gland-cancer": <DynamicCancerTypesPage />,
    "skin-cancer": <DynamicCancerTypesPage />,
    "stomach-cancer": <DynamicCancerTypesPage />,
    "uterine-cancer": <DynamicCancerTypesPage />,
    "prevention": <CancerPrevention />,
    "diagnosis": <DiagnosisAndStaging />,
    "treatments": <TreatmentOptions />,
    "nutrition": <NutritionAndWellness />,
}

export const PatientCareMap: Record<string, JSX.Element> = {
    "second-opinion": <SecondOpinion />,
    "emergency": <EmergencyCare />,
    "in-patient": <InPatientFacilities />,
    "out-patient": <OutPatientClinic />,
    "health-checks": <HealthChecks />,
    "insurance": <Insurance />,
}

export const DoctorsMap: Record<string, JSX.Element> = {
    all: <DoctorsPage />,
}

// ---- NAYE MAPS ----

export const CancerSurvivorsMap: Record<string, JSX.Element> = {
    "cancer-survivor-mean": <SurvivorPage />, 
    "support-for-families": <SurvivorPage />,
    "testimonials": <SurvivorPage />, 
    "victory-stories": <VictoryStories />,
    "counseling": <CounselingAndMentalHealth />,
    "rehab": <RehabilationPrograms />,
    "awareness-campaigns": <AwarenessCampaigns />,
    "volunteer": <Volunteer />
}

export const CancerCareMap: Record<string, JSX.Element> = {
    "preventive-oncology": <CancerCarePage />,
    "surgical-oncology": <CancerCarePage />,
    "medical-oncology": <CancerCarePage />,
    "radiation-oncology": <CancerCarePage />,
    "multidisciplinary-tumour-board": <CancerCarePage />,
    "advanced-technology": <CancerCarePage />,
    "patient-centric-care": <CancerCarePage />
}

export const InstituteMap: Record<string, JSX.Element> = {
    "overview": <InstitutePage />,
    "vision": <InstitutePage />
}

export const CentersMap: Record<string, JSX.Element> = {
    "network": <CentersPage />,
    "outstation-support": <CentersPage />,
    "find-center": <CentersPage />
}
