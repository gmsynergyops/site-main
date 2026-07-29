import { DepartmentData } from "@/types";
import { useTranslations } from "next-intl";

export const useDepartmentData = () => {
    const t = useTranslations('DepartmentDataMegaArray')

    const departmentData: DepartmentData[] = [
        {
          id: 'medical-oncology',
          index: 0,
          name: t('MedicalOncology.name'),
          slug: 'medical-oncology',
          heroImage: '/department/medical-oncology.jpeg',
          bannerImage: '/department/medical-oncology-banner.jpeg',
          heroTitle: t('MedicalOncology.heroTitle'),
          isFeatured: true,
          heroSubtitle: t('MedicalOncology.heroSubtitle'),
          themeBgClass: 'bg-gradient-to-br from-blue-50 via-white to-sky-50', // Unique Light Blue
          overview: {
            title: "Our Medical Oncology Approach",
            description: [
              "Medical Oncology deals with cancer treatment using medicines.",
              "Our doctors treat cancer with therapies like chemotherapy, immunotherapy, and targeted treatment, depending on the patient’s condition."
            ],
            additionalSections: [
              {
                title: "We treat:",
                items: [
                  "Breast cancer",
                  "Lung cancer",
                  "Blood cancer",
                  "Gastrointestinal cancers",
                  "Other solid tumors"
                ]
              },
              {
                title: "How we help:",
                items: [
                  "Personalized cancer treatment plans",
                  "Day-care chemotherapy",
                  "Side-effect management",
                  "Regular monitoring and follow-up"
                ]
              },
              {
                title: "Why patients trust us:",
                items: [
                  "Experienced cancer specialists",
                  "Treatment decided by Tumour Board",
                  "Supportive care throughout treatment"
                ]
              },
              {
                title: "When to consult:",
                items: [
                  "Cancer diagnosis",
                  "During or after surgery",
                  "If cancer has spread or returned"
                ]
              }
            ]
          },
          treatments: {
            title: t('MedicalOncology.treatments.title'),
            items: [
              {
                title: t('MedicalOncology.treatments.items.chemotherapy.title'),
                description: t('MedicalOncology.treatments.items.chemotherapy.description')
              },
              {
                title: t('MedicalOncology.treatments.items.immunotherapy.title'),
                description: t('MedicalOncology.treatments.items.immunotherapy.description')
              },
              {
                title: t('MedicalOncology.treatments.items.targetedTherapy.title'),
                description: t('MedicalOncology.treatments.items.targetedTherapy.description')
              }
            ]
          },
          stats: {
            title: t('MedicalOncology.stats.title'),
            items: [
              {
                value: t('MedicalOncology.stats.items.patients.value'),
                label: t('MedicalOncology.stats.items.patients.label')
              },
              {
                value: t('MedicalOncology.stats.items.satisfaction.value'),
                label: t('MedicalOncology.stats.items.satisfaction.label')
              },
              {
                value: t('MedicalOncology.stats.items.trials.value'),
                label: t('MedicalOncology.stats.items.trials.label')
              },
              {
                value: t('MedicalOncology.stats.items.care.value'),
                label: t('MedicalOncology.stats.items.care.label')
              }
            ]
          },
          team: {
            title: t('MedicalOncology.team.title'),
            members: [
              {
                name: t('MedicalOncology.team.members.drSaurabh.name'),
                role: t('MedicalOncology.team.members.drSaurabh.role'),
                credentials: t('MedicalOncology.team.members.drSaurabh.credentials'),
                image: '/doctors/dr-saurabh-mishra.webp',
                specialty: t('MedicalOncology.team.members.drSaurabh.specialty')
              }
            ]
          },
          facilities: {
            title: t('MedicalOncology.facilities.title'),
            description: t('MedicalOncology.facilities.description'),
            features: [
              t('MedicalOncology.facilities.features.0'),
              t('MedicalOncology.facilities.features.1'),
              t('MedicalOncology.facilities.features.2'),
              t('MedicalOncology.facilities.features.3'),
              t('MedicalOncology.facilities.features.4')
            ],
            image: '/fallback-image.webp',
          },
          research: {
            title: t('MedicalOncology.research.title'),
            items: [
              {
                title: t('MedicalOncology.research.items.novelTherapies.title'),
                content: t('MedicalOncology.research.items.novelTherapies.content'),
                icon: 'flask'
              },
              {
                title: t('MedicalOncology.research.items.precisionMedicine.title'),
                content: t('MedicalOncology.research.items.precisionMedicine.content'),
                icon: 'dna'
              },
              {
                title: t('MedicalOncology.research.items.qualityOfLife.title'),
                content: t('MedicalOncology.research.items.qualityOfLife.content'),
                icon: 'heart'
              }
            ]
          },
          testimonials: {
            title: t('MedicalOncology.testimonials.title'),
            items: [
              {
                quote: t('MedicalOncology.testimonials.items.priya.quote'),
                author: t('MedicalOncology.testimonials.items.priya.author'),
                image: '/fallback-image.webp',
              },
              {
                quote: t('MedicalOncology.testimonials.items.rahul.quote'),
                author: t('MedicalOncology.testimonials.items.rahul.author'),
                image: '/fallback-image.webp',
              },
            ]
          },
          cta: {
            title: t('MedicalOncology.cta.title'),
            subtitle: t('MedicalOncology.cta.subtitle'),
            buttons: [
              {
                text: t('MedicalOncology.cta.buttons.appointment.text'),
                isPrimary: true,
              },
              {
                text: t('MedicalOncology.cta.buttons.learnMore.text'),
                isPrimary: false,
              }
            ]
          },
        },
        {
          id: 'surgical-oncology',
          index: 1,
          name: t('SurgicalOncology.name'),
          slug: 'surgical-oncology',
          heroImage: '/department/surgical-oncology.webp',
          bannerImage: '/department/surgical-oncology-banner.jpeg',
          heroTitle: t('SurgicalOncology.heroTitle'),
          isFeatured: true,
          heroSubtitle: t('SurgicalOncology.heroSubtitle'),
          themeBgClass: 'bg-gradient-to-br from-slate-100 via-white to-zinc-50', // Unique Slate
          overview: {
            title: "Our Surgical Oncology Approach",
            description: [
              "Surgical Oncology focuses on removing cancer through surgery.",
              "Our surgeons perform safe and advanced cancer surgeries with a focus on recovery and quality of life."
            ],
            additionalSections: [
              {
                title: "We handle:",
                items: [
                  "Tumor removal",
                  "Organ-specific cancer surgeries",
                  "Minimally invasive procedures"
                ]
              },
              {
                title: "How we help:",
                items: [
                  "Accurate diagnosis before surgery",
                  "Modern operation theatres",
                  "Post-surgery recovery care"
                ]
              },
              {
                title: "Why choose us:",
                items: [
                  "Organ-specific cancer surgeons",
                  "Multidisciplinary approach",
                  "Less pain, faster recovery"
                ]
              }
            ]
          },
          treatments: {
            title: t('SurgicalOncology.treatments.title'),
            items: [
              {
                title: t('SurgicalOncology.treatments.items.complexSurgeries.title'),
                description: t('SurgicalOncology.treatments.items.complexSurgeries.description')
              },
              {
                title: t('SurgicalOncology.treatments.items.laparoscopicSurgery.title'),
                description: t('SurgicalOncology.treatments.items.laparoscopicSurgery.description')
              },
              {
                title: t('SurgicalOncology.treatments.items.organPreserving.title'),
                description: t('SurgicalOncology.treatments.items.organPreserving.description')
              }
            ]
          },
          stats: {
            title: t('SurgicalOncology.stats.title'),
            items: [
              {
                value: t('SurgicalOncology.stats.items.surgeries.value'),
                label: t('SurgicalOncology.stats.items.surgeries.label')
              },
              {
                value: t('SurgicalOncology.stats.items.experience.value'),
                label: t('SurgicalOncology.stats.items.experience.label')
              },
              {
                value: t('SurgicalOncology.stats.items.satisfaction.value'),
                label: t('SurgicalOncology.stats.items.satisfaction.label')
              },
              {
                value: t('SurgicalOncology.stats.items.procedures.value'),
                label: t('SurgicalOncology.stats.items.procedures.label')
              }
            ]
          },
          team: {
            title: t('SurgicalOncology.team.title'),
            members: [
              {
                name: t('SurgicalOncology.team.members.drAlok.name'),
                role: t('SurgicalOncology.team.members.drAlok.role'),
                credentials: t('SurgicalOncology.team.members.drAlok.credentials'),
                image: '/doctors/dr-alok-tiwari.webp',
                specialty: t('SurgicalOncology.team.members.drAlok.specialty')
              }
            ]
          },
          facilities: {
            title: t('SurgicalOncology.facilities.title'),
            description: t('SurgicalOncology.facilities.description'),
            features: [
              t('SurgicalOncology.facilities.features.0'),
              t('SurgicalOncology.facilities.features.1'),
              t('SurgicalOncology.facilities.features.2'),
              t('SurgicalOncology.facilities.features.3'),
              t('SurgicalOncology.facilities.features.4')
            ],
            image: '/department/surgical-oncology-facilities.webp',
          },
          research: {
            title: t('SurgicalOncology.research.title'),
            items: [
              {
                title: t('SurgicalOncology.research.items.precisionOncology.title'),
                content: t('SurgicalOncology.research.items.precisionOncology.content'),
                icon: 'flask'
              },
              {
                title: t('SurgicalOncology.research.items.biobankGenomics.title'),
                content: t('SurgicalOncology.research.items.biobankGenomics.content'),
                icon: 'dna'
              },
              {
                title: t('SurgicalOncology.research.items.aiDetection.title'),
                content: t('SurgicalOncology.research.items.aiDetection.content'),
                icon: 'cpu'
              }
            ]
          },
          testimonials: {
            title: t('SurgicalOncology.testimonials.title'),
            items: [
              {
                quote: t('SurgicalOncology.testimonials.items.sophia.quote'),
                author: t('SurgicalOncology.testimonials.items.sophia.author'),
                image: '/fallback-image.webp',
              },
              {
                quote: t('SurgicalOncology.testimonials.items.james.quote'),
                author: t('SurgicalOncology.testimonials.items.james.author'),
                image: '/fallback-image.webp',
              },
            ]
          },
          cta: {
            title: t('SurgicalOncology.cta.title'),
            subtitle: t('SurgicalOncology.cta.subtitle'),
            buttons: [
              {
                text: t('SurgicalOncology.cta.buttons.appointment.text'),
                isPrimary: true,
              },
              {
                text: t('SurgicalOncology.cta.buttons.contact.text'),
                isPrimary: false,
              }
            ]
          },
        },
        {
            id: 'gynecology',
            index: 11,
            name: t('Gynecology.name'),
            slug: 'gynecology',
            heroImage: '/department/gynaecology.webp',
            bannerImage: '/department/gynae-banner.jpeg',
            heroTitle: t('Gynecology.heroTitle'),
            heroSubtitle: t('Gynecology.heroSubtitle'),
            isFeatured: true,
            themeBgClass: 'bg-gradient-to-br from-rose-50 via-white to-pink-50', // Unique Pink
            overview: {
              title: "Our Gynecology & Obstetrics Approach",
              description: [
                "We care for women at every stage of life.",
                "From pregnancy to complex gynecological problems, our doctors provide safe and respectful care."
              ],
              additionalSections: [
                {
                  title: "Services include:",
                  items: [
                    "Pregnancy and delivery care",
                    "Menstrual problems",
                    "PCOS and hormonal issues",
                    "Gynecological surgeries"
                  ]
                },
                {
                  title: "Why women trust us:",
                  items: [
                    "Experienced female doctors available",
                    "Safe delivery practices",
                    "Privacy and comfort"
                  ]
                }
              ]
            },
            treatments: {
              title: t('Gynecology.treatments.title'),
              items: [
                {
                  title: t('Gynecology.treatments.items.prenatalCare.title'),
                  description: t('Gynecology.treatments.items.prenatalCare.description')
                },
                {
                  title: t('Gynecology.treatments.items.gynecologicSurgery.title'),
                  description: t('Gynecology.treatments.items.gynecologicSurgery.description')
                },
                {
                  title: t('Gynecology.treatments.items.preventiveCare.title'),
                  description: t('Gynecology.treatments.items.preventiveCare.description')
                }
              ]
            },
            stats: {
              title: t('Gynecology.stats.title'),
              items: [
                {
                  value: t('Gynecology.stats.items.babiesDelivered.value'),
                  label: t('Gynecology.stats.items.babiesDelivered.label')
                },
                {
                  value: t('Gynecology.stats.items.surgeryRate.value'),
                  label: t('Gynecology.stats.items.surgeryRate.label')
                },
                {
                  value: t('Gynecology.stats.items.availability.value'),
                  label: t('Gynecology.stats.items.availability.label')
                },
                {
                  value: t('Gynecology.stats.items.experienceYears.value'),
                  label: t('Gynecology.stats.items.experienceYears.label')
                }
              ]
            },
            team: {
              title: t('Gynecology.team.title'),
              members: [
                {
                  name: t('Gynecology.team.members.drAnjali.name'),
                  role: t('Gynecology.team.members.drAnjali.role'),
                  credentials: t('Gynecology.team.members.drAnjali.credentials'),
                  image: '/doctors/dr-anjali-jain.webp',
                  specialty: t('Gynecology.team.members.drAnjali.specialty')
                }
              ]
            },
            facilities: {
              title: t('Gynecology.facilities.title'),
              description: t('Gynecology.facilities.description'),
              features: [
                t('Gynecology.facilities.features.0'),
                t('Gynecology.facilities.features.1'),
                t('Gynecology.facilities.features.2'),
                t('Gynecology.facilities.features.3'),
                t('Gynecology.facilities.features.4')
              ],
              image: '/fallback-image.webp'
            },
            research: {
              title: t('Gynecology.research.title'),
              items: [
                {
                  title: t('Gynecology.research.items.pregnancyOutcomes.title'),
                  content: t('Gynecology.research.items.pregnancyOutcomes.content'),
                  icon: 'flask'
                },
                {
                  title: t('Gynecology.research.items.minimallyInvasive.title'),
                  content: t('Gynecology.research.items.minimallyInvasive.content'),
                  icon: 'dna'
                },
                {
                  title: t('Gynecology.research.items.reproductiveHealth.title'),
                  content: t('Gynecology.research.items.reproductiveHealth.content'),
                  icon: 'cpu'
                }
              ]
            },
            testimonials: {
              title: t('Gynecology.testimonials.title'),
              items: [
                {
                  quote: t('Gynecology.testimonials.items.priya.quote'),
                  author: t('Gynecology.testimonials.items.priya.author'),
                  image: '/fallback-image.webp'
                },
                {
                  quote: t('Gynecology.testimonials.items.ananya.quote'),
                  author: t('Gynecology.testimonials.items.ananya.author'),
                  image: '/fallback-image.webp'
                }
              ]
            },
            cta: {
              title: t('Gynecology.cta.title'),
              subtitle: t('Gynecology.cta.subtitle'),
              buttons: [
                {
                  text: t('Gynecology.cta.buttons.appointment.text'),
                  isPrimary: true
                },
                {
                  text: t('Gynecology.cta.buttons.learnMore.text'),
                  isPrimary: false
                }
              ]
            }
          },
          {
            id: 'neurology',
            index: 2,
            name: t('Neurology.name'),
            slug: 'neurology',
            heroImage: '/department/neurology.jpeg',
            bannerImage: '/department/neurology-banner.webp',
            heroTitle: t('Neurology.heroTitle'),
            isFeatured: false,
            heroSubtitle: t('Neurology.heroSubtitle'),
            themeBgClass: 'bg-gradient-to-br from-indigo-50 via-white to-violet-50', // Unique Indigo
            overview: {
              title: "Our Neurology Approach",
              description: [
                "Neurology deals with brain, nerve, and spine problems."
              ],
              additionalSections: [
                {
                  title: "We treat:",
                  items: [
                    "Headache and migraine",
                    "Stroke",
                    "Epilepsy",
                    "Nerve weakness",
                    "Memory problems"
                  ]
                },
                {
                  title: "How we help:",
                  items: [
                    "Detailed brain and nerve evaluation",
                    "Medication-based treatment",
                    "Long-term neurological care"
                  ]
                }
              ]
            },
            treatments: {
              title: t('Neurology.treatments.title'),
              items: [
                {
                  title: t('Neurology.treatments.items.strokeCare.title'),
                  description: t('Neurology.treatments.items.strokeCare.description')
                },
                {
                  title: t('Neurology.treatments.items.epilepsy.title'),
                  description: t('Neurology.treatments.items.epilepsy.description')
                },
                {
                  title: t('Neurology.treatments.items.movementDisorders.title'),
                  description: t('Neurology.treatments.items.movementDisorders.description')
                }
              ]
            },
            stats: {
              title: t('Neurology.stats.title'),
              items: [
                {
                  value: t('Neurology.stats.items.evaluations.value'),
                  label: t('Neurology.stats.items.evaluations.label')
                },
                {
                  value: t('Neurology.stats.items.satisfaction.value'),
                  label: t('Neurology.stats.items.satisfaction.label')
                },
                {
                  value: t('Neurology.stats.items.strokeCare.value'),
                  label: t('Neurology.stats.items.strokeCare.label')
                },
                {
                  value: t('Neurology.stats.items.services.value'),
                  label: t('Neurology.stats.items.services.label')
                }
              ]
            },
            team: {
              title: t('Neurology.team.title'),
              members: [
                {
                  name: t('Neurology.team.members.drTripurari.name'),
                  role: t('Neurology.team.members.drTripurari.role'),
                  credentials: t('Neurology.team.members.drTripurari.credentials'),
                  image: '/doctors/dr-tripurari-pandey.webp',
                  specialty: t('Neurology.team.members.drTripurari.specialty')
                },
                {
                  name: t('Neurology.team.members.drAnurag.name'),
                  role: t('Neurology.team.members.drAnurag.role'),
                  credentials: t('Neurology.team.members.drAnurag.credentials'),
                  image: '/doctors/dr-anurag-singh.webp',
                  specialty: t('Neurology.team.members.drAnurag.specialty')
                }
              ]
            },
            facilities: {
              title: t('Neurology.facilities.title'),
              description: t('Neurology.facilities.description'),
              features: [
                t('Neurology.facilities.features.0'),
                t('Neurology.facilities.features.1'),
                t('Neurology.facilities.features.2'),
                t('Neurology.facilities.features.3'),
                t('Neurology.facilities.features.4')
              ],
              image: '/fallback-image.webp',
            },
            research: {
              title: t('Neurology.research.title'),
              items: [
                {
                  title: t('Neurology.research.items.strokeRecovery.title'),
                  content: t('Neurology.research.items.strokeRecovery.content'),
                  icon: 'brain'
                },
                {
                  title: t('Neurology.research.items.neuroDegeneration.title'),
                  content: t('Neurology.research.items.neuroDegeneration.content'),
                  icon: 'microscope'
                },
                {
                  title: t('Neurology.research.items.headacheTherapies.title'),
                  content: t('Neurology.research.items.headacheTherapies.content'),
                  icon: 'head-side-virus'
                }
              ]
            },
            testimonials: {
              title: t('Neurology.testimonials.title'),
              items: [
                {
                  quote: t('Neurology.testimonials.items.anita.quote'),
                  author: t('Neurology.testimonials.items.anita.author'),
                  image: '/fallback-image.webp',
                },
                {
                  quote: t('Neurology.testimonials.items.vikram.quote'),
                  author: t('Neurology.testimonials.items.vikram.author'),
                  image: '/fallback-image.webp',
                }
              ]
            },
            cta: {
              title: t('Neurology.cta.title'),
              subtitle: t('Neurology.cta.subtitle'),
              buttons: [
                {
                  text: t('Neurology.cta.buttons.bookNow.text'),
                  isPrimary: true,
                },
                {
                  text: t('Neurology.cta.buttons.learnMore.text'),
                  isPrimary: false,
                }
              ]
            }
          },
        {
          id: 'neurosurgery',
          index: 3,
          name: t('Neurosurgery.name'),
          slug: 'neurosurgery',
          heroImage: '/department/neurosurgery.jpg',
          bannerImage: '/department/neurology-banner.webp',
          heroTitle: t('Neurosurgery.heroTitle'),
          isFeatured: false,
          heroSubtitle: t('Neurosurgery.heroSubtitle'),
          themeBgClass: 'bg-gradient-to-br from-violet-50 via-white to-fuchsia-50', // Unique Violet
          overview: {
            title: "Our Neurosurgery Approach",
            description: [
              "Neurosurgery treats brain and spine conditions that need surgery."
            ],
            additionalSections: [
              {
                title: "We manage:",
                items: [
                  "Brain tumors",
                  "Spine problems",
                  "Head injuries",
                  "Nerve compression"
                ]
              },
              {
                title: "Why our neurosurgery care stands out:",
                items: [
                  "Advanced surgical techniques",
                  "ICU and critical care backup",
                  "Experienced neurosurgeons"
                ]
              }
            ]
          },
          treatments: {
            title: t('Neurosurgery.treatments.title'),
            items: [
              {
                title: t('Neurosurgery.treatments.items.brainTumor.title'),
                description: t('Neurosurgery.treatments.items.brainTumor.description')
              },
              {
                title: t('Neurosurgery.treatments.items.spinalSurgery.title'),
                description: t('Neurosurgery.treatments.items.spinalSurgery.description')
              },
              {
                title: t('Neurosurgery.treatments.items.cerebrovascular.title'),
                description: t('Neurosurgery.treatments.items.cerebrovascular.description')
              }
            ]
          },
          stats: {
            title: t('Neurosurgery.stats.title'),
            items: [
              {
                value: t('Neurosurgery.stats.items.surgeries.value'),
                label: t('Neurosurgery.stats.items.surgeries.label')
              },
              {
                value: t('Neurosurgery.stats.items.resectionRate.value'),
                label: t('Neurosurgery.stats.items.resectionRate.label')
              },
              {
                value: t('Neurosurgery.stats.items.trauma.value'),
                label: t('Neurosurgery.stats.items.trauma.label')
              },
              {
                value: t('Neurosurgery.stats.items.minimallyInvasive.value'),
                label: t('Neurosurgery.stats.items.minimallyInvasive.label')
              }
            ]
          },
          team: {
            title: t('Neurosurgery.team.title'),
            members: [
              {
                name: t('Neurosurgery.team.members.drTripurari.name'),
                role: t('Neurosurgery.team.members.drTripurari.role'),
                credentials: t('Neurosurgery.team.members.drTripurari.credentials'),
                image: '/doctors/dr-tripurari-pandey.webp',
                specialty: t('Neurosurgery.team.members.drTripurari.specialty')
              },
              {
                name: t('Neurosurgery.team.members.drAnurag.name'),
                role: t('Neurosurgery.team.members.drAnurag.role'),
                credentials: t('Neurosurgery.team.members.drAnurag.credentials'),
                image: '/doctors/dr-anurag-singh.webp',
                specialty: t('Neurosurgery.team.members.drAnurag.specialty')
              }
            ]
          },
          facilities: {
            title: t('Neurosurgery.facilities.title'),
            description: t('Neurosurgery.facilities.description'),
            features: [
              t('Neurosurgery.facilities.features.0'),
              t('Neurosurgery.facilities.features.1'),
              t('Neurosurgery.facilities.features.2'),
              t('Neurosurgery.facilities.features.3'),
              t('Neurosurgery.facilities.features.4')
            ],
            image: '/fallback-image.webp',
          },
          research: {
            title: t('Neurosurgery.research.title'),
            items: [
              {
                title: t('Neurosurgery.research.items.skullBase.title'),
                content: t('Neurosurgery.research.items.skullBase.content'),
                icon: 'skull'
              },
              {
                title: t('Neurosurgery.research.items.spinalBiomechanics.title'),
                content: t('Neurosurgery.research.items.spinalBiomechanics.content'),
                icon: 'spine'
              },
              {
                title: t('Neurosurgery.research.items.neuroprotection.title'),
                content: t('Neurosurgery.research.items.neuroprotection.content'),
                icon: 'shield-alt'
              }
            ]
          },
          testimonials: {
            title: t('Neurosurgery.testimonials.title'),
            items: [
              {
                quote: t('Neurosurgery.testimonials.items.rajesh.quote'),
                author: t('Neurosurgery.testimonials.items.rajesh.author'),
                image: '/fallback-image.webp',
              },
              {
                quote: t('Neurosurgery.testimonials.items.meena.quote'),
                author: t('Neurosurgery.testimonials.items.meena.author'),
                image: '/fallback-image.webp',
              },
            ]
          },
          cta: {
            title: t('Neurosurgery.cta.title'),
            subtitle: t('Neurosurgery.cta.subtitle'),
            buttons: [
              {
                text: t('Neurosurgery.cta.buttons.requestConsultation.text'),
                isPrimary: true,
              },
              {
                text: t('Neurosurgery.cta.buttons.learnAboutProcedures.text'),
                isPrimary: false,
              }
            ]
          },
        },
        {
          id: 'gastroenterology',
          index: 4,
          name: t('Gastroenterology.name'),
          slug: 'gastroenterology',
          heroImage: '/department/gastroenterology.webp',
          bannerImage: '/department/gastroenterology-banner.jpg',
          heroTitle: t('Gastroenterology.heroTitle'),
          isFeatured: false,
          heroSubtitle: t('Gastroenterology.heroSubtitle'),
          themeBgClass: 'bg-gradient-to-br from-amber-50 via-white to-orange-50', // Unique Amber
          overview: {
            title: "Our Gastroenterology Approach",
            description: [
              "Gastroenterology focuses on stomach, liver, and digestive system problems."
            ],
            additionalSections: [
              {
                title: "We treat:",
                items: [
                  "Acidity and gas",
                  "Liver disease",
                  "Ulcers",
                  "Digestive infections"
                ]
              },
              {
                title: "How we help:",
                items: [
                  "Endoscopy and diagnosis",
                  "Medication-based treatment",
                  "Diet and lifestyle guidance"
                ]
              }
            ]
          },
          treatments: {
            title: t('Gastroenterology.treatments.title'),
            items: [
              {
                title: t('Gastroenterology.treatments.items.endoscopic.title'),
                description: t('Gastroenterology.treatments.items.endoscopic.description')
              },
              {
                title: t('Gastroenterology.treatments.items.liver.title'),
                description: t('Gastroenterology.treatments.items.liver.description')
              },
              {
                title: t('Gastroenterology.treatments.items.ibd.title'),
                description: t('Gastroenterology.treatments.items.ibd.description')
              }
            ]
          },
          stats: {
            title: t('Gastroenterology.stats.title'),
            items: [
              {
                value: t('Gastroenterology.stats.items.endoscopies.value'),
                label: t('Gastroenterology.stats.items.endoscopies.label')
              },
              {
                value: t('Gastroenterology.stats.items.polyp.value'),
                label: t('Gastroenterology.stats.items.polyp.label')
              },
              {
                value: t('Gastroenterology.stats.items.emergency.value'),
                label: t('Gastroenterology.stats.items.emergency.label')
              },
              {
                value: t('Gastroenterology.stats.items.clinics.value'),
                label: t('Gastroenterology.stats.items.clinics.label')
              }
            ]
          },
          team: {
            title: t('Gastroenterology.team.title'),
            members: [
              {
                name: t('Gastroenterology.team.members.drUpendra.name'),
                role: t('Gastroenterology.team.members.drUpendra.role'),
                credentials: t('Gastroenterology.team.members.drUpendra.credentials'),
                image: '/doctors/dr-upendra-gupta.webp',
                specialty: t('Gastroenterology.team.members.drUpendra.specialty')
              }
            ]
          },
          facilities: {
            title: t('Gastroenterology.facilities.title'),
            description: t('Gastroenterology.facilities.description'),
            features: [
              t('Gastroenterology.facilities.features.0'),
              t('Gastroenterology.facilities.features.1'),
              t('Gastroenterology.facilities.features.2'),
              t('Gastroenterology.facilities.features.3'),
              t('Gastroenterology.facilities.features.4')
            ],
            image: '/fallback-image.webp',
          },
          research: {
            title: t('Gastroenterology.research.title'),
            items: [
              {
                title: t('Gastroenterology.research.items.microbiome.title'),
                content: t('Gastroenterology.research.items.microbiome.content'),
                icon: 'bacteria'
              },
              {
                title: t('Gastroenterology.research.items.endoscopy.title'),
                content: t('Gastroenterology.research.items.endoscopy.content'),
                icon: 'endoscope'
              },
              {
                title: t('Gastroenterology.research.items.ibd.title'),
                content: t('Gastroenterology.research.items.ibd.content'),
                icon: 'prescription-bottle-alt'
              }
            ]
          },
          testimonials: {
            title: t('Gastroenterology.testimonials.title'),
            items: [
              {
                quote: t('Gastroenterology.testimonials.items.sunil.quote'),
                author: t('Gastroenterology.testimonials.items.sunil.author'),
                image: '/fallback-image.webp',
              },
              {
                quote: t('Gastroenterology.testimonials.items.geeta.quote'),
                author: t('Gastroenterology.testimonials.items.geeta.author'),
                image: '/fallback-image.webp',
              },
            ]
          },
          cta: {
            title: t('Gastroenterology.cta.title'),
            subtitle: t('Gastroenterology.cta.subtitle'),
            buttons: [
              {
                text: t('Gastroenterology.cta.buttons.bookAppointment.text'),
                isPrimary: true,
              },
              {
                text: t('Gastroenterology.cta.buttons.learnProcedures.text'),
                isPrimary: false,
              }
            ]
          },
        },
        {
          id: 'nephrology',
          index: 5,
          name: t('Nephrology.name'),
          slug: 'nephrology',
          heroImage: '/department/pediatrics.jpeg',
          bannerImage: '/department/nephrology-banner.jpg',
          heroTitle: t('Nephrology.heroTitle'),
          isFeatured: false,
          heroSubtitle: t('Nephrology.heroSubtitle'),
          themeBgClass: 'bg-gradient-to-br from-cyan-50 via-white to-teal-50', // Unique Cyan/Teal
          overview: {
            title: "Our Nephrology Approach",
            description: [
              "Nephrology deals with kidney health and kidney diseases."
            ],
            additionalSections: [
              {
                title: "Services include:",
                items: [
                  "Kidney disease treatment",
                  "Dialysis care",
                  "Blood pressure related kidney issues"
                ]
              },
              {
                title: "Why choose us:",
                items: [
                  "Modern dialysis facilities",
                  "Regular monitoring",
                  "Patient education and support"
                ]
              }
            ]
          },
          treatments: {
            title: t('Nephrology.treatments.title'),
            items: [
              {
                title: t('Nephrology.treatments.items.dialysis.title'),
                description: t('Nephrology.treatments.items.dialysis.description')
              },
              {
                title: t('Nephrology.treatments.items.hypertension.title'),
                description: t('Nephrology.treatments.items.hypertension.description')
              },
              {
                title: t('Nephrology.treatments.items.ckd.title'),
                description: t('Nephrology.treatments.items.ckd.description')
              }
            ]
          },
          stats: {
            title: t('Nephrology.stats.title'),
            items: [
              {
                value: t('Nephrology.stats.items.dialysis.value'),
                label: t('Nephrology.stats.items.dialysis.label')
              },
              {
                value: t('Nephrology.stats.items.satisfaction.value'),
                label: t('Nephrology.stats.items.satisfaction.label')
              },
              {
                value: t('Nephrology.stats.items.experience.value'),
                label: t('Nephrology.stats.items.experience.label')
              },
              {
                value: t('Nephrology.stats.items.acute.value'),
                label: t('Nephrology.stats.items.acute.label')
              }
            ]
          },
          team: {
            title: t('Nephrology.team.title'),
            members: [
              {
                name: t('Nephrology.team.members.drAnindya.name'),
                role: t('Nephrology.team.members.drAnindya.role'),
                credentials: t('Nephrology.team.members.drAnindya.credentials'),
                image: '/doctors/dr-anindya-biswas.webp',
                specialty: t('Nephrology.team.members.drAnindya.specialty')
              }
            ]
          },
          facilities: {
            title: t('Nephrology.facilities.title'),
            description: t('Nephrology.facilities.description'),
            features: [
              t('Nephrology.facilities.features.0'),
              t('Nephrology.facilities.features.1'),
              t('Nephrology.facilities.features.2'),
              t('Nephrology.facilities.features.3'),
              t('Nephrology.facilities.features.4')
            ],
            image: '/fallback-image.webp',
          },
          research: {
            title: t('Nephrology.research.title'),
            items: [
              { title: t('Nephrology.research.items.ckd.title'), content: t('Nephrology.research.items.ckd.content'), icon: 'kidneys' },
              { title: t('Nephrology.research.items.dialysis.title'), content: t('Nephrology.research.items.dialysis.content'), icon: 'clinic-medical' },
              { title: t('Nephrology.research.items.hypertension.title'), content: t('Nephrology.research.items.hypertension.content'), icon: 'heartbeat' }
            ]
          },
          testimonials: {
            title: t('Nephrology.testimonials.title'),
            items: [
              { quote: t('Nephrology.testimonials.items.arun.quote'), author: t('Nephrology.testimonials.items.arun.author'), image: '/fallback-image.webp' },
              { quote: t('Nephrology.testimonials.items.lata.quote'), author: t('Nephrology.testimonials.items.lata.author'), image: '/fallback-image.webp' }
            ]
          },
          cta: {
            title: t('Nephrology.cta.title'),
            subtitle: t('Nephrology.cta.subtitle'),
            buttons: [
              {
                text: t('Nephrology.cta.buttons.bookAppointment.text'),
                isPrimary: true,
              },
              {
                text: t('Nephrology.cta.buttons.learnServices.text'),
                isPrimary: false,
              }
            ]
          },
        },
        {
          id: 'urology',
          index: 6,
          name: t('Urology.name'),
          slug: 'urology',
          heroImage: '/department/urology.jpeg',
          bannerImage: '/department/urology-banner.jpeg',
          heroTitle: t('Urology.heroTitle'),
          isFeatured: false,
          heroSubtitle: t('Urology.heroSubtitle'),
          themeBgClass: 'bg-gradient-to-br from-sky-50 via-white to-blue-50', // Unique Sky Blue
          overview: {
            title: "Our Urology Approach",
            description: [
              "Urology treats urinary and male reproductive system problems."
            ],
            additionalSections: [
              {
                title: "We handle:",
                items: [
                  "Kidney stones",
                  "Prostate problems",
                  "Urinary infections",
                  "Male health issues"
                ]
              },
              {
                title: "How we help:",
                items: [
                  "Minimally invasive procedures",
                  "Advanced diagnostics",
                  "Confidential care"
                ]
              }
            ]
          },
          treatments: {
            title: t('Urology.treatments.title'),
            items: [
              {
                title: t('Urology.treatments.items.kidneyStone.title'),
                description: t('Urology.treatments.items.kidneyStone.description')
              },
              {
                title: t('Urology.treatments.items.prostate.title'),
                description: t('Urology.treatments.items.prostate.description')
              },
              {
                title: t('Urology.treatments.items.oncology.title'),
                description: t('Urology.treatments.items.oncology.description')
              }
            ]
          },
          stats: {
            title: t('Urology.stats.title'),
            items: [
              {
                value: t('Urology.stats.items.surgeries.value'),
                label: t('Urology.stats.items.surgeries.label')
              },
              {
                value: t('Urology.stats.items.stoneFree.value'),
                label: t('Urology.stats.items.stoneFree.label')
              },
              {
                value: t('Urology.stats.items.robotic.value'),
                label: t('Urology.stats.items.robotic.label')
              },
              {
                value: t('Urology.stats.items.emergency.value'),
                label: t('Urology.stats.items.emergency.label')
              }
            ]
          },
          team: {
            title: t('Urology.team.title'),
            members: [
              {
                name: t('Urology.team.members.drRohit.name'),
                role: t('Urology.team.members.drRohit.role'),
                credentials: t('Urology.team.members.drRohit.credentials'),
                image: '/doctors/dr-rohit-kumar-singh.webp',
                specialty: t('Urology.team.members.drRohit.specialty')
              },
              {
                name: t('Urology.team.members.drVishrut.name'),
                role: t('Urology.team.members.drVishrut.role'),
                credentials: t('Urology.team.members.drVishrut.credentials'),
                image: '/doctors/dr-vishrut-bharti.webp',
                specialty: t('Urology.team.members.drVishrut.specialty')
              }
            ]
          },
          facilities: {
            title: t('Urology.facilities.title'),
            description: t('Urology.facilities.description'),
            features: [
              t('Urology.facilities.features.0'),
              t('Urology.facilities.features.1'),
              t('Urology.facilities.features.2'),
              t('Urology.facilities.features.3'),
              t('Urology.facilities.features.4')
            ],
            image: '/fallback-image.webp',
          },
          research: {
            title: t('Urology.research.title'),
            items: [
              { title: t('Urology.research.items.stonePrevention.title'), content: t('Urology.research.items.stonePrevention.content'), icon: 'stone' },
              { title: t('Urology.research.items.robotic.title'), content: t('Urology.research.items.robotic.content'), icon: 'robot' },
              { title: t('Urology.research.items.bph.title'), content: t('Urology.research.items.bph.content'), icon: 'prostate' }
            ]
          },
          testimonials: {
            title: t('Urology.testimonials.title'),
            items: [
              { quote: t('Urology.testimonials.items.sanjay.quote'), author: t('Urology.testimonials.items.sanjay.author'), image: '/fallback-image.webp' },
              { quote: t('Urology.testimonials.items.mohan.quote'), author: t('Urology.testimonials.items.mohan.author'), image: '/fallback-image.webp' }
            ]
          },
          cta: {
            title: t('Urology.cta.title'),
            subtitle: t('Urology.cta.subtitle'),
            buttons: [
              {
                text: t('Urology.cta.buttons.bookAppointment.text'),
                isPrimary: true,
              },
              {
                text: t('Urology.cta.buttons.learnServices.text'),
                isPrimary: false,
              }
            ]
          },
        },
        {
          id: 'orthopedics',
          index: 7,
          name: t('Orthopedics.name'),
          slug: 'orthopedics',
          heroImage: '/department/pediatrics.jpeg',
          bannerImage: '/department/orthopaedic-banner.jpg',
          heroTitle: t('Orthopedics.heroTitle'),
          isFeatured: false,
          heroSubtitle: t('Orthopedics.heroSubtitle'),
          themeBgClass: 'bg-gradient-to-br from-emerald-50 via-white to-green-50', // Unique Emerald
          overview: {
            title: "Our Orthopedics Approach",
            description: [
              "Orthopedics focuses on bones, joints, and movement."
            ],
            additionalSections: [
              {
                title: "We treat:",
                items: [
                  "Joint pain",
                  "Fractures",
                  "Arthritis",
                  "Sports injuries"
                ]
              },
              {
                title: "Services include:",
                items: [
                  "Joint replacement",
                  "Trauma care",
                  "Physiotherapy support"
                ]
              }
            ]
          },
          treatments: {
            title: t('Orthopedics.treatments.title'),
            items: [
              {
                title: t('Orthopedics.treatments.items.jointReplacement.title'),
                description: t('Orthopedics.treatments.items.jointReplacement.description')
              },
              {
                title: t('Orthopedics.treatments.items.sportsMedicine.title'),
                description: t('Orthopedics.treatments.items.sportsMedicine.description')
              },
              {
                title: t('Orthopedics.treatments.items.spineCare.title'),
                description: t('Orthopedics.treatments.items.spineCare.description')
              }
            ]
          },
          stats: {
            title: t('Orthopedics.stats.title'),
            items: [
              {
                value: t('Orthopedics.stats.items.jointReplacements.value'),
                label: t('Orthopedics.stats.items.jointReplacements.label')
              },
              {
                value: t('Orthopedics.stats.items.satisfaction.value'),
                label: t('Orthopedics.stats.items.satisfaction.label')
              },
              {
                value: t('Orthopedics.stats.items.experience.value'),
                label: t('Orthopedics.stats.items.experience.label')
              },
              {
                value: t('Orthopedics.stats.items.fractureCare.value'),
                label: t('Orthopedics.stats.items.fractureCare.label')
              }
            ]
          },
          team: {
            title: t('Orthopedics.team.title'),
            members: [
              {
                name: t('Orthopedics.team.members.drPrateek.name'),
                role: t('Orthopedics.team.members.drPrateek.role'),
                credentials: t('Orthopedics.team.members.drPrateek.credentials'),
                image: '/doctors/dr-prateek.webp',
                specialty: t('Orthopedics.team.members.drPrateek.specialty')
              },
              {
                name: t('Orthopedics.team.members.drAnil.name'),
                role: t('Orthopedics.team.members.drAnil.role'),
                credentials: t('Orthopedics.team.members.drAnil.credentials'),
                image: '/doctors/dr-anil-srivastava.webp',
                specialty: t('Orthopedics.team.members.drAnil.specialty')
              }
            ]
          },
          facilities: {
            title: t('Orthopedics.facilities.title'),
            description: t('Orthopedics.facilities.description'),
            features: [
              t('Orthopedics.facilities.features.0'),
              t('Orthopedics.facilities.features.1'),
              t('Orthopedics.facilities.features.2'),
              t('Orthopedics.facilities.features.3'),
              t('Orthopedics.facilities.features.4')
            ],
            image: '/fallback-image.webp',
          },
          research: {
            title: t('Orthopedics.research.title'),
            items: [
              { title: t('Orthopedics.research.items.implant.title'), content: t('Orthopedics.research.items.implant.content'), icon: 'bone' },
              { title: t('Orthopedics.research.items.regenerative.title'), content: t('Orthopedics.research.items.regenerative.content'), icon: 'dna' },
              { title: t('Orthopedics.research.items.minimallyInvasive.title'), content: t('Orthopedics.research.items.minimallyInvasive.content'), icon: 'scalpel-path' }
            ]
          },
          testimonials: {
            title: t('Orthopedics.testimonials.title'),
            items: [
              { quote: t('Orthopedics.testimonials.items.rekha.quote'), author: t('Orthopedics.testimonials.items.rekha.author'), image: '/fallback-image.webp' },
              { quote: t('Orthopedics.testimonials.items.vivek.quote'), author: t('Orthopedics.testimonials.items.vivek.author'), image: '/fallback-image.webp' }
            ]
          },
          cta: {
            title: t('Orthopedics.cta.title'),
            subtitle: t('Orthopedics.cta.subtitle'),
            buttons: [
              {
                text: t('Orthopedics.cta.buttons.bookAppointment.text'),
                isPrimary: true,
              },
              {
                text: t('Orthopedics.cta.buttons.learnServices.text'),
                isPrimary: false,
              }
            ]
          },
        },
        {
            id: 'anesthesia',
            index: 8,
            name: t('Anesthesia.name'),
            slug: 'anesthesia',
            heroImage: '/department/anesthesia.jpg',
            bannerImage: '/department/anesthesia-banner.webp',
            heroTitle: t('Anesthesia.heroTitle'),
            heroSubtitle: t('Anesthesia.heroSubtitle'),
            isFeatured: true,
            themeBgClass: 'bg-gradient-to-br from-teal-50 via-white to-emerald-50', // Unique Teal
            overview: {
              title: "Our Anesthesia Approach",
              description: [
                "Anesthesia ensures pain-free and safe surgery."
              ],
              additionalSections: [
                {
                  title: "Our role includes:",
                  items: [
                    "Pre-surgery evaluation",
                    "Pain control during surgery",
                    "Post-surgery pain management"
                  ]
                },
                {
                  title: "Why it matters:",
                  items: [
                    "Patient safety",
                    "Smooth recovery",
                    "Continuous monitoring"
                  ]
                }
              ]
            },
            treatments: {
              title: t('Anesthesia.treatments.title'),
              items: [
                  { title: t('Anesthesia.treatments.items.general.title'), description: t('Anesthesia.treatments.items.general.description') },
                  { title: t('Anesthesia.treatments.items.regional.title'), description: t('Anesthesia.treatments.items.regional.description') },
                  { title: t('Anesthesia.treatments.items.pain.title'), description: t('Anesthesia.treatments.items.pain.description') }
                ]
            },
            stats: {
              title: t('Anesthesia.stats.title'),
              items: [
                { value: t('Anesthesia.stats.items.procedures.value'), label: t('Anesthesia.stats.items.procedures.label') },
                { value: t('Anesthesia.stats.items.coverage.value'), label: t('Anesthesia.stats.items.coverage.label') },
                { value: t('Anesthesia.stats.items.satisfaction.value'), label: t('Anesthesia.stats.items.satisfaction.label') },
                { value: t('Anesthesia.stats.items.techniques.value'), label: t('Anesthesia.stats.items.techniques.label') }
              ]
            },
            team: {
              title: t('Anesthesia.team.title'),
              members: [
                { name: t('Anesthesia.team.members.drHarshit.name'), role: t('Anesthesia.team.members.drHarshit.role'), credentials: t('Anesthesia.team.members.drHarshit.credentials'), image: '/doctors/dr-harshit-mishra.webp', specialty: t('Anesthesia.team.members.drHarshit.specialty') },
                { name: t('Anesthesia.team.members.drAmritansh.name'), role: t('Anesthesia.team.members.drAmritansh.role'), credentials: t('Anesthesia.team.members.drAmritansh.credentials'), image: '/doctors/dr-amritansh-pandey.webp', specialty: t('Anesthesia.team.members.drAmritansh.specialty') }
              ]
            },
            facilities: {
              title: t('Anesthesia.facilities.title'),
              description: t('Anesthesia.facilities.description'),
              features: [
                t('Anesthesia.facilities.features.0'),
                t('Anesthesia.facilities.features.1'),
                t('Anesthesia.facilities.features.2'),
                t('Anesthesia.facilities.features.3'),
                t('Anesthesia.facilities.features.4')
              ],
              image: '/department/anesthesia-facilities.webp'
            },
            research: {
              title: t('Anesthesia.research.title'),
              items: [
                { title: t('Anesthesia.research.items.enhancedRecovery.title'), content: t('Anesthesia.research.items.enhancedRecovery.content'), icon: 'flask' },
                { title: t('Anesthesia.research.items.painStudies.title'), content: t('Anesthesia.research.items.painStudies.content'), icon: 'dna' },
                { title: t('Anesthesia.research.items.safetySystems.title'), content: t('Anesthesia.research.items.safetySystems.content'), icon: 'cpu' }
              ]
            },
            testimonials: {
              title: t('Anesthesia.testimonials.title'),
              items: [
                { quote: t('Anesthesia.testimonials.items.rajesh.quote'), author: t('Anesthesia.testimonials.items.rajesh.author'), image: '/fallback-image.webp' },
                { quote: t('Anesthesia.testimonials.items.priya.quote'), author: t('Anesthesia.testimonials.items.priya.author'), image: '/fallback-image.webp' }
              ]
            },
            cta: {
              title: t('Anesthesia.cta.title'),
              subtitle: t('Anesthesia.cta.subtitle'),
              buttons: [
                { text: t('Anesthesia.cta.buttons.consult.text'), isPrimary: true },
                { text: t('Anesthesia.cta.buttons.learnMore.text'), isPrimary: false }
              ]
            }
          },
          {
            id: 'general-surgery',
            index: 9,
              name: t('GeneralSurgery.name'),
            slug: 'general-surgery',
            heroImage: '/department/general-surgery.webp',
            bannerImage: '/department/general-surgery.webp',
              heroTitle: t('GeneralSurgery.heroTitle'),
              heroSubtitle: t('GeneralSurgery.heroSubtitle'),
            isFeatured: true,
            themeBgClass: 'bg-gradient-to-br from-zinc-50 via-white to-slate-50', // Unique Zinc
            overview: {
              title: "Our General Surgery Approach",
              description: [
                "General Surgery handles common surgical conditions."
              ],
              additionalSections: [
                {
                  title: "We treat:",
                  items: [
                    "Hernia",
                    "Appendix",
                    "Gallbladder problems",
                    "Minor and major surgeries"
                  ]
                }
              ]
            },
            treatments: {
              title: t('GeneralSurgery.treatments.title'),
              items: [
                { title: t('GeneralSurgery.treatments.items.laparoscopic.title'), description: t('GeneralSurgery.treatments.items.laparoscopic.description') },
                { title: t('GeneralSurgery.treatments.items.gastrointestinal.title'), description: t('GeneralSurgery.treatments.items.gastrointestinal.description') },
                { title: t('GeneralSurgery.treatments.items.hernia.title'), description: t('GeneralSurgery.treatments.items.hernia.description') }
              ]
            },
            stats: {
              title: t('GeneralSurgery.stats.title'),
              items: [
                { value: t('GeneralSurgery.stats.items.surgeries.value'), label: t('GeneralSurgery.stats.items.surgeries.label') },
                { value: t('GeneralSurgery.stats.items.minimallyInvasive.value'), label: t('GeneralSurgery.stats.items.minimallyInvasive.label') },
                { value: t('GeneralSurgery.stats.items.satisfaction.value'), label: t('GeneralSurgery.stats.items.satisfaction.label') },
                { value: t('GeneralSurgery.stats.items.coverage.value'), label: t('GeneralSurgery.stats.items.coverage.label') }
              ]
            },
            team: {
              title: t('GeneralSurgery.team.title'),
              members: [
                { name: t('GeneralSurgery.team.members.drDpSingh.name'), role: t('GeneralSurgery.team.members.drDpSingh.role'), credentials: t('GeneralSurgery.team.members.drDpSingh.credentials'), image: '/doctors/dr-dp-singh.webp', specialty: t('GeneralSurgery.team.members.drDpSingh.specialty') }
              ]
            },
            facilities: {
              title: t('GeneralSurgery.facilities.title'),
              description: t('GeneralSurgery.facilities.description'),
              features: [
                t('GeneralSurgery.facilities.features.0'),
                t('GeneralSurgery.facilities.features.1'),
                t('GeneralSurgery.facilities.features.2'),
                t('GeneralSurgery.facilities.features.3'),
                t('GeneralSurgery.facilities.features.4')
              ],
              image: '/fallback-image.webp'
            },
            research: {
              title: t('GeneralSurgery.research.title'),
              items: [
                { title: t('GeneralSurgery.research.items.minimallyInvasive.title'), content: t('GeneralSurgery.research.items.minimallyInvasive.content'), icon: 'flask' },
                { title: t('GeneralSurgery.research.items.enhancedRecovery.title'), content: t('GeneralSurgery.research.items.enhancedRecovery.content'), icon: 'dna' },
                { title: t('GeneralSurgery.research.items.education.title'), content: t('GeneralSurgery.research.items.education.content'), icon: 'cpu' }
              ]
            },
            testimonials: {
              title: t('GeneralSurgery.testimonials.title'),
              items: [
                { quote: t('GeneralSurgery.testimonials.items.amit.quote'), author: t('GeneralSurgery.testimonials.items.amit.author'), image: '/fallback-image.webp' },
                { quote: t('GeneralSurgery.testimonials.items.neha.quote'), author: t('GeneralSurgery.testimonials.items.neha.author'), image: '/fallback-image.webp' }
              ]
            },
            cta: {
              title: t('GeneralSurgery.cta.title'),
              subtitle: t('GeneralSurgery.cta.subtitle'),
              buttons: [
                { text: t('GeneralSurgery.cta.buttons.schedule.text'), isPrimary: true },
                { text: t('GeneralSurgery.cta.buttons.learn.text'), isPrimary: false }
              ]
            }
          },
          {
            id: 'pediatrics',
            index: 10,
              name: t('Pediatrics.name'),
            slug: 'pediatrics',
            heroImage: '/department/pediatrics.jpeg',
            bannerImage: '/department/pediatric-banner.jpeg',
              heroTitle: t('Pediatrics.heroTitle'),
              heroSubtitle: t('Pediatrics.heroSubtitle'),
            isFeatured: true,
            themeBgClass: 'bg-gradient-to-br from-yellow-50 via-white to-amber-50', // Unique Yellow/Amber
            overview: {
                title: "Our Pediatrics Approach",
                description: [
                  "Pediatrics provides complete healthcare for children."
                ],
                additionalSections: [
                  {
                    title: "We care for:",
                    items: [
                      "Newborns",
                      "Childhood illnesses",
                      "Growth and development"
                    ]
                  },
                  {
                    title: "Why parents trust us:",
                    items: [
                      "Child-friendly environment",
                      "Gentle care approach"
                    ]
                  }
                ]
            },
            treatments: {
                title: t('Pediatrics.treatments.title'),
                items: [
                  { title: t('Pediatrics.treatments.items.wellChild.title'), description: t('Pediatrics.treatments.items.wellChild.description') },
                  { title: t('Pediatrics.treatments.items.neonatal.title'), description: t('Pediatrics.treatments.items.neonatal.description') },
                  { title: t('Pediatrics.treatments.items.illnessManagement.title'), description: t('Pediatrics.treatments.items.illnessManagement.description') }
                ]
            },
            stats: {
                title: t('Pediatrics.stats.title'),
                items: [
                  { value: t('Pediatrics.stats.items.children.value'), label: t('Pediatrics.stats.items.children.label') },
                  { value: t('Pediatrics.stats.items.vaccination.value'), label: t('Pediatrics.stats.items.vaccination.label') },
                  { value: t('Pediatrics.stats.items.availability.value'), label: t('Pediatrics.stats.items.availability.label') },
                  { value: t('Pediatrics.stats.items.experience.value'), label: t('Pediatrics.stats.items.experience.label') }
                ]
            },
            team: {
              title: t('Pediatrics.team.title'),
              members: [
                { name: t('Pediatrics.team.members.drApShahi.name'), role: t('Pediatrics.team.members.drApShahi.role'), credentials: t('Pediatrics.team.members.drApShahi.credentials'), image: '/doctors/dr-ap-shahi.webp', specialty: t('Pediatrics.team.members.drApShahi.specialty') }
              ]
            },
            facilities: {
              title: t('Pediatrics.facilities.title'),
              description: t('Pediatrics.facilities.description'),
              features: [
                t('Pediatrics.facilities.features.0'),
                t('Pediatrics.facilities.features.1'),
                t('Pediatrics.facilities.features.2'),
                t('Pediatrics.facilities.features.3'),
                t('Pediatrics.facilities.features.4')
              ],
              image: '/fallback-image.webp'
            },
            research: {
              title: t('Pediatrics.research.title'),
              items: [
                { title: t('Pediatrics.research.items.nutrition.title'), content: t('Pediatrics.research.items.nutrition.content'), icon: 'flask' },
                { title: t('Pediatrics.research.items.vaccine.title'), content: t('Pediatrics.research.items.vaccine.content'), icon: 'dna' },
                { title: t('Pediatrics.research.items.development.title'), content: t('Pediatrics.research.items.development.content'), icon: 'cpu' }
              ]
            },
            testimonials: {
              title: t('Pediatrics.testimonials.title'),
              items: [
                { quote: t('Pediatrics.testimonials.items.sunita.quote'), author: t('Pediatrics.testimonials.items.sunita.author'), image: '/fallback-image.webp' },
                { quote: t('Pediatrics.testimonials.items.rahul.quote'), author: t('Pediatrics.testimonials.items.rahul.author'), image: '/fallback-image.webp' }
              ]
            },
            cta: {
              title: t('Pediatrics.cta.title'),
              subtitle: t('Pediatrics.cta.subtitle'),
              buttons: [
                { text: t('Pediatrics.cta.buttons.bookAppointment.text'), isPrimary: true },
                { text: t('Pediatrics.cta.buttons.learn.text'), isPrimary: false }
              ]
            }
          },
          {
            id: 'head-neck',
            index: 12,
              name: t('HeadNeck.name'),
            slug: 'head-and-neck',
            heroImage: '/department/head-and-neck.jpeg',
            bannerImage: '/department/head-and-neck-banner.jpeg',
              heroTitle: t('HeadNeck.heroTitle'),
              heroSubtitle: t('HeadNeck.heroSubtitle'),
            isFeatured: true,
            themeBgClass: 'bg-gradient-to-br from-fuchsia-50 via-white to-pink-50', // Unique Fuchsia
            overview: {
                title: "Our Head & Neck Approach",
                description: [
                  "Head & Neck services treat conditions of the face, throat, and neck."
                ],
                additionalSections: [
                  {
                    title: "We manage:",
                    items: [
                      "Thyroid problems",
                      "Oral tumors",
                      "ENT-related conditions"
                    ]
                  }
                ]
            },
            treatments: {
              title: t('HeadNeck.treatments.title'),
              items: [
                { title: t('HeadNeck.treatments.items.surgery.title'), description: t('HeadNeck.treatments.items.surgery.description') },
                { title: t('HeadNeck.treatments.items.oncologic.title'), description: t('HeadNeck.treatments.items.oncologic.description') },
                { title: t('HeadNeck.treatments.items.reconstructive.title'), description: t('HeadNeck.treatments.items.reconstructive.description') }
              ]
            },
            stats: {
              title: t('HeadNeck.stats.title'),
              items: [
                { value: t('HeadNeck.stats.items.procedures.value'), label: t('HeadNeck.stats.items.procedures.label') },
                { value: t('HeadNeck.stats.items.success.value'), label: t('HeadNeck.stats.items.success.label') },
                { value: t('HeadNeck.stats.items.availability.value'), label: t('HeadNeck.stats.items.availability.label') },
                { value: t('HeadNeck.stats.items.experience.value'), label: t('HeadNeck.stats.items.experience.label') }
              ]
            },
            team: {
              title: 'Our Head & Neck Team',
              members: [
                {
                  name: 'Dr. Tarik Anwar',
                  role: 'Head & Neck Surgeon',
                  credentials: 'BDS, MDS MAXILLOFACIAL SURGEON, FELLOSHIP IN HEAD & NECK ONCOLOGY',
                  image: '/doctors/dr-tarik-anwar.webp',
                  specialty: 'Head & Neck Oncology'
                },
                {
                  name: 'Dr. Vishal Mishra',
                  role: 'Head & Neck Surgeon',
                  credentials: 'BDS, MDS, MDS MAXILLOFACIAL SURGEON, FELLOSHIP IN HEAD & NECK',
                  image: '/doctors/dr-vishal-mishra.webp',
                  specialty: 'Maxillofacial Surgery'
                }
              ]
            },
            facilities: {
              title: 'Specialized Facilities',
              description: 'Our department is equipped with advanced technology for precise diagnosis and treatment.',
              features: [
                'Advanced imaging capabilities',
                'Microsurgical equipment',
                'Dedicated head and neck OR',
                'Multidisciplinary clinic space',
                'Speech and swallowing therapy'
              ],
              image: '/fallback-image.webp'
            },
            research: {
              title: 'Research & Innovation',
              items: [
                {
                  title: 'Oncologic Outcomes',
                  content: 'Tracking treatment results to improve protocols.',
                  icon: 'flask'
                },
                {
                  title: 'Reconstructive Techniques',
                  content: 'Developing new approaches to restore function.',
                  icon: 'dna'
                },
                {
                  title: 'Minimally Invasive Approaches',
                  content: 'Researching less traumatic surgical options.',
                  icon: 'cpu'
                }
              ]
            },
            testimonials: {
              title: 'Patient Stories',
              items: [
                {
                  quote: 'The head and neck team gave me excellent care through my cancer treatment and recovery.',
                  author: 'Vikram P.',
                  image: '/fallback-image.webp'
                },
                {
                  quote: 'Their expertise and compassion made a difficult diagnosis much easier to face.',
                  author: 'Meera D.',
                  image: '/fallback-image.webp'
                }
              ]
            },
            cta: {
              title: 'Schedule a Consultation',
              subtitle: 'Our head and neck specialists are available to evaluate your condition.',
              buttons: [
                {
                  text: 'Book Appointment',
                  isPrimary: true
                },
                {
                  text: 'Learn About Conditions',
                  isPrimary: false
                }
              ]
            }
          },
          {
            id: 'emergency-critical-care',
            index: 13,
              name: t('EmergencyCriticalCare.name'),
            slug: 'emergency-critical-care',
            heroImage: '/department/emergency.jpg',
            bannerImage: '/department/emergency-banner.jpg',
              heroTitle: t('EmergencyCriticalCare.heroTitle'),
              heroSubtitle: t('EmergencyCriticalCare.heroSubtitle'),
            isFeatured: true,
            themeBgClass: 'bg-gradient-to-br from-red-50 via-white to-orange-50', // Unique Red/Orange
            overview: {
              title: "Our Emergency & Critical Care Approach",
              description: [
                "24x7 emergency care for life-threatening conditions."
              ],
              additionalSections: [
                {
                  title: "We handle:",
                  items: [
                    "Accidents",
                    "Heart attacks",
                    "Stroke",
                    "Critical illnesses"
                  ]
                },
                {
                  title: "Why it matters:",
                  items: [
                    "Immediate response",
                    "Advanced ICU support",
                    "Trained emergency team"
                  ]
                }
              ]
            },
            treatments: {
              title: t('EmergencyCriticalCare.treatments.title'),
                items: [
                  { title: t('EmergencyCriticalCare.treatments.items.emergency.title'), description: t('EmergencyCriticalCare.treatments.items.emergency.description') },
                  { title: t('EmergencyCriticalCare.treatments.items.critical.title'), description: t('EmergencyCriticalCare.treatments.items.critical.description') },
                  { title: t('EmergencyCriticalCare.treatments.items.trauma.title'), description: t('EmergencyCriticalCare.treatments.items.trauma.description') }
                ]
            },
            stats: {
              title: t('EmergencyCriticalCare.stats.title'),
                items: [
                  { value: t('EmergencyCriticalCare.stats.items.availability.value'), label: t('EmergencyCriticalCare.stats.items.availability.label') },
                  { value: t('EmergencyCriticalCare.stats.items.response.value'), label: t('EmergencyCriticalCare.stats.items.response.label') },
                  { value: t('EmergencyCriticalCare.stats.items.satisfaction.value'), label: t('EmergencyCriticalCare.stats.items.satisfaction.label') },
                  { value: t('EmergencyCriticalCare.stats.items.specialties.value'), label: t('EmergencyCriticalCare.stats.items.specialties.label') }
                ]
            },
            team: {
              title: t('EmergencyCriticalCare.team.title'),
                members: [
                  { name: t('EmergencyCriticalCare.team.members.drHarshit.name'), role: t('EmergencyCriticalCare.team.members.drHarshit.role'), credentials: t('EmergencyCriticalCare.team.members.drHarshit.credentials'), image: '/doctors/dr-harshit-mishra.webp', specialty: t('EmergencyCriticalCare.team.members.drHarshit.specialty') }
                ]
            },
            facilities: {
              title: t('EmergencyCriticalCare.facilities.title'),
              description: t('EmergencyCriticalCare.facilities.description'),
              features: [
                  t('EmergencyCriticalCare.facilities.features.0'),
                  t('EmergencyCriticalCare.facilities.features.1'),
                  t('EmergencyCriticalCare.facilities.features.2'),
                  t('EmergencyCriticalCare.facilities.features.3'),
                  t('EmergencyCriticalCare.facilities.features.4')
                ],
                image: '/fallback-image.webp'
            },
            research: {
              title: 'Emergency Medicine Research',
              items: [
                {
                  title: 'Resuscitation Science',
                  content: 'Studying optimal approaches to cardiac arrest care.',
                  icon: 'flask'
                },
                {
                  title: 'Sepsis Protocols',
                  content: 'Developing rapid response systems for severe infection.',
                  icon: 'dna'
                },
                {
                  title: 'Trauma Systems',
                  content: 'Researching coordinated approaches to injury care.',
                  icon: 'cpu'
                }
              ]
            },
            testimonials: {
              title: 'Patient Experiences',
              items: [
                {
                  quote: 'The emergency team saved my life when I had my heart attack. Their quick response made all the difference.',
                  author: 'Ramesh C.',
                  image: '/fallback-image.webp'
                },
                {
                  quote: 'When my child had a severe allergic reaction, they provided immediate, expert care that stabilized him quickly.',
                  author: 'Sunita M.',
                  image: '/fallback-image.webp'
                }
              ]
            },
            cta: {
              title: 'Emergency Services Available 24/7',
              subtitle: 'No appointment needed for emergency care - walk in or call for immediate assistance.',
              buttons: [
                {
                  text: 'Call Emergency',
                  isPrimary: true
                },
                {
                  text: 'Learn About Services',
                  isPrimary: false
                }
              ]
            }
          },
          {
            id: 'diagnostic-imaging',
            index: 14,
            name: t('DiagnosticImaging.name'),
            slug: 'diagnostic-imaging',
            heroImage: '/department/diagnostic-imaging.webp',
            bannerImage: '/department/diagnostic-imaging-banner.webp',
            heroTitle: t('DiagnosticImaging.heroTitle'),
            heroSubtitle: t('DiagnosticImaging.heroSubtitle'),
            isFeatured: true,
            themeBgClass: 'bg-gradient-to-br from-gray-100 via-white to-gray-50', // Unique Gray
            overview: {
              title: t('DiagnosticImaging.overview.title'),
              description: [
                t('DiagnosticImaging.overview.description.0'),
                t('DiagnosticImaging.overview.description.1')
              ],
              additionalSections: [
                {
                  title: "Why Choose Us",
                  items: [
                    t('DiagnosticImaging.overview.whyChooseUs.0'),
                    t('DiagnosticImaging.overview.whyChooseUs.1'),
                    t('DiagnosticImaging.overview.whyChooseUs.2'),
                    t('DiagnosticImaging.overview.whyChooseUs.3')
                  ]
                }
              ]
            },
            treatments: {
              title: t('DiagnosticImaging.treatments.title'),
              items: [
                { title: t('DiagnosticImaging.treatments.items.mri.title'), description: t('DiagnosticImaging.treatments.items.mri.description') },
                { title: t('DiagnosticImaging.treatments.items.ct.title'), description: t('DiagnosticImaging.treatments.items.ct.description') },
                { title: t('DiagnosticImaging.treatments.items.ultrasound.title'), description: t('DiagnosticImaging.treatments.items.ultrasound.description') }
              ]
            },
            stats: {
              title: t('DiagnosticImaging.stats.title'),
              items: [
                { value: t('DiagnosticImaging.stats.items.scanTime.value'), label: t('DiagnosticImaging.stats.items.scanTime.label') },
                { value: t('DiagnosticImaging.stats.items.emergency.value'), label: t('DiagnosticImaging.stats.items.emergency.label') },
                { value: t('DiagnosticImaging.stats.items.accuracy.value'), label: t('DiagnosticImaging.stats.items.accuracy.label') },
                { value: t('DiagnosticImaging.stats.items.modalities.value'), label: t('DiagnosticImaging.stats.items.modalities.label') }
              ]
            },
            team: {
              title: t('DiagnosticImaging.team.title'),
              members: [
                { name: t('DiagnosticImaging.team.members.drRajesh.name'), role: t('DiagnosticImaging.team.members.drRajesh.role'), credentials: t('DiagnosticImaging.team.members.drRajesh.credentials'), image: '/doctors/dr-rajesh-verma.webp', specialty: t('DiagnosticImaging.team.members.drRajesh.specialty') }
              ]
            },
            facilities: {
              title: 'Imaging Facilities',
              description: 'Our department features state-of-the-art imaging technology for precise diagnostics.',
              features: [
                '1.5T MRI machine',
                '128-slice CT scanner',
                'Digital mammography',
                'Fluoroscopy suite',
                'PACS digital imaging system'
              ],
              image: '/imaging-facility.webp'
            },
            research: {
              title: 'Imaging Research',
              items: [
                {
                  title: 'AI-Assisted Diagnostics',
                  content: 'Developing machine learning tools for image analysis.',
                  icon: 'cpu'
                },
                {
                  title: 'Low-Dose Protocols',
                  content: 'Researching radiation reduction techniques.',
                  icon: 'radiation'
                },
                {
                  title: 'Functional Imaging',
                  content: 'Advancing dynamic assessment of organ function.',
                  icon: 'brain'
                }
              ]
            },
            testimonials: {
              title: 'Patient Experiences',
              items: [
                {
                  quote: 'The MRI was much quicker and less claustrophobic than I expected. The staff made me feel comfortable throughout.',
                  author: 'Anjali S.',
                  image: '/fallback-image.webp'
                },
                {
                  quote: 'The detailed CT scan identified my condition immediately, allowing for prompt treatment.',
                  author: 'Vikram P.',
                  image: '/fallback-image.webp'
                }
              ]
            },
            cta: {
              title: 'Advanced Imaging Services',
              subtitle: 'Schedule your diagnostic scan or walk-in for emergency imaging needs.',
              buttons: [
                {
                  text: 'Schedule Imaging',
                  isPrimary: true
                },
                {
                  text: 'View Preparation Guides',
                  isPrimary: false
                }
              ]
            }
          },
          {
            id: 'dialysis',
            index: 15,
            name: t('Dialysis.name'),
            slug: 'dialysis',
            heroImage: '/dialysis-hero.webp',
            bannerImage: '/dialysis-hero-banner.webp',
            heroTitle: t('Dialysis.heroTitle'),
            heroSubtitle: t('Dialysis.heroSubtitle'),
            isFeatured: false,
            themeBgClass: 'bg-gradient-to-br from-cyan-50 via-white to-blue-50', // Unique Cyan/Blue
            overview: {
              title: t('Dialysis.overview.title'),
              description: [
                t('Dialysis.overview.description.0'),
                t('Dialysis.overview.description.1')
              ],
              additionalSections: [
                {
                  title: "Why Choose Us",
                  items: [
                    t('Dialysis.overview.whyChooseUs.0'),
                    t('Dialysis.overview.whyChooseUs.1'),
                    t('Dialysis.overview.whyChooseUs.2'),
                    t('Dialysis.overview.whyChooseUs.3')
                  ]
                }
              ]
            },
            treatments: {
              title: 'Our Services',
              items: [
                { title: t('Dialysis.treatments.items.hemodialysis.title'), description: t('Dialysis.treatments.items.hemodialysis.description') },
                { title: t('Dialysis.treatments.items.peritoneal.title'), description: t('Dialysis.treatments.items.peritoneal.description') },
                { title: t('Dialysis.treatments.items.crrt.title'), description: t('Dialysis.treatments.items.crrt.description') }
              ]
            },
            stats: {
              title: 'Dialysis Statistics',
              items: [
                { value: t('Dialysis.stats.items.stations.value'), label: t('Dialysis.stats.items.stations.label') },
                { value: t('Dialysis.stats.items.weekly.value'), label: t('Dialysis.stats.items.weekly.label') },
                { value: t('Dialysis.stats.items.efficacy.value'), label: t('Dialysis.stats.items.efficacy.label') },
                { value: t('Dialysis.stats.items.patients.value'), label: t('Dialysis.stats.items.patients.label') }
              ]
            },
            team: {
              title: 'Our Nephrology Team',
              members: [
                {
                  name: 'Dr. Anindya Biswas',
                  role: 'Nephrologist',
                  credentials: 'MBBS, DNB,DrNB(NEFROLOGY), DEPARTMENT OF NEFROLOGY',
                  image: '/doctors/dr-anindya-biswas.webp',
                  specialty: 'Chronic Kidney Disease'
                }
              ]
            },
            facilities: {
              title: 'Dialysis Facilities',
              description: 'Our unit features advanced dialysis technology in a patient-centered environment.',
              features: [
                'High-flux dialysis machines',
                'Ultrapure water system',
                'Individual TV monitors',
                'Comfortable recliners',
                'Emergency response system'
              ],
              image: '/dialysis-unit.webp'
            },
            research: {
              title: 'Renal Research',
              items: [
                {
                  title: 'Vascular Access',
                  content: 'Improving fistula longevity and function.',
                  icon: 'heart-pulse'
                },
                {
                  title: 'Dialysis Adequacy',
                  content: 'Optimizing treatment protocols.',
                  icon: 'vial'
                },
                {
                  title: 'Anemia Management',
                  content: 'Reducing transfusion requirements.',
                  icon: 'droplet'
                }
              ]
            },
            testimonials: {
              title: 'Patient Experiences',
              items: [
                {
                  quote: 'The dialysis staff feels like family. They know exactly how to make my treatments comfortable.',
                  author: 'Mahesh K.',
                  image: '/fallback-image.webp'
                },
                {
                  quote: 'After my kidney failure, their expert care gave me back my quality of life.',
                  author: 'Priya R.',
                  image: '/fallback-image.webp'
                }
              ]
            },
            cta: {
              title: 'Renal Care Services',
              subtitle: 'Schedule dialysis treatments or consult with our nephrology team.',
              buttons: [
                {
                  text: 'Book Dialysis',
                  isPrimary: true
                },
                {
                  text: 'Learn About Options',
                  isPrimary: false
                }
              ]
            }
          },
          {
            id: 'radiology',
            index: 16,
            name: t('Radiology.name'),
            slug: 'radiology',
            heroImage: '/radiology-hero.webp',
            bannerImage: '/radiology-hero-banner.webp',
            heroTitle: t('Radiology.heroTitle'),
            heroSubtitle: t('Radiology.heroSubtitle'),
            isFeatured: false,
            themeBgClass: 'bg-gradient-to-br from-slate-100 via-white to-gray-50', // Unique Slate/Gray
            overview: {
              title: t('Radiology.overview.title'),
              description: [
                t('Radiology.overview.description.0'),
                t('Radiology.overview.description.1')
              ],
              additionalSections: [
                {
                  title: "Why Choose Us",
                  items: [
                    t('Radiology.overview.whyChooseUs.0'),
                    t('Radiology.overview.whyChooseUs.1'),
                    t('Radiology.overview.whyChooseUs.2'),
                    t('Radiology.overview.whyChooseUs.3')
                  ]
                }
              ]
            },
            treatments: {
              title: t('Radiology.treatments.title'),
              items: [
                { title: t('Radiology.treatments.items.diagnostic.title'), description: t('Radiology.treatments.items.diagnostic.description') },
                { title: t('Radiology.treatments.items.interventional.title'), description: t('Radiology.treatments.items.interventional.description') },
                { title: t('Radiology.treatments.items.nuclear.title'), description: t('Radiology.treatments.items.nuclear.description') }
              ]
            },
            stats: {
              title: 'Radiology Statistics',
              items: [
                {
                  value: '<2 hrs',
                  label: 'Stat Report Turnaround'
                },
                {
                  value: '15+',
                  label: 'Radiology Subspecialties'
                },
                {
                  value: '99%',
                  label: 'Procedure Success Rate'
                },
                {
                  value: '24/7',
                  label: 'Emergency Coverage'
                }
              ]
            },
            team: {
              title: t('Radiology.team.title'),
              members: [
                { name: t('Radiology.team.members.drAmit.name'), role: t('Radiology.team.members.drAmit.role'), credentials: t('Radiology.team.members.drAmit.credentials'), image: '/doctors/dr-amit-patel.webp', specialty: t('Radiology.team.members.drAmit.specialty') }
              ]
            },
            facilities: {
              title: t('Radiology.facilities.title'),
              description: t('Radiology.facilities.description'),
              features: [
                  t('Radiology.facilities.features.0'),
                  t('Radiology.facilities.features.1'),
                  t('Radiology.facilities.features.2'),
                  t('Radiology.facilities.features.3'),
                  t('Radiology.facilities.features.4')
                ],
                image: '/radiology-lab.webp'
            },
            research: {
              title: 'Radiology Research',
              items: [
                {
                  title: 'Image-Guided Therapy',
                  content: 'Developing new minimally invasive treatments.',
                  icon: 'syringe'
                },
                {
                  title: 'Contrast Optimization',
                  content: 'Reducing contrast media requirements.',
                  icon: 'vial'
                },
                {
                  title: 'AI in Radiology',
                  content: 'Implementing machine learning for image analysis.',
                  icon: 'cpu'
                }
              ]
            },
            testimonials: {
              title: 'Patient Experiences',
              items: [
                {
                  quote: 'The CT-guided biopsy was quick and painless, with precise results that guided my treatment.',
                  author: 'Rahul D.',
                  image: '/fallback-image.webp'
                },
                {
                  quote: 'Their interventional radiology procedure solved my problem without major surgery.',
                  author: 'Geeta M.',
                  image: '/fallback-image.webp'
                }
              ]
            },
            cta: {
              title: 'Advanced Radiology Services',
              subtitle: 'Schedule your imaging study or consult with our radiologists.',
              buttons: [
                {
                  text: 'Book Imaging',
                  isPrimary: true
                },
                {
                  text: 'Learn About Procedures',
                  isPrimary: false
                }
              ]
            }
          },
          {
            id: 'pathology',
            index: 17,
            name: t('Pathology.name'),
            slug: 'pathology',
            heroImage: '/pathology-hero.webp',
            bannerImage: '/pathology-hero-banner.webp',
            heroTitle: t('Pathology.heroTitle'),
            heroSubtitle: t('Pathology.heroSubtitle'),
            isFeatured: false,
            themeBgClass: 'bg-gradient-to-br from-purple-50 via-white to-fuchsia-50', // Unique Purple
            overview: {
              title: t('Pathology.overview.title'),
              description: [
                t('Pathology.overview.description.0'),
                t('Pathology.overview.description.1')
              ],
              additionalSections: [
                {
                  title: "Why Choose Us",
                  items: [
                    t('Pathology.overview.whyChooseUs.0'),
                    t('Pathology.overview.whyChooseUs.1'),
                    t('Pathology.overview.whyChooseUs.2'),
                    t('Pathology.overview.whyChooseUs.3')
                  ]
                }
              ]
            },
            treatments: {
              title: 'Our Services',
              items: [
                { title: t('Pathology.treatments.items.histopathology.title'), description: t('Pathology.treatments.items.histopathology.description') },
                { title: t('Pathology.treatments.items.cytopathology.title'), description: t('Pathology.treatments.items.cytopathology.description') },
                { title: t('Pathology.treatments.items.molecular.title'), description: t('Pathology.treatments.items.molecular.description') }
              ]
            },
            stats: {
              title: 'Pathology Statistics',
              items: [
                { value: t('Pathology.stats.items.routine.value'), label: t('Pathology.stats.items.routine.label') },
                { value: t('Pathology.stats.items.accuracy.value'), label: t('Pathology.stats.items.accuracy.label') },
                { value: t('Pathology.stats.items.available.value'), label: t('Pathology.stats.items.available.label') },
                { value: t('Pathology.stats.items.accreditation.value'), label: t('Pathology.stats.items.accreditation.label') }
              ]
            },
            team: {
              title: 'Our Pathology Team',
              members: [
                { name: t('Pathology.team.members.drSunita.name'), role: t('Pathology.team.members.drSunita.role'), credentials: t('Pathology.team.members.drSunita.credentials'), image: '/doctors/dr-sunita-rao.webp', specialty: t('Pathology.team.members.drSunita.specialty') }
              ]
            },
            facilities: {
              title: t('Pathology.facilities.title'),
              description: t('Pathology.facilities.description'),
              features: [
                t('Pathology.facilities.features.0'),
                t('Pathology.facilities.features.1'),
                t('Pathology.facilities.features.2'),
                t('Pathology.facilities.features.3'),
                t('Pathology.facilities.features.4')
              ],
              image: '/pathology-lab.webp'
            },
            research: {
              title: 'Pathology Research',
              items: [
                {
                  title: 'Cancer Biomarkers',
                  content: 'Identifying new diagnostic markers.',
                  icon: 'dna'
                },
                {
                  title: 'Digital Pathology',
                  content: 'Implementing AI for slide analysis.',
                  icon: 'cpu'
                },
                {
                  title: 'Liquid Biopsies',
                  content: 'Developing blood-based diagnostics.',
                  icon: 'vial'
                }
              ]
            },
            testimonials: {
              title: 'Patient Experiences',
              items: [
                {
                  quote: 'The detailed pathology report gave my oncologist exactly the information needed for my treatment plan.',
                  author: 'Arun T.',
                  image: '/fallback-image.webp'
                },
                {
                  quote: 'Quick and accurate test results helped diagnose my rare condition promptly.',
                  author: 'Meena K.',
                  image: '/fallback-image.webp'
                }
              ]
            },
            cta: {
              title: 'Precision Diagnostics',
              subtitle: 'Contact us for pathology services or test result inquiries.',
              buttons: [
                {
                  text: 'Request Testing',
                  isPrimary: true
                },
                {
                  text: 'Access Results',
                  isPrimary: false
                }
              ]
            }
          },
          {
            id: 'microbiology',
            index: 18,
            name: t('Microbiology.name'),
            slug: 'microbiology',
            heroImage: '/microbiology-hero.webp',
            bannerImage: '/microbiology-hero-banner.webp',
            heroTitle: 'Advanced Microbiology Services',
            heroSubtitle: 'Comprehensive infectious disease diagnostics in Gorakhpur.',
            isFeatured: false,
            themeBgClass: 'bg-gradient-to-br from-lime-50 via-white to-green-50', // Unique Lime/Green
            overview: {
              title: t('Microbiology.overview.title'),
              description: [
                t('Microbiology.overview.description.0'),
                t('Microbiology.overview.description.1')
              ],
              additionalSections: [
                {
                  title: "Why Choose Us",
                  items: [
                    t('Microbiology.overview.whyChooseUs.0'),
                    t('Microbiology.overview.whyChooseUs.1'),
                    t('Microbiology.overview.whyChooseUs.2'),
                    t('Microbiology.overview.whyChooseUs.3')
                  ]
                }
              ]
            },
            treatments: {
              title: t('Microbiology.treatments.title'),
              items: [
                { title: t('Microbiology.treatments.items.culture.title'), description: t('Microbiology.treatments.items.culture.description') },
                { title: t('Microbiology.treatments.items.molecular.title'), description: t('Microbiology.treatments.items.molecular.description') },
                { title: t('Microbiology.treatments.items.serology.title'), description: t('Microbiology.treatments.items.serology.description') }
              ]
            },
            stats: {
              title: t('Microbiology.stats.title'),
              items: [
                { value: t('Microbiology.stats.items.cultureTime.value'), label: t('Microbiology.stats.items.cultureTime.label') },
                { value: t('Microbiology.stats.items.accuracy.value'), label: t('Microbiology.stats.items.accuracy.label') },
                { value: t('Microbiology.stats.items.pathogens.value'), label: t('Microbiology.stats.items.pathogens.label') },
                { value: t('Microbiology.stats.items.emergency.value'), label: t('Microbiology.stats.items.emergency.label') }
              ]
            },
            team: {
              title: t('Microbiology.team.title'),
              members: [
                { name: t('Microbiology.team.members.drAnil.name'), role: t('Microbiology.team.members.drAnil.role'), credentials: t('Microbiology.team.members.drAnil.credentials'), image: '/doctors/dr-anil-kumar.webp', specialty: t('Microbiology.team.members.drAnil.specialty') }
              ]
            },
            facilities: {
              title: t('Microbiology.facilities.title'),
              description: t('Microbiology.facilities.description'),
              features: [
                t('Microbiology.facilities.features.0'),
                t('Microbiology.facilities.features.1'),
                t('Microbiology.facilities.features.2'),
                t('Microbiology.facilities.features.3'),
                t('Microbiology.facilities.features.4')
              ],
              image: '/microbiology-lab.webp'
            },
            research: {
              title: 'Microbiology Research',
              items: [
                {
                  title: 'Antibiotic Resistance',
                  content: 'Tracking emerging resistance patterns.',
                  icon: 'bacteria'
                },
                {
                  title: 'Rapid Diagnostics',
                  content: 'Developing faster identification methods.',
                  icon: 'flask'
                },
                {
                  title: 'Hospital Epidemiology',
                  content: 'Studying infection transmission patterns.',
                  icon: 'chart-line'
                }
              ]
            },
            testimonials: {
              title: 'Patient Experiences',
              items: [
                {
                  quote: 'The microbiology team identified the exact bacteria causing my infection and which antibiotics would work best.',
                  author: 'Sanjay M.',
                  image: '/fallback-image.webp'
                },
                {
                  quote: 'Their rapid COVID-19 testing helped protect my elderly parents when I developed symptoms.',
                  author: 'Neha S.',
                  image: '/fallback-image.webp'
                }
              ]
            },
            cta: {
              title: 'Infection Diagnostics',
              subtitle: 'Contact us for microbiology testing or infection control consultation.',
              buttons: [
                {
                  text: 'Request Testing',
                  isPrimary: true
                },
                {
                  text: 'View Test Menu',
                  isPrimary: false
                }
              ]
            }
          },
          {
            id: 'biochemistry',
            index: 19,
            name: t('Biochemistry.name'),
            slug: 'biochemistry',
            heroImage: '/biochemistry-hero.webp',
            bannerImage: '/biochemistry-hero-banner.webp',
            heroTitle: t('Biochemistry.heroTitle'),
            heroSubtitle: t('Biochemistry.heroSubtitle'),
            isFeatured: false,
            themeBgClass: 'bg-gradient-to-br from-indigo-50 via-white to-blue-50', // Unique Indigo/Blue
            overview: {
              title: t('Biochemistry.overview.title'),
              description: [
                t('Biochemistry.overview.description.0'),
                t('Biochemistry.overview.description.1')
              ],
              additionalSections: [
                {
                  title: "Why Choose Us",
                  items: [
                    t('Biochemistry.overview.whyChooseUs.0'),
                    t('Biochemistry.overview.whyChooseUs.1'),
                    t('Biochemistry.overview.whyChooseUs.2'),
                    t('Biochemistry.overview.whyChooseUs.3')
                  ]
                }
              ]
            },
            treatments: {
              title: t('Biochemistry.treatments.title'),
              items: [
                {
                  title: t('Biochemistry.treatments.items.routineChemistry.title'),
                  description: t('Biochemistry.treatments.items.routineChemistry.description')
                },
                {
                  title: t('Biochemistry.treatments.items.endocrinology.title'),
                  description: t('Biochemistry.treatments.items.endocrinology.description')
                },
                {
                  title: t('Biochemistry.treatments.items.therapeuticDrugMonitoring.title'),
                  description: t('Biochemistry.treatments.items.therapeuticDrugMonitoring.description')
                }
              ]
            },
            stats: {
              title: t('Biochemistry.stats.title'),
              items: [
                {
                  value: t('Biochemistry.stats.items.turnaround.value'),
                  label: t('Biochemistry.stats.items.turnaround.label')
                },
                {
                  value: t('Biochemistry.stats.items.accuracy.value'),
                  label: t('Biochemistry.stats.items.accuracy.label')
                },
                {
                  value: t('Biochemistry.stats.items.available.value'),
                  label: t('Biochemistry.stats.items.available.label')
                },
                {
                  value: t('Biochemistry.stats.items.emergency.value'),
                  label: t('Biochemistry.stats.items.emergency.label')
                }
              ]
            },
            team: {
              title: t('Biochemistry.team.title'),
              members: [
                {
                  name: t('Biochemistry.team.members.drPriya.name'),
                  role: t('Biochemistry.team.members.drPriya.role'),
                  credentials: t('Biochemistry.team.members.drPriya.credentials'),
                  image: '/doctors/dr-priya-singh.webp',
                  specialty: t('Biochemistry.team.members.drPriya.specialty')
                }
              ]
            },
            facilities: {
              title: t('Biochemistry.facilities.title'),
              description: t('Biochemistry.facilities.description'),
              features: [
                t('Biochemistry.facilities.features.0'),
                t('Biochemistry.facilities.features.1'),
                t('Biochemistry.facilities.features.2'),
                t('Biochemistry.facilities.features.3'),
                t('Biochemistry.facilities.features.4')
              ],
              image: '/biochemistry-lab.webp'
            },
            research: {
              title: t('Biochemistry.research.title'),
              items: [
                {
                  title: t('Biochemistry.research.items.cardiacMarkers.title'),
                  content: t('Biochemistry.research.items.cardiacMarkers.content'),
                  icon: 'heart-pulse'
                },
                {
                  title: t('Biochemistry.research.items.diabetesMonitoring.title'),
                  content: t('Biochemistry.research.items.diabetesMonitoring.content'),
                  icon: 'vial'
                },
                {
                  title: t('Biochemistry.research.items.automation.title'),
                  content: t('Biochemistry.research.items.automation.content'),
                  icon: 'cpu'
                }
              ]
            },
            testimonials: {
              title: t('Biochemistry.testimonials.title'),
              items: [
                {
                  quote: t('Biochemistry.testimonials.items.rakesh.quote'),
                  author: t('Biochemistry.testimonials.items.rakesh.author'),
                  image: '/fallback-image.webp'
                },
                {
                  quote: t('Biochemistry.testimonials.items.anita.quote'),
                  author: t('Biochemistry.testimonials.items.anita.author'),
                  image: '/fallback-image.webp'
                }
              ]
            },
            cta: {
              title: t('Biochemistry.cta.title'),
              subtitle: t('Biochemistry.cta.subtitle'),
              buttons: [
                {
                  text: t('Biochemistry.cta.buttons.requestTests.text'),
                  isPrimary: true
                },
                {
                  text: t('Biochemistry.cta.buttons.viewTestPrep.text'),
                  isPrimary: false
                }
              ]
            }
          },
          {
            id: 'pain-and-palliative-care',
            index: 20,
            name: t('PainAndPalliativeCare.name'),
            slug: 'pain-and-palliative-care',
            heroImage: '/department/pain-and-palliative-care.jpeg',
            bannerImage: '/department/pain-and-palliative-care-banner.jpeg',
            heroTitle: t('PainAndPalliativeCare.heroTitle'),
            heroSubtitle: t('PainAndPalliativeCare.heroSubtitle'),
            isFeatured: true,
            themeBgClass: 'bg-gradient-to-br from-purple-50 via-white to-indigo-50', // Unique Purple/Indigo
            overview: {
              title: "Our Pain & Palliative Care Approach",
              description: [
                "Pain & Palliative Care focuses on comfort and quality of life."
              ],
              additionalSections: [
                {
                  title: "We help patients with:",
                  items: [
                    "Chronic pain",
                    "Cancer-related pain",
                    "Emotional and family support"
                  ]
                },
                {
                  title: "Our approach:",
                  items: [
                    "Pain control",
                    "Emotional care",
                    "Dignified support"
                  ]
                }
              ]
            },
            treatments: {
              title: t('PainAndPalliativeCare.treatments.title'),
              items: [
                {
                  title: t('PainAndPalliativeCare.treatments.items.chronicPain.title'),
                  description: t('PainAndPalliativeCare.treatments.items.chronicPain.description')
                },
                {
                  title: t('PainAndPalliativeCare.treatments.items.symptomControl.title'),
                  description: t('PainAndPalliativeCare.treatments.items.symptomControl.description')
                },
                {
                  title: t('PainAndPalliativeCare.treatments.items.endOfLife.title'),
                  description: t('PainAndPalliativeCare.treatments.items.endOfLife.description')
                }
              ]
            },
            stats: {
              title: t('PainAndPalliativeCare.stats.title'),
              items: [
                {
                  value: t('PainAndPalliativeCare.stats.items.improved.value'),
                  label: t('PainAndPalliativeCare.stats.items.improved.label')
                },
                {
                  value: t('PainAndPalliativeCare.stats.items.onCall.value'),
                  label: t('PainAndPalliativeCare.stats.items.onCall.label')
                },
                {
                  value: t('PainAndPalliativeCare.stats.items.satisfaction.value'),
                  label: t('PainAndPalliativeCare.stats.items.satisfaction.label')
                },
                {
                  value: t('PainAndPalliativeCare.stats.items.protocols.value'),
                  label: t('PainAndPalliativeCare.stats.items.protocols.label')
                }
              ]
            },
            team: {
              title: t('PainAndPalliativeCare.team.title'),
              members: [
                {
                  name: t('PainAndPalliativeCare.team.members.drAnjali.name'),
                  role: t('PainAndPalliativeCare.team.members.drAnjali.role'),
                  credentials: t('PainAndPalliativeCare.team.members.drAnjali.credentials'),
                  image: '/doctors/dr-anjali-verma.webp',
                  specialty: t('PainAndPalliativeCare.team.members.drAnjali.specialty')
                },
                {
                  name: t('PainAndPalliativeCare.team.members.drRajiv.name'),
                  role: t('PainAndPalliativeCare.team.members.drRajiv.role'),
                  credentials: t('PainAndPalliativeCare.team.members.drRajiv.credentials'),
                  image: '/doctors/dr-rajiv-khanna.webp',
                  specialty: t('PainAndPalliativeCare.team.members.drRajiv.specialty')
                }
              ]
            },
            facilities: {
              title: t('PainAndPalliativeCare.facilities.title'),
              description: t('PainAndPalliativeCare.facilities.description'),
              features: [
                t('PainAndPalliativeCare.facilities.features.0'),
                t('PainAndPalliativeCare.facilities.features.1'),
                t('PainAndPalliativeCare.facilities.features.2'),
                t('PainAndPalliativeCare.facilities.features.3'),
                t('PainAndPalliativeCare.facilities.features.4')
              ],
              image: '/fallback-image.webp'
            },
            research: {
              title: t('PainAndPalliativeCare.research.title'),
              items: [
                {
                  title: t('PainAndPalliativeCare.research.items.novelAnalgesics.title'),
                  content: t('PainAndPalliativeCare.research.items.novelAnalgesics.content'),
                  icon: 'flask'
                },
                {
                  title: t('PainAndPalliativeCare.research.items.qualityOfLife.title'),
                  content: t('PainAndPalliativeCare.research.items.qualityOfLife.content'),
                  icon: 'chart-line'
                },
                {
                  title: t('PainAndPalliativeCare.research.items.interventionalTechniques.title'),
                  content: t('PainAndPalliativeCare.research.items.interventionalTechniques.content'),
                  icon: 'microscope'
                }
              ]
            },
            testimonials: {
              title: t('PainAndPalliativeCare.testimonials.title'),
              items: [
                {
                  quote: t('PainAndPalliativeCare.testimonials.items.vikram.quote'),
                  author: t('PainAndPalliativeCare.testimonials.items.vikram.author'),
                  image: '/fallback-image.webp'
                },
                {
                  quote: t('PainAndPalliativeCare.testimonials.items.priya.quote'),
                  author: t('PainAndPalliativeCare.testimonials.items.priya.author'),
                  image: '/fallback-image.webp'
                }
              ]
            },
            cta: {
              title: t('PainAndPalliativeCare.cta.title'),
              subtitle: t('PainAndPalliativeCare.cta.subtitle'),
              buttons: [
                {
                  text: t('PainAndPalliativeCare.cta.buttons.schedule.text'),
                  isPrimary: true
                },
                {
                  text: t('PainAndPalliativeCare.cta.buttons.learn.text'),
                  isPrimary: false
                }
              ]
            }
          }
    ]

    return departmentData
}