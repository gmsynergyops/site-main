import { useTranslations } from "next-intl";

export const useGalleryItems = () => {
  const t = useTranslations("homepage.Gallery.items");

  const galleryItems = [
    {
      id: 1,
      type: "image",
      title: t("1.title"),
      category: t("1.category"),
      image: "/media/media_g_0.jpg",
    },
    {
      id: 2,
      type: "image",
      title: t("2.title"),
      category: t("2.category"),
      image: "/media/media_g_1.jpg",
    },
    {
      id: 3,
      type: "image",
      title: t("3.title"),
      category: t("3.category"),
      image: "/media/media_g_2.jpg",
    },
    {
      id: 4,
      type: "image",
      title: t("4.title"),
      category: t("4.category"),
      image: "/media/media_g_3.jpg",
    },
    {
      id: 5,
      type: "image",
      title: t("5.title"),
      category: t("5.category"),
      image: "/media/media_g_4.jpg",
    },
    {
      id: 6,
      type: "image",
      title: t("6.title"),
      category: t("6.category"),
      image: "/media/media_g_5.jpg",
    },
  ];

  return galleryItems;
};
