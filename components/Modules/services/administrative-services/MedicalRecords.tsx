"use client";
// pages/MedicalRecords.tsx
import PageLayout from '@/components/global/PageLayout';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { useInView } from 'react-intersection-observer';
import { CONTACT_INFO } from '@/data/contactData';
import { useTranslations } from 'next-intl';

const MedicalRecords = () => {
  const t = useTranslations("medicalRecordsPage");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: t("services.records.title"),
      description: t("services.records.description"),
      icon: "📄",
    },
    {
      title: t("services.certificates.title"),
      description: t("services.certificates.description"),
      icon: "📜",
    },
    {
      title: t("services.authorization.title"),
      description: t("services.authorization.description"),
      icon: "✍️",
    },
  ];

  return (
    <PageLayout title={t("title")}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: inView ? 0 : -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-6 rounded-xl shadow-md border border-indigo-100 mb-8"
        >
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">{t("secure.title")}</h2>
          <p className="text-gray-600">
            {t("secure.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-indigo-50"
            >
              <div className="text-3xl mb-4 text-synergy-blue">{service.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 bg-linear-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white p-8 rounded-xl shadow-xl border border-indigo-700/50 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 text-white">
              <span>📋</span> {t("desk.title")}
            </h3>
            <p className="text-indigo-100 mb-6 max-w-3xl leading-relaxed">
              {t("desk.description")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-lg border border-white/10">
                <div className="font-semibold text-muted text-sm mb-1">{t("desk.idTitle")}</div>
                <div className="text-xs text-gray-200">{t("desk.idDesc")}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-lg border border-white/10">
                <div className="font-semibold text-muted text-sm mb-1">{t("desk.timeTitle")}</div>
                <div className="text-xs text-gray-200">{t("desk.timeDesc")}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xs p-4 rounded-lg border border-white/10">
                <div className="font-semibold text-muted text-sm mb-1">{t("desk.thirdPartyTitle")}</div>
                <div className="text-xs text-gray-200">{t("desk.thirdPartyDesc")}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link
                href="/contact"
                className="bg-synergy-pink text-white px-6 py-3 rounded-lg font-medium hover:bg-fuchsia-600 transition-colors text-center shadow-md inline-flex items-center justify-center gap-2"
              >
                <span>📍</span> {t("desk.directionsButton")}
              </Link>
              <a
                href={`tel:${CONTACT_INFO.phoneNumbers.admissionDesk}`}
                className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors text-center shadow-md inline-flex items-center justify-center gap-2"
              >
                <span>📞</span> {t("desk.callButton")}
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default MedicalRecords;
