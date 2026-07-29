// components/leadership-pages/Dr-Alok-Tiwari.tsx
"use client"
import { useTranslations } from 'next-intl';
import LeadershipPage from '../Modules/discover-synergy/leadership/LeadershipPage';
import { LeaderPageProps } from '@/types';


export default function DrSaurabhMishraPage() {
  const tSaurabh = useTranslations('LeadershipPage.saurabhMishra');
  const props: LeaderPageProps = {
    name: tSaurabh('name'),
    role: tSaurabh('role'),
    description: tSaurabh('description'),
    image: "/leaders/doc-saurabh-mishra.jpg",
    customFirstHeading: tSaurabh('customFirstHeading'),
    theirStory: tSaurabh.raw('theirStory'),
    customSecondHeading: tSaurabh('customSecondHeading'),
    secondImage: "/leaders/doc-saurabh-mishra-2.jpg",
    secondSectionDescription: tSaurabh.raw('secondSectionDescription'),
    thirdImage: "/leaders/doc-saurabh-mishra-3.jpg",
    thirdSectionDescription: tSaurabh.raw('thirdSectionDescription'),
    fourthSectionDescription:tSaurabh.raw('fourthSectionDescription'),
    fifthSectionDescription: tSaurabh('fifthSectionDescription'),
    journeyHeading: tSaurabh('journeyHeading'),
    videoModalForJourney: {
        image: "/mission-horizontal.webp",
        videoUrl: "/videos/testimonials/vid.mp4",
    },
}
  return <LeadershipPage {...props} />;
}
