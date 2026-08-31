import { SupportServiceProps } from "@/types"
import {
  FaXRay,
  FaPills,
  FaHandHoldingDroplet,
  FaUtensils,
  FaShieldHalved,
  FaTruckMedical,
  FaPersonWalking,
} from "react-icons/fa6"
import { CONTACT_INFO } from "@/data/contactData"
import { useTranslations } from "next-intl"

export const diagnosticImagingData : SupportServiceProps= {
    heroImage: "/department/diagnostic-imaging-banner.png",
    title: "Diagnostic Imaging Services",
    description: "Advanced imaging technology for accurate diagnosis and treatment planning",
    services:  [
        {
            id: "xray",
            title: "X-Ray",
            description: "High-resolution imaging for bones and chest examinations",
            icon: FaXRay,
            details: "Our digital X-ray technology provides immediate high-quality images with significantly lower radiation exposure compared to traditional methods. Ideal for bone fractures, chest examinations, and dental imaging.",
            commonUses: ["Fracture detection", "Pneumonia diagnosis", "Dental examinations"]
        },
        {
            id: "ctscan",
            title: "CT Scan",
            description: "Cross-sectional views of body structures with precision",
            icon: FaXRay,
            details: "Advanced 128-slice CT technology enables rapid scanning with exceptional detail, reducing scan times and patient discomfort. Particularly effective for trauma cases, cancer detection, and vascular studies.",
            commonUses: ["Trauma assessment", "Cancer staging", "Pulmonary embolism detection"]
        },
        {
            id: "ultrasound",
            title: "Ultrasound",
            description: "Non-invasive imaging for abdominal and obstetric evaluation",
            icon: FaXRay,
            details: "Our ultrasound services include abdominal, pelvic, obstetric, vascular, and small parts examinations. Using the latest Doppler technology, we provide comprehensive evaluations without radiation exposure.",
            commonUses: ["Pregnancy monitoring", "Gallbladder evaluation", "Thyroid assessment"]
        },
        {
            id: "mammography",
            title: "Mammography",
            description: "Specialized imaging for breast tissue examination",
            icon: FaXRay,
            details: "Digital mammography with tomosynthesis (3D mammography) provides clearer images with fewer callbacks. Our comfortable mammography suites are staffed by specialized female technologists for your convenience.",
            commonUses: ["Breast cancer screening", "Lump evaluation", "Implant assessment"]
        },
        {
            id: "fluoroscopy",
            title: "Fluoroscopy",
            description: "Real-time moving images of internal structures",
            icon: FaXRay,
            details: "Used for procedures like barium studies, joint injections, and swallowing evaluations. Our pulsed fluoroscopy technique minimizes radiation dose while maintaining excellent image quality.",
            commonUses: ["Barium swallow studies", "Angiography", "Spinal injections"]
        }
    ],
    preparationTips: [
        "Fasting may be required for certain scans (4-6 hours)",
        "Wear comfortable, metal-free clothing",
        "Inform staff about any implants or pregnancy",
        "Some procedures may require contrast injection",
        "Bring previous imaging reports if available"
    ],
    whyChoose: {
      title: "Why Choose Our Imaging Center?",
      items: [
        {
          badge: "1",
          title: " Cutting-Edge Technology",
          description: " Latest generation equipment for superior image quality with lower radiation exposure"
        },
        {
          badge: "2",
          title: "  Expert Radiologists",
          description: "Board-certified specialists with subspecialty training in various imaging modalities"
        },
        {
          badge: "3",
          title: "Quick Results",
          description: "Digital reports available within 24-48 hours through our patient portal"
        },
      ]
    },
    faqs: [
        {
            question: "How long does an imaging test take?",
            answer: "Most standard X-rays take 15-30 minutes. CT scans typically take 15-30 minutes depending on the area being scanned."
        },
        {
            question: "Is imaging safe during pregnancy?",
            answer: "Ultrasound is safe during pregnancy. X-rays and CT scans are generally avoided unless absolutely necessary. Always inform your doctor if you're pregnant."
        }
    ],
    cta: {
      title: "Need Diagnostic Imaging Services?",
      description: "Our team is ready to assist you...",
      buttons: [
        {
          text: `Call Now: ${CONTACT_INFO.phoneNumbers.primaryFormatted}`,
          variant: "default",
          href: `tel:${CONTACT_INFO.phoneNumbers.primary}`,
          onClick: () => { if (typeof window !== 'undefined') window.location.href = `tel:${CONTACT_INFO.phoneNumbers.primary}` }
        },
        {
          text: "Request Callback",
          variant: "outline",
          href: "/contact",
          onClick: () => { if (typeof window !== 'undefined') window.location.href = "/contact" }
        }
      ]
    }
  }

  export const laboratoryData : SupportServiceProps= {
    heroImage: "/lab-services-hero.jpg",
    title: "Laboratory Services",
    description: "Precision diagnostics with fastest turnaround times in the region",
    services: [
      {
        id: "hematology",
        title: "Hematology",
        description: "Complete blood count and specialized blood tests",
        icon: FaXRay,
        details: "Our fully automated hematology analyzers provide accurate CBC results within minutes. Comprehensive testing including coagulation studies and hemoglobin analysis.",
        commonUses: ["Anemia diagnosis", "Infection detection", "Blood disorder screening"]
      },
      {
        id: "biochemistry",
        title: "Biochemistry",
        description: "Comprehensive metabolic panels and enzyme studies",
        icon: FaXRay,
        details: "Advanced analyzers for liver/kidney function tests, lipid profiles, and diabetes monitoring with STAT testing availability.",
        commonUses: ["Diabetes management", "Cholesterol checks", "Electrolyte imbalance detection"]
      },
      {
        id: "microbiology",
        title: "Microbiology",
        description: "Culture and sensitivity testing for infections",
        icon: FaXRay,
        details: "Fully equipped lab with automated culture systems and rapid PCR testing for critical pathogens.",
        commonUses: ["Bacterial identification", "Antibiotic resistance testing", "Fungal infection diagnosis"]
      }
    ],
    preparationTips: [
      "Fasting required for 10-12 hours for most blood tests",
      "Inform about current medications",
      "Follow instructions for urine/stool samples",
      "Stay hydrated unless instructed otherwise",
      "Avoid strenuous exercise before tests"
    ],
    whyChoose: {
      title: "Why Choose Our Laboratory?",
      items: [
        {
          badge: "1",
          title: "Advanced Technology",
          description: "Fully automated systems with robotic processing"
        },
        {
          badge: "2",
          title: "Expert Pathologists",
          description: "Board-certified specialists overseeing all tests"
        },
        {
          badge: "3",
          title: "Rapid Results",
          description: "Same-day reporting for critical tests"
        }
      ]
    },
    faqs: [
      {
        question: "How long do test results take?",
        answer: "Routine tests: 4-6 hours, Specialized tests: 24-48 hours"
      },
      {
        question: "Can I eat before blood tests?",
        answer: "Most tests require fasting, check specific instructions"
      }
    ],
    cta: {
      title: "Need Laboratory Services?",
      description: "Get accurate diagnostics with quick results",
      buttons: [
        {
          text: `Book Test: ${CONTACT_INFO.phoneNumbers.primaryFormatted}`,
          variant: "default",
          href: `tel:${CONTACT_INFO.phoneNumbers.primary}`,
          onClick: () => { if (typeof window !== 'undefined') window.location.href = `tel:${CONTACT_INFO.phoneNumbers.primary}` }
        },
        {
          text: "Request Callback",
          variant: "outline",
          href: "/contact",
          onClick: () => { if (typeof window !== 'undefined') window.location.href = "/contact" }
        }
      ]
    }
  }

  export const pharmacyData : SupportServiceProps= {
    heroImage: "/department/pharmacy-banner.png",
    title: "Pharmacy Services",
    description: "Quality medications with expert pharmaceutical care",
    services: [
      {
        id: "opd",
        title: "Outpatient Pharmacy",
        description: "24/7 medication dispensing",
        icon: FaXRay,
        details: "Robotic dispensing system with wide range of medicines and OTC products",
        commonUses: ["Prescription filling", "Chronic medication", "Emergency supplies"]
      },
      {
        id: "clinical",
        title: "Clinical Pharmacy",
        description: "Medication therapy management",
        icon: FaXRay,
        details: "Medication review and reconciliation services by clinical pharmacists",
        commonUses: ["Drug interaction checks", "Dosage adjustments", "Therapy monitoring"]
      }
    ],
    preparationTips: [
      "Carry valid prescription",
      "Check insurance coverage",
      "Bring medication list",
      "Ask about generic alternatives",
      "Verify dosage instructions"
    ],
    whyChoose: {
      title: "Why Our Pharmacy?",
      items: [
        {
          badge: "1",
          title: "24/7 Availability",
          description: "Round-the-clock emergency services"
        },
        {
          badge: "2",
          title: "Accuracy Guaranteed",
          description: "Robotic dispensing with triple checks"
        },
        {
          badge: "3",
          title: "Expert Counsel",
          description: "Free medication counseling"
        }
      ]
    },
    faqs: [
      {
        question: "Do you deliver medications?",
        answer: "Yes, free delivery within 5km radius"
      },
      {
        question: "Can I get generic medicines?",
        answer: "We stock both brand and FDA-approved generics"
      }
    ],
    cta: {
      title: "Pharmacy Services",
      description: "Get your medications safely and conveniently",
      buttons: [
        {
          text: `Emergency Meds: ${CONTACT_INFO.phoneNumbers.primaryFormatted}`,
          variant: "default",
          href: `tel:${CONTACT_INFO.phoneNumbers.primary}`,
          onClick: () => { if (typeof window !== 'undefined') window.location.href = `tel:${CONTACT_INFO.phoneNumbers.primary}` }
        },
        {
          text: "Request Callback",
          variant: "outline",
          href: "/contact",
          onClick: () => { if (typeof window !== 'undefined') window.location.href = "/contact" }
        }
      ]
    }
  }

  export const usePharmacyData = (): SupportServiceProps => {
    const t = useTranslations("supportServicesData.pharmacy");

    return {
      heroImage: "/department/pharmacy-banner.png",
      title: t("title"),
      description: t("description"),
      services: [
        {
          id: "opd",
          title: t("services.opd.title"),
          description: t("services.opd.description"),
          icon: FaPills,
          details: t("services.opd.details"),
          commonUses: t.raw("services.opd.commonUses"),
        },
        {
          id: "clinical",
          title: t("services.clinical.title"),
          description: t("services.clinical.description"),
          icon: FaPills,
          details: t("services.clinical.details"),
          commonUses: t.raw("services.clinical.commonUses"),
        },
      ],
      preparationTips: t.raw("preparationTips"),
      whyChoose: {
        title: t("whyChoose.title"),
        items: [
          {
            badge: "1",
            title: t("whyChoose.items.availability.title"),
            description: t("whyChoose.items.availability.description"),
          },
          {
            badge: "2",
            title: t("whyChoose.items.accuracy.title"),
            description: t("whyChoose.items.accuracy.description"),
          },
          {
            badge: "3",
            title: t("whyChoose.items.counsel.title"),
            description: t("whyChoose.items.counsel.description"),
          },
        ],
      },
      faqs: [
        {
          question: t("faqs.delivery.question"),
          answer: t("faqs.delivery.answer"),
        },
        {
          question: t("faqs.generics.question"),
          answer: t("faqs.generics.answer"),
        },
      ],
      cta: {
        title: t("cta.title"),
        description: t("cta.description"),
        buttons: [
          {
            text: `${t("cta.emergencyMeds")}: ${CONTACT_INFO.phoneNumbers.primaryFormatted}`,
            variant: "default",
            href: `tel:${CONTACT_INFO.phoneNumbers.primary}`,
            onClick: () => {
              if (typeof window !== "undefined")
                window.location.href = `tel:${CONTACT_INFO.phoneNumbers.primary}`;
            },
          },
          {
            text: t("cta.requestCallback"),
            variant: "outline",
            href: "/contact",
            onClick: () => {
              if (typeof window !== "undefined")
                window.location.href = "/contact";
            },
          },
        ],
      },
    };
  };

  export const physiotherapyData : SupportServiceProps= {
    heroImage: "/physio-hero.jpg",
    title: "Physiotherapy Services",
    description: "Restoring movement and improving quality of life",
    services: [
      {
        id: "ortho",
        title: "Orthopedic Rehab",
        description: "Post-surgical recovery",
        icon: FaXRay,
        details: "Specialized programs for joint replacements and sports injuries",
        commonUses: ["Fracture rehab", "Arthritis management", "Post-op recovery"]
      },
      {
        id: "neuro",
        title: "Neuro Rehab",
        description: "Stroke rehabilitation",
        icon: FaXRay,
        details: "Advanced techniques for neurological disorders",
        commonUses: ["Stroke recovery", "Parkinson's therapy", "Spinal cord injury"]
      }
    ],
    preparationTips: [
      "Wear comfortable clothing",
      "Bring previous reports",
      "Arrive 10 mins early",
      "Hydrate well",
      "Inform about pain levels"
    ],
    whyChoose: {
      title: "Why Choose Our Physio?",
      items: [
        {
          badge: "1",
          title: "Personalized Plans",
          description: "Tailored exercise regimens"
        },
        {
          badge: "2",
          title: "Modern Equipment",
          description: "Electrotherapy and hydrotherapy"
        },
        {
          badge: "3",
          title: "Experienced Therapists",
          description: "Specialized certifications"
        }
      ]
    },
    faqs: [
      {
        question: "How long are sessions?",
        answer: "Typically 45-60 minutes depending on treatment"
      },
      {
        question: "Do I need referral?",
        answer: "Direct access available, insurance may require referral"
      }
    ],
    cta: {
      title: "Start Your Recovery",
      description: "Book assessment with our physiotherapists",
      buttons: [
        {
          text: `Call Physiotherapy: ${CONTACT_INFO.phoneNumbers.primaryFormatted}`,
          variant: "default",
          href: `tel:${CONTACT_INFO.phoneNumbers.primary}`,
          onClick: () => { if (typeof window !== 'undefined') window.location.href = `tel:${CONTACT_INFO.phoneNumbers.primary}` }
        },
        {
          text: "Request Callback",
          variant: "outline",
          href: "/contact",
          onClick: () => { if (typeof window !== 'undefined') window.location.href = "/contact" }
        }
      ]
    }
  }

  export const bloodBankData : SupportServiceProps= {
    heroImage: "/department/blood-bank-banner.png",
    title: "Blood Bank Services",
    description: "Saving lives through safe blood services",
    services: [
      {
        id: "donation",
        title: "Blood Donation",
        description: "Safe blood collection",
        icon: FaXRay,
        details: "Sterile donation process with post-donation care",
        commonUses: ["Whole blood donation", "Platelet apheresis", "Plasma donation"]
      },
      {
        id: "storage",
        title: "Blood Storage",
        description: "Component separation",
        icon: FaXRay,
        details: "State-of-the-art storage with temperature monitoring",
        commonUses: ["RBC storage", "Platelet storage", "Plasma freezing"]
      }
    ],
    preparationTips: [
      "Eat iron-rich meals",
      "Hydrate well",
      "Avoid alcohol 24h prior",
      "Bring ID proof",
      "Rest after donation"
    ],
    whyChoose: {
      title: "Why Our Blood Bank?",
      items: [
        {
          badge: "1",
          title: "Safe Processing",
          description: "Nucleic acid testing for all donations"
        },
        {
          badge: "2",
          title: "24/7 Availability",
          description: "Emergency blood supply always ready"
        },
        {
          badge: "3",
          title: "Quick Turnaround",
          description: "Same-day crossmatching"
        }
      ]
    },
    faqs: [
      {
        question: "How often can I donate?",
        answer: "Every 3 months for whole blood"
      },
      {
        question: "Is donation safe?",
        answer: "Yes, sterile single-use equipment only"
      }
    ],
    cta: {
      title: "Donate Blood Today",
      description: "Your donation can save up to 3 lives",
      buttons: [
        {
          text: `Blood Bank Emergency: ${CONTACT_INFO.phoneNumbers.primaryFormatted}`,
          variant: "default",
          href: `tel:${CONTACT_INFO.phoneNumbers.primary}`,
          onClick: () => { if (typeof window !== 'undefined') window.location.href = `tel:${CONTACT_INFO.phoneNumbers.primary}` }
        },
        {
          text: "Request Callback",
          variant: "outline",
          href: "/contact",
          onClick: () => { if (typeof window !== 'undefined') window.location.href = "/contact" }
        }
      ]
    }
  }

  export const dialysisData : SupportServiceProps= {
    heroImage: "/dialysis-hero.jpg",
    title: "Dialysis Services",
    description: "Compassionate care for kidney patients",
    services: [
      {
        id: "hemo",
        title: "Hemodialysis",
        description: "Blood filtration treatment",
        icon: FaXRay,
        details: "Advanced machines with biocompatible membranes",
        commonUses: ["ESRD management", "Toxin removal", "Fluid overload"]
      },
      {
        id: "peritoneal",
        title: "Peritoneal Dialysis",
        description: "Home-based treatment",
        icon: FaXRay,
        details: "Training program for self-care dialysis",
        commonUses: ["Chronic dialysis", "Home therapy", "Pediatric cases"]
      }
    ],
    preparationTips: [
      "Follow dietary guidelines",
      "Monitor fluid intake",
      "Check access site",
      "Bring medication list",
      "Wear comfortable clothes"
    ],
    whyChoose: {
      title: "Why Our Dialysis Unit?",
      items: [
        {
          badge: "1",
          title: "Advanced Machines",
          description: "Latest hemodialysis technology"
        },
        {
          badge: "2",
          title: "Expert Nephrologists",
          description: "24/7 specialist supervision"
        },
        {
          badge: "3",
          title: "Comfortable Suites",
          description: "Private TV-equipped stations"
        }
      ]
    },
    faqs: [
      {
        question: "How long does dialysis take?",
        answer: "Typically 3-4 hours per session"
      },
      {
        question: "Can I travel during treatment?",
        answer: "We help arrange temporary dialysis centers"
      }
    ],
    cta: {
      title: "Dialysis Care",
      description: "Schedule your treatment session",
      buttons: [
        {
          text: `Call Dialysis Unit: ${CONTACT_INFO.phoneNumbers.primaryFormatted}`,
          variant: "default",
          href: `tel:${CONTACT_INFO.phoneNumbers.primary}`,
          onClick: () => { if (typeof window !== 'undefined') window.location.href = `tel:${CONTACT_INFO.phoneNumbers.primary}` }
        },
        {
          text: "Request Callback",
          variant: "outline",
          href: "/contact",
          onClick: () => { if (typeof window !== 'undefined') window.location.href = "/contact" }
        }
      ]
    }
  }

  export const ambulanceData : SupportServiceProps= {
    heroImage: "/department/ambulance-service-banner.png",
    title: "Ambulance Services",
    description: "24/7 emergency response and medical transport",
    services: [
      {
        id: "als",
        title: "Advanced Life Support",
        description: "Mobile ICU ambulances",
        icon: FaXRay,
        details: "Staffed by emergency physicians with full crash cart",
        commonUses: ["Cardiac emergencies", "Trauma cases", "Critical transfers"]
      },
      {
        id: "bls",
        title: "Basic Life Support",
        description: "Emergency transport",
        icon: FaXRay,
        details: "EMT-staffed ambulances for stable patients",
        commonUses: ["Hospital transfers", "Non-emergency transport", "Discharge pickup"]
      }
    ],
    preparationTips: [
      "Clear access route",
      "Gather medical reports",
      "Prepare medications list",
      "Designate meeting point",
      "Stay calm and follow instructions"
    ],
    whyChoose: {
      title: "Why Our Ambulance Service?",
      items: [
        {
          badge: "1",
          title: "5-Minute Response",
          description: "Guaranteed in city limits"
        },
        {
          badge: "2",
          title: "Advanced Equipment",
          description: "Ventilators, monitors, ECMO"
        },
        {
          badge: "3",
          title: "Trained Staff",
          description: "ACLS/PALS certified personnel"
        }
      ]
    },
    faqs: [
      {
        question: "What's the emergency number?",
        answer: "Call 108 for immediate assistance"
      },
      {
        question: "Do you handle inter-hospital transfers?",
        answer: "Yes, with medical escort available"
      }
    ],
    cta: {
      title: "Emergency Assistance",
      description: "Immediate medical response when you need it most",
      buttons: [
        {
          text: `Emergency: ${CONTACT_INFO.phoneNumbers.emergencyFormatted}`,
          variant: "default",
          href: `tel:${CONTACT_INFO.phoneNumbers.emergency}`,
          onClick: () => { if (typeof window !== 'undefined') window.location.href = `tel:${CONTACT_INFO.phoneNumbers.emergency}` }
        },
        {
          text: `Direct Call: ${CONTACT_INFO.phoneNumbers.primaryFormatted}`,
          variant: "outline",
          href: `tel:${CONTACT_INFO.phoneNumbers.primary}`,
          onClick: () => { if (typeof window !== 'undefined') window.location.href = `tel:${CONTACT_INFO.phoneNumbers.primary}` }
        }
      ]
    }
  }

  export const dietaryData: SupportServiceProps = {
    heroImage: "/department/dietary-banner.png",
    title: "Dietary Services",
    description: "Nutritional care for health and recovery",
    services: [
      {
        id: "meal-planning",
        title: "Meal Planning",
        description: "Customized nutrition plans",
        icon: FaXRay,
        details: "Dietitian-designed meals for specific health conditions",
        commonUses: ["Diabetes management", "Cardiac diets", "Post-surgical nutrition"]
      },
      {
        id: "therapeutic-diets",
        title: "Therapeutic Diets",
        description: "Specialized meal preparation",
        icon: FaXRay,
        details: "Meals tailored to medical requirements",
        commonUses: ["Renal diets", "Pureed diets", "Allergy-safe meals"]
      }
    ],
    preparationTips: [
      "Consult with dietitian",
      "Provide medical history",
      "Communicate food preferences",
      "Note any allergies",
      "Follow meal schedule"
    ],
    whyChoose: {
      title: "Why Our Dietary Service?",
      items: [
        {
          badge: "1",
          title: "Certified Dietitians",
          description: "Board-certified nutrition experts"
        },
        {
          badge: "2",
          title: "Fresh Ingredients",
          description: "Daily prepared meals from local sources"
        },
        {
          badge: "3",
          title: "Customized Plans",
          description: "Personalized for health conditions"
        }
      ]
    },
    faqs: [
      {
        question: "Can family members order meals?",
        answer: "Yes, guest meals are available for purchase"
      },
      {
        question: "How are special dietary needs accommodated?",
        answer: "Our dietitians create individualized meal plans"
      }
    ],
    cta: {
      title: "Nutritional Support",
      description: "Helping patients heal through proper nutrition",
      buttons: [
        {
          text: `Call Dietitian: ${CONTACT_INFO.phoneNumbers.primaryFormatted}`,
          variant: "default",
          href: `tel:${CONTACT_INFO.phoneNumbers.primary}`,
          onClick: () => { if (typeof window !== 'undefined') window.location.href = `tel:${CONTACT_INFO.phoneNumbers.primary}` }
        },
        {
          text: "Request Callback",
          variant: "outline",
          href: "/contact",
          onClick: () => { if (typeof window !== 'undefined') window.location.href = "/contact" }
        }
      ]
    }
  }



  export const securityData: SupportServiceProps = {
  heroImage: "/department/security-banner.png",
  title: "Security Services",
  description: "Ensuring a safe environment for all",
  services: [
    {
      id: "patrols",
      title: "Facility Patrols",
      description: "24/7 monitoring",
      icon: FaXRay,
      details: "Regular rounds of all hospital areas",
      commonUses: ["Building security", "Parking lot safety", "Emergency response"]
    },
    {
      id: "access-control",
      title: "Access Control",
      description: "Restricted area management",
      icon: FaXRay,
      details: "Secure entry to sensitive locations",
      commonUses: ["NICU access", "Pharmacy security", "Staff areas"]
    }
  ],
  preparationTips: [
    "Wear visible ID at all times",
    "Report suspicious activity",
    "Don't prop open secure doors",
    "Park in well-lit areas",
    "Secure personal belongings"
  ],
  whyChoose: {
    title: "Why Our Security?",
    items: [
      {
        badge: "1",
        title: "Trained Officers",
        description: "Law enforcement experienced personnel"
      },
      {
        badge: "2",
        title: "Rapid Response",
        description: "90-second emergency response time"
      },
      {
        badge: "3",
        title: "Comprehensive Coverage",
        description: "Camera monitoring and physical patrols"
      }
    ]
  },
  faqs: [
    {
      question: "How do I report a security concern?",
      answer: "Use any emergency phone or contact the front desk"
    },
    {
      question: "Are weapons allowed on premises?",
      answer: "Only by authorized law enforcement personnel"
    }
  ],
  cta: {
    title: "Your Safety First",
    description: "Dedicated to protecting patients, staff and visitors",
    buttons: [
      {
        text: `Emergency: ${CONTACT_INFO.phoneNumbers.emergencyFormatted}`,
        variant: "default",
        href: `tel:${CONTACT_INFO.phoneNumbers.emergency}`,
        onClick: () => { if (typeof window !== 'undefined') window.location.href = `tel:${CONTACT_INFO.phoneNumbers.emergency}` }
      },
      {
        text: `Security Desk: ${CONTACT_INFO.phoneNumbers.primaryFormatted}`,
        variant: "outline",
        href: `tel:${CONTACT_INFO.phoneNumbers.primary}`,
        onClick: () => { if (typeof window !== 'undefined') window.location.href = `tel:${CONTACT_INFO.phoneNumbers.primary}` }
      }
    ]
  }
}

export const useBloodBankData = (): SupportServiceProps => {
  const t = useTranslations("supportServicesData.bloodBank");

  return {
    heroImage: "/department/blood-bank-banner.png",
    title: t("title"),
    description: t("description"),
    services: [
      {
        id: "donation",
        title: t("services.donation.title"),
        description: t("services.donation.description"),
        icon: FaHandHoldingDroplet,
        details: t("services.donation.details"),
        commonUses: t.raw("services.donation.commonUses"),
      },
      {
        id: "storage",
        title: t("services.storage.title"),
        description: t("services.storage.description"),
        icon: FaHandHoldingDroplet,
        details: t("services.storage.details"),
        commonUses: t.raw("services.storage.commonUses"),
      },
    ],
    preparationTips: t.raw("preparationTips"),
    whyChoose: {
      title: t("whyChoose.title"),
      items: [
        {
          badge: "1",
          title: t("whyChoose.items.safeProcessing.title"),
          description: t("whyChoose.items.safeProcessing.description"),
        },
        {
          badge: "2",
          title: t("whyChoose.items.availability.title"),
          description: t("whyChoose.items.availability.description"),
        },
        {
          badge: "3",
          title: t("whyChoose.items.quickTurnaround.title"),
          description: t("whyChoose.items.quickTurnaround.description"),
        },
      ],
    },
    faqs: [
      {
        question: t("faqs.frequency.question"),
        answer: t("faqs.frequency.answer"),
      },
      {
        question: t("faqs.safety.question"),
        answer: t("faqs.safety.answer"),
      },
    ],
    cta: {
      title: t("cta.title"),
      description: t("cta.description"),
      buttons: [
        {
          text: `${t("cta.emergencyMeds")}: ${CONTACT_INFO.phoneNumbers.primaryFormatted}`,
          variant: "default",
          href: `tel:${CONTACT_INFO.phoneNumbers.primary}`,
          onClick: () => {
            if (typeof window !== "undefined")
              window.location.href = `tel:${CONTACT_INFO.phoneNumbers.primary}`;
          },
        },
        {
          text: t("cta.requestCallback"),
          variant: "outline",
          href: "/contact",
          onClick: () => {
            if (typeof window !== "undefined")
              window.location.href = "/contact";
          },
        },
      ],
    },
  };
};

export const useDietaryData = (): SupportServiceProps => {
  const t = useTranslations("supportServicesData.dietary");

  return {
    heroImage: "/department/dietary-banner.png",
    title: t("title"),
    description: t("description"),
    services: [
      {
        id: "meal-planning",
        title: t("services.mealPlanning.title"),
        description: t("services.mealPlanning.description"),
        icon: FaUtensils,
        details: t("services.mealPlanning.details"),
        commonUses: t.raw("services.mealPlanning.commonUses"),
      },
      {
        id: "therapeutic-diets",
        title: t("services.therapeuticDiets.title"),
        description: t("services.therapeuticDiets.description"),
        icon: FaUtensils,
        details: t("services.therapeuticDiets.details"),
        commonUses: t.raw("services.therapeuticDiets.commonUses"),
      },
    ],
    preparationTips: t.raw("preparationTips"),
    whyChoose: {
      title: t("whyChoose.title"),
      items: [
        {
          badge: "1",
          title: t("whyChoose.items.certifiedDietitians.title"),
          description: t("whyChoose.items.certifiedDietitians.description"),
        },
        {
          badge: "2",
          title: t("whyChoose.items.freshIngredients.title"),
          description: t("whyChoose.items.freshIngredients.description"),
        },
        {
          badge: "3",
          title: t("whyChoose.items.customizedPlans.title"),
          description: t("whyChoose.items.customizedPlans.description"),
        },
      ],
    },
    faqs: [
      {
        question: t("faqs.familyMeals.question"),
        answer: t("faqs.familyMeals.answer"),
      },
      {
        question: t("faqs.specialNeeds.question"),
        answer: t("faqs.specialNeeds.answer"),
      },
    ],
    cta: {
      title: t("cta.title"),
      description: t("cta.description"),
      buttons: [
        {
          text: `${t("cta.emergencyMeds")}: ${CONTACT_INFO.phoneNumbers.primaryFormatted}`,
          variant: "default",
          href: `tel:${CONTACT_INFO.phoneNumbers.primary}`,
          onClick: () => {
            if (typeof window !== "undefined")
              window.location.href = `tel:${CONTACT_INFO.phoneNumbers.primary}`;
          },
        },
        {
          text: t("cta.requestCallback"),
          variant: "outline",
          href: "/contact",
          onClick: () => {
            if (typeof window !== "undefined")
              window.location.href = "/contact";
          },
        },
      ],
    },
  };
};

export const useSecurityData = (): SupportServiceProps => {
  const t = useTranslations("supportServicesData.security");

  return {
    heroImage: "/department/security-banner.png",
    title: t("title"),
    description: t("description"),
    services: [
      {
        id: "patrols",
        title: t("services.patrols.title"),
        description: t("services.patrols.description"),
        icon: FaShieldHalved,
        details: t("services.patrols.details"),
        commonUses: t.raw("services.patrols.commonUses"),
      },
      {
        id: "access-control",
        title: t("services.accessControl.title"),
        description: t("services.accessControl.description"),
        icon: FaShieldHalved,
        details: t("services.accessControl.details"),
        commonUses: t.raw("services.accessControl.commonUses"),
      },
    ],
    preparationTips: t.raw("preparationTips"),
    whyChoose: {
      title: t("whyChoose.title"),
      items: [
        {
          badge: "1",
          title: t("whyChoose.items.trainedOfficers.title"),
          description: t("whyChoose.items.trainedOfficers.description"),
        },
        {
          badge: "2",
          title: t("whyChoose.items.rapidResponse.title"),
          description: t("whyChoose.items.rapidResponse.description"),
        },
        {
          badge: "3",
          title: t("whyChoose.items.comprehensiveCoverage.title"),
          description: t("whyChoose.items.comprehensiveCoverage.description"),
        },
      ],
    },
    faqs: [
      {
        question: t("faqs.reportConcern.question"),
        answer: t("faqs.reportConcern.answer"),
      },
      {
        question: t("faqs.weaponsAllowed.question"),
        answer: t("faqs.weaponsAllowed.answer"),
      },
    ],
    cta: {
      title: t("cta.title"),
      description: t("cta.description"),
      buttons: [
        {
          text: `${t("cta.emergencyMeds")}: ${CONTACT_INFO.phoneNumbers.emergencyFormatted}`,
          variant: "default",
          href: `tel:${CONTACT_INFO.phoneNumbers.emergency}`,
          onClick: () => {
            if (typeof window !== "undefined")
              window.location.href = `tel:${CONTACT_INFO.phoneNumbers.emergency}`;
          },
        },
        {
          text: `${t("cta.requestCallback")}: ${CONTACT_INFO.phoneNumbers.primaryFormatted}`,
          variant: "outline",
          href: `tel:${CONTACT_INFO.phoneNumbers.primary}`,
          onClick: () => {
            if (typeof window !== "undefined")
              window.location.href = `tel:${CONTACT_INFO.phoneNumbers.primary}`;
          },
        },
      ],
    },
  };
};

export const useAmbulanceData = (): SupportServiceProps => {
  const t = useTranslations("supportServicesData.ambulance");

  return {
    heroImage: "/department/ambulance-service-banner.png",
    title: t("title"),
    description: t("description"),
    services: [
      {
        id: "als",
        title: t("services.als.title"),
        description: t("services.als.description"),
        icon: FaTruckMedical,
        details: t("services.als.details"),
        commonUses: t.raw("services.als.commonUses"),
      },
      {
        id: "bls",
        title: t("services.bls.title"),
        description: t("services.bls.description"),
        icon: FaTruckMedical,
        details: t("services.bls.details"),
        commonUses: t.raw("services.bls.commonUses"),
      },
    ],
    preparationTips: t.raw("preparationTips"),
    whyChoose: {
      title: t("whyChoose.title"),
      items: [
        {
          badge: "1",
          title: t("whyChoose.items.quickResponse.title"),
          description: t("whyChoose.items.quickResponse.description"),
        },
        {
          badge: "2",
          title: t("whyChoose.items.advancedEquipment.title"),
          description: t("whyChoose.items.advancedEquipment.description"),
        },
        {
          badge: "3",
          title: t("whyChoose.items.trainedStaff.title"),
          description: t("whyChoose.items.trainedStaff.description"),
        },
      ],
    },
    faqs: [
      {
        question: t("faqs.emergencyNumber.question"),
        answer: t("faqs.emergencyNumber.answer"),
      },
      {
        question: t("faqs.interHospital.question"),
        answer: t("faqs.interHospital.answer"),
      },
    ],
    cta: {
      title: t("cta.title"),
      description: t("cta.description"),
      buttons: [
        {
          text: `${t("cta.emergencyMeds")}: ${CONTACT_INFO.phoneNumbers.emergencyFormatted}`,
          variant: "default",
          href: `tel:${CONTACT_INFO.phoneNumbers.emergency}`,
          onClick: () => {
            if (typeof window !== "undefined")
              window.location.href = `tel:${CONTACT_INFO.phoneNumbers.emergency}`;
          },
        },
        {
          text: `${t("cta.requestCallback")}: ${CONTACT_INFO.phoneNumbers.primaryFormatted}`,
          variant: "outline",
          href: `tel:${CONTACT_INFO.phoneNumbers.primary}`,
          onClick: () => {
            if (typeof window !== "undefined")
              window.location.href = `tel:${CONTACT_INFO.phoneNumbers.primary}`;
          },
        },
      ],
    },
  };
};

export const usePhysiotherapyData = (): SupportServiceProps => {
  const t = useTranslations("supportServicesData.physiotherapy");

  return {
    heroImage: "/physio-hero.jpg",
    title: t("title"),
    description: t("description"),
    services: [
      {
        id: "ortho",
        title: t("services.ortho.title"),
        description: t("services.ortho.description"),
        icon: FaPersonWalking,
        details: t("services.ortho.details"),
        commonUses: t.raw("services.ortho.commonUses"),
      },
      {
        id: "neuro",
        title: t("services.neuro.title"),
        description: t("services.neuro.description"),
        icon: FaPersonWalking,
        details: t("services.neuro.details"),
        commonUses: t.raw("services.neuro.commonUses"),
      },
    ],
    preparationTips: t.raw("preparationTips"),
    whyChoose: {
      title: t("whyChoose.title"),
      items: [
        {
          badge: "1",
          title: t("whyChoose.items.personalizedPlans.title"),
          description: t("whyChoose.items.personalizedPlans.description"),
        },
        {
          badge: "2",
          title: t("whyChoose.items.modernEquipment.title"),
          description: t("whyChoose.items.modernEquipment.description"),
        },
        {
          badge: "3",
          title: t("whyChoose.items.experiencedTherapists.title"),
          description: t("whyChoose.items.experiencedTherapists.description"),
        },
      ],
    },
    faqs: [
      {
        question: t("faqs.sessionLength.question"),
        answer: t("faqs.sessionLength.answer"),
      },
      {
        question: t("faqs.referral.question"),
        answer: t("faqs.referral.answer"),
      },
    ],
    cta: {
      title: t("cta.title"),
      description: t("cta.description"),
      buttons: [
        {
          text: `${t("cta.emergencyMeds")}: ${CONTACT_INFO.phoneNumbers.primaryFormatted}`,
          variant: "default",
          href: `tel:${CONTACT_INFO.phoneNumbers.primary}`,
          onClick: () => {
            if (typeof window !== "undefined")
              window.location.href = `tel:${CONTACT_INFO.phoneNumbers.primary}`;
          },
        },
        {
          text: t("cta.requestCallback"),
          variant: "outline",
          href: "/contact",
          onClick: () => {
            if (typeof window !== "undefined")
              window.location.href = "/contact";
          },
        },
      ],
    },
  };
};
