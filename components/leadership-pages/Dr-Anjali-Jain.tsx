// components/leadership-pages/Dr-Alok-Tiwari.tsx
"use client"
import { useTranslations } from 'next-intl';
import LeadershipPage from '../Modules/discover-synergy/leadership/LeadershipPage';
import { LeaderPageProps } from '@/types';


export default function DrAnjaliJainPage() {
  const tAnjali = useTranslations('LeadershipPage.anjaliJain');
  const props: LeaderPageProps = {
    name: tAnjali('name'),
    role: tAnjali('role'),
    description: tAnjali('description'),
    image: "/leaders/doc-anjali-jain.webp",
    customFirstHeading: tAnjali('customFirstHeading'),
    theirStory: tAnjali.raw('theirStory'),
    customSecondHeading: tAnjali('customSecondHeading'),
    secondImage: "/leaders/doc-anjali-jain-2.jpg",
    secondSectionDescription: tAnjali.raw('secondSectionDescription'),
    thirdImage: "/leaders/doc-anjali-jain-3.webp",
    thirdSectionDescription: tAnjali.raw('thirdSectionDescription'),
    fourthSectionDescription:tAnjali.raw('fourthSectionDescription'),
    fifthSectionDescription: tAnjali('fifthSectionDescription'),
    journeyHeading: tAnjali('journeyHeading'),
    videoModalForJourney: {
        image: "/mission-horizontal.webp",
        videoUrl: "/videos/testimonials/vid.mp4",
    },
}
  return <LeadershipPage {...props} />;
}
