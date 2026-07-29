import { TestimonialCardProps } from "@/types";
import { LuRibbon } from "react-icons/lu";
import { useTranslations } from "next-intl";

export const useHospitalHighlights = () => {
    const t = useTranslations('hospitalHighlights');

    const hospitalHighlights: TestimonialCardProps[] = [
        {
            titleNumber: t('patientsTreated.number'),
            titleText: t('patientsTreated.title'),
            description: t('patientsTreated.description'),
            imgSrc: "👩🏻‍⚕️",
            imgAlt: t('patientsTreated.title')
        },
        {
            titleNumber: t('successfulSurgeries.number'),
            titleText: t('successfulSurgeries.title'),
            description: t('successfulSurgeries.description'),
            imgSrc: "🪡",
            imgAlt: t('successfulSurgeries.title')
        },
        {
            titleNumber: t('departmentsOfExcellence.number'),
            titleText: t('departmentsOfExcellence.title'),
            description: t('departmentsOfExcellence.description'),
            imgSrc: "🏥",
            imgAlt: t('departmentsOfExcellence.title')
        },
        {
            titleNumber: t('cancerCasesTreated.number'),
            titleText: t('cancerCasesTreated.title'),
            description: t('cancerCasesTreated.description'),
            imgSrc: <LuRibbon className="stroke-1 stroke-[#c885ee]" />,
            imgAlt: t('cancerCasesTreated.title')
        },
        {
            titleNumber: t('diagnosesPerformed.number'),
            titleText: t('diagnosesPerformed.title'),
            description: t('diagnosesPerformed.description'),
            imgSrc: "🩺",
            imgAlt: t('diagnosesPerformed.title')
        },
        {
            titleNumber: t('livesSaved.number'),
            titleText: t('livesSaved.title'),
            description: t('livesSaved.description'),
            imgSrc: "❤️",
            imgAlt: t('livesSaved.title')
        }
    ];

    return hospitalHighlights;
};
