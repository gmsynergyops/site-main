// pages/AdmissionDischarge.tsx
"use client";

import PageLayout from '@/components/global/PageLayout';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { useInView } from 'react-intersection-observer';
import { CONTACT_INFO } from '@/data/contactData';
import { useTranslations } from 'next-intl';

const AdmissionDischarge = () => {
  const t = useTranslations("admissionDischargePage");
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      title: t("features.admission.title"),
      description: t("features.admission.description"),
      icon: "🏥",
    },
    {
      title: t("features.discharge.title"),
      description: t("features.discharge.description"),
      icon: "📋",
    },
    {
      title: t("features.bed.title"),
      description: t("features.bed.description"),
      icon: "🛏️",
    },
  ];

  return (
    <PageLayout title={t("title")}>
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100 hover:border-synergy-pink transition-all"
          >
            <div className="text-4xl mb-4 text-synergy-blue">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: sectionInView ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 bg-linear-to-r from-synergy-pink to-fuchsia-500 p-8 rounded-xl text-white"
      >
        <h2 className="text-2xl font-bold mb-4">{t("support.title")}</h2>
        <p className="mb-4">{t("support.description")}</p>
        <Link href={`tel:${CONTACT_INFO.phoneNumbers.admissionDesk}`} className={cn("bg-white text-indigo-800 px-6 py-2 rounded-lg font-medium hover:bg-indigo-50 transition-colors", buttonVariants({variant: "default", size:"default"}))}>
          {t("support.button")}
        </Link>
      </motion.div>
    </PageLayout>
  );
};

export default AdmissionDischarge;
