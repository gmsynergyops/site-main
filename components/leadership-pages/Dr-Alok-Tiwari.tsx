// components/leadership-pages/Dr-Alok-Tiwari.tsx
"use client"
import { useTranslations } from 'next-intl';
import LeadershipPage from '../Modules/discover-synergy/leadership/LeadershipPage';
import { LeaderPageProps } from '@/types';


export default function DrAlokTiwariPage() {
  const tAlok = useTranslations('LeadershipPage.alokTiwari');
  const props: LeaderPageProps = {
    name: tAlok('name'),
    role: tAlok('role'),
    description: tAlok('description'),
    image: "/leaders/doc-alok-tiwari.webp",
    customFirstHeading: tAlok('customFirstHeading'),
    theirStory: tAlok.raw('theirStory'),
    customSecondHeading: tAlok('customSecondHeading'),
    secondImage: "/leaders/doc-alok-tiwari-3.jpg",
    secondSectionDescription: tAlok.raw('secondSectionDescription'),
    thirdImage: "/leaders/doc-alok-tiwari-2.webp",
    thirdSectionDescription: tAlok.raw('thirdSectionDescription'),
    fourthSectionDescription:tAlok.raw('fourthSectionDescription'),
    fifthSectionDescription: tAlok('fifthSectionDescription'),
    journeyHeading: tAlok('journeyHeading'),
    videoModalForJourney: {
        image: "/mission-horizontal.webp",
        videoUrl: "/videos/testimonials/vid.mp4",
    },
}
  return <LeadershipPage {...props} />;
}
