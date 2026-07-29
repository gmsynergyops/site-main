import { useTranslations } from "next-intl";

export const useGalleryItems = () => {
  const t = useTranslations('homepage.Gallery.items');

  const galleryItems = [
        {
            id: 1,
            type: 'image',
            title: 'Big news for the people of Ayodhya!',
            category: 'Events',
            image: '/media/media_g_0.jpg'
        },
        {
            id: 2,
            type: 'image',
            title: 'Save time, get the right advice, start tele consultation',
            category: 'Facilities',
            image: '/media/media_g_1.jpg'
        },
        {
            id: 3,
            type: 'image',
            title: 'World Cancer Day Awareness Program ',
            category: 'Events',
            image: '/media/media_g_2.jpg'
        },
        {
            id: 4,
            type: 'image',
            title: 'Famous Synergy Super Speciality Hospital now in Siwan',
            category: 'Facilities',
            image: '/media/media_g_3.jpg'
        },
        {
            id: 5,
            type: 'image',
            title: 'Wishing everyone a Happy & Healthy new year',
            category: 'Events',
            image: '/media/media_g_4.jpg'
        }, // <--- Ye comma add kar dein
        {
            id: 6,
            type: 'image',
            title: 'Is your cough not stopping ?',
            category: 'Communities',
            image: '/media/media_g_5.jpg'
        }
    ]
  
  return galleryItems;
};
