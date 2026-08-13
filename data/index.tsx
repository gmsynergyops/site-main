import { MenuItemProps, OPD, PressRelease, TestimonialItem } from "@/types";
import { useTranslations } from 'next-intl';

export const MAIN_URL = "/videos/homepage-main/m1v.webm"
export const MOBILE_MAIN_URL = "/videos/homepage-main/m2v.mp4"

export const useMenuItems = () => {
    const t = useTranslations('menu');

    const menuItems: MenuItemProps[] = [
        {
            label: t('discoverSynergy'),
            pages: [
                {
                    name: t('sections.synergyStory.name'),
                    links: [
                        { label: t('sections.synergyStory.links.overview'), href: "/the-synergy-story#Overview" },
                        { label: t('sections.synergyStory.links.ourVision'), href: "/the-synergy-story#Our-Vision" },
                        { label: t('sections.synergyStory.links.ourMission'), href: "/the-synergy-story#Our-Mission" },
                        { label: t('sections.synergyStory.links.leadership'), href: "/the-synergy-story#Leadership" },
                        { label: t('sections.synergyStory.links.achievements'), href: "/the-synergy-story#Awards-and-Accolades" },
                        { label: t('sections.synergyStory.links.milestones'), href: "/the-synergy-story#Achievements-and-Milestones" },
                        { label: t('sections.synergyStory.links.awards'), href: "/the-synergy-story#Awards-and-Accolades" },
                        { label: t('sections.synergyStory.links.lifeAtSynergy'), href: "/the-synergy-story#A-Day-at-Synergy" },
                    ],
                },
                {
                    name: t('sections.ourDoctors.name'),
                    links: [
                        { label: t('sections.ourDoctors.links.drAlokTiwari'), href: "/leadership/Dr-Alok-Tiwari" },
                        { label: t('sections.ourDoctors.links.drSaurabhMishra'), href: "/leadership/Dr-Saurabh-Mishra" },
                        { label: t('sections.ourDoctors.links.drAnjaliJain'), href: "/leadership/Dr-Anjali-Jain" },
                        { label: t('sections.ourDoctors.links.seeAll'), href: "/doctors/all" },
                    ],
                },
                {
                    name: t('sections.centersDetails.name'),
                    links: [
                        { label: t('sections.centersDetails.links.centersNetwork'), href: "/centers/network" },
                        { label: t('sections.centersDetails.links.outstationSupport'), href: "/centers/outstation-support" },
                        { label: t('sections.centersDetails.links.findCenter'), href: "/centers/find-center" },
                    ],
                },
                {
                    name: t('sections.mediaCenter.name'),
                    links: [
                        { label: t('sections.mediaCenter.links.inTheNews'), href: "/media-center#synergy-in-the-news" },
                        { label: t('sections.mediaCenter.links.pressReleases'), href: "/media-center#press-releases" },
                        // { label: t('sections.mediaCenter.links.events'), href: "/media-center#events" },
                        { label: t('sections.mediaCenter.links.mediaGallery'), href: "/media-center#media-gallery" },
                        // { label: t('sections.mediaCenter.links.mediaContact'), href: "/media-center#media-contacts" },
                    ],
                },
                {
                    name: t('sections.termsPrivacy.name'),
                    links: [
                        { label: t('sections.termsPrivacy.links.privacyPolicy'), href: "/privacy-policy" },
                        { label: t('sections.termsPrivacy.links.termsConditions'), href: "/terms-and-conditions" },
                    ],
                },
                {
                    name: "Contact Us",
                    links: [
                        {label: "Synergy Contacts", href: "/contact"}
                    ]
                }
            ],
        },
        {
            label: t('medicalServices'),
            pages: [
                {
                    name: t('sections.specialties.name'),
                    links: [
                        { label: t('sections.specialties.links.surgicalOncology'), href: "/services/surgical-oncology" },
                        { label: t('sections.specialties.links.medicalOncology'), href: "/services/medical-oncology" },
                        { label: t('sections.specialties.links.radiationOncology'), href: "/services/radiation-oncology" },
                        { label: t('sections.specialties.links.gynecology'), href: "/services/gynecology" },
                        { label: t('sections.specialties.links.pediatrics'), href: "/services/pediatrics" },
                        { label: t('sections.specialties.links.urology'), href: "/services/urology" },
                        { label: t('sections.specialties.links.neurology'), href: "/services/neurology" },
                        { label: t('sections.specialties.links.neurosurgery'), href: "/services/neurosurgery" },
                        { label: t('sections.specialties.links.gastroenterology'), href: "/services/gastroenterology" },
                        { label: t('sections.specialties.links.nephrology'), href: "/services/nephrology" },
                        { label: t('sections.specialties.links.orthopedics'), href: "/services/orthopedics" },
                        { label: t('sections.specialties.links.anesthesia'), href: "/services/anesthesia" },
                        { label: t('sections.specialties.links.generalSurgery'), href: "/services/general-surgery" },
                        { label: t('sections.specialties.links.headNeck'), href: "/services/head-and-neck" },
                        { label: t('sections.specialties.links.emergency'), href: "/services/emergency-and-critical-care" },
                        { label: t('sections.specialties.links.palliativeCare'), href: "/services/pain-and-palliative-care" },
                        { label: t('sections.specialties.links.viewAll'), href: "/services/all" },
                    ]
                },
                {
                    name: t('sections.supportServices.name'),
                    links: [
                        { label: t('sections.supportServices.links.pharmacy'), href: "/services/pharmacy" },
                        { label: t('sections.supportServices.links.bloodBank'), href: "/services/blood-bank" },
                        { label: t('sections.supportServices.links.dietary'), href: "/services/dietary" },
                        { label: t('sections.supportServices.links.laundry'), href: "/services/laundry" },
                        { label: t('sections.supportServices.links.houseKeeping'), href: "/services/house-keeping" },
                        { label: t('sections.supportServices.links.security'), href: "/services/Security" },
                        { label: t('sections.supportServices.links.ambulance'), href: "/services/ambulance" },
                        { label: t('sections.supportServices.links.viewAll'), href: "/services/support-services" }
                    ]
                },
                {
                    name: t('sections.diagnosticServices.name'),
                    links: [
                        { label: t('sections.diagnosticServices.links.diagnosticImaging'), href: "/services/diagnostic-imaging" },
                        { label: t('sections.diagnosticServices.links.dialysis'), href: "/services/dialysis" },
                        { label: t('sections.diagnosticServices.links.radiology'), href: "/services/radiology" },
                        { label: t('sections.diagnosticServices.links.pathology'), href: "/services/pathology" },
                        { label: t('sections.diagnosticServices.links.microbiology'), href: "/services/microbiology" },
                        { label: t('sections.diagnosticServices.links.biochemistry'), href: "/services/biochemistry" },
                        { label: t('sections.diagnosticServices.links.viewAll'), href: "/services/diagnostic-services" }
                    ]
                },
                {
                    name: t('sections.specializedServices.name'),
                    links: [
                        { label: t('sections.specializedServices.links.icu'), href: "/services/specialized-services#icu" },
                        // { label: t('sections.specializedServices.links.nicu'), href: "/services/specialized-services#nicu" },
                        { label: t('sections.specializedServices.links.ot'), href: "/services/specialized-services#ot" },
                        // { label: t('sections.specializedServices.links.endoscopy'), href: "/services/specialized-services#endoscopy" },
                        { label: t('sections.specializedServices.links.physiotherapy'), href: "/services/specialized-services#physiotherapy" },
                        { label: t('sections.specializedServices.links.viewAll'), href: "/services/specialized-services" }
                    ]
                },
                {
                    name: t('sections.administrativeServices.name'),
                    links: [
                        { label: t('sections.administrativeServices.links.admission'), href: "/services/admission-and-discharge" },
                        // { label: t('sections.administrativeServices.links.billing'), href: "/services/billing-and-insurance" },
                        { label: t('sections.administrativeServices.links.medicalRecords'), href: "/services/medical-records" },
                    ]
                },
                {
                    name: t('sections.patientCare.name'),
                    links: [
                        { label: t('sections.patientCare.links.secondOpinion'), href: "/patient-care/second-opinion" },
                        { label: t('sections.patientCare.links.emergency'), href: "/patient-care/emergency" },
                        { label: t('sections.patientCare.links.inPatient'), href: "/patient-care/in-patient" },
                        { label: t('sections.patientCare.links.outPatient'), href: "/patient-care/out-patient" },
                        { label: t('sections.patientCare.links.healthChecks'), href: "/patient-care/health-checks" },
                    ]
                },
                {
                    name: t('sections.insurance.name'),
                    links: [
                        { label: t('sections.insurance.links.insuranceServices'), href: "/patient-care/insurance" }
                    ]
                }
            ]
        },
        {
            label: t('healthLibrary'),
            pages: [
                {
                    name: t('sections.cancerTypes.name'),
                    links: [
                        { label: t('sections.cancerTypes.links.adrenalCancer'), href: "/health-library/adrenal-cancer" },
                        { label: t('sections.cancerTypes.links.analCancer'), href: "/health-library/anal-cancer" },
                        { label: t('sections.cancerTypes.links.bileDuctCancer'), href: "/health-library/bile-duct-cancer" },
                        { label: t('sections.cancerTypes.links.bladderCancer'), href: "/health-library/bladder-cancer" },
                        { label: t('sections.cancerTypes.links.bloodCancer'), href: "/health-library/blood-cancer" },
                        { label: t('sections.cancerTypes.links.boneCancer'), href: "/health-library/bone-cancer" },
                        { label: t('sections.cancerTypes.links.brainCancer'), href: "/health-library/brain-cancer" },
                        { label: t('sections.cancerTypes.links.breastCancer'), href: "/health-library/breast-cancer" },
                        { label: t('sections.cancerTypes.links.breastCancerMen'), href: "/health-library/breast-cancer-in-men" },
                        { label: t('sections.cancerTypes.links.cervicalCancer'), href: "/health-library/cervical-cancer" },
                        { label: t('sections.cancerTypes.links.colonRectalCancer'), href: "/health-library/colon-rectal-cancer" },
                        { label: t('sections.cancerTypes.links.endometrialCancer'), href: "/health-library/endometrial-cancer" },
                        { label: t('sections.cancerTypes.links.esophagealCancer'), href: "/health-library/esophageal-cancer" },
                        { label: t('sections.cancerTypes.links.eyeCancer'), href: "/health-library/eye-cancer" },
                        { label: t('sections.cancerTypes.links.gallbladderCancer'), href: "/health-library/gallbladder-cancer" },
                        { label: t('sections.cancerTypes.links.gastricCancer'), href: "/health-library/gastric-cancer" },
                        { label: t('sections.cancerTypes.links.headNeckCancer'), href: "/health-library/head-and-neck-cancer" },
                        { label: t('sections.cancerTypes.links.kidneyCancer'), href: "/health-library/kidney-cancer" },
                        { label: t('sections.cancerTypes.links.laryngealCancer'), href: "/health-library/laryngeal-cancer" },
                        { label: t('sections.cancerTypes.links.liverCancer'), href: "/health-library/liver-cancer" },
                        { label: t('sections.cancerTypes.links.lungCancer'), href: "/health-library/lung-cancer" },
                        { label: t('sections.cancerTypes.links.multipleMyeloma'), href: "/health-library/multiple-myeloma" },
                        { label: t('sections.cancerTypes.links.neuroendocrineTumors'), href: "/health-library/neuroendocrine-tumors" },
                        { label: t('sections.cancerTypes.links.nonHodgkinLymphoma'), href: "/health-library/non-hodgkin-lymphoma" },
                        { label: t('sections.cancerTypes.links.oralCancer'), href: "/health-library/oral-cancer" },
                        { label: t('sections.cancerTypes.links.ovarianCancer'), href: "/health-library/ovarian-cancer" },
                        { label: t('sections.cancerTypes.links.pancreaticCancer'), href: "/health-library/pancreatic-cancer" },
                        { label: t('sections.cancerTypes.links.penileCancer'), href: "/health-library/penile-cancer" },
                        { label: t('sections.cancerTypes.links.pituitaryTumors'), href: "/health-library/pituitary-tumors" },
                        { label: t('sections.cancerTypes.links.prostateCancer'), href: "/health-library/prostate-cancer" },
                        { label: t('sections.cancerTypes.links.salivaryGlandCancer'), href: "/health-library/salivary-gland-cancer" },
                        { label: t('sections.cancerTypes.links.skinCancer'), href: "/health-library/skin-cancer" },
                        { label: t('sections.cancerTypes.links.stomachCancer'), href: "/health-library/stomach-cancer" },
                        { label: t('sections.cancerTypes.links.uterineCancer'), href: "/health-library/uterine-cancer" },
                    ],
                },
                {
                    name: t('sections.patientEducation.name'),
                    links: [
                        { label: t('sections.patientEducation.links.prevention'), href: "/health-library/prevention" },
                        { label: t('sections.patientEducation.links.diagnosis'), href: "/health-library/diagnosis" },
                        { label: t('sections.patientEducation.links.treatments'), href: "/health-library/treatments" },
                        { label: t('sections.patientEducation.links.nutrition'), href: "/health-library/nutrition" },
                    ],
                },
                {
                    name: t('sections.faqs.name'),
                    links: [
                        { label: t('sections.faqs.links.general'), href: "/health-library/faqs#general" },
                        { label: t('sections.faqs.links.beforeVisit'), href: "/health-library/faqs#before-visit" },
                        { label: t('sections.faqs.links.duringTreatment'), href: "/health-library/faqs#during-treatment" },
                        { label: t('sections.faqs.links.afterTreatment'), href: "/health-library/faqs#after-treatment" },
                    ],
                },
            ],
        },
        {
            label: t('cancerCare'),
            pages: [
                {
                    name: t('sections.cancerCareComplete.name'),
                    links: [
                        { label: t('sections.cancerCareComplete.links.preventiveOncology'), href: "/cancer-care/preventive-oncology" },
                        { label: t('sections.cancerCareComplete.links.surgicalOncology'), href: "/cancer-care/surgical-oncology" },
                        { label: t('sections.cancerCareComplete.links.medicalOncology'), href: "/cancer-care/medical-oncology" },
                        { label: t('sections.cancerCareComplete.links.radiationOncology'), href: "/cancer-care/radiation-oncology" },
                    ]
                },
                {
                    name: t('sections.cancerCarePillars.name'),
                    links: [
                        { label: t('sections.cancerCarePillars.links.tumourBoard'), href: "/cancer-care/multidisciplinary-tumour-board" },
                        { label: t('sections.cancerCarePillars.links.advancedTech'), href: "/cancer-care/advanced-technology" },
                        { label: t('sections.cancerCarePillars.links.patientCentric'), href: "/cancer-care/patient-centric-care" },
                    ]
                }
            ]
        },
        {
            label: t('cancerSurvivors'),
            pages: [
                {
                    name: t('sections.storiesOfHope.name'),
                    links: [
                        { label: t('sections.storiesOfHope.links.cancerSurvivorMean'), href: "/survivors/cancer-survivor-mean" },
                        { label: t('sections.storiesOfHope.links.supportForFamilies'), href: "/survivors/support-for-families" },
                        { label: t('sections.storiesOfHope.links.testimonials'), href: "/survivors/testimonials" },
                        { label: t('sections.storiesOfHope.links.victoryStories'), href: "/survivors/victory-stories" },
                    ],
                },
            ],
        },
        {
            label: t('institute'),
            pages: [
                {
                    name: t('sections.instituteEducation.name'),
                    links: [
                        { label: t('sections.instituteEducation.links.overview'), href: "/institute/overview" },
                        { label: t('sections.instituteEducation.links.vision'), href: "/institute/vision" },
                    ]
                }
            ]
        },
        {
            label: "Careers",
            pages: [
                {
                    name: "Careers",
                    links: [
                        {label: "Join Synergy", href:"/careers"}
                    ]
                }
            ]
        }
    ];

    return menuItems;
};

export const useQuickLinks = () => {
    const t = useTranslations('quickLinks');

    return [
        {
            label: t('emergency.label'),
            value: t('emergency.value'),
            bg: "bg-red-50"
        },
        {
            label: t('contactNumbers.label'),
            value: t('contactNumbers.value'),
            bg: "bg-violet-50"
        },
        // {
        //     label: t('support.label'),
        //     value: t('support.value'),
        //     bg: "bg-teal-50"
        // },
        // {
        //     label: t('peripheralOpd.label'),
        //     value: t('peripheralOpd.value'),
        //     bg: "bg-yellow-50"
        // },
    ];
};

export const useTestimonials = () => {
    const t = useTranslations('testimonials');
    const testimonials: TestimonialItem[] = [
        {
            type: "written",
            name: t('mohammadWarisAli.name'),
            description: t('mohammadWarisAli.description'),
            image: "/patients/anita.jpeg",
        },
        {
            type: "video",
            image: "/patients/mrs-saroj-devi.png",
            videoUrl: "/videos/testimonials/mrs-saroj-devi.mp4",
        },
        {
            type: "written",
            name: t('parmatmaMishra.name'),
            description: t('parmatmaMishra.description'),
            image: "/patients/suresh.jpeg",
        },
        {
            type: "video",
            image: "/patients/mahaveeram.png",
            videoUrl: "/videos/testimonials/mahaveeram.mp4",
        },
        {
            type: "video",
            image: "/patients/mrs-neetu.png",
            videoUrl: "/videos/testimonials/mrs-neetu.mp4",
        },
        {
            type: "written",
            name: t('sohanPaswan.name'),
            description: t('sohanPaswan.description'),
            image: "/patients/suresh.jpeg",
        },
        {
            type: "written",
            name: t('govindVerma.name'),
            description: t('govindVerma.description'),
            image: "/patients/suresh.jpeg",
        },
        {
            type: "video",
            image: "/patients/siddhi-mishra.png",
            videoUrl: "/videos/testimonials/siddhi-mishra.mp4",
        },
        {
            type: "written",
            name: t('tigerKumar.name'),
            description: t('tigerKumar.description'),
            image: "/patients/suresh.jpeg",
        },
        {
            type: "video",
            image: "/patients/anita.jpeg",
            videoUrl: "/videos/testimonials/vid.mp4",
        },
        {
            type: "video",
            image: "/patients/mr-naresh-ram.png",
            videoUrl: "/videos/testimonials/mr-naresh-ram.mp4",
        },
        {
            type: "written",
            name: t('armanAli.name'),
            description: t('armanAli.description'),
            image: "/patients/suresh.jpeg",
        },
        {
            type: "video",
            image: "/patients/kalavati-devi.png",
            videoUrl: "/videos/testimonials/kalavati-devi.mp4",
        },
    ];
    return testimonials
};

export const useFaqItems = () => {
    const t = useTranslations('faqs.general');

    return [
        {
            question: t('appointment.question'),
            answer: t('appointment.answer'),
        },
        {
            question: t('specialist.question'),
            answer: t('specialist.answer'),
        },
        {
            question: t('secondOpinion.question'),
            answer: t('secondOpinion.answer'),
        },
        {
            question: t('bookingInfo.question'),
            answer: t('bookingInfo.answer'),
        },
        {
            question: t('emergency.question'),
            answer: t('emergency.answer'),
        },
        {
            question: t('insurance.question'),
            answer: t('insurance.answer'),
        },
        {
            question: t('medicalRecords.question'),
            answer: t('medicalRecords.answer'),
        },
        {
            question: t('accommodation.question'),
            answer: t('accommodation.answer'),
        },
        {
            question: t('reschedule.question'),
            answer: t('reschedule.answer'),
        },
        {
            question: t('interpreters.question'),
            answer: t('interpreters.answer'),
        },
        {
            question: t('safety.question'),
            answer: t('safety.answer'),
        },
        {
            question: t('specialties.question'),
            answer: t('specialties.answer'),
        },
    ];
};

export const useActions = () => {
    const t = useTranslations('actions');
    return [
        {
            icon: "/icons/online-appointment.png",
            label: t('bookAppointment.label'),
            onClick: () => { },
            className: "bg-teal-50 hover:bg-teal-100 transtion-all duration-300 ease-in-out"
        },
        {
            icon: "/icons/hospital.png",
            label: t('hospitals.label'),
            onClick: () => { },
            className: "bg-indigo-50 hover:bg-indigo-100 transtion-all duration-300 ease-in-out"
        },
        {
            icon: "/icons/phone.png",
            label: t('callUs.label'),
            onClick: () => { },
            className: "bg-pink-50 hover:bg-pink-100 transtion-all duration-300 ease-in-out"
        },
        {
            icon: "/icons/search-interface-symbol.png",
            label: t('search.label'),
            onClick: () => { },
            className: "bg-yellow-50 hover:bg-yellow-100 transtion-all duration-300 ease-in-out"
        },
    ];
};

export const useExcellenceItems = () => {
    const t = useTranslations('excellence.items');
    return [
        {
            question: t('quality.question'),
            answer: t('quality.answer')
        },
        {
            question: t('multidisciplinary.question'),
            answer: t('multidisciplinary.answer')
        },
        {
            question: t('affordable.question'),
            answer: t('affordable.answer')
        },
        {
            question: t('compassionate.question'),
            answer: t('compassionate.answer')
        },
        {
            question: t('innovation.question'),
            answer: t('innovation.answer')
        }
    ];
};

export const useGeneralQuestions = () => {
    const t = useTranslations('faqs.generalQuestions');
    return [
        {
            question: t('services.question'),
            answer: t('services.answer')
        },
        {
            question: t('operational.question'),
            answer: t('operational.answer')
        },
        {
            question: t('cancerTypes.question'),
            answer: t('cancerTypes.answer')
        },
        {
            question: t('walkIn.question'),
            answer: t('walkIn.answer')
        },
        {
            question: t('location.question'),
            answer: t('location.answer')
        },
        {
            question: t('doctors.question'),
            answer: t('doctors.answer')
        },
        {
            question: t('payment.question'),
            answer: t('payment.answer')
        },
        {
            question: t('insurance.question'),
            answer: t('insurance.answer')
        }
    ];
};

export const useBeforeVisitQuestions = () => {
    const t = useTranslations('faqs.beforeVisitQuestions');
    return [
        {
            question: t('appointment.question'),
            answer: t('appointment.answer')
        },
        {
            question: t('documents.question'),
            answer: t('documents.answer')
        },
        {
            question: t('secondOpinion.question'),
            answer: t('secondOpinion.answer')
        },
        {
            question: t('preparation.question'),
            answer: t('preparation.answer')
        },
        {
            question: t('cost.question'),
            answer: t('cost.answer')
        },
        {
            question: t('fasting.question'),
            answer: t('fasting.answer')
        },
        {
            question: t('familyMember.question'),
            answer: t('familyMember.answer')
        },
        {
            question: t('parking.question'),
            answer: t('parking.answer')
        }
    ];
};

export const useDuringTreatmentQuestions = () => {
    const t = useTranslations('faqs.duringTreatmentQuestions');
    return [
        {
            question: t('chemotherapy.question'),
            answer: t('chemotherapy.answer')
        },
        {
            question: t('sideEffects.question'),
            answer: t('sideEffects.answer')
        },
        {
            question: t('working.question'),
            answer: t('working.answer')
        },
        {
            question: t('admission.question'),
            answer: t('admission.answer')
        },
        {
            question: t('meals.question'),
            answer: t('meals.answer')
        },
        {
            question: t('supportServices.question'),
            answer: t('supportServices.answer')
        },
        {
            question: t('familyVisits.question'),
            answer: t('familyVisits.answer')
        },
        {
            question: t('careCoordinator.question'),
            answer: t('careCoordinator.answer')
        }
    ];
};

export const useAfterTreatmentQuestions = () => {
    const t = useTranslations('faqs.afterTreatmentQuestions');
    return [
        {
            question: t('followUp.question'),
            answer: t('followUp.answer')
        },
        {
            question: t('rehabilitation.question'),
            answer: t('rehabilitation.answer')
        },
        {
            question: t('sideEffects.question'),
            answer: t('sideEffects.answer')
        },
        {
            question: t('lifestyle.question'),
            answer: t('lifestyle.answer')
        },
        {
            question: t('recurrence.question'),
            answer: t('recurrence.answer')
        },
        {
            question: t('monitoring.question'),
            answer: t('monitoring.answer')
        },
        {
            question: t('medication.question'),
            answer: t('medication.answer')
        },
        {
            question: t('emotional.question'),
            answer: t('emotional.answer')
        }
    ];
};

export const useLeaders = () => {
    const t = useTranslations('leaders');

    return [
        {
            name: t('drAlokTiwari.name'),
            role: t('drAlokTiwari.role'),
            description: t('drAlokTiwari.description'),
            image: "/leaders/doc-alok-tiwari-with-background.jpg",
            onDownload: "/leaders/doc-alok-tiwari.webp",
            onReadMore: "/leadership/Dr-Alok-Tiwari"
        },
        {
            name: t('drAnjaliJain.name'),
            role: t('drAnjaliJain.role'),
            description: t('drAnjaliJain.description'),
            image: "/leaders/doc-anjali-jain-with-background.jpg",
            onDownload: '/leaders/doc-anjali-jain.webp',
            onReadMore: '/leadership/Dr-Anjali-Jain'
        },
        {
            name: t('drSaurabhMishra.name'),
            role: t('drSaurabhMishra.role'),
            description: t('drSaurabhMishra.description'),
            image: "/leaders/doc-saurabh-mishra-with-background.jpg",
            onDownload: "/leaders/doc-saurabh-mishra.webp",
            onReadMore: "/leadership/Dr-Saurabh-Mishra",
        },
    ];
};

export const useOPD_Data = () => {
    const t = useTranslations();

    const opdData: OPD[] = t.raw("opdData");

    return opdData;
}


export const pressReleases: PressRelease[] = [
    {
        id: 'ai-diagnostic-center',
        date: '2024-03-15',
        title: 'items.aiDiagnosticCenter.title',
        summary: 'items.aiDiagnosticCenter.summary',
        type: 'innovation',
        link: '/press-releases/ai-diagnostic-center',
        content: 'items.aiDiagnosticCenter.content'
    },
    {
        id: 'top-cancer-care',
        date: '2024-03-12',
        title: 'items.topCancerCare.title',
        summary: 'items.topCancerCare.summary',
        type: 'award',
        link: '/press-releases/top-cancer-care',
        content: 'items.topCancerCare.content'
    }
]

export const ContactUsMessage = encodeURIComponent("Hello, I would like to know more about your services.");
export const phoneNumber = "18005706595";

// Support services data with images
export const supportServices = [
    {
        id: 1,
        title: "Pharmacy",
        description: "24/7 pharmacy services providing all prescribed medications with expert pharmaceutical guidance and medication counseling.",
        link: "/pharmacy",
        image: "/images/pharmacy.webp",
    },
    {
        id: 2,
        title: "Blood Bank",
        description: "Fully equipped blood bank with component separation facility ensuring safe blood transfusion services and donor programs.",
        link: "/blood-bank",
        image: "/images/blood-bank.webp",
    },
    {
        id: 3,
        title: "Dietary Services",
        description: "Therapeutic meal planning and nutritional support tailored to patient needs by certified dietitians and nutrition specialists.",
        link: "/dietary-services",
        image: "/images/dietary-services.webp",
    },
    {
        id: 4,
        title: "Laundry Services",
        description: "Hospital-grade linen and personal laundry services with hygienic processing and sterilization standards.",
        link: "/laundry-services",
        image: "/images/laundry-services.webp",
    },
    {
        id: 5,
        title: "Housekeeping",
        description: "Professional cleaning and sanitation services maintaining highest standards of hospital hygiene and infection control.",
        link: "/housekeeping",
        image: "/images/housekeeping.webp",
    },
    {
        id: 6,
        title: "Security Services",
        description: "24/7 campus security with surveillance systems, access control, and emergency response teams for patient safety.",
        link: "/security-services",
        image: "/images/security-services.webp",
    },
    {
        id: 7,
        title: "Ambulance Services",
        description: "Advanced life support ambulances with trained EMT staff for emergency transport and inter-facility transfers.",
        link: "/ambulance-services",
        image: "/images/ambulance-services.webp",
    }
];
