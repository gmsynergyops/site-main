// data/seoData.ts

export const seoData: Record<
  string,
  Record<
    string,
    {
      title: string;
      description: string;
      keywords?: string[];
      ogImage: string;
    }
  >
> = {
  leadership: {
    "Dr-Alok-Tiwari": {
      title: "Dr. Alok Tiwari - Managing Director & Chief Surgical Oncologist | Synergy Hospital",
      description: "Dr. Alok Tiwari is Managing Director & Chief Surgical Oncologist at Synergy Super Speciality Hospital Gorakhpur. Gold Medalist & Certified Robotic Onco Surgeon.",
      keywords: ["Dr Alok Tiwari", "Surgical Oncologist Gorakhpur", "Robotic Onco Surgeon", "Cancer Surgeon Purvanchal", "Synergy Hospital Director"],
      ogImage: "/doctors/dr-alok-tiwari.webp",
    },
    "Dr-Saurabh-Mishra": {
      title: "Dr. Saurabh Mishra - Medical Director & CEO | Senior Medical Oncologist",
      description: "Dr. Saurabh Mishra is Medical Director & CEO at Synergy Hospital & Cancer Institute Gorakhpur. Senior Medical & Haemat Oncologist (KGMU, ECMO, DNB).",
      keywords: ["Dr Saurabh Mishra", "Medical Oncologist Gorakhpur", "Haemat Oncologist", "Synergy Hospital CEO", "Chemotherapy Specialist Gorakhpur"],
      ogImage: "/doctors/dr-saurabh-mishra.webp",
    },
    "Dr-Anjali-Jain": {
      title: "Dr. Anjali Jain - Administrative Director & Senior Gynaecologic Oncologist",
      description: "Dr. Anjali Jain is Administrative Director & ESGO Certified Gynaecologic Oncologist at Synergy Hospital Gorakhpur. Robotic Surgery Fellow (RCS Edinburgh, MGH Boston).",
      keywords: ["Dr Anjali Jain", "Gynaecologic Oncologist Gorakhpur", "Women Cancer Specialist", "Robotic Surgery Specialist", "Synergy Hospital Director"],
      ogImage: "/doctors/dr-anjali-jain-1.webp",
    },
  },
  doctors: {
    "Dr-Alok-Tiwari": {
      title: "Dr. Alok Tiwari - Oncology Specialist",
      description: "Meet Dr. Alok Tiwari, a leading specialist in oncology with years of experience.",
      keywords: ["Dr. Alok Tiwari", "Oncologist", "Cancer Specialist"],
      ogImage: "/images/doctors/dr-alok-tiwari.jpg",
    },
    "Dr-Anjali-Jain": {
      title: "Dr. Anjali Jain - Senior Oncologist",
      description: "Know more about Dr. Anjali Jain’s contribution to cancer treatment and research.",
      keywords: ["Dr. Anjali Jain", "Cancer Expert", "Senior Doctor"],
      ogImage: "/images/doctors/dr-anjali-jain.jpg",
    },
    "Dr-Saurabh-Mishra": {
      title: "Dr. Saurabh Mishra - Radiation Oncology Expert",
      description: "Expert in radiation oncology, Dr. Saurabh Mishra brings hope to countless patients.",
      keywords: ["Dr. Saurabh Mishra", "Radiation Oncologist"],
      ogImage: "/images/doctors/dr-saurabh-mishra.jpg",
    },
    "all": {
      title: "Doctors Page",
      description: "Explore our team of expert doctors dedicated to providing top-notch medical care.",
      keywords: ["Doctors", "Medical Experts", "Healthcare Professionals"],
      ogImage: "/images/doctors/doctors-page.jpg",
    },
  },

  services: {
    "medical-oncology": {
      title: "Medical Oncology Services",
      description: "Personalized cancer treatment using advanced chemotherapy and immunotherapy approaches.",
      keywords: ["Medical Oncology", "Chemotherapy", "Immunotherapy", "Cancer Treatment"],
      ogImage: "/images/services/medical-oncology.jpg",
    },
    "radiation-oncology": {
      title: "Radiation Oncology Services",
      description: "Cutting-edge radiation therapies for precise targeting of cancer cells.",
      keywords: ["Radiation Oncology", "Radiation Therapy", "Cancer Radiation Treatment"],
      ogImage: "/images/services/radiation-oncology.jpg",
    },
    "surgical-oncology": {
      title: "Surgical Oncology",
      description: "Expert surgical procedures for diagnosing and removing tumors safely.",
      keywords: ["Surgical Oncology", "Cancer Surgery", "Tumor Removal"],
      ogImage: "/images/services/surgical-oncology.jpg",
    },
    "hemato-oncology": {
      title: "Hemato Oncology",
      description: "Specialized care for blood-related cancers like leukemia and lymphoma.",
      keywords: ["Hemato Oncology", "Blood Cancer", "Leukemia", "Lymphoma"],
      ogImage: "/images/services/hemato-oncology.jpg",
    },
    "palliative-care": {
      title: "Pain & Palliative Care",
      description: "Supportive care focused on relieving pain and improving quality of life for cancer patients.",
      keywords: ["Palliative Care", "Cancer Pain Relief", "Supportive Oncology"],
      ogImage: "/images/services/palliative-care.jpg",
    },
    cardiology: {
      title: "Cardiology Services",
      description: "Advanced cardiac care for diagnosis, treatment, and prevention of heart-related diseases.",
      keywords: ["Cardiology", "Heart Specialist", "Cardiac Care", "ECG", "Angioplasty"],
      ogImage: "/images/services/cardiology.jpg",
    },
    neurology: {
      title: "Neurology Services",
      description: "Comprehensive care for neurological conditions including stroke, epilepsy, and migraines.",
      keywords: ["Neurology", "Brain Health", "Stroke Treatment", "Neurological Disorders"],
      ogImage: "/images/services/neurology.jpg",
    },
    neurosurgery: {
      title: "Neurosurgery",
      description: "Expert surgical interventions for brain and spinal cord disorders.",
      keywords: ["Neurosurgery", "Brain Surgery", "Spine Surgery", "Neuro Intervention"],
      ogImage: "/images/services/neurosurgery.jpg",
    },
    nephrology: {
      title: "Nephrology Services",
      description: "Specialized care for kidney diseases, dialysis, and chronic renal conditions.",
      keywords: ["Nephrology", "Kidney Specialist", "Dialysis", "CKD Treatment"],
      ogImage: "/images/services/nephrology.jpg",
    },
    urology: {
      title: "Urology Services",
      description: "Comprehensive treatment for urinary tract and male reproductive health issues.",
      keywords: ["Urology", "Urinary Problems", "Kidney Stones", "Prostate Health"],
      ogImage: "/images/services/urology.jpg",
    },
    gastroenterology: {
      title: "Gastroenterology",
      description: "Diagnosis and treatment for digestive system disorders and gastrointestinal issues.",
      keywords: ["Gastroenterology", "Digestive Health", "Endoscopy", "Liver & Stomach Issues"],
      ogImage: "/images/services/gastroenterology.jpg",
    },
    hepatology: {
      title: "Hepatology Services",
      description: "Liver disease management including hepatitis, cirrhosis, and fatty liver.",
      keywords: ["Hepatology", "Liver Specialist", "Hepatitis Treatment", "Liver Health"],
      ogImage: "/images/services/hepatology.jpg",
    },
    orthopedics: {
      title: "Orthopedic Services",
      description: "Treatment for bone, joint, and musculoskeletal conditions and injuries.",
      keywords: ["Orthopedics", "Joint Pain", "Fracture Treatment", "Arthroscopy", "Bone Surgery"],
      ogImage: "/images/services/orthopedics.jpg",
    },
    rheumatology: {
      title: "Rheumatology",
      description: "Care for autoimmune and inflammatory diseases like arthritis and lupus.",
      keywords: ["Rheumatology", "Arthritis", "Joint Pain", "Autoimmune Treatment"],
      ogImage: "/images/services/rheumatology.jpg",
    },
    endocrinology: {
      title: "Endocrinology",
      description: "Diagnosis and management of hormone-related conditions including diabetes and thyroid.",
      keywords: ["Endocrinology", "Diabetes", "Thyroid", "Hormone Disorders"],
      ogImage: "/images/services/endocrinology.jpg",
    },
    pulmonology: {
      title: "Pulmonology",
      description: "Respiratory care for asthma, COPD, lung infections, and sleep disorders.",
      keywords: ["Pulmonology", "Lung Specialist", "Asthma", "Breathing Problems"],
      ogImage: "/images/services/pulmonology.jpg",
    },
    dermatology: {
      title: "Dermatology Services",
      description: "Expert care for skin, hair, and nail conditions including acne, eczema, and infections.",
      keywords: ["Dermatology", "Skin Specialist", "Acne Treatment", "Hair Loss", "Eczema"],
      ogImage: "/images/services/dermatology.jpg",
    },
    ent: {
      title: "ENT (Ear, Nose, Throat) Services",
      description: "Comprehensive ENT care including sinus issues, hearing problems, and throat disorders.",
      keywords: ["ENT", "Ear Specialist", "Sinus Treatment", "Tonsillitis", "Hearing Loss"],
      ogImage: "/images/services/ent.jpg",
    },
    ophthalmology: {
      title: "Ophthalmology Services",
      description: "Advanced eye care including cataract surgery, vision correction, and eye exams.",
      keywords: ["Ophthalmology", "Eye Specialist", "Cataract", "LASIK", "Vision Care"],
      ogImage: "/images/services/ophthalmology.jpg",
    },
    "general-surgery": {
      title: "General Surgery",
      description: "Expert surgical procedures for a wide range of general and abdominal conditions.",
      keywords: ["General Surgery", "Appendix Surgery", "Gallbladder Removal", "Hernia Repair"],
      ogImage: "/images/services/general-surgery.jpg",
    },
    "internal-medicine": {
      title: "Internal Medicine",
      description: "Comprehensive care for adult diseases with a focus on diagnosis and prevention.",
      keywords: ["Internal Medicine", "General Physician", "Chronic Disease Management"],
      ogImage: "/images/services/internal-medicine.jpg",
    },
    pediatrics: {
      title: "Pediatrics",
      description: "Dedicated care for infants, children, and adolescents by experienced pediatricians.",
      keywords: ["Pediatrics", "Child Specialist", "Newborn Care", "Vaccination"],
      ogImage: "/images/services/pediatrics.jpg",
    },
    gynecology: {
      title: "Gynecology Services",
      description: "Women's health services including pregnancy care, menstrual issues, and gynecologic surgery.",
      keywords: ["Gynecology", "Women's Health", "Pregnancy Care", "Menstrual Issues"],
      ogImage: "/images/services/gynecology.jpg",
    },
    psychiatry: {
      title: "Psychiatry Services",
      description: "Mental health support and treatment for conditions like anxiety, depression, and more.",
      keywords: ["Psychiatry", "Mental Health", "Depression", "Anxiety", "Therapy"],
      ogImage: "/images/services/psychiatry.jpg",
    },
    "diagnostic-imaging": {
      title: "Diagnostic Imaging",
      description: "Accurate and advanced imaging for early cancer detection and treatment planning.",
      keywords: ["Diagnostic Imaging", "CT Scan", "Digital X-Ray", "Cancer Detection"],
      ogImage: "/images/services/diagnostic-imaging.jpg",
    },
    laboratory: {
      title: "Laboratory Services",
      description: "Comprehensive lab testing for accurate cancer diagnosis and monitoring.",
      keywords: ["Cancer Lab Tests", "Pathology", "Blood Tests", "Biopsy Analysis"],
      ogImage: "/images/services/laboratory.jpg",
    },
    pharmacy: {
      title: "Oncology Pharmacy",
      description: "Dedicated pharmacy offering cancer-specific medications and expert guidance.",
      keywords: ["Oncology Pharmacy", "Cancer Medicines", "Chemotherapy Drugs"],
      ogImage: "/images/services/pharmacy.jpg",
    },
    physiotherapy: {
      title: "Cancer Physiotherapy",
      description: "Rehabilitation therapies to regain strength and mobility during or after cancer treatment.",
      keywords: ["Cancer Physiotherapy", "Rehabilitation", "Post-Treatment Recovery"],
      ogImage: "/images/services/physiotherapy.jpg",
    },
    "blood-bank": {
      title: "Blood Bank",
      description: "Reliable blood banking services ensuring safe and timely transfusions for patients in need.",
      keywords: ["Blood Bank", "Blood Donation", "Blood Transfusion Services"],
      ogImage: "/images/services/blood-bank.jpg",
    },
    dialysis: {
      title: "Dialysis Services",
      description: "State-of-the-art dialysis care for patients with chronic kidney conditions.",
      keywords: ["Dialysis", "Kidney Treatment", "Hemodialysis", "Renal Care"],
      ogImage: "/images/services/dialysis.jpg",
    },
    all: {
      title: "Comprehensive Medical Services",
      description: "Explore our wide range of medical services, from cancer care to general health and wellness.",
      keywords: ["Medical Services", "Healthcare", "Cancer Treatment", "General Health", "Wellness"],
      ogImage: "/images/services/all.jpg",
    },
    'support-services': {
      title: "Support Services for Comprehensive Care",
      description: "Discover our range of support services, designed to enhance your healthcare experience.",
      keywords: ["Support Services", "Healthcare Support", "Medical Assistance", "Patient Care"],
      ogImage: "/images/services/support-services.jpg",
    },
    "specialized-services": {
      title: "Specialized Medical Services | Synergy Super Speciality",
      description: "Explore our specialized medical treatments and super-speciality departments at Synergy Hospital.",
      keywords: ["Specialized Services", "Super Speciality Care", "Synergy Hospital"],
      ogImage: "/images/services/all.jpg",
    },
    "emergency-and-critical-care": {
      title: "24x7 Emergency & Critical Care Services | Synergy",
      description: "Round-the-clock emergency medical response and intensive critical care facilities.",
      keywords: ["Emergency Care", "ICU", "Critical Care", "Trauma Unit", "Synergy Hospital"],
      ogImage: "/images/patient-care/emergency.jpg",
    },
    "diagnostic-services": {
      title: "Comprehensive Diagnostic Services | Synergy",
      description: "State-of-the-art pathology, radiology, imaging, and laboratory diagnostic services.",
      keywords: ["Diagnostics", "Radiology", "Pathology", "Medical Testing", "Synergy Hospital"],
      ogImage: "/images/services/laboratory.jpg",
    },
    "ambulance": {
      title: "24/7 Emergency Ambulance Services | Synergy",
      description: "Fast-response ACLS/BLS ambulance service for critical patient transport.",
      keywords: ["Ambulance Service", "Emergency Transport", "Synergy Ambulance"],
      ogImage: "/images/ambulance-services.webp",
    },
    "dietary": {
      title: "Clinical Nutrition & Dietary Services | Synergy",
      description: "Personalized clinical nutrition and therapeutic diet plans for inpatient and outpatient recovery.",
      keywords: ["Clinical Nutrition", "Dietary Care", "Hospital Diet", "Synergy Dietary"],
      ogImage: "/images/dietary-services.webp",
    },
    "security": {
      title: "Campus Safety & Security | Synergy Hospital",
      description: "24/7 campus monitoring and patient safety protocols at Synergy Super Speciality Hospital.",
      keywords: ["Hospital Security", "Patient Safety", "Synergy Security"],
      ogImage: "/images/security-services.webp",
    },
    "medical-records": {
      title: "Medical Records & Health Information | Synergy",
      description: "Secure medical records management and health information desk for patient history and reports.",
      keywords: ["Medical Records", "Patient Reports", "Health Records", "Synergy Hospital"],
      ogImage: "/images/services/laboratory.jpg",
    },
    "admission-and-discharge": {
      title: "Admission & Discharge Process | Synergy Hospital",
      description: "Hassle-free inpatient admission and streamlined discharge assistance.",
      keywords: ["Hospital Admission", "Patient Discharge", "Inpatient Help", "Synergy"],
      ogImage: "/images/patient-care/in-patient.jpg",
    },
    "radiology": {
      title: "Department of Radiology & Imaging | Synergy",
      description: "Advanced diagnostic imaging including MRI, CT scan, ultrasound, and digital X-ray.",
      keywords: ["Radiology", "CT Scan", "MRI", "Ultrasound", "Imaging Services"],
      ogImage: "/images/services/diagnostic-imaging.jpg",
    },
    "pathology": {
      title: "Pathology & Clinical Lab Services | Synergy",
      description: "Accurate hematology, histopathology, and biochemistry laboratory diagnostics.",
      keywords: ["Pathology", "Blood Tests", "Lab Diagnostics", "Synergy Pathology"],
      ogImage: "/images/services/laboratory.jpg",
    },
    "microbiology": {
      title: "Diagnostic Microbiology Services | Synergy",
      description: "Infection diagnostics, culture sensitivity, and molecular microbiology testing.",
      keywords: ["Microbiology", "Infection Testing", "Culture Sensitivity", "Lab Test"],
      ogImage: "/images/services/laboratory.jpg",
    },
    "biochemistry": {
      title: "Clinical Biochemistry Services | Synergy",
      description: "Automated blood chemistry panels, hormone assays, and metabolic diagnostic tests.",
      keywords: ["Biochemistry", "Blood Panel", "Metabolic Profile", "Synergy Lab"],
      ogImage: "/images/services/laboratory.jpg",
    },
    "head-and-neck": {
      title: "Head & Neck Surgery & Oncology | Synergy",
      description: "Specialized care for head and neck tumors, thyroid disorders, and oral malignancies.",
      keywords: ["Head and Neck Surgery", "Oral Cancer", "Thyroid Surgery", "Synergy"],
      ogImage: "/images/services/surgical-oncology.jpg",
    },
    "pain-and-palliative-care": {
      title: "Pain Management & Palliative Care | Synergy",
      description: "Holistic pain relief and quality of life enhancement for chronic and oncological conditions.",
      keywords: ["Pain Care", "Palliative Medicine", "Cancer Pain Management"],
      ogImage: "/images/services/palliative-care.jpg",
    },
    "anesthesia": {
      title: "Department of Anesthesiology | Synergy Hospital",
      description: "Safe perioperative anesthetic care, sedation, and acute pain management services.",
      keywords: ["Anesthesiology", "Surgery Anesthesia", "Pain Relief", "Synergy"],
      ogImage: "/images/services/all.jpg",
    },

  },

  "patient-care": {
    emergency: {
      title: "24x7 Emergency Medical Services",
      description: "Round-the-clock emergency care with advanced life-saving facilities and expert doctors.",
      keywords: ["Emergency Care", "24x7 Hospital Emergency", "Urgent Medical Help"],
      ogImage: "/images/patient-care/emergency.jpg",
    },
    "second-opinion": {
      title: "Second Medical Opinion",
      description: "Consult senior specialists for a second opinion on your diagnosis or treatment plan.",
      keywords: ["Second Medical Opinion", "Specialist Consultation", "Medical Advice"],
      ogImage: "/images/patient-care/second-opinion.jpg",
    },
    "in-patient": {
      title: "In-Patient Care Services",
      description: "Well-equipped in-patient wards with compassionate care, advanced monitoring, and 24x7 support.",
      keywords: ["In-Patient Care", "Hospital Stay", "Admitted Patient Services"],
      ogImage: "/images/patient-care/in-patient.jpg",
    },
    "out-patient": {
      title: "Out-Patient Department (OPD) Services",
      description: "Quick and efficient consultations, follow-ups, and diagnostics for out-patient needs.",
      keywords: ["OPD Services", "Doctor Consultation", "Out-Patient Department"],
      ogImage: "/images/patient-care/out-patient.jpg",
    },
    insurance: {
      title: "Health Insurance Assistance",
      description: "Comprehensive support for insurance claims, cashless hospitalization, and empaneled providers.",
      keywords: ["Health Insurance", "Cashless Hospitalization", "Insurance Claim Support"],
      ogImage: "/images/patient-care/insurance.jpg",
    },
    "health-checks": {
      title: "Preventive Health Check-Up Packages",
      description: "Tailored health check-up plans for early detection and preventive care.",
      keywords: ["Health Check-Up", "Preventive Care", "Medical Screening Packages"],
      ogImage: "/images/patient-care/health-checks.jpg",
    },
  },

  "health-library": {
    "breast-cancer": {
      title: "Understanding Breast Cancer",
      description: "Learn about the symptoms, risk factors, diagnosis, and treatment options for breast cancer.",
      keywords: ["Breast Cancer", "Breast Tumor", "Breast Cancer Awareness"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "prostate-cancer": {
      title: "Prostate Cancer Overview",
      description: "Comprehensive information on prostate cancer including early signs, screening, and therapies.",
      keywords: ["Prostate Cancer", "Men's Health", "Cancer Screening"],
      ogImage: "/images/health-library/prostate-cancer.jpg",
    },
    "lung-cancer": {
      title: "Lung Cancer Guide",
      description: "Know the causes, symptoms, diagnosis, and latest treatment options for lung cancer.",
      keywords: ["Lung Cancer", "Smoking and Cancer", "Lung Health"],
      ogImage: "/images/health-library/lung-cancer.jpg",
    },
    "cervical-cancer": {
      title: "Cervical Cancer Awareness",
      description: "Understand the symptoms, preventive measures, HPV vaccine, and treatment options.",
      keywords: ["Cervical Cancer", "HPV", "Women's Health"],
      ogImage: "/images/health-library/cervical-cancer.jpg",
    },
    "blood-cancer": {
      title: "Blood Cancer Types and Treatments",
      description: "Explore different types of blood cancers such as leukemia, lymphoma, and myeloma.",
      keywords: ["Blood Cancer", "Leukemia", "Lymphoma", "Myeloma"],
      ogImage: "/images/health-library/blood-cancer.jpg",
    },
    prevention: {
      title: "Cancer Prevention Tips",
      description: "Practical tips and lifestyle changes that can help reduce the risk of developing cancer.",
      keywords: ["Cancer Prevention", "Healthy Lifestyle", "Preventive Care"],
      ogImage: "/images/health-library/prevention.jpg",
    },
    diagnosis: {
      title: "Cancer Diagnosis and Staging",
      description: "Understand how cancer is diagnosed, staged, and what tests are involved in the process.",
      keywords: ["Cancer Diagnosis", "Cancer Staging", "Biopsy", "Imaging Tests"],
      ogImage: "/images/health-library/diagnosis.jpg",
    },
    treatments: {
      title: "Cancer Treatment Options",
      description: "Learn about different cancer treatments including surgery, chemotherapy, radiation, and targeted therapy.",
      keywords: ["Cancer Treatment", "Chemotherapy", "Radiation", "Surgery"],
      ogImage: "/images/health-library/treatments.jpg",
    },
    nutrition: {
      title: "Nutrition and Wellness During Cancer",
      description: "Nutritional guidance, wellness tips, and dietary support for cancer patients and survivors.",
      keywords: ["Cancer Nutrition", "Wellness Tips", "Diet for Cancer Patients"],
      ogImage: "/images/health-library/nutrition.jpg",
    },
    faqs: {
      title: "Frequently Asked Questions About Cancer",
      description: "Answers to the most common queries regarding cancer, treatment, and lifestyle.",
      keywords: ["Cancer FAQs", "Cancer Help", "Patient Questions"],
      ogImage: "/images/health-library/faqs.jpg",
    },
    "adrenal-cancer": {
      title: "Adrenal Gland Cancer Information & Care | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for adrenal cancer.",
      keywords: ["Adrenal Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "anal-cancer": {
      title: "Anal Cancer Causes, Symptoms & Treatments | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for anal cancer.",
      keywords: ["Anal Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "bile-duct-cancer": {
      title: "Bile Duct Cancer (Cholangiocarcinoma) Care | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for bile duct cancer.",
      keywords: ["Bile Duct Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "bladder-cancer": {
      title: "Bladder Cancer Diagnosis & Treatment Options | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for bladder cancer.",
      keywords: ["Bladder Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "bone-cancer": {
      title: "Bone Cancer Symptoms, Types & Advanced Therapies | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for bone cancer.",
      keywords: ["Bone Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "brain-cancer": {
      title: "Brain Tumors & Brain Cancer Treatment Options | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for brain cancer.",
      keywords: ["Brain Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "breast-cancer-in-men": {
      title: "Male Breast Cancer Awareness & Care | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for breast cancer in men.",
      keywords: ["Breast Cancer In Men", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "colon-rectal-cancer": {
      title: "Colorectal Cancer Prevention & Advanced Care | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for colon rectal cancer.",
      keywords: ["Colon Rectal Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "endometrial-cancer": {
      title: "Endometrial & Uterine Cancer Care | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for endometrial cancer.",
      keywords: ["Endometrial Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "esophageal-cancer": {
      title: "Esophageal Cancer Symptoms & Treatment | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for esophageal cancer.",
      keywords: ["Esophageal Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "eye-cancer": {
      title: "Ocular & Eye Cancer Diagnostic & Treatment Options | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for eye cancer.",
      keywords: ["Eye Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "gallbladder-cancer": {
      title: "Gallbladder Cancer Care & Surgical Options | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for gallbladder cancer.",
      keywords: ["Gallbladder Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "gastric-cancer": {
      title: "Gastric & Stomach Cancer Treatment | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for gastric cancer.",
      keywords: ["Gastric Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "head-and-neck-cancer": {
      title: "Head & Neck Cancer Comprehensive Care | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for head and neck cancer.",
      keywords: ["Head And Neck Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "kidney-cancer": {
      title: "Kidney Cancer (Renal Cell Carcinoma) Care | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for kidney cancer.",
      keywords: ["Kidney Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "laryngeal-cancer": {
      title: "Laryngeal Cancer Causes & Treatments | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for laryngeal cancer.",
      keywords: ["Laryngeal Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "liver-cancer": {
      title: "Liver Cancer Symptoms & Multidisciplinary Care | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for liver cancer.",
      keywords: ["Liver Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "multiple-myeloma": {
      title: "Multiple Myeloma & Plasma Cell Disorders | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for multiple myeloma.",
      keywords: ["Multiple Myeloma", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "neuroendocrine-tumors": {
      title: "Neuroendocrine Tumors (NETs) Diagnosis & Care | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for neuroendocrine tumors.",
      keywords: ["Neuroendocrine Tumors", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "non-hodgkin-lymphoma": {
      title: "Non-Hodgkin Lymphoma Care & Therapy | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for non hodgkin lymphoma.",
      keywords: ["Non Hodgkin Lymphoma", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "oral-cancer": {
      title: "Oral & Mouth Cancer Prevention & Surgical Care | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for oral cancer.",
      keywords: ["Oral Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "ovarian-cancer": {
      title: "Ovarian Cancer Early Symptoms & Treatment | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for ovarian cancer.",
      keywords: ["Ovarian Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "pancreatic-cancer": {
      title: "Pancreatic Cancer Care & Surgical Oncology | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for pancreatic cancer.",
      keywords: ["Pancreatic Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "penile-cancer": {
      title: "Penile Cancer Symptoms & Surgical Options | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for penile cancer.",
      keywords: ["Penile Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "pituitary-tumors": {
      title: "Pituitary Adenomas & Tumors Care | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for pituitary tumors.",
      keywords: ["Pituitary Tumors", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "salivary-gland-cancer": {
      title: "Salivary Gland Tumor & Cancer Treatment | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for salivary gland cancer.",
      keywords: ["Salivary Gland Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "skin-cancer": {
      title: "Melanoma & Skin Cancer Detection & Care | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for skin cancer.",
      keywords: ["Skin Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "stomach-cancer": {
      title: "Stomach Cancer Comprehensive Treatment | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for stomach cancer.",
      keywords: ["Stomach Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },
    "uterine-cancer": {
      title: "Uterine Cancer & Gynecologic Oncology Care | Synergy Health Library",
      description: "Comprehensive medical insights, symptoms, diagnosis, and treatment options for uterine cancer.",
      keywords: ["Uterine Cancer", "Cancer Care", "Health Library", "Synergy Hospital"],
      ogImage: "/images/health-library/breast-cancer.jpg",
    },

  },

  survivors: {
    "awareness-campaigns": {
      title: "Cancer Awareness Campaigns & Initiatives | Synergy",
      description: "Join our cancer awareness drives, community screening camps, and early detection initiatives.",
      keywords: ["Cancer Awareness", "Screening Camps", "Community Health", "Synergy"],
      ogImage: "/images/survivors/awareness.jpg",
    },

    testimonials: {
      title: "Cancer Survivor Testimonials",
      description: "Inspiring stories of courage and strength from patients who overcame cancer.",
      keywords: ["Cancer Survivor Stories", "Patient Testimonials", "Inspiration"],
      ogImage: "/images/survivors/testimonials.jpg",
    },
    "victory-stories": {
      title: "Victory Stories of Hope and Healing",
      description: "Real-life journeys of patients who fought cancer and emerged victorious.",
      keywords: ["Cancer Victory", "Healing Journeys", "Success Stories"],
      ogImage: "/images/survivors/victory-stories.jpg",
    },
    videos: {
      title: "Video Messages from Cancer Survivors",
      description: "Watch heartfelt video messages from survivors sharing their personal journeys.",
      keywords: ["Cancer Survivor Videos", "Inspiring Stories", "Video Testimonials"],
      ogImage: "/images/survivors/videos.jpg",
    },
    counseling: {
      title: "Counseling & Mental Health Support",
      description: "Emotional and psychological support services for patients, survivors, and families.",
      keywords: ["Cancer Counseling", "Mental Health", "Emotional Support"],
      ogImage: "/images/survivors/counseling.jpg",
    },
    rehab: {
      title: "Rehabilitation Programs for Cancer Survivors",
      description: "Comprehensive rehab services to help survivors regain strength and quality of life.",
      keywords: ["Cancer Rehab", "Survivor Care", "Post-Treatment Recovery"],
      ogImage: "/images/survivors/rehab.jpg",
    },
    clinics: {
      title: "Survivorship Clinics and Long-Term Care",
      description: "Dedicated clinics focusing on long-term health, monitoring, and survivorship needs.",
      keywords: ["Survivorship Clinic", "Follow-up Care", "Long-term Health"],
      ogImage: "/images/survivors/clinics.jpg",
    },
    volunteer: {
      title: "Become a Volunteer for Cancer Support",
      description: "Join our volunteer program and make a meaningful impact in cancer care and recovery.",
      keywords: ["Cancer Volunteer", "Support Programs", "Join Us"],
      ogImage: "/images/survivors/volunteer.jpg",
    },
    awareness: {
      title: "Cancer Awareness Campaigns",
      description: "Engaging campaigns to spread awareness, encourage screening, and educate communities.",
      keywords: ["Cancer Awareness", "Health Campaigns", "Community Engagement"],
      ogImage: "/images/survivors/awareness.jpg",
    },
    // Naye Survivor pages yahan jode gaye hain
    "cancer-survivor-mean": {
      title: "What is a Cancer Survivor? | Synergy",
      description: "Discover the true meaning of a cancer survivor and find stories of strength, hope, and healing at Synergy.",
      keywords: ["Cancer Survivor Meaning", "Cancer Hope", "Synergy Oncology"],
      ogImage: "/images/survivors/cancer-survivor.jpg",
    },
    "support-for-families": {
      title: "Support for Families and Caregivers",
      description: "We provide emotional reassurance, treatment guidance, and care instructions for families of cancer patients.",
      keywords: ["Caregiver Support", "Cancer Family Help", "Synergy Support"],
      ogImage: "/images/survivors/caregiver-support.jpg",
    },
  },

  // ---------------- NAYE SECTIONS (CANCER CARE, INSTITUTE, CENTERS) ---------------- //

  "cancer-care": {
    "preventive-oncology": {
      title: "Preventive Oncology & Screening | Synergy Cancer Care",
      description: "Early detection saves lives. Learn about our cancer screening programs, risk assessment, and education initiatives.",
      keywords: ["Preventive Oncology", "Cancer Screening", "Early Detection Cancer"],
      ogImage: "/images/cancer-care/preventive.jpg",
    },
    "surgical-oncology": {
      title: "Advanced Surgical Oncology | Synergy",
      description: "Safe, precise, and minimally invasive cancer surgeries performed by expert oncologists.",
      keywords: ["Surgical Oncology", "Cancer Surgery", "Minimally Invasive Surgery"],
      ogImage: "/images/cancer-care/surgical.jpg",
    },
    "medical-oncology": {
      title: "Medical Oncology & Chemotherapy | Synergy",
      description: "Comprehensive medical oncology treatments including chemotherapy, immunotherapy, and targeted therapies.",
      keywords: ["Medical Oncology", "Chemotherapy", "Immunotherapy", "Targeted Therapy"],
      ogImage: "/images/cancer-care/medical.jpg",
    },
    "radiation-oncology": {
      title: "Radiation Oncology | Advanced Cancer Treatment",
      description: "High-precision radiation therapy designed to destroy cancer cells while protecting healthy tissue.",
      keywords: ["Radiation Oncology", "Radiotherapy", "Precision Cancer Treatment"],
      ogImage: "/images/cancer-care/radiation.jpg",
    },
    "multidisciplinary-tumour-board": {
      title: "Multidisciplinary Tumour Board | Synergy",
      description: "One patient. Multiple experts. One decision. Learn how our tumour board ensures personalized cancer care.",
      keywords: ["Tumour Board", "Multidisciplinary Cancer Care", "Oncology Experts"],
      ogImage: "/images/cancer-care/tumour-board.jpg",
    },
    "advanced-technology": {
      title: "Advanced Technology & Infrastructure | Synergy Cancer Care",
      description: "State-of-the-art infrastructure built for safety, precision, and comfort during your cancer treatment.",
      keywords: ["Cancer Infrastructure", "Modern Oncology Technology", "Advanced Diagnostics"],
      ogImage: "/images/cancer-care/technology.jpg",
    },
    "patient-centric-care": {
      title: "Patient-Centric Cancer Care | Synergy",
      description: "We treat people, not just reports. Experience step-by-step guidance, emotional support, and palliative care.",
      keywords: ["Patient-Centric Care", "Cancer Support", "Palliative Care"],
      ogImage: "/images/cancer-care/patient-care.jpg",
    },
  },

  institute: {
    overview: {
      title: "Synergy Institute for Cancer Education",
      description: "Building Knowledge, Creating Future Cancer Care Experts through awareness, professional training, and academic growth.",
      keywords: ["Cancer Education", "Oncology Training", "Synergy Institute", "Medical Education"],
      ogImage: "/images/institute/education.jpg",
    },
    vision: {
      title: "Vision & Goals | Synergy Institute for Cancer Education",
      description: "Helping build a strong foundation for future cancer care by focusing on knowledge, skills, and ethical practice.",
      keywords: ["Institute Vision", "Future Cancer Care", "Medical Training Goals"],
      ogImage: "/images/institute/vision.jpg",
    }
  },

  centers: {
    network: {
      title: "Our Cancer Care Centers & Network | Synergy",
      description: "Cancer care that reaches you. Explore our growing network of owned and collaborative cancer centers.",
      keywords: ["Cancer Care Network", "Synergy Centers", "Oncology Clinics"],
      ogImage: "/images/centers/network.jpg",
    },
    "outstation-support": {
      title: "Outstation Support & Outreach Camps | Synergy",
      description: "Because travel should not delay treatment. Discover our outstation support and upcoming community screening camps.",
      keywords: ["Outstation Cancer Support", "Cancer Outreach Camps", "Community Screening"],
      ogImage: "/images/centers/outstation.jpg",
    },
    "find-center": {
      title: "Find a Synergy Cancer Center Near You",
      description: "Simple, clear, accessible. Find the nearest Synergy cancer center, check services, and book appointments easily.",
      keywords: ["Find Cancer Center", "Synergy Locations", "Nearest Oncologist"],
      ogImage: "/images/centers/find-center.jpg",
    }
  }
};