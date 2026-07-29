import { useTranslations } from "next-intl";

    // Awards data
  export const useAwards =() => {
    const t = useTranslations("TheSynergyStory.RestSections.AwardsSection.AwardsData")
    const awards = [
        {
            year: "2023",
            title:  t('1.title'),
            description: t('1.description')
        },
        {
            year: "2022",
            title:  t('2.title'),
            description: t('2.description')
        },
        {
            year: "2021",
            title:  t('3.title'),
            description: t('3.description')
        },
        {
            year: "2020",
            title:  t('4.title'),
            description: t('4.description')
        }
    ];

    return awards
  }

    // Milestones data
export const useMilestones = () => {
    const t = useTranslations("TheSynergyStory.RestSections.MilestonesSection.MilestonesData")
    const milestones = [
        {
            year: "2019",
            title: t('1.title'),
            description: t('1.description')
        },
        {
            year: "2018",
            title: t('2.title'),
            description: t('2.description')
        },
        {
            year: "2017",
            title: t('3.title'),
            description: t('3.description')
        },
        {
            year: "2016",
            title: t('4.title'),
            description: t('4.description')
        }
    ];

    return milestones;
}

    // Day at Synergy timeline
export const useDailySchedule = () => {
    const t = useTranslations("TheSynergyStory.RestSections.DayAtSynergySection.DailyScheduleData")
    const c = useTranslations("TheSynergyStory.RestSections.DayAtSynergySection.DailyScheduleCards")

    const cards = [
        { icon: "👨‍⚕️", color: "blue", title: c('1.title'), description: c('1.description') },
        { icon: "❤️", color: "green", title: c('2.title'), description: c('2.description') },
        { icon: "🔬", color: "purple", title: c('3.title'), description: c('3.description') }
    ]

    const dailySchedule = [
        {
            time: "6:00 AM",
            activity: t('1.activity'),
            description: t('1.description')
        },
        {
            time: "8:00 AM",
            activity: t('2.activity'),
            description: t('2.description')
        },
        {
            time: "10:00 AM",
            activity: t('3.activity'),
            description: t('3.description')
        },
        {
            time: "1:00 PM",
            activity: t('4.activity'),
            description: t('4.description')
        },
        {
            time: "3:00 PM",
            activity: t('5.activity'),
            description: t('5.description')
        },
        {
            time: "6:00 PM",
            activity: t('6.activity'),
            description: t('6.description')
        }
    ];

    return { dailySchedule, cards };
}
